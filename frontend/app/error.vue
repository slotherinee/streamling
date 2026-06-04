<script setup lang="ts">
import { theme as antTheme } from 'ant-design-vue'

const props = defineProps<{ error: { statusCode: number; message?: string } }>()

useHead({
  htmlAttrs: { class: 'dark' },
  title: computed(() => props.error.statusCode === 404 ? '404 — Not Found — Streamly' : `${props.error.statusCode} — Error — Streamly`),
})

const antdTheme = {
  algorithm: antTheme.darkAlgorithm,
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 10,
    fontFamily: "'Inter', -apple-system, sans-serif",
    colorBgBase: '#0a0a0a',
  },
}

const is404 = computed(() => props.error.statusCode === 404)
const is500 = computed(() => props.error.statusCode >= 500)

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <a-config-provider :theme="antdTheme">
    <div class="min-h-screen bg-background text-foreground flex flex-col">
      <header class="flex items-center justify-center h-16 border-b border-border/50">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span class="text-xl font-bold tracking-tight">Streamly</span>
        </NuxtLink>
      </header>

      <main class="flex-1 flex items-center justify-center px-4 py-16">
        <div class="text-center max-w-md w-full" v-gsap.from="{ opacity: 0, y: 30, duration: 0.7 }">

          <!-- 404 -->
          <template v-if="is404">
            <div class="relative mb-8">
              <div class="text-[9rem] font-black leading-none text-border/30 select-none">404</div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <svg class="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <h1 class="text-2xl font-bold mb-3">Page not found</h1>
            <p class="text-muted-foreground text-sm mb-8 leading-relaxed">
              Looks like this scene got cut from the final edit. The page you're looking for doesn't exist.
            </p>
          </template>

          <!-- 500 -->
          <template v-else-if="is500">
            <div class="relative mb-8">
              <div class="text-[9rem] font-black leading-none text-border/30 select-none">500</div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <svg class="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
            </div>
            <h1 class="text-2xl font-bold mb-3">Something went wrong</h1>
            <p class="text-muted-foreground text-sm mb-8 leading-relaxed">
              Our servers hit an unexpected snag. We're on it — try refreshing or come back soon.
            </p>
          </template>

          <!-- Generic -->
          <template v-else>
            <div class="text-[9rem] font-black leading-none text-border/30 select-none mb-8">{{ error.statusCode }}</div>
            <h1 class="text-2xl font-bold mb-3">An error occurred</h1>
            <p class="text-muted-foreground text-sm mb-8">{{ error.message || 'Something unexpected happened.' }}</p>
          </template>

          <div class="flex items-center justify-center gap-3 flex-wrap">
            <a-button size="large" @click="$router?.back()">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </template>
              Go Back
            </a-button>
            <a-button type="primary" size="large" class="!font-semibold" @click="handleError">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </template>
              Go Home
            </a-button>
          </div>
        </div>
      </main>
    </div>
  </a-config-provider>
</template>
