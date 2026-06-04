import { am as useFetch, ay as useRuntimeConfig } from './server.mjs';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { computed } from 'vue';

function useApiFetch(url, options) {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const resolvedUrl = computed(() => {
    const u = typeof url === "function" ? url() : url;
    if (!u) return null;
    const lang = authStore.user?.language ?? "en";
    const sep = u.includes("?") ? "&" : "?";
    return `${u}${sep}lang=${lang}`;
  });
  const baseURL = config.apiBaseServer || config.public.apiBase;
  return useFetch(
    resolvedUrl,
    {
      baseURL,
      transform: (res) => res && typeof res === "object" && "data" in res ? res.data : res,
      ...options
    },
    "$ye95mhJikQ"
    /* nuxt-injected */
  );
}

export { useApiFetch as u };
//# sourceMappingURL=useApi-CiWNERvI.mjs.map
