<script setup lang="ts">
import { fromMovieCard, fromTvCard } from '~/utils/adapters'
import type { PagedResponse, MovieCard, TvCard, Genre } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

useHead({ title: 'Discover — Streamly' })
useSeoMeta({
  ogTitle: 'Discover — Streamly',
  description: 'Find your next favourite movie or series. Filter by genre, year, type, and rating.',
  ogDescription: 'Find your next favourite movie or series. Filter by genre, year, type, and rating.',
  twitterCard: 'summary_large_image',
})

const typeFilter = ref<'all' | 'movie' | 'series'>('all')
const selectedGenre = ref('')
const minYear = ref<number | undefined>(undefined)
const maxYear = ref<number | undefined>(undefined)
const minRating = ref(0)
const sortBy = ref<'popular' | 'rating' | 'newest' | 'oldest'>('popular')
const page = ref(1)

const currentYear = new Date().getFullYear()
const yearOptions = computed(() => [
  { value: undefined, label: t('discover.anyYear') },
  ...Array.from({ length: currentYear - 1950 + 1 }, (_, i) => {
    const y = currentYear - i
    return { value: y, label: String(y) }
  }),
])

const { data: movieGenresRaw } = await useApiFetch<Genre[]>('/genres/movies')
const { data: tvGenresRaw } = await useApiFetch<Genre[]>('/genres/tv')

const genres = computed(() => {
  const names = new Set([
    ...(movieGenresRaw.value ?? []).map(g => g.name),
    ...(tvGenresRaw.value ?? []).map(g => g.name),
  ])
  return [...names].sort()
})

const sortByApiMap: Record<string, string> = {
  popular: 'popular',
  rating: 'rating',
  newest: 'newest',
  oldest: 'oldest',
}

function buildParams(p = 1) {
  const params = new URLSearchParams()
  if (selectedGenre.value) params.set('genre', selectedGenre.value)
  if (minYear.value) params.set('yearFrom', String(minYear.value))
  if (maxYear.value) params.set('yearTo', String(maxYear.value))
  if (minRating.value) params.set('ratingMin', String(minRating.value))
  params.set('sortBy', sortByApiMap[sortBy.value] ?? 'popular')
  params.set('page', String(p))
  return params.toString()
}

const allMovies = ref<ReturnType<typeof fromMovieCard>[]>([])
const allTv = ref<ReturnType<typeof fromTvCard>[]>([])
const movieTotalPages = ref(1)
const tvTotalPages = ref(1)
const moviePage = ref(1)
const tvPage = ref(1)
const loading = ref(false)

async function fetchResults(reset = true) {
  if (reset) {
    allMovies.value = []
    allTv.value = []
    moviePage.value = 1
    tvPage.value = 1
  }
  loading.value = true
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  try {
    if (typeFilter.value !== 'series') {
      const res = await $fetch<{ status: string; data: PagedResponse<MovieCard> }>(
        `/discover/movies?${buildParams(moviePage.value)}`,
        { baseURL: base },
      )
      const data = res.data
      movieTotalPages.value = data.totalPages
      allMovies.value = reset
        ? data.results.map(fromMovieCard)
        : [...allMovies.value, ...data.results.map(fromMovieCard)]
    }
    if (typeFilter.value !== 'movie') {
      const res = await $fetch<{ status: string; data: PagedResponse<TvCard> }>(
        `/discover/tv?${buildParams(tvPage.value)}`,
        { baseURL: base },
      )
      const data = res.data
      tvTotalPages.value = data.totalPages
      allTv.value = reset
        ? data.results.map(fromTvCard)
        : [...allTv.value, ...data.results.map(fromTvCard)]
    }
  }
  finally { loading.value = false }
}

await fetchResults()

const results = computed(() => {
  const combined = [...allMovies.value, ...allTv.value]
  if (sortBy.value === 'rating') return [...combined].sort((a, b) => b.rating - a.rating)
  return combined
})

const hasMore = computed(() => {
  if (typeFilter.value === 'movie') return moviePage.value < movieTotalPages.value
  if (typeFilter.value === 'series') return tvPage.value < tvTotalPages.value
  return moviePage.value < movieTotalPages.value || tvPage.value < tvTotalPages.value
})

async function loadMore() {
  if (typeFilter.value !== 'series' && moviePage.value < movieTotalPages.value) moviePage.value++
  if (typeFilter.value !== 'movie' && tvPage.value < tvTotalPages.value) tvPage.value++
  await fetchResults(false)
}

watch([typeFilter, selectedGenre, minYear, maxYear, minRating, sortBy], () => fetchResults())

function reset() {
  typeFilter.value = 'all'
  selectedGenre.value = ''
  minYear.value = undefined
  maxYear.value = undefined
  minRating.value = 0
  sortBy.value = 'popular'
}

const ratingOptions = computed(() => [
  { value: 0, label: t('discover.anyRating') },
  { value: 7, label: '7+' },
  { value: 7.5, label: '7.5+' },
  { value: 8, label: '8+' },
  { value: 8.5, label: '8.5+' },
  { value: 9, label: '9+' },
])
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- Header -->
    <div class="mb-10" v-gsap.from="{ opacity: 0, y: -20, duration: 0.5 }">
      <div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <NuxtLink to="/" class="hover:text-foreground transition-colors">{{ t('common.home') }}</NuxtLink>
        <span>/</span>
        <span class="text-foreground">{{ t('discover.title') }}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">{{ $t('discover.title') }}</h1>
      <p class="text-muted-foreground mt-1">{{ $t('discover.subtitle') }}</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar filters -->
      <aside class="w-full lg:w-64 flex-shrink-0">
        <div
          class="bg-card border border-border/50 rounded-2xl p-5 space-y-5 sticky top-20"
          v-gsap.from="{ opacity: 0, x: -20, duration: 0.5, delay: 0.1 }"
        >
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-bold uppercase tracking-widest text-muted-foreground">{{ $t('discover.filters') }}</h2>
            <button class="text-xs text-primary hover:opacity-70 transition-opacity font-medium" @click="reset">{{ $t('common.reset') }}</button>
          </div>

          <!-- Type -->
          <div>
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">{{ $t('discover.type') }}</p>
            <div class="flex gap-1.5">
              <button
                v-for="opt in [{ value: 'all', label: $t('common.all') }, { value: 'movie', label: $t('common.movie') }, { value: 'series', label: $t('common.series') }]"
                :key="opt.value"
                :class="[
                  'flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150',
                  typeFilter === opt.value
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground',
                ]"
                @click="typeFilter = opt.value as any"
              >{{ opt.label }}</button>
            </div>
          </div>


          <!-- Sort -->
          <div>
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">{{ $t('discover.sortBy') }}</p>
            <div class="grid grid-cols-2 gap-1.5">
              <button
                v-for="opt in [{ value: 'popular', label: $t('discover.trending') }, { value: 'rating', label: $t('discover.topRated') }, { value: 'newest', label: $t('discover.newest') }, { value: 'oldest', label: $t('discover.oldest') }]"
                :key="opt.value"
                :class="[
                  'py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150',
                  sortBy === opt.value
                    ? 'bg-primary text-white border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground',
                ]"
                @click="sortBy = opt.value as any"
              >{{ opt.label }}</button>
            </div>
          </div>


          <!-- Genres -->
          <div>
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">{{ $t('discover.genre') }}</p>
            <div class="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-0.5">
              <button
                v-for="genre in genres"
                :key="genre"
                :class="[
                  'px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150',
                  selectedGenre === genre
                    ? 'bg-primary text-white border-primary'
                    : 'bg-secondary/50 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground',
                ]"
                @click="selectedGenre = selectedGenre === genre ? '' : genre"
              >{{ genre }}</button>
            </div>
          </div>


          <!-- Year range -->
          <div>
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">{{ $t('discover.year') }}</p>
            <div class="flex items-center gap-2">
              <a-select v-model:value="minYear" size="small" class="flex-1" :options="yearOptions" placeholder="From" />
              <span class="text-muted-foreground text-xs">–</span>
              <a-select v-model:value="maxYear" size="small" class="flex-1" :options="yearOptions" placeholder="To" />
            </div>
          </div>


          <!-- Min rating -->
          <div>
            <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">{{ $t('discover.minRating') }}</p>
            <div class="grid grid-cols-4 gap-1">
              <button
                v-for="opt in ratingOptions.filter(o => o.value > 0)"
                :key="opt.value"
                :class="[
                  'py-1 rounded-lg text-xs font-semibold border transition-all duration-150',
                  minRating === opt.value
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-secondary/50 text-muted-foreground border-border/50 hover:border-amber-500/50 hover:text-foreground',
                ]"
                @click="minRating = minRating === opt.value ? 0 : opt.value"
              >{{ opt.label }}</button>
            </div>
          </div>
        </div>
      </aside>

      <!-- Results -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between mb-6" v-gsap.from="{ opacity: 0, y: 10, duration: 0.4 }">
          <p class="text-sm text-muted-foreground">
            <span class="font-semibold text-foreground">{{ results.length }}</span> {{ $t('discover.titlesFound', results.length) }}
          </p>
        </div>

        <!-- Skeleton -->
        <div v-if="loading && results.length === 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          <MediaCardSkeleton v-for="i in 15" :key="i" />
        </div>

        <!-- Grid -->
        <div
          v-else-if="results.length"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
          v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.5 }"
        >
          <MediaCard v-for="item in results" :key="`${item.type}-${item.id}`" :media="item" fluid />
        </div>

        <!-- Empty -->
        <div v-else class="text-center py-20">
          <a-empty description="No titles match your filters" />
          <a-button class="mt-4" @click="reset">Reset filters</a-button>
        </div>

        <!-- Load more -->
        <div v-if="hasMore" class="flex justify-center mt-10">
          <a-button size="large" :loading="loading" @click="loadMore">{{ $t('common.loadMore') }}</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
