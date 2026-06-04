export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore()
  const i18n = nuxtApp.$i18n as { setLocale: (lang: string) => Promise<void> }

  nuxtApp.hook('app:mounted', () => {
    const userLang = authStore.user?.language
    if (userLang) {
      i18n.setLocale(userLang)
    }
    else {
      const stored = localStorage.getItem('lang') as 'en' | 'ru' | null
      if (stored && stored !== 'en') i18n.setLocale(stored)
    }

    watch(
      () => authStore.user?.language,
      (lang) => { if (lang) i18n.setLocale(lang) },
    )
  })
})
