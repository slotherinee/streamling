/**
 * Client-side cached fetch via TanStack Query.
 * Use this instead of useApiFetch when you want SPA navigation cache
 * (no refetch when navigating back to a page within the same session).
 *
 * staleTime presets:
 *   STALE.DETAIL  — 1h  (movie/tv detail, person, collection)
 *   STALE.LIST    — 15m (trending, popular, top-rated lists)
 *   STALE.SEARCH  — 5m  (search results, discover)
 *   STALE.STATIC  — 24h (genres)
 */
export const STALE = {
  DETAIL: 60 * 60 * 1000,
  LIST: 15 * 60 * 1000,
  SEARCH: 5 * 60 * 1000,
  STATIC: 24 * 60 * 60 * 1000,
} as const

export function useQueryFetch<T>(
  queryKey: (string | number | undefined)[],
  url: string | (() => string),
  options?: {
    staleTime?: number
    enabled?: () => boolean
  },
) {
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  const resolveUrl = typeof url === 'function' ? url : () => url

  return useQuery<T>({
    queryKey,
    queryFn: async (): Promise<T> => {
      const res = await $fetch<any>(`${base}${resolveUrl()}`)
      return (res && typeof res === 'object' && 'data' in res ? res.data : res) as T
    },
    staleTime: options?.staleTime ?? STALE.LIST,
    enabled: options?.enabled ? options.enabled() : true,
  })
}
