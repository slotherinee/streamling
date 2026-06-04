import { ao as useI18n, aw as useRoute, t as createError, an as useHead, az as useSeoMeta, ax as useRouter, _ as __nuxt_component_0, B as Button, i as api$1 } from './server.mjs';
import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { _ as __nuxt_component_6$1 } from './MediaCard-BGmgqYjl.mjs';
import { _ as __nuxt_component_9 } from './WatchModal-kUyGR5LH.mjs';
import { defineComponent, computed, withAsyncContext, ref, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, mergeProps, isRef, withDirectives, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { f as fromMovie, a as fromMovieCard, u as useProgressStore } from './progress-De0Fy5DO.mjs';
import { u as useWatchlistStore } from './watchlist-hlo1lQbX.mjs';
import { u as useHaptic } from './useHaptic-NT3uIsTJ.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { T as Tag } from './index-CYfk08-N.mjs';
import { T as Tabs, _ as __nuxt_component_4 } from './index-6SbvSTPG.mjs';
import { _ as __nuxt_component_6 } from './index-Dz6VzaAT.mjs';
import { A as Avatar } from './index-D8L1WcIT.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './slide-C57riDBP.mjs';
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './index-hqCdhbUA.mjs';
import '../_/SearchOutlined.mjs';
import './zoom-ByxQdbsR.mjs';
import './auth-LLhfWJq6.mjs';
import './colors-ByhoJTJo.mjs';
import 'lodash-es/uniq.js';
import './collapseMotion-CIsPMioQ.mjs';
import 'lodash-es/pick.js';
import './responsiveObserve-CTFzy5SU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const id = computed(() => Number(route.params.id));
    const { data: movieRaw, error } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(() => `/movies/${id.value}`)), __temp = await __temp, __restore(), __temp);
    if (error.value) throw createError({ statusCode: 404, message: "Title not found" });
    const media = computed(() => movieRaw.value ? fromMovie(movieRaw.value) : null);
    useHead({ title: computed(() => `${media.value?.title ?? "Movie"} — Streamly`) });
    useSeoMeta({
      ogTitle: computed(() => `${media.value?.title ?? "Movie"} — Streamly`),
      description: computed(() => media.value?.description ?? "Watch on Streamly"),
      ogDescription: computed(() => media.value?.description ?? "Watch on Streamly"),
      ogImage: computed(() => media.value?.backdrop ?? "/og-default.jpg"),
      ogType: "video.movie",
      twitterCard: "summary_large_image"
    });
    const collection = computed(
      () => movieRaw.value?.collectionId ? { id: movieRaw.value.collectionId, name: movieRaw.value.collectionName ?? "Collection" } : null
    );
    const similar = computed(() => (movieRaw.value?.similar ?? []).map(fromMovieCard));
    const watchlistStore = useWatchlistStore();
    useProgressStore();
    const haptic = useHaptic();
    const router = useRouter();
    const VALID_TABS = ["about", "cast", "trailer", "similar"];
    const activeTab = computed({
      get: () => {
        const t2 = route.query.tab;
        return VALID_TABS.includes(t2) ? t2 : "about";
      },
      set: (val) => router.replace({ query: { ...route.query, tab: val } })
    });
    const watchOpen = ref(false);
    async function toggleWatchlist() {
      if (!media.value) return;
      const result = await watchlistStore.toggle(media.value);
      if (result === "added") {
        haptic.success();
        api$1.success(t("media.addedWatchlist", { title: media.value.title }));
      } else {
        haptic.selection();
        api$1.info(t("media.removedWatchlist", { title: media.value.title }));
      }
    }
    const scrolledDown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_button = Button;
      const _component_NuxtImg = __nuxt_component_5;
      const _component_a_tag = Tag;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = __nuxt_component_4;
      const _component_a_divider = __nuxt_component_6;
      const _component_a_avatar = Avatar;
      const _component_MediaCard = __nuxt_component_6$1;
      const _component_WatchModal = __nuxt_component_9;
      const _directive_gsap = resolveDirective("gsap");
      if (unref(media)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-04eb6466>`);
        if (unref(scrolledDown)) {
          _push(`<div class="fixed top-16 left-0 z-40 px-4 sm:px-6 lg:px-8 pt-3" data-v-04eb6466>`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_a_button, {
                  type: "default",
                  size: "small",
                  class: "!bg-background/90 !backdrop-blur-md !border-border/60 !text-foreground hover:!border-primary/50 shadow-lg"
                }, {
                  icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-04eb6466${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          class: "w-3.5 h-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15 19l-7-7 7-7"
                          })
                        ]))
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` ${ssrInterpolate(_ctx.$t("common.back"))}`);
                    } else {
                      return [
                        createTextVNode(" " + toDisplayString(_ctx.$t("common.back")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_a_button, {
                    type: "default",
                    size: "small",
                    class: "!bg-background/90 !backdrop-blur-md !border-border/60 !text-foreground hover:!border-primary/50 shadow-lg"
                  }, {
                    icon: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        class: "w-3.5 h-3.5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7"
                        })
                      ]))
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(_ctx.$t("common.back")), 1)
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
        _push(`<div class="relative w-full h-[70vh] min-h-[480px] overflow-hidden" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          src: unref(media).backdrop,
          alt: unref(media).title,
          class: "w-full h-full object-cover",
          width: "1920",
          height: "1080",
          format: "webp",
          loading: "eager",
          preload: ""
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { scale: 1.05, duration: 1.2, ease: "power2.out" }, void 0, { from: true })), null, _parent));
        _push(`<div class="absolute inset-0 bg-black/50" data-v-04eb6466></div><div class="absolute inset-0 gradient-to-r-black" data-v-04eb6466></div><div class="absolute bottom-0 left-0 right-0 h-64 gradient-to-t-black" data-v-04eb6466></div><div${ssrRenderAttrs(mergeProps({ class: "absolute top-20 inset-x-0 z-10 px-4 sm:px-6 lg:px-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5, delay: 0.3 }, void 0, { from: true })))} data-v-04eb6466><div class="" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, {
                type: "text",
                class: "!text-white/80 hover:!text-white hover:!bg-white/10"
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-04eb6466${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7"
                        })
                      ]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back `);
                  } else {
                    return [
                      createTextVNode(" Back ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, {
                  type: "text",
                  class: "!text-white/80 hover:!text-white hover:!bg-white/10"
                }, {
                  icon: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ]))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Back ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-8 pb-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 40, duration: 0.8, delay: 0.2 }, void 0, { from: true })))} data-v-04eb6466><div class="flex flex-col sm:flex-row items-end sm:items-start gap-6" data-v-04eb6466><div class="hidden sm:block w-36 flex-shrink-0" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(media).poster,
          alt: unref(media).title,
          class: "w-full aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl",
          width: "144",
          height: "216",
          format: "webp"
        }, null, _parent));
        _push(`</div><div class="flex-1" data-v-04eb6466><div class="flex flex-wrap items-center gap-2 mb-3" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_a_tag, { class: "!border-border !text-muted-foreground" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.movie"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.movie")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-1" data-v-04eb6466><svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24" data-v-04eb6466><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-04eb6466></path></svg><span class="text-sm text-amber-400 font-semibold" data-v-04eb6466>${ssrInterpolate(unref(media).rating.toFixed(1))}</span></div></div><h1 class="text-3xl sm:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight" data-v-04eb6466>${ssrInterpolate(unref(media).title)}</h1><div class="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-4" data-v-04eb6466><span data-v-04eb6466>${ssrInterpolate(unref(media).year)}</span>`);
        if (unref(media).duration) {
          _push(`<span class="w-1 h-1 rounded-full bg-white/30" data-v-04eb6466></span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(media).duration) {
          _push(`<span data-v-04eb6466>${ssrInterpolate(unref(media).duration)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(media).genre.length) {
          _push(`<span class="w-1 h-1 rounded-full bg-white/30" data-v-04eb6466></span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(media).genre.length) {
          _push(`<span data-v-04eb6466>${ssrInterpolate(unref(media).genre.join(" · "))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-6 line-clamp-3" data-v-04eb6466>${ssrInterpolate(unref(media).description)}</p><div class="flex items-center gap-3 flex-wrap" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_a_button, {
          type: "primary",
          size: "large",
          class: "!font-semibold",
          onClick: ($event) => watchOpen.value = true
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId}><path d="M8 5v14l11-7z" data-v-04eb6466${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", { d: "M8 5v14l11-7z" })
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ${ssrInterpolate(_ctx.$t("media.watchNow"))}`);
            } else {
              return [
                createTextVNode(" " + toDisplayString(_ctx.$t("media.watchNow")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(media).trailerKey) {
          _push(ssrRenderComponent(_component_a_button, {
            size: "large",
            ghost: "",
            class: "!border-white/20 !text-white hover:!bg-white/10",
            onClick: ($event) => activeTab.value = "trailer"
          }, {
            icon: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" data-v-04eb6466${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-04eb6466${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    }),
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ]))
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` ${ssrInterpolate(_ctx.$t("media.trailer"))}`);
              } else {
                return [
                  createTextVNode(" " + toDisplayString(_ctx.$t("media.trailer")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_a_button, {
          size: "large",
          ghost: "",
          class: unref(watchlistStore).has(unref(media).id) ? "!border-primary !text-primary hover:!bg-primary/10" : "!border-white/20 !text-white hover:!bg-white/10",
          onClick: toggleWatchlist
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId}>`);
              if (unref(watchlistStore).has(unref(media).id)) {
                _push2(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" data-v-04eb6466${_scopeId}></path>`);
              } else {
                _push2(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-v-04eb6466${_scopeId}></path>`);
              }
              _push2(`</svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  unref(watchlistStore).has(unref(media).id) ? (openBlock(), createBlock("path", {
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
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ${ssrInterpolate(unref(watchlistStore).has(unref(media).id) ? _ctx.$t("media.inWatchlist") : _ctx.$t("media.addWatchlist"))}`);
            } else {
              return [
                createTextVNode(" " + toDisplayString(unref(watchlistStore).has(unref(media).id) ? _ctx.$t("media.inWatchlist") : _ctx.$t("media.addWatchlist")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
        if (unref(collection)) {
          _push(`<div class="bg-secondary/50 border-b border-border/50" data-v-04eb6466><div class="px-4 sm:px-8 py-4 flex items-center justify-between gap-4" data-v-04eb6466><div class="flex items-center gap-3" data-v-04eb6466><svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-04eb6466><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-04eb6466></path></svg><span class="text-sm text-muted-foreground" data-v-04eb6466>Part of</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collection/${unref(collection).id}`,
            class: "text-sm font-semibold text-foreground hover:text-primary transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(collection).name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(collection).name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collection/${unref(collection).id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_a_button, {
                  size: "small",
                  type: "text",
                  class: "!text-primary"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`View collection →`);
                    } else {
                      return [
                        createTextVNode("View collection →")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_a_button, {
                    size: "small",
                    type: "text",
                    class: "!text-primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("View collection →")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="px-4 sm:px-8 py-10" data-v-04eb6466>`);
        _push(ssrRenderComponent(_component_a_tabs, {
          activeKey: unref(activeTab),
          "onUpdate:activeKey": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
          "destroy-inactive-tab-pane": true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_tab_pane, {
                key: "about",
                tab: _ctx.$t("media.about")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))} data-v-04eb6466${_scopeId2}><div class="lg:col-span-2 space-y-6" data-v-04eb6466${_scopeId2}><div data-v-04eb6466${_scopeId2}><h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.synopsis"))}</h3><p class="text-foreground/80 leading-relaxed" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(media).description)}</p></div>`);
                    _push3(ssrRenderComponent(_component_a_divider, null, null, _parent3, _scopeId2));
                    _push3(`<div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5" data-v-04eb6466${_scopeId2}><div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.year"))}</p><p class="text-sm font-medium" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(media).year)}</p></div>`);
                    if (unref(media).duration) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.runtime"))}</p><p class="text-sm font-medium" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(media).duration)}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.rating"))}</p><div class="flex items-center gap-1.5" data-v-04eb6466${_scopeId2}><svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24" data-v-04eb6466${_scopeId2}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-04eb6466${_scopeId2}></path></svg><span class="text-sm font-semibold text-amber-400" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(media).rating.toFixed(1))}</span><span class="text-xs text-muted-foreground" data-v-04eb6466${_scopeId2}>/10</span>`);
                    if (unref(movieRaw)?.voteCount) {
                      _push3(`<span class="text-xs text-muted-foreground" data-v-04eb6466${_scopeId2}>(${ssrInterpolate(unref(movieRaw).voteCount.toLocaleString())})</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    if (unref(movieRaw)?.certification) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.certification"))}</p><span class="inline-block text-xs font-bold border border-border px-1.5 py-0.5 rounded" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(movieRaw).certification)}</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(movieRaw)?.originCountry?.length) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.country"))}</p><p class="text-sm font-medium" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(movieRaw).originCountry.join(", "))}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(movieRaw)?.spokenLanguages?.length) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.language"))}</p><p class="text-sm font-medium" data-v-04eb6466${_scopeId2}>${ssrInterpolate(unref(movieRaw).spokenLanguages.map((l) => l.englishName).join(", "))}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    if (unref(movieRaw)?.crew?.length) {
                      _push3(`<div class="space-y-3" data-v-04eb6466${_scopeId2}><!--[-->`);
                      ssrRenderList(["Director", "Screenplay", "Writer", "Story"], (job) => {
                        _push3(`<div data-v-04eb6466${_scopeId2}>`);
                        if (unref(movieRaw).crew.filter((c) => c.job === job).length) {
                          _push3(`<!--[--><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-v-04eb6466${_scopeId2}>${ssrInterpolate(job === "Director" ? _ctx.$t("media.director") : _ctx.$t("media.writers"))}</p><div class="flex flex-wrap gap-2" data-v-04eb6466${_scopeId2}><!--[-->`);
                          ssrRenderList(unref(movieRaw).crew.filter((cr) => cr.job === job), (c) => {
                            _push3(ssrRenderComponent(_component_NuxtLink, {
                              key: c.personId,
                              to: `/person/${c.personId}`,
                              class: "text-sm font-medium hover:text-primary transition-colors"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`${ssrInterpolate(c.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(c.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          });
                          _push3(`<!--]--></div><!--]-->`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(movieRaw)?.budget || unref(movieRaw)?.revenue) {
                      _push3(`<div class="grid grid-cols-2 gap-3" data-v-04eb6466${_scopeId2}>`);
                      if (unref(movieRaw)?.budget) {
                        _push3(`<div class="rounded-xl bg-secondary/50 border border-border/50 p-4" data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1.5" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.budget"))}</p><p class="text-xl font-bold" data-v-04eb6466${_scopeId2}>$${ssrInterpolate((unref(movieRaw).budget / 1e6).toFixed(1))}<span class="text-sm font-normal text-muted-foreground" data-v-04eb6466${_scopeId2}>M</span></p></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(movieRaw)?.revenue) {
                        _push3(`<div class="rounded-xl bg-secondary/50 border border-border/50 p-4" data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1.5" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.revenue"))}</p><p class="text-xl font-bold" data-v-04eb6466${_scopeId2}>$${ssrInterpolate((unref(movieRaw).revenue / 1e6).toFixed(1))}<span class="text-sm font-normal text-muted-foreground" data-v-04eb6466${_scopeId2}>M</span></p>`);
                        if (unref(movieRaw).budget && unref(movieRaw).revenue > unref(movieRaw).budget) {
                          _push3(`<p class="text-xs text-emerald-500 mt-0.5" data-v-04eb6466${_scopeId2}>+${ssrInterpolate(((unref(movieRaw).revenue / unref(movieRaw).budget - 1) * 100).toFixed(0))}% ROI</p>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(movieRaw)?.productionCompanies?.length) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><p class="text-xs text-muted-foreground uppercase tracking-wider mb-3" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.studio"))}</p><div class="flex flex-wrap gap-2" data-v-04eb6466${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(movieRaw).productionCompanies, (studio) => {
                        _push3(`<div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50" data-v-04eb6466${_scopeId2}>`);
                        if (studio.logo) {
                          _push3(ssrRenderComponent(_component_NuxtImg, {
                            src: studio.logo,
                            alt: studio.name,
                            class: "h-5 object-contain",
                            style: { "filter": "invert(1) brightness(0.7)" },
                            width: "60",
                            height: "20",
                            format: "webp"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<span class="text-xs font-medium text-foreground/80" data-v-04eb6466${_scopeId2}>${ssrInterpolate(studio.name)}</span></div>`);
                      });
                      _push3(`<!--]--></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="space-y-6" data-v-04eb6466${_scopeId2}><div data-v-04eb6466${_scopeId2}><h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.genres"))}</h3><div class="flex flex-wrap gap-2" data-v-04eb6466${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(media).genre, (genre) => {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        key: genre,
                        to: `/browse/${genre.toLowerCase().replace(/ /g, "-")}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_tag, { class: "cursor-pointer hover:!text-primary hover:!border-primary/50 transition-colors" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(genre)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(genre), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_a_tag, { class: "cursor-pointer hover:!text-primary hover:!border-primary/50 transition-colors" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(genre), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div>`);
                    if (unref(movieRaw)?.keywords?.length) {
                      _push3(`<div data-v-04eb6466${_scopeId2}><h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" data-v-04eb6466${_scopeId2}>${ssrInterpolate(_ctx.$t("media.keywords"))}</h3><div class="flex flex-wrap gap-2" data-v-04eb6466${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(movieRaw).keywords.slice(0, 15), (kw) => {
                        _push3(ssrRenderComponent(_component_a_tag, {
                          key: kw,
                          class: "!text-xs !text-muted-foreground"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(kw)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(kw), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4" }, [
                        createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.synopsis")), 1),
                            createVNode("p", { class: "text-foreground/80 leading-relaxed" }, toDisplayString(unref(media).description), 1)
                          ]),
                          createVNode(_component_a_divider),
                          createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.year")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(media).year), 1)
                            ]),
                            unref(media).duration ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.runtime")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(media).duration), 1)
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.rating")), 1),
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-amber-400",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                                ])),
                                createVNode("span", { class: "text-sm font-semibold text-amber-400" }, toDisplayString(unref(media).rating.toFixed(1)), 1),
                                createVNode("span", { class: "text-xs text-muted-foreground" }, "/10"),
                                unref(movieRaw)?.voteCount ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-xs text-muted-foreground"
                                }, "(" + toDisplayString(unref(movieRaw).voteCount.toLocaleString()) + ")", 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            unref(movieRaw)?.certification ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.certification")), 1),
                              createVNode("span", { class: "inline-block text-xs font-bold border border-border px-1.5 py-0.5 rounded" }, toDisplayString(unref(movieRaw).certification), 1)
                            ])) : createCommentVNode("", true),
                            unref(movieRaw)?.originCountry?.length ? (openBlock(), createBlock("div", { key: 2 }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.country")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(movieRaw).originCountry.join(", ")), 1)
                            ])) : createCommentVNode("", true),
                            unref(movieRaw)?.spokenLanguages?.length ? (openBlock(), createBlock("div", { key: 3 }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.language")), 1),
                              createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(movieRaw).spokenLanguages.map((l) => l.englishName).join(", ")), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          unref(movieRaw)?.crew?.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-3"
                          }, [
                            (openBlock(), createBlock(Fragment, null, renderList(["Director", "Screenplay", "Writer", "Story"], (job) => {
                              return createVNode("div", { key: job }, [
                                unref(movieRaw).crew.filter((c) => c.job === job).length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(job === "Director" ? _ctx.$t("media.director") : _ctx.$t("media.writers")), 1),
                                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).crew.filter((cr) => cr.job === job), (c) => {
                                      return openBlock(), createBlock(_component_NuxtLink, {
                                        key: c.personId,
                                        to: `/person/${c.personId}`,
                                        class: "text-sm font-medium hover:text-primary transition-colors"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(c.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 128))
                                  ])
                                ], 64)) : createCommentVNode("", true)
                              ]);
                            }), 64))
                          ])) : createCommentVNode("", true),
                          unref(movieRaw)?.budget || unref(movieRaw)?.revenue ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid grid-cols-2 gap-3"
                          }, [
                            unref(movieRaw)?.budget ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "rounded-xl bg-secondary/50 border border-border/50 p-4"
                            }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1.5" }, toDisplayString(_ctx.$t("media.budget")), 1),
                              createVNode("p", { class: "text-xl font-bold" }, [
                                createTextVNode("$" + toDisplayString((unref(movieRaw).budget / 1e6).toFixed(1)), 1),
                                createVNode("span", { class: "text-sm font-normal text-muted-foreground" }, "M")
                              ])
                            ])) : createCommentVNode("", true),
                            unref(movieRaw)?.revenue ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "rounded-xl bg-secondary/50 border border-border/50 p-4"
                            }, [
                              createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1.5" }, toDisplayString(_ctx.$t("media.revenue")), 1),
                              createVNode("p", { class: "text-xl font-bold" }, [
                                createTextVNode("$" + toDisplayString((unref(movieRaw).revenue / 1e6).toFixed(1)), 1),
                                createVNode("span", { class: "text-sm font-normal text-muted-foreground" }, "M")
                              ]),
                              unref(movieRaw).budget && unref(movieRaw).revenue > unref(movieRaw).budget ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-emerald-500 mt-0.5"
                              }, "+" + toDisplayString(((unref(movieRaw).revenue / unref(movieRaw).budget - 1) * 100).toFixed(0)) + "% ROI", 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          unref(movieRaw)?.productionCompanies?.length ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-3" }, toDisplayString(_ctx.$t("media.studio")), 1),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).productionCompanies, (studio) => {
                                return openBlock(), createBlock("div", {
                                  key: studio.id,
                                  class: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50"
                                }, [
                                  studio.logo ? (openBlock(), createBlock(_component_NuxtImg, {
                                    key: 0,
                                    src: studio.logo,
                                    alt: studio.name,
                                    class: "h-5 object-contain",
                                    style: { "filter": "invert(1) brightness(0.7)" },
                                    width: "60",
                                    height: "20",
                                    format: "webp"
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode("span", { class: "text-xs font-medium text-foreground/80" }, toDisplayString(studio.name), 1)
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.genres")), 1),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(media).genre, (genre) => {
                                return openBlock(), createBlock(_component_NuxtLink, {
                                  key: genre,
                                  to: `/browse/${genre.toLowerCase().replace(/ /g, "-")}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_tag, { class: "cursor-pointer hover:!text-primary hover:!border-primary/50 transition-colors" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(genre), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
                            ])
                          ]),
                          unref(movieRaw)?.keywords?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.keywords")), 1),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).keywords.slice(0, 15), (kw) => {
                                return openBlock(), createBlock(_component_a_tag, {
                                  key: kw,
                                  class: "!text-xs !text-muted-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(kw), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])), [
                        [
                          _directive_gsap,
                          { opacity: 0, y: 20, duration: 0.5 },
                          void 0,
                          { from: true }
                        ]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_tab_pane, {
                key: "cast",
                tab: _ctx.$t("media.cast")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))} data-v-04eb6466${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(media).cast, (person) => {
                      _push3(`<!--[-->`);
                      if (person.personId) {
                        _push3(ssrRenderComponent(_component_NuxtLink, {
                          to: `/person/${person.personId}`,
                          class: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_a_avatar, {
                                src: person.avatar,
                                size: 48
                              }, null, _parent4, _scopeId3));
                              _push4(`<div class="min-w-0" data-v-04eb6466${_scopeId3}><p class="text-sm font-semibold truncate" data-v-04eb6466${_scopeId3}>${ssrInterpolate(person.name)}</p><p class="text-xs text-muted-foreground truncate mt-0.5" data-v-04eb6466${_scopeId3}>${ssrInterpolate(person.role)}</p></div>`);
                            } else {
                              return [
                                createVNode(_component_a_avatar, {
                                  src: person.avatar,
                                  size: 48
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("p", { class: "text-sm font-semibold truncate" }, toDisplayString(person.name), 1),
                                  createVNode("p", { class: "text-xs text-muted-foreground truncate mt-0.5" }, toDisplayString(person.role), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<div class="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-200" data-v-04eb6466${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_a_avatar, {
                          src: person.avatar,
                          size: 48
                        }, null, _parent3, _scopeId2));
                        _push3(`<div class="min-w-0" data-v-04eb6466${_scopeId2}><p class="text-sm font-semibold truncate" data-v-04eb6466${_scopeId2}>${ssrInterpolate(person.name)}</p><p class="text-xs text-muted-foreground truncate mt-0.5" data-v-04eb6466${_scopeId2}>${ssrInterpolate(person.role)}</p></div></div>`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(media).cast, (person) => {
                          return openBlock(), createBlock(Fragment, {
                            key: person.name
                          }, [
                            person.personId ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 0,
                              to: `/person/${person.personId}`,
                              class: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_avatar, {
                                  src: person.avatar,
                                  size: 48
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("p", { class: "text-sm font-semibold truncate" }, toDisplayString(person.name), 1),
                                  createVNode("p", { class: "text-xs text-muted-foreground truncate mt-0.5" }, toDisplayString(person.role), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-200"
                            }, [
                              createVNode(_component_a_avatar, {
                                src: person.avatar,
                                size: 48
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("p", { class: "text-sm font-semibold truncate" }, toDisplayString(person.name), 1),
                                createVNode("p", { class: "text-xs text-muted-foreground truncate mt-0.5" }, toDisplayString(person.role), 1)
                              ])
                            ]))
                          ], 64);
                        }), 128))
                      ])), [
                        [
                          _directive_gsap,
                          { opacity: 0, y: 20, duration: 0.5 },
                          void 0,
                          { from: true }
                        ]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(media).trailerKey) {
                _push2(ssrRenderComponent(_component_a_tab_pane, {
                  key: "trailer",
                  tab: _ctx.$t("media.trailer")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))} data-v-04eb6466${_scopeId2}><div class="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl" style="${ssrRenderStyle({ "aspect-ratio": "16/9" })}" data-v-04eb6466${_scopeId2}><iframe${ssrRenderAttr("src", `https://www.youtube-nocookie.com/embed/${unref(media).trailerKey}?rel=0&modestbranding=1`)}${ssrRenderAttr("title", `${unref(media).title} — Official Trailer`)} class="absolute inset-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen data-v-04eb6466${_scopeId2}></iframe></div></div>`);
                    } else {
                      return [
                        withDirectives((openBlock(), createBlock("div", { class: "pt-4" }, [
                          createVNode("div", {
                            class: "relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl",
                            style: { "aspect-ratio": "16/9" }
                          }, [
                            createVNode("iframe", {
                              src: `https://www.youtube-nocookie.com/embed/${unref(media).trailerKey}?rel=0&modestbranding=1`,
                              title: `${unref(media).title} — Official Trailer`,
                              class: "absolute inset-0 w-full h-full",
                              frameborder: "0",
                              allow: "autoplay; fullscreen; picture-in-picture",
                              allowfullscreen: ""
                            }, null, 8, ["src", "title"])
                          ])
                        ])), [
                          [
                            _directive_gsap,
                            { opacity: 0, y: 20, duration: 0.5 },
                            void 0,
                            { from: true }
                          ]
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_a_tab_pane, {
                key: "similar",
                tab: _ctx.$t("media.moreLikeThis")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))} data-v-04eb6466${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(similar), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(similar), (item) => {
                          return openBlock(), createBlock(_component_MediaCard, {
                            key: item.id,
                            media: item,
                            fluid: ""
                          }, null, 8, ["media"]);
                        }), 128))
                      ])), [
                        [
                          _directive_gsap,
                          { opacity: 0, y: 20, duration: 0.5 },
                          void 0,
                          { from: true }
                        ]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_tab_pane, {
                  key: "about",
                  tab: _ctx.$t("media.about")
                }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4" }, [
                      createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.synopsis")), 1),
                          createVNode("p", { class: "text-foreground/80 leading-relaxed" }, toDisplayString(unref(media).description), 1)
                        ]),
                        createVNode(_component_a_divider),
                        createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.year")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(media).year), 1)
                          ]),
                          unref(media).duration ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.runtime")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(media).duration), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.rating")), 1),
                            createVNode("div", { class: "flex items-center gap-1.5" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4 text-amber-400",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                              ])),
                              createVNode("span", { class: "text-sm font-semibold text-amber-400" }, toDisplayString(unref(media).rating.toFixed(1)), 1),
                              createVNode("span", { class: "text-xs text-muted-foreground" }, "/10"),
                              unref(movieRaw)?.voteCount ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs text-muted-foreground"
                              }, "(" + toDisplayString(unref(movieRaw).voteCount.toLocaleString()) + ")", 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          unref(movieRaw)?.certification ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.certification")), 1),
                            createVNode("span", { class: "inline-block text-xs font-bold border border-border px-1.5 py-0.5 rounded" }, toDisplayString(unref(movieRaw).certification), 1)
                          ])) : createCommentVNode("", true),
                          unref(movieRaw)?.originCountry?.length ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.country")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(movieRaw).originCountry.join(", ")), 1)
                          ])) : createCommentVNode("", true),
                          unref(movieRaw)?.spokenLanguages?.length ? (openBlock(), createBlock("div", { key: 3 }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(_ctx.$t("media.language")), 1),
                            createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(movieRaw).spokenLanguages.map((l) => l.englishName).join(", ")), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(movieRaw)?.crew?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-3"
                        }, [
                          (openBlock(), createBlock(Fragment, null, renderList(["Director", "Screenplay", "Writer", "Story"], (job) => {
                            return createVNode("div", { key: job }, [
                              unref(movieRaw).crew.filter((c) => c.job === job).length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1" }, toDisplayString(job === "Director" ? _ctx.$t("media.director") : _ctx.$t("media.writers")), 1),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).crew.filter((cr) => cr.job === job), (c) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      key: c.personId,
                                      to: `/person/${c.personId}`,
                                      class: "text-sm font-medium hover:text-primary transition-colors"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(c.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
                                ])
                              ], 64)) : createCommentVNode("", true)
                            ]);
                          }), 64))
                        ])) : createCommentVNode("", true),
                        unref(movieRaw)?.budget || unref(movieRaw)?.revenue ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "grid grid-cols-2 gap-3"
                        }, [
                          unref(movieRaw)?.budget ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "rounded-xl bg-secondary/50 border border-border/50 p-4"
                          }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1.5" }, toDisplayString(_ctx.$t("media.budget")), 1),
                            createVNode("p", { class: "text-xl font-bold" }, [
                              createTextVNode("$" + toDisplayString((unref(movieRaw).budget / 1e6).toFixed(1)), 1),
                              createVNode("span", { class: "text-sm font-normal text-muted-foreground" }, "M")
                            ])
                          ])) : createCommentVNode("", true),
                          unref(movieRaw)?.revenue ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "rounded-xl bg-secondary/50 border border-border/50 p-4"
                          }, [
                            createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-1.5" }, toDisplayString(_ctx.$t("media.revenue")), 1),
                            createVNode("p", { class: "text-xl font-bold" }, [
                              createTextVNode("$" + toDisplayString((unref(movieRaw).revenue / 1e6).toFixed(1)), 1),
                              createVNode("span", { class: "text-sm font-normal text-muted-foreground" }, "M")
                            ]),
                            unref(movieRaw).budget && unref(movieRaw).revenue > unref(movieRaw).budget ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-emerald-500 mt-0.5"
                            }, "+" + toDisplayString(((unref(movieRaw).revenue / unref(movieRaw).budget - 1) * 100).toFixed(0)) + "% ROI", 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        unref(movieRaw)?.productionCompanies?.length ? (openBlock(), createBlock("div", { key: 2 }, [
                          createVNode("p", { class: "text-xs text-muted-foreground uppercase tracking-wider mb-3" }, toDisplayString(_ctx.$t("media.studio")), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).productionCompanies, (studio) => {
                              return openBlock(), createBlock("div", {
                                key: studio.id,
                                class: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50"
                              }, [
                                studio.logo ? (openBlock(), createBlock(_component_NuxtImg, {
                                  key: 0,
                                  src: studio.logo,
                                  alt: studio.name,
                                  class: "h-5 object-contain",
                                  style: { "filter": "invert(1) brightness(0.7)" },
                                  width: "60",
                                  height: "20",
                                  format: "webp"
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode("span", { class: "text-xs font-medium text-foreground/80" }, toDisplayString(studio.name), 1)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.genres")), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(media).genre, (genre) => {
                              return openBlock(), createBlock(_component_NuxtLink, {
                                key: genre,
                                to: `/browse/${genre.toLowerCase().replace(/ /g, "-")}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_tag, { class: "cursor-pointer hover:!text-primary hover:!border-primary/50 transition-colors" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(genre), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ])
                        ]),
                        unref(movieRaw)?.keywords?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("h3", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3" }, toDisplayString(_ctx.$t("media.keywords")), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(movieRaw).keywords.slice(0, 15), (kw) => {
                              return openBlock(), createBlock(_component_a_tag, {
                                key: kw,
                                class: "!text-xs !text-muted-foreground"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(kw), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])), [
                      [
                        _directive_gsap,
                        { opacity: 0, y: 20, duration: 0.5 },
                        void 0,
                        { from: true }
                      ]
                    ])
                  ]),
                  _: 2
                }, 1032, ["tab"]),
                createVNode(_component_a_tab_pane, {
                  key: "cast",
                  tab: _ctx.$t("media.cast")
                }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(media).cast, (person) => {
                        return openBlock(), createBlock(Fragment, {
                          key: person.name
                        }, [
                          person.personId ? (openBlock(), createBlock(_component_NuxtLink, {
                            key: 0,
                            to: `/person/${person.personId}`,
                            class: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_avatar, {
                                src: person.avatar,
                                size: 48
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("p", { class: "text-sm font-semibold truncate" }, toDisplayString(person.name), 1),
                                createVNode("p", { class: "text-xs text-muted-foreground truncate mt-0.5" }, toDisplayString(person.role), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 transition-all duration-200"
                          }, [
                            createVNode(_component_a_avatar, {
                              src: person.avatar,
                              size: 48
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "min-w-0" }, [
                              createVNode("p", { class: "text-sm font-semibold truncate" }, toDisplayString(person.name), 1),
                              createVNode("p", { class: "text-xs text-muted-foreground truncate mt-0.5" }, toDisplayString(person.role), 1)
                            ])
                          ]))
                        ], 64);
                      }), 128))
                    ])), [
                      [
                        _directive_gsap,
                        { opacity: 0, y: 20, duration: 0.5 },
                        void 0,
                        { from: true }
                      ]
                    ])
                  ]),
                  _: 1
                }, 8, ["tab"]),
                unref(media).trailerKey ? (openBlock(), createBlock(_component_a_tab_pane, {
                  key: "trailer",
                  tab: _ctx.$t("media.trailer")
                }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", { class: "pt-4" }, [
                      createVNode("div", {
                        class: "relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl",
                        style: { "aspect-ratio": "16/9" }
                      }, [
                        createVNode("iframe", {
                          src: `https://www.youtube-nocookie.com/embed/${unref(media).trailerKey}?rel=0&modestbranding=1`,
                          title: `${unref(media).title} — Official Trailer`,
                          class: "absolute inset-0 w-full h-full",
                          frameborder: "0",
                          allow: "autoplay; fullscreen; picture-in-picture",
                          allowfullscreen: ""
                        }, null, 8, ["src", "title"])
                      ])
                    ])), [
                      [
                        _directive_gsap,
                        { opacity: 0, y: 20, duration: 0.5 },
                        void 0,
                        { from: true }
                      ]
                    ])
                  ]),
                  _: 1
                }, 8, ["tab"])) : createCommentVNode("", true),
                createVNode(_component_a_tab_pane, {
                  key: "similar",
                  tab: _ctx.$t("media.moreLikeThis")
                }, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(similar), (item) => {
                        return openBlock(), createBlock(_component_MediaCard, {
                          key: item.id,
                          media: item,
                          fluid: ""
                        }, null, 8, ["media"]);
                      }), 128))
                    ])), [
                      [
                        _directive_gsap,
                        { opacity: 0, y: 20, duration: 0.5 },
                        void 0,
                        { from: true }
                      ]
                    ])
                  ]),
                  _: 1
                }, 8, ["tab"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(media)) {
          _push(ssrRenderComponent(_component_WatchModal, {
            open: unref(watchOpen),
            "onUpdate:open": ($event) => isRef(watchOpen) ? watchOpen.value = $event : null,
            media: unref(media)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movie/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04eb6466"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-YvXhgGXj.mjs.map
