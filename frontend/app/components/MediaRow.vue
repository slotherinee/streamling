<script setup lang="ts">
import type { Media } from '~/data/placeholder'

const { t } = useI18n()

interface Props {
  title: string
  items: Media[]
  showProgress?: boolean
  viewAllLink?: string
  loading?: boolean
  removable?: boolean
}

withDefaults(defineProps<Props>(), {
  showProgress: false,
  loading: false,
  removable: false,
})

const emit = defineEmits<{ remove: [id: number] }>()

const containerRef = ref(null)
const isBeginning = ref(true)
const isEnd = ref(false)
const showButtons = ref(false)

function getPagePadding() {
  if (!import.meta.client) return 16
  if (window.innerWidth >= 1024) return 32
  if (window.innerWidth >= 640) return 24
  return 16
}

const swiper = useSwiper(containerRef, {
  slidesPerView: 'auto',
  spaceBetween: 12,
  freeMode: true,
  grabCursor: true,
  slidesOffsetBefore: getPagePadding(),
  slidesOffsetAfter: getPagePadding(),
  on: {
    init(sw: any) {
      showButtons.value = !sw.isLocked
      isBeginning.value = sw.isBeginning
      isEnd.value = sw.isEnd
    },
    progress(sw: any, progress: number) {
      isBeginning.value = progress <= 0.001
      isEnd.value = progress >= 0.999
    },
    lock() {
      showButtons.value = false
    },
    unlock() {
      showButtons.value = true
    },
  },
})
</script>

<template>
  <section class="py-6" :aria-label="title">
    <!-- Header -->
    <div
      class="flex items-center justify-between mb-5 px-4 sm:px-6 lg:px-8"
      v-gsap.onEnter.from="{ opacity: 0, x: -20, duration: 0.5 }"
    >
      <h2 class="text-xl font-bold text-foreground tracking-tight">{{ title }}</h2>
      <div class="flex items-center gap-3">
        <NuxtLink
          v-if="viewAllLink"
          :to="viewAllLink"
          class="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        >
          {{ t('common.viewAll') }} →
        </NuxtLink>
        <div v-if="showButtons && !loading" class="hidden sm:flex gap-1">
          <button
            :disabled="isBeginning"
            :aria-label="`Previous ${title} items`"
            :class="[
              'h-8 w-8 flex items-center justify-center rounded-md transition-all border bg-secondary border-border/50',
              isBeginning
                ? 'cursor-not-allowed text-muted-foreground/25'
                : 'hover:bg-secondary/80 text-muted-foreground hover:text-foreground',
            ]"
            @click="swiper.prev()"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            :disabled="isEnd"
            :aria-label="`Next ${title} items`"
            :class="[
              'h-8 w-8 flex items-center justify-center rounded-md transition-all border bg-secondary border-border/50',
              isEnd
                ? 'cursor-not-allowed text-muted-foreground/25'
                : 'hover:bg-secondary/80 text-muted-foreground hover:text-foreground',
            ]"
            @click="swiper.next()"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Skeleton -->
    <div v-show="loading" class="flex gap-3 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div v-for="i in 7" :key="i" class="w-36 sm:w-44 flex-shrink-0">
        <MediaCardSkeleton />
      </div>
    </div>

    <!-- Swiper (always mounted so useSwiper can initialize) -->
    <div v-show="!loading">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="!overflow-visible">
          <swiper-slide v-for="item in items" :key="item.id" style="width: auto">
            <MediaCard :media="item" :show-progress="showProgress" :removable="removable" @remove="emit('remove', $event)" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>

<style>
swiper-container {
  display: block;
}
</style>
