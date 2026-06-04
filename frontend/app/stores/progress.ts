import { defineStore } from 'pinia'
import { fromMovieCard, fromTvCard } from '~/utils/adapters'

export interface VidLinkEntry {
  id: number
  type: 'movie' | 'tv'
  title: string
  poster_path?: string
  backdrop_path?: string
  progress: { watched: number; duration: number }
  last_season_watched?: string
  last_episode_watched?: string
  last_updated?: number
  show_progress?: Record<string, {
    season: string
    episode: string
    progress: { watched: number; duration: number }
  }>
}

interface ApiProgressRecord {
  tmdbId: number
  mediaType: 'movie' | 'tv'
  percent: number
  season: number | null
  episode: number | null
  updatedAt: string
}

interface PaginatedResponse<T> {
  items: T[]
  total: number
  pages: number
}

export const useProgressStore = defineStore('progress', () => {
  const data = ref<Record<string, VidLinkEntry>>({})
  const authStore = useAuthStore()
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  function _headers(): Record<string, string> {
    return authStore.accessToken ? { Authorization: `Bearer ${authStore.accessToken}` } : {}
  }

  /** Convert VidLinkEntry percent for use as API payload */
  function _toApiPayload(entry: VidLinkEntry) {
    const percent = entry.progress?.duration
      ? Math.min(100, Math.round((entry.progress.watched / entry.progress.duration) * 100))
      : 0
    return {
      tmdbId: entry.id,
      mediaType: entry.type,
      percent,
      season: entry.last_season_watched ? Number(entry.last_season_watched) : undefined,
      episode: entry.last_episode_watched ? Number(entry.last_episode_watched) : undefined,
    }
  }

  /** Sync a single entry to the API (fire-and-forget) */
  function _syncToApi(entry: VidLinkEntry) {
    if (!authStore.isLoggedIn) return
    $fetch('/progress', {
      baseURL: base,
      method: 'POST',
      body: _toApiPayload(entry),
      headers: _headers(),
    }).catch(() => {})
  }

  async function init() {
    if (!import.meta.client) return

    // Always load VidLink localStorage first (fast, has full media data)
    try {
      const saved = localStorage.getItem('vidLinkProgress')
      if (saved) data.value = JSON.parse(saved)
    }
    catch {}

    // Logged-in: merge API progress for items not in local cache (e.g. different device)
    if (authStore.isLoggedIn) {
      try {
        const res = await $fetch<{ status: string; data: PaginatedResponse<ApiProgressRecord> }>(
          '/progress?limit=50', { baseURL: base, headers: _headers() },
        )
        const records = (res?.data?.items ?? []).filter(r => r.percent > 0 && r.percent < 95)

        const missing = records.filter(r => !data.value[String(r.tmdbId)])
        if (missing.length === 0) return

        // Fetch media details for items missing from local cache
        const results = await Promise.allSettled(
          missing.map(async (r) => {
            const path = r.mediaType === 'tv' ? `/tv/${r.tmdbId}` : `/movies/${r.tmdbId}`
            const mRes = await $fetch<{ status: string; data: any }>(path, { baseURL: base })
            const raw = mRes?.data
            if (!raw) return null
            const media = r.mediaType === 'tv' ? fromTvCard(raw) : fromMovieCard(raw)
            // Create VidLinkEntry from API data
            const watched = r.percent
            const entry: VidLinkEntry = {
              id: r.tmdbId,
              type: r.mediaType,
              title: media.title,
              poster_path: raw.poster ?? '',
              backdrop_path: raw.backdrop ?? '',
              progress: { watched, duration: 100 }, // percent-based
              last_season_watched: r.season ? String(r.season) : undefined,
              last_episode_watched: r.episode ? String(r.episode) : undefined,
              last_updated: new Date(r.updatedAt).getTime(),
            }
            return { key: String(r.tmdbId), entry }
          }),
        )

        for (const result of results) {
          if (result.status === 'fulfilled' && result.value) {
            data.value[result.value.key] = result.value.entry
          }
        }
        localStorage.setItem('vidLinkProgress', JSON.stringify(data.value))
      }
      catch {}
    }
  }

  function handleMessage(event: MessageEvent) {
    if (event.origin !== 'https://vidlink.pro') return
    if (event.data?.type === 'MEDIA_DATA') {
      const prev = data.value
      data.value = event.data.data
      if (import.meta.client)
        localStorage.setItem('vidLinkProgress', JSON.stringify(event.data.data))

      // Sync changed entries to API
      if (authStore.isLoggedIn) {
        const newEntries = Object.values(data.value as Record<string, VidLinkEntry>)
        for (const entry of newEntries) {
          const prevEntry = prev[String(entry.id)]
          const prevPct = prevEntry?.progress?.duration
            ? Math.round((prevEntry.progress.watched / prevEntry.progress.duration) * 100)
            : 0
          const newPct = entry.progress?.duration
            ? Math.round((entry.progress.watched / entry.progress.duration) * 100)
            : 0
          if (newPct !== prevPct) _syncToApi(entry)
        }
      }
    }
  }

  function getPercent(tmdbId: number): number {
    const entry = data.value[String(tmdbId)]
    if (!entry?.progress?.duration) return 0
    return Math.min(100, Math.round((entry.progress.watched / entry.progress.duration) * 100))
  }

  function getLastEpisode(tmdbId: number): { season: number; episode: number } | null {
    const entry = data.value[String(tmdbId)]
    if (!entry || entry.type !== 'tv') return null
    return {
      season: Number(entry.last_season_watched) || 1,
      episode: Number(entry.last_episode_watched) || 1,
    }
  }

  const allInProgress = computed(() =>
    Object.values(data.value)
      .filter(e => e.progress?.watched > 0 && e.progress?.watched < e.progress?.duration * 0.95)
      .sort((a, b) => (b.last_updated || 0) - (a.last_updated || 0)),
  )

  // First 8 for homepage row
  const inProgress = computed(() => allInProgress.value.slice(0, 8))

  const progressPage = ref(1)
  const PROGRESS_PAGE_SIZE = 20

  const inProgressPaged = computed(() => allInProgress.value.slice(0, progressPage.value * PROGRESS_PAGE_SIZE))
  const progressHasMore = computed(() => inProgressPaged.value.length < allInProgress.value.length)

  function loadMoreProgress() {
    if (progressHasMore.value) progressPage.value++
  }

  function remove(tmdbId: number) {
    delete data.value[String(tmdbId)]
    if (import.meta.client)
      localStorage.setItem('vidLinkProgress', JSON.stringify(data.value))

    // Mark as 0% in API (no DELETE endpoint)
    if (authStore.isLoggedIn) {
      $fetch('/progress', {
        baseURL: base,
        method: 'POST',
        body: { tmdbId, mediaType: 'movie', percent: 0 },
        headers: _headers(),
      }).catch(() => {})
      $fetch('/progress', {
        baseURL: base,
        method: 'POST',
        body: { tmdbId, mediaType: 'tv', percent: 0 },
        headers: _headers(),
      }).catch(() => {})
    }
  }

  return { data, init, handleMessage, getPercent, getLastEpisode, inProgress, inProgressPaged, progressHasMore, loadMoreProgress, remove }
})
