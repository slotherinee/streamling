<script setup lang="ts">
const { t } = useI18n()

const browseLinks = computed(() => [
  { key: 'movies', to: '/browse/movie' },
  { key: 'series', to: '/browse/series' },
  { key: 'newHot', to: '/browse/new' },
  { key: 'topRated', to: '/browse/top-rated' },
  { key: 'comingSoon', to: '/browse/upcoming' },
  { key: 'airingToday', to: '/browse/airing-today' },
  { key: 'tvTopRated', to: '/browse/tv-top-rated' },
])

const genreLinks = computed(() => [
  { key: 'scifi', to: '/browse/sci-fi' },
  { key: 'drama', to: '/browse/drama' },
  { key: 'thriller', to: '/browse/thriller' },
  { key: 'action', to: '/browse/action' },
  { key: 'fantasy', to: '/browse/fantasy' },
])

const accountLinks = computed(() => [
  { key: 'profile', to: '/profile' },
  { key: 'login', to: '/login' },
  { key: 'register', to: '/register' },
])

const legalLinks = computed(() => [
  { key: 'privacy' },
  { key: 'terms' },
  { key: 'cookies' },
])
</script>

<template>
  <footer class="bg-background border-t border-border mt-24">
    <div class="px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" aria-label="Streamly — go to home" class="flex items-center gap-2 mb-4 group">
            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight">Streamly</span>
          </NuxtLink>
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Browse -->
        <div>
          <h4 class="text-sm font-semibold text-foreground mb-4">{{ t('footer.browse') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="item in browseLinks" :key="item.key">
              <NuxtLink
                :to="item.to"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >{{ t(`footer.${item.key}`) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Genres -->
        <div>
          <h4 class="text-sm font-semibold text-foreground mb-4">{{ t('footer.genres') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="item in genreLinks" :key="item.key">
              <NuxtLink
                :to="item.to"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >{{ t(`footer.${item.key}`) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Account -->
        <div>
          <h4 class="text-sm font-semibold text-foreground mb-4">{{ t('footer.account') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="item in accountLinks" :key="item.key">
              <NuxtLink
                :to="item.to"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >{{ t(`footer.${item.key}`) }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
        <p class="text-xs text-muted-foreground">
          © 2024 Streamly. {{ t('footer.copyright') }}
        </p>
        <div class="flex items-center gap-6">
          <a
            v-for="item in legalLinks"
            :key="item.key"
            href="#"
            class="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >{{ t(`footer.${item.key}`) }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
