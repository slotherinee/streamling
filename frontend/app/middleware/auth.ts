export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  if (!authStore.hasUser) return navigateTo('/login')
})
