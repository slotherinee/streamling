import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { _ as __nuxt_component_1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { an as useHead, ao as useI18n, B as Button, _ as __nuxt_component_0, ay as useRuntimeConfig, i as api$1 } from './server.mjs';
import { defineComponent, ref, computed, resolveDirective, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, withDirectives, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { u as useWatchlistStore } from './watchlist-hlo1lQbX.mjs';
import { u as useProgressStore, g as fromVidLink } from './progress-De0Fy5DO.mjs';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { T as Tabs, _ as __nuxt_component_4 } from './index-6SbvSTPG.mjs';
import { I as Input } from './index-CMu4DoaX.mjs';
import './NuxtImg-zNev45Bl.mjs';
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
import './useHaptic-NT3uIsTJ.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './slide-C57riDBP.mjs';
import 'lodash-es/uniq.js';
import './collapseMotion-CIsPMioQ.mjs';
import './colors-ByhoJTJo.mjs';
import './zoom-ByxQdbsR.mjs';
import 'lodash-es/pick.js';
import '../_/SearchOutlined.mjs';
import 'lodash-es/isPlainObject.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Profile — Streamly" });
    const { t } = useI18n();
    const authStore = useAuthStore();
    const watchlistStore = useWatchlistStore();
    const progressStore = useProgressStore();
    const config = useRuntimeConfig();
    const base = config.public.apiBase;
    const activeTab = ref("watchlist");
    const saving = ref(false);
    const editName = ref(authStore.user?.name ?? "");
    const editAvatar = ref(authStore.user?.avatar ?? "");
    const watchlist = computed(() => watchlistStore.items);
    const continueWatching = computed(() => progressStore.inProgressPaged.map(fromVidLink));
    async function saveProfile() {
      saving.value = true;
      try {
        const body = {};
        if (editName.value.trim() && editName.value !== authStore.user?.name)
          body.name = editName.value.trim();
        if (editAvatar.value !== (authStore.user?.avatar ?? ""))
          body.avatar = editAvatar.value || "";
        if (!Object.keys(body).length) {
          api$1.info(t("profile.noChanges"));
          return;
        }
        const res = await $fetch(
          "/users/me",
          {
            baseURL: base,
            method: "PATCH",
            body,
            headers: { Authorization: `Bearer ${authStore.accessToken}` }
          }
        );
        if (res.data) {
          authStore.setSession(authStore.accessToken, res.data);
          api$1.success(t("profile.saveSuccess"));
        }
      } catch {
        api$1.error(t("profile.saveFailed"));
      } finally {
        saving.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = __nuxt_component_4;
      const _component_MediaCard = __nuxt_component_6;
      const _component_a_button = Button;
      const _component_MediaCardSkeleton = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_input = Input;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 pt-24 pb-16" }, _attrs))}><div class="mb-10 pb-8 border-b border-border space-y-5"><div class="flex items-start gap-5 sm:gap-6"><div class="relative flex-shrink-0"><div class="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 bg-primary/10">`);
      if (unref(authStore).user?.avatar) {
        _push(`<img${ssrRenderAttr("src", unref(authStore).user.avatar)} class="w-full h-full object-cover" alt="">`);
      } else {
        _push(`<div class="w-full h-full flex items-center justify-center"><span class="text-2xl font-bold text-primary">${ssrInterpolate(unref(authStore).user?.name?.[0]?.toUpperCase())}</span></div>`);
      }
      _push(`</div></div><div class="flex-1 min-w-0"><h1 class="text-xl sm:text-2xl font-bold mb-1">${ssrInterpolate(unref(authStore).user?.name)}</h1><p class="text-sm text-muted-foreground">${ssrInterpolate(unref(authStore).user?.email)}</p><p class="text-xs text-muted-foreground mt-1">${ssrInterpolate(_ctx.$t("profile.member"))}</p></div></div><div class="inline-flex gap-5 sm:gap-8 px-4 py-3 rounded-xl bg-card border border-border/50"><div class="text-center"><p class="text-xl font-bold">${ssrInterpolate(unref(watchlist).length)}</p><p class="text-xs text-muted-foreground">${ssrInterpolate(_ctx.$t("profile.watchlist"))}</p></div><div class="w-px bg-border self-stretch"></div><div class="text-center"><p class="text-xl font-bold">${ssrInterpolate(unref(continueWatching).length)}</p><p class="text-xs text-muted-foreground">${ssrInterpolate(_ctx.$t("profile.inProgress"))}</p></div></div></div>`);
      _push(ssrRenderComponent(_component_a_tabs, {
        activeKey: unref(activeTab),
        "onUpdate:activeKey": ($event) => isRef(activeTab) ? activeTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "watchlist",
              tab: `${_ctx.$t("profile.watchlist")}${unref(watchlistStore).total ? ` (${unref(watchlistStore).total})` : ""}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(watchlist).length) {
                    _push3(`<div${_scopeId2}><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(watchlist), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                    if (unref(watchlistStore).hasMore) {
                      _push3(`<div class="flex justify-center mt-8"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_a_button, {
                        loading: unref(watchlistStore).loading,
                        onClick: ($event) => unref(watchlistStore).loadMore()
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("common.loadMore"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else if (unref(watchlistStore).loading) {
                    _push3(`<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(12, (i) => {
                      _push3(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="text-center py-16"${_scopeId2}><p class="text-muted-foreground mb-4"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.watchlistEmpty"))}</p>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_button, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("profile.browseTitle"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("profile.browseTitle")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_button, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("profile.browseTitle")), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    unref(watchlist).length ? (openBlock(), createBlock("div", { key: 0 }, [
                      withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(watchlist), (item) => {
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
                      ]),
                      unref(watchlistStore).hasMore ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center mt-8"
                      }, [
                        createVNode(_component_a_button, {
                          loading: unref(watchlistStore).loading,
                          onClick: ($event) => unref(watchlistStore).loadMore()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"])
                      ])) : createCommentVNode("", true)
                    ])) : unref(watchlistStore).loading ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(12, (i) => {
                        return createVNode(_component_MediaCardSkeleton, { key: i });
                      }), 64))
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-center py-16"
                    }, [
                      createVNode("p", { class: "text-muted-foreground mb-4" }, toDisplayString(_ctx.$t("profile.watchlistEmpty")), 1),
                      createVNode(_component_NuxtLink, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode(_component_a_button, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("profile.browseTitle")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "continue",
              tab: _ctx.$t("profile.continueWatching")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(continueWatching).length) {
                    _push3(`<div${_scopeId2}><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(continueWatching), (item) => {
                      _push3(ssrRenderComponent(_component_MediaCard, {
                        key: item.id,
                        media: item,
                        "show-progress": true,
                        removable: true,
                        fluid: "",
                        onRemove: ($event) => unref(progressStore).remove($event)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                    if (unref(progressStore).progressHasMore) {
                      _push3(`<div class="flex justify-center mt-8"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_a_button, {
                        onClick: ($event) => unref(progressStore).loadMoreProgress()
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("common.loadMore"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="text-center py-16"${_scopeId2}><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.nothingInProgress"))}</p></div>`);
                  }
                } else {
                  return [
                    unref(continueWatching).length ? (openBlock(), createBlock("div", { key: 0 }, [
                      withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(continueWatching), (item) => {
                          return openBlock(), createBlock(_component_MediaCard, {
                            key: item.id,
                            media: item,
                            "show-progress": true,
                            removable: true,
                            fluid: "",
                            onRemove: ($event) => unref(progressStore).remove($event)
                          }, null, 8, ["media", "onRemove"]);
                        }), 128))
                      ])), [
                        [
                          _directive_gsap,
                          { opacity: 0, y: 20, duration: 0.5 },
                          void 0,
                          { from: true }
                        ]
                      ]),
                      unref(progressStore).progressHasMore ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center mt-8"
                      }, [
                        createVNode(_component_a_button, {
                          onClick: ($event) => unref(progressStore).loadMoreProgress()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-16"
                    }, [
                      createVNode("p", { class: "text-muted-foreground" }, toDisplayString(_ctx.$t("profile.nothingInProgress")), 1)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_tab_pane, {
              key: "settings",
              tab: _ctx.$t("profile.settings")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-w-lg pt-6 space-y-6"${_scopeId2}><div${_scopeId2}><label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.displayName"))}</label>`);
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(editName),
                    "onUpdate:value": ($event) => isRef(editName) ? editName.value = $event : null,
                    placeholder: "Your name",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.avatarUrl"))}</label>`);
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(editAvatar),
                    "onUpdate:value": ($event) => isRef(editAvatar) ? editAvatar.value = $event : null,
                    placeholder: _ctx.$t("profile.avatarPlaceholder"),
                    size: "large",
                    "allow-clear": ""
                  }, null, _parent3, _scopeId2));
                  if (unref(editAvatar)) {
                    _push3(`<div class="mt-3 flex items-center gap-3"${_scopeId2}><img${ssrRenderAttr("src", unref(editAvatar))} class="w-12 h-12 rounded-full object-cover border border-border" alt="Preview"${_scopeId2}><span class="text-xs text-muted-foreground"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.avatarPreview"))}</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div${_scopeId2}><label class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2"${_scopeId2}>${ssrInterpolate(_ctx.$t("profile.email"))}</label>`);
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(authStore).user?.email,
                    disabled: "",
                    size: "large"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    size: "large",
                    loading: unref(saving),
                    onClick: saveProfile
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("common.save"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("common.save")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-w-lg pt-6 space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.displayName")), 1),
                        createVNode(_component_a_input, {
                          value: unref(editName),
                          "onUpdate:value": ($event) => isRef(editName) ? editName.value = $event : null,
                          placeholder: "Your name",
                          size: "large"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.avatarUrl")), 1),
                        createVNode(_component_a_input, {
                          value: unref(editAvatar),
                          "onUpdate:value": ($event) => isRef(editAvatar) ? editAvatar.value = $event : null,
                          placeholder: _ctx.$t("profile.avatarPlaceholder"),
                          size: "large",
                          "allow-clear": ""
                        }, null, 8, ["value", "onUpdate:value", "placeholder"]),
                        unref(editAvatar) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-3 flex items-center gap-3"
                        }, [
                          createVNode("img", {
                            src: unref(editAvatar),
                            class: "w-12 h-12 rounded-full object-cover border border-border",
                            alt: "Preview",
                            onError: ($event) => $event.target.style.display = "none"
                          }, null, 40, ["src", "onError"]),
                          createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(_ctx.$t("profile.avatarPreview")), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.email")), 1),
                        createVNode(_component_a_input, {
                          value: unref(authStore).user?.email,
                          disabled: "",
                          size: "large"
                        }, null, 8, ["value"])
                      ]),
                      createVNode(_component_a_button, {
                        type: "primary",
                        size: "large",
                        loading: unref(saving),
                        onClick: saveProfile
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("common.save")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_tab_pane, {
                key: "watchlist",
                tab: `${_ctx.$t("profile.watchlist")}${unref(watchlistStore).total ? ` (${unref(watchlistStore).total})` : ""}`
              }, {
                default: withCtx(() => [
                  unref(watchlist).length ? (openBlock(), createBlock("div", { key: 0 }, [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(watchlist), (item) => {
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
                    ]),
                    unref(watchlistStore).hasMore ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center mt-8"
                    }, [
                      createVNode(_component_a_button, {
                        loading: unref(watchlistStore).loading,
                        onClick: ($event) => unref(watchlistStore).loadMore()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])) : createCommentVNode("", true)
                  ])) : unref(watchlistStore).loading ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(12, (i) => {
                      return createVNode(_component_MediaCardSkeleton, { key: i });
                    }), 64))
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "text-center py-16"
                  }, [
                    createVNode("p", { class: "text-muted-foreground mb-4" }, toDisplayString(_ctx.$t("profile.watchlistEmpty")), 1),
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        createVNode(_component_a_button, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("profile.browseTitle")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]))
                ]),
                _: 1
              }, 8, ["tab"]),
              createVNode(_component_a_tab_pane, {
                key: "continue",
                tab: _ctx.$t("profile.continueWatching")
              }, {
                default: withCtx(() => [
                  unref(continueWatching).length ? (openBlock(), createBlock("div", { key: 0 }, [
                    withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 pt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(continueWatching), (item) => {
                        return openBlock(), createBlock(_component_MediaCard, {
                          key: item.id,
                          media: item,
                          "show-progress": true,
                          removable: true,
                          fluid: "",
                          onRemove: ($event) => unref(progressStore).remove($event)
                        }, null, 8, ["media", "onRemove"]);
                      }), 128))
                    ])), [
                      [
                        _directive_gsap,
                        { opacity: 0, y: 20, duration: 0.5 },
                        void 0,
                        { from: true }
                      ]
                    ]),
                    unref(progressStore).progressHasMore ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center mt-8"
                    }, [
                      createVNode(_component_a_button, {
                        onClick: ($event) => unref(progressStore).loadMoreProgress()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("common.loadMore")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-center py-16"
                  }, [
                    createVNode("p", { class: "text-muted-foreground" }, toDisplayString(_ctx.$t("profile.nothingInProgress")), 1)
                  ]))
                ]),
                _: 1
              }, 8, ["tab"]),
              createVNode(_component_a_tab_pane, {
                key: "settings",
                tab: _ctx.$t("profile.settings")
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "max-w-lg pt-6 space-y-6" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.displayName")), 1),
                      createVNode(_component_a_input, {
                        value: unref(editName),
                        "onUpdate:value": ($event) => isRef(editName) ? editName.value = $event : null,
                        placeholder: "Your name",
                        size: "large"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.avatarUrl")), 1),
                      createVNode(_component_a_input, {
                        value: unref(editAvatar),
                        "onUpdate:value": ($event) => isRef(editAvatar) ? editAvatar.value = $event : null,
                        placeholder: _ctx.$t("profile.avatarPlaceholder"),
                        size: "large",
                        "allow-clear": ""
                      }, null, 8, ["value", "onUpdate:value", "placeholder"]),
                      unref(editAvatar) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-3 flex items-center gap-3"
                      }, [
                        createVNode("img", {
                          src: unref(editAvatar),
                          class: "w-12 h-12 rounded-full object-cover border border-border",
                          alt: "Preview",
                          onError: ($event) => $event.target.style.display = "none"
                        }, null, 40, ["src", "onError"]),
                        createVNode("span", { class: "text-xs text-muted-foreground" }, toDisplayString(_ctx.$t("profile.avatarPreview")), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2" }, toDisplayString(_ctx.$t("profile.email")), 1),
                      createVNode(_component_a_input, {
                        value: unref(authStore).user?.email,
                        disabled: "",
                        size: "large"
                      }, null, 8, ["value"])
                    ]),
                    createVNode(_component_a_button, {
                      type: "primary",
                      size: "large",
                      loading: unref(saving),
                      onClick: saveProfile
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("common.save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-BMvKSVsN.mjs.map
