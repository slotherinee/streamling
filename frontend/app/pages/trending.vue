<script setup lang="ts">
import { fromTrending } from '~/utils/adapters'
import type { PagedResponse, TrendingItem, PersonCard } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

useHead({ title: 'Trending — Streamly' })
useSeoMeta({
  ogTitle: 'Trending Now — Streamly',
  description: 'What everyone is watching right now. Top trending movies, series, and people.',
  ogDescription: 'What everyone is watching right now. Top trending movies, series, and people.',
  twitterCard: 'summary_large_image',
})

const route = useRoute()
const router = useRouter()
const VALID_TABS = ['all', 'movies', 'tv', 'people']
const activeTab = computed({
  get: () => VALID_TABS.includes(route.query.tab as string) ? route.query.tab as string : 'all',
  set: (val: string) => router.replace({ query: { ...route.query, tab: val } }),
})
const timeWindow = ref<'day' | 'week'>('day')
const pageReady = usePageReady()

const { data: allRaw } = await useApiFetch<PagedResponse<TrendingItem>>(
  () => `/trending?type=all&window=${timeWindow.value}`,
)
const { data: moviesRaw } = await useApiFetch<PagedResponse<TrendingItem>>(
  () => `/trending?type=movie&window=${timeWindow.value}`,
)
const { data: tvRaw } = await useApiFetch<PagedResponse<TrendingItem>>(
  () => `/trending?type=tv&window=${timeWindow.value}`,
)
const { data: peopleRaw } = await useApiFetch<PagedResponse<PersonCard>>('/people/popular')

const trendingAll = computed(() =>
  (allRaw.value?.results ?? []).filter(t => t.mediaType !== 'person').map(fromTrending),
)
const trendingMovies = computed(() => (moviesRaw.value?.results ?? []).map(fromTrending))
const trendingTV = computed(() => (tvRaw.value?.results ?? []).map(fromTrending))
const trendingPeople = computed(() => (peopleRaw.value?.results ?? []).slice(0, 8))

const currentList = computed(() => {
  if (activeTab.value === 'movies') return trendingMovies.value
  if (activeTab.value === 'tv') return trendingTV.value
  return trendingAll.value
})

const tabCounts = computed(() => ({
  all: trendingAll.value.length,
  movies: trendingMovies.value.length,
  tv: trendingTV.value.length,
  people: trendingPeople.value.length,
}))
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- Header -->
    <div class="mb-10" v-gsap.from="{ opacity: 0, y: -20, duration: 0.5 }">
      <div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <NuxtLink to="/" class="hover:text-foreground transition-colors">{{ t('common.home') }}</NuxtLink>
        <span>/</span>
        <span class="text-foreground">{{ t('trending.title') }}</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">{{ $t('trending.title') }}</h1>
          </div>
        </div>
        <a-radio-group v-model:value="timeWindow" button-style="solid" size="small">
          <a-radio-button value="day">{{ $t('trending.today') }}</a-radio-button>
          <a-radio-button value="week">{{ $t('trending.thisWeek') }}</a-radio-button>
        </a-radio-group>
      </div>
      <p class="text-muted-foreground">{{ $t('trending.subtitle') }}</p>
    </div>

    <!-- Tabs -->
    <a-tabs v-model:activeKey="activeTab" class="mb-8">

      <a-tab-pane key="all" :tab="`${$t('common.all')} (${tabCounts.all})`">
        <div v-if="!pageReady" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4">
          <MediaCardSkeleton v-for="i in 8" :key="i" />
        </div>
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
          <MediaCard v-for="item in trendingAll" :key="item.id" :media="item" fluid />
        </div>
      </a-tab-pane>

      <a-tab-pane key="movies" :tab="`${$t('common.movies')} (${tabCounts.movies})`">
        <div v-if="!pageReady" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4">
          <MediaCardSkeleton v-for="i in 6" :key="i" />
        </div>
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
          <MediaCard v-for="item in trendingMovies" :key="item.id" :media="item" fluid />
        </div>
      </a-tab-pane>

      <a-tab-pane key="tv" :tab="`${$t('trending.tv')} (${tabCounts.tv})`">
        <div v-if="!pageReady" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4">
          <MediaCardSkeleton v-for="i in 6" :key="i" />
        </div>
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
          <MediaCard v-for="item in trendingTV" :key="item.id" :media="item" fluid />
        </div>
      </a-tab-pane>

      <a-tab-pane key="people" :tab="`${$t('trending.people')} (${tabCounts.people})`">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
          <NuxtLink
            v-for="(person, i) in trendingPeople"
            :key="person.id"
            :to="`/person/${person.id}`"
            class="group block text-center"
            v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.4, delay: i * 0.06 }"
          >
            <div class="relative mx-auto w-full aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 mb-3">
              <NuxtImg
                :src="person.profile ?? ''"
                :alt="person.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" format="webp" width="342" height="342"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate">{{ person.name }}</h3>
            <p class="text-xs text-muted-foreground mt-0.5 truncate">{{ person.knownForDepartment }}</p>
          </NuxtLink>
        </div>
      </a-tab-pane>

    </a-tabs>
  </div>
</template>
