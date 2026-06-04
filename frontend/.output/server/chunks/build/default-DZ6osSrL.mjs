import { ao as useI18n, aw as useRoute, ax as useRouter, _ as __nuxt_component_0$1, f as __nuxt_component_1$1, B as Button } from './server.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useHaptic } from './useHaptic-NT3uIsTJ.mjs';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { setLocale } = useI18n({ useScope: "global" });
    const route = useRoute();
    useRouter();
    const authStore = useAuthStore();
    const displayLang = ref("en");
    watch(() => authStore.user?.language, (lang) => {
      if (lang) displayLang.value = lang;
    });
    const currentLang = computed(() => displayLang.value);
    const isScrolled = ref(false);
    const logoRef = ref(null);
    function onLogoEnter() {
      const el = logoRef.value;
      if (!el) return;
      el.classList.remove("logo-spin");
      void el.offsetWidth;
      el.classList.add("logo-spin");
      const onEnd = () => {
        el.classList.remove("logo-spin");
        el.removeEventListener("animationend", onEnd);
      };
      el.addEventListener("animationend", onEnd);
    }
    const mobileMenuOpen = ref(false);
    const searchOpen = ref(false);
    const searchQuery = ref("");
    const navLinks = computed(() => [
      { label: t("nav.home"), to: "/" },
      { label: t("common.movies"), to: "/browse/movie" },
      { label: t("common.series"), to: "/browse/series" },
      { label: t("nav.trending"), to: "/trending" },
      { label: t("nav.discover"), to: "/discover" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_a_button = Button;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          unref(isScrolled) || unref(searchOpen) ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/10" : "bg-gradient-to-b from-background/70 to-transparent"
        ]
      }, _attrs))} data-v-b0d5bb07><div class="px-4 sm:px-6 lg:px-8" data-v-b0d5bb07><div class="flex items-center justify-between h-16" data-v-b0d5bb07>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/",
        "aria-label": "Streamly — go to home",
        class: "flex items-center gap-2 group"
      }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.6 }, void 0, { from: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo-icon w-8 h-8 rounded-lg bg-primary flex items-center justify-center" data-v-b0d5bb07${_scopeId}><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-b0d5bb07${_scopeId}><path d="M8 5v14l11-7z" data-v-b0d5bb07${_scopeId}></path></svg></div><span class="text-xl font-bold text-foreground tracking-tight" data-v-b0d5bb07${_scopeId}>Streamly</span>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "logoRef",
                ref: logoRef,
                class: "logo-icon w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                onMouseenter: onLogoEnter
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 text-white",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", { d: "M8 5v14l11-7z" })
                ]))
              ], 544),
              createVNode("span", { class: "text-xl font-bold text-foreground tracking-tight" }, "Streamly")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden md:flex items-center gap-1" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: -10, duration: 0.6, delay: 0.1 }, void 0, { from: true })))} data-v-b0d5bb07><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          "aria-current": unref(route).path === link.to ? "page" : void 0,
          class: [
            "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
            unref(route).path === link.to ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: 20, duration: 0.6, delay: 0.1 }, void 0, { from: true })))} data-v-b0d5bb07>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/search",
        "aria-label": "Search",
        class: "sm:hidden h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b0d5bb07${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b0d5bb07${_scopeId}></path></svg>`);
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
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden sm:flex relative items-center" data-v-b0d5bb07>`);
      if (unref(searchOpen)) {
        _push(`<div class="relative flex items-center gap-2 mr-1" data-v-b0d5bb07><input id="navbar-search"${ssrRenderAttr("value", unref(searchQuery))} aria-label="Search titles" autofocus placeholder="Search titles..." class="w-44 sm:w-56 h-9 bg-secondary/80 border border-border rounded-lg pl-3 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all" data-v-b0d5bb07>`);
        if (unref(searchQuery)) {
          _push(`<button type="button" aria-label="Clear search" class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" data-v-b0d5bb07><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-b0d5bb07><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" data-v-b0d5bb07></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button${ssrRenderAttr("aria-label", unref(searchOpen) ? unref(searchQuery) ? "Go to search" : "Close search" : "Open search")}${ssrRenderAttr("aria-expanded", unref(searchOpen))} aria-controls="navbar-search" class="h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" data-v-b0d5bb07><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b0d5bb07><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b0d5bb07></path></svg></button></div><div class="hidden sm:flex items-center gap-0.5 bg-secondary/60 rounded-lg p-0.5 border border-border/50" data-v-b0d5bb07><!--[-->`);
      ssrRenderList([{ code: "en", label: "EN" }, { code: "ru", label: "RU" }], (lang) => {
        _push(`<button class="${ssrRenderClass([
          "h-7 px-2.5 rounded-md text-xs font-semibold transition-all duration-150",
          unref(currentLang) === lang.code ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
        ])}" data-v-b0d5bb07>${ssrInterpolate(lang.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/login",
              class: "hidden md:flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_button, {
                    size: "small",
                    type: "primary",
                    ghost: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("nav.signIn"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("nav.signIn")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      size: "small",
                      type: "primary",
                      ghost: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("nav.signIn")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/login",
                class: "hidden md:flex"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_button, {
                    size: "small",
                    type: "primary",
                    ghost: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("nav.signIn")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        })
      }, _parent));
      _push(`<button${ssrRenderAttr("aria-label", unref(mobileMenuOpen) ? "Close menu" : "Open menu")}${ssrRenderAttr("aria-expanded", unref(mobileMenuOpen))} aria-controls="mobile-nav-menu" class="hidden h-9 w-9 flex items-center justify-center rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" data-v-b0d5bb07>`);
      if (!unref(mobileMenuOpen)) {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b0d5bb07><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-b0d5bb07></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b0d5bb07><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b0d5bb07></path></svg>`);
      }
      _push(`</button></div></div></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div id="mobile-nav-menu" class="md:hidden bg-background/98 backdrop-blur-md border-t border-border" data-v-b0d5bb07><div class="px-4 py-3 space-y-1" data-v-b0d5bb07><!--[-->`);
        ssrRenderList(unref(navLinks), (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            "aria-current": unref(route).path === link.to ? "page" : void 0,
            class: [
              "block px-4 py-2.5 rounded-md text-sm font-medium transition-all",
              unref(route).path === link.to ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            ],
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="flex items-center gap-2 px-4 pt-3 pb-1" data-v-b0d5bb07><span class="text-xs text-muted-foreground" data-v-b0d5bb07>${ssrInterpolate(unref(t)("profile.contentLanguage"))}:</span><div class="flex gap-1" data-v-b0d5bb07><!--[-->`);
        ssrRenderList([{ code: "en", label: "🇬🇧 EN" }, { code: "ru", label: "🇷🇺 RU" }], (lang) => {
          _push(`<button class="${ssrRenderClass([
            "px-3 py-1 rounded-md text-xs font-semibold transition-all border",
            unref(currentLang) === lang.code ? "bg-primary text-white border-primary" : "text-muted-foreground border-border hover:text-foreground"
          ])}" data-v-b0d5bb07>${ssrInterpolate(lang.label)}</button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-b0d5bb07"]]), { __name: "AppNavbar" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const browseLinks = computed(() => [
      { key: "movies", to: "/browse/movie" },
      { key: "series", to: "/browse/series" },
      { key: "newHot", to: "/browse/new" },
      { key: "topRated", to: "/browse/top-rated" },
      { key: "comingSoon", to: "/browse/upcoming" },
      { key: "airingToday", to: "/browse/airing-today" },
      { key: "tvTopRated", to: "/browse/tv-top-rated" }
    ]);
    const genreLinks = computed(() => [
      { key: "scifi", to: "/browse/sci-fi" },
      { key: "drama", to: "/browse/drama" },
      { key: "thriller", to: "/browse/thriller" },
      { key: "action", to: "/browse/action" },
      { key: "fantasy", to: "/browse/fantasy" }
    ]);
    const accountLinks = computed(() => [
      { key: "profile", to: "/profile" },
      { key: "login", to: "/login" },
      { key: "register", to: "/register" }
    ]);
    const legalLinks = computed(() => [
      { key: "privacy" },
      { key: "terms" },
      { key: "cookies" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background border-t border-border mt-24" }, _attrs))}><div class="px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"><div class="col-span-2 md:col-span-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "aria-label": "Streamly — go to home",
        class: "flex items-center gap-2 mb-4 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"${_scopeId}><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path d="M8 5v14l11-7z"${_scopeId}></path></svg></div><span class="text-xl font-bold tracking-tight"${_scopeId}>Streamly</span>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 text-white",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [
                  createVNode("path", { d: "M8 5v14l11-7z" })
                ]))
              ]),
              createVNode("span", { class: "text-xl font-bold tracking-tight" }, "Streamly")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-muted-foreground leading-relaxed">${ssrInterpolate(unref(t)("footer.tagline"))}</p></div><div><h4 class="text-sm font-semibold text-foreground mb-4">${ssrInterpolate(unref(t)("footer.browse"))}</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(unref(browseLinks), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(`footer.${item.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(`footer.${item.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="text-sm font-semibold text-foreground mb-4">${ssrInterpolate(unref(t)("footer.genres"))}</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(unref(genreLinks), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(`footer.${item.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(`footer.${item.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="text-sm font-semibold text-foreground mb-4">${ssrInterpolate(unref(t)("footer.account"))}</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(unref(accountLinks), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(`footer.${item.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(`footer.${item.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4"><p class="text-xs text-muted-foreground"> © 2024 Streamly. ${ssrInterpolate(unref(t)("footer.copyright"))}</p><div class="flex items-center gap-6"><!--[-->`);
      ssrRenderList(unref(legalLinks), (item) => {
        _push(`<a href="#" class="text-xs text-muted-foreground hover:text-foreground transition-colors">${ssrInterpolate(unref(t)(`footer.${item.key}`))}</a>`);
      });
      _push(`<!--]--></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "AppFooter" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppBottomNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const haptic = useHaptic();
    const navItems = [
      {
        label: "Home",
        to: "/",
        exact: true,
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
      },
      {
        label: "Search",
        to: "/search",
        exact: false,
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`
      },
      {
        label: "Discover",
        to: "/discover",
        exact: false,
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`
      },
      {
        label: "Profile",
        to: "/profile",
        exact: false,
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
      }
    ];
    function isActive(item) {
      if (item.exact) return route.path === item.to;
      if (item.to === "/discover") return route.path.startsWith("/discover") || route.path.startsWith("/browse");
      return route.path.startsWith(item.to);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border/50",
        role: "navigation",
        "aria-label": "Mobile navigation",
        style: { "padding-bottom": "env(safe-area-inset-bottom)" }
      }, _attrs))}><div class="flex items-stretch h-14"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          "aria-label": item.label,
          "aria-current": isActive(item) ? "page" : void 0,
          class: ["flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors duration-200", isActive(item) ? "text-primary" : "text-muted-foreground hover:text-foreground"],
          onClick: ($event) => unref(haptic).selection()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="w-5 h-5"${_scopeId}>${item.icon ?? ""}</span><span class="text-[10px] font-medium leading-none"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "w-5 h-5",
                  innerHTML: item.icon
                }, null, 8, ["innerHTML"]),
                createVNode("span", { class: "text-[10px] font-medium leading-none" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppBottomNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "AppBottomNav" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppScrollTop",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(visible)) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "aria-label": "Scroll to top"
        }, _attrs))} data-v-e123c6eb><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-v-e123c6eb><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" data-v-e123c6eb></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppScrollTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-e123c6eb"]]), { __name: "AppScrollTop" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavbar = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  const _component_AppBottomNav = __nuxt_component_2;
  const _component_AppScrollTop = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background text-foreground" }, _attrs))}><a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none"> Skip to main content </a>`);
  _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
  _push(`<main id="main-content" tabindex="-1" class="pb-16 md:pb-0">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_AppBottomNav, null, null, _parent));
  _push(ssrRenderComponent(_component_AppScrollTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DZ6osSrL.mjs.map
