<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { Media } from '~/data/placeholder'
import { mediaDetailPath } from '~/data/placeholder'
import { useWatchlistStore } from '~/stores/watchlist'
import { useProgressStore } from '~/stores/progress'
import { useHaptic } from '~/composables/useHaptic'

const { t } = useI18n()

interface Props {
  media: Media
  size?: 'sm' | 'default' | 'lg'
  showProgress?: boolean
  fluid?: boolean
  removable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  showProgress: false,
  fluid: false,
  removable: false,
})

const emit = defineEmits<{ remove: [id: number] }>()

const watchlistStore = useWatchlistStore()
const progressStore = useProgressStore()
const haptic = useHaptic()

const sizeClasses = {
  sm: 'w-36 flex-shrink-0',
  default: 'w-48 flex-shrink-0',
  lg: 'w-64 flex-shrink-0',
}

const imageLoaded = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (imgRef.value?.complete) imageLoaded.value = true
})

const progressPercent = computed(() => {
  const real = progressStore.getPercent(props.media.tmdbId)
  if (real > 0) return real
  return props.showProgress ? props.media.progress || 0 : 0
})

function handleRemove(e: Event) {
  e.preventDefault()
  e.stopPropagation()
  haptic.selection()
  emit('remove', props.media.id)
}

async function handleWatchlistToggle(e: Event) {
  e.preventDefault()
  e.stopPropagation()
  const result = await watchlistStore.toggle(props.media)
  if (result === 'added') {
    haptic.success()
    message.success(t('media.addedWatchlistShort'))
  } else {
    haptic.selection()
    message.info(t('media.removedWatchlistShort'))
  }
}
</script>

<template>
  <NuxtLink
    :to="mediaDetailPath(media)"
    :class="['group block relative cursor-pointer', fluid ? 'w-full' : sizeClasses[size]]"
    :aria-label="`${media.title} (${media.year}), ${media.type === 'series' ? `series, ${media.seasons} season${(media.seasons || 1) !== 1 ? 's' : ''}` : 'movie'}, rated ${media.rating} out of 10`"
  >
    <!-- Poster -->
    <div
      class="relative aspect-[2/3] rounded-xl overflow-hidden bg-secondary border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10"
    >
      <NuxtImg
        ref="imgRef"
        :src="media.poster"
        :alt="media.title"
        :class="[
          'w-full h-full object-cover transition-all duration-500 group-hover:scale-110',
          imageLoaded ? '' : 'blur-sm scale-105',
        ]"
        loading="lazy"
        format="webp"
        width="200"
        height="300"
        @load="imageLoaded = true"
      />

      <!-- Hover overlay -->
      <div
        class="absolute inset-0 gradient-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <!-- Play button -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-hidden="true"
      >
        <div
          class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
        >
          <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <!-- Watchlist toggle -->
      <button
        type="button"
        :class="[
          'absolute top-2 right-2 w-7 h-7 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 z-10',
          watchlistStore.has(media.id)
            ? 'bg-primary text-white opacity-100 scale-100'
            : 'bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-primary/80',
        ]"
        :aria-label="
          watchlistStore.has(media.id)
            ? `Remove ${media.title} from watchlist`
            : `Add ${media.title} to watchlist`
        "
        @click.prevent="handleWatchlistToggle"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            v-if="watchlistStore.has(media.id)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M5 13l4 4L19 7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <!-- Remove from continue watching -->
      <button
        v-if="removable"
        type="button"
        :aria-label="`Remove ${media.title} from continue watching`"
        class="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 text-white transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-600/80 hover:border-red-400/50"
        @click.prevent="handleRemove"
      >
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- New tag -->
      <div v-if="media.new" class="absolute top-2 left-2">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold">
          New
        </span>
      </div>

      <!-- Type badge -->
      <div class="absolute bottom-2 left-1" aria-hidden="true">
        <span
          class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium border border-white/10"
        >
          {{ media.type === 'series' ? $t('common.series') : $t('common.movie') }}
        </span>
      </div>

      <!-- Progress bar -->
      <div
        v-if="progressPercent > 0"
        class="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
        aria-hidden="true"
      >
        <div
          class="h-full bg-primary transition-all duration-300"
          :style="{ width: `${progressPercent}%` }"
        />
      </div>
    </div>

    <!-- Info -->
    <div class="mt-2.5 px-0.5">
      <h3
        class="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200 leading-tight"
      >
        {{ media.title }}
      </h3>
      <div v-if="media.year || media.rating" class="flex items-center gap-2 mt-1">
        <span v-if="media.year" class="text-xs text-muted-foreground">{{ media.year }}</span>
        <span v-if="media.year && media.rating" class="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
        <div v-if="media.rating" class="flex items-center gap-1">
          <svg
            class="w-3 h-3 text-amber-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
          <span class="text-xs text-amber-400 font-medium">{{ media.rating?.toFixed(1) }}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-1 mt-1">
        <span
          v-for="(genre, i) in media.genre.slice(0, 2)"
          :key="genre"
          class="text-xs text-muted-foreground"
        >
          {{ genre
          }}<span v-if="i < Math.min(media.genre.length, 2) - 1" aria-hidden="true"> · </span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
