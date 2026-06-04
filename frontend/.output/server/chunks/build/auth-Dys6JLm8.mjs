import { _ as __nuxt_component_0 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background text-foreground flex flex-col" }, _attrs))}><header class="flex items-center justify-center h-16 border-b border-border/50">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    "aria-label": "Streamly — go to home",
    class: "flex items-center gap-2 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200"${_scopeId}><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path d="M8 5v14l11-7z"${_scopeId}></path></svg></div><span class="text-xl font-bold tracking-tight"${_scopeId}>Streamly</span>`);
      } else {
        return [
          createVNode("div", { class: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200" }, [
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
  _push(`</header><main class="flex-1 flex items-center justify-center px-4 py-12">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="py-6 text-center"><p class="text-xs text-muted-foreground">© 2024 Streamly. All rights reserved.</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-Dys6JLm8.mjs.map
