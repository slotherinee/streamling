<script setup lang="ts">
import { useHaptic } from '~/composables/useHaptic'

const route = useRoute()
const haptic = useHaptic()

const navItems = [
  {
    label: 'Home',
    to: '/',
    exact: true,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  },
  {
    label: 'Search',
    to: '/search',
    exact: false,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  },
  {
    label: 'Discover',
    to: '/discover',
    exact: false,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
  },
  {
    label: 'Profile',
    to: '/profile',
    exact: false,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  },
]

function isActive(item: typeof navItems[0]): boolean {
  if (item.exact) return route.path === item.to
  if (item.to === '/discover') return route.path.startsWith('/discover') || route.path.startsWith('/browse')
  return route.path.startsWith(item.to)
}
</script>

<template>
  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border/50"
    role="navigation"
    aria-label="Mobile navigation"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <div class="flex items-stretch h-14">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :aria-label="item.label"
        :aria-current="isActive(item) ? 'page' : undefined"
        class="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-200"
        :class="isActive(item) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'"
        @click="haptic.selection()"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="w-5 h-5" v-html="item.icon" />
        <span class="text-[10px] font-medium leading-none">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>
