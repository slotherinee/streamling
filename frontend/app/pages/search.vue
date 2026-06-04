<script setup lang="ts">
import { fromSearchResult } from '~/utils/adapters'
import type { PagedResponse, SearchResult } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

const route = useRoute()
const router = useRouter()

// routeQuery is the source-of-truth for what's fetched — derived from URL
const routeQuery = computed(() => (route.query.q as string) || '')
// query is local v-model for the input
const query = ref(routeQuery.value)
watch(routeQuery, q => { query.value = q })

useHead({ title: computed(() => routeQuery.value ? `"${routeQuery.value}" — Streamly` : 'Search — Streamly') })

function handleSearch() {
  if (query.value.trim()) router.push(`/search?q=${encodeURIComponent(query.value.trim())}`)
}

const { data: resultsRaw, pending } = await useApiFetch<PagedResponse<SearchResult>>(
  () => routeQuery.value ? `/search?q=${encodeURIComponent(routeQuery.value)}` : '/search?q=__empty__',
)

const pageReady = usePageReady()
const sortBy = ref('relevance')
const filterType = ref('all')

const people = computed(() =>
  (resultsRaw.value?.results ?? []).filter(r => r.mediaType === 'person'),
)

const results = computed(() =>
  (resultsRaw.value?.results ?? []).filter(r => r.mediaType !== 'person').map(fromSearchResult),
)

const filtered = computed(() => {
  let list = results.value
  if (filterType.value === 'movie') list = list.filter(m => m.type === 'movie')
  if (filterType.value === 'series') list = list.filter(m => m.type === 'series')
  if (sortBy.value === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
  else if (sortBy.value === 'year') list = [...list].sort((a, b) => b.year - a.year)
  return list
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- Search bar -->
    <div class="max-w-2xl mx-auto mb-10" v-gsap.from="{ opacity: 0, y: -20, duration: 0.5 }">
      <h1 class="text-2xl font-bold text-center mb-6">
        {{ query ? `Results for "${query}"` : $t('search.title') }}
      </h1>
      <a-input-search
        v-model:value="query"
        :placeholder="$t('search.placeholder')"
        size="large"
        enter-button
        allow-clear
        @search="handleSearch"
      />
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-3 mb-8" v-gsap.onEnter.from="{ opacity: 0, y: 10, duration: 0.4 }">
      <div class="flex items-center gap-2">
        <span class="text-sm text-muted-foreground">{{ $t('search.type') }}:</span>
        <a-radio-group v-model:value="filterType" button-style="solid" size="small">
          <a-radio-button value="all">{{ $t('common.all') }}</a-radio-button>
          <a-radio-button value="movie">{{ $t('common.movies') }}</a-radio-button>
          <a-radio-button value="series">{{ $t('common.series') }}</a-radio-button>
        </a-radio-group>
      </div>
      <div class="flex items-center gap-2 ml-auto">
        <span class="text-sm text-muted-foreground">{{ $t('search.sort') }}:</span>
        <a-select v-model:value="sortBy" size="small" :options="[
          { value: 'relevance', label: $t('search.relevance') },
          { value: 'rating', label: $t('search.rating') },
          { value: 'year', label: $t('search.year') },
        ]" class="w-32" />
      </div>
    </div>

    <!-- Count -->
    <p v-if="!pending" class="text-sm text-muted-foreground mb-6" v-gsap.onEnter.from="{ opacity: 0, duration: 0.3 }">
      {{ filtered.length + (filterType === 'all' ? people.length : 0) }} {{ $t('search.resultsFor') }}
      {{ query ? `"${query}"` : '' }}
    </p>

    <!-- Loading -->
    <div v-if="pending || !pageReady" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <MediaCardSkeleton v-for="i in 12" :key="i" />
    </div>

    <template v-else-if="filtered.length || people.length">
      <!-- Media grid -->
      <div v-if="filtered.length" :class="filterType === 'all' && people.length ? 'mb-10' : ''">
        <h2 v-if="filterType === 'all' && people.length" class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">{{ $t('search.moviesAndSeries') }}</h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.5 }"
        >
          <MediaCard v-for="item in filtered" :key="item.id" :media="item" fluid />
        </div>
      </div>

      <!-- People row -->
      <div v-if="filterType === 'all' && people.length" v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.5 }">
        <h2 class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">{{ $t('search.people') }}</h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          <NuxtLink
            v-for="person in people"
            :key="person.id"
            :to="`/person/${person.id}`"
            class="group text-center"
          >
            <div class="relative mx-auto w-full aspect-square rounded-full overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 mb-2">
              <NuxtImg
                v-if="person.poster"
                :src="person.poster"
                :alt="person.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" format="webp" width="160" height="160"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-muted-foreground">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p class="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-tight truncate">{{ person.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </template>

    <!-- Empty -->
    <div v-else-if="query && !pending" class="text-center py-20">
      <a-empty :description="`${$t('search.noResults')} &quot;${query}&quot;`" class="!text-muted-foreground" />
    </div>

    <!-- Prompt -->
    <div v-else-if="!query" class="text-center py-20 text-muted-foreground">
      <p>{{ $t('search.startTyping') }}</p>
    </div>
  </div>
</template>
