import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "animate-pulse",
    "aria-hidden": "true"
  }, _attrs))}><div class="aspect-[2/3] rounded-xl bg-secondary/80"></div><div class="mt-2.5 px-0.5 space-y-2"><div class="h-3 bg-secondary/70 rounded-full w-4/5"></div><div class="h-2.5 bg-secondary/50 rounded-full w-2/5"></div><div class="h-2.5 bg-secondary/50 rounded-full w-3/5"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaCardSkeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "MediaCardSkeleton" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=MediaCardSkeleton-CVw0sBpD.mjs.map
