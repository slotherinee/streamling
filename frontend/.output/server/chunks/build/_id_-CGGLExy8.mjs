import { ao as useI18n, aw as useRoute, t as createError, an as useHead, az as useSeoMeta, _ as __nuxt_component_0, B as Button, g as __nuxt_component_8 } from './server.mjs';
import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { defineComponent, computed, withAsyncContext, ref, resolveDirective, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { T as Tag } from './index-CYfk08-N.mjs';
import { _ as __nuxt_component_6 } from './index-Dz6VzaAT.mjs';
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

const CREDITS_PAGE = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const id = computed(() => {
      const n = Number(route.params.id);
      return Number.isNaN(n) ? null : n;
    });
    const { data: person, error } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(
      () => id.value ? `/people/${id.value}` : null
    )), __temp = await __temp, __restore(), __temp);
    if (!id.value || error.value) throw createError({ statusCode: 404, message: "Person not found" });
    useHead({ title: computed(() => `${person.value?.name ?? "Person"} — Streamly`) });
    useSeoMeta({
      ogTitle: computed(() => `${person.value?.name ?? "Person"} — Streamly`),
      description: computed(() => person.value?.biography?.slice(0, 160) ?? ""),
      ogDescription: computed(() => person.value?.biography?.slice(0, 160) ?? ""),
      ogImage: computed(() => person.value?.profile ?? "/og-default.jpg"),
      twitterCard: "summary_large_image"
    });
    const visibleCredits = ref(CREDITS_PAGE);
    const paginatedCredits = computed(() => (person.value?.credits ?? []).slice(0, visibleCredits.value));
    const hasMoreCredits = computed(() => visibleCredits.value < (person.value?.credits.length ?? 0));
    function formatBirthday(dateStr) {
      try {
        const d = new Date(dateStr);
        const age = Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1e3));
        return `${d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} (age ${age})`;
      } catch {
        return dateStr;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_5;
      const _component_a_tag = Tag;
      const _component_a_divider = __nuxt_component_6;
      const _component_a_button = Button;
      const _component_a_empty = __nuxt_component_8;
      const _directive_gsap = resolveDirective("gsap");
      if (unref(person)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="pt-20 pb-0"><div class="px-4 sm:px-6 lg:px-8"><div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 text-sm text-muted-foreground mb-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: -10, duration: 0.4 }, void 0, { from: true })))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-foreground transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span>/</span><span class="text-foreground">${ssrInterpolate(unref(person).name)}</span></div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row gap-8 items-start" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6 }, void 0, { from: true })))}><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(person).profile ?? void 0,
          alt: unref(person).name,
          class: "w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border border-border/50 shadow-xl",
          width: "224",
          height: "224",
          format: "webp"
        }, null, _parent));
        _push(`</div><div class="flex-1 min-w-0"><h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">${ssrInterpolate(unref(person).name)}</h1><div class="flex flex-wrap gap-2 mb-6">`);
        _push(ssrRenderComponent(_component_a_tag, { class: "!text-xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(person).knownForDepartment)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(person).knownForDepartment), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="space-y-4"><div><h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">${ssrInterpolate(_ctx.$t("media.biography"))}</h3><p class="text-foreground/80 leading-relaxed text-sm sm:text-base">${ssrInterpolate(unref(person).biography || _ctx.$t("media.noBio"))}</p></div>`);
        _push(ssrRenderComponent(_component_a_divider, null, null, _parent));
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`);
        if (unref(person).birthday) {
          _push(`<div><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">${ssrInterpolate(_ctx.$t("media.born"))}</p><p class="text-sm font-medium">${ssrInterpolate(formatBirthday(unref(person).birthday))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(person).deathday) {
          _push(`<div><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">${ssrInterpolate(_ctx.$t("media.died"))}</p><p class="text-sm font-medium">${ssrInterpolate(unref(person).deathday)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(person).placeOfBirth) {
          _push(`<div><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">${ssrInterpolate(_ctx.$t("media.birthplace"))}</p><p class="text-sm font-medium">${ssrInterpolate(unref(person).placeOfBirth)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(person).gender) {
          _push(`<div><p class="text-xs text-muted-foreground uppercase tracking-wider mb-1">${ssrInterpolate(_ctx.$t("media.gender"))}</p><p class="text-sm font-medium">${ssrInterpolate(unref(person).gender === 1 ? _ctx.$t("media.female") : unref(person).gender === 2 ? _ctx.$t("media.male") : _ctx.$t("media.nonBinary"))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(person).alsoKnownAs?.length) {
          _push(`<div class="pt-2"><p class="text-xs text-muted-foreground uppercase tracking-wider mb-2">${ssrInterpolate(_ctx.$t("media.alsoKnownAs"))}</p><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(person).alsoKnownAs.slice(0, 5), (alias) => {
            _push(ssrRenderComponent(_component_a_tag, {
              key: alias,
              class: "!text-xs"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(alias)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(alias), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div><div class="px-4 sm:px-6 lg:px-8 py-12"><h2${ssrRenderAttrs(mergeProps({ class: "text-xl font-bold mb-6" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 10, duration: 0.4 }, void 0, { from: true })))}>${ssrInterpolate(_ctx.$t("media.filmography"))}</h2>`);
        if (unref(person).credits.length) {
          _push(`<div class="space-y-3"><!--[-->`);
          ssrRenderList(unref(paginatedCredits), (credit) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: `${credit.mediaType}-${credit.id}`,
              to: credit.mediaType === "tv" ? `/tv/${credit.id}` : `/movie/${credit.id}`,
              class: "flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200 group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    src: credit.poster ?? void 0,
                    alt: credit.title,
                    class: "w-14 aspect-[2/3] object-cover rounded-lg border border-border/50 flex-shrink-0",
                    width: "56",
                    height: "84",
                    format: "webp",
                    loading: "lazy"
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2 mb-0.5"${_scopeId}><h3 class="font-semibold text-foreground group-hover:text-primary transition-colors truncate"${_scopeId}>${ssrInterpolate(credit.title)}</h3>`);
                  _push2(ssrRenderComponent(_component_a_tag, {
                    color: credit.mediaType === "tv" ? "blue" : void 0,
                    class: "!text-xs flex-shrink-0"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(credit.mediaType === "tv" ? _ctx.$t("common.series") : _ctx.$t("common.movie"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(credit.mediaType === "tv" ? _ctx.$t("common.series") : _ctx.$t("common.movie")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  if (credit.character) {
                    _push2(`<p class="text-xs text-muted-foreground mb-1"${_scopeId}>as ${ssrInterpolate(credit.character)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="flex items-center gap-2 text-xs text-muted-foreground"${_scopeId}>`);
                  if (credit.year) {
                    _push2(`<span${_scopeId}>${ssrInterpolate(credit.year)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (credit.year && credit.rating) {
                    _push2(`<span class="w-1 h-1 rounded-full bg-border"${_scopeId}></span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (credit.rating) {
                    _push2(`<div class="flex items-center gap-1"${_scopeId}><svg class="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"${_scopeId}></path></svg><span class="text-amber-400 font-medium"${_scopeId}>${ssrInterpolate(credit.rating.toFixed(1))}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div><svg class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      src: credit.poster ?? void 0,
                      alt: credit.title,
                      class: "w-14 aspect-[2/3] object-cover rounded-lg border border-border/50 flex-shrink-0",
                      width: "56",
                      height: "84",
                      format: "webp",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode("div", { class: "flex items-center gap-2 mb-0.5" }, [
                        createVNode("h3", { class: "font-semibold text-foreground group-hover:text-primary transition-colors truncate" }, toDisplayString(credit.title), 1),
                        createVNode(_component_a_tag, {
                          color: credit.mediaType === "tv" ? "blue" : void 0,
                          class: "!text-xs flex-shrink-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(credit.mediaType === "tv" ? _ctx.$t("common.series") : _ctx.$t("common.movie")), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      credit.character ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-xs text-muted-foreground mb-1"
                      }, "as " + toDisplayString(credit.character), 1)) : createCommentVNode("", true),
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-muted-foreground" }, [
                        credit.year ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(credit.year), 1)) : createCommentVNode("", true),
                        credit.year && credit.rating ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "w-1 h-1 rounded-full bg-border"
                        })) : createCommentVNode("", true),
                        credit.rating ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "flex items-center gap-1"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-3 h-3 text-amber-400",
                            fill: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                          ])),
                          createVNode("span", { class: "text-amber-400 font-medium" }, toDisplayString(credit.rating.toFixed(1)), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5l7 7-7 7"
                      })
                    ]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]-->`);
          if (unref(hasMoreCredits)) {
            _push(`<div class="flex justify-center mt-6">`);
            _push(ssrRenderComponent(_component_a_button, {
              onClick: ($event) => visibleCredits.value += CREDITS_PAGE
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("common.loadMore"))} <span class="ml-1 text-muted-foreground text-sm"${_scopeId}>(${ssrInterpolate(unref(person).credits.length - unref(visibleCredits))} remaining)</span>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("common.loadMore")) + " ", 1),
                    createVNode("span", { class: "ml-1 text-muted-foreground text-sm" }, "(" + toDisplayString(unref(person).credits.length - unref(visibleCredits)) + " remaining)", 1)
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
        } else {
          _push(`<div class="text-center py-16">`);
          _push(ssrRenderComponent(_component_a_empty, {
            description: _ctx.$t("media.noCredits")
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/person/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CGGLExy8.mjs.map
