import { defineComponent, ref, watch, computed, unref, mergeProps, withCtx, isRef, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, readonly, shallowRef, inject, provide, nextTick, watchEffect, Transition, withDirectives, vShow, useSSRContext, render } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { u as useProgressStore } from './progress-De0Fy5DO.mjs';
import { u as useApiFetch } from './useApi-CiWNERvI.mjs';
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { aE as withInstall, ar as useLocaleReceiver, al as useConfigInject, aC as warning, o as classNames, Z as getTransitionName, b as CloseOutlined, a2 as initDefaultProps, v as devWarning, $ as getTransitionProps, N as NoCompactStyle, G as genComponentStyleHook, a7 as merge, at as useProvidePortal, B as Button, r as convertLegacyProps, e as PropTypes, a9 as objectType, aa as resetComponent, J as genFocusStyle, p as clearFix, T as getPropsSlot, q as contains, A as functionType, j as arrayType, K as Keyframe, E as ExclamationCircleFilled, a as CloseCircleFilled, C as CheckCircleFilled, d as InfoCircleFilled, ak as useConfigContextInject, a6 as localeValues, a0 as globalConfigForApi, c as ConfigProvider, O as getConfirmLocale } from './server.mjs';
import { K as KeyCode } from './slide-C57riDBP.mjs';
import { o as omit, P as Portal, i as initMotion, t as triggerVNodeUpdate } from './motion-DJBbJh9Y.mjs';
import { S as Select, p as pickAttrs } from './index-hqCdhbUA.mjs';
import { i as initZoomMotion } from './zoom-ByxQdbsR.mjs';

const fadeIn = new Keyframe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = function(token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
const props = () => ({
  prefixCls: String,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: {
    type: Object,
    default: void 0
  },
  class: String,
  rootClassName: String,
  rootStyle: objectType(),
  placement: {
    type: String
  },
  wrapperClassName: String,
  level: {
    type: [String, Array]
  },
  levelMove: {
    type: [Number, Function, Array]
  },
  duration: String,
  ease: String,
  showMask: {
    type: Boolean,
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  maskStyle: {
    type: Object,
    default: void 0
  },
  afterVisibleChange: Function,
  keyboard: {
    type: Boolean,
    default: void 0
  },
  contentWrapperStyle: arrayType(),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  // Motion
  motion: functionType(),
  maskMotion: objectType()
});
const drawerProps$1 = () => _extends(_extends({}, props()), {
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
});
const drawerChildProps = () => _extends(_extends({}, props()), {
  getContainer: Function,
  getOpenCount: Function,
  scrollLocker: PropTypes.any,
  inline: Boolean
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DrawerChild = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: drawerChildProps(),
  emits: ["close", "handleClick", "change"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const contentWrapper = shallowRef();
    const dom = shallowRef();
    const maskDom = shallowRef();
    const handlerDom = shallowRef();
    const contentDom = shallowRef();
    `drawer_id_${Number((Date.now() + Math.random()).toString().replace(".", Math.round(Math.random() * 9).toString())).toString(16)}`;
    watch(() => props2.level, () => {
      getLevelDom(props2);
    }, {
      flush: "post"
    });
    watch(() => props2.open, () => {
      const {
        open,
        getContainer,
        scrollLocker,
        showMask,
        autofocus
      } = props2;
      const container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      if (container && container.parentNode === (void 0).body) ;
      if (open) {
        if (autofocus) {
          domFocus();
        }
        if (showMask) {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
        }
      } else {
        scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
      }
    }, {
      flush: "post"
    });
    watch(() => props2.placement, (val) => {
      if (val) {
        contentDom.value = null;
      }
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = dom.value) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    const onKeyDown = (e) => {
      if (e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onClose(e);
      }
    };
    const onAfterVisibleChange = () => {
      const {
        open,
        afterVisibleChange
      } = props2;
      if (afterVisibleChange) {
        afterVisibleChange(!!open);
      }
    };
    const getLevelDom = (_ref2) => {
      let {
        level,
        getContainer
      } = _ref2;
      {
        return;
      }
    };
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const canOpen = shallowRef(false);
    watch(dom, () => {
      nextTick(() => {
        canOpen.value = true;
      });
    });
    return () => {
      var _a, _b;
      const {
        width,
        height,
        open: $open,
        prefixCls,
        placement,
        level,
        levelMove,
        ease,
        duration,
        getContainer,
        onChange,
        afterVisibleChange,
        showMask,
        maskClosable,
        maskStyle,
        keyboard,
        getOpenCount,
        scrollLocker,
        contentWrapperStyle,
        style,
        class: className,
        rootClassName,
        rootStyle,
        maskMotion,
        motion,
        inline
      } = props2, otherProps = __rest$3(props2, ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class", "rootClassName", "rootStyle", "maskMotion", "motion", "inline"]);
      const open = $open && canOpen.value;
      const wrapperClassName = classNames(prefixCls, {
        [`${prefixCls}-${placement}`]: true,
        [`${prefixCls}-open`]: open,
        [`${prefixCls}-inline`]: inline,
        "no-mask": !showMask,
        [rootClassName]: true
      });
      const motionProps = typeof motion === "function" ? motion(placement) : motion;
      return createVNode("div", _objectSpread(_objectSpread({}, omit(otherProps, ["autofocus"])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": rootStyle,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : void 0
      }), [createVNode(Transition, maskMotion, {
        default: () => [showMask && withDirectives(createVNode("div", {
          "class": `${prefixCls}-mask`,
          "onClick": maskClosable ? onClose : void 0,
          "style": maskStyle,
          "ref": maskDom
        }, null), [[vShow, open]])]
      }), createVNode(Transition, _objectSpread(_objectSpread({}, motionProps), {}, {
        "onAfterEnter": onAfterVisibleChange,
        "onAfterLeave": onAfterVisibleChange
      }), {
        default: () => [withDirectives(createVNode("div", {
          "class": `${prefixCls}-content-wrapper`,
          "style": [contentWrapperStyle],
          "ref": contentWrapper
        }, [createVNode("div", {
          "class": [`${prefixCls}-content`, className],
          "style": style,
          "ref": contentDom
        }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), slots.handler ? createVNode("div", {
          "onClick": onHandleClick,
          "ref": handlerDom
        }, [(_b = slots.handler) === null || _b === void 0 ? void 0 : _b.call(slots)]) : null]), [[vShow, open]])]
      })]);
    };
  }
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DrawerWrapper = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: initDefaultProps(drawerProps$1(), {
    prefixCls: "drawer",
    placement: "left",
    getContainer: "body",
    level: "all",
    duration: ".3s",
    ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    afterVisibleChange: () => {
    },
    showMask: true,
    maskClosable: true,
    maskStyle: {},
    wrapperClassName: "",
    keyboard: true,
    forceRender: false,
    autofocus: true
  }),
  emits: ["handleClick", "close"],
  setup(props2, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const dom = ref(null);
    const onHandleClick = (e) => {
      emit("handleClick", e);
    };
    const onClose = (e) => {
      emit("close", e);
    };
    return () => {
      const {
        getContainer,
        wrapperClassName,
        rootClassName,
        rootStyle,
        forceRender
      } = props2, otherProps = __rest$2(props2, ["getContainer", "wrapperClassName", "rootClassName", "rootStyle", "forceRender"]);
      let portal = null;
      if (!getContainer) {
        return createVNode(DrawerChild, _objectSpread(_objectSpread({}, otherProps), {}, {
          "rootClassName": rootClassName,
          "rootStyle": rootStyle,
          "open": props2.open,
          "onClose": onClose,
          "onHandleClick": onHandleClick,
          "inline": true
        }), slots);
      }
      const $forceRender = !!slots.handler || forceRender;
      if ($forceRender || props2.open || dom.value) {
        portal = createVNode(Portal, {
          "autoLock": true,
          "visible": props2.open,
          "forceRender": $forceRender,
          "getContainer": getContainer,
          "wrapperClassName": wrapperClassName
        }, {
          default: (_a) => {
            var {
              visible,
              afterClose
            } = _a, rest = __rest$2(_a, ["visible", "afterClose"]);
            return createVNode(DrawerChild, _objectSpread(_objectSpread(_objectSpread({
              "ref": dom
            }, otherProps), rest), {}, {
              "rootClassName": rootClassName,
              "rootStyle": rootStyle,
              "open": visible !== void 0 ? visible : props2.open,
              "afterVisibleChange": afterClose !== void 0 ? afterClose : props2.afterVisibleChange,
              "onClose": onClose,
              "onHandleClick": onHandleClick
            }), slots);
          }
        });
      }
      return portal;
    };
  }
});
const genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  const sharedPanelMotion = {
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${motionDurationSlow}`
      }
    }
  };
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: {
        "&-enter, &-appear, &-leave": {
          "&-active": {
            transition: `all ${motionDurationSlow}`
          }
        },
        "&-enter, &-appear": {
          opacity: 0,
          "&-active": {
            opacity: 1
          }
        },
        "&-leave": {
          opacity: 1,
          "&-active": {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: {
        // Left
        "&-left": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(-100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(-100%)"
            }
          }
        }],
        // Right
        "&-right": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateX(100%) !important"
            },
            "&-active": {
              transform: "translateX(0)"
            }
          },
          "&-leave": {
            transform: "translateX(0)",
            "&-active": {
              transform: "translateX(100%)"
            }
          }
        }],
        // Top
        "&-top": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(-100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(-100%)"
            }
          }
        }],
        // Bottom
        "&-bottom": [sharedPanelMotion, {
          "&-enter, &-appear": {
            "&-start": {
              transform: "translateY(100%) !important"
            },
            "&-active": {
              transform: "translateY(0)"
            }
          },
          "&-leave": {
            transform: "translateY(0)",
            "&-active": {
              transform: "translateY(100%)"
            }
          }
        }]
      }
    }
  };
};
const genDrawerStyle = (token) => {
  const {
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginSM,
    colorIcon,
    colorIconHover,
    colorText,
    fontWeightStrong,
    drawerFooterPaddingVertical,
    drawerFooterPaddingHorizontal
  } = token;
  const wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: "fixed",
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: "none",
      "&-pure": {
        position: "relative",
        background: colorBgElevated,
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      "&-inline": {
        position: "absolute"
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: "absolute",
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: "auto"
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: "absolute",
        zIndex: zIndexPopup,
        transition: `all ${motionDurationSlow}`,
        "&-hidden": {
          display: "none"
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: colorBgElevated,
        pointerEvents: "auto"
      },
      // ===================== Panel ======================
      [`${componentCls}-wrapper-body`]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      },
      // Header
      [`${componentCls}-header`]: {
        display: "flex",
        flex: 0,
        alignItems: "center",
        padding: `${padding}px ${paddingLG}px`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
        "&-title": {
          display: "flex",
          flex: 1,
          alignItems: "center",
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: "none"
      },
      [`${componentCls}-close`]: {
        display: "inline-block",
        marginInlineEnd: marginSM,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        textDecoration: "none",
        background: "transparent",
        border: 0,
        outline: 0,
        cursor: "pointer",
        transition: `color ${motionDurationMid}`,
        textRendering: "auto",
        "&:focus, &:hover": {
          color: colorIconHover,
          textDecoration: "none"
        }
      },
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        color: colorText,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: "auto"
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${drawerFooterPaddingVertical}px ${drawerFooterPaddingHorizontal}px`,
        borderTop: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Drawer", (token) => {
  const drawerToken = merge(token, {
    drawerFooterPaddingVertical: token.paddingXS,
    drawerFooterPaddingHorizontal: token.padding
  });
  return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase
}));
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const PlacementTypes = ["top", "right", "bottom", "left"];
const defaultPushState = {
  distance: 180
};
const drawerProps = () => ({
  autofocus: {
    type: Boolean,
    default: void 0
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  mask: {
    type: Boolean,
    default: void 0
  },
  maskStyle: objectType(),
  rootClassName: String,
  rootStyle: objectType(),
  size: {
    type: String
  },
  drawerStyle: objectType(),
  headerStyle: objectType(),
  bodyStyle: objectType(),
  contentWrapperStyle: {
    type: Object,
    default: void 0
  },
  title: PropTypes.any,
  /** @deprecated Please use `open` instead */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: Number,
  prefixCls: String,
  push: PropTypes.oneOfType([PropTypes.looseBool, {
    type: Object
  }]),
  placement: PropTypes.oneOf(PlacementTypes),
  keyboard: {
    type: Boolean,
    default: void 0
  },
  extra: PropTypes.any,
  footer: PropTypes.any,
  footerStyle: objectType(),
  level: PropTypes.any,
  levelMove: {
    type: [Number, Array, Function]
  },
  handle: PropTypes.any,
  /** @deprecated Use `@afterVisibleChange` instead */
  afterVisibleChange: Function,
  /** @deprecated Please use `@afterOpenChange` instead */
  onAfterVisibleChange: Function,
  onAfterOpenChange: Function,
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onClose: Function
});
const Drawer = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ADrawer",
  inheritAttrs: false,
  props: initDefaultProps(drawerProps(), {
    closable: true,
    placement: "right",
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
    push: defaultPushState
  }),
  slots: Object,
  // emits: ['update:visible', 'close', 'afterVisibleChange'],
  setup(props2, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const sPush = shallowRef(false);
    const destroyClose = shallowRef(false);
    const vcDrawer = shallowRef(null);
    const load = shallowRef(false);
    const visible = shallowRef(false);
    const mergedOpen = computed(() => {
      var _a;
      return (_a = props2.open) !== null && _a !== void 0 ? _a : props2.visible;
    });
    watch(mergedOpen, () => {
      if (mergedOpen.value) {
        load.value = true;
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    watch([mergedOpen, load], () => {
      if (mergedOpen.value && load.value) {
        visible.value = true;
      }
    }, {
      immediate: true
    });
    const parentDrawerOpts = inject("parentDrawerOpts", null);
    const {
      prefixCls,
      getPopupContainer,
      direction
    } = useConfigInject("drawer", props2);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const getContainer = computed(() => (
      // 有可能为 false，所以不能直接判断
      props2.getContainer === void 0 && (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value) ? () => getPopupContainer.value((void 0).body) : props2.getContainer
    ));
    devWarning(!props2.afterVisibleChange, "Drawer", "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead");
    const setPush = () => {
      sPush.value = true;
    };
    const setPull = () => {
      sPush.value = false;
      nextTick(() => {
        domFocus();
      });
    };
    provide("parentDrawerOpts", {
      setPush,
      setPull
    });
    watch(visible, () => {
      if (parentDrawerOpts) {
        if (visible.value) {
          parentDrawerOpts.setPush();
        } else {
          parentDrawerOpts.setPull();
        }
      }
    }, {
      flush: "post"
    });
    const domFocus = () => {
      var _a, _b;
      (_b = (_a = vcDrawer.value) === null || _a === void 0 ? void 0 : _a.domFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const close = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("close", e);
    };
    const afterVisibleChange = (open) => {
      var _a;
      if (!open) {
        if (destroyClose.value === false) {
          destroyClose.value = true;
        }
        if (props2.destroyOnClose) {
          load.value = false;
        }
      }
      (_a = props2.afterVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props2, open);
      emit("afterVisibleChange", open);
      emit("afterOpenChange", open);
    };
    const pushTransform = computed(() => {
      const {
        push,
        placement
      } = props2;
      let distance;
      if (typeof push === "boolean") {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }
      distance = parseFloat(String(distance || 0));
      if (placement === "left" || placement === "right") {
        return `translateX(${placement === "left" ? distance : -distance}px)`;
      }
      if (placement === "top" || placement === "bottom") {
        return `translateY(${placement === "top" ? distance : -distance}px)`;
      }
      return null;
    });
    const mergedWidth = computed(() => {
      var _a;
      return (_a = props2.width) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const mergedHeight = computed(() => {
      var _a;
      return (_a = props2.height) !== null && _a !== void 0 ? _a : props2.size === "large" ? 736 : 378;
    });
    const offsetStyle = computed(() => {
      const {
        mask,
        placement
      } = props2;
      if (!visible.value && !mask) {
        return {};
      }
      const val = {};
      if (placement === "left" || placement === "right") {
        val.width = isNumeric(mergedWidth.value) ? `${mergedWidth.value}px` : mergedWidth.value;
      } else {
        val.height = isNumeric(mergedHeight.value) ? `${mergedHeight.value}px` : mergedHeight.value;
      }
      return val;
    });
    const wrapperStyle = computed(() => {
      const {
        zIndex,
        contentWrapperStyle
      } = props2;
      const val = offsetStyle.value;
      return [{
        zIndex,
        transform: sPush.value ? pushTransform.value : void 0
      }, _extends({}, contentWrapperStyle), val];
    });
    const renderHeader = (prefixCls2) => {
      const {
        closable,
        headerStyle
      } = props2;
      const extra = getPropsSlot(slots, props2, "extra");
      const title = getPropsSlot(slots, props2, "title");
      if (!title && !closable) {
        return null;
      }
      return createVNode("div", {
        "class": classNames(`${prefixCls2}-header`, {
          [`${prefixCls2}-header-close-only`]: closable && !title && !extra
        }),
        "style": headerStyle
      }, [createVNode("div", {
        "class": `${prefixCls2}-header-title`
      }, [renderCloseIcon(prefixCls2), title && createVNode("div", {
        "class": `${prefixCls2}-title`
      }, [title])]), extra && createVNode("div", {
        "class": `${prefixCls2}-extra`
      }, [extra])]);
    };
    const renderCloseIcon = (prefixCls2) => {
      var _a;
      const {
        closable
      } = props2;
      const $closeIcon = slots.closeIcon ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : props2.closeIcon;
      return closable && createVNode("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": `${prefixCls2}-close`
      }, [$closeIcon === void 0 ? createVNode(CloseOutlined, null, null) : $closeIcon]);
    };
    const renderBody = (prefixCls2) => {
      var _a;
      if (destroyClose.value && !props2.forceRender && !load.value) {
        return null;
      }
      const {
        bodyStyle,
        drawerStyle
      } = props2;
      return createVNode("div", {
        "class": `${prefixCls2}-wrapper-body`,
        "style": drawerStyle
      }, [renderHeader(prefixCls2), createVNode("div", {
        "key": "body",
        "class": `${prefixCls2}-body`,
        "style": bodyStyle
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), renderFooter(prefixCls2)]);
    };
    const renderFooter = (prefixCls2) => {
      const footer = getPropsSlot(slots, props2, "footer");
      if (!footer) {
        return null;
      }
      const footerClassName = `${prefixCls2}-footer`;
      return createVNode("div", {
        "class": footerClassName,
        "style": props2.footerStyle
      }, [footer]);
    };
    const drawerClassName = computed(() => classNames({
      "no-mask": !props2.mask,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, props2.rootClassName, hashId.value));
    const maskMotion = computed(() => {
      return getTransitionProps(getTransitionName(prefixCls.value, "mask-motion"));
    });
    const panelMotion = (motionPlacement) => {
      return getTransitionProps(getTransitionName(prefixCls.value, `panel-motion-${motionPlacement}`));
    };
    return () => {
      const {
        width,
        height,
        placement,
        mask,
        forceRender
      } = props2, rest = __rest$1(props2, ["width", "height", "placement", "mask", "forceRender"]);
      const vcDrawerProps = _extends(_extends(_extends({}, attrs), omit(rest, ["size", "closeIcon", "closable", "destroyOnClose", "drawerStyle", "headerStyle", "bodyStyle", "title", "push", "onAfterVisibleChange", "onClose", "onUpdate:visible", "onUpdate:open", "visible"])), {
        forceRender,
        onClose: close,
        afterVisibleChange,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible.value,
        showMask: mask,
        placement,
        ref: vcDrawer
      });
      return wrapSSR(createVNode(NoCompactStyle, null, {
        default: () => [createVNode(DrawerWrapper, _objectSpread(_objectSpread({}, vcDrawerProps), {}, {
          "maskMotion": maskMotion.value,
          "motion": panelMotion,
          "width": mergedWidth.value,
          "height": mergedHeight.value,
          "getContainer": getContainer.value,
          "rootClassName": drawerClassName.value,
          "rootStyle": props2.rootStyle,
          "contentWrapperStyle": wrapperStyle.value
        }), {
          handler: props2.handle ? () => props2.handle : slots.handle,
          default: () => renderBody(prefixCls.value)
        })]
      }));
    };
  }
});
const __nuxt_component_0 = withInstall(Drawer);
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes.any,
    footer: PropTypes.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes.any,
    maskAnimation: PropTypes.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes.any,
    maskProps: PropTypes.any,
    wrapProps: PropTypes.any,
    getContainer: PropTypes.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(prefixCls, transitionName, animationName) {
  let motionName = transitionName;
  if (!motionName && animationName) {
    motionName = `${prefixCls}-${animationName}`;
  }
  return motionName;
}
let uuid$1 = -1;
function getUUID() {
  uuid$1 += 1;
  return uuid$1;
}
function getScroll(w, top) {
  let ret = w[`page${top ? "Y" : "X"}Offset`];
  const method = `scroll${top ? "Top" : "Left"}`;
  if (typeof ret !== "number") {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
const sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
const entityStyle = {
  outline: "none"
};
const Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: false,
  props: _extends(_extends({}, dialogPropTypes()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(props2, _ref) {
    let {
      expose,
      slots,
      attrs
    } = _ref;
    const sentinelStartRef = ref();
    const sentinelEndRef = ref();
    const dialogRef = ref();
    expose({
      focus: () => {
        var _a;
        (_a = sentinelStartRef.value) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      },
      changeActive: (next) => {
        const {
          activeElement
        } = void 0;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus({
            preventScroll: true
          });
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus({
            preventScroll: true
          });
        }
      }
    });
    const transformOrigin = ref();
    const contentStyleRef = computed(() => {
      const {
        width,
        height
      } = props2;
      const contentStyle = {};
      if (width !== void 0) {
        contentStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        contentStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    const onPrepare = () => {
      nextTick(() => {
        if (dialogRef.value) {
          const elementOffset = offset(dialogRef.value);
          transformOrigin.value = props2.mousePosition ? `${props2.mousePosition.x - elementOffset.left}px ${props2.mousePosition.y - elementOffset.top}px` : "";
        }
      });
    };
    const onVisibleChanged = (visible) => {
      props2.onVisibleChanged(visible);
    };
    return () => {
      var _a, _b, _c, _d;
      const {
        prefixCls,
        footer = (_a = slots.footer) === null || _a === void 0 ? void 0 : _a.call(slots),
        title = (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots),
        ariaId,
        closable,
        closeIcon = (_c = slots.closeIcon) === null || _c === void 0 ? void 0 : _c.call(slots),
        onClose,
        bodyStyle,
        bodyProps,
        onMousedown,
        onMouseup,
        visible,
        modalRender = slots.modalRender,
        destroyOnClose,
        motionName
      } = props2;
      let footerNode;
      if (footer) {
        footerNode = createVNode("div", {
          "class": `${prefixCls}-footer`
        }, [footer]);
      }
      let headerNode;
      if (title) {
        headerNode = createVNode("div", {
          "class": `${prefixCls}-header`
        }, [createVNode("div", {
          "class": `${prefixCls}-title`,
          "id": ariaId
        }, [title])]);
      }
      let closer;
      if (closable) {
        closer = createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": `${prefixCls}-close`
        }, [closeIcon || createVNode("span", {
          "class": `${prefixCls}-close-x`
        }, null)]);
      }
      const content = createVNode("div", {
        "class": `${prefixCls}-content`
      }, [closer, headerNode, createVNode("div", _objectSpread({
        "class": `${prefixCls}-body`,
        "style": bodyStyle
      }, bodyProps), [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), footerNode]);
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, _objectSpread(_objectSpread({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": () => onVisibleChanged(true),
        "onAfterLeave": () => onVisibleChanged(false)
      }), {
        default: () => [visible || !destroyOnClose ? withDirectives(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "ref": dialogRef,
          "key": "dialog-element",
          "role": "document",
          "style": [contentStyleRef.value, attrs.style],
          "class": [prefixCls, attrs.class],
          "onMousedown": onMousedown,
          "onMouseup": onMouseup
        }), [createVNode("div", {
          "tabindex": 0,
          "ref": sentinelStartRef,
          "style": entityStyle
        }, [modalRender ? modalRender({
          originVNode: content
        }) : content]), createVNode("div", {
          "tabindex": 0,
          "ref": sentinelEndRef,
          "style": sentinelStyle
        }, null)]), [[vShow, visible]]) : null]
      });
    };
  }
});
const Mask = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(props2, _ref) {
    return () => {
      const {
        prefixCls,
        visible,
        maskProps,
        motionName
      } = props2;
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode("div", _objectSpread({
          "class": `${prefixCls}-mask`
        }, maskProps), null), [[vShow, visible]])]
      });
    };
  }
});
const Dialog = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: false,
  props: initDefaultProps(_extends(_extends({}, dialogPropTypes()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: true
  }),
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const lastOutSideActiveElementRef = shallowRef();
    const wrapperRef = shallowRef();
    const contentRef = shallowRef();
    const animatedVisible = shallowRef(props2.visible);
    const ariaIdRef = shallowRef(`vcDialogTitle${getUUID()}`);
    const onDialogVisibleChanged = (newVisible) => {
      var _a, _b;
      if (newVisible) {
        if (!contains(wrapperRef.value, (void 0).activeElement)) {
          lastOutSideActiveElementRef.value = (void 0).activeElement;
          (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      } else {
        const preAnimatedVisible = animatedVisible.value;
        animatedVisible.value = false;
        if (props2.mask && lastOutSideActiveElementRef.value && props2.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
          }
          lastOutSideActiveElementRef.value = null;
        }
        if (preAnimatedVisible) {
          (_b = props2.afterClose) === null || _b === void 0 ? void 0 : _b.call(props2);
        }
      }
    };
    const onInternalClose = (e) => {
      var _a;
      (_a = props2.onClose) === null || _a === void 0 ? void 0 : _a.call(props2, e);
    };
    const contentClickRef = shallowRef(false);
    const contentTimeoutRef = shallowRef();
    const onContentMouseDown = () => {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    const onContentMouseUp = () => {
      contentTimeoutRef.value = setTimeout(() => {
        contentClickRef.value = false;
      });
    };
    const onWrapperClick = (e) => {
      if (!props2.maskClosable) return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    const onWrapperKeyDown = (e) => {
      if (props2.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      if (props2.visible) {
        if (e.keyCode === KeyCode.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(() => props2.visible, () => {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    watchEffect(() => {
      var _a, _b;
      (_a = props2.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
      if (animatedVisible.value) {
        (_b = props2.scrollLocker) === null || _b === void 0 ? void 0 : _b.lock();
      }
    });
    return () => {
      const {
        prefixCls,
        mask,
        visible,
        maskTransitionName,
        maskAnimation,
        zIndex,
        wrapClassName,
        rootClassName,
        wrapStyle,
        closable,
        maskProps,
        maskStyle,
        transitionName,
        animation,
        wrapProps,
        title = slots.title
      } = props2;
      const {
        style,
        class: className
      } = attrs;
      return createVNode("div", _objectSpread({
        "class": [`${prefixCls}-root`, rootClassName]
      }, pickAttrs(props2, {
        data: true
      })), [createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _extends({
          zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), createVNode("div", _objectSpread({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames(`${prefixCls}-wrap`, wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _extends(_extends({
          zIndex
        }, wrapStyle), {
          display: !animatedVisible.value ? "none" : null
        })
      }, wrapProps), [createVNode(Content, _objectSpread(_objectSpread({}, omit(props2, ["scrollLocker"])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": getMotionName(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});
const IDialogPropTypes = dialogPropTypes();
const DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    visible: false
  }),
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const animatedVisible = ref(props2.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(() => props2.visible, () => {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    return () => {
      const {
        visible,
        getContainer,
        forceRender,
        destroyOnClose = false,
        afterClose
      } = props2;
      let dialogProps = _extends(_extends(_extends({}, props2), attrs), {
        ref: "_component",
        key: "dialog"
      });
      if (getContainer === false) {
        return createVNode(Dialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
          "getOpenCount": () => 2
        }), slots);
      }
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return createVNode(Portal, {
        "autoLock": true,
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: (childProps) => {
          dialogProps = _extends(_extends(_extends({}, dialogProps), childProps), {
            afterClose: () => {
              afterClose === null || afterClose === void 0 ? void 0 : afterClose();
              animatedVisible.value = false;
            }
          });
          return createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
function box(position) {
  return {
    position,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const genModalMaskStyle = (token) => {
  const {
    componentCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${token.antCls}-zoom-enter, ${componentCls}${token.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${componentCls}${token.antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: _extends(_extends({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: _extends(_extends({}, box("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap`]: {
          zIndex: token.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax})`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${token.marginXS} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${token.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.modalHeadingColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
        },
        [`${componentCls}-close`]: _extends({
          position: "absolute",
          top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          insetInlineEnd: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          zIndex: token.zIndexPopupBase + 10,
          padding: 0,
          color: token.modalCloseColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalConfirmIconSize,
          height: token.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${token.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalIconHoverColor,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContentHover
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.modalHeaderBg,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          marginBottom: token.marginXS
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.modalFooterBg,
          marginTop: token.marginSM,
          [`${token.antCls}-btn + ${token.antCls}-btn:not(${token.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genModalConfirmStyle = (token) => {
  const {
    componentCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: _extends({}, clearFix()),
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${confirmComponentCls}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: token.colorTextHeading,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          [`+ ${confirmComponentCls}-content`]: {
            marginBlockStart: token.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${token.modalConfirmIconSize + token.marginSM}px)`
          }
        },
        [`${confirmComponentCls}-content`]: {
          color: token.colorText,
          fontSize: token.fontSize
        },
        [`> ${token.iconCls}`]: {
          flex: "none",
          marginInlineEnd: token.marginSM,
          fontSize: token.modalConfirmIconSize,
          [`+ ${confirmComponentCls}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.marginSM
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.marginSM,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${componentCls}-zoom-leave ${componentCls}-btns`]: {
      pointerEvents: "none"
    }
  };
};
const genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        padding: 0
      },
      [`${componentCls}-header`]: {
        padding: token.modalHeaderPadding,
        borderBottom: `${token.modalHeaderBorderWidth}px ${token.modalHeaderBorderStyle} ${token.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${componentCls}-body`]: {
        padding: token.modalBodyPadding
      },
      [`${componentCls}-footer`]: {
        padding: `${token.modalFooterPaddingVertical}px ${token.modalFooterPaddingHorizontal}px`,
        borderTop: `${token.modalFooterBorderWidth}px ${token.modalFooterBorderStyle} ${token.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [confirmComponentCls]: {
      [`${antCls}-modal-body`]: {
        padding: `${token.padding * 2}px ${token.padding * 2}px ${token.paddingLG}px`
      },
      [`${confirmComponentCls}-body`]: {
        [`> ${token.iconCls}`]: {
          marginInlineEnd: token.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.margin
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        marginTop: token.marginLG
      }
    }
  };
};
const useStyle = genComponentStyleHook("Modal", (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  });
  return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, "zoom")];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let mousePosition;
const modalProps = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: PropTypes.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: PropTypes.any,
  okText: PropTypes.any,
  okType: String,
  cancelText: PropTypes.any,
  icon: PropTypes.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: objectType(),
  cancelButtonProps: objectType(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: objectType(),
  maskStyle: objectType(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: objectType()
});
const Modal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: false,
  props: initDefaultProps(modalProps(), {
    width: 520,
    confirmLoading: false,
    okType: "primary"
  }),
  setup(props2, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    const {
      prefixCls,
      rootPrefixCls,
      direction,
      getPopupContainer
    } = useConfigInject("modal", props2);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    warning(props2.visible === void 0);
    const handleCancel = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("cancel", e);
      emit("change", false);
    };
    const handleOk = (e) => {
      emit("ok", e);
    };
    const renderFooter = () => {
      var _a, _b;
      const {
        okText = (_a = slots.okText) === null || _a === void 0 ? void 0 : _a.call(slots),
        okType,
        cancelText = (_b = slots.cancelText) === null || _b === void 0 ? void 0 : _b.call(slots),
        confirmLoading
      } = props2;
      return createVNode(Fragment, null, [createVNode(Button, _objectSpread({
        "onClick": handleCancel
      }, props2.cancelButtonProps), {
        default: () => [cancelText || locale.value.cancelText]
      }), createVNode(Button, _objectSpread(_objectSpread({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props2.okButtonProps), {
        default: () => [okText || locale.value.okText]
      })]);
    };
    return () => {
      var _a, _b;
      const {
        prefixCls: customizePrefixCls,
        visible,
        open,
        wrapClassName,
        centered,
        getContainer,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        focusTriggerAfterClose = true
      } = props2, restProps = __rest(props2, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
      const wrapClassNameExtended = classNames(wrapClassName, {
        [`${prefixCls.value}-centered`]: !!centered,
        [`${prefixCls.value}-wrap-rtl`]: direction.value === "rtl"
      });
      return wrapSSR(createVNode(DialogWrap, _objectSpread(_objectSpread(_objectSpread({}, restProps), attrs), {}, {
        "rootClassName": hashId.value,
        "class": classNames(hashId.value, attrs.class),
        "getContainer": getContainer || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value),
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": open !== null && open !== void 0 ? open : visible,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props2.maskTransitionName),
        "mousePosition": (_b = restProps.mousePosition) !== null && _b !== void 0 ? _b : mousePosition
      }), _extends(_extends({}, slots), {
        footer: slots.footer || renderFooter,
        closeIcon: () => {
          return createVNode("span", {
            "class": `${prefixCls.value}-close-x`
          }, [closeIcon || createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`
          }, null)]);
        }
      })));
    };
  }
});
const useDestroyed = () => {
  const destroyed = shallowRef(false);
  return destroyed;
};
const actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: objectType(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: actionButtonProps,
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const clickedRef = shallowRef(false);
    const buttonRef = shallowRef();
    const loading = shallowRef(false);
    const isDestroyed = useDestroyed();
    const onInternalClose = function() {
      var _a;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_a = props2.close) === null || _a === void 0 ? void 0 : _a.call(props2, ...args);
    };
    const handlePromiseOnOk = (returnValueOfOnOk) => {
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function() {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        onInternalClose(...arguments);
        clickedRef.value = false;
      }, (e) => {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
        return Promise.reject(e);
      });
    };
    const onClick = (e) => {
      const {
        actionFn
      } = props2;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        onInternalClose();
        return;
      }
      let returnValueOfOnOk;
      if (props2.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props2.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          onInternalClose(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(props2.close);
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          onInternalClose();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return () => {
      const {
        type,
        prefixCls,
        buttonProps
      } = props2;
      return createVNode(Button, _objectSpread(_objectSpread(_objectSpread({}, convertLegacyProps(type)), {}, {
        "onClick": onClick,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
function renderSomeContent(someContent) {
  if (typeof someContent === "function") {
    return someContent();
  }
  return someContent;
}
const ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: false,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(props2, _ref) {
    let {
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    return () => {
      const {
        icon,
        onCancel,
        onOk,
        close,
        okText,
        closable = false,
        zIndex,
        afterClose,
        keyboard,
        centered,
        getContainer,
        maskStyle,
        okButtonProps,
        cancelButtonProps,
        okCancel,
        width = 416,
        mask = true,
        maskClosable = false,
        type,
        open,
        title,
        content,
        direction,
        closeIcon,
        modalRender,
        focusTriggerAfterClose,
        rootPrefixCls,
        bodyStyle,
        wrapClassName,
        footer
      } = props2;
      let mergedIcon = icon;
      if (!icon && icon !== null) {
        switch (type) {
          case "info":
            mergedIcon = createVNode(InfoCircleFilled, null, null);
            break;
          case "success":
            mergedIcon = createVNode(CheckCircleFilled, null, null);
            break;
          case "error":
            mergedIcon = createVNode(CloseCircleFilled, null, null);
            break;
          default:
            mergedIcon = createVNode(ExclamationCircleFilled, null, null);
        }
      }
      const okType = props2.okType || "primary";
      const prefixCls = props2.prefixCls || "ant-modal";
      const contentPrefixCls = `${prefixCls}-confirm`;
      const style = attrs.style || {};
      const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === "confirm";
      const autoFocusButton = props2.autoFocusButton === null ? false : props2.autoFocusButton || "ok";
      const confirmPrefixCls = `${prefixCls}-confirm`;
      const classString = classNames(confirmPrefixCls, `${confirmPrefixCls}-${props2.type}`, {
        [`${confirmPrefixCls}-rtl`]: direction === "rtl"
      }, attrs.class);
      const mergedLocal = locale.value;
      const cancelButton = mergedOkCancel && createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close,
        "autofocus": autoFocusButton === "cancel",
        "buttonProps": cancelButtonProps,
        "prefixCls": `${rootPrefixCls}-btn`
      }, {
        default: () => [renderSomeContent(props2.cancelText) || mergedLocal.cancelText]
      });
      return createVNode(Modal, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames({
          [`${confirmPrefixCls}-centered`]: !!centered
        }, wrapClassName),
        "onCancel": (e) => close === null || close === void 0 ? void 0 : close({
          triggerCancel: true
        }, e),
        "open": open,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props2.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: () => [createVNode("div", {
          "class": `${contentPrefixCls}-body-wrapper`
        }, [createVNode("div", {
          "class": `${contentPrefixCls}-body`
        }, [renderSomeContent(mergedIcon), title === void 0 ? null : createVNode("span", {
          "class": `${contentPrefixCls}-title`
        }, [renderSomeContent(title)]), createVNode("div", {
          "class": `${contentPrefixCls}-content`
        }, [renderSomeContent(content)])]), footer !== void 0 ? renderSomeContent(footer) : createVNode("div", {
          "class": `${contentPrefixCls}-btns`
        }, [cancelButton, createVNode(ActionButton, {
          "type": okType,
          "actionFn": onOk,
          "close": close,
          "autofocus": autoFocusButton === "ok",
          "buttonProps": okButtonProps,
          "prefixCls": `${rootPrefixCls}-btn`
        }, {
          default: () => [renderSomeContent(okText) || (mergedOkCancel ? mergedLocal.okText : mergedLocal.justOkText)]
        })])])]
      });
    };
  }
});
const destroyFns = [];
const confirm = (config) => {
  const container = (void 0).createDocumentFragment();
  let currentConfig = _extends(_extends({}, omit(config, ["parentContext", "appContext"])), {
    close,
    open: true
  });
  let confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      render(null, container);
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(() => {
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _extends(_extends({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _extends(_extends({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      triggerVNodeUpdate(confirmDialogInstance, currentConfig, container);
    }
  }
  const Wrapper = (p) => {
    const global = globalConfigForApi;
    const rootPrefixCls = global.prefixCls;
    const prefixCls = p.prefixCls || `${rootPrefixCls}-modal`;
    const iconPrefixCls = global.iconPrefixCls;
    const runtimeLocale = getConfirmLocale();
    return createVNode(ConfigProvider, _objectSpread(_objectSpread({}, global), {}, {
      "prefixCls": rootPrefixCls
    }), {
      default: () => [createVNode(ConfirmDialog, _objectSpread(_objectSpread({}, p), {}, {
        "rootPrefixCls": rootPrefixCls,
        "prefixCls": prefixCls,
        "iconPrefixCls": iconPrefixCls,
        "locale": runtimeLocale,
        "cancelText": p.cancelText || runtimeLocale.cancelText
      }), null)]
    });
  };
  function render$1(props2) {
    const vm = createVNode(Wrapper, _extends({}, props2));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    render(vm, container);
    return vm;
  }
  confirmDialogInstance = render$1(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
};
function withWarn(props2) {
  return _extends(_extends({}, props2), {
    type: "warning"
  });
}
function withInfo(props2) {
  return _extends(_extends({}, props2), {
    type: "info"
  });
}
function withSuccess(props2) {
  return _extends(_extends({}, props2), {
    type: "success"
  });
}
function withError(props2) {
  return _extends(_extends({}, props2), {
    type: "error"
  });
}
function withConfirm(props2) {
  return _extends(_extends({}, props2), {
    type: "confirm"
  });
}
const comfirmFuncProps = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
});
const HookModal = defineComponent({
  name: "HookModal",
  inheritAttrs: false,
  props: initDefaultProps(comfirmFuncProps(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    var _a;
    const open = computed(() => props2.open);
    const innerConfig = computed(() => props2.config);
    const {
      direction,
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = getPrefixCls("modal");
    const rootPrefixCls = getPrefixCls();
    const afterClose = () => {
      var _a2, _b;
      props2 === null || props2 === void 0 ? void 0 : props2.afterClose();
      (_b = (_a2 = innerConfig.value).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a2);
    };
    const close = function() {
      props2.destroyAction(...arguments);
    };
    expose({
      destroy: close
    });
    const mergedOkCancel = (_a = innerConfig.value.okCancel) !== null && _a !== void 0 ? _a : innerConfig.value.type === "confirm";
    const [contextLocale] = useLocaleReceiver("Modal", localeValues.Modal);
    return () => createVNode(ConfirmDialog, _objectSpread(_objectSpread({
      "prefixCls": prefixCls,
      "rootPrefixCls": rootPrefixCls
    }, innerConfig.value), {}, {
      "close": close,
      "open": open.value,
      "afterClose": afterClose,
      "okText": innerConfig.value.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.justOkText),
      "direction": innerConfig.value.direction || direction.value,
      "cancelText": innerConfig.value.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.cancelText)
    }), null);
  }
});
let uuid = 0;
const ElementsHolder = defineComponent({
  name: "ElementsHolder",
  inheritAttrs: false,
  setup(_, _ref) {
    let {
      expose
    } = _ref;
    const modals = shallowRef([]);
    const addModal = (modal) => {
      modals.value.push(modal);
      modals.value = modals.value.slice();
      return () => {
        modals.value = modals.value.filter((currentModal) => currentModal !== modal);
      };
    };
    expose({
      addModal
    });
    return () => {
      return modals.value.map((modal) => modal());
    };
  }
});
function useModal() {
  const holderRef = shallowRef(null);
  const actionQueue = shallowRef([]);
  watch(actionQueue, () => {
    if (actionQueue.value.length) {
      const cloneQueue = [...actionQueue.value];
      cloneQueue.forEach((action) => {
        action();
      });
      actionQueue.value = [];
    }
  }, {
    immediate: true
  });
  const getConfirmFunc = (withFunc) => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const open = shallowRef(true);
    const modalRef = shallowRef(null);
    const configRef = shallowRef(unref(config));
    const updateConfig = shallowRef({});
    watch(() => config, (val) => {
      updateAction(_extends(_extends({}, isRef(val) ? val.value : val), updateConfig.value));
    });
    const destroyAction = function() {
      open.value = false;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const triggerCancel = args.some((param) => param && param.triggerCancel);
      if (configRef.value.onCancel && triggerCancel) {
        configRef.value.onCancel(() => {
        }, ...args.slice(1));
      }
    };
    let closeFunc;
    const modal = () => createVNode(HookModal, {
      "key": `modal-${uuid}`,
      "config": withFunc(configRef.value),
      "ref": modalRef,
      "open": open.value,
      "destroyAction": destroyAction,
      "afterClose": () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      }
    }, null);
    closeFunc = (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.addModal(modal);
    if (closeFunc) {
      destroyFns.push(closeFunc);
    }
    const updateAction = (newConfig) => {
      configRef.value = _extends(_extends({}, configRef.value), newConfig);
    };
    const destroy = () => {
      if (modalRef.value) {
        destroyAction();
      } else {
        actionQueue.value = [...actionQueue.value, destroyAction];
      }
    };
    const update = (newConfig) => {
      updateConfig.value = newConfig;
      if (modalRef.value) {
        updateAction(newConfig);
      } else {
        actionQueue.value = [...actionQueue.value, () => updateAction(newConfig)];
      }
    };
    return {
      destroy,
      update
    };
  };
  const fns = computed(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }));
  const holderKey = /* @__PURE__ */ Symbol("modalHolderKey");
  return [fns.value, () => createVNode(ElementsHolder, {
    "key": holderKey,
    "ref": holderRef
  }, null)];
}
function modalWarn(props2) {
  return confirm(withWarn(props2));
}
Modal.useModal = useModal;
Modal.info = function infoFn(props2) {
  return confirm(withInfo(props2));
};
Modal.success = function successFn(props2) {
  return confirm(withSuccess(props2));
};
Modal.error = function errorFn(props2) {
  return confirm(withError(props2));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props2) {
  return confirm(withConfirm(props2));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.install = function(app) {
  app.component(Modal.name, Modal);
  return app;
};
function useIsMobile(breakpoint = 640) {
  const isMobile = ref(false);
  return readonly(isMobile);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WatchModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    media: {},
    initialSeason: {},
    initialEpisode: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props2 = __props;
    const emit = __emit;
    const isMobile = useIsMobile();
    const progressStore = useProgressStore();
    const season = ref(1);
    const episode = ref(1);
    watch(() => props2.open, (open) => {
      if (open && props2.media.type === "series") {
        if (props2.initialSeason) season.value = props2.initialSeason;
        if (props2.initialEpisode) episode.value = props2.initialEpisode;
        if (!props2.initialSeason && !props2.initialEpisode) {
          const last = progressStore.getLastEpisode(props2.media.tmdbId);
          if (last) {
            season.value = last.season;
            episode.value = last.episode;
          }
        }
      }
    }, { immediate: true });
    const seasonOptions = computed(
      () => Array.from({ length: props2.media.seasons || 1 }, (_, i) => ({
        value: i + 1,
        label: `Season ${i + 1}`
      }))
    );
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const { data: seasonData } = useApiFetch(
      () => props2.media.type === "series" ? `/tv/${props2.media.tmdbId}/season/${season.value}` : null
    );
    const episodeOptions = computed(() => {
      if (props2.media.type !== "series") return [];
      const episodes = seasonData.value?.episodes;
      if (episodes?.length) {
        return episodes.filter((e) => e.airDate && e.airDate <= today).map((e) => ({ value: e.episodeNumber, label: `Episode ${e.episodeNumber}` }));
      }
      const count = props2.media.episodes && props2.media.seasons ? Math.ceil(props2.media.episodes / props2.media.seasons) : 1;
      return Array.from({ length: count }, (_, i) => ({ value: i + 1, label: `Episode ${i + 1}` }));
    });
    watch(() => season.value, () => {
      episode.value = 1;
    });
    const iframeSrc = computed(() => {
      const base = props2.media.type === "series" ? `https://vidlink.pro/tv/${props2.media.tmdbId}/${season.value}/${episode.value}` : `https://vidlink.pro/movie/${props2.media.tmdbId}`;
      return `${base}?primaryColor=1677ff&title=false&autoplay=false&icons=vid`;
    });
    function close() {
      emit("update:open", false);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_drawer = __nuxt_component_0;
      const _component_a_select = Select;
      const _component_a_modal = Modal;
      if (unref(isMobile)) {
        _push(ssrRenderComponent(_component_a_drawer, mergeProps({
          open: __props.open,
          placement: "bottom",
          height: "auto",
          closable: false,
          "destroy-on-close": true,
          "mask-closable": true,
          class: "watch-drawer",
          onClose: close
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div class="flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3"${_scopeId}><div class="flex items-center gap-2.5 min-w-0"${_scopeId}><div class="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0"${_scopeId}><svg class="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path d="M8 5v14l11-7z"${_scopeId}></path></svg></div><span class="text-sm font-semibold text-white truncate"${_scopeId}>${ssrInterpolate(__props.media.title)}</span>`);
              if (__props.media.type === "series") {
                _push2(`<span class="text-xs text-white/40 flex-shrink-0"${_scopeId}>S${ssrInterpolate(unref(season))} · E${ssrInterpolate(unref(episode))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><button aria-label="Close player" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div>`);
              if (__props.media.type === "series") {
                _push2(`<div class="flex gap-2 px-4 py-2.5 border-b border-white/10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_a_select, {
                  value: unref(season),
                  "onUpdate:value": ($event) => isRef(season) ? season.value = $event : null,
                  options: unref(seasonOptions),
                  size: "small",
                  class: "flex-1",
                  "popup-class-name": "watch-select"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_select, {
                  value: unref(episode),
                  "onUpdate:value": ($event) => isRef(episode) ? episode.value = $event : null,
                  options: unref(episodeOptions),
                  size: "small",
                  class: "flex-1",
                  "popup-class-name": "watch-select"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="relative w-full" style="${ssrRenderStyle({ "aspect-ratio": "16/9" })}"${_scopeId}><iframe${ssrRenderAttr("title", `Watch ${__props.media.title}`)}${ssrRenderAttr("src", unref(iframeSrc))} class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture"${_scopeId}></iframe></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3" }, [
                    createVNode("div", { class: "flex items-center gap-2.5 min-w-0" }, [
                      createVNode("div", { class: "w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3.5 h-3.5 text-primary",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", { d: "M8 5v14l11-7z" })
                        ]))
                      ]),
                      createVNode("span", { class: "text-sm font-semibold text-white truncate" }, toDisplayString(__props.media.title), 1),
                      __props.media.type === "series" ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-white/40 flex-shrink-0"
                      }, "S" + toDisplayString(unref(season)) + " · E" + toDisplayString(unref(episode)), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("button", {
                      "aria-label": "Close player",
                      class: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors",
                      onClick: close
                    }, [
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
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ]))
                    ])
                  ]),
                  __props.media.type === "series" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex gap-2 px-4 py-2.5 border-b border-white/10"
                  }, [
                    createVNode(_component_a_select, {
                      value: unref(season),
                      "onUpdate:value": ($event) => isRef(season) ? season.value = $event : null,
                      options: unref(seasonOptions),
                      size: "small",
                      class: "flex-1",
                      "popup-class-name": "watch-select"
                    }, null, 8, ["value", "onUpdate:value", "options"]),
                    createVNode(_component_a_select, {
                      value: unref(episode),
                      "onUpdate:value": ($event) => isRef(episode) ? episode.value = $event : null,
                      options: unref(episodeOptions),
                      size: "small",
                      class: "flex-1",
                      "popup-class-name": "watch-select"
                    }, null, 8, ["value", "onUpdate:value", "options"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: "relative w-full",
                    style: { "aspect-ratio": "16/9" }
                  }, [
                    createVNode("iframe", {
                      title: `Watch ${__props.media.title}`,
                      src: unref(iframeSrc),
                      class: "absolute inset-0 w-full h-full",
                      frameborder: "0",
                      allowfullscreen: "",
                      allow: "autoplay; fullscreen; picture-in-picture"
                    }, null, 8, ["title", "src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_modal, mergeProps({
          open: __props.open,
          footer: null,
          closable: false,
          "destroy-on-close": true,
          "mask-closable": true,
          centered: "",
          width: "min(92vw, 1100px)",
          class: "watch-modal",
          onCancel: close
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#0a0a0a] rounded-xl overflow-hidden"${_scopeId}><div class="flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3"${_scopeId}><div class="flex items-center gap-2.5 min-w-0"${_scopeId}><div class="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0"${_scopeId}><svg class="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path d="M8 5v14l11-7z"${_scopeId}></path></svg></div><span class="text-sm font-semibold text-white truncate"${_scopeId}>${ssrInterpolate(__props.media.title)}</span>`);
              if (__props.media.type === "series") {
                _push2(`<span class="text-xs text-white/40 flex-shrink-0"${_scopeId}>S${ssrInterpolate(unref(season))} · E${ssrInterpolate(unref(episode))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center gap-2 flex-shrink-0"${_scopeId}>`);
              if (__props.media.type === "series") {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_a_select, {
                  value: unref(season),
                  "onUpdate:value": ($event) => isRef(season) ? season.value = $event : null,
                  options: unref(seasonOptions),
                  size: "small",
                  class: "!w-28",
                  "popup-class-name": "watch-select"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_select, {
                  value: unref(episode),
                  "onUpdate:value": ($event) => isRef(episode) ? episode.value = $event : null,
                  options: unref(episodeOptions),
                  size: "small",
                  class: "!w-28",
                  "popup-class-name": "watch-select"
                }, null, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button aria-label="Close player" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div></div><div class="relative w-full" style="${ssrRenderStyle({ "aspect-ratio": "16/9" })}"${_scopeId}><iframe${ssrRenderAttr("title", `Watch ${__props.media.title}`)}${ssrRenderAttr("src", unref(iframeSrc))} class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture"${_scopeId}></iframe></div></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#0a0a0a] rounded-xl overflow-hidden" }, [
                  createVNode("div", { class: "flex items-center justify-between px-4 py-3 border-b border-white/10 gap-3" }, [
                    createVNode("div", { class: "flex items-center gap-2.5 min-w-0" }, [
                      createVNode("div", { class: "w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-3.5 h-3.5 text-primary",
                          fill: "currentColor",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", { d: "M8 5v14l11-7z" })
                        ]))
                      ]),
                      createVNode("span", { class: "text-sm font-semibold text-white truncate" }, toDisplayString(__props.media.title), 1),
                      __props.media.type === "series" ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-white/40 flex-shrink-0"
                      }, "S" + toDisplayString(unref(season)) + " · E" + toDisplayString(unref(episode)), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2 flex-shrink-0" }, [
                      __props.media.type === "series" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_a_select, {
                          value: unref(season),
                          "onUpdate:value": ($event) => isRef(season) ? season.value = $event : null,
                          options: unref(seasonOptions),
                          size: "small",
                          class: "!w-28",
                          "popup-class-name": "watch-select"
                        }, null, 8, ["value", "onUpdate:value", "options"]),
                        createVNode(_component_a_select, {
                          value: unref(episode),
                          "onUpdate:value": ($event) => isRef(episode) ? episode.value = $event : null,
                          options: unref(episodeOptions),
                          size: "small",
                          class: "!w-28",
                          "popup-class-name": "watch-select"
                        }, null, 8, ["value", "onUpdate:value", "options"])
                      ], 64)) : createCommentVNode("", true),
                      createVNode("button", {
                        "aria-label": "Close player",
                        class: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors",
                        onClick: close
                      }, [
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
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "relative w-full",
                    style: { "aspect-ratio": "16/9" }
                  }, [
                    createVNode("iframe", {
                      title: `Watch ${__props.media.title}`,
                      src: unref(iframeSrc),
                      class: "absolute inset-0 w-full h-full",
                      frameborder: "0",
                      allowfullscreen: "",
                      allow: "autoplay; fullscreen; picture-in-picture"
                    }, null, 8, ["title", "src"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WatchModal.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main, { __name: "WatchModal" });

export { __nuxt_component_9 as _ };
//# sourceMappingURL=WatchModal-kUyGR5LH.mjs.map
