import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { az as useSeoMeta, ao as useI18n, f as __nuxt_component_1$1, _ as __nuxt_component_0$1, B as Button } from './server.mjs';
import { defineComponent, withAsyncContext, computed, resolveDirective, unref, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, ref, watch, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useWatchlistStore } from './watchlist-hlo1lQbX.mjs';
import { c as fromTrending, a as fromMovieCard, d as fromTvCard, u as useProgressStore, g as fromVidLink } from './progress-De0Fy5DO.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { T as Tag } from './index-CYfk08-N.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { u as usePageReady } from './usePageReady-CEiMWPaE.mjs';
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
import './auth-LLhfWJq6.mjs';
import './colors-ByhoJTJo.mjs';

const TICK_MS = 50;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HeroBanner",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { data: trendingData } = ([__temp, __restore] = withAsyncContext(() => useApiFetch("/trending?type=all&window=day")), __temp = await __temp, __restore(), __temp);
    const featuredList = computed(
      () => (trendingData.value?.results ?? []).filter((t2) => t2.mediaType !== "person").slice(0, 5).map(fromTrending)
    );
    const currentIndex = ref(0);
    const current = computed(() => featuredList.value[currentIndex.value]);
    const isPaused = ref(false);
    const slideProgress = ref(0);
    const liveText = ref("");
    watch(currentIndex, (i) => {
      if (featuredList.value[i]) {
        liveText.value = `${featuredList.value[i].title}, slide ${i + 1} of ${featuredList.value.length}`;
      }
    });
    const watchlistStore = useWatchlistStore();
    function formatEpisodeInfo(media) {
      if (media.type === "series") {
        const n = media.seasons ?? 1;
        return `${media.seasons ?? "?"} ${t("media.seasons_count", n)}`;
      }
      return media.duration || t("common.movie");
    }
    const detailPath = (m) => m.type === "series" ? `/tv/${m.id}` : `/movie/${m.id}`;
    const overlayOpacity = ref(0.25);
    async function detectBrightness(src) {
      return;
    }
    watch(() => current.value?.backdrop, (src) => {
      if (src) detectBrightness();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_5;
      const _component_a_tag = Tag;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_a_button = Button;
      const _directive_gsap = resolveDirective("gsap");
      if (unref(current)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          role: "region",
          "aria-label": "Featured content",
          class: "relative w-full h-[85vh] min-h-[560px] overflow-hidden"
        }, _attrs))} data-v-7566fac3><div aria-live="polite" aria-atomic="true" class="sr-only" data-v-7566fac3>${ssrInterpolate(unref(liveText))}</div><div class="absolute inset-0" data-v-7566fac3>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(current).backdrop,
          alt: unref(current).title,
          class: "w-full h-full object-cover",
          width: "1920",
          height: "1080",
          format: "webp",
          loading: "eager",
          preload: ""
        }, null, _parent));
        _push(`<div class="absolute inset-0 bg-black transition-opacity duration-700" style="${ssrRenderStyle({ opacity: unref(overlayOpacity) })}" data-v-7566fac3></div><div class="absolute inset-0 gradient-to-r-black" data-v-7566fac3></div><div class="absolute bottom-0 left-0 right-0 h-48 gradient-to-t-black" data-v-7566fac3></div></div><div class="relative z-10 h-full flex items-end pb-16 px-4 sm:px-6 lg:px-8" data-v-7566fac3><div class="max-w-2xl w-full" data-v-7566fac3><div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 mb-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.7, delay: 0.2 }, void 0, { from: true })))} data-v-7566fac3>`);
        _push(ssrRenderComponent(_component_a_tag, {
          color: "cyan",
          class: "!border-0 !text-xs !font-semibold !px-3 !py-1 !rounded-full"
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-7566fac3${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-3 h-3 inline mr-1",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ${ssrInterpolate(unref(current).rating.toFixed(1))} · ${ssrInterpolate(unref(t)("media.featured"))}`);
            } else {
              return [
                createTextVNode(" " + toDisplayString(unref(current).rating.toFixed(1)) + " · " + toDisplayString(unref(t)("media.featured")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-xs font-medium text-white/70 uppercase tracking-wider" data-v-7566fac3>${ssrInterpolate(unref(current).type === "series" ? unref(t)("common.series") : unref(t)("common.movie"))}</span></div><h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight line-clamp-2" data-v-7566fac3>${ssrInterpolate(unref(current).title)}</h1><div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 text-sm text-white/70 mb-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6, delay: 0.4 }, void 0, { from: true })))} data-v-7566fac3><span data-v-7566fac3>${ssrInterpolate(unref(current).year)}</span><span class="w-1 h-1 rounded-full bg-white/40" data-v-7566fac3></span><span data-v-7566fac3>${ssrInterpolate(formatEpisodeInfo(unref(current)))}</span></div><p${ssrRenderAttrs(mergeProps({ class: "text-sm sm:text-base text-white/70 leading-relaxed mb-8 line-clamp-2 sm:line-clamp-3 max-w-xl" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6, delay: 0.5 }, void 0, { from: true })))} data-v-7566fac3>${ssrInterpolate(unref(current).description)}</p><div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6, delay: 0.6 }, void 0, { from: true })))} data-v-7566fac3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: detailPath(unref(current))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, {
                type: "primary",
                size: "large",
                class: "!font-semibold hover:scale-105 transition-transform"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3${_scopeId2}><path d="M8 5v14l11-7z" data-v-7566fac3${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true"
                      }, [
                        createVNode("path", { d: "M8 5v14l11-7z" })
                      ]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` ${ssrInterpolate(unref(t)("media.watchNow"))}`);
                  } else {
                    return [
                      createTextVNode(" " + toDisplayString(unref(t)("media.watchNow")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, {
                  type: "primary",
                  size: "large",
                  class: "!font-semibold hover:scale-105 transition-transform"
                }, {
                  icon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true"
                    }, [
                      createVNode("path", { d: "M8 5v14l11-7z" })
                    ]))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("media.watchNow")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: detailPath(unref(current))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, {
                size: "large",
                ghost: "",
                class: "!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50 !font-semibold hover:scale-105 transition-transform"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-7566fac3${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` ${ssrInterpolate(unref(t)("media.moreInfo"))}`);
                  } else {
                    return [
                      createTextVNode(" " + toDisplayString(unref(t)("media.moreInfo")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, {
                  size: "large",
                  ghost: "",
                  class: "!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50 !font-semibold hover:scale-105 transition-transform"
                }, {
                  icon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ]))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("media.moreInfo")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button${ssrRenderAttr("aria-label", unref(watchlistStore).has(unref(current)?.id) ? `Remove ${unref(current)?.title} from watchlist` : `Add ${unref(current)?.title} to watchlist`)} class="${ssrRenderClass([
          "w-10 h-10 rounded-full border backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
          unref(watchlistStore).has(unref(current)?.id) ? "bg-primary border-primary text-white" : "bg-white/10 border-white/30 text-white hover:bg-white/20"
        ])}" data-v-7566fac3><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3>`);
        if (unref(watchlistStore).has(unref(current)?.id)) {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" data-v-7566fac3></path>`);
        } else {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-7566fac3></path>`);
        }
        _push(`</svg></button></div></div></div><button class="absolute left-0 top-0 h-full w-16 sm:w-24 z-10 flex items-center justify-start pl-3 sm:pl-5 group opacity-0 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:opacity-100" aria-label="Previous slide" data-v-7566fac3><div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" data-v-7566fac3></div><div class="relative w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors" data-v-7566fac3><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-7566fac3></path></svg></div></button><button class="absolute right-0 top-0 h-full w-16 sm:w-24 z-10 flex items-center justify-end pr-3 sm:pr-5 group opacity-0 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:opacity-100" aria-label="Next slide" data-v-7566fac3><div class="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" data-v-7566fac3></div><div class="relative w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors" data-v-7566fac3><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-7566fac3><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-7566fac3></path></svg></div></button><div class="absolute bottom-6 right-8 z-10 flex items-center gap-2" data-v-7566fac3><!--[-->`);
        ssrRenderList(unref(featuredList), (item, i) => {
          _push(`<button${ssrRenderAttr("aria-label", `Go to slide ${i + 1}: ${item.title}`)}${ssrRenderAttr("aria-current", i === unref(currentIndex) ? "true" : void 0)} class="${ssrRenderClass([
            "transition-all duration-300 rounded-full overflow-hidden",
            i === unref(currentIndex) ? "w-8 h-2 bg-white/20" : "w-2 h-2 bg-white/30 hover:bg-white/60"
          ])}" data-v-7566fac3>`);
          if (i === unref(currentIndex)) {
            _push(`<span class="block h-full bg-primary rounded-full origin-left" style="${ssrRenderStyle({
              transform: `scaleX(${unref(slideProgress) / 100})`,
              transition: unref(isPaused) ? "none" : `transform ${TICK_MS}ms linear`
            })}" aria-hidden="true" data-v-7566fac3></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroBanner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-7566fac3"]]), { __name: "HeroBanner" });
function useSwiper(swiperContainerRef, options) {
  const swiper = ref();
  const isBeginning = computed(() => swiper.value?.isBeginning ?? true);
  const isEnd = computed(() => swiper.value?.isEnd ?? false);
  const activeIndex = computed(() => swiper.value?.activeIndex ?? 0);
  const realIndex = computed(() => swiper.value?.realIndex ?? 0);
  const slides = computed(() => swiper.value?.slides ?? []);
  const slidesPerView = computed(() => swiper.value?.slidesPerViewDynamic() ?? 0);
  const progress = computed(() => swiper.value?.progress ?? 0);
  const getNumberOfSlides = computed(() => swiper.value?.slides.length ?? 0);
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    const isSwiperContainer = swiperContainerRef.value?.nodeName === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    // Instance
    instance: swiper,
    // Reactive state
    isBeginning,
    isEnd,
    activeIndex,
    realIndex,
    slides,
    slidesPerView,
    progress,
    getNumberOfSlides,
    // Navigation methods
    next,
    prev,
    to,
    reset
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MediaRow",
  __ssrInlineRender: true,
  props: {
    title: {},
    items: {},
    showProgress: { type: Boolean, default: false },
    viewAllLink: {},
    loading: { type: Boolean, default: false },
    removable: { type: Boolean, default: false }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const containerRef = ref(null);
    const isBeginning = ref(true);
    const isEnd = ref(false);
    const showButtons = ref(false);
    useSwiper(containerRef, {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_MediaCardSkeleton = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-6",
        "aria-label": __props.title
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-5 px-4 sm:px-6 lg:px-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5 }, void 0, {
        onEnter: true,
        from: true
      })))}><h2 class="text-xl font-bold text-foreground tracking-tight">${ssrInterpolate(__props.title)}</h2><div class="flex items-center gap-3">`);
      if (__props.viewAllLink) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.viewAllLink,
          class: "text-sm text-primary hover:text-primary/80 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("common.viewAll"))} → `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("common.viewAll")) + " → ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showButtons) && !__props.loading) {
        _push(`<div class="hidden sm:flex gap-1"><button${ssrIncludeBooleanAttr(unref(isBeginning)) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Previous ${__props.title} items`)} class="${ssrRenderClass([
          "h-8 w-8 flex items-center justify-center rounded-md transition-all border bg-secondary border-border/50",
          unref(isBeginning) ? "cursor-not-allowed text-muted-foreground/25" : "hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
        ])}"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button${ssrIncludeBooleanAttr(unref(isEnd)) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Next ${__props.title} items`)} class="${ssrRenderClass([
          "h-8 w-8 flex items-center justify-center rounded-md transition-all border bg-secondary border-border/50",
          unref(isEnd) ? "cursor-not-allowed text-muted-foreground/25" : "hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
        ])}"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex gap-3 px-4 sm:px-6 lg:px-8 overflow-x-hidden" style="${ssrRenderStyle(__props.loading ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(7, (i) => {
        _push(`<div class="w-36 sm:w-44 flex-shrink-0">`);
        _push(ssrRenderComponent(_component_MediaCardSkeleton, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle(!__props.loading ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaRow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "MediaRow" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GenreCard",
  __ssrInlineRender: true,
  props: {
    genre: {},
    image: {}
  },
  setup(__props) {
    const { t } = useI18n();
    function capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    const genreColors = {
      "Sci-Fi": "from-blue-900/80 to-blue-600/40",
      "Thriller": "from-red-900/80 to-red-600/40",
      "Drama": "from-amber-900/80 to-amber-600/40",
      "Crime": "from-zinc-900/80 to-zinc-600/40",
      "Action": "from-orange-900/80 to-orange-600/40",
      "Fantasy": "from-violet-900/80 to-violet-600/40",
      "Romance": "from-pink-900/80 to-pink-600/40",
      "Horror": "from-red-950/90 to-zinc-800/40",
      "Mystery": "from-indigo-900/80 to-indigo-600/40",
      "Adventure": "from-emerald-900/80 to-emerald-600/40",
      "Animation": "from-cyan-900/80 to-cyan-600/40",
      "Comedy": "from-yellow-900/80 to-yellow-600/40",
      "Documentary": "from-teal-900/80 to-teal-600/40",
      "Family": "from-lime-900/80 to-lime-600/40",
      "History": "from-stone-900/80 to-stone-600/40",
      "Music": "from-fuchsia-900/80 to-fuchsia-600/40",
      "Neo-Noir": "from-slate-900/90 to-slate-700/40",
      "Espionage": "from-teal-900/80 to-teal-600/40",
      "War": "from-neutral-900/90 to-neutral-700/40",
      "Western": "from-orange-950/90 to-amber-700/40"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_5;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/browse/${__props.genre.toLowerCase().replace(/ /g, "-")}`,
        class: "group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.image) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: __props.image,
                class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                width: "400",
                height: "225",
                format: "webp",
                loading: "lazy",
                placeholder: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass(["absolute inset-0 bg-gradient-to-br", genreColors[__props.genre] || "from-zinc-900/80 to-zinc-600/40"])}"${_scopeId}></div><div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4"${_scopeId}><h3 class="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-200"${_scopeId}>${ssrInterpolate(capitalize(__props.genre))}</h3><p class="text-xs text-white/50 font-medium mt-1"${_scopeId}>${ssrInterpolate(unref(t)("media.browse"))} →</p></div>`);
          } else {
            return [
              __props.image ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                src: __props.image,
                class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                width: "400",
                height: "225",
                format: "webp",
                loading: "lazy",
                placeholder: ""
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("div", {
                class: ["absolute inset-0 bg-gradient-to-br", genreColors[__props.genre] || "from-zinc-900/80 to-zinc-600/40"]
              }, null, 2),
              createVNode("div", { class: "absolute inset-0 flex flex-col items-center justify-center text-center p-4" }, [
                createVNode("h3", { class: "text-lg font-bold text-white group-hover:scale-105 transition-transform duration-200" }, toDisplayString(capitalize(__props.genre)), 1),
                createVNode("p", { class: "text-xs text-white/50 font-medium mt-1" }, toDisplayString(unref(t)("media.browse")) + " →", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GenreCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "GenreCard" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "aspect-video rounded-xl bg-secondary/80 animate-pulse",
    "aria-hidden": "true"
  }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GenreCardSkeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "GenreCardSkeleton" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Streamly — Your Premium Streaming Destination",
      ogTitle: "Streamly — Your Premium Streaming Destination",
      description: "Stream thousands of movies and TV series in stunning quality. Discover trending titles, new releases, and exclusive content.",
      ogDescription: "Stream thousands of movies and TV series in stunning quality.",
      ogImage: "/og-default.jpg",
      twitterCard: "summary_large_image"
    });
    const [
      { data: trendingRaw },
      { data: nowPlayingRaw },
      { data: topRatedRaw },
      { data: popularRaw },
      { data: popularTvRaw },
      { data: topRatedTvRaw },
      { data: upcomingRaw },
      { data: airingTodayRaw },
      { data: genreListRaw }
    ] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useApiFetch("/trending?type=all&window=day"),
      useApiFetch("/movies/now-playing"),
      useApiFetch("/movies/top-rated"),
      useApiFetch("/movies/popular"),
      useApiFetch("/tv/popular"),
      useApiFetch("/tv/top-rated"),
      useApiFetch("/movies/upcoming"),
      useApiFetch("/tv/airing-today"),
      useApiFetch("/genres/movies")
    ])), __temp = await __temp, __restore(), __temp);
    const trendingMedia = computed(
      () => (trendingRaw.value?.results ?? []).filter((t2) => t2.mediaType !== "person").map(fromTrending)
    );
    const newReleases = computed(() => (nowPlayingRaw.value?.results ?? []).map(fromMovieCard));
    const topRated = computed(() => (topRatedRaw.value?.results ?? []).map(fromMovieCard));
    const popular = computed(() => (popularRaw.value?.results ?? []).map(fromMovieCard));
    const popularTv = computed(() => (popularTvRaw.value?.results ?? []).map(fromTvCard));
    const topRatedTv = computed(() => (topRatedTvRaw.value?.results ?? []).map(fromTvCard));
    const upcoming = computed(() => (upcomingRaw.value?.results ?? []).map(fromMovieCard));
    const airingToday = computed(() => (airingTodayRaw.value?.results ?? []).map(fromTvCard));
    const genreWithImages = computed(() => {
      const backdrops = trendingMedia.value.map((m) => m.backdrop).filter(Boolean);
      return (genreListRaw.value ?? []).slice(0, 8).map((g, i) => ({
        genre: g.name,
        image: backdrops.length ? backdrops[i % backdrops.length] : null
      }));
    });
    const featuredItem = computed(() => trendingMedia.value[3] ?? trendingMedia.value[0]);
    const progressStore = useProgressStore();
    computed(() => progressStore.inProgress.map(fromVidLink).slice(0, 8));
    const pageReady = usePageReady();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroBanner = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_MediaRow = __nuxt_component_2;
      const _component_GenreCard = __nuxt_component_3;
      const _component_GenreCardSkeleton = __nuxt_component_4;
      const _component_NuxtImg = __nuxt_component_5;
      const _component_a_tag = Tag;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_a_button = Button;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroBanner, null, null, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.trending"),
        items: unref(trendingMedia),
        "view-all-link": "/trending",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.newReleases"),
        items: unref(newReleases),
        "view-all-link": "/browse/new",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(`<section class="py-8 px-4 sm:px-6 lg:px-8"><div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-6" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5 }, void 0, {
        onEnter: true,
        from: true
      })))}><h2 class="text-xl font-bold text-foreground tracking-tight">${ssrInterpolate(unref(t)("home.browseByGenre"))}</h2></div><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 30, duration: 0.6, delay: 0.1 }, void 0, {
        onEnter: true,
        from: true
      })))}>`);
      if (unref(pageReady)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(genreWithImages), (item) => {
          _push(ssrRenderComponent(_component_GenreCard, mergeProps({
            key: item.genre
          }, { ref_for: true }, item), null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(8, (i) => {
          _push(ssrRenderComponent(_component_GenreCardSkeleton, { key: i }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.topRated"),
        items: unref(topRated),
        "view-all-link": "/browse/top-rated",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.airingToday"),
        items: unref(airingToday),
        "view-all-link": "/browse/airing-today",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.popularSeries"),
        items: unref(popularTv),
        "view-all-link": "/browse/series",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.topRatedSeries"),
        items: unref(topRatedTv),
        "view-all-link": "/browse/tv-top-rated",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("home.comingSoon"),
        items: unref(upcoming),
        "view-all-link": "/browse/upcoming",
        loading: !unref(pageReady)
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaRow, {
        title: unref(t)("common.movies"),
        items: unref(popular),
        "view-all-link": "/browse/movie",
        loading: !unref(pageReady)
      }, null, _parent));
      if (unref(featuredItem)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-4 sm:mx-6 lg:mx-8 my-8 rounded-2xl overflow-hidden relative border border-border/50" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 40, duration: 0.7 }, void 0, {
          onEnter: true,
          from: true
        })))}>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(featuredItem).backdrop,
          alt: unref(featuredItem).title,
          class: "w-full h-64 object-cover",
          width: "1280",
          height: "256",
          format: "webp",
          loading: "lazy",
          placeholder: ""
        }, null, _parent));
        _push(`<div class="absolute inset-0 bg-black/60"></div><div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">`);
        _push(ssrRenderComponent(_component_a_tag, {
          color: "cyan",
          class: "!mb-3 !text-xs !font-semibold !px-3 !py-1 !rounded-full !border-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("media.featured"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("media.featured")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-2">${ssrInterpolate(unref(featuredItem).title)}</h3><p class="text-sm text-white/70 max-w-md mb-6 line-clamp-2">${ssrInterpolate(unref(featuredItem).description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(featuredItem).type === "series" ? `/tv/${unref(featuredItem).id}` : `/movie/${unref(featuredItem).id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, {
                type: "primary",
                size: "large",
                class: "!font-semibold hover:scale-105 transition-transform"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M8 5v14l11-7z"${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        fill: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", { d: "M8 5v14l11-7z" })
                      ]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` ${ssrInterpolate(unref(t)("media.watchNow"))}`);
                  } else {
                    return [
                      createTextVNode(" " + toDisplayString(unref(t)("media.watchNow")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, {
                  type: "primary",
                  size: "large",
                  class: "!font-semibold hover:scale-105 transition-transform"
                }, {
                  icon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
                      fill: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", { d: "M8 5v14l11-7z" })
                    ]))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("media.watchNow")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DaJkD-Th.mjs.map
