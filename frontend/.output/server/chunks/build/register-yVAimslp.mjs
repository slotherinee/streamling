import { an as useHead, ax as useRouter, B as Button, _ as __nuxt_component_0, ay as useRuntimeConfig, i as api$1, al as useConfigInject, ap as useInjectDisabled, z as flattenChildren, o as classNames, G as genComponentStyleHook, k as booleanType, a7 as merge, e as PropTypes, A as functionType, af as stringType, K as Keyframe, aa as resetComponent, H as genFocusOutline, j as arrayType } from './server.mjs';
import { defineComponent, reactive, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, toDisplayString, inject, watchEffect, watch, provide, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHaptic } from './useHaptic-NT3uIsTJ.mjs';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import { F as Form, _ as __nuxt_component_1 } from './index-CQhViOYh.mjs';
import { I as Input, a as __nuxt_component_3 } from './index-CMu4DoaX.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { V as VcCheckbox } from './Checkbox-DR1sAdvE.mjs';
import { u as useInjectFormItemContext, F as FormItemInputContext } from './motion-DJBbJh9Y.mjs';
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
import 'stylis';
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
import './colors-ByhoJTJo.mjs';
import './zoom-ByxQdbsR.mjs';
import 'lodash-es/isEqual.js';
import 'compute-scroll-into-view';
import 'lodash-es/intersection.js';
import 'lodash-es/debounce.js';
import 'lodash-es/omit.js';
import '../_/SearchOutlined.mjs';
import 'lodash-es/isPlainObject.js';
import 'resize-observer-polyfill';
import 'dom-align';

const antCheckboxEffect = new Keyframe("antCheckboxEffect", {
  "0%": {
    transform: "scale(1)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(1.6)",
    opacity: 0
  }
});
const genCheckboxStyle = (token) => {
  const {
    checkboxCls
  } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${checkboxCls}-group`]: _extends(_extends({}, resetComponent(token)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: token.marginXS,
        // Group > Grid
        [`> ${token.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [wrapperCls]: _extends(_extends({}, resetComponent(token)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${wrapperCls}`]: {
          marginInlineStart: 0
        },
        [`&${wrapperCls}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [checkboxCls]: _extends(_extends({}, resetComponent(token)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${checkboxCls}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${checkboxCls}-inner`]: _extends({}, genFocusOutline(token))
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          boxSizing: "border-box",
          position: "relative",
          top: 0,
          insetInlineStart: 0,
          display: "block",
          width: token.checkboxSize,
          height: token.checkboxSize,
          direction: "ltr",
          backgroundColor: token.colorBgContainer,
          border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${token.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "21.5%",
            display: "table",
            width: token.checkboxSize / 14 * 5,
            height: token.checkboxSize / 14 * 8,
            border: `${token.lineWidthBold}px solid ${token.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: token.paddingXS,
          paddingInlineEnd: token.paddingXS
        }
      })
    },
    // ================= Indeterminate =================
    {
      [checkboxCls]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: token.fontSizeLG / 2,
              height: token.fontSizeLG / 2,
              backgroundColor: token.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          }
        }
      }
    },
    // ===================== Hover =====================
    {
      // Wrapper
      [`${wrapperCls}:hover ${checkboxCls}:after`]: {
        visibility: "visible"
      },
      // Wrapper & Wrapper > Checkbox
      [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          borderColor: token.colorPrimary
        }
      },
      [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
          borderColor: token.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${checkboxCls}-checked`]: {
        [`${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimary,
          borderColor: token.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
          }
        },
        // Checked Effect
        "&:after": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
          borderRadius: token.borderRadiusSM,
          visibility: "hidden",
          border: `${token.lineWidthBold}px solid ${token.colorPrimary}`,
          animationName: antCheckboxEffect,
          animationDuration: token.motionDurationSlow,
          animationTimingFunction: "ease-in-out",
          animationFillMode: "backwards",
          content: '""',
          transition: `all ${token.motionDurationSlow}`
        }
      },
      [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${checkboxCls}:after`]: {
          borderColor: token.colorPrimaryHover
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${wrapperCls}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${checkboxCls}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${checkboxCls}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          background: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          "&:after": {
            borderColor: token.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: token.colorTextDisabled
        },
        [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
          background: token.colorTextDisabled
        }
      }
    }
  ];
};
function getStyle(prefixCls, token) {
  const checkboxToken = merge(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
const useStyle = genComponentStyleHook("Checkbox", (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [getStyle(prefixCls, token)];
});
const abstractCheckboxGroupProps = () => {
  return {
    name: String,
    prefixCls: String,
    options: arrayType([]),
    disabled: Boolean,
    id: String
  };
};
const checkboxGroupProps = () => {
  return _extends(_extends({}, abstractCheckboxGroupProps()), {
    defaultValue: arrayType(),
    value: arrayType(),
    onChange: functionType(),
    "onUpdate:value": functionType()
  });
};
const abstractCheckboxProps = () => {
  return {
    prefixCls: String,
    defaultChecked: booleanType(),
    checked: booleanType(),
    disabled: booleanType(),
    isGroup: booleanType(),
    value: PropTypes.any,
    name: String,
    id: String,
    indeterminate: booleanType(),
    type: stringType("checkbox"),
    autofocus: booleanType(),
    onChange: functionType(),
    "onUpdate:checked": functionType(),
    onClick: functionType(),
    skipGroup: booleanType(false)
  };
};
const checkboxProps = () => {
  return _extends(_extends({}, abstractCheckboxProps()), {
    indeterminate: booleanType(false)
  });
};
const CheckboxGroupContextKey = /* @__PURE__ */ Symbol("CheckboxGroupContext");
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Checkbox = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckbox",
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: checkboxProps(),
  // emits: ['change', 'update:checked'],
  setup(props, _ref) {
    let {
      emit,
      attrs,
      slots,
      expose
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const {
      prefixCls,
      direction,
      disabled
    } = useConfigInject("checkbox", props);
    const contextDisabled = useInjectDisabled();
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const checkboxGroup = inject(CheckboxGroupContextKey, void 0);
    const uniId = /* @__PURE__ */ Symbol("checkboxUniId");
    const mergedDisabled = computed(() => {
      return (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled.value) || disabled.value;
    });
    watchEffect(() => {
      if (!props.skipGroup && checkboxGroup) {
        checkboxGroup.registerValue(uniId, props.value);
      }
    });
    const handleChange = (event) => {
      const targetChecked = event.target.checked;
      emit("update:checked", targetChecked);
      emit("change", event);
      formItemContext.onFieldChange();
    };
    const checkboxRef = ref();
    const focus = () => {
      var _a;
      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a;
      const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      const {
        indeterminate,
        skipGroup,
        id = formItemContext.id.value
      } = props, restProps = __rest(props, ["indeterminate", "skipGroup", "id"]);
      const {
        onMouseenter,
        onMouseleave,
        onInput,
        class: className,
        style
      } = attrs, restAttrs = __rest(attrs, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]);
      const checkboxProps2 = _extends(_extends(_extends(_extends({}, restProps), {
        id,
        prefixCls: prefixCls.value
      }), restAttrs), {
        disabled: mergedDisabled.value
      });
      if (checkboxGroup && !skipGroup) {
        checkboxProps2.onChange = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          emit("change", ...args);
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };
        checkboxProps2.name = checkboxGroup.name.value;
        checkboxProps2.checked = checkboxGroup.mergedValue.value.includes(props.value);
        checkboxProps2.disabled = mergedDisabled.value || contextDisabled.value;
        checkboxProps2.indeterminate = indeterminate;
      } else {
        checkboxProps2.onChange = handleChange;
      }
      const classString = classNames({
        [`${prefixCls.value}-wrapper`]: true,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-wrapper-checked`]: checkboxProps2.checked,
        [`${prefixCls.value}-wrapper-disabled`]: checkboxProps2.disabled,
        [`${prefixCls.value}-wrapper-in-form-item`]: formItemInputContext.isFormItemInput
      }, className, hashId.value);
      const checkboxClass = classNames({
        [`${prefixCls.value}-indeterminate`]: indeterminate
      }, hashId.value);
      const ariaChecked = indeterminate ? "mixed" : void 0;
      return wrapSSR(createVNode("label", {
        "class": classString,
        "style": style,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [createVNode(VcCheckbox, _objectSpread(_objectSpread({
        "aria-checked": ariaChecked
      }, checkboxProps2), {}, {
        "class": checkboxClass,
        "ref": checkboxRef
      }), null), children.length ? createVNode("span", null, [children]) : null]));
    };
  }
});
const CheckboxGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckboxGroup",
  inheritAttrs: false,
  props: checkboxGroupProps(),
  // emits: ['change', 'update:value'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const {
      prefixCls,
      direction
    } = useConfigInject("checkbox", props);
    const groupPrefixCls = computed(() => `${prefixCls.value}-group`);
    const [wrapSSR, hashId] = useStyle(groupPrefixCls);
    const mergedValue = ref((props.value === void 0 ? props.defaultValue : props.value) || []);
    watch(() => props.value, () => {
      mergedValue.value = props.value || [];
    });
    const options = computed(() => {
      return props.options.map((option) => {
        if (typeof option === "string" || typeof option === "number") {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const triggerUpdate = ref(/* @__PURE__ */ Symbol());
    const registeredValuesMap = ref(/* @__PURE__ */ new Map());
    const cancelValue = (id) => {
      registeredValuesMap.value.delete(id);
      triggerUpdate.value = /* @__PURE__ */ Symbol();
    };
    const registerValue = (id, value) => {
      registeredValuesMap.value.set(id, value);
      triggerUpdate.value = /* @__PURE__ */ Symbol();
    };
    const registeredValues = ref(/* @__PURE__ */ new Map());
    watch(triggerUpdate, () => {
      const valuseMap = /* @__PURE__ */ new Map();
      for (const value of registeredValuesMap.value.values()) {
        valuseMap.set(value, true);
      }
      registeredValues.value = valuseMap;
    });
    const toggleOption = (option) => {
      const optionIndex = mergedValue.value.indexOf(option.value);
      const value = [...mergedValue.value];
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (props.value === void 0) {
        mergedValue.value = value;
      }
      const val = value.filter((val2) => registeredValues.value.has(val2)).sort((a, b) => {
        const indexA = options.value.findIndex((opt) => opt.value === a);
        const indexB = options.value.findIndex((opt) => opt.value === b);
        return indexA - indexB;
      });
      emit("update:value", val);
      emit("change", val);
      formItemContext.onFieldChange();
    };
    provide(CheckboxGroupContextKey, {
      cancelValue,
      registerValue,
      toggleOption,
      mergedValue,
      name: computed(() => props.name),
      disabled: computed(() => props.disabled)
    });
    expose({
      mergedValue
    });
    return () => {
      var _a;
      const {
        id = formItemContext.id.value
      } = props;
      let children = null;
      if (options.value && options.value.length > 0) {
        children = options.value.map((option) => {
          var _a2;
          return createVNode(Checkbox, {
            "prefixCls": prefixCls.value,
            "key": option.value.toString(),
            "disabled": "disabled" in option ? option.disabled : props.disabled,
            "indeterminate": option.indeterminate,
            "value": option.value,
            "checked": mergedValue.value.indexOf(option.value) !== -1,
            "onChange": option.onChange,
            "class": `${groupPrefixCls.value}-item`
          }, {
            default: () => [slots.label !== void 0 ? (_a2 = slots.label) === null || _a2 === void 0 ? void 0 : _a2.call(slots, option) : option.label]
          });
        });
      }
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": [groupPrefixCls.value, {
          [`${groupPrefixCls.value}-rtl`]: direction.value === "rtl"
        }, attrs.class, hashId.value],
        "id": id
      }), [children || ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]));
    };
  }
});
Checkbox.Group = CheckboxGroup;
Checkbox.install = function(app) {
  app.component(Checkbox.name, Checkbox);
  app.component(CheckboxGroup.name, CheckboxGroup);
  return app;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Create Account — Streamly" });
    const formState = reactive({ name: "", email: "", password: "", agreed: false });
    const loading = ref(false);
    const router = useRouter();
    const haptic = useHaptic();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const base = config.public.apiBase;
    const passwordStrength = computed(() => {
      const p = formState.password;
      if (!p) return 0;
      let score = 0;
      if (p.length >= 8) score++;
      if (/[A-Z]/.test(p)) score++;
      if (/[0-9]/.test(p)) score++;
      if (/[^A-Za-z0-9]/.test(p)) score++;
      return score;
    });
    const strengthLabel = computed(() => ["", "Weak", "Fair", "Good", "Strong"][passwordStrength.value]);
    const strengthColor = computed(() => ["", "#ef4444", "#f59e0b", "#eab308", "#10b981"][passwordStrength.value]);
    async function handleRegister() {
      loading.value = true;
      haptic.selection();
      try {
        const res = await $fetch(
          "/auth/register",
          { baseURL: base, method: "POST", body: { name: formState.name, email: formState.email, password: formState.password }, credentials: "include" }
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
        const msg = err?.data?.message ?? "Registration failed";
        api$1.error(Array.isArray(msg) ? msg[0] : msg);
      } finally {
        loading.value = false;
      }
    }
    function handleRegisterFailed() {
      haptic.error();
    }
    function agreementValidator(_, v) {
      return v ? Promise.resolve() : Promise.reject(new Error("Please accept terms"));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_form = Form;
      const _component_a_form_item = __nuxt_component_1;
      const _component_a_input = Input;
      const _component_a_input_password = __nuxt_component_3;
      const _component_a_checkbox = Checkbox;
      const _component_a_button = Button;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}><div class="text-center mb-8"><h1 class="text-2xl font-bold mb-2">Create your account</h1><p class="text-sm text-muted-foreground">Start streaming in seconds</p></div>`);
      _push(ssrRenderComponent(_component_a_form, {
        model: unref(formState),
        layout: "vertical",
        onFinish: handleRegister,
        onFinishFailed: handleRegisterFailed
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "Full Name",
              name: "name",
              rules: [{ required: true, message: "Name is required" }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input, {
                    value: unref(formState).name,
                    "onUpdate:value": ($event) => unref(formState).name = $event,
                    placeholder: "Alex Johnson",
                    size: "large",
                    disabled: unref(loading),
                    "allow-clear": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formState).name,
                      "onUpdate:value": ($event) => unref(formState).name = $event,
                      placeholder: "Alex Johnson",
                      size: "large",
                      disabled: unref(loading),
                      "allow-clear": ""
                    }, null, 8, ["value", "onUpdate:value", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    type: "email",
                    size: "large",
                    disabled: unref(loading),
                    "allow-clear": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input, {
                      value: unref(formState).email,
                      "onUpdate:value": ($event) => unref(formState).email = $event,
                      placeholder: "you@example.com",
                      type: "email",
                      size: "large",
                      disabled: unref(loading),
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
              rules: [{ required: true, min: 6, message: "Min 6 characters" }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_input_password, {
                    value: unref(formState).password,
                    "onUpdate:value": ($event) => unref(formState).password = $event,
                    placeholder: "Min. 6 characters",
                    size: "large",
                    disabled: unref(loading),
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  if (unref(formState).password) {
                    _push3(`<button type="button" aria-label="Clear password" class="absolute right-9 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"${_scopeId2}><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (unref(formState).password) {
                    _push3(`<div class="mt-2 space-y-1"${_scopeId2}><div class="flex gap-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(4, (i) => {
                      _push3(`<div class="h-1 flex-1 rounded-full transition-all duration-300" style="${ssrRenderStyle({ background: i <= unref(passwordStrength) ? unref(strengthColor) : "hsl(var(--border))" })}"${_scopeId2}></div>`);
                    });
                    _push3(`<!--]--></div><p class="text-xs text-muted-foreground"${_scopeId2}> Strength: <span style="${ssrRenderStyle({ color: unref(strengthColor) })}"${_scopeId2}>${ssrInterpolate(unref(strengthLabel))}</span></p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_a_input_password, {
                        value: unref(formState).password,
                        "onUpdate:value": ($event) => unref(formState).password = $event,
                        placeholder: "Min. 6 characters",
                        size: "large",
                        disabled: unref(loading),
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
                    ]),
                    unref(formState).password ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-2 space-y-1"
                    }, [
                      createVNode("div", { class: "flex gap-1" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                          return createVNode("div", {
                            key: i,
                            class: "h-1 flex-1 rounded-full transition-all duration-300",
                            style: { background: i <= unref(passwordStrength) ? unref(strengthColor) : "hsl(var(--border))" }
                          }, null, 4);
                        }), 64))
                      ]),
                      createVNode("p", { class: "text-xs text-muted-foreground" }, [
                        createTextVNode(" Strength: "),
                        createVNode("span", {
                          style: { color: unref(strengthColor) }
                        }, toDisplayString(unref(strengthLabel)), 5)
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              name: "agreed",
              rules: [{ validator: agreementValidator }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_checkbox, {
                    checked: unref(formState).agreed,
                    "onUpdate:checked": ($event) => unref(formState).agreed = $event,
                    disabled: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm text-muted-foreground"${_scopeId3}> I agree to the <a class="text-primary hover:opacity-80" href="#"${_scopeId3}>Terms of Service</a> and <a class="text-primary hover:opacity-80" href="#"${_scopeId3}>Privacy Policy</a></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm text-muted-foreground" }, [
                            createTextVNode(" I agree to the "),
                            createVNode("a", {
                              class: "text-primary hover:opacity-80",
                              href: "#"
                            }, "Terms of Service"),
                            createTextVNode(" and "),
                            createVNode("a", {
                              class: "text-primary hover:opacity-80",
                              href: "#"
                            }, "Privacy Policy")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_checkbox, {
                      checked: unref(formState).agreed,
                      "onUpdate:checked": ($event) => unref(formState).agreed = $event,
                      disabled: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-sm text-muted-foreground" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            class: "text-primary hover:opacity-80",
                            href: "#"
                          }, "Terms of Service"),
                          createTextVNode(" and "),
                          createVNode("a", {
                            class: "text-primary hover:opacity-80",
                            href: "#"
                          }, "Privacy Policy")
                        ])
                      ]),
                      _: 1
                    }, 8, ["checked", "onUpdate:checked", "disabled"])
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
                        _push4(` Create Account `);
                      } else {
                        return [
                          createTextVNode(" Create Account ")
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
                        createTextVNode(" Create Account ")
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
                label: "Full Name",
                name: "name",
                rules: [{ required: true, message: "Name is required" }]
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: unref(formState).name,
                    "onUpdate:value": ($event) => unref(formState).name = $event,
                    placeholder: "Alex Johnson",
                    size: "large",
                    disabled: unref(loading),
                    "allow-clear": ""
                  }, null, 8, ["value", "onUpdate:value", "disabled"])
                ]),
                _: 1
              }),
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
                    type: "email",
                    size: "large",
                    disabled: unref(loading),
                    "allow-clear": ""
                  }, null, 8, ["value", "onUpdate:value", "disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: "Password",
                name: "password",
                rules: [{ required: true, min: 6, message: "Min 6 characters" }]
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_a_input_password, {
                      value: unref(formState).password,
                      "onUpdate:value": ($event) => unref(formState).password = $event,
                      placeholder: "Min. 6 characters",
                      size: "large",
                      disabled: unref(loading),
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
                  ]),
                  unref(formState).password ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-2 space-y-1"
                  }, [
                    createVNode("div", { class: "flex gap-1" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                        return createVNode("div", {
                          key: i,
                          class: "h-1 flex-1 rounded-full transition-all duration-300",
                          style: { background: i <= unref(passwordStrength) ? unref(strengthColor) : "hsl(var(--border))" }
                        }, null, 4);
                      }), 64))
                    ]),
                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                      createTextVNode(" Strength: "),
                      createVNode("span", {
                        style: { color: unref(strengthColor) }
                      }, toDisplayString(unref(strengthLabel)), 5)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                name: "agreed",
                rules: [{ validator: agreementValidator }]
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_checkbox, {
                    checked: unref(formState).agreed,
                    "onUpdate:checked": ($event) => unref(formState).agreed = $event,
                    disabled: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-sm text-muted-foreground" }, [
                        createTextVNode(" I agree to the "),
                        createVNode("a", {
                          class: "text-primary hover:opacity-80",
                          href: "#"
                        }, "Terms of Service"),
                        createTextVNode(" and "),
                        createVNode("a", {
                          class: "text-primary hover:opacity-80",
                          href: "#"
                        }, "Privacy Policy")
                      ])
                    ]),
                    _: 1
                  }, 8, ["checked", "onUpdate:checked", "disabled"])
                ]),
                _: 1
              }, 8, ["rules"]),
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
                      createTextVNode(" Create Account ")
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
      _push(`<p class="text-center text-sm text-muted-foreground mt-6"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-primary hover:opacity-80 font-medium ml-1 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-yVAimslp.mjs.map
