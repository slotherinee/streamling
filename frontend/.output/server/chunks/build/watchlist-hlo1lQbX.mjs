import { defineStore } from 'pinia';
import { d as fromTvCard, a as fromMovieCard } from './progress-De0Fy5DO.mjs';
import { ref } from 'vue';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { ay as useRuntimeConfig } from './server.mjs';

const PAGE_SIZE = 20;
const useWatchlistStore = defineStore("watchlist", () => {
  const items = ref([]);
  const total = ref(0);
  const currentPage = ref(0);
  const hasMore = ref(false);
  const loading = ref(false);
  const authStore = useAuthStore();
  const config = useRuntimeConfig();
  const base = config.public.apiBase;
  function _headers() {
    return authStore.accessToken ? { Authorization: `Bearer ${authStore.accessToken}` } : {};
  }
  async function _fetchMedia(tmdbId, mediaType) {
    try {
      const path = mediaType === "tv" ? `/tv/${tmdbId}` : `/movies/${tmdbId}`;
      const res = await $fetch(path, { baseURL: base });
      const raw = res?.data;
      if (!raw) return null;
      return mediaType === "tv" ? fromTvCard(raw) : fromMovieCard(raw);
    } catch {
      return null;
    }
  }
  async function _fetchPage(page, append = false) {
    loading.value = true;
    try {
      const res = await $fetch(
        `/watchlist?page=${page}&limit=${PAGE_SIZE}`,
        { baseURL: base, headers: _headers() }
      );
      const data = res?.data;
      if (!data) return;
      total.value = data.total;
      currentPage.value = data.page;
      hasMore.value = data.page < data.pages;
      const results = await Promise.allSettled(
        data.items.map((r) => _fetchMedia(r.tmdbId, r.mediaType))
      );
      const fetched = results.filter((r) => r.status === "fulfilled" && r.value !== null).map((r) => r.value);
      if (append) items.value.push(...fetched);
      else items.value = fetched;
    } catch {
    } finally {
      loading.value = false;
    }
  }
  async function init() {
    return;
  }
  async function loadMore() {
    if (!hasMore.value || loading.value) return;
    await _fetchPage(currentPage.value + 1, true);
  }
  async function toggle(media) {
    if (authStore.isLoggedIn) {
      const wasIn = has(media.id);
      if (wasIn) {
        items.value = items.value.filter((m) => m.id !== media.id);
        total.value = Math.max(0, total.value - 1);
      } else {
        items.value.unshift(media);
        total.value++;
      }
      try {
        const res = await $fetch(
          "/watchlist",
          {
            baseURL: base,
            method: "POST",
            body: { tmdbId: media.id, mediaType: media.type === "series" ? "tv" : "movie" },
            headers: _headers()
          }
        );
        return res?.data?.action ?? (wasIn ? "removed" : "added");
      } catch {
        if (wasIn) {
          items.value.unshift(media);
          total.value++;
        } else {
          items.value = items.value.filter((m) => m.id !== media.id);
          total.value--;
        }
        return wasIn ? "added" : "removed";
      }
    } else {
      if (has(media.id)) {
        items.value = items.value.filter((m) => m.id !== media.id);
        total.value = items.value.length;
        return "removed";
      }
      items.value.unshift(media);
      total.value = items.value.length;
      return "added";
    }
  }
  function has(id) {
    return items.value.some((m) => m.id === id);
  }
  return { items, total, hasMore, loading, init, loadMore, toggle, has };
});

export { useWatchlistStore as u };
//# sourceMappingURL=watchlist-hlo1lQbX.mjs.map
