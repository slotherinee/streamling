import { ao as useI18n, an as useHead, az as useSeoMeta, _ as __nuxt_component_0, g as __nuxt_component_8, B as Button, ay as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { defineComponent, ref, computed, withAsyncContext, watch, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { a as fromMovieCard, d as fromTvCard } from './progress-De0Fy5DO.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { S as Select } from './index-hqCdhbUA.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import 'ipx';
import 'pinia';
import 'perfect-debounce';
import '@vue/shared';
import '@tanstack/query-core';
import '@babel/runtime/helpers/esm/extends';
import 'stylis';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'vue-types';
import 'lodash-es';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './NuxtImg-zNev45Bl.mjs';
import './watchlist-hlo1lQbX.mjs';
import './auth-LLhfWJq6.mjs';
import './useHaptic-NT3uIsTJ.mjs';
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './slide-C57riDBP.mjs';
import '../_/SearchOutlined.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "discover",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    useHead({ title: "Discover — Streamly" });
    useSeoMeta({
      ogTitle: "Discover — Streamly",
      description: "Find your next favourite movie or series. Filter by genre, year, type, and rating.",
      ogDescription: "Find your next favourite movie or series. Filter by genre, year, type, and rating.",
      twitterCard: "summary_large_image"
    });
    const typeFilter = ref("all");
    const selectedGenre = ref("");
    const minYear = ref(void 0);
    const maxYear = ref(void 0);
    const minRating = ref(0);
    const sortBy = ref("popular");
    ref(1);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const yearOptions = computed(() => [
      { value: void 0, label: t("discover.anyYear") },
      ...Array.from({ length: currentYear - 1950 + 1 }, (_, i) => {
        const y = currentYear - i;
        return { value: y, label: String(y) };
      })
    ]);
    const { data: movieGenresRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch("/genres/movies")), __temp = await __temp, __restore(), __temp);
    const { data: tvGenresRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch("/genres/tv")), __temp = await __temp, __restore(), __temp);
    const genres = computed(() => {
      const names = /* @__PURE__ */ new Set([
        ...(movieGenresRaw.value ?? []).map((g) => g.name),
        ...(tvGenresRaw.value ?? []).map((g) => g.name)
      ]);
      return [...names].sort();
    });
    const sortByApiMap = {
      popular: "popular",
      rating: "rating",
      newest: "newest",
      oldest: "oldest"
    };
    function buildParams(p = 1) {
      const params = new URLSearchParams();
      if (selectedGenre.value) params.set("genre", selectedGenre.value);
      if (minYear.value) params.set("yearFrom", String(minYear.value));
      if (maxYear.value) params.set("yearTo", String(maxYear.value));
      if (minRating.value) params.set("ratingMin", String(minRating.value));
      params.set("sortBy", sortByApiMap[sortBy.value] ?? "popular");
      params.set("page", String(p));
      return params.toString();
    }
    const allMovies = ref([]);
    const allTv = ref([]);
    const movieTotalPages = ref(1);
    const tvTotalPages = ref(1);
    const moviePage = ref(1);
    const tvPage = ref(1);
    const loading = ref(false);
    async function fetchResults(reset2 = true) {
      if (reset2) {
        allMovies.value = [];
        allTv.value = [];
        moviePage.value = 1;
        tvPage.value = 1;
      }
      loading.value = true;
      const config = useRuntimeConfig();
      const base = config.public.apiBase;
      try {
        if (typeFilter.value !== "series") {
          const res = await $fetch(
            `/discover/movies?${buildParams(moviePage.value)}`,
            { baseURL: base }
          );
          const data = res.data;
          movieTotalPages.value = data.totalPages;
          allMovies.value = reset2 ? data.results.map(fromMovieCard) : [...allMovies.value, ...data.results.map(fromMovieCard)];
        }
        if (typeFilter.value !== "movie") {
          const res = await $fetch(
            `/discover/tv?${buildParams(tvPage.value)}`,
            { baseURL: base }
          );
          const data = res.data;
          tvTotalPages.value = data.totalPages;
          allTv.value = reset2 ? data.results.map(fromTvCard) : [...allTv.value, ...data.results.map(fromTvCard)];
        }
      } finally {
        loading.value = false;
      }
    }
    [__temp, __restore] = withAsyncContext(() => fetchResults()), await __temp, __restore();
    const results = computed(() => {
      const combined = [...allMovies.value, ...allTv.value];
      if (sortBy.value === "rating") return [...combined].sort((a, b) => b.rating - a.rating);
      return combined;
    });
    const hasMore = computed(() => {
      if (typeFilter.value === "movie") return moviePage.value < movieTotalPages.value;
      if (typeFilter.value === "series") return tvPage.value < tvTotalPages.value;
      return moviePage.value < movieTotalPages.value || tvPage.value < tvTotalPages.value;
    });
    async function loadMore() {
      if (typeFilter.value !== "series" && moviePage.value < movieTotalPages.value) moviePage.value++;
      if (typeFilter.value !== "movie" && tvPage.value < tvTotalPages.value) tvPage.value++;
      await fetchResults(false);
    }
    watch([typeFilter, selectedGenre, minYear, maxYear, minRating, sortBy], () => fetchResults());
    function reset() {
      typeFilter.value = "all";
      selectedGenre.value = "";
      minYear.value = void 0;
      maxYear.value = void 0;
      minRating.value = 0;
      sortBy.value = "popular";
    }
    const ratingOptions = computed(() => [
      { value: 0, label: t("discover.anyRating") },
      { value: 7, label: "7+" },
      { value: 7.5, label: "7.5+" },
      { value: 8, label: "8+" },
      { value: 8.5, label: "8.5+" },
      { value: 9, label: "9+" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_select = Select;
      const _component_MediaCardSkeleton = __nuxt_component_1;
      const _component_MediaCard = __nuxt_component_6;
      const _component_a_empty = __nuxt_component_8;
      const _component_a_button = Button;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 pt-24 pb-16" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "mb-10" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: -20, duration: 0.5 }, void 0, { from: true })))}><div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("common.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("common.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>/</span><span class="text-foreground">${ssrInterpolate(unref(t)("discover.title"))}</span></div><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${ssrInterpolate(_ctx.$t("discover.title"))}</h1><p class="text-muted-foreground mt-1">${ssrInterpolate(_ctx.$t("discover.subtitle"))}</p></div><div class="flex flex-col lg:flex-row gap-8"><aside class="w-full lg:w-64 flex-shrink-0"><div${ssrRenderAttrs(mergeProps({ class: "bg-card border border-border/50 rounded-2xl p-5 space-y-5 sticky top-20" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5, delay: 0.1 }, void 0, { from: true })))}><div class="flex items-center justify-between"><h2 class="text-sm font-bold uppercase tracking-widest text-muted-foreground">${ssrInterpolate(_ctx.$t("discover.filters"))}</h2><button class="text-xs text-primary hover:opacity-70 transition-opacity font-medium">${ssrInterpolate(_ctx.$t("common.reset"))}</button></div><div><p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">${ssrInterpolate(_ctx.$t("discover.type"))}</p><div class="flex gap-1.5"><!--[-->`);
      ssrRenderList([{ value: "all", label: _ctx.$t("common.all") }, { value: "movie", label: _ctx.$t("common.movie") }, { value: "series", label: _ctx.$t("common.series") }], (opt) => {
        _push(`<button class="${ssrRenderClass([
          "flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150",
          unref(typeFilter) === opt.value ? "bg-primary text-white border-primary" : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
        ])}">${ssrInterpolate(opt.label)}</button>`);
      });
      _push(`<!--]--></div></div><div><p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">${ssrInterpolate(_ctx.$t("discover.sortBy"))}</p><div class="grid grid-cols-2 gap-1.5"><!--[-->`);
      ssrRenderList([{ value: "popular", label: _ctx.$t("discover.trending") }, { value: "rating", label: _ctx.$t("discover.topRated") }, { value: "newest", label: _ctx.$t("discover.newest") }, { value: "oldest", label: _ctx.$t("discover.oldest") }], (opt) => {
        _push(`<button class="${ssrRenderClass([
          "py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150",
          unref(sortBy) === opt.value ? "bg-primary text-white border-primary" : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
        ])}">${ssrInterpolate(opt.label)}</button>`);
      });
      _push(`<!--]--></div></div><div><p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">${ssrInterpolate(_ctx.$t("discover.genre"))}</p><div class="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-0.5"><!--[-->`);
      ssrRenderList(unref(genres), (genre) => {
        _push(`<button class="${ssrRenderClass([
          "px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150",
          unref(selectedGenre) === genre ? "bg-primary text-white border-primary" : "bg-secondary/50 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
        ])}">${ssrInterpolate(genre)}</button>`);
      });
      _push(`<!--]--></div></div><div><p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">${ssrInterpolate(_ctx.$t("discover.year"))}</p><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_a_select, {
        value: unref(minYear),
        "onUpdate:value": ($event) => isRef(minYear) ? minYear.value = $event : null,
        size: "small",
        class: "flex-1",
        options: unref(yearOptions),
        placeholder: "From"
      }, null, _parent));
      _push(`<span class="text-muted-foreground text-xs">–</span>`);
      _push(ssrRenderComponent(_component_a_select, {
        value: unref(maxYear),
        "onUpdate:value": ($event) => isRef(maxYear) ? maxYear.value = $event : null,
        size: "small",
        class: "flex-1",
        options: unref(yearOptions),
        placeholder: "To"
      }, null, _parent));
      _push(`</div></div><div><p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">${ssrInterpolate(_ctx.$t("discover.minRating"))}</p><div class="grid grid-cols-4 gap-1"><!--[-->`);
      ssrRenderList(unref(ratingOptions).filter((o) => o.value > 0), (opt) => {
        _push(`<button class="${ssrRenderClass([
          "py-1 rounded-lg text-xs font-semibold border transition-all duration-150",
          unref(minRating) === opt.value ? "bg-amber-500 text-white border-amber-500" : "bg-secondary/50 text-muted-foreground border-border/50 hover:border-amber-500/50 hover:text-foreground"
        ])}">${ssrInterpolate(opt.label)}</button>`);
      });
      _push(`<!--]--></div></div></div></aside><div class="flex-1 min-w-0"><div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-6" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 10, duration: 0.4 }, void 0, { from: true })))}><p class="text-sm text-muted-foreground"><span class="font-semibold text-foreground">${ssrInterpolate(unref(results).length)}</span> ${ssrInterpolate(_ctx.$t("discover.titlesFound", unref(results).length))}</p></div>`);
      if (unref(loading) && unref(results).length === 0) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"><!--[-->`);
        ssrRenderList(15, (i) => {
          _push(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(results).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, {
          onEnter: true,
          from: true
        })))}><!--[-->`);
        ssrRenderList(unref(results), (item) => {
          _push(ssrRenderComponent(_component_MediaCard, {
            key: `${item.type}-${item.id}`,
            media: item,
            fluid: ""
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20">`);
        _push(ssrRenderComponent(_component_a_empty, { description: "No titles match your filters" }, null, _parent));
        _push(ssrRenderComponent(_component_a_button, {
          class: "mt-4",
          onClick: reset
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Reset filters`);
            } else {
              return [
                createTextVNode("Reset filters")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (unref(hasMore)) {
        _push(`<div class="flex justify-center mt-10">`);
        _push(ssrRenderComponent(_component_a_button, {
          size: "large",
          loading: unref(loading),
          onClick: loadMore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.loadMore"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/discover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=discover-C8tbTycp.mjs.map
