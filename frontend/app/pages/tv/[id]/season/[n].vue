<script setup lang="ts">
import { fromTvShow } from '~/utils/adapters'
import { useProgressStore } from '~/stores/progress'
import type { TvShow, Season } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

const route = useRoute()
const mediaId = computed(() => Number(route.params.id))
const seasonNumber = computed(() => Number(route.params.n))

const [{ data: tvRaw, error: tvError }, { data: season, error: seasonError }] = await Promise.all([
  useApiFetch<TvShow>(() => `/tv/${mediaId.value}`),
  useApiFetch<Season>(() => `/tv/${mediaId.value}/season/${seasonNumber.value}`),
])

if (tvError.value || seasonError.value) throw createError({ statusCode: 404, message: 'Season not found' })

const media = computed(() => tvRaw.value ? fromTvShow(tvRaw.value) : null)

useHead({ title: computed(() => `${media.value?.title ?? 'Series'} — ${season.value?.name ?? 'Season'} — Streamly`) })
useSeoMeta({
  ogTitle: computed(() => `${media.value?.title} ${season.value?.name} — Streamly`),
  description: computed(() => season.value?.overview ?? ''),
  ogDescription: computed(() => season.value?.overview ?? ''),
  ogImage: computed(() => media.value?.backdrop ?? '/og-default.jpg'),
  twitterCard: 'summary_large_image',
})

const progressStore = useProgressStore()
const watchOpen = ref(false)
const selectedEpisode = ref(1)
const selectedSeason = ref(seasonNumber.value)

function watchEpisode(episodeNumber: number) {
  selectedEpisode.value = episodeNumber
  selectedSeason.value = seasonNumber.value
  watchOpen.value = true
}

const today = new Date().toISOString().slice(0, 10)
const releasedEpisodes = computed(() =>
  (season.value?.episodes ?? []).filter(e => e.airDate && e.airDate <= today),
)

function formatDate(dateStr: string | null): string {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  catch { return dateStr }
}
</script>

<template>
  <div v-if="media && season" class="min-h-screen">
    <!-- Season hero -->
    <div class="relative w-full h-[45vh] min-h-[320px] overflow-hidden">
      <NuxtImg
        :src="media.backdrop" :alt="media.title"
        class="w-full h-full object-cover"
        width="1920" height="1080" format="webp" loading="eager"
        v-gsap.from="{ scale: 1.05, duration: 1.2, ease: 'power2.out' }"
      />
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute bottom-0 left-0 right-0 h-40 gradient-to-t-black" />

      <!-- Breadcrumb -->
      <div class="absolute top-20 inset-x-0 px-4 sm:px-6 lg:px-8" v-gsap.from="{ opacity: 0, x: -20, duration: 0.5, delay: 0.2 }">
        <div class="flex items-center gap-2 text-sm text-white/60">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span>
          <NuxtLink :to="`/tv/${mediaId}`" class="hover:text-white transition-colors">{{ media.title }}</NuxtLink>
          <span>/</span>
          <span class="text-white">{{ season.name }}</span>
        </div>
      </div>

      <!-- Season info -->
      <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8" v-gsap.from="{ opacity: 0, y: 30, duration: 0.7, delay: 0.1 }">
        <div class="flex items-end gap-6">
          <NuxtImg
            v-if="season.poster"
            :src="season.poster" :alt="season.name"
            class="hidden sm:block w-28 aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl flex-shrink-0"
            width="112" height="168" format="webp"
          />
          <div>
            <p class="text-white/60 text-sm mb-1">{{ media.title }}</p>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">{{ season.name }}</h1>
            <div class="flex items-center gap-3 text-sm text-white/60">
              <span>{{ releasedEpisodes.length }} {{ $t('season.episodes') }}</span>
              <span v-if="season.airDate" class="w-1 h-1 rounded-full bg-white/30" />
              <span v-if="season.airDate">{{ formatDate(season.airDate) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="px-4 sm:px-8 py-10">
      <!-- Overview -->
      <div v-if="season.overview" class="mb-10" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
        <p class="text-foreground/70 leading-relaxed max-w-3xl">{{ season.overview }}</p>
      </div>

      <!-- Season selector -->
      <div v-if="(media.seasons ?? 1) > 1" class="flex items-center gap-3 mb-8 flex-wrap">
        <span class="text-sm text-muted-foreground">{{ $t('season.jumpTo') }}</span>
        <div class="flex gap-2 flex-wrap">
          <NuxtLink v-for="n in (media.seasons ?? 1)" :key="n" :to="`/tv/${mediaId}/season/${n}`">
            <a-button :type="n === seasonNumber ? 'primary' : 'default'" size="small">S{{ n }}</a-button>
          </NuxtLink>
        </div>
      </div>

      <!-- Episodes -->
      <div class="space-y-3">
        <h2 class="text-lg font-bold mb-4" v-gsap.from="{ opacity: 0, y: 10, duration: 0.4 }">{{ $t('season.episodesTitle') }}</h2>
        <div
          v-for="episode in releasedEpisodes"
          :key="episode.episodeNumber"
          class="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/30 transition-all duration-200 group"
        >
          <!-- Still image -->
          <div class="relative w-40 sm:w-52 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
            <NuxtImg
              v-if="episode.still"
              :src="episode.still" :alt="episode.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy" format="webp" width="208" height="117"
            />
            <button
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30"
              :aria-label="`Watch ${episode.name}`"
              @click="watchEpisode(episode.episodeNumber)"
            >
              <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          <!-- Episode info -->
          <div class="flex-1 min-w-0 py-1">
            <div class="flex items-start justify-between gap-2 mb-1">
              <div>
                <span class="text-xs text-muted-foreground">{{ $t('season.episode') }} {{ episode.episodeNumber }}</span>
                <h3 class="font-semibold text-foreground leading-tight">{{ episode.name }}</h3>
              </div>
              <span v-if="episode.runtime" class="text-xs text-muted-foreground flex-shrink-0">{{ episode.runtime }}m</span>
            </div>
            <p v-if="episode.airDate" class="text-xs text-muted-foreground mb-2">{{ formatDate(episode.airDate) }}</p>
            <p class="text-sm text-foreground/70 line-clamp-2 leading-relaxed">{{ episode.overview }}</p>
          </div>

          <!-- Watch button (desktop) -->
          <div class="hidden sm:flex items-center flex-shrink-0">
            <a-button type="primary" ghost size="small" class="!opacity-0 group-hover:!opacity-100 transition-opacity" @click="watchEpisode(episode.episodeNumber)">
              {{ $t('season.watch') }}
            </a-button>
          </div>
        </div>
      </div>
    </div>

    <WatchModal
      v-if="media && watchOpen"
      v-model:open="watchOpen"
      :media="media"
      :initial-season="selectedSeason"
      :initial-episode="selectedEpisode"
    />
  </div>
</template>
