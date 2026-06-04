<script setup lang="ts">
import { fromMovieCard } from '~/utils/adapters'
import type { Collection } from '~/types/api'

definePageMeta({ layout: 'default' })

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { data: collection, error } = await useApiFetch<Collection>(() => `/collections/${id.value}`)

if (error.value) throw createError({ statusCode: 404, message: 'Collection not found' })

useHead({ title: computed(() => `${collection.value?.name ?? 'Collection'} — Streamly`) })
useSeoMeta({
  ogTitle: computed(() => `${collection.value?.name ?? 'Collection'} — Streamly`),
  description: computed(() => collection.value?.overview ?? ''),
  ogDescription: computed(() => collection.value?.overview ?? ''),
  ogImage: computed(() => collection.value?.backdrop ?? '/og-default.jpg'),
  twitterCard: 'summary_large_image',
})

const parts = computed(() => (collection.value?.parts ?? []).map(fromMovieCard))
</script>

<template>
  <div v-if="collection" class="min-h-screen">
    <!-- Hero -->
    <div class="relative w-full h-[50vh] min-h-[360px] overflow-hidden">
      <NuxtImg
        :src="collection.backdrop ?? undefined"
        :alt="collection.name"
        class="w-full h-full object-cover"
        width="1920" height="1080" format="webp" loading="eager"
        v-gsap.from="{ scale: 1.05, duration: 1.2, ease: 'power2.out' }"
      />
      <div class="absolute inset-0 bg-black/55" />
      <div class="absolute bottom-0 left-0 right-0 h-48 gradient-to-t-black" />

      <!-- Breadcrumb -->
      <div class="absolute top-20 inset-x-0 px-4 sm:px-6 lg:px-8" v-gsap.from="{ opacity: 0, x: -20, duration: 0.5, delay: 0.2 }">
        <div class="flex items-center gap-2 text-sm text-white/60">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <span>/</span>
          <span class="text-white">{{ collection.name }}</span>
        </div>
      </div>

      <!-- Title -->
      <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8" v-gsap.from="{ opacity: 0, y: 30, duration: 0.7, delay: 0.1 }">
        <div class="flex items-end gap-5">
          <NuxtImg
            v-if="collection.poster"
            :src="collection.poster"
            :alt="collection.name"
            class="hidden sm:block w-28 aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl flex-shrink-0"
            width="112" height="168" format="webp"
          />
          <div>
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span class="text-sm font-medium text-primary">Collection</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white mb-2 leading-tight">{{ collection.name }}</h1>
            <div class="flex items-center gap-3 text-sm text-white/60">
              <span>{{ parts.length }} title{{ parts.length !== 1 ? 's' : '' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overview + parts -->
    <div class="px-4 sm:px-8 py-10">
      <!-- Overview -->
      <div v-if="collection.overview" class="mb-10 max-w-3xl" v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }">
        <p class="text-foreground/70 leading-relaxed">{{ collection.overview }}</p>
      </div>

      <!-- Parts grid -->
      <h2 class="text-lg font-bold mb-6" v-gsap.from="{ opacity: 0, y: 10, duration: 0.4 }">
        Titles in this collection
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        v-gsap.onEnter.from="{ opacity: 0, y: 20, duration: 0.6 }"
      >
        <MediaCard v-for="m in parts" :key="m.id" :media="m" fluid />
      </div>
    </div>
  </div>
</template>
