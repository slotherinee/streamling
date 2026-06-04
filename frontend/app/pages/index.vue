<script setup lang="ts">
import { fromMovieCard, fromTvCard, fromTrending, fromVidLink } from '~/utils/adapters'
import { useProgressStore } from '~/stores/progress'
import type { PagedResponse, MovieCard, TvCard, TrendingItem, Genre } from '~/types/api'

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Streamly — Your Premium Streaming Destination',
  ogTitle: 'Streamly — Your Premium Streaming Destination',
  description: 'Stream thousands of movies and TV series in stunning quality. Discover trending titles, new releases, and exclusive content.',
  ogDescription: 'Stream thousands of movies and TV series in stunning quality.',
  ogImage: '/og-default.jpg',
  twitterCard: 'summary_large_image',
})

const [
  { data: trendingRaw },
  { data: nowPlayingRaw },
  { data: topRatedRaw },
  { data: popularRaw },
  { data: popularTvRaw },
  { data: topRatedTvRaw },
  { data: upcomingRaw },
  { data: airingTodayRaw },
  { data: genreListRaw },
] = await Promise.all([
  useApiFetch<PagedResponse<TrendingItem>>('/trending?type=all&window=day'),
  useApiFetch<PagedResponse<MovieCard>>('/movies/now-playing'),
  useApiFetch<PagedResponse<MovieCard>>('/movies/top-rated'),
  useApiFetch<PagedResponse<MovieCard>>('/movies/popular'),
  useApiFetch<PagedResponse<TvCard>>('/tv/popular'),
  useApiFetch<PagedResponse<TvCard>>('/tv/top-rated'),
  useApiFetch<PagedResponse<MovieCard>>('/movies/upcoming'),
  useApiFetch<PagedResponse<TvCard>>('/tv/airing-today'),
  useApiFetch<Genre[]>('/genres/movies'),
])

const trendingMedia = computed(() =>
  (trendingRaw.value?.results ?? []).filter(t => t.mediaType !== 'person').map(fromTrending),
)
const newReleases = computed(() => (nowPlayingRaw.value?.results ?? []).map(fromMovieCard))
const topRated = computed(() => (topRatedRaw.value?.results ?? []).map(fromMovieCard))
const popular = computed(() => (popularRaw.value?.results ?? []).map(fromMovieCard))
const popularTv = computed(() => (popularTvRaw.value?.results ?? []).map(fromTvCard))
const topRatedTv = computed(() => (topRatedTvRaw.value?.results ?? []).map(fromTvCard))
const upcoming = computed(() => (upcomingRaw.value?.results ?? []).map(fromMovieCard))
const airingToday = computed(() => (airingTodayRaw.value?.results ?? []).map(fromTvCard))

const genreWithImages = computed(() => {
  const backdrops = trendingMedia.value.map(m => m.backdrop).filter(Boolean)
  return (genreListRaw.value ?? []).slice(0, 8).map((g, i) => ({
    genre: g.name,
    image: backdrops.length ? backdrops[i % backdrops.length] : null,
  }))
})

const featuredItem = computed(() => trendingMedia.value[3] ?? trendingMedia.value[0])

const progressStore = useProgressStore()
const continueWatching = computed(() => progressStore.inProgress.map(fromVidLink).slice(0, 8))

const pageReady = usePageReady()
const { t } = useI18n()
</script>

<template>
  <div>
    <HeroBanner />

    <div class="">
      <ClientOnly>
        <MediaRow v-if="continueWatching.length" :title="t('home.continueWatching')" :items="continueWatching" :show-progress="true" :removable="true" @remove="progressStore.remove($event)" />
      </ClientOnly>

      <MediaRow :title="t('home.trending')" :items="trendingMedia" view-all-link="/trending" :loading="!pageReady" />
      <MediaRow :title="t('home.newReleases')" :items="newReleases" view-all-link="/browse/new" :loading="!pageReady" />

      <!-- Browse by Genre -->
      <section class="py-8 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-6" v-gsap.onEnter.from="{ opacity: 0, x: -20, duration: 0.5 }">
          <h2 class="text-xl font-bold text-foreground tracking-tight">{{ t('home.browseByGenre') }}</h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" v-gsap.onEnter.from="{ opacity: 0, y: 30, duration: 0.6, delay: 0.1 }">
          <template v-if="pageReady">
            <GenreCard v-for="item in genreWithImages" :key="item.genre" v-bind="item" />
          </template>
          <template v-else>
            <GenreCardSkeleton v-for="i in 8" :key="i" />
          </template>
        </div>
      </section>

      <MediaRow :title="t('home.topRated')" :items="topRated" view-all-link="/browse/top-rated" :loading="!pageReady" />
      <MediaRow :title="t('home.airingToday')" :items="airingToday" view-all-link="/browse/airing-today" :loading="!pageReady" />
      <MediaRow :title="t('home.popularSeries')" :items="popularTv" view-all-link="/browse/series" :loading="!pageReady" />
      <MediaRow :title="t('home.topRatedSeries')" :items="topRatedTv" view-all-link="/browse/tv-top-rated" :loading="!pageReady" />
      <MediaRow :title="t('home.comingSoon')" :items="upcoming" view-all-link="/browse/upcoming" :loading="!pageReady" />
      <MediaRow :title="t('common.movies')" :items="popular" view-all-link="/browse/movie" :loading="!pageReady" />

      <!-- Featured strip -->
      <section
        v-if="featuredItem"
        class="mx-4 sm:mx-6 lg:mx-8 my-8 rounded-2xl overflow-hidden relative border border-border/50"
        v-gsap.onEnter.from="{ opacity: 0, y: 40, duration: 0.7 }"
      >
        <NuxtImg
          :src="featuredItem.backdrop"
          :alt="featuredItem.title"
          class="w-full h-64 object-cover"
          width="1280"
          height="256"
          format="webp"
          loading="lazy"
          placeholder
        />
        <div class="absolute inset-0 bg-black/60" />
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <a-tag color="cyan" class="!mb-3 !text-xs !font-semibold !px-3 !py-1 !rounded-full !border-0">{{ t('media.featured') }}</a-tag>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-2">{{ featuredItem.title }}</h3>
          <p class="text-sm text-white/70 max-w-md mb-6 line-clamp-2">{{ featuredItem.description }}</p>
          <NuxtLink :to="featuredItem.type === 'series' ? `/tv/${featuredItem.id}` : `/movie/${featuredItem.id}`">
            <a-button type="primary" size="large" class="!font-semibold hover:scale-105 transition-transform">
              <template #icon>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </template>
              {{ t('media.watchNow') }}
            </a-button>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
