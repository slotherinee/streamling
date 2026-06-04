import { ao as useI18n, an as useHead, az as useSeoMeta, aw as useRoute, ax as useRouter, _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { defineComponent, computed, ref, withAsyncContext, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { c as fromTrending } from './progress-De0Fy5DO.mjs';
import { u as usePageReady } from './usePageReady-CEiMWPaE.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { T as Tabs, _ as __nuxt_component_4 } from './index-6SbvSTPG.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './RadioButton-C_RciHCU.mjs';
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
import './watchlist-hlo1lQbX.mjs';
import './auth-LLhfWJq6.mjs';
import './useHaptic-NT3uIsTJ.mjs';
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './slide-C57riDBP.mjs';
import 'lodash-es/uniq.js';
import './collapseMotion-CIsPMioQ.mjs';
import './colors-ByhoJTJo.mjs';
import './zoom-ByxQdbsR.mjs';
import 'lodash-es/pick.js';
import './Checkbox-DR1sAdvE.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trending",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    useHead({ title: "Trending — Streamly" });
    useSeoMeta({
      ogTitle: "Trending Now — Streamly",
      description: "What everyone is watching right now. Top trending movies, series, and people.",
      ogDescription: "What everyone is watching right now. Top trending movies, series, and people.",
      twitterCard: "summary_large_image"
    });
    const route = useRoute();
    const router = useRouter();
    const VALID_TABS = ["all", "movies", "tv", "people"];
    const activeTab = computed({
      get: () => VALID_TABS.includes(route.query.tab) ? route.query.tab : "all",
      set: (val) => router.replace({ query: { ...route.query, tab: val } })
    });
    const timeWindow = ref("day");
    const pageReady = usePageReady();
    const { data: allRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(
      () => `/trending?type=all&window=${timeWindow.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: moviesRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(
      () => `/trending?type=movie&window=${timeWindow.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: tvRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(
      () => `/trending?type=tv&window=${timeWindow.value}`
    )), __temp = await __temp, __restore(), __temp);
    const { data: peopleRaw } = ([__temp, __restore] = withAsyncContext(() => useApiFetch("/people/popular")), __temp = await __temp, __restore(), __temp);
    const trendingAll = computed(
      () => (allRaw.value?.results ?? []).filter((t2) => t2.mediaType !== "person").map(fromTrending)
    );
    const trendingMovies = computed(() => (moviesRaw.value?.results ?? []).map(fromTrending));
    const trendingTV = computed(() => (tvRaw.value?.results ?? []).map(fromTrending));
    const trendingPeople = computed(() => (peopleRaw.value?.results ?? []).slice(0, 8));
    computed(() => {
      if (activeTab.value === "movies") return trendingMovies.value;
      if (activeTab.value === "tv") return trendingTV.value;
      return trendingAll.value;
    });
    const tabCounts = computed(() => ({
      all: trendingAll.value.length,
      movies: trendingMovies.value.length,
      tv: trendingTV.value.length,
      people: trendingPeople.value.length
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_radio_group = __nuxt_component_1;
      const _component_a_radio_button = __nuxt_component_2;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = __nuxt_component_4;
      const _component_MediaCardSkeleton = __nuxt_component_1$1;
      const _component_MediaCard = __nuxt_component_6;
      const _component_NuxtImg = __nuxt_component_5;
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
      _push(`<span>/</span><span class="text-foreground">${ssrInterpolate(unref(t)("trending.title"))}</span></div><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2"><div class="flex items-center gap-3"><div class="flex items-center gap-2"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${ssrInterpolate(_ctx.$t("trending.title"))}</h1></div></div>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        value: unref(timeWindow),
        "onUpdate:value": ($event) => isRef(timeWindow) ? timeWindow.value = $event : null,
        "button-style": "solid",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_radio_button, { value: "day" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trending.today"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trending.today")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_radio_button, { value: "week" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("trending.thisWeek"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("trending.thisWeek")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_radio_button, { value: "day" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("trending.today")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_radio_button, { value: "week" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("trending.thisWeek")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-muted-foreground">${ssrInterpolate(_ctx.$t("trending.subtitle"))}</p></div>`);
      _push(ssrRenderComponent(_component_a_tabs, {
        activeKey: unref(activeTab),
        "onUpdate:activeKey": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "all",
              tab: `${_ctx.$t("common.all")} (${unref(tabCounts).all})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(pageReady)) {
                    _push3(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(8, (i) => {
                      _push3(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(trendingAll), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    !unref(pageReady) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                        return createVNode(_component_MediaCardSkeleton, { key: i });
                      }), 64))
                    ])) : withDirectives((openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingAll), (item) => {
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
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "movies",
              tab: `${_ctx.$t("common.movies")} (${unref(tabCounts).movies})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(pageReady)) {
                    _push3(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(6, (i) => {
                      _push3(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(trendingMovies), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    !unref(pageReady) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                        return createVNode(_component_MediaCardSkeleton, { key: i });
                      }), 64))
                    ])) : withDirectives((openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingMovies), (item) => {
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
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "tv",
              tab: `${_ctx.$t("trending.tv")} (${unref(tabCounts).tv})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(pageReady)) {
                    _push3(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(6, (i) => {
                      _push3(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(trendingTV), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    !unref(pageReady) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                        return createVNode(_component_MediaCardSkeleton, { key: i });
                      }), 64))
                    ])) : withDirectives((openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingTV), (item) => {
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
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "people",
              tab: `${_ctx.$t("trending.people")} (${unref(tabCounts).people})`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(trendingPeople), (person, i) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({
                      key: person.id,
                      to: `/person/${person.id}`,
                      class: "group block text-center"
                    }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.4, delay: i * 0.06 }, void 0, {
                      onEnter: true,
                      from: true
                    })), {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="relative mx-auto w-full aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 mb-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtImg, {
                            src: person.profile ?? "",
                            alt: person.name,
                            class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                            loading: "lazy",
                            format: "webp",
                            width: "342",
                            height: "342"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId3}></div></div><h3 class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate"${_scopeId3}>${ssrInterpolate(person.name)}</h3><p class="text-xs text-muted-foreground mt-0.5 truncate"${_scopeId3}>${ssrInterpolate(person.knownForDepartment)}</p>`);
                        } else {
                          return [
                            createVNode("div", { class: "relative mx-auto w-full aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 mb-3" }, [
                              createVNode(_component_NuxtImg, {
                                src: person.profile ?? "",
                                alt: person.name,
                                class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                loading: "lazy",
                                format: "webp",
                                width: "342",
                                height: "342"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                            ]),
                            createVNode("h3", { class: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate" }, toDisplayString(person.name), 1),
                            createVNode("p", { class: "text-xs text-muted-foreground mt-0.5 truncate" }, toDisplayString(person.knownForDepartment), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingPeople), (person, i) => {
                        return withDirectives((openBlock(), createBlock(_component_NuxtLink, {
                          key: person.id,
                          to: `/person/${person.id}`,
                          class: "group block text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative mx-auto w-full aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 mb-3" }, [
                              createVNode(_component_NuxtImg, {
                                src: person.profile ?? "",
                                alt: person.name,
                                class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                loading: "lazy",
                                format: "webp",
                                width: "342",
                                height: "342"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                            ]),
                            createVNode("h3", { class: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate" }, toDisplayString(person.name), 1),
                            createVNode("p", { class: "text-xs text-muted-foreground mt-0.5 truncate" }, toDisplayString(person.knownForDepartment), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])), [
                          [
                            _directive_gsap,
                            { opacity: 0, y: 20, duration: 0.4, delay: i * 0.06 },
                            void 0,
                            {
                              onEnter: true,
                              from: true
                            }
                          ]
                        ]);
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
                key: "all",
                tab: `${_ctx.$t("common.all")} (${unref(tabCounts).all})`
              }, {
                default: withCtx(() => [
                  !unref(pageReady) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                      return createVNode(_component_MediaCardSkeleton, { key: i });
                    }), 64))
                  ])) : withDirectives((openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingAll), (item) => {
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
              }, 8, ["tab"]),
              createVNode(_component_a_tab_pane, {
                key: "movies",
                tab: `${_ctx.$t("common.movies")} (${unref(tabCounts).movies})`
              }, {
                default: withCtx(() => [
                  !unref(pageReady) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                      return createVNode(_component_MediaCardSkeleton, { key: i });
                    }), 64))
                  ])) : withDirectives((openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingMovies), (item) => {
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
              }, 8, ["tab"]),
              createVNode(_component_a_tab_pane, {
                key: "tv",
                tab: `${_ctx.$t("trending.tv")} (${unref(tabCounts).tv})`
              }, {
                default: withCtx(() => [
                  !unref(pageReady) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                      return createVNode(_component_MediaCardSkeleton, { key: i });
                    }), 64))
                  ])) : withDirectives((openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingTV), (item) => {
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
              }, 8, ["tab"]),
              createVNode(_component_a_tab_pane, {
                key: "people",
                tab: `${_ctx.$t("trending.people")} (${unref(tabCounts).people})`
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(trendingPeople), (person, i) => {
                      return withDirectives((openBlock(), createBlock(_component_NuxtLink, {
                        key: person.id,
                        to: `/person/${person.id}`,
                        class: "group block text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative mx-auto w-full aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 mb-3" }, [
                            createVNode(_component_NuxtImg, {
                              src: person.profile ?? "",
                              alt: person.name,
                              class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                              loading: "lazy",
                              format: "webp",
                              width: "342",
                              height: "342"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                          ]),
                          createVNode("h3", { class: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate" }, toDisplayString(person.name), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground mt-0.5 truncate" }, toDisplayString(person.knownForDepartment), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])), [
                        [
                          _directive_gsap,
                          { opacity: 0, y: 20, duration: 0.4, delay: i * 0.06 },
                          void 0,
                          {
                            onEnter: true,
                            from: true
                          }
                        ]
                      ]);
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trending.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=trending-B2MaIY2r.mjs.map
