import { an as useHead, ax as useRouter, B as Button, _ as __nuxt_component_0, ay as useRuntimeConfig, i as api$1 } from './server.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHaptic } from './useHaptic-NT3uIsTJ.mjs';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { F as Form, _ as __nuxt_component_1 } from './index-CQhViOYh.mjs';
import { I as Input, a as __nuxt_component_3 } from './index-CMu4DoaX.mjs';
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
import 'lodash-es/cloneDeep.js';
import './responsiveObserve-CTFzy5SU.mjs';
import 'async-validator';
import 'lodash-es/find.js';
import './collapseMotion-CIsPMioQ.mjs';
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './colors-ByhoJTJo.mjs';
import './zoom-ByxQdbsR.mjs';
import 'lodash-es/isEqual.js';
import 'compute-scroll-into-view';
import 'lodash-es/intersection.js';
import 'lodash-es/debounce.js';
import 'lodash-es/omit.js';
import '../_/SearchOutlined.mjs';
import 'lodash-es/isPlainObject.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Sign In — Streamly" });
    const formState = reactive({ email: "", password: "" });
    const loading = ref(false);
    const router = useRouter();
    const haptic = useHaptic();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const base = config.public.apiBase;
    async function handleLogin() {
      loading.value = true;
      haptic.selection();
      try {
        const res = await $fetch(
          "/auth/login",
          { baseURL: base, method: "POST", body: formState, credentials: "include" }
        );
        const { accessToken } = res.data;
        const meRes = await $fetch("/users/me", {
          baseURL: base,
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        authStore.setSession(accessToken, meRes.data);
        haptic.success();
        router.push("/");
      } catch (err) {
        haptic.error();
        const msg = err?.data?.message ?? "Invalid email or password";
        api$1.error(Array.isArray(msg) ? msg[0] : msg);
      } finally {
        loading.value = false;
      }
    }
    function handleLoginFailed() {
      haptic.error();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_form = Form;
      const _component_a_form_item = __nuxt_component_1;
      const _component_a_input = Input;
      const _component_a_input_password = __nuxt_component_3;
      const _component_a_button = Button;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}><div class="text-center mb-8"><h1 class="text-2xl font-bold mb-2">Welcome back</h1><p class="text-sm text-muted-foreground">Sign in to continue watching</p></div>`);
      _push(ssrRenderComponent(_component_a_form, {
        model: unref(formState),
        layout: "vertical",
        onFinish: handleLogin,
        onFinishFailed: handleLoginFailed
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "Email",
              name: "email",
              rules: [{ required: true, type: "email", message: "Enter a valid email" }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(formState).email,
                    "onUpdate:value": ($event) => unref(formState).email = $event,
                    placeholder: "you@example.com",
                    disabled: unref(loading),
                    size: "large",
                    "allow-clear": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formState).email,
                      "onUpdate:value": ($event) => unref(formState).email = $event,
                      placeholder: "you@example.com",
                      disabled: unref(loading),
                      size: "large",
                      "allow-clear": ""
                    }, null, 8, ["value", "onUpdate:value", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "Password",
              name: "password",
              rules: [{ required: true, message: "Password is required" }]
            }, {
              extra: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a class="text-xs text-primary hover:opacity-80 transition-opacity float-right -mt-6" href="#"${_scopeId2}>Forgot password?</a>`);
                } else {
                  return [
                    createVNode("a", {
                      class: "text-xs text-primary hover:opacity-80 transition-opacity float-right -mt-6",
                      href: "#"
                    }, "Forgot password?")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_input_password, {
                    value: unref(formState).password,
                    "onUpdate:value": ($event) => unref(formState).password = $event,
                    placeholder: "••••••••",
                    disabled: unref(loading),
                    size: "large",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  if (unref(formState).password) {
                    _push3(`<button type="button" aria-label="Clear password" class="absolute right-9 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"${_scopeId2}><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_a_input_password, {
                        value: unref(formState).password,
                        "onUpdate:value": ($event) => unref(formState).password = $event,
                        placeholder: "••••••••",
                        disabled: unref(loading),
                        size: "large",
                        class: "w-full"
                      }, null, 8, ["value", "onUpdate:value", "disabled"]),
                      unref(formState).password ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        "aria-label": "Clear password",
                        class: "absolute right-9 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10",
                        onClick: ($event) => unref(formState).password = ""
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3.5 h-3.5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2.5",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, { class: "!mb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    "html-type": "submit",
                    size: "large",
                    block: "",
                    loading: unref(loading),
                    class: "!font-semibold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign In `);
                      } else {
                        return [
                          createTextVNode(" Sign In ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      type: "primary",
                      "html-type": "submit",
                      size: "large",
                      block: "",
                      loading: unref(loading),
                      class: "!font-semibold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_form_item, {
                label: "Email",
                name: "email",
                rules: [{ required: true, type: "email", message: "Enter a valid email" }]
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: unref(formState).email,
                    "onUpdate:value": ($event) => unref(formState).email = $event,
                    placeholder: "you@example.com",
                    disabled: unref(loading),
                    size: "large",
                    "allow-clear": ""
                  }, null, 8, ["value", "onUpdate:value", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: "Password",
                name: "password",
                rules: [{ required: true, message: "Password is required" }]
              }, {
                extra: withCtx(() => [
                  createVNode("a", {
                    class: "text-xs text-primary hover:opacity-80 transition-opacity float-right -mt-6",
                    href: "#"
                  }, "Forgot password?")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_a_input_password, {
                      value: unref(formState).password,
                      "onUpdate:value": ($event) => unref(formState).password = $event,
                      placeholder: "••••••••",
                      disabled: unref(loading),
                      size: "large",
                      class: "w-full"
                    }, null, 8, ["value", "onUpdate:value", "disabled"]),
                    unref(formState).password ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "button",
                      "aria-label": "Clear password",
                      class: "absolute right-9 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10",
                      onClick: ($event) => unref(formState).password = ""
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-3.5 h-3.5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2.5",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ]))
                    ], 8, ["onClick"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, { class: "!mb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_a_button, {
                    type: "primary",
                    "html-type": "submit",
                    size: "large",
                    block: "",
                    loading: unref(loading),
                    class: "!font-semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign In ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-center text-sm text-muted-foreground mt-8"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-primary hover:opacity-80 font-medium ml-1 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up`);
          } else {
            return [
              createTextVNode("Sign up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BxQCH6qn.mjs.map
