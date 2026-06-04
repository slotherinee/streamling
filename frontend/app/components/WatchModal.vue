<script setup lang="ts">
import type { Media } from '~/data/placeholder'
import { useProgressStore } from '~/stores/progress'

const props = defineProps<{
  open: boolean
  media: Media
  initialSeason?: number
  initialEpisode?: number
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isMobile = useIsMobile()
const progressStore = useProgressStore()

const season = ref(1)
const episode = ref(1)

watch(() => props.open, (open) => {
  if (open && props.media.type === 'series') {
    if (props.initialSeason) season.value = props.initialSeason
    if (props.initialEpisode) episode.value = props.initialEpisode
    if (!props.initialSeason && !props.initialEpisode) {
      const last = progressStore.getLastEpisode(props.media.tmdbId)
      if (last) { season.value = last.season; episode.value = last.episode }
    }
  }
}, { immediate: true })

const seasonOptions = computed(() =>
  Array.from({ length: props.media.seasons || 1 }, (_, i) => ({
    value: i + 1,
    label: `Season ${i + 1}`,
  }))
)

const today = new Date().toISOString().slice(0, 10)

const { data: seasonData } = useApiFetch<{ episodes: { episodeNumber: number; airDate: string | null }[] }>(
  () => props.media.type === 'series' ? `/tv/${props.media.tmdbId}/season/${season.value}` : null,
)

const episodeOptions = computed(() => {
  if (props.media.type !== 'series') return []
  const episodes = seasonData.value?.episodes
  if (episodes?.length) {
    return episodes
      .filter(e => e.airDate && e.airDate <= today)
      .map(e => ({ value: e.episodeNumber, label: `Episode ${e.episodeNumber}` }))
  }
  // fallback while loading
  const count = props.media.episodes && props.media.seasons
    ? Math.ceil(props.media.episodes / props.media.seasons)
    : 1
  return Array.from({ length: count }, (_, i) => ({ value: i + 1, label: `Episode ${i + 1}` }))
})

watch(() => season.value, () => { episode.value = 1 })

const iframeSrc = computed(() => {
  const base = props.media.type === 'series'
    ? `https://vidlink.pro/tv/${props.media.tmdbId}/${season.value}/${episode.value}`
    : `https://vidlink.pro/movie/${props.media.tmdbId}`
  return `${base}?primaryColor=1677ff&title=false&autoplay=false&icons=vid`
})

function close() {
  emit('update:open', false)
}
</script>

<template>
  <!-- ── Mobile: bottom drawer, auto-height ── -->
  <a-drawer
    v-if="isMobile"
    :open="open"
    placement="bottom"
    height="auto"
    :closable="false"
    :destroy-on-close="true"
    :mask-closable="true"
    class="watch-drawer"
    @close="close"
  >
    <div>
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span class="text-sm font-semibold text-white truncate">{{ media.title }}</span>
          <span v-if="media.type === 'series'" class="text-xs text-white/40 flex-shrink-0">S{{ season }} · E{{ episode }}</span>
        </div>
        <button aria-label="Close player" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors" @click="close">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <!-- Series controls: full-width row on mobile -->
      <div v-if="media.type === 'series'" class="flex gap-2 px-4 py-2.5 border-b border-white/10">
        <a-select v-model:value="season" :options="seasonOptions" size="small" class="flex-1" popup-class-name="watch-select" />
        <a-select v-model:value="episode" :options="episodeOptions" size="small" class="flex-1" popup-class-name="watch-select" />
      </div>

      <!-- Player -->
      <div class="relative w-full" style="aspect-ratio: 16/9">
        <iframe :title="`Watch ${media.title}`" :src="iframeSrc" class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture" />
      </div>
    </div>
  </a-drawer>

  <!-- ── Desktop: centered modal ── -->
  <a-modal
    v-else
    :open="open"
    :footer="null"
    :closable="false"
    :destroy-on-close="true"
    :mask-closable="true"
    centered
    width="min(92vw, 1100px)"
    class="watch-modal"
    @cancel="close"
  >
    <div class="bg-[#0a0a0a] rounded-xl overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span class="text-sm font-semibold text-white truncate">{{ media.title }}</span>
          <span v-if="media.type === 'series'" class="text-xs text-white/40 flex-shrink-0">S{{ season }} · E{{ episode }}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <template v-if="media.type === 'series'">
            <a-select v-model:value="season" :options="seasonOptions" size="small" class="!w-28" popup-class-name="watch-select" />
            <a-select v-model:value="episode" :options="episodeOptions" size="small" class="!w-28" popup-class-name="watch-select" />
          </template>
          <button aria-label="Close player" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors" @click="close">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

      <!-- Player -->
      <div class="relative w-full" style="aspect-ratio: 16/9">
        <iframe :title="`Watch ${media.title}`" :src="iframeSrc" class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture" />
      </div>
    </div>
  </a-modal>
</template>

<style>
.watch-modal .ant-modal-content {
  background: transparent !important;
  padding: 0 !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8) !important;
}
.watch-modal .ant-modal-body {
  padding: 0 !important;
}

.watch-drawer .ant-drawer-body {
  padding: 0 !important;
  background: #0a0a0a;
}
.watch-drawer .ant-drawer-content {
  background: #0a0a0a !important;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}
.watch-drawer .ant-drawer-content-wrapper {
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.7) !important;
}

.watch-select {
  background: #1a1a1a !important;
}
.watch-select .ant-select-item {
  color: rgba(255, 255, 255, 0.8) !important;
}
.watch-select .ant-select-item-option-selected {
  background: rgba(22, 119, 255, 0.2) !important;
}
</style>
