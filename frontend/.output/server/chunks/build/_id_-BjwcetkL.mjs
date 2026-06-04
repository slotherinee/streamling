import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { aw as useRoute, t as createError, an as useHead, az as useSeoMeta, _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_6 } from './MediaCard-BGmgqYjl.mjs';
import { defineComponent, computed, withAsyncContext, resolveDirective, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as fromMovieCard } from './progress-De0Fy5DO.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
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
import './watchlist-hlo1lQbX.mjs';
import './auth-LLhfWJq6.mjs';
import './useHaptic-NT3uIsTJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = computed(() => Number(route.params.id));
    const { data: collection, error } = ([__temp, __restore] = withAsyncContext(() => useApiFetch(() => `/collections/${id.value}`)), __temp = await __temp, __restore(), __temp);
    if (error.value) throw createError({ statusCode: 404, message: "Collection not found" });
    useHead({ title: computed(() => `${collection.value?.name ?? "Collection"} — Streamly`) });
    useSeoMeta({
      ogTitle: computed(() => `${collection.value?.name ?? "Collection"} — Streamly`),
      description: computed(() => collection.value?.overview ?? ""),
      ogDescription: computed(() => collection.value?.overview ?? ""),
      ogImage: computed(() => collection.value?.backdrop ?? "/og-default.jpg"),
      twitterCard: "summary_large_image"
    });
    const parts = computed(() => (collection.value?.parts ?? []).map(fromMovieCard));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_MediaCard = __nuxt_component_6;
      const _directive_gsap = resolveDirective("gsap");
      if (unref(collection)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="relative w-full h-[50vh] min-h-[360px] overflow-hidden">`);
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          src: unref(collection).backdrop ?? void 0,
          alt: unref(collection).name,
          class: "w-full h-full object-cover",
          width: "1920",
          height: "1080",
          format: "webp",
          loading: "eager"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { scale: 1.05, duration: 1.2, ease: "power2.out" }, void 0, { from: true })), null, _parent));
        _push(`<div class="absolute inset-0 bg-black/55"></div><div class="absolute bottom-0 left-0 right-0 h-48 gradient-to-t-black"></div><div${ssrRenderAttrs(mergeProps({ class: "absolute top-20 inset-x-0 px-4 sm:px-6 lg:px-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5, delay: 0.2 }, void 0, { from: true })))}><div class="flex items-center gap-2 text-sm text-white/60">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-white transition-colors"
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
        _push(`<span>/</span><span class="text-white">${ssrInterpolate(unref(collection).name)}</span></div></div><div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 30, duration: 0.7, delay: 0.1 }, void 0, { from: true })))}><div class="flex items-end gap-5">`);
        if (unref(collection).poster) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: unref(collection).poster,
            alt: unref(collection).name,
            class: "hidden sm:block w-28 aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl flex-shrink-0",
            width: "112",
            height: "168",
            format: "webp"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div><div class="flex items-center gap-2 mb-2"><svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><span class="text-sm font-medium text-primary">Collection</span></div><h1 class="text-3xl sm:text-5xl font-extrabold text-white mb-2 leading-tight">${ssrInterpolate(unref(collection).name)}</h1><div class="flex items-center gap-3 text-sm text-white/60"><span>${ssrInterpolate(unref(parts).length)} title${ssrInterpolate(unref(parts).length !== 1 ? "s" : "")}</span></div></div></div></div></div><div class="px-4 sm:px-8 py-10">`);
        if (unref(collection).overview) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 max-w-3xl" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}><p class="text-foreground/70 leading-relaxed">${ssrInterpolate(unref(collection).overview)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-lg font-bold mb-6" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 10, duration: 0.4 }, void 0, { from: true })))}> Titles in this collection </h2><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.6 }, void 0, {
          onEnter: true,
          from: true
        })))}><!--[-->`);
        ssrRenderList(unref(parts), (m) => {
          _push(ssrRenderComponent(_component_MediaCard, {
            key: m.id,
            media: m,
            fluid: ""
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collection/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BjwcetkL.mjs.map
