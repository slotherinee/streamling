import { ao as useI18n, aw as useRoute, an as useHead, az as useSeoMeta, _ as __nuxt_component_0, B as Button, g as __nuxt_component_8, ay as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { defineComponent, computed, ref, withAsyncContext, watch, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as fromTvCard, c as fromTrending, a as fromMovieCard } from './progress-De0Fy5DO.mjs';
import { u as usePageReady } from './usePageReady-CEiMWPaE.mjs';
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
  __name: "[category]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const category = computed(() => route.params.category);
    const knownCategories = ["trending", "new", "top-rated", "movie", "series", "all", "upcoming", "airing-today", "on-the-air", "tv-top-rated"];
    const genreSlugToName = (slug) => slug.replace(/-/g, " ");
    const meta = computed(() => {
      const key = category.value;
      if (knownCategories.includes(key)) {
        return {
          title: t(`browse.cat.${key}.title`),
          description: t(`browse.cat.${key}.desc`)
        };
      }
      const name = genreSlugToName(key);
      return { title: name.replace(/\b\w/g, (c) => c.toUpperCase()), description: `${name} titles` };
    });
    useHead({ title: computed(() => `${meta.value.title} — Streamly`) });
    useSeoMeta({
      ogTitle: computed(() => `${meta.value.title} — Streamly`),
      description: computed(() => meta.value.description ? `${meta.value.description} on Streamly` : "Browse content on Streamly"),
      ogDescription: computed(() => meta.value.description ? `${meta.value.description} on Streamly` : "Browse content on Streamly"),
      ogImage: "/og-default.jpg",
      twitterCard: "summary_large_image"
    });
    const config = useRuntimeConfig();
    const base = config.public.apiBase;
    const tvCategories = /* @__PURE__ */ new Set(["series", "airing-today", "on-the-air", "tv-top-rated"]);
    function buildUrl(cat, page) {
      const p = `page=${page}`;
      if (cat === "trending" || cat === "all") return `/trending?type=all&window=week&${p}`;
      if (cat === "new") return `/movies/now-playing?${p}`;
      if (cat === "top-rated") return `/movies/top-rated?${p}`;
      if (cat === "movie") return `/movies/popular?${p}`;
      if (cat === "upcoming") return `/movies/upcoming?${p}`;
      if (cat === "series") return `/tv/popular?${p}`;
      if (cat === "airing-today") return `/tv/airing-today?${p}`;
      if (cat === "on-the-air") return `/tv/on-the-air?${p}`;
      if (cat === "tv-top-rated") return `/tv/top-rated?${p}`;
      return `/discover/movies?genre=${encodeURIComponent(genreSlugToName(cat))}&${p}`;
    }
    function buildUrl2(cat, page) {
      if (!knownCategories.includes(cat)) return `/discover/tv?genre=${encodeURIComponent(genreSlugToName(cat))}&page=${page}`;
      return null;
    }
    function adaptRaw(cat, data) {
      if (!data?.results) return [];
      if (cat === "trending" || cat === "all") return data.results.filter((t2) => t2.mediaType !== "person").map(fromTrending);
      if (tvCategories.has(cat)) return data.results.map((t2) => fromTvCard(t2));
      return data.results.map((t2) => fromMovieCard(t2));
    }
    const allItems = ref([]);
    const page1 = ref(1);
    const page2 = ref(1);
    const totalPages1 = ref(1);
    const totalPages2 = ref(1);
    const loading = ref(false);
    async function fetchPage(reset = true) {
      if (reset) {
        allItems.value = [];
        page1.value = 1;
        page2.value = 1;
      }
      loading.value = true;
      const cat = category.value;
      try {
        const [res1] = await Promise.all([
          $fetch(buildUrl(cat, page1.value), { baseURL: base })
        ]);
        totalPages1.value = res1.data.totalPages ?? 1;
        const items1 = adaptRaw(cat, res1.data);
        let items2 = [];
        const url2 = buildUrl2(cat, page2.value);
        if (url2) {
          const res2 = await $fetch(url2, { baseURL: base });
          totalPages2.value = res2.data.totalPages ?? 1;
          items2 = (res2.data.results ?? []).map((t2) => fromTvCard(t2));
        }
        allItems.value = reset ? [...items1, ...items2] : [...allItems.value, ...items1, ...items2];
      } finally {
        loading.value = false;
      }
    }
    [__temp, __restore] = withAsyncContext(() => fetchPage()), await __temp, __restore();
    watch(category, () => fetchPage());
    const hasMore = computed(() => {
      const u2 = buildUrl2(category.value, 1);
      if (u2) return page1.value < totalPages1.value || page2.value < totalPages2.value;
      return page1.value < totalPages1.value;
    });
    async function loadMore() {
      const u2 = buildUrl2(category.value, 1);
      if (page1.value < totalPages1.value) page1.value++;
      if (u2 && page2.value < totalPages2.value) page2.value++;
      await fetchPage(false);
    }
    const pageReady = usePageReady();
    const sortBy = ref("default");
    const sorted = computed(() => {
      if (sortBy.value === "rating") return [...allItems.value].sort((a, b) => b.rating - a.rating);
      if (sortBy.value === "year") return [...allItems.value].sort((a, b) => b.year - a.year);
      if (sortBy.value === "title") return [...allItems.value].sort((a, b) => a.title.localeCompare(b.title));
      return allItems.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_select = Select;
      const _component_MediaCardSkeleton = __nuxt_component_1;
      const _component_MediaCard = __nuxt_component_6;
      const _component_a_button = Button;
      const _component_a_empty = __nuxt_component_8;
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
      _push(`<span>/</span><span class="text-foreground">${ssrInterpolate(unref(meta).title)}</span></div><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4"><div><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${ssrInterpolate(unref(meta).title)}</h1>`);
      if (unref(meta).description) {
        _push(`<p class="text-muted-foreground mt-1">${ssrInterpolate(unref(meta).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-3"><span class="text-sm text-muted-foreground">${ssrInterpolate(unref(allItems).length)} ${ssrInterpolate(_ctx.$t("browse.titles"))}</span>`);
      _push(ssrRenderComponent(_component_a_select, {
        value: unref(sortBy),
        "onUpdate:value": ($event) => isRef(sortBy) ? sortBy.value = $event : null,
        options: [
          { value: "default", label: _ctx.$t("browse.default") },
          { value: "rating", label: _ctx.$t("browse.byRating") },
          { value: "year", label: _ctx.$t("browse.byYear") },
          { value: "title", label: _ctx.$t("browse.byTitle") }
        ],
        class: "w-32"
      }, null, _parent));
      _push(`</div></div></div>`);
      if (!unref(pageReady)) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"><!--[-->`);
        ssrRenderList(24, (i) => {
          _push(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(sorted).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6 }, void 0, {
          onEnter: true,
          from: true
        })))}><!--[-->`);
        ssrRenderList(unref(sorted), (item) => {
          _push(ssrRenderComponent(_component_MediaCard, {
            key: `${item.type}-${item.id}`,
            media: item,
            fluid: ""
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
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
      } else if (unref(pageReady) && !unref(sorted).length) {
        _push(`<div class="text-center py-20">`);
        _push(ssrRenderComponent(_component_a_empty, {
          description: _ctx.$t("browse.noTitles")
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, { class: "mt-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("common.back"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("common.back")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, { class: "mt-4" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("common.back")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/browse/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-DWw5qMzt.mjs.map
