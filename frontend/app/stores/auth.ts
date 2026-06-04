import { defineStore, skipHydrate } from 'pinia'

export interface AuthUser {
  id: string
  email: string
  name: string
  avatar: string | null
  language: 'en' | 'ru'
}

const STORAGE_KEY = 'streamly_user'

export const useAuthStore = defineStore('auth', () => {
  // accessToken: memory only, never persisted (XSS risk)
  // refreshToken: HttpOnly cookie — JS cannot access it
  const accessToken = skipHydrate(ref<string | null>(null))
  const user = skipHydrate(ref<AuthUser | null>(null))

  if (import.meta.client) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) user.value = JSON.parse(raw)
    }
    catch {}
  }

  function _persistUser() {
    if (import.meta.client) {
      if (user.value) localStorage.setItem(STORAGE_KEY, JSON.stringify(user.value))
      else localStorage.removeItem(STORAGE_KEY)
    }
  }

  function setSession(at: string, u: AuthUser) {
    accessToken.value = at
    user.value = u
    _persistUser()
  }

  function clear() {
    accessToken.value = null
    user.value = null
    if (import.meta.client) localStorage.removeItem(STORAGE_KEY)
  }

  const isLoggedIn = computed(() => !!accessToken.value && !!user.value)
  const hasUser = computed(() => !!user.value)

  return { user, accessToken, isLoggedIn, hasUser, setSession, clear }
})
