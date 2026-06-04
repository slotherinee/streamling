<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useHaptic } from '~/composables/useHaptic'
import { useAuthStore } from '~/stores/auth'
import type { AuthUser } from '~/stores/auth'

definePageMeta({ layout: 'auth' })
useHead({ title: 'Create Account — Streamly' })

const formState = reactive({ name: '', email: '', password: '', agreed: false })
const loading = ref(false)
const router = useRouter()
const haptic = useHaptic()
const authStore = useAuthStore()
const config = useRuntimeConfig()
const base = config.public.apiBase as string

const passwordStrength = computed(() => {
  const p = formState.password
  if (!p) return 0
  let score = 0
  if (p.length >= 8) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  return score
})

const strengthLabel = computed(() => ['', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength.value])
const strengthColor = computed(() => ['', '#ef4444', '#f59e0b', '#eab308', '#10b981'][passwordStrength.value])

async function handleRegister() {
  loading.value = true
  haptic.selection()
  try {
    const res = await $fetch<{ data: { accessToken: string } }>(
      '/auth/register',
      { baseURL: base, method: 'POST', body: { name: formState.name, email: formState.email, password: formState.password }, credentials: 'include' },
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
    const msg = err?.data?.message ?? 'Registration failed'
    message.error(Array.isArray(msg) ? msg[0] : msg)
  }
  finally {
    loading.value = false
  }
}

function handleRegisterFailed() {
  haptic.error()
}

function agreementValidator(_: any, v: boolean) {
  return v ? Promise.resolve() : Promise.reject(new Error('Please accept terms'))
}
</script>

<template>
  <div class="w-full max-w-sm">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold mb-2">Create your account</h1>
      <p class="text-sm text-muted-foreground">Start streaming in seconds</p>
    </div>

    <a-form :model="formState" layout="vertical" @finish="handleRegister" @finish-failed="handleRegisterFailed">
      <a-form-item
        label="Full Name"
        name="name"
        :rules="[{ required: true, message: 'Name is required' }]"
      >
        <a-input v-model:value="formState.name" placeholder="Alex Johnson" size="large" :disabled="loading" allow-clear />
      </a-form-item>

      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, type: 'email', message: 'Enter a valid email' }]"
      >
        <a-input v-model:value="formState.email" placeholder="you@example.com" type="email" size="large" :disabled="loading" allow-clear />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, min: 6, message: 'Min 6 characters' }]"
      >
        <div class="relative">
          <a-input-password
            v-model:value="formState.password"
            placeholder="Min. 6 characters"
            size="large"
            :disabled="loading"
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
        <!-- Strength bar -->
        <div v-if="formState.password" class="mt-2 space-y-1">
          <div class="flex gap-1">
            <div
              v-for="i in 4"
              :key="i"
              class="h-1 flex-1 rounded-full transition-all duration-300"
              :style="{ background: i <= passwordStrength ? strengthColor : 'hsl(var(--border))' }"
            />
          </div>
          <p class="text-xs text-muted-foreground">
            Strength: <span :style="{ color: strengthColor }">{{ strengthLabel }}</span>
          </p>
        </div>
      </a-form-item>

      <a-form-item name="agreed" :rules="[{ validator: agreementValidator }]">
        <a-checkbox v-model:checked="formState.agreed" :disabled="loading">
          <span class="text-sm text-muted-foreground">
            I agree to the
            <a class="text-primary hover:opacity-80" href="#">Terms of Service</a>
            and
            <a class="text-primary hover:opacity-80" href="#">Privacy Policy</a>
          </span>
        </a-checkbox>
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
          Create Account
        </a-button>
      </a-form-item>
    </a-form>

    <p class="text-center text-sm text-muted-foreground mt-6">
      Already have an account?
      <NuxtLink to="/login" class="text-primary hover:opacity-80 font-medium ml-1 transition-opacity">Sign in</NuxtLink>
    </p>
  </div>
</template>
