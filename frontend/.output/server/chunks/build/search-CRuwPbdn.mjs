import { _ as __nuxt_component_1$1 } from './MediaCardSkeleton-CVw0sBpD.mjs';
import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { ao as useI18n, aw as useRoute, ax as useRouter, an as useHead, _ as __nuxt_component_0$1, g as __nuxt_component_8 } from './server.mjs';
import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, resolveDirective, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { b as fromSearchResult } from './progress-De0Fy5DO.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import { u as usePageReady } from './usePageReady-CEiMWPaE.mjs';
import { _ as __nuxt_component_0 } from './index-CMu4DoaX.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, R as Radio } from './RadioButton-C_RciHCU.mjs';
import { S as Select } from './index-hqCdhbUA.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './watchlist-hlo1lQbX.mjs';
import 'pinia';
import './auth-LLhfWJq6.mjs';
import './useHaptic-NT3uIsTJ.mjs';
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
import '../_/SearchOutlined.mjs';
import 'lodash-es/isPlainObject.js';
import './Checkbox-DR1sAdvE.mjs';
import './slide-C57riDBP.mjs';

Radio.Group = __nuxt_component_1;
Radio.Button = __nuxt_component_2;
Radio.install = function(app) {
  app.component(Radio.name, Radio);
  app.component(Radio.Group.name, Radio.Group);
  app.component(Radio.Button.name, Radio.Button);
  return app;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const routeQuery = computed(() => route.query.q || "");
    const query = ref(routeQuery.value);
    watch(routeQuery, (q) => {
      query.value = q;
    });
    useHead({ title: computed(() => routeQuery.value ? `"${routeQuery.value}" — Streamly` : "Search — Streamly") });
    function handleSearch() {
      if (query.value.trim()) router.push(`/search?q=${encodeURIComponent(query.value.trim())}`);
    }
    const { data: resultsRaw, pending } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(
      () => routeQuery.value ? `/search?q=${encodeURIComponent(routeQuery.value)}` : "/search?q=__empty__"
    )), __temp = await __temp, __restore(), __temp);
    const pageReady = usePageReady();
    const sortBy = ref("relevance");
    const filterType = ref("all");
    const people = computed(
      () => (resultsRaw.value?.results ?? []).filter((r) => r.mediaType === "person")
    );
    const results = computed(
      () => (resultsRaw.value?.results ?? []).filter((r) => r.mediaType !== "person").map(fromSearchResult)
    );
    const filtered = computed(() => {
      let list = results.value;
      if (filterType.value === "movie") list = list.filter((m) => m.type === "movie");
      if (filterType.value === "series") list = list.filter((m) => m.type === "series");
      if (sortBy.value === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
      else if (sortBy.value === "year") list = [...list].sort((a, b) => b.year - a.year);
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_input_search = __nuxt_component_0;
      const _component_a_radio_group = __nuxt_component_1;
      const _component_a_radio_button = __nuxt_component_2;
      const _component_a_select = Select;
      const _component_MediaCardSkeleton = __nuxt_component_1$1;
      const _component_MediaCard = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_5;
      const _component_a_empty = __nuxt_component_8;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 pt-24 pb-16" }, _attrs))}><div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto mb-10" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: -20, duration: 0.5 }, void 0, { from: true })))}><h1 class="text-2xl font-bold text-center mb-6">${ssrInterpolate(unref(query) ? `Results for "${unref(query)}"` : _ctx.$t("search.title"))}</h1>`);
      _push(ssrRenderComponent(_component_a_input_search, {
        value: unref(query),
        "onUpdate:value": ($event) => isRef(query) ? query.value = $event : null,
        placeholder: _ctx.$t("search.placeholder"),
        size: "large",
        "enter-button": "",
        "allow-clear": "",
        onSearch: handleSearch
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-3 mb-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 10, duration: 0.4 }, void 0, {
        onEnter: true,
        from: true
      })))}><div class="flex items-center gap-2"><span class="text-sm text-muted-foreground">${ssrInterpolate(_ctx.$t("search.type"))}:</span>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        value: unref(filterType),
        "onUpdate:value": ($event) => isRef(filterType) ? filterType.value = $event : null,
        "button-style": "solid",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_radio_button, { value: "all" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("common.all"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("common.all")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_radio_button, { value: "movie" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("common.movies"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("common.movies")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_radio_button, { value: "series" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("common.series"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("common.series")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_radio_button, { value: "all" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.all")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_radio_button, { value: "movie" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.movies")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_radio_button, { value: "series" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("common.series")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2 ml-auto"><span class="text-sm text-muted-foreground">${ssrInterpolate(_ctx.$t("search.sort"))}:</span>`);
      _push(ssrRenderComponent(_component_a_select, {
        value: unref(sortBy),
        "onUpdate:value": ($event) => isRef(sortBy) ? sortBy.value = $event : null,
        size: "small",
        options: [
          { value: "relevance", label: _ctx.$t("search.relevance") },
          { value: "rating", label: _ctx.$t("search.rating") },
          { value: "year", label: _ctx.$t("search.year") }
        ],
        class: "w-32"
      }, null, _parent));
      _push(`</div></div>`);
      if (!unref(pending)) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "text-sm text-muted-foreground mb-6" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, duration: 0.3 }, void 0, {
          onEnter: true,
          from: true
        })))}>${ssrInterpolate(unref(filtered).length + (unref(filterType) === "all" ? unref(people).length : 0))} ${ssrInterpolate(_ctx.$t("search.resultsFor"))} ${ssrInterpolate(unref(query) ? `"${unref(query)}"` : "")}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending) || !unref(pageReady)) {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_MediaCardSkeleton, { key: i }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(filtered).length || unref(people).length) {
        _push(`<!--[-->`);
        if (unref(filtered).length) {
          _push(`<div class="${ssrRenderClass(unref(filterType) === "all" && unref(people).length ? "mb-10" : "")}">`);
          if (unref(filterType) === "all" && unref(people).length) {
            _push(`<h2 class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">${ssrInterpolate(_ctx.$t("search.moviesAndSeries"))}</h2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, {
            onEnter: true,
            from: true
          })))}><!--[-->`);
          ssrRenderList(unref(filtered), (item) => {
            _push(ssrRenderComponent(_component_MediaCard, {
              key: item.id,
              media: item,
              fluid: ""
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(filterType) === "all" && unref(people).length) {
          _push(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, {
            onEnter: true,
            from: true
          }))}><h2 class="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">${ssrInterpolate(_ctx.$t("search.people"))}</h2><div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"><!--[-->`);
          ssrRenderList(unref(people), (person) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: person.id,
              to: `/person/${person.id}`,
              class: "group text-center"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="relative mx-auto w-full aspect-square rounded-full overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 mb-2"${_scopeId}>`);
                  if (person.poster) {
                    _push2(ssrRenderComponent(_component_NuxtImg, {
                      src: person.poster,
                      alt: person.title,
                      class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      loading: "lazy",
                      format: "webp",
                      width: "160",
                      height: "160"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<div class="w-full h-full flex items-center justify-center text-muted-foreground"${_scopeId}><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg></div>`);
                  }
                  _push2(`</div><p class="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-tight truncate"${_scopeId}>${ssrInterpolate(person.title)}</p>`);
                } else {
                  return [
                    createVNode("div", { class: "relative mx-auto w-full aspect-square rounded-full overflow-hidden bg-secondary border border-border/50 group-hover:border-primary/40 transition-all duration-300 mb-2" }, [
                      person.poster ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 0,
                        src: person.poster,
                        alt: person.title,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        loading: "lazy",
                        format: "webp",
                        width: "160",
                        height: "160"
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "w-full h-full flex items-center justify-center text-muted-foreground"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          })
                        ]))
                      ]))
                    ]),
                    createVNode("p", { class: "text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-tight truncate" }, toDisplayString(person.title), 1)
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
        _push(`<!--]-->`);
      } else if (unref(query) && !unref(pending)) {
        _push(`<div class="text-center py-20">`);
        _push(ssrRenderComponent(_component_a_empty, {
          description: `${_ctx.$t("search.noResults")} "${unref(query)}"`,
          class: "!text-muted-foreground"
        }, null, _parent));
        _push(`</div>`);
      } else if (!unref(query)) {
        _push(`<div class="text-center py-20 text-muted-foreground"><p>${ssrInterpolate(_ctx.$t("search.startTyping"))}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-CRuwPbdn.mjs.map
