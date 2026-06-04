<script setup lang="ts">
import type { Person } from '~/types/api'

definePageMeta({ layout: 'default' })

const { t } = useI18n()

const route = useRoute()
const id = computed(() => {
  const n = Number(route.params.id)
  return Number.isNaN(n) ? null : n
})

const { data: person, error } = await useApiFetch<Person>(() =>
  id.value ? `/people/${id.value}` : null,
)

if (!id.value || error.value) throw createError({ statusCode: 404, message: 'Person not found' })

useHead({ title: computed(() => `${person.value?.name ?? 'Person'} — Streamly`) })
useSeoMeta({
  ogTitle: computed(() => `${person.value?.name ?? 'Person'} — Streamly`),
  description: computed(() => person.value?.biography?.slice(0, 160) ?? ''),
  ogDescription: computed(() => person.value?.biography?.slice(0, 160) ?? ''),
  ogImage: computed(() => person.value?.profile ?? '/og-default.jpg'),
  twitterCard: 'summary_large_image',
})

const CREDITS_PAGE = 10
const visibleCredits = ref(CREDITS_PAGE)
const paginatedCredits = computed(() => (person.value?.credits ?? []).slice(0, visibleCredits.value))
const hasMoreCredits = computed(() => visibleCredits.value < (person.value?.credits.length ?? 0))

function formatBirthday(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    const age = Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000))
    return `${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} (age ${age})`
  }
  catch { return dateStr }
}
</script>

<template>
  <div v-if="person" class="min-h-screen">
    <!-- Header -->
    <div class="pt-20 pb-0">
      <div class="px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-8" v-gsap.from="{ opacity: 0, y: -10, duration: 0.4 }">
          <NuxtLink to="/" class="hover:text-foreground transition-colors">Home</NuxtLink>
          <span>/</span>
          <span class="text-foreground">{{ person.name }}</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-8 items-start" v-gsap.from="{ opacity: 0, y: 20, duration: 0.6 }">
          <!-- Photo -->
          <div class="flex-shrink-0">
            <NuxtImg
              :src="person.profile ?? undefined"
              :alt="person.name"
              class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border border-border/50 shadow-xl"
              width="224" height="224" format="webp"
            />
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{{ person.name }}</h1>

            <!-- Known for -->
            <div class="flex flex-wrap gap-2 mb-6">
              <a-tag class="!text-xs">{{ person.knownForDepartment }}</a-tag>
            </div>

            <!-- Bio -->
            <div class="space-y-4">
              <div>
                <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">{{ $t('media.biography') }}</h3>
                <p class="text-foreground/80 leading-relaxed text-sm sm:text-base">{{ person.biography || $t('media.noBio') }}</p>
              </div>

              <a-divider />

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-if="person.birthday">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.born') }}</p>
                  <p class="text-sm font-medium">{{ formatBirthday(person.birthday) }}</p>
                </div>
                <div v-if="person.deathday">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.died') }}</p>
                  <p class="text-sm font-medium">{{ person.deathday }}</p>
                </div>
                <div v-if="person.placeOfBirth">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.birthplace') }}</p>
                  <p class="text-sm font-medium">{{ person.placeOfBirth }}</p>
                </div>
                <div v-if="person.gender">
                  <p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">{{ $t('media.gender') }}</p>
                  <p class="text-sm font-medium">{{ person.gender === 1 ? $t('media.female') : person.gender === 2 ? $t('media.male') : $t('media.nonBinary') }}</p>
                </div>
              </div>
              <div v-if="person.alsoKnownAs?.length" class="pt-2">
                <p class="text-xs text-muted-foreground uppercase tracking-wider mb-2">{{ $t('media.alsoKnownAs') }}</p>
                <div class="flex flex-wrap gap-2">
                  <a-tag v-for="alias in person.alsoKnownAs.slice(0, 5)" :key="alias" class="!text-xs">{{ alias }}</a-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filmography -->
    <div class="px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-xl font-bold mb-6" v-gsap.from="{ opacity: 0, y: 10, duration: 0.4 }">{{ $t('media.filmography') }}</h2>

      <div v-if="person.credits.length" class="space-y-3">
        <NuxtLink
          v-for="credit in paginatedCredits"
          :key="`${credit.mediaType}-${credit.id}`"
          :to="credit.mediaType === 'tv' ? `/tv/${credit.id}` : `/movie/${credit.id}`"
          class="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 group"
        >
          <NuxtImg
            :src="credit.poster ?? undefined"
            :alt="credit.title"
            class="w-14 aspect-[2/3] object-cover rounded-lg border border-border/50 flex-shrink-0"
            width="56" height="84" format="webp" loading="lazy"
          />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-0.5">
              <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{{ credit.title }}</h3>
              <a-tag :color="credit.mediaType === 'tv' ? 'blue' : undefined" class="!text-xs flex-shrink-0">
                {{ credit.mediaType === 'tv' ? $t('common.series') : $t('common.movie') }}
              </a-tag>
            </div>
            <p v-if="credit.character" class="text-xs text-muted-foreground mb-1">as {{ credit.character }}</p>
            <div class="flex items-center gap-2 text-xs text-muted-foreground">
              <span v-if="credit.year">{{ credit.year }}</span>
              <span v-if="credit.year && credit.rating" class="w-1 h-1 rounded-full bg-border" />
              <div v-if="credit.rating" class="flex items-center gap-1">
                <svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span class="text-amber-400 font-medium">{{ credit.rating.toFixed(1) }}</span>
              </div>
            </div>
          </div>
          <svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
        <div v-if="hasMoreCredits" class="flex justify-center mt-6">
          <a-button @click="visibleCredits += CREDITS_PAGE">
            {{ $t('common.loadMore') }}
            <span class="ml-1 text-muted-foreground text-sm">({{ person.credits.length - visibleCredits }} remaining)</span>
          </a-button>
        </div>
      </div>

      <div v-else class="text-center py-16">
        <a-empty :description="$t('media.noCredits')" />
      </div>
    </div>
  </div>
</template>
