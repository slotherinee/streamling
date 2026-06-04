<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useHaptic } from '~/composables/useHaptic'
import { useAuthStore } from '~/stores/auth'
import type { AuthUser } from '~/stores/auth'

definePageMeta({ layout: 'auth' })
useHead({ title: 'Sign In — Streamly' })

const formState = reactive({ email: '', password: '' })
const loading = ref(false)
const router = useRouter()
const haptic = useHaptic()
const authStore = useAuthStore()
const config = useRuntimeConfig()
const base = config.public.apiBase as string

async function handleLogin() {
  loading.value = true
  haptic.selection()
  try {
    const res = await $fetch<{ data: { accessToken: string } }>(
      '/auth/login',
      { baseURL: base, method: 'POST', body: formState, credentials: 'include' },
    )
    const { accessToken } = res.data
    const meRes = await $fetch<{ data: AuthUser }>('/users/me', {
      baseURL: base,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    authStore.setSession(accessToken, meRes.data)
    haptic.success()
    router.push('/')
  }
  catch (err: any) {
    haptic.error()
    const msg = err?.data?.message ?? 'Invalid email or password'
    message.error(Array.isArray(msg) ? msg[0] : msg)
  }
  finally {
    loading.value = false
  }
}

function handleLoginFailed() {
  haptic.error()
}
</script>

<template>
  <div class="w-full max-w-sm">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold mb-2">Welcome back</h1>
      <p class="text-sm text-muted-foreground">Sign in to continue watching</p>
    </div>

    <a-form :model="formState" layout="vertical" @finish="handleLogin" @finish-failed="handleLoginFailed">
      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, type: 'email', message: 'Enter a valid email' }]"
      >
        <a-input
          v-model:value="formState.email"
          placeholder="you@example.com"
          :disabled="loading"
          size="large"
          allow-clear
        />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Password is required' }]"
      >
        <template #extra>
          <a class="text-xs text-primary hover:opacity-80 transition-opacity float-right -mt-6" href="#">Forgot password?</a>
        </template>
        <div class="relative">
          <a-input-password
            v-model:value="formState.password"
            placeholder="••••••••"
            :disabled="loading"
            size="large"
            class="w-full"
          />
          <button
            v-if="formState.password"
            type="button"
            aria-label="Clear password"
            class="absolute right-9 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            @click="formState.password = ''"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </a-form-item>

      <a-form-item class="!mb-2">
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          block
          :loading="loading"
          class="!font-semibold"
        >
          Sign In
        </a-button>
      </a-form-item>
    </a-form>

    <p class="text-center text-sm text-muted-foreground mt-8">
      Don't have an account?
      <NuxtLink to="/register" class="text-primary hover:opacity-80 font-medium ml-1 transition-opacity">Sign up</NuxtLink>
    </p>
  </div>
</template>
