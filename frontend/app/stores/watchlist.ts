import { defineStore } from 'pinia'
import type { Media } from '~/data/placeholder'
import { fromMovieCard, fromTvCard } from '~/utils/adapters'

interface WatchlistRecord {
  tmdbId: number
  mediaType: 'movie' | 'tv'
}

interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  pages: number
}

const PAGE_SIZE = 20

export const useWatchlistStore = defineStore('watchlist', () => {
  const items = ref<Media[]>([])
  const total = ref(0)
  const currentPage = ref(0)
  const hasMore = ref(false)
  const loading = ref(false)

  const authStore = useAuthStore()
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  function _headers(): Record<string, string> {
    return authStore.accessToken ? { Authorization: `Bearer ${authStore.accessToken}` } : {}
  }

  function _persist() {
    if (import.meta.client)
      localStorage.setItem('streamly_watchlist', JSON.stringify(items.value))
  }

  async function _fetchMedia(tmdbId: number, mediaType: 'movie' | 'tv'): Promise<Media | null> {
    try {
      const path = mediaType === 'tv' ? `/tv/${tmdbId}` : `/movies/${tmdbId}`
      const res = await $fetch<{ status: string; data: any }>(path, { baseURL: base })
      const raw = res?.data
      if (!raw) return null
      return mediaType === 'tv' ? fromTvCard(raw) : fromMovieCard(raw)
    }
    catch { return null }
  }

  async function _fetchPage(page: number, append = false) {
    loading.value = true
    try {
      const res = await $fetch<{ status: string; data: PaginatedResponse<WatchlistRecord> }>(
        `/watchlist?page=${page}&limit=${PAGE_SIZE}`,
        { baseURL: base, headers: _headers() },
      )
      const data = res?.data
      if (!data) return

      total.value = data.total
      currentPage.value = data.page
      hasMore.value = data.page < data.pages

      const results = await Promise.allSettled(
        data.items.map(r => _fetchMedia(r.tmdbId, r.mediaType)),
      )
      const fetched = results
        .filter((r): r is PromiseFulfilledResult<Media> => r.status === 'fulfilled' && r.value !== null)
        .map(r => r.value!)

      if (append) items.value.push(...fetched)
      else items.value = fetched
    }
    catch {}
    finally { loading.value = false }
  }

  async function init() {
    if (!import.meta.client) return

    if (authStore.isLoggedIn) {
      await _fetchPage(1)
    }
    else {
      try {
        const saved = localStorage.getItem('streamly_watchlist')
        if (saved) {
          items.value = JSON.parse(saved)
          total.value = items.value.length
        }
      }
      catch {}
    }
  }

  async function loadMore() {
    if (!hasMore.value || loading.value) return
    await _fetchPage(currentPage.value + 1, true)
  }

  async function toggle(media: Media): Promise<'added' | 'removed'> {
    if (authStore.isLoggedIn) {
      const wasIn = has(media.id)
      // optimistic
      if (wasIn) {
        items.value = items.value.filter(m => m.id !== media.id)
        total.value = Math.max(0, total.value - 1)
      }
      else {
        items.value.unshift(media)
        total.value++
      }

      try {
        const res = await $fetch<{ status: string; data: { action: 'added' | 'removed' } }>(
          '/watchlist',
          {
            baseURL: base,
            method: 'POST',
            body: { tmdbId: media.id, mediaType: media.type === 'series' ? 'tv' : 'movie' },
            headers: _headers(),
          },
        )
        return res?.data?.action ?? (wasIn ? 'removed' : 'added')
      }
      catch {
        // rollback
        if (wasIn) { items.value.unshift(media); total.value++ }
        else { items.value = items.value.filter(m => m.id !== media.id); total.value-- }
        return wasIn ? 'added' : 'removed'
      }
    }
    else {
      if (has(media.id)) {
        items.value = items.value.filter(m => m.id !== media.id)
        total.value = items.value.length
        _persist()
        return 'removed'
      }
      items.value.unshift(media)
      total.value = items.value.length
      _persist()
      return 'added'
    }
  }

  function has(id: number): boolean {
    return items.value.some(m => m.id === id)
  }

  return { items, total, hasMore, loading, init, loadMore, toggle, has }
})
