import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import { defineComponent, ref, watch, computed, createVNode, provide, inject, nextTick } from 'vue';
import { al as useConfigInject, o as classNames, G as genComponentStyleHook, a7 as merge, ap as useInjectDisabled, e as PropTypes, A as functionType, af as stringType, k as booleanType, j as arrayType, aa as resetComponent, K as Keyframe, H as genFocusOutline } from './server.mjs';
import { u as useInjectFormItemContext, F as FormItemInputContext, o as omit } from './motion-DJBbJh9Y.mjs';
import _extends from '@babel/runtime/helpers/esm/extends';
import { V as VcCheckbox } from './Checkbox-DR1sAdvE.mjs';

const radioGroupContextKey = /* @__PURE__ */ Symbol("radioGroupContextKey");
const useProvideRadioGroupContext = (props) => {
  provide(radioGroupContextKey, props);
};
const useInjectRadioGroupContext = () => {
  return inject(radioGroupContextKey, void 0);
};
const radioOptionTypeContextKey = /* @__PURE__ */ Symbol("radioOptionTypeContextKey");
const useProvideRadioOptionTypeContext = (props) => {
  provide(radioOptionTypeContextKey, props);
};
const useInjectRadioOptionTypeContext = () => {
  return inject(radioOptionTypeContextKey, void 0);
};
const antRadioEffect = new Keyframe("antRadioEffect", {
  "0%": {
    transform: "scale(1)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(1.6)",
    opacity: 0
  }
});
const getGroupRadioStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: _extends(_extends({}, resetComponent(token)), {
      display: "inline-block",
      fontSize: 0,
      // RTL
      [`&${groupPrefixCls}-rtl`]: {
        direction: "rtl"
      },
      [`${antCls}-badge ${antCls}-badge-count`]: {
        zIndex: 1
      },
      [`> ${antCls}-badge:not(:first-child) > ${antCls}-button-wrapper`]: {
        borderInlineStart: "none"
      }
    })
  };
};
const getRadioBasicStyle = (token) => {
  const {
    componentCls,
    radioWrapperMarginRight,
    radioCheckedColor,
    radioSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseInOutCirc,
    radioButtonBg,
    colorBorder,
    lineWidth,
    radioDotSize,
    colorBgContainerDisabled,
    colorTextDisabled,
    paddingXS,
    radioDotDisabledColor,
    lineType,
    radioDotDisabledSize,
    wireframe,
    colorWhite
  } = token;
  const radioInnerPrefixCls = `${componentCls}-inner`;
  return {
    [`${componentCls}-wrapper`]: _extends(_extends({}, resetComponent(token)), {
      position: "relative",
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: radioWrapperMarginRight,
      cursor: "pointer",
      // RTL
      [`&${componentCls}-wrapper-rtl`]: {
        direction: "rtl"
      },
      "&-disabled": {
        cursor: "not-allowed",
        color: token.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      // hashId 在 wrapper 上，只能铺平
      [`${componentCls}-checked::after`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        border: `${lineWidth}px ${lineType} ${radioCheckedColor}`,
        borderRadius: "50%",
        visibility: "hidden",
        animationName: antRadioEffect,
        animationDuration: motionDurationSlow,
        animationTimingFunction: motionEaseInOut,
        animationFillMode: "both",
        content: '""'
      },
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "relative",
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        alignSelf: "center"
      }),
      [`${componentCls}-wrapper:hover &,
        &:hover ${radioInnerPrefixCls}`]: {
        borderColor: radioCheckedColor
      },
      [`${componentCls}-input:focus-visible + ${radioInnerPrefixCls}`]: _extends({}, genFocusOutline(token)),
      [`${componentCls}:hover::after, ${componentCls}-wrapper:hover &::after`]: {
        visibility: "visible"
      },
      [`${componentCls}-inner`]: {
        "&::after": {
          boxSizing: "border-box",
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          display: "block",
          width: radioSize,
          height: radioSize,
          marginBlockStart: radioSize / -2,
          marginInlineStart: radioSize / -2,
          backgroundColor: wireframe ? radioCheckedColor : colorWhite,
          borderBlockStart: 0,
          borderInlineStart: 0,
          borderRadius: radioSize,
          transform: "scale(0)",
          opacity: 0,
          transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`,
          content: '""'
        },
        boxSizing: "border-box",
        position: "relative",
        insetBlockStart: 0,
        insetInlineStart: 0,
        display: "block",
        width: radioSize,
        height: radioSize,
        backgroundColor: radioButtonBg,
        borderColor: colorBorder,
        borderStyle: "solid",
        borderWidth: lineWidth,
        borderRadius: "50%",
        transition: `all ${motionDurationMid}`
      },
      [`${componentCls}-input`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineEnd: 0,
        insetBlockEnd: 0,
        insetInlineStart: 0,
        zIndex: 1,
        cursor: "pointer",
        opacity: 0
      },
      // 选中状态
      [`${componentCls}-checked`]: {
        [radioInnerPrefixCls]: {
          borderColor: radioCheckedColor,
          backgroundColor: wireframe ? radioButtonBg : radioCheckedColor,
          "&::after": {
            transform: `scale(${radioDotSize / radioSize})`,
            opacity: 1,
            transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
          }
        }
      },
      [`${componentCls}-disabled`]: {
        cursor: "not-allowed",
        [radioInnerPrefixCls]: {
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          "&::after": {
            backgroundColor: radioDotDisabledColor
          }
        },
        [`${componentCls}-input`]: {
          cursor: "not-allowed"
        },
        [`${componentCls}-disabled + span`]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        },
        [`&${componentCls}-checked`]: {
          [radioInnerPrefixCls]: {
            "&::after": {
              transform: `scale(${radioDotDisabledSize / radioSize})`
            }
          }
        }
      },
      [`span${componentCls} + *`]: {
        paddingInlineStart: paddingXS,
        paddingInlineEnd: paddingXS
      }
    })
  };
};
const getRadioButtonStyle = (token) => {
  const {
    radioButtonColor,
    controlHeight,
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    motionDurationSlow,
    motionDurationMid,
    radioButtonPaddingHorizontal,
    fontSize,
    radioButtonBg,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    paddingXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusLG,
    radioCheckedColor,
    radioButtonCheckedBg,
    radioButtonHoverColor,
    radioButtonActiveColor,
    radioSolidCheckedColor,
    colorTextDisabled,
    colorBgContainerDisabled,
    radioDisabledButtonCheckedColor,
    radioDisabledButtonCheckedBg
  } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: controlHeight,
      margin: 0,
      paddingInline: radioButtonPaddingHorizontal,
      paddingBlock: 0,
      color: radioButtonColor,
      fontSize,
      lineHeight: `${controlHeight - lineWidth * 2}px`,
      background: radioButtonBg,
      border: `${lineWidth}px ${lineType} ${colorBorder}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: lineWidth + 0.02,
      borderInlineStartWidth: 0,
      borderInlineEndWidth: lineWidth,
      cursor: "pointer",
      transition: [`color ${motionDurationMid}`, `background ${motionDurationMid}`, `border-color ${motionDurationMid}`, `box-shadow ${motionDurationMid}`].join(","),
      a: {
        color: radioButtonColor
      },
      [`> ${componentCls}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:first-child)": {
        "&::before": {
          position: "absolute",
          insetBlockStart: -lineWidth,
          insetInlineStart: -lineWidth,
          display: "block",
          boxSizing: "content-box",
          width: 1,
          height: "100%",
          paddingBlock: lineWidth,
          paddingInline: 0,
          backgroundColor: colorBorder,
          transition: `background-color ${motionDurationSlow}`,
          content: '""'
        }
      },
      "&:first-child": {
        borderInlineStart: `${lineWidth}px ${lineType} ${colorBorder}`,
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius
      },
      "&:last-child": {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      "&:first-child:last-child": {
        borderRadius
      },
      [`${componentCls}-group-large &`]: {
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: `${controlHeightLG - lineWidth * 2}px`,
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-small &`]: {
        height: controlHeightSM,
        paddingInline: paddingXS - lineWidth,
        paddingBlock: 0,
        lineHeight: `${controlHeightSM - lineWidth * 2}px`,
        "&:first-child": {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      },
      "&:hover": {
        position: "relative",
        color: radioCheckedColor
      },
      "&:has(:focus-visible)": _extends({}, genFocusOutline(token)),
      [`${componentCls}-inner, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: radioCheckedColor,
        background: radioButtonCheckedBg,
        borderColor: radioCheckedColor,
        "&::before": {
          backgroundColor: radioCheckedColor
        },
        "&:first-child": {
          borderColor: radioCheckedColor
        },
        "&:hover": {
          color: radioButtonHoverColor,
          borderColor: radioButtonHoverColor,
          "&::before": {
            backgroundColor: radioButtonHoverColor
          }
        },
        "&:active": {
          color: radioButtonActiveColor,
          borderColor: radioButtonActiveColor,
          "&::before": {
            backgroundColor: radioButtonActiveColor
          }
        }
      },
      [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        color: radioSolidCheckedColor,
        background: radioCheckedColor,
        borderColor: radioCheckedColor,
        "&:hover": {
          color: radioSolidCheckedColor,
          background: radioButtonHoverColor,
          borderColor: radioButtonHoverColor
        },
        "&:active": {
          color: radioSolidCheckedColor,
          background: radioButtonActiveColor,
          borderColor: radioButtonActiveColor
        }
      },
      "&-disabled": {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: colorTextDisabled,
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder
        }
      },
      [`&-disabled${componentCls}-button-wrapper-checked`]: {
        color: radioDisabledButtonCheckedColor,
        backgroundColor: radioDisabledButtonCheckedBg,
        borderColor: colorBorder,
        boxShadow: "none"
      }
    }
  };
};
const useStyle = genComponentStyleHook("Radio", (token) => {
  const {
    padding,
    lineWidth,
    controlItemBgActiveDisabled,
    colorTextDisabled,
    colorBgContainer,
    fontSizeLG,
    controlOutline,
    colorPrimaryHover,
    colorPrimaryActive,
    colorText,
    colorPrimary,
    marginXS,
    controlOutlineWidth,
    colorTextLightSolid,
    wireframe
  } = token;
  const radioFocusShadow = `0 0 0 ${controlOutlineWidth}px ${controlOutline}`;
  const radioButtonFocusShadow = radioFocusShadow;
  const radioSize = fontSizeLG;
  const dotPadding = 4;
  const radioDotDisabledSize = radioSize - dotPadding * 2;
  const radioDotSize = wireframe ? radioDotDisabledSize : radioSize - (dotPadding + lineWidth) * 2;
  const radioCheckedColor = colorPrimary;
  const radioButtonColor = colorText;
  const radioButtonHoverColor = colorPrimaryHover;
  const radioButtonActiveColor = colorPrimaryActive;
  const radioButtonPaddingHorizontal = padding - lineWidth;
  const radioDisabledButtonCheckedColor = colorTextDisabled;
  const radioWrapperMarginRight = marginXS;
  const radioToken = merge(token, {
    radioFocusShadow,
    radioButtonFocusShadow,
    radioSize,
    radioDotSize,
    radioDotDisabledSize,
    radioCheckedColor,
    radioDotDisabledColor: colorTextDisabled,
    radioSolidCheckedColor: colorTextLightSolid,
    radioButtonBg: colorBgContainer,
    radioButtonCheckedBg: colorBgContainer,
    radioButtonColor,
    radioButtonHoverColor,
    radioButtonActiveColor,
    radioButtonPaddingHorizontal,
    radioDisabledButtonCheckedBg: controlItemBgActiveDisabled,
    radioDisabledButtonCheckedColor,
    radioWrapperMarginRight
  });
  return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const radioProps = () => ({
  prefixCls: String,
  checked: booleanType(),
  disabled: booleanType(),
  isGroup: booleanType(),
  value: PropTypes.any,
  name: String,
  id: String,
  autofocus: booleanType(),
  onChange: functionType(),
  onFocus: functionType(),
  onBlur: functionType(),
  onClick: functionType(),
  "onUpdate:checked": functionType(),
  "onUpdate:value": functionType()
});
const Radio = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadio",
  inheritAttrs: false,
  props: radioProps(),
  setup(props, _ref) {
    let {
      emit,
      expose,
      slots,
      attrs
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const radioOptionTypeContext = useInjectRadioOptionTypeContext();
    const radioGroupContext = useInjectRadioGroupContext();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = disabled.value) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const vcCheckbox = ref();
    const {
      prefixCls: radioPrefixCls,
      direction,
      disabled
    } = useConfigInject("radio", props);
    const prefixCls = computed(() => (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.optionType.value) === "button" || radioOptionTypeContext === "button" ? `${radioPrefixCls.value}-button` : radioPrefixCls.value);
    const contextDisabled = useInjectDisabled();
    const [wrapSSR, hashId] = useStyle(radioPrefixCls);
    const focus = () => {
      vcCheckbox.value.focus();
    };
    const blur = () => {
      vcCheckbox.value.blur();
    };
    expose({
      focus,
      blur
    });
    const handleChange = (event) => {
      const targetChecked = event.target.checked;
      emit("update:checked", targetChecked);
      emit("update:value", targetChecked);
      emit("change", event);
      formItemContext.onFieldChange();
    };
    const onChange = (e) => {
      emit("change", e);
      if (radioGroupContext && radioGroupContext.onChange) {
        radioGroupContext.onChange(e);
      }
    };
    return () => {
      var _a;
      const radioGroup = radioGroupContext;
      const {
        prefixCls: customizePrefixCls,
        id = formItemContext.id.value
      } = props, restProps = __rest(props, ["prefixCls", "id"]);
      const rProps = _extends(_extends({
        prefixCls: prefixCls.value,
        id
      }, omit(restProps, ["onUpdate:checked", "onUpdate:value"])), {
        disabled: (_a = disabled.value) !== null && _a !== void 0 ? _a : contextDisabled.value
      });
      if (radioGroup) {
        rProps.name = radioGroup.name.value;
        rProps.onChange = onChange;
        rProps.checked = props.value === radioGroup.value.value;
        rProps.disabled = mergedDisabled.value || radioGroup.disabled.value;
      } else {
        rProps.onChange = handleChange;
      }
      const wrapperClassString = classNames({
        [`${prefixCls.value}-wrapper`]: true,
        [`${prefixCls.value}-wrapper-checked`]: rProps.checked,
        [`${prefixCls.value}-wrapper-disabled`]: rProps.disabled,
        [`${prefixCls.value}-wrapper-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-wrapper-in-form-item`]: formItemInputContext.isFormItemInput
      }, attrs.class, hashId.value);
      return wrapSSR(createVNode("label", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": wrapperClassString
      }), [createVNode(VcCheckbox, _objectSpread(_objectSpread({}, rProps), {}, {
        "type": "radio",
        "ref": vcCheckbox
      }), null), slots.default && createVNode("span", null, [slots.default()])]));
    };
  }
});
const radioGroupProps = () => ({
  prefixCls: String,
  value: PropTypes.any,
  size: stringType(),
  options: arrayType(),
  disabled: booleanType(),
  name: String,
  buttonStyle: stringType("outline"),
  id: String,
  optionType: stringType("default"),
  onChange: functionType(),
  "onUpdate:value": functionType()
});
const __nuxt_component_1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioGroup",
  inheritAttrs: false,
  props: radioGroupProps(),
  // emits: ['update:value', 'change'],
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const {
      prefixCls,
      direction,
      size
    } = useConfigInject("radio", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const stateValue = ref(props.value);
    const updatingValue = ref(false);
    watch(() => props.value, (val) => {
      stateValue.value = val;
      updatingValue.value = false;
    });
    const onRadioChange = (ev) => {
      const lastValue = stateValue.value;
      const {
        value
      } = ev.target;
      if (!("value" in props)) {
        stateValue.value = value;
      }
      if (!updatingValue.value && value !== lastValue) {
        updatingValue.value = true;
        emit("update:value", value);
        emit("change", ev);
        formItemContext.onFieldChange();
      }
      nextTick(() => {
        updatingValue.value = false;
      });
    };
    useProvideRadioGroupContext({
      onChange: onRadioChange,
      value: stateValue,
      disabled: computed(() => props.disabled),
      name: computed(() => props.name),
      optionType: computed(() => props.optionType)
    });
    return () => {
      var _a;
      const {
        options,
        buttonStyle,
        id = formItemContext.id.value
      } = props;
      const groupPrefixCls = `${prefixCls.value}-group`;
      const classString = classNames(groupPrefixCls, `${groupPrefixCls}-${buttonStyle}`, {
        [`${groupPrefixCls}-${size.value}`]: size.value,
        [`${groupPrefixCls}-rtl`]: direction.value === "rtl"
      }, attrs.class, hashId.value);
      let children = null;
      if (options && options.length > 0) {
        children = options.map((option) => {
          if (typeof option === "string" || typeof option === "number") {
            return createVNode(Radio, {
              "key": option,
              "prefixCls": prefixCls.value,
              "disabled": props.disabled,
              "value": option,
              "checked": stateValue.value === option
            }, {
              default: () => [option]
            });
          }
          const {
            value,
            disabled,
            label
          } = option;
          return createVNode(Radio, {
            "key": `radio-group-value-options-${value}`,
            "prefixCls": prefixCls.value,
            "disabled": disabled || props.disabled,
            "value": value,
            "checked": stateValue.value === value
          }, {
            default: () => [label]
          });
        });
      } else {
        children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": classString,
        "id": id
      }), [children]));
    };
  }
});
const __nuxt_component_2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARadioButton",
  inheritAttrs: false,
  props: radioProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("radio", props);
    useProvideRadioOptionTypeContext("button");
    return () => {
      var _a;
      return createVNode(Radio, _objectSpread(_objectSpread(_objectSpread({}, attrs), props), {}, {
        "prefixCls": prefixCls.value
      }), {
        default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
      });
    };
  }
});

export { Radio as R, __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=RadioButton-C_RciHCU.mjs.map
