<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useHaptic } from '~/composables/useHaptic'
import { useAuthStore } from '~/stores/auth'

const { t } = useI18n()
const { setLocale } = useI18n({ useScope: 'global' })
const route = useRoute()
const router = useRouter()
const haptic = useHaptic()
const authStore = useAuthStore()

// SSR always starts with 'en'; update client-side after mount from auth/localStorage
const displayLang = ref<'en' | 'ru'>('en')

onMounted(() => {
  displayLang.value = (authStore.user?.language
    ?? (localStorage.getItem('lang') as 'en' | 'ru' | null)
    ?? 'en') as 'en' | 'ru'
})

watch(() => authStore.user?.language, (lang) => {
  if (lang) displayLang.value = lang as 'en' | 'ru'
})

const currentLang = computed(() => displayLang.value)

async function switchLanguage(lang: 'en' | 'ru') {
  if (currentLang.value === lang) return
  haptic.selection()
  displayLang.value = lang
  await setLocale(lang)
  if (authStore.hasUser) {
    const config = useRuntimeConfig()
    try {
      const res = await $fetch<{ status: string; data: typeof authStore.user }>('/users/me', {
        baseURL: config.public.apiBase as string,
        method: 'PATCH',
        body: { language: lang },
        headers: { Authorization: `Bearer ${authStore.accessToken}` },
      })
      if (res.data) authStore.setSession(authStore.accessToken!, res.data as any)
    }
    catch {}
  }
  else {
    if (import.meta.client) localStorage.setItem('lang', lang)
  }
}
const isScrolled = ref(false)
const logoRef = ref<HTMLElement | null>(null)

function onLogoEnter() {
  const el = logoRef.value
  if (!el) return
  el.classList.remove('logo-spin')
  void el.offsetWidth // reflow to restart animation
  el.classList.add('logo-spin')
  const onEnd = () => {
    el.classList.remove('logo-spin')
    el.removeEventListener('animationend', onEnd)
  }
  el.addEventListener('animationend', onEnd)
}
const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function handleSearch() {
  const q = searchQuery.value.trim()
  haptic.selection()
  router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
  searchOpen.value = false
  searchQuery.value = ''
}

function handleSearchIconClick() {
  if (searchOpen.value) {
    if (searchQuery.value.trim()) {
      handleSearch()
    } else {
      closeSearch()
    }
  } else {
    searchOpen.value = true
    mobileMenuOpen.value = false
    haptic.selection()
  }
}

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}

function handleNavKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (searchOpen.value) closeSearch()
    else if (mobileMenuOpen.value) mobileMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleNavKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleNavKeydown))

const navLinks = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('common.movies'), to: '/browse/movie' },
  { label: t('common.series'), to: '/browse/series' },
  { label: t('nav.trending'), to: '/trending' },
  { label: t('nav.discover'), to: '/discover' },
])

async function handleLogout() {
  haptic.selection()
  const config = useRuntimeConfig()
  try {
    await $fetch('/auth/logout', {
      baseURL: config.public.apiBase as string,
      method: 'POST',
      credentials: 'include',
    })
  }
  catch {}
  authStore.clear()
  message.success(t('media.signedOut'))
  router.push('/')
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled || searchOpen
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/10'
        : 'bg-gradient-to-b from-background/70 to-transparent'
    ]"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink
          to="/"
          aria-label="Streamly — go to home"
          class="flex items-center gap-2 group"
          v-gsap.from="{ opacity: 0, x: -20, duration: 0.6 }"
        >
          <div ref="logoRef" class="logo-icon w-8 h-8 rounded-lg bg-primary flex items-center justify-center" @mouseenter="onLogoEnter">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-foreground tracking-tight">Streamly</span>
        </NuxtLink>

        <!-- Desktop nav links -->
        <div
          class="hidden md:flex items-center gap-1"
          v-gsap.from="{ opacity: 0, y: -10, duration: 0.6, delay: 0.1 }"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :aria-current="route.path === link.to ? 'page' : undefined"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
              route.path === link.to
                ? 'text-foreground bg-secondary'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right actions -->
        <div
          class="flex items-center gap-2"
          v-gsap.from="{ opacity: 0, x: 20, duration: 0.6, delay: 0.1 }"
        >
          <!-- Mobile search icon -->
          <NuxtLink
            to="/search"
            aria-label="Search"
            class="sm:hidden h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </NuxtLink>

          <!-- Desktop inline search -->
          <div class="hidden sm:flex relative items-center">
            <Transition name="search-expand">
              <div v-if="searchOpen" class="relative flex items-center gap-2 mr-1">
                <input
                  id="navbar-search"
                  v-model="searchQuery"
                  aria-label="Search titles"
                  autofocus
                  placeholder="Search titles..."
                  class="w-44 sm:w-56 h-9 bg-secondary/80 border border-border rounded-lg pl-3 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                  @keyup.enter="handleSearch"
                  @keyup.escape="closeSearch"
                />
                <button
                  v-if="searchQuery"
                  type="button"
                  aria-label="Clear search"
                  class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  @click="searchQuery = ''"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </Transition>
            <button
              :aria-label="searchOpen ? (searchQuery ? 'Go to search' : 'Close search') : 'Open search'"
              :aria-expanded="searchOpen"
              aria-controls="navbar-search"
              class="h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              @click="handleSearchIconClick"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>


          <!-- Language switcher (desktop) -->
          <div class="hidden sm:flex items-center gap-0.5 bg-secondary/60 rounded-lg p-0.5 border border-border/50">
            <button
              v-for="lang in [{ code: 'en', label: 'EN' }, { code: 'ru', label: 'RU' }]"
              :key="lang.code"
              :class="[
                'h-7 px-2.5 rounded-md text-xs font-semibold transition-all duration-150',
                currentLang === lang.code
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              ]"
              @click="switchLanguage(lang.code as 'en' | 'ru')"
            >
              {{ lang.label }}
            </button>
          </div>

          <!-- Auth (desktop only) -->
          <ClientOnly>
            <a-dropdown v-if="authStore.hasUser" placement="bottomRight" :trigger="['click']">
              <button
                class="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all duration-200 overflow-hidden"
                aria-label="Account menu"
              >
                <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" class="w-full h-full object-cover" alt="" />
                <span v-else class="text-sm font-bold text-primary">{{ authStore.user?.name?.[0]?.toUpperCase() }}</span>
              </button>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="name" disabled>
                    <span class="text-xs text-muted-foreground">{{ authStore.user?.email }}</span>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="profile">
                    <NuxtLink to="/profile" class="text-sm">{{ $t('nav.profile') }}</NuxtLink>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="logout" @click="handleLogout">
                    <span class="text-sm">{{ $t('nav.signOut') }}</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <NuxtLink v-else to="/login" class="hidden md:flex">
              <a-button size="small" type="primary" ghost>{{ $t('nav.signIn') }}</a-button>
            </NuxtLink>
            <template #fallback>
              <NuxtLink to="/login" class="hidden md:flex">
                <a-button size="small" type="primary" ghost>{{ $t('nav.signIn') }}</a-button>
              </NuxtLink>
            </template>
          </ClientOnly>

          <!-- Mobile menu toggle (hidden — bottom nav handles mobile navigation) -->
          <button
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-nav-menu"
            class="hidden h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            @click="mobileMenuOpen = !mobileMenuOpen; searchOpen = false; searchQuery = ''"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" id="mobile-nav-menu" class="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :aria-current="route.path === link.to ? 'page' : undefined"
            :class="[
              'block px-4 py-2.5 rounded-md text-sm font-medium transition-all',
              route.path === link.to
                ? 'text-foreground bg-secondary'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <!-- Language switcher (mobile) -->
          <div class="flex items-center gap-2 px-4 pt-3 pb-1">
            <span class="text-xs text-muted-foreground">{{ t('profile.contentLanguage') }}:</span>
            <div class="flex gap-1">
              <button
                v-for="lang in [{ code: 'en', label: '🇬🇧 EN' }, { code: 'ru', label: '🇷🇺 RU' }]"
                :key="lang.code"
                :class="[
                  'px-3 py-1 rounded-md text-xs font-semibold transition-all border',
                  currentLang === lang.code
                    ? 'bg-primary text-white border-primary'
                    : 'text-muted-foreground border-border hover:text-foreground',
                ]"
                @click="switchLanguage(lang.code as 'en' | 'ru'); mobileMenuOpen = false"
              >
                {{ lang.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .logo-icon.logo-spin {
    animation: logo-spin 0.85s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
}

@keyframes logo-spin {
  0%   { transform: rotate(0deg)   scale(1);    }
  50%  { transform: rotate(180deg) scale(0.82); }
  100% { transform: rotate(360deg) scale(1);    }
}

.search-expand-enter-active,
.search-expand-leave-active {
  transition: all 0.2s ease;
}
.search-expand-enter-from,
.search-expand-leave-to {
  opacity: 0;
  transform: scaleX(0.5);
  transform-origin: right;
}
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
