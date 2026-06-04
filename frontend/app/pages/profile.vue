<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useWatchlistStore } from '~/stores/watchlist'
import { useProgressStore } from '~/stores/progress'
import { fromVidLink } from '~/utils/adapters'

definePageMeta({ layout: 'default', middleware: 'auth' })
useHead({ title: 'Profile — Streamly' })

const { t } = useI18n()

const authStore = useAuthStore()
const watchlistStore = useWatchlistStore()
const progressStore = useProgressStore()
const config = useRuntimeConfig()
const base = config.public.apiBase as string

const activeTab = ref('watchlist')
const saving = ref(false)

// Edit form state
const editName = ref(authStore.user?.name ?? '')
const editAvatar = ref(authStore.user?.avatar ?? '')

const watchlist = computed(() => watchlistStore.items)
const continueWatching = computed(() => progressStore.inProgressPaged.map(fromVidLink))

async function saveProfile() {
  saving.value = true
  try {
    const body: Record<string, string> = {}
    if (editName.value.trim() && editName.value !== authStore.user?.name)
      body.name = editName.value.trim()
    if (editAvatar.value !== (authStore.user?.avatar ?? ''))
      body.avatar = editAvatar.value || ''

    if (!Object.keys(body).length) {
      message.info(t('profile.noChanges'))
      return
    }

    const res = await $fetch<{ status: string; data: typeof authStore.user }>(
      '/users/me',
      { baseURL: base, method: 'PATCH', body,
        headers: { Authorization: `Bearer ${authStore.accessToken}` } },
    )
    if (res.data) {
      authStore.setSession(authStore.accessToken!, res.data as any)
      message.success(t('profile.saveSuccess'))
    }
  }
  catch { message.error(t('profile.saveFailed')) }
  finally { saving.value = false }
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- Header -->
    <div class="mb-10 pb-8 border-b border-border space-y-5">
      <div class="flex items-start gap-5 sm:gap-6">
        <!-- Avatar -->
        <div class="relative flex-shrink-0">
          <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 bg-primary/10">
            <img
              v-if="authStore.user?.avatar"
              :src="authStore.user.avatar"
              class="w-full h-full object-cover"
              alt=""
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-2xl font-bold text-primary">
                {{ authStore.user?.name?.[0]?.toUpperCase() }}
              </span>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <h1 class="text-xl sm:text-2xl font-bold mb-1">{{ authStore.user?.name }}</h1>
          <p class="text-sm text-muted-foreground">{{ authStore.user?.email }}</p>
          <p class="text-xs text-muted-foreground mt-1">{{ $t('profile.member') }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="inline-flex gap-5 sm:gap-8 px-4 py-3 rounded-xl bg-card border border-border/50">
        <div class="text-center">
          <p class="text-xl font-bold">{{ watchlist.length }}</p>
          <p class="text-xs text-muted-foreground">{{ $t('profile.watchlist') }}</p>
        </div>
        <div class="w-px bg-border self-stretch" />
        <div class="text-center">
          <p class="text-xl font-bold">{{ continueWatching.length }}</p>
          <p class="text-xs text-muted-foreground">{{ $t('profile.inProgress') }}</p>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <a-tabs v-model:activeKey="activeTab">
      <!-- Watchlist -->
      <a-tab-pane key="watchlist" :tab="`${$t('profile.watchlist')}${watchlistStore.total ? ` (${watchlistStore.total})` : ''}`">
        <div v-if="watchlist.length">
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4"
            v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }"
          >
            <MediaCard v-for="item in watchlist" :key="item.id" :media="item" fluid />
          </div>
          <div v-if="watchlistStore.hasMore" class="flex justify-center mt-8">
            <a-button :loading="watchlistStore.loading" @click="watchlistStore.loadMore()">
              {{ $t('common.loadMore') }}
            </a-button>
          </div>
        </div>
        <div v-else-if="watchlistStore.loading" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4">
          <MediaCardSkeleton v-for="i in 12" :key="i" />
        </div>
        <div v-else class="text-center py-16">
          <p class="text-muted-foreground mb-4">{{ $t('profile.watchlistEmpty') }}</p>
          <NuxtLink to="/"><a-button>{{ $t('profile.browseTitle') }}</a-button></NuxtLink>
        </div>
      </a-tab-pane>

      <!-- Continue Watching -->
      <a-tab-pane key="continue" :tab="$t('profile.continueWatching')">
        <div v-if="continueWatching.length">
          <div
            class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4"
            v-gsap.from="{ opacity: 0, y: 20, duration: 0.5 }"
          >
            <MediaCard v-for="item in continueWatching" :key="item.id" :media="item" :show-progress="true" :removable="true" fluid @remove="progressStore.remove($event)" />
          </div>
          <div v-if="progressStore.progressHasMore" class="flex justify-center mt-8">
            <a-button @click="progressStore.loadMoreProgress()">
              {{ $t('common.loadMore') }}
            </a-button>
          </div>
        </div>
        <div v-else class="text-center py-16">
          <p class="text-muted-foreground">{{ $t('profile.nothingInProgress') }}</p>
        </div>
      </a-tab-pane>

      <!-- Settings -->
      <a-tab-pane key="settings" :tab="$t('profile.settings')">
        <div class="max-w-lg pt-6 space-y-6">
          <!-- Display name -->
          <div>
            <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">{{ $t('profile.displayName') }}</label>
            <a-input v-model:value="editName" placeholder="Your name" size="large" />
          </div>

          <!-- Avatar URL -->
          <div>
            <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">{{ $t('profile.avatarUrl') }}</label>
            <a-input v-model:value="editAvatar" :placeholder="$t('profile.avatarPlaceholder')" size="large" allow-clear />
            <div v-if="editAvatar" class="mt-3 flex items-center gap-3">
              <img :src="editAvatar" class="w-12 h-12 rounded-full object-cover border border-border" alt="Preview" @error="($event.target as HTMLImageElement).style.display='none'" />
              <span class="text-xs text-muted-foreground">{{ $t('profile.avatarPreview') }}</span>
            </div>
          </div>

          <!-- Email (read only) -->
          <div>
            <label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">{{ $t('profile.email') }}</label>
            <a-input :value="authStore.user?.email" disabled size="large" />
          </div>

          <a-button type="primary" size="large" :loading="saving" @click="saveProfile">{{ $t('common.save') }}</a-button>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
