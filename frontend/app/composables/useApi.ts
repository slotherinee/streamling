export function useApiFetch<T>(
  url: string | null | (() => string | null),
  options?: Parameters<typeof useFetch>[1],
) {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  const resolvedUrl = computed(() => {
    const u = typeof url === 'function' ? url() : url
    if (!u) return null
    const lang = authStore.user?.language ?? 'en'
    const sep = u.includes('?') ? '&' : '?'
    return `${u}${sep}lang=${lang}`
  })

  const baseURL = import.meta.server
    ? ((config.apiBaseServer as string) || (config.public.apiBase as string))
    : (config.public.apiBase as string)

  return useFetch<T>(resolvedUrl, {
    baseURL,
    transform: (res: any) => (res && typeof res === 'object' && 'data' in res ? res.data : res),
    ...options,
  })
}
