import { defineStore, skipHydrate } from 'pinia';
import { ref, computed } from 'vue';

const useAuthStore = defineStore("auth", () => {
  const accessToken = skipHydrate(ref(null));
  const user = skipHydrate(ref(null));
  function setSession(at, u) {
    accessToken.value = at;
    user.value = u;
  }
  function clear() {
    accessToken.value = null;
    user.value = null;
  }
  const isLoggedIn = computed(() => !!accessToken.value && !!user.value);
  const hasUser = computed(() => !!user.value);
  return { user, accessToken, isLoggedIn, hasUser, setSession, clear };
});

export { useAuthStore as u };
//# sourceMappingURL=auth-LLhfWJq6.mjs.map
