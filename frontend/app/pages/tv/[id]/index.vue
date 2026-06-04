<script setup lang="ts">
import { message } from 'ant-design-vue'
import { fromTvShow, fromTvCard } from '~/utils/adapters'
import { useWatchlistStore } from '~/stores/watchlist'
import { useProgressStore } from '~/stores/progress'
import { useHaptic } from '~/composables/useHaptic'
import type { TvShow } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { data: tvRaw, error } = await useApiFetch<TvShow>(() => `/tv/${id.value}`)

if (error.value) throw createError({ statusCode: 404, message: 'Series not found' })

const media = computed(() => tvRaw.value ? fromTvShow(tvRaw.value) : null)

useHead({ title: computed(() => `${media.value?.title ?? 'Series'} — Streamly`) })
useSeoMeta({
  ogTitle: computed(() => `${media.value?.title ?? 'Series'} — Streamly`),
  description: computed(() => media.value?.description ?? 'Watch on Streamly'),
  ogDescription: computed(() => media.value?.description ?? 'Watch on Streamly'),
  ogImage: computed(() => media.value?.backdrop ?? '/og-default.jpg'),
  ogType: 'video.tv_show',
  twitterCard: 'summary_large_image',
})

const similar = computed(() => (tvRaw.value?.similar ?? []).map(fromTvCard))

const watchlistStore = useWatchlistStore()
const progressStore = useProgressStore()
const haptic = useHaptic()

const router = useRouter()
const VALID_TABS = ['about', 'seasons', 'cast', 'trailer', 'similar']
const activeTab = computed({
  get: () => {
    const t = route.query.tab as string
    return VALID_TABS.includes(t) ? t : 'about'
  },
  set: (val: string) => router.replace({ query: { ...route.query, tab: val } }),
})
const watchOpen = ref(false)
const lastEpisode = computed(() => media.value ? progressStore.getLastEpisode(media.value.tmdbId) : null)

async function toggleWatchlist() {
  if (!media.value) return
  const result = await watchlistStore.toggle(media.value)
  if (result === 'added') {
    haptic.success()
    message.success(t('media.addedWatchlist', { title: media.value.title }))
  }
  else {
    haptic.selection()
    message.info(t('media.removedWatchlist', { title: media.value.title }))
  }
}

const scrolledDown = ref(false)
onMounted(() => {
  const handler = () => { scrolledDown.value = window.scrollY > 300 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<template>
  <div v-if="media">
    <!-- Sticky back button -->
    <Transition name="sticky-back">
      <div v-if="scrolledDown" class="fixed top-16 left-0 z-40 px-4 sm:px-6 lg:px-8 pt-3">
        <NuxtLink to="/">
          <a-button type="default" size="small" class="!bg-background/90 !backdrop-blur-md !border-border/60 !text-foreground hover:!border-primary/50 shadow-lg">
            <template #icon>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </template>
            {{ $t('common.back') }}
          </a-button>
        </NuxtLink>
      </div>
    </Transition>

    <!-- Backdrop hero -->
    <div class="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
      <NuxtImg
        :src="media.backdrop" :alt="media.title"
        class="w-full h-full object-cover"
        width="1920" height="1080" format="webp" loading="eager" preload
        v-gsap.from="{ scale: 1.05, duration: 1.2, ease: 'power2.out' }"
      />
      <div class="absolute inset-0 bg-black/50" />
      <div class="absolute inset-0 gradient-to-r-black" />
      <div class="absolute bottom-0 left-0 right-0 h-64 gradient-to-t-black" />

      <div class="absolute top-20 inset-x-0 z-10 px-4 sm:px-6 lg:px-8" v-gsap.from="{ opacity: 0, x: -20, duration: 0.5, delay: 0.3 }">
        <div class="">
          <NuxtLink to="/">
            <a-button type="text" class="!text-white/80 hover:!text-white hover:!bg-white/10">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </template>
              Back
            </a-button>
          </NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-8 pb-8" v-gsap.from="{ opacity: 0, y: 40, duration: 0.8, delay: 0.2 }">
        <div class="flex flex-col sm:flex-row items-end sm:items-start gap-6">
          <div class="hidden sm:block w-36 flex-shrink-0">
            <NuxtImg
              :src="media.poster" :alt="media.title"
              class="w-full aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl"
              width="144" height="216" format="webp"
            />
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <a-tag class="!border-border !text-muted-foreground">{{ $t('common.series') }}</a-tag>
              <div class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span class="text-sm text-amber-400 font-semibold">{{ media.rating.toFixed(1) }}</span>
              </div>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight">{{ media.title }}</h1>
            <div class="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-4">
              <span>{{ media.year }}</span>
              <span class="w-1 h-1 rounded-full bg-white/30" />
              <span>{{ media.seasons }} {{ $t('media.seasons_count', media.seasons ?? 1) }}</span>
              <span class="w-1 h-1 rounded-full bg-white/30" />
              <span>{{ media.episodes }} {{ $t('media.episodes_count', media.episodes ?? 1) }}</span>
              <span v-if="tvRaw?.status" class="w-1 h-1 rounded-full bg-white/30" />
              <span v-if="tvRaw?.status">{{ $t(`media.statusMap.${tvRaw.status}`, tvRaw.status) }}</span>
            </div>
            <p class="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-6 line-clamp-3">{{ media.description }}</p>
            <div class="flex items-center gap-3 flex-wrap">
              <a-button type="primary" size="large" class="!font-semibold" @click="watchOpen = true">
                <template #icon>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </template>
                {{ lastEpisode ? $t('media.continueS', { season: lastEpisode.season, episode: lastEpisode.episode }) : $t('media.watchNow') }}
              </a-button>
              <a-button
                v-if="media.trailerKey"
                size="large" ghost class="!border-white/20 !text-white hover:!bg-white/10"
                @click="activeTab = 'trailer'"
              >
                <template #icon>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </template>
                {{ $t('media.trailer') }}
              </a-button>
              <a-button
                size="large" ghost
                :class="watchlistStore.has(media.id) ? '!border-primary !text-primary hover:!bg-primary/10' : '!border-white/20 !text-white hover:!bg-white/10'"
                @click="toggleWatchlist"
              >
                <template #icon>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="watchlistStore.has(media.id)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </template>
                {{ watchlistStore.has(media.id) ? $t('media.inWatchlist') : $t('media.addWatchlist') }}
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="px-4 sm:px-8 py-10">
      <a-tabs v-model:activeKey="activeTab" :destroy-inactive-tab-pane="true">

        <a-tab-pane key="about" :tab="$t('media.about')">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
            <div class="lg:col-span-2 space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">{{ $t('media.synopsis') }}</h3>
                <p class="text-foreground/80 leading-relaxed">{{ media.description }}</p>
              </div>

              <a-divider />

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                <div>
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.year') }}</p>
                  <p class="text-sm font-medium">{{ media.year }}</p>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.seasons') }}</p>
                  <p class="text-sm font-medium">{{ media.seasons }}</p>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.episodes_count', media.episodes ?? 1) }}</p>
                  <p class="text-sm font-medium">{{ media.episodes }}</p>
                </div>
                <div v-if="tvRaw?.status">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.status') }}</p>
                  <p class="text-sm font-medium">{{ tvRaw.inProduction ? '🟢 ' : '' }}{{ $t(`media.statusMap.${tvRaw.status}`, tvRaw.status) }}</p>
                </div>
                <div v-if="tvRaw?.lastAirDate">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.lastAired') }}</p>
                  <p class="text-sm font-medium">{{ tvRaw.lastAirDate }}</p>
                </div>
                <div>
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.rating') }}</p>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span class="text-sm font-semibold text-amber-400">{{ media.rating.toFixed(1) }}</span>
                    <span class="text-xs text-muted-foreground">/10</span>
                    <span v-if="tvRaw?.voteCount" class="text-xs text-muted-foreground">({{ tvRaw.voteCount.toLocaleString() }})</span>
                  </div>
                </div>
                <div v-if="tvRaw?.originCountry?.length">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.country') }}</p>
                  <p class="text-sm font-medium">{{ tvRaw.originCountry.join(', ') }}</p>
                </div>
              </div>

              <!-- Next episode -->
              <div v-if="tvRaw?.nextEpisode" class="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p class="text-xs text-primary uppercase tracking-wider font-semibold mb-1">{{ $t('media.nextEpisode') }}</p>
                <p class="text-sm font-medium">S{{ tvRaw.nextEpisode.seasonNumber }}E{{ tvRaw.nextEpisode.episodeNumber }} — {{ tvRaw.nextEpisode.name }}</p>
                <p class="text-xs text-muted-foreground mt-0.5">{{ tvRaw.nextEpisode.airDate }}</p>
              </div>

              <!-- Creators -->
              <div v-if="tvRaw?.creators?.length">
                <p class="text-xs text-muted-foreground uppercase tracking-wider mb-2">{{ $t('media.creator') }}</p>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink
                    v-for="c in tvRaw.creators"
                    :key="c.personId"
                    :to="`/person/${c.personId}`"
                    class="text-sm font-medium hover:text-primary transition-colors"
                  >{{ c.name }}</NuxtLink>
                </div>
              </div>

              <!-- Networks -->
              <div v-if="tvRaw?.networks?.length">
                <p class="text-xs text-muted-foreground uppercase tracking-wider mb-3">{{ $t('media.network') }}</p>
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="net in tvRaw.networks"
                    :key="net.id"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50"
                  >
                    <NuxtImg
                      v-if="net.logo"
                      :src="net.logo"
                      :alt="net.name"
                      class="h-5 object-contain"
                      style="filter: invert(1) brightness(0.7)"
                      width="60" height="20" format="webp"
                    />
                    <span class="text-xs font-medium text-foreground/80">{{ net.name }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">{{ $t('media.genres') }}</h3>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink v-for="genre in media.genre" :key="genre" :to="`/browse/${genre.toLowerCase().replace(/ /g, '-')}`">
                    <a-tag class="cursor-pointer hover:!text-primary hover:!border-primary/50 transition-colors">{{ genre }}</a-tag>
                  </NuxtLink>
                </div>
              </div>
              <div v-if="tvRaw?.keywords?.length">
                <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">{{ $t('media.keywords') }}</h3>
                <div class="flex flex-wrap gap-2">
                  <a-tag v-for="kw in tvRaw.keywords.slice(0, 15)" :key="kw" class="!text-xs !text-muted-foreground">{{ kw }}</a-tag>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>

        <a-tab-pane key="seasons" :tab="`${$t('media.seasons')} (${media.seasons ?? 0})`">
          <div class="pt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
            <NuxtLink
              v-for="sp in (tvRaw?.seasonPosters ?? [])"
              :key="sp.seasonNumber"
              :to="`/tv/${id}/season/${sp.seasonNumber}`"
              class="group block rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-200"
            >
              <div class="relative aspect-[2/3] bg-secondary overflow-hidden">
                <NuxtImg
                  v-if="sp.poster"
                  :src="sp.poster"
                  :alt="`${$t('media.season')} ${sp.seasonNumber}`"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy" format="webp" width="200" height="300"
                />
                <div v-else class="w-full h-full flex items-center justify-center">
                  <span class="text-3xl font-extrabold text-primary/40">{{ sp.seasonNumber }}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div class="absolute bottom-0 left-0 right-0 px-3 pb-3">
                  <p class="text-sm font-semibold text-white group-hover:text-primary transition-colors">{{ $t('media.season') }} {{ sp.seasonNumber }}</p>
                </div>
              </div>
            </NuxtLink>
            <div v-if="!media.seasons" class="col-span-full text-center py-12 text-muted-foreground text-sm">
              {{ $t('media.seasonComingSoon') }}
            </div>
          </div>
        </a-tab-pane>

        <a-tab-pane key="cast" :tab="$t('media.cast')">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
            <template v-for="person in media.cast" :key="person.name">
              <NuxtLink
                v-if="person.personId"
                :to="`/person/${person.personId}`"
                class="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
              >
                <a-avatar :src="person.avatar" :size="48" />
                <div class="min-w-0">
                  <p class="text-sm font-semibold truncate">{{ person.name }}</p>
                  <p class="text-xs text-muted-foreground truncate mt-0.5">{{ person.role }}</p>
                </div>
              </NuxtLink>
              <div
                v-else
                class="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-200"
              >
                <a-avatar :src="person.avatar" :size="48" />
                <div class="min-w-0">
                  <p class="text-sm font-semibold truncate">{{ person.name }}</p>
                  <p class="text-xs text-muted-foreground truncate mt-0.5">{{ person.role }}</p>
                </div>
              </div>
            </template>
          </div>
        </a-tab-pane>

        <a-tab-pane v-if="media.trailerKey" key="trailer" :tab="$t('media.trailer')">
          <div class="pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
            <div class="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl" style="aspect-ratio: 16/9">
              <iframe
                :src="`https://www.youtube-nocookie.com/embed/${media.trailerKey}?rel=0&modestbranding=1`"
                :title="`${media.title} — Official Trailer`"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </a-tab-pane>

        <a-tab-pane key="similar" :tab="$t('media.moreLikeThis')">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
            <MediaCard v-for="item in similar" :key="item.id" :media="item" fluid />
          </div>
        </a-tab-pane>

      </a-tabs>
    </div>

    <WatchModal v-if="media" v-model:open="watchOpen" :media="media" />
  </div>
</template>

<style scoped>
.sticky-back-enter-active,
.sticky-back-leave-active { transition: all 0.2s ease; }
.sticky-back-enter-from,
.sticky-back-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
