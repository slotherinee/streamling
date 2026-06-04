import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { ay as useRuntimeConfig } from './server.mjs';

function fromMovieCard(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating,
    poster: m.poster ?? "",
    backdrop: m.backdrop ?? "",
    type: "movie",
    genre: [],
    description: m.overview,
    duration: "",
    cast: []
  };
}
function fromTvCard(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.name,
    year: Number(m.firstAirYear) || 0,
    rating: m.rating,
    poster: m.poster ?? "",
    backdrop: m.backdrop ?? "",
    type: "series",
    genre: [],
    description: m.overview,
    duration: "",
    cast: []
  };
}
function fromTrending(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating ?? 0,
    poster: m.poster ?? "",
    backdrop: m.backdrop ?? "",
    type: m.mediaType === "tv" ? "series" : "movie",
    genre: [],
    description: m.overview,
    duration: "",
    cast: []
  };
}
function fromSearchResult(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating ?? 0,
    poster: m.poster ?? "",
    backdrop: "",
    type: m.mediaType === "tv" ? "series" : "movie",
    genre: [],
    description: m.overview,
    duration: "",
    cast: []
  };
}
function fromMovie(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.title,
    year: Number(m.year) || 0,
    rating: m.rating,
    poster: m.poster ?? "",
    backdrop: m.backdrop ?? "",
    type: "movie",
    genre: m.genres.map((g) => g.name),
    description: m.overview,
    duration: m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : "",
    cast: m.cast.map((c) => ({ name: c.name, role: c.character, avatar: c.avatar ?? "", personId: c.personId })),
    trailerKey: m.trailerKey ?? void 0,
    collectionId: m.collectionId ?? void 0,
    collectionName: m.collectionName ?? void 0
  };
}
function fromTvShow(m) {
  return {
    id: m.id,
    tmdbId: m.id,
    title: m.name,
    year: Number(m.firstAirYear) || 0,
    rating: m.rating,
    poster: m.poster ?? "",
    backdrop: m.backdrop ?? "",
    type: "series",
    genre: m.genres.map((g) => g.name),
    description: m.overview,
    duration: "",
    cast: m.cast.map((c) => ({ name: c.name, role: c.character, avatar: c.avatar ?? "", personId: c.personId })),
    seasons: m.numberOfSeasons,
    episodes: m.numberOfEpisodes,
    trailerKey: m.trailerKey ?? void 0
  };
}
function fromVidLink(e) {
  return {
    id: e.id,
    tmdbId: e.id,
    title: e.title,
    year: 0,
    rating: 0,
    poster: e.poster_path ? `https://image.tmdb.org/t/p/w500${e.poster_path}` : "",
    backdrop: e.backdrop_path ? `https://image.tmdb.org/t/p/w1280${e.backdrop_path}` : "",
    type: e.type === "tv" ? "series" : "movie",
    genre: [],
    description: "",
    duration: "",
    cast: [],
    progress: e.progress?.duration ? Math.min(100, Math.round(e.progress.watched / e.progress.duration * 100)) : 0
  };
}
const useProgressStore = defineStore("progress", () => {
  const data = ref({});
  const authStore = useAuthStore();
  const config = useRuntimeConfig();
  const base = config.public.apiBase;
  function _headers() {
    return authStore.accessToken ? { Authorization: `Bearer ${authStore.accessToken}` } : {};
  }
  function _toApiPayload(entry) {
    const percent = entry.progress?.duration ? Math.min(100, Math.round(entry.progress.watched / entry.progress.duration * 100)) : 0;
    return {
      tmdbId: entry.id,
      mediaType: entry.type,
      percent,
      season: entry.last_season_watched ? Number(entry.last_season_watched) : void 0,
      episode: entry.last_episode_watched ? Number(entry.last_episode_watched) : void 0
    };
  }
  function _syncToApi(entry) {
    if (!authStore.isLoggedIn) return;
    $fetch("/progress", {
      baseURL: base,
      method: "POST",
      body: _toApiPayload(entry),
      headers: _headers()
    }).catch(() => {
    });
  }
  async function init() {
    return;
  }
  function handleMessage(event) {
    if (event.origin !== "https://vidlink.pro") return;
    if (event.data?.type === "MEDIA_DATA") {
      const prev = data.value;
      data.value = event.data.data;
      if (authStore.isLoggedIn) {
        const newEntries = Object.values(data.value);
        for (const entry of newEntries) {
          const prevEntry = prev[String(entry.id)];
          const prevPct = prevEntry?.progress?.duration ? Math.round(prevEntry.progress.watched / prevEntry.progress.duration * 100) : 0;
          const newPct = entry.progress?.duration ? Math.round(entry.progress.watched / entry.progress.duration * 100) : 0;
          if (newPct !== prevPct) _syncToApi(entry);
        }
      }
    }
  }
  function getPercent(tmdbId) {
    const entry = data.value[String(tmdbId)];
    if (!entry?.progress?.duration) return 0;
    return Math.min(100, Math.round(entry.progress.watched / entry.progress.duration * 100));
  }
  function getLastEpisode(tmdbId) {
    const entry = data.value[String(tmdbId)];
    if (!entry || entry.type !== "tv") return null;
    return {
      season: Number(entry.last_season_watched) || 1,
      episode: Number(entry.last_episode_watched) || 1
    };
  }
  const allInProgress = computed(
    () => Object.values(data.value).filter((e) => e.progress?.watched > 0 && e.progress?.watched < e.progress?.duration * 0.95).sort((a, b) => (b.last_updated || 0) - (a.last_updated || 0))
  );
  const inProgress = computed(() => allInProgress.value.slice(0, 8));
  const progressPage = ref(1);
  const PROGRESS_PAGE_SIZE = 20;
  const inProgressPaged = computed(() => allInProgress.value.slice(0, progressPage.value * PROGRESS_PAGE_SIZE));
  const progressHasMore = computed(() => inProgressPaged.value.length < allInProgress.value.length);
  function loadMoreProgress() {
    if (progressHasMore.value) progressPage.value++;
  }
  function remove(tmdbId) {
    delete data.value[String(tmdbId)];
    if (authStore.isLoggedIn) {
      $fetch("/progress", {
        baseURL: base,
        method: "POST",
        body: { tmdbId, mediaType: "movie", percent: 0 },
        headers: _headers()
      }).catch(() => {
      });
      $fetch("/progress", {
        baseURL: base,
        method: "POST",
        body: { tmdbId, mediaType: "tv", percent: 0 },
        headers: _headers()
      }).catch(() => {
      });
    }
  }
  return { data, init, handleMessage, getPercent, getLastEpisode, inProgress, inProgressPaged, progressHasMore, loadMoreProgress, remove };
});

export { fromMovieCard as a, fromSearchResult as b, fromTrending as c, fromTvCard as d, fromTvShow as e, fromMovie as f, fromVidLink as g, useProgressStore as u };
//# sourceMappingURL=progress-De0Fy5DO.mjs.map
