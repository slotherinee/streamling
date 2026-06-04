<script setup lang="ts">
interface Props {
  genre: string
  image: string | null
}
defineProps<Props>()

const { t } = useI18n()

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const genreColors: Record<string, string> = {
  'Sci-Fi': 'from-blue-900/80 to-blue-600/40',
  'Thriller': 'from-red-900/80 to-red-600/40',
  'Drama': 'from-amber-900/80 to-amber-600/40',
  'Crime': 'from-zinc-900/80 to-zinc-600/40',
  'Action': 'from-orange-900/80 to-orange-600/40',
  'Fantasy': 'from-violet-900/80 to-violet-600/40',
  'Romance': 'from-pink-900/80 to-pink-600/40',
  'Horror': 'from-red-950/90 to-zinc-800/40',
  'Mystery': 'from-indigo-900/80 to-indigo-600/40',
  'Adventure': 'from-emerald-900/80 to-emerald-600/40',
  'Animation': 'from-cyan-900/80 to-cyan-600/40',
  'Comedy': 'from-yellow-900/80 to-yellow-600/40',
  'Documentary': 'from-teal-900/80 to-teal-600/40',
  'Family': 'from-lime-900/80 to-lime-600/40',
  'History': 'from-stone-900/80 to-stone-600/40',
  'Music': 'from-fuchsia-900/80 to-fuchsia-600/40',
  'Neo-Noir': 'from-slate-900/90 to-slate-700/40',
  'Espionage': 'from-teal-900/80 to-teal-600/40',
  'War': 'from-neutral-900/90 to-neutral-700/40',
  'Western': 'from-orange-950/90 to-amber-700/40',
}
</script>

<template>
  <NuxtLink
    :to="`/browse/${genre.toLowerCase().replace(/ /g, '-')}`"
    class="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30"
  >
    <NuxtImg
      v-if="image"
      :src="image"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      width="400"
      height="225"
      format="webp"
      loading="lazy"
      placeholder
    />
    <div :class="['absolute inset-0 bg-gradient-to-br', genreColors[genre] || 'from-zinc-900/80 to-zinc-600/40']" />
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
      <h3 class="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-200">{{ capitalize(genre) }}</h3>
      <p class="text-xs text-white/50 font-medium mt-1">{{ t('media.browse') }} →</p>
    </div>
  </NuxtLink>
</template>
