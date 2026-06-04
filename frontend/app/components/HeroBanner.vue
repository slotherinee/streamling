<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { Media } from '~/data/placeholder'
import { useWatchlistStore } from '~/stores/watchlist'
import { useHaptic } from '~/composables/useHaptic'
import { fromTrending } from '~/utils/adapters'
import type { PagedResponse, TrendingItem } from '~/types/api'

const { t } = useI18n()

const { data: trendingData } = await useApiFetch<PagedResponse<TrendingItem>>('/trending?type=all&window=day')

const featuredList = computed<Media[]>(() =>
  (trendingData.value?.results ?? [])
    .filter(t => t.mediaType !== 'person')
    .slice(0, 5)
    .map(fromTrending),
)

const currentIndex = ref(0)
const current = computed(() => featuredList.value[currentIndex.value])
const isPaused = ref(false)
const slideProgress = ref(0)

const liveText = ref('')
watch(currentIndex, (i) => {
  if (featuredList.value[i]) {
    liveText.value = `${featuredList.value[i].title}, slide ${i + 1} of ${featuredList.value.length}`
  }
})

const AUTOPLAY_MS = 10000
const TICK_MS = 50
let ticker: ReturnType<typeof setInterval> | null = null

onMounted(() => startTicker())
onUnmounted(() => stopTicker())

function startTicker() {
  stopTicker()
  ticker = setInterval(() => {
    if (isPaused.value || !featuredList.value.length) return
    slideProgress.value += (TICK_MS / AUTOPLAY_MS) * 100
    if (slideProgress.value >= 100) {
      slideProgress.value = 0
      currentIndex.value = (currentIndex.value + 1) % featuredList.value.length
    }
  }, TICK_MS)
}

function stopTicker() {
  if (ticker) { clearInterval(ticker); ticker = null }
}

function goTo(index: number) { currentIndex.value = index; slideProgress.value = 0 }
function goPrev() { goTo((currentIndex.value - 1 + featuredList.value.length) % featuredList.value.length) }
function goNext() { goTo((currentIndex.value + 1) % featuredList.value.length) }

const watchlistStore = useWatchlistStore()
const haptic = useHaptic()

async function toggleWatchlist() {
  if (!current.value) return
  const item = current.value
  const result = await watchlistStore.toggle(item)
  if (result === 'added') {
    haptic.success()
    message.success(t('media.addedWatchlist', { title: item.title }))
  }
  else {
    haptic.selection()
    message.info(t('media.removedWatchlist', { title: item.title }))
  }
}

function formatEpisodeInfo(media: Media) {
  if (media.type === 'series') {
    const n = media.seasons ?? 1
    return `${media.seasons ?? '?'} ${t('media.seasons_count', n)}`
  }
  return media.duration || t('common.movie')
}

const detailPath = (m: Media) => m.type === 'series' ? `/tv/${m.id}` : `/movie/${m.id}`

const overlayOpacity = ref(0.25)

async function detectBrightness(src: string) {
  if (!import.meta.client) return
  try {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; img.src = src })
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size; canvas.height = size
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0, size, size)
    const pixels = ctx.getImageData(0, 0, size, size).data
    let sum = 0
    for (let i = 0; i < pixels.length; i += 4)
      sum += pixels[i] * 0.299 + pixels[i + 1] * 0.587 + pixels[i + 2] * 0.114
    const avg = sum / (size * size) // 0 = black, 255 = white
    overlayOpacity.value = avg < 50 ? 0.05 : avg < 100 ? 0.15 : avg < 155 ? 0.28 : avg < 200 ? 0.42 : 0.55
  }
  catch { overlayOpacity.value = 0.25 }
}

watch(() => current.value?.backdrop, (src) => { if (src) detectBrightness(src) }, { immediate: true })
</script>

<template>
  <section
    v-if="current"
    role="region"
    aria-label="Featured content"
    class="relative w-full h-[85vh] min-h-[560px] overflow-hidden"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div aria-live="polite" aria-atomic="true" class="sr-only">{{ liveText }}</div>

    <!-- Background -->
    <Transition name="hero-fade" mode="out-in">
      <div :key="current.id" class="absolute inset-0">
        <NuxtImg
          :src="current.backdrop"
          :alt="current.title"
          class="w-full h-full object-cover"
          width="1920"
          height="1080"
          format="webp"
          loading="eager"
          preload
        />
        <div class="absolute inset-0 bg-black transition-opacity duration-700" :style="{ opacity: overlayOpacity }" />
        <div class="absolute inset-0 gradient-to-r-black" />
        <div class="absolute bottom-0 left-0 right-0 h-48 gradient-to-t-black" />
      </div>
    </Transition>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-end pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl w-full">
        <div class="flex items-center gap-3 mb-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.7, delay: 0.2 }">
          <a-tag color="cyan" class="!border-0 !text-xs !font-semibold !px-3 !py-1 !rounded-full">
            <template #icon>
              <svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </template>
            {{ current.rating.toFixed(1) }} · {{ t('media.featured') }}
          </a-tag>
          <span class="text-xs font-medium text-white/70 uppercase tracking-wider">
            {{ current.type === 'series' ? t('common.series') : t('common.movie') }}
          </span>
        </div>

        <Transition name="hero-slide" mode="out-in">
          <h1
            :key="current.id + '-title'"
            class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight line-clamp-2"
          >
            {{ current.title }}
          </h1>
        </Transition>

        <div class="flex items-center gap-3 text-sm text-white/70 mb-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.6, delay: 0.4 }">
          <span>{{ current.year }}</span>
          <span class="w-1 h-1 rounded-full bg-white/40" />
          <span>{{ formatEpisodeInfo(current) }}</span>
        </div>

        <p class="text-sm sm:text-base text-white/70 leading-relaxed mb-8 line-clamp-2 sm:line-clamp-3 max-w-xl" v-gsap.from="{ opacity: 0, y: 20, duration: 0.6, delay: 0.5 }">
          {{ current.description }}
        </p>

        <div class="flex items-center gap-3" v-gsap.from="{ opacity: 0, y: 20, duration: 0.6, delay: 0.6 }">
          <NuxtLink :to="detailPath(current)">
            <a-button type="primary" size="large" class="!font-semibold hover:scale-105 transition-transform">
              <template #icon>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </template>
              {{ t('media.watchNow') }}
            </a-button>
          </NuxtLink>
          <NuxtLink :to="detailPath(current)">
            <a-button size="large" ghost class="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50 !font-semibold hover:scale-105 transition-transform">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </template>
              {{ t('media.moreInfo') }}
            </a-button>
          </NuxtLink>
          <button
            :aria-label="watchlistStore.has(current?.id) ? `Remove ${current?.title} from watchlist` : `Add ${current?.title} to watchlist`"
            :class="[
              'w-10 h-10 rounded-full border backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110',
              watchlistStore.has(current?.id)
                ? 'bg-primary border-primary text-white'
                : 'bg-white/10 border-white/30 text-white hover:bg-white/20',
            ]"
            @click="toggleWatchlist"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="watchlistStore.has(current?.id)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Prev / Next zones -->
    <button
      class="absolute left-0 top-0 h-full w-16 sm:w-24 z-10 flex items-center justify-start pl-3 sm:pl-5 group opacity-0 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:opacity-100"
      aria-label="Previous slide"
      @click="goPrev"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      <div class="relative w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </button>
    <button
      class="absolute right-0 top-0 h-full w-16 sm:w-24 z-10 flex items-center justify-end pr-3 sm:pr-5 group opacity-0 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:opacity-100"
      aria-label="Next slide"
      @click="goNext"
    >
      <div class="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
      <div class="relative w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>

    <!-- Slide indicators -->
    <div class="absolute bottom-6 right-8 z-10 flex items-center gap-2">
      <button
        v-for="(item, i) in featuredList"
        :key="item.id"
        :aria-label="`Go to slide ${i + 1}: ${item.title}`"
        :aria-current="i === currentIndex ? 'true' : undefined"
        :class="[
          'transition-all duration-300 rounded-full overflow-hidden',
          i === currentIndex ? 'w-8 h-2 bg-white/20' : 'w-2 h-2 bg-white/30 hover:bg-white/60',
        ]"
        @click="goTo(i)"
      >
        <span
          v-if="i === currentIndex"
          class="block h-full bg-primary rounded-full origin-left"
          :style="{
            transform: `scaleX(${slideProgress / 100})`,
            transition: isPaused ? 'none' : `transform ${TICK_MS}ms linear`,
          }"
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active { transition: opacity 1s ease; }
.hero-fade-enter-from,
.hero-fade-leave-to { opacity: 0; }

.hero-slide-enter-active,
.hero-slide-leave-active { transition: all 0.4s ease; }
.hero-slide-enter-from { opacity: 0; transform: translateY(10px); }
.hero-slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
