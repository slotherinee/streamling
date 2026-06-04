import { ao as useI18n, _ as __nuxt_component_0, i as api$1 } from './server.mjs';
import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, withModifiers, createCommentVNode, toDisplayString, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useWatchlistStore } from './watchlist-hlo1lQbX.mjs';
import { u as useProgressStore } from './progress-De0Fy5DO.mjs';
import { u as useHaptic } from './useHaptic-NT3uIsTJ.mjs';

const backdrops = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80",
  "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1920&q=80",
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&q=80",
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1920&q=80",
  "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1920&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80"
];
const posters = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
  "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&q=80",
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80",
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&q=80",
  "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=400&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80"
];
const avatarUrls = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8"
];
const allMedia = [
  {
    id: 1,
    tmdbId: 157336,
    title: "Echoes of the Void",
    year: 2024,
    rating: 8.4,
    duration: "2h 18m",
    genre: ["Sci-Fi", "Thriller"],
    description: "A lone astronaut discovers a derelict space station harboring a consciousness unlike anything humanity has ever encountered. As she delves deeper, the line between reality and simulation begins to dissolve.",
    backdrop: backdrops[0],
    poster: posters[0],
    type: "movie",
    director: "Aria Chen",
    cast: [
      { name: "Mara Voss", role: "Commander Elena Reyes", avatar: avatarUrls[0], personId: 1 },
      { name: "Jin Park", role: "Dr. Kiran Mehta", avatar: avatarUrls[1], personId: 2 },
      { name: "Sam Okafor", role: "ARIA (Voice)", avatar: avatarUrls[2] },
      { name: "Lena Brandt", role: "Mission Control", avatar: avatarUrls[3] }
    ],
    trending: true,
    featured: true,
    trailerKey: "zSWdZVtXT7E",
    collectionId: 1,
    collectionName: "Echoes Universe"
  },
  {
    id: 2,
    tmdbId: 1396,
    title: "Midnight Protocol",
    year: 2024,
    rating: 9.1,
    duration: "45m",
    genre: ["Crime", "Drama"],
    description: "An elite detective unit operates in the shadows of a corrupt city, navigating moral ambiguity to bring down a criminal syndicate that has infiltrated the highest levels of government.",
    backdrop: backdrops[1],
    poster: posters[1],
    type: "series",
    seasons: 2,
    episodes: 16,
    cast: [
      { name: "Rafael Ortega", role: "Detective Noa Reiss", avatar: avatarUrls[4], personId: 3 },
      { name: "Yuki Tanaka", role: "Commissioner Adler", avatar: avatarUrls[5], personId: 4 },
      { name: "Clara Mason", role: 'Informant "Ghost"', avatar: avatarUrls[6] },
      { name: "Omar Saeed", role: "The Broker", avatar: avatarUrls[7] }
    ],
    trending: true,
    new: true,
    trailerKey: "HhesaQXLuRY"
  },
  {
    id: 3,
    tmdbId: 27205,
    title: "The Last Garden",
    year: 2023,
    rating: 7.8,
    duration: "1h 52m",
    genre: ["Drama", "Romance"],
    description: "In a world where nature has been reduced to a single preserved garden, two strangers find connection and conflict as they compete for the last botanical research position.",
    backdrop: backdrops[2],
    poster: posters[2],
    type: "movie",
    director: "Sofia Laurent",
    cast: [
      { name: "Aisha Bello", role: "Dr. Lyra Vance", avatar: avatarUrls[0], personId: 5 },
      { name: "Kai Eriksen", role: "Marcus Cole", avatar: avatarUrls[1] }
    ],
    trending: false,
    trailerKey: "YoHD9XEInc0",
    collectionId: 2,
    collectionName: "Wanderer Chronicles"
  },
  {
    id: 4,
    tmdbId: 438631,
    title: "Fractured Skies",
    year: 2024,
    rating: 8.7,
    duration: "2h 5m",
    genre: ["Action", "Sci-Fi"],
    description: "When Earth's atmosphere begins to collapse, a rogue pilot and a disgraced scientist must work together to deliver a cure across hostile airspace.",
    backdrop: backdrops[3],
    poster: posters[3],
    type: "movie",
    director: "Marcus Webb",
    cast: [
      { name: "Zoe Castillo", role: "Ace Dayo", avatar: avatarUrls[2], personId: 6 },
      { name: "Finn O'Brien", role: "Dr. Hana Sato", avatar: avatarUrls[3] }
    ],
    trending: true,
    new: true,
    trailerKey: "Way9Dexny3w",
    collectionId: 1,
    collectionName: "Echoes Universe"
  },
  {
    id: 5,
    tmdbId: 71446,
    title: "Neon Requiem",
    year: 2023,
    rating: 8,
    duration: "55m",
    genre: ["Neo-Noir", "Mystery"],
    description: "A jazz musician in a rain-soaked cyberpunk city uncovers a conspiracy that stretches from the underground clubs to the corporate towers above the clouds.",
    backdrop: backdrops[4],
    poster: posters[4],
    type: "series",
    seasons: 1,
    episodes: 8,
    cast: [
      { name: "Leo Morrow", role: "Sol Vega", avatar: avatarUrls[4], personId: 7 },
      { name: "Nina Bauer", role: "Iris", avatar: avatarUrls[5] }
    ],
    new: true,
    progress: 45,
    trailerKey: "_InqQJRqGW4"
  },
  {
    id: 6,
    tmdbId: 335984,
    title: "Deep Current",
    year: 2024,
    rating: 7.5,
    duration: "1h 44m",
    genre: ["Thriller", "Adventure"],
    description: "A marine biologist's routine survey dive turns into a fight for survival when she discovers a classified underwater facility that someone wants kept secret forever.",
    backdrop: backdrops[5],
    poster: posters[5],
    type: "movie",
    director: "Priya Nair",
    cast: [
      { name: "Cleo Andersen", role: "Dr. Mila Ross", avatar: avatarUrls[6], personId: 8 },
      { name: "Jared Stone", role: "Commander Walsh", avatar: avatarUrls[7] }
    ],
    progress: 72,
    trailerKey: "gD6kgQrvSBE"
  },
  {
    id: 7,
    tmdbId: 66732,
    title: "Ember and Ash",
    year: 2023,
    rating: 8.9,
    duration: "50m",
    genre: ["Fantasy", "Drama"],
    description: "In a world where fire mages are hunted to extinction, the last ember-keeper must decide whether to hide her gift or ignite a revolution.",
    backdrop: backdrops[6],
    poster: posters[6],
    type: "series",
    seasons: 3,
    episodes: 24,
    cast: [
      { name: "Aria Storm", role: "Kira Embermane", avatar: avatarUrls[0], personId: 9 },
      { name: "Theo Black", role: "The Warden", avatar: avatarUrls[1] }
    ],
    trending: true,
    progress: 30,
    trailerKey: "b9EkMc79ZSU"
  },
  {
    id: 8,
    tmdbId: 155,
    title: "Cold Signal",
    year: 2024,
    rating: 8.2,
    duration: "1h 58m",
    genre: ["Espionage", "Thriller"],
    description: "A retired signals intelligence officer is pulled back into service when encrypted messages bearing her old codename begin appearing in hostile communications.",
    backdrop: backdrops[7],
    poster: posters[7],
    type: "movie",
    director: "Ivan Petrov",
    cast: [
      { name: "Helene Dubois", role: "Agent Miriam Cross", avatar: avatarUrls[2], personId: 10 },
      { name: "Andre Visser", role: "Director Holt", avatar: avatarUrls[3] }
    ],
    new: true,
    trailerKey: "kmJLuwBeTFk"
  },
  {
    id: 9,
    tmdbId: 693134,
    title: "The Cartographer",
    year: 2023,
    rating: 7.9,
    duration: "2h 10m",
    genre: ["Adventure", "Drama"],
    description: "Following an ancient map hidden inside a stolen painting, an unlikely trio traverses unmapped territories where geography itself seems to shift around them.",
    backdrop: backdrops[8],
    poster: posters[8],
    type: "movie",
    director: "Elena Vasquez",
    cast: [
      { name: "Sam Rivers", role: "Professor Hale", avatar: avatarUrls[4] },
      { name: "Mia Chen", role: "Zoe Park", avatar: avatarUrls[5] }
    ],
    trailerKey: "8g18jFHCLXk",
    collectionId: 2,
    collectionName: "Wanderer Chronicles"
  },
  {
    id: 10,
    tmdbId: 71912,
    title: "White Noise Protocol",
    year: 2024,
    rating: 8.5,
    duration: "48m",
    genre: ["Sci-Fi", "Horror"],
    description: "A research station in the Arctic begins receiving transmissions from the future. Each message is a warning. None of them match.",
    backdrop: backdrops[9],
    poster: posters[9],
    type: "series",
    seasons: 1,
    episodes: 6,
    cast: [
      { name: "Nico Ferrer", role: "Dr. Odin Marsh", avatar: avatarUrls[6] },
      { name: "Asha Wolfe", role: "Lieutenant Vane", avatar: avatarUrls[7] }
    ],
    trending: true,
    new: true,
    trailerKey: "ndl5d1lCv8I"
  },
  {
    id: 11,
    tmdbId: 475557,
    title: "Glass Horizon",
    year: 2023,
    rating: 7.6,
    duration: "1h 47m",
    genre: ["Drama", "Sci-Fi"],
    description: "A glass sculptor discovers that her creations are windows into parallel timelines, forcing her to choose between infinite possibilities and the life she already has.",
    backdrop: backdrops[10],
    poster: posters[10],
    type: "movie",
    director: "Tomas Berg",
    cast: [
      { name: "Vera Lindqvist", role: "Aelys Quinn", avatar: avatarUrls[0] },
      { name: "Marco Diaz", role: "The Archivist", avatar: avatarUrls[1] }
    ],
    trailerKey: "zAGVQLHvwOY"
  },
  {
    id: 12,
    tmdbId: 69740,
    title: "Saltwater Kings",
    year: 2024,
    rating: 8.3,
    duration: "52m",
    genre: ["Crime", "Drama", "Action"],
    description: "Three siblings inherit their father's fishing empire and discover it was built on blood money, facing rival gangs, corrupt officials, and their own darkest impulses.",
    backdrop: backdrops[11],
    poster: posters[11],
    type: "series",
    seasons: 2,
    episodes: 18,
    cast: [
      { name: "Dante Reyes", role: "Marco Salinas", avatar: avatarUrls[2] },
      { name: "Isabel Novas", role: "Carmen Salinas", avatar: avatarUrls[3] },
      { name: "Elio Cruz", role: "Paulo Salinas", avatar: avatarUrls[4] }
    ],
    trending: true,
    trailerKey: "5hAXVqrljbs"
  }
];
allMedia.filter((m) => m.trending);
allMedia.filter((m) => m.new);
allMedia.filter((m) => m.progress !== void 0);
allMedia.find((m) => m.featured) || allMedia[0];
const episodeTitleSets = {
  2: [
    ["Pilot", "The Informant", "Blind Spots", "The Drop", "Internal Affairs", "Ghost Protocol", "Crossfire", "Checkmate"],
    ["Recon", "The Syndicate", "Double Cross", "Red Board", "Safe House", "The Mole", "Last Move", "Endgame"]
  ],
  5: [
    ["Neon City Blues", "The First Note", "Ivory Keys", "Below the Clouds", "Static", "The Long Con", "Last Set", "Resolution"]
  ],
  7: [
    ["The Ember-Keeper", "First Flame", "Ash and Blood", "The Warden Comes", "Hidden Fire", "Flare", "The Trial", "Into the Dark"],
    ["Return", "Embers Scattered", "The Order", "Smoke and Mirrors", "Kindling", "The Pyreborn", "Revolution Starts", "The Last Pyre"],
    ["A New World", "Scars", "Rekindled", "The Council", "Siege", "Ash Crown", "The Final Flame", "Epilogue"]
  ],
  10: [
    ["Signal One", "Transmission", "Static Noise", "White Room", "The Frequency", "End of Signal"]
  ],
  12: [
    ["Blood Tide", "The Will", "Salt and Sin", "The Rival", "Undercut", "Rip Current", "Family Business", "Harbour of Bones"],
    ["Inheritance", "The Ledger", "Hostile Waters", "Takeover", "Undertow", "The Reckoning", "Broken Nets", "Kings No More", "Tide Turns", "Legacy"]
  ]
};
const episodeOverviews = [
  "Secrets surface as loyalties are tested in a tense confrontation no one saw coming.",
  "A seemingly routine task spirals into chaos when an unexpected figure appears.",
  "The past resurfaces, forcing our protagonist to make a choice they cannot take back.",
  "Alliances shift dramatically after a revelation changes everything the characters thought they knew.",
  "An uneasy truce breaks down as the true stakes of the conflict become clear.",
  "A quiet episode that builds devastating tension toward an explosive climax.",
  "Sacrifices are made. Some wounds cannot be healed.",
  "The road ahead narrows. Every decision now has permanent consequences."
];
function buildEpisodes(mediaId, seasonNumber) {
  const titles = episodeTitleSets[mediaId]?.[seasonNumber - 1] ?? [];
  return titles.map((name, i) => ({
    episodeNumber: i + 1,
    name,
    overview: episodeOverviews[i % episodeOverviews.length],
    airDate: `202${3 + Math.floor((mediaId + seasonNumber + i) % 2)}-0${(mediaId + i) % 9 + 1}-${String((i * 7 + 1) % 28 + 1).padStart(2, "0")}`,
    stillPath: backdrops[(mediaId + seasonNumber + i) % backdrops.length],
    runtime: 38 + (mediaId + seasonNumber + i) % 20
  }));
}
[
  {
    id: 1,
    mediaId: 2,
    seasonNumber: 1,
    name: "Season 1",
    overview: "Detective Noa Reiss is assigned to a case that will pull her deep into the criminal underworld — and into the corrupt heart of the city's police force.",
    posterPath: posters[1],
    airDate: "2023-09-10",
    episodes: buildEpisodes(2, 1)
  },
  {
    id: 2,
    mediaId: 2,
    seasonNumber: 2,
    name: "Season 2",
    overview: "With the syndicate weakened but not broken, Reiss must navigate internal betrayal and a new threat that reaches the highest levels of government.",
    posterPath: posters[1],
    airDate: "2024-04-22",
    episodes: buildEpisodes(2, 2)
  },
  {
    id: 3,
    mediaId: 5,
    seasonNumber: 1,
    name: "Season 1",
    overview: "Jazz musician Sol Vega stumbles into a conspiracy that could bring down the most powerful corporation in Neon City — if it doesn't kill him first.",
    posterPath: posters[4],
    airDate: "2023-11-03",
    episodes: buildEpisodes(5, 1)
  },
  {
    id: 4,
    mediaId: 7,
    seasonNumber: 1,
    name: "Season 1 — The Hidden Flame",
    overview: "Kira Embermane discovers her power and learns that hiding it is no longer an option when the Warden's hunters arrive in her village.",
    posterPath: posters[6],
    airDate: "2023-03-15",
    episodes: buildEpisodes(7, 1)
  },
  {
    id: 5,
    mediaId: 7,
    seasonNumber: 2,
    name: "Season 2 — The Order of Ash",
    overview: "Forced from hiding, Kira must unite the scattered ember-keepers against a ruthless new faction that seeks to weaponise fire magic for conquest.",
    posterPath: posters[6],
    airDate: "2023-10-08",
    episodes: buildEpisodes(7, 2)
  },
  {
    id: 6,
    mediaId: 7,
    seasonNumber: 3,
    name: "Season 3 — Revolution",
    overview: "The final battle for the fate of the mages begins. Every alliance will be tested and not everyone will survive the last flame.",
    posterPath: posters[6],
    airDate: "2024-06-20",
    episodes: buildEpisodes(7, 3)
  },
  {
    id: 7,
    mediaId: 10,
    seasonNumber: 1,
    name: "Season 1",
    overview: "Scientists at an Arctic research station begin receiving transmissions from the future. The messages are warnings — and they're getting worse.",
    posterPath: posters[9],
    airDate: "2024-02-14",
    episodes: buildEpisodes(10, 1)
  },
  {
    id: 8,
    mediaId: 12,
    seasonNumber: 1,
    name: "Season 1 — Blood Tide",
    overview: "The Salinas siblings inherit their father's fishing empire and discover the horrifying source of the family's wealth.",
    posterPath: posters[11],
    airDate: "2023-07-01",
    episodes: buildEpisodes(12, 1)
  },
  {
    id: 9,
    mediaId: 12,
    seasonNumber: 2,
    name: "Season 2 — The Reckoning",
    overview: "With rivals closing in and loyalties fracturing within the family, the Salinas siblings face a reckoning that will define their legacy — or end it.",
    posterPath: posters[11],
    airDate: "2024-03-12",
    episodes: buildEpisodes(12, 2)
  }
];
function mediaDetailPath(media) {
  return media.type === "series" ? `/tv/${media.id}` : `/movie/${media.id}`;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MediaCard",
  __ssrInlineRender: true,
  props: {
    media: {},
    size: { default: "default" },
    showProgress: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    removable: { type: Boolean, default: false }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const emit = __emit;
    const watchlistStore = useWatchlistStore();
    const progressStore = useProgressStore();
    const haptic = useHaptic();
    const sizeClasses = {
      sm: "w-36 flex-shrink-0",
      default: "w-48 flex-shrink-0",
      lg: "w-64 flex-shrink-0"
    };
    const imageLoaded = ref(false);
    const imgRef = ref(null);
    const progressPercent = computed(() => {
      const real = progressStore.getPercent(props.media.tmdbId);
      if (real > 0) return real;
      return props.showProgress ? props.media.progress || 0 : 0;
    });
    function handleRemove(e) {
      e.preventDefault();
      e.stopPropagation();
      haptic.selection();
      emit("remove", props.media.id);
    }
    async function handleWatchlistToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      const result = await watchlistStore.toggle(props.media);
      if (result === "added") {
        haptic.success();
        api$1.success(t("media.addedWatchlistShort"));
      } else {
        haptic.selection();
        api$1.info(t("media.removedWatchlistShort"));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_5;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(mediaDetailPath)(__props.media),
        class: ["group block relative cursor-pointer", __props.fluid ? "w-full" : sizeClasses[__props.size]],
        "aria-label": `${__props.media.title} (${__props.media.year}), ${__props.media.type === "series" ? `series, ${__props.media.seasons} season${(__props.media.seasons || 1) !== 1 ? "s" : ""}` : "movie"}, rated ${__props.media.rating} out of 10`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative aspect-[2/3] rounded-xl overflow-hidden bg-secondary border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              ref_key: "imgRef",
              ref: imgRef,
              src: __props.media.poster,
              alt: __props.media.title,
              class: [
                "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
                unref(imageLoaded) ? "" : "blur-sm scale-105"
              ],
              loading: "lazy",
              format: "webp",
              width: "200",
              height: "300",
              onLoad: ($event) => imageLoaded.value = true
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 gradient-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"${_scopeId}></div><div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true"${_scopeId}><div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"${_scopeId}><svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M8 5v14l11-7z"${_scopeId}></path></svg></div></div><button type="button" class="${ssrRenderClass([
              "absolute top-2 right-2 w-7 h-7 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 z-10",
              unref(watchlistStore).has(__props.media.id) ? "bg-primary text-white opacity-100 scale-100" : "bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-primary/80"
            ])}"${ssrRenderAttr(
              "aria-label",
              unref(watchlistStore).has(__props.media.id) ? `Remove ${__props.media.title} from watchlist` : `Add ${__props.media.title} to watchlist`
            )}${_scopeId}><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}>`);
            if (unref(watchlistStore).has(__props.media.id)) {
              _push2(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"${_scopeId}></path>`);
            } else {
              _push2(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path>`);
            }
            _push2(`</svg></button>`);
            if (__props.removable) {
              _push2(`<button type="button"${ssrRenderAttr("aria-label", `Remove ${__props.media.title} from continue watching`)} class="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 text-white transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-600/80 hover:border-red-400/50"${_scopeId}><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.media.new) {
              _push2(`<div class="absolute top-2 left-2"${_scopeId}><span class="inline-flex items-center px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold"${_scopeId}> New </span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute bottom-2 left-1" aria-hidden="true"${_scopeId}><span class="inline-flex items-center px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium border border-white/10"${_scopeId}>${ssrInterpolate(__props.media.type === "series" ? _ctx.$t("common.series") : _ctx.$t("common.movie"))}</span></div>`);
            if (unref(progressPercent) > 0) {
              _push2(`<div class="absolute bottom-0 left-0 right-0 h-1 bg-white/20" aria-hidden="true"${_scopeId}><div class="h-full bg-primary transition-all duration-300" style="${ssrRenderStyle({ width: `${unref(progressPercent)}%` })}"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-2.5 px-0.5"${_scopeId}><h3 class="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200 leading-tight"${_scopeId}>${ssrInterpolate(__props.media.title)}</h3>`);
            if (__props.media.year || __props.media.rating) {
              _push2(`<div class="flex items-center gap-2 mt-1"${_scopeId}>`);
              if (__props.media.year) {
                _push2(`<span class="text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(__props.media.year)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.media.year && __props.media.rating) {
                _push2(`<span class="w-1 h-1 rounded-full bg-border" aria-hidden="true"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.media.rating) {
                _push2(`<div class="flex items-center gap-1"${_scopeId}><svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"${_scopeId}></path></svg><span class="text-xs text-amber-400 font-medium"${_scopeId}>${ssrInterpolate(__props.media.rating?.toFixed(1))}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-wrap gap-1 mt-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.media.genre.slice(0, 2), (genre, i) => {
              _push2(`<span class="text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(genre)}`);
              if (i < Math.min(__props.media.genre.length, 2) - 1) {
                _push2(`<span aria-hidden="true"${_scopeId}> · </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative aspect-[2/3] rounded-xl overflow-hidden bg-secondary border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10" }, [
                createVNode(_component_NuxtImg, {
                  ref_key: "imgRef",
                  ref: imgRef,
                  src: __props.media.poster,
                  alt: __props.media.title,
                  class: [
                    "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
                    unref(imageLoaded) ? "" : "blur-sm scale-105"
                  ],
                  loading: "lazy",
                  format: "webp",
                  width: "200",
                  height: "300",
                  onLoad: ($event) => imageLoaded.value = true
                }, null, 8, ["src", "alt", "class", "onLoad"]),
                createVNode("div", {
                  class: "absolute inset-0 gradient-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "aria-hidden": "true"
                }),
                createVNode("div", {
                  class: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300",
                  "aria-hidden": "true"
                }, [
                  createVNode("div", { class: "w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 text-white ml-0.5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", { d: "M8 5v14l11-7z" })
                    ]))
                  ])
                ]),
                createVNode("button", {
                  type: "button",
                  class: [
                    "absolute top-2 right-2 w-7 h-7 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 z-10",
                    unref(watchlistStore).has(__props.media.id) ? "bg-primary text-white opacity-100 scale-100" : "bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-primary/80"
                  ],
                  "aria-label": unref(watchlistStore).has(__props.media.id) ? `Remove ${__props.media.title} from watchlist` : `Add ${__props.media.title} to watchlist`,
                  onClick: withModifiers(handleWatchlistToggle, ["prevent"])
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-3.5 h-3.5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [
                    unref(watchlistStore).has(__props.media.id) ? (openBlock(), createBlock("path", {
                      key: 0,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2.5",
                      d: "M5 13l4 4L19 7"
                    })) : (openBlock(), createBlock("path", {
                      key: 1,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 4v16m8-8H4"
                    }))
                  ]))
                ], 10, ["aria-label"]),
                __props.removable ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  "aria-label": `Remove ${__props.media.title} from continue watching`,
                  class: "absolute top-2 left-2 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 text-white transition-all duration-200 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-600/80 hover:border-red-400/50",
                  onClick: withModifiers(handleRemove, ["prevent"])
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-3 h-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2.5",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["aria-label"])) : createCommentVNode("", true),
                __props.media.new ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "absolute top-2 left-2"
                }, [
                  createVNode("span", { class: "inline-flex items-center px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold" }, " New ")
                ])) : createCommentVNode("", true),
                createVNode("div", {
                  class: "absolute bottom-2 left-1",
                  "aria-hidden": "true"
                }, [
                  createVNode("span", { class: "inline-flex items-center px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium border border-white/10" }, toDisplayString(__props.media.type === "series" ? _ctx.$t("common.series") : _ctx.$t("common.movie")), 1)
                ]),
                unref(progressPercent) > 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 left-0 right-0 h-1 bg-white/20",
                  "aria-hidden": "true"
                }, [
                  createVNode("div", {
                    class: "h-full bg-primary transition-all duration-300",
                    style: { width: `${unref(progressPercent)}%` }
                  }, null, 4)
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "mt-2.5 px-0.5" }, [
                createVNode("h3", { class: "text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-200 leading-tight" }, toDisplayString(__props.media.title), 1),
                __props.media.year || __props.media.rating ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-2 mt-1"
                }, [
                  __props.media.year ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-xs text-muted-foreground"
                  }, toDisplayString(__props.media.year), 1)) : createCommentVNode("", true),
                  __props.media.year && __props.media.rating ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "w-1 h-1 rounded-full bg-border",
                    "aria-hidden": "true"
                  })) : createCommentVNode("", true),
                  __props.media.rating ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "flex items-center gap-1"
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-3 h-3 text-amber-400",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true"
                    }, [
                      createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                    ])),
                    createVNode("span", { class: "text-xs text-amber-400 font-medium" }, toDisplayString(__props.media.rating?.toFixed(1)), 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex flex-wrap gap-1 mt-1" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.media.genre.slice(0, 2), (genre, i) => {
                    return openBlock(), createBlock("span", {
                      key: genre,
                      class: "text-xs text-muted-foreground"
                    }, [
                      createTextVNode(toDisplayString(genre), 1),
                      i < Math.min(__props.media.genre.length, 2) - 1 ? (openBlock(), createBlock("span", {
                        key: 0,
                        "aria-hidden": "true"
                      }, " · ")) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "MediaCard" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=MediaCard-BGmgqYjl.mjs.map
