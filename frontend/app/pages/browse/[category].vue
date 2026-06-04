<script setup lang="ts">
import { fromMovieCard, fromTvCard, fromTrending } from '~/utils/adapters'
import type { PagedResponse, MovieCard, TvCard, TrendingItem, Media } from '~/types/api'
import type { Media as MediaType } from '~/data/placeholder'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

const route = useRoute()
const category = computed(() => route.params.category as string)

const knownCategories = ['trending', 'new', 'top-rated', 'movie', 'series', 'all', 'upcoming', 'airing-today', 'on-the-air', 'tv-top-rated']

const genreSlugToName = (slug: string) => slug.replace(/-/g, ' ')

const meta = computed(() => {
  const key = category.value
  if (knownCategories.includes(key)) {
    return {
      title: t(`browse.cat.${key}.title`),
      description: t(`browse.cat.${key}.desc`),
    }
  }
  const name = genreSlugToName(key)
  return { title: name.replace(/\b\w/g, c => c.toUpperCase()), description: `${name} titles` }
})

useHead({ title: computed(() => `${meta.value.title} — Streamly`) })
useSeoMeta({
  ogTitle: computed(() => `${meta.value.title} — Streamly`),
  description: computed(() => meta.value.description ? `${meta.value.description} on Streamly` : 'Browse content on Streamly'),
  ogDescription: computed(() => meta.value.description ? `${meta.value.description} on Streamly` : 'Browse content on Streamly'),
  ogImage: '/og-default.jpg',
  twitterCard: 'summary_large_image',
})

const config = useRuntimeConfig()
const base = config.public.apiBase as string

const tvCategories = new Set(['series', 'airing-today', 'on-the-air', 'tv-top-rated'])

function buildUrl(cat: string, page: number): string {
  const p = `page=${page}`
  if (cat === 'trending' || cat === 'all') return `/trending?type=all&window=week&${p}`
  if (cat === 'new') return `/movies/now-playing?${p}`
  if (cat === 'top-rated') return `/movies/top-rated?${p}`
  if (cat === 'movie') return `/movies/popular?${p}`
  if (cat === 'upcoming') return `/movies/upcoming?${p}`
  if (cat === 'series') return `/tv/popular?${p}`
  if (cat === 'airing-today') return `/tv/airing-today?${p}`
  if (cat === 'on-the-air') return `/tv/on-the-air?${p}`
  if (cat === 'tv-top-rated') return `/tv/top-rated?${p}`
  return `/discover/movies?genre=${encodeURIComponent(genreSlugToName(cat))}&${p}`
}

function buildUrl2(cat: string, page: number): string | null {
  if (!knownCategories.includes(cat)) return `/discover/tv?genre=${encodeURIComponent(genreSlugToName(cat))}&page=${page}`
  return null
}

function adaptRaw(cat: string, data: any): MediaType[] {
  if (!data?.results) return []
  if (cat === 'trending' || cat === 'all') return data.results.filter((t: any) => t.mediaType !== 'person').map(fromTrending)
  if (tvCategories.has(cat)) return data.results.map((t: any) => fromTvCard(t))
  return data.results.map((t: any) => fromMovieCard(t))
}

const allItems = ref<MediaType[]>([])
const page1 = ref(1)
const page2 = ref(1)
const totalPages1 = ref(1)
const totalPages2 = ref(1)
const loading = ref(false)

async function fetchPage(reset = true) {
  if (reset) {
    allItems.value = []
    page1.value = 1
    page2.value = 1
  }
  loading.value = true
  const cat = category.value
  try {
    const [res1] = await Promise.all([
      $fetch<{ status: string; data: PagedResponse<any> }>(buildUrl(cat, page1.value), { baseURL: base }),
    ])
    totalPages1.value = res1.data.totalPages ?? 1
    const items1 = adaptRaw(cat, res1.data)

    let items2: MediaType[] = []
    const url2 = buildUrl2(cat, page2.value)
    if (url2) {
      const res2 = await $fetch<{ status: string; data: PagedResponse<any> }>(url2, { baseURL: base })
      totalPages2.value = res2.data.totalPages ?? 1
      items2 = (res2.data.results ?? []).map((t: any) => fromTvCard(t))
    }

    allItems.value = reset ? [...items1, ...items2] : [...allItems.value, ...items1, ...items2]
  }
  finally { loading.value = false }
}

await fetchPage()

watch(category, () => fetchPage())

const hasMore = computed(() => {
  const u2 = buildUrl2(category.value, 1)
  if (u2) return page1.value < totalPages1.value || page2.value < totalPages2.value
  return page1.value < totalPages1.value
})

async function loadMore() {
  const u2 = buildUrl2(category.value, 1)
  if (page1.value < totalPages1.value) page1.value++
  if (u2 && page2.value < totalPages2.value) page2.value++
  await fetchPage(false)
}

const pageReady = usePageReady()
const sortBy = ref('default')

const sorted = computed(() => {
  if (sortBy.value === 'rating') return [...allItems.value].sort((a, b) => b.rating - a.rating)
  if (sortBy.value === 'year') return [...allItems.value].sort((a, b) => b.year - a.year)
  if (sortBy.value === 'title') return [...allItems.value].sort((a, b) => a.title.localeCompare(b.title))
  return allItems.value
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- Header -->
    <div class="mb-10" v-gsap.from="{ opacity: 0, y: -20, duration: 0.5 }">
      <div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <NuxtLink to="/" class="hover:text-foreground transition-colors">{{ t('common.home') }}</NuxtLink>
        <span>/</span>
        <span class="text-foreground">{{ meta.title }}</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">{{ meta.title }}</h1>
          <p v-if="meta.description" class="text-muted-foreground mt-1">{{ meta.description }}</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm text-muted-foreground">{{ allItems.length }} {{ $t('browse.titles') }}</span>
          <a-select
            v-model:value="sortBy"
            :options="[
              { value: 'default', label: $t('browse.default') },
              { value: 'rating', label: $t('browse.byRating') },
              { value: 'year', label: $t('browse.byYear') },
              { value: 'title', label: $t('browse.byTitle') },
            ]"
            class="w-32"
          />
        </div>
      </div>
    </div>

    <!-- Skeleton -->
    <div v-if="!pageReady" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <MediaCardSkeleton v-for="i in 24" :key="i" />
    </div>

    <!-- Grid -->
    <div
      v-else-if="sorted.length"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.6 }"
    >
      <MediaCard v-for="item in sorted" :key="`${item.type}-${item.id}`" :media="item" fluid />
    </div>

    <!-- Load more -->
    <div v-if="hasMore" class="flex justify-center mt-10">
      <a-button size="large" :loading="loading" @click="loadMore">{{ $t('common.loadMore') }}</a-button>
    </div>

    <!-- Empty -->
    <div v-else-if="pageReady && !sorted.length" class="text-center py-20">
      <a-empty :description="$t('browse.noTitles')" />
      <NuxtLink to="/"><a-button class="mt-4">{{ $t('common.back') }}</a-button></NuxtLink>
    </div>
  </div>
</template>
