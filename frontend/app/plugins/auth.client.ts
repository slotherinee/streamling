import { useAuthStore } from '~/stores/auth'
import type { AuthUser } from '~/stores/auth'

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()

  // Already have live access token (same-session navigation after login)
  if (authStore.isLoggedIn) return

  // No stored user — no cookie to refresh with, skip
  if (!authStore.hasUser) return

  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  try {
    // refreshToken is in HttpOnly cookie — browser sends it automatically
    const tokenRes = await $fetch<{ data: { accessToken: string } }>('/auth/refresh', {
      baseURL: base,
      method: 'POST',
      credentials: 'include',
    })
    const { accessToken } = tokenRes.data

    const meRes = await $fetch<any>('/users/me', {
      baseURL: base,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const userData: AuthUser = meRes?.data ?? meRes

    authStore.setSession(accessToken, userData)
  }
  catch {
    // No valid cookie or token expired — clear stale user data
    authStore.clear()
  }
})
