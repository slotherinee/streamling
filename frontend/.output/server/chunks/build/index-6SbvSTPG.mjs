import _objectSpread$2 from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { createVNode, defineComponent, ref, watch, computed, watchEffect, provide, shallowRef, inject, unref, Fragment, Teleport, getCurrentInstance, toRaw, toRef, Transition, withDirectives, vShow, toRefs } from 'vue';
import { o as omit, w as wrapperRaf, R as ResizeObserver, c as cloneElement, T as Trigger } from './motion-DJBbJh9Y.mjs';
import { u as useMergedState, i as initSlideMotion, K as KeyCode, O as Overflow } from './slide-C57riDBP.mjs';
import { I as Icon, z as flattenChildren, a2 as initDefaultProps, a5 as isValidElement, l as camelize, v as devWarning, al as useConfigInject, aA as useState, b as CloseOutlined, o as classNames, j as arrayType, e as PropTypes, A as functionType, a9 as objectType, af as stringType, k as booleanType, ae as someType, G as genComponentStyleHook, a7 as merge, ah as toPx, aa as resetComponent, ag as textEllipsis, J as genFocusStyle, ad as skipFlattenKey, a4 as isValid, p as clearFix, T as getPropsSlot, ab as resetIcon, H as genFocusOutline, $ as getTransitionProps } from './server.mjs';
import uniq from 'lodash-es/uniq.js';
import { c as collapseMotion, T as Tooltip, g as genCollapseMotion } from './collapseMotion-CIsPMioQ.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { i as initZoomMotion } from './zoom-ByxQdbsR.mjs';
import pick from 'lodash-es/pick.js';

// This icon file is generated automatically.
var EllipsisOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EllipsisOutlined = function EllipsisOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": EllipsisOutlined$1
  }), null);
};

EllipsisOutlined.displayName = 'EllipsisOutlined';
EllipsisOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var PlusOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlusOutlined = function PlusOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": PlusOutlined$1
  }), null);
};

PlusOutlined.displayName = 'PlusOutlined';
PlusOutlined.inheritAttrs = false;

const autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
const targetOffset = [0, 0];
const placements$1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  }
};
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Dropdown = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: PropTypes.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: PropTypes.string.def(""),
    openClassName: String,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: PropTypes.string.def("bottomLeft"),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(props, _ref) {
    let {
      slots,
      emit,
      expose
    } = _ref;
    const triggerVisible = ref(!!props.visible);
    watch(() => props.visible, (val) => {
      if (val !== void 0) {
        triggerVisible.value = val;
      }
    });
    const triggerRef = ref();
    expose({
      triggerRef
    });
    const onClick = (e) => {
      if (props.visible === void 0) {
        triggerVisible.value = false;
      }
      emit("overlayClick", e);
    };
    const onVisibleChange = (visible) => {
      if (props.visible === void 0) {
        triggerVisible.value = visible;
      }
      emit("visibleChange", visible);
    };
    const getMenuElement = () => {
      var _a;
      const overlayElement = (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots);
      const extraOverlayProps = {
        prefixCls: `${props.prefixCls}-menu`,
        onClick
      };
      return createVNode(Fragment, {
        "key": skipFlattenKey
      }, [props.arrow && createVNode("div", {
        "class": `${props.prefixCls}-arrow`
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    const minOverlayWidthMatchTrigger = computed(() => {
      const {
        minOverlayWidthMatchTrigger: matchTrigger = !props.alignPoint
      } = props;
      return matchTrigger;
    });
    const renderChildren = () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props.openClassName || `${props.prefixCls}-open`
      }, false) : children;
    };
    const triggerHideAction = computed(() => {
      if (!props.hideAction && props.trigger.indexOf("contextmenu") !== -1) {
        return ["click"];
      }
      return props.hideAction;
    });
    return () => {
      const {
        prefixCls,
        arrow,
        showAction,
        overlayStyle,
        trigger,
        placement,
        align,
        getPopupContainer,
        transitionName,
        animation,
        overlayClassName
      } = props, otherProps = __rest$1(props, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return createVNode(Trigger, _objectSpread$2(_objectSpread$2({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, {
          [`${prefixCls}-show-arrow`]: arrow
        }),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements$1,
        "action": trigger,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? "minWidth" : "",
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren
      });
    };
  }
});
const OverrideContextKey = /* @__PURE__ */ Symbol("OverrideContextKey");
const useInjectOverride = () => {
  return inject(OverrideContextKey, void 0);
};
const useProvideOverride = (props) => {
  var _a, _b, _c;
  const {
    prefixCls,
    mode,
    selectable,
    validator,
    onClick,
    expandIcon
  } = useInjectOverride() || {};
  provide(OverrideContextKey, {
    prefixCls: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.prefixCls) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : prefixCls === null || prefixCls === void 0 ? void 0 : prefixCls.value;
    }),
    mode: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.mode) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : mode === null || mode === void 0 ? void 0 : mode.value;
    }),
    selectable: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.selectable) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : selectable === null || selectable === void 0 ? void 0 : selectable.value;
    }),
    validator: (_a = props.validator) !== null && _a !== void 0 ? _a : validator,
    onClick: (_b = props.onClick) !== null && _b !== void 0 ? _b : onClick,
    expandIcon: (_c = props.expandIcon) !== null && _c !== void 0 ? _c : expandIcon === null || expandIcon === void 0 ? void 0 : expandIcon.value
  });
};
function shallowEqual(objA, objB, compare, compareContext) {
  let ret = void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    ret = void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function shallowequal(value, other) {
  return shallowEqual(toRaw(value), toRaw(other));
}
const MenuContextKey = /* @__PURE__ */ Symbol("menuContextKey");
const useProvideMenu = (props) => {
  provide(MenuContextKey, props);
};
const useInjectMenu = () => {
  return inject(MenuContextKey);
};
const ForceRenderKey = /* @__PURE__ */ Symbol("ForceRenderKey");
const useProvideForceRender = (forceRender) => {
  provide(ForceRenderKey, forceRender);
};
const useInjectForceRender = () => {
  return inject(ForceRenderKey, false);
};
const MenuFirstLevelContextKey = /* @__PURE__ */ Symbol("menuFirstLevelContextKey");
const useProvideFirstLevel = (firstLevel) => {
  provide(MenuFirstLevelContextKey, firstLevel);
};
const useInjectFirstLevel = () => {
  return inject(MenuFirstLevelContextKey, true);
};
const MenuContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const menuContext = useInjectMenu();
    const newContext = _extends({}, menuContext);
    if (props.mode !== void 0) {
      newContext.mode = toRef(props, "mode");
    }
    if (props.overflowDisabled !== void 0) {
      newContext.overflowDisabled = toRef(props, "overflowDisabled");
    }
    useProvideMenu(newContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const SiderCollapsedKey = /* @__PURE__ */ Symbol("siderCollapsed");
const OVERFLOW_KEY = "$$__vc-menu-more__key";
const KeyPathContext = /* @__PURE__ */ Symbol("KeyPathContext");
const useInjectKeyPath = () => {
  return inject(KeyPathContext, {
    parentEventKeys: computed(() => []),
    parentKeys: computed(() => []),
    parentInfo: {}
  });
};
const useProvideKeyPath = (eventKey, key, menuInfo) => {
  const {
    parentEventKeys,
    parentKeys
  } = useInjectKeyPath();
  const eventKeys = computed(() => [...parentEventKeys.value, eventKey]);
  const keys = computed(() => [...parentKeys.value, key]);
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};
const measure = /* @__PURE__ */ Symbol("measure");
const PathContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup(_props, _ref) {
    let {
      slots
    } = _ref;
    provide(measure, true);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useMeasure = () => {
  return inject(measure, false);
};
function useDirectionStyle(level) {
  const {
    mode,
    rtl,
    inlineIndent
  } = useInjectMenu();
  return computed(() => mode.value !== "inline" ? null : rtl.value ? {
    paddingRight: `${level.value * inlineIndent.value}px`
  } : {
    paddingLeft: `${level.value * inlineIndent.value}px`
  });
}
let indexGuid$1 = 0;
const menuItemProps = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: PropTypes.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: objectType()
});
const MenuItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: false,
  props: menuItemProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const instance = getCurrentInstance();
    const isMeasure = useMeasure();
    const key = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "MenuItem", `MenuItem \`:key="${String(key)}"\` not support Symbol type`);
    const eventKey = `menu_item_${++indexGuid$1}_$$_${key}`;
    const {
      parentEventKeys,
      parentKeys
    } = useInjectKeyPath();
    const {
      prefixCls,
      activeKeys,
      disabled,
      changeActiveKeys,
      rtl,
      inlineCollapsed,
      siderCollapsed,
      onItemClick,
      selectedKeys,
      registerMenuInfo,
      unRegisterMenuInfo
    } = useInjectMenu();
    const firstLevel = useInjectFirstLevel();
    const isActive = shallowRef(false);
    const keysPath = computed(() => {
      return [...parentKeys.value, key];
    });
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const mergedDisabled = computed(() => disabled.value || props.disabled);
    const selected = computed(() => selectedKeys.value.includes(key));
    const classNames2 = computed(() => {
      const itemCls = `${prefixCls.value}-item`;
      return {
        [`${itemCls}`]: true,
        [`${itemCls}-danger`]: props.danger,
        [`${itemCls}-active`]: isActive.value,
        [`${itemCls}-selected`]: selected.value,
        [`${itemCls}-disabled`]: mergedDisabled.value
      };
    });
    const getEventInfo = (e) => {
      return {
        key,
        eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [...parentEventKeys.value, eventKey],
        domEvent: e,
        item: _extends(_extends({}, props), attrs)
      };
    };
    const onInternalClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      const info = getEventInfo(e);
      emit("click", e);
      onItemClick(info);
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const onInternalKeyDown = (e) => {
      emit("keydown", e);
      if (e.which === KeyCode.ENTER) {
        const info = getEventInfo(e);
        emit("click", e);
        onItemClick(info);
      }
    };
    const onInternalFocus = (e) => {
      changeActiveKeys(keysPath.value);
      emit("focus", e);
    };
    const renderItemChildren = (icon, children) => {
      const wrapNode = createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [children]);
      if (!icon || isValidElement(children) && children.type === "span") {
        if (children && inlineCollapsed.value && firstLevel && typeof children === "string") {
          return createVNode("div", {
            "class": `${prefixCls.value}-inline-collapsed-noicon`
          }, [children.charAt(0)]);
        }
      }
      return wrapNode;
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    return () => {
      var _a, _b, _c, _d, _e;
      if (isMeasure) return null;
      const title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      const children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      const childrenLength = children.length;
      let tooltipTitle = title;
      if (typeof title === "undefined") {
        tooltipTitle = firstLevel && childrenLength ? children : "";
      } else if (title === false) {
        tooltipTitle = "";
      }
      const tooltipProps = {
        title: tooltipTitle
      };
      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps.title = null;
        tooltipProps.open = false;
      }
      const optionRoleProps = {};
      if (props.role === "option") {
        optionRoleProps["aria-selected"] = selected.value;
      }
      const icon = (_d = props.icon) !== null && _d !== void 0 ? _d : (_e = slots.icon) === null || _e === void 0 ? void 0 : _e.call(slots, props);
      return createVNode(Tooltip, _objectSpread$2(_objectSpread$2({}, tooltipProps), {}, {
        "placement": rtl.value ? "left" : "right",
        "overlayClassName": `${prefixCls.value}-inline-collapsed-tooltip`
      }), {
        default: () => [createVNode(Overflow.Item, _objectSpread$2(_objectSpread$2(_objectSpread$2({
          "component": "li"
        }, attrs), {}, {
          "id": props.id,
          "style": _extends(_extends({}, attrs.style || {}), directionStyle.value),
          "class": [classNames2.value, {
            [`${attrs.class}`]: !!attrs.class,
            [`${prefixCls.value}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
          }],
          "role": props.role || "menuitem",
          "tabindex": props.disabled ? null : -1,
          "data-menu-id": key,
          "aria-disabled": props.disabled
        }, optionRoleProps), {}, {
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "onClick": onInternalClick,
          "onKeydown": onInternalKeyDown,
          "onFocus": onInternalFocus,
          "title": typeof title === "string" ? title : void 0
        }), {
          default: () => [cloneElement(typeof icon === "function" ? icon(props.originItemValue) : icon, {
            class: `${prefixCls.value}-item-icon`
          }, false), renderItemChildren(icon, children)]
        })]
      });
    };
  }
});
const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
const placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
const PopupTrigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: Object,
  emits: ["visibleChange"],
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const innerVisible = shallowRef(false);
    const {
      getPopupContainer,
      rtl,
      subMenuOpenDelay,
      subMenuCloseDelay,
      builtinPlacements,
      triggerSubMenuAction,
      forceSubMenuRender,
      motion,
      defaultMotions,
      rootClassName
    } = useInjectMenu();
    const forceRender = useInjectForceRender();
    const placement = computed(() => rtl.value ? _extends(_extends({}, placementsRtl), builtinPlacements.value) : _extends(_extends({}, placements), builtinPlacements.value));
    const popupPlacement = computed(() => popupPlacementMap[props.mode]);
    const visibleRef = shallowRef();
    watch(() => props.visible, (visible) => {
      wrapperRaf.cancel(visibleRef.value);
      visibleRef.value = wrapperRaf(() => {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    const onVisibleChange = (visible) => {
      emit("visibleChange", visible);
    };
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[props.mode]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return res ? getTransitionProps(res.name, {
        css: true
      }) : void 0;
    });
    return () => {
      const {
        prefixCls,
        popupClassName,
        mode,
        popupOffset,
        disabled
      } = props;
      return createVNode(Trigger, {
        "prefixCls": prefixCls,
        "popupClassName": classNames(`${prefixCls}-popup`, {
          [`${prefixCls}-rtl`]: rtl.value
        }, popupClassName, rootClassName.value),
        "stretch": mode === "horizontal" ? "minWidth" : null,
        "getPopupContainer": getPopupContainer.value,
        "builtinPlacements": placement.value,
        "popupPlacement": popupPlacement.value,
        "popupVisible": innerVisible.value,
        "popupAlign": popupOffset && {
          offset: popupOffset
        },
        "action": disabled ? [] : [triggerSubMenuAction.value],
        "mouseEnterDelay": subMenuOpenDelay.value,
        "mouseLeaveDelay": subMenuCloseDelay.value,
        "onPopupVisibleChange": onVisibleChange,
        "forceRender": forceRender || forceSubMenuRender.value,
        "popupAnimation": mergedMotion.value
      }, {
        popup: slots.popup,
        default: slots.default
      });
    };
  }
});
const InternalSubMenuList = (_props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  var _a;
  const {
    prefixCls,
    mode
  } = useInjectMenu();
  return createVNode("ul", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
    "class": classNames(prefixCls.value, `${prefixCls.value}-sub`, `${prefixCls.value}-${mode.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": true
  }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
InternalSubMenuList.displayName = "SubMenuList";
const InlineSubMenuList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const fixedMode = computed(() => "inline");
    const {
      motion,
      mode,
      defaultMotions
    } = useInjectMenu();
    const sameModeRef = computed(() => mode.value === fixedMode.value);
    const destroy = ref(!sameModeRef.value);
    const mergedOpen = computed(() => sameModeRef.value ? props.open : false);
    watch(mode, () => {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: "post"
    });
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return _extends(_extends({}, res), {
        appear: props.keyPath.length <= 1
      });
    });
    return () => {
      var _a;
      if (destroy.value) {
        return null;
      }
      return createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: () => [createVNode(Transition, mergedMotion.value, {
          default: () => [withDirectives(createVNode(InternalSubMenuList, {
            "id": props.id
          }, {
            default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
          }), [[vShow, mergedOpen.value]])]
        })]
      });
    };
  }
});
let indexGuid = 0;
const subMenuProps = () => ({
  icon: PropTypes.any,
  title: PropTypes.any,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function,
  theme: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onTitleClick: Function,
  // Internal user prop
  originItemValue: objectType()
});
const SubMenu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: false,
  props: subMenuProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    var _a, _b;
    useProvideFirstLevel(false);
    const isMeasure = useMeasure();
    const instance = getCurrentInstance();
    const vnodeKey = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "SubMenu", `SubMenu \`:key="${String(vnodeKey)}"\` not support Symbol type`);
    const key = isValid(vnodeKey) ? vnodeKey : `sub_menu_${++indexGuid}_$$_not_set_key`;
    const eventKey = (_a = props.eventKey) !== null && _a !== void 0 ? _a : isValid(vnodeKey) ? `sub_menu_${++indexGuid}_$$_${vnodeKey}` : key;
    const {
      parentEventKeys,
      parentInfo,
      parentKeys
    } = useInjectKeyPath();
    const keysPath = computed(() => [...parentKeys.value, key]);
    const childrenEventKeys = shallowRef([]);
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      childrenEventKeys,
      parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    useProvideKeyPath(eventKey, key, menuInfo);
    const {
      prefixCls,
      activeKeys,
      disabled: contextDisabled,
      changeActiveKeys,
      mode,
      inlineCollapsed,
      openKeys,
      overflowDisabled,
      onOpenChange,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon: menuExpandIcon,
      theme
    } = useInjectMenu();
    const hasKey = vnodeKey !== void 0 && vnodeKey !== null;
    const forceRender = !isMeasure && (useInjectForceRender() || !hasKey);
    useProvideForceRender(forceRender);
    if (isMeasure && hasKey || !isMeasure && !hasKey || forceRender) {
      registerMenuInfo(eventKey, menuInfo);
    }
    const subMenuPrefixCls = computed(() => `${prefixCls.value}-submenu`);
    const mergedDisabled = computed(() => contextDisabled.value || props.disabled);
    const elementRef = shallowRef();
    const popupRef = shallowRef();
    const originOpen = computed(() => openKeys.value.includes(key));
    const open = computed(() => !overflowDisabled.value && originOpen.value);
    const childrenSelected = computed(() => {
      return selectedSubMenuKeys.value.includes(key);
    });
    const isActive = shallowRef(false);
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const onInternalTitleClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      emit("titleClick", e, key);
      if (mode.value === "inline") {
        onOpenChange(key, !originOpen.value);
      }
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    const onPopupVisibleChange = (newVisible) => {
      if (mode.value !== "inline") {
        onOpenChange(key, newVisible);
      }
    };
    const onInternalFocus = () => {
      changeActiveKeys(keysPath.value);
    };
    const popupId = eventKey && `${eventKey}-popup`;
    const popupClassName = computed(() => classNames(prefixCls.value, `${prefixCls.value}-${props.theme || theme.value}`, props.popupClassName));
    const renderTitle = (title, icon) => {
      if (!icon) {
        return inlineCollapsed.value && !parentKeys.value.length && title && typeof title === "string" ? createVNode("div", {
          "class": `${prefixCls.value}-inline-collapsed-noicon`
        }, [title.charAt(0)]) : createVNode("span", {
          "class": `${prefixCls.value}-title-content`
        }, [title]);
      }
      const titleIsSpan = isValidElement(title) && title.type === "span";
      return createVNode(Fragment, null, [cloneElement(typeof icon === "function" ? icon(props.originItemValue) : icon, {
        class: `${prefixCls.value}-item-icon`
      }, false), titleIsSpan ? title : createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [title])]);
    };
    const triggerModeRef = computed(() => {
      return mode.value !== "inline" && keysPath.value.length > 1 ? "vertical" : mode.value;
    });
    const renderMode = computed(() => mode.value === "horizontal" ? "vertical" : mode.value);
    const subMenuTriggerModeRef = computed(() => triggerModeRef.value === "horizontal" ? "vertical" : triggerModeRef.value);
    const baseTitleNode = () => {
      var _a2, _b2;
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      const icon = (_a2 = props.icon) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.icon) === null || _b2 === void 0 ? void 0 : _b2.call(slots, props);
      const expandIcon = props.expandIcon || slots.expandIcon || menuExpandIcon.value;
      const title = renderTitle(getPropsSlot(slots, props, "title"), icon);
      return createVNode("div", {
        "style": directionStyle.value,
        "class": `${subMenuPrefixClsValue}-title`,
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === "string" ? title : null,
        "data-menu-id": key,
        "aria-expanded": open.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== "horizontal" && expandIcon ? expandIcon(_extends(_extends({}, props), {
        isOpen: open.value
      })) : createVNode("i", {
        "class": `${subMenuPrefixClsValue}-arrow`
      }, null)]);
    };
    return () => {
      var _a2;
      if (isMeasure) {
        if (!hasKey) {
          return null;
        }
        return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
      }
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      let titleNode = () => null;
      if (!overflowDisabled.value && mode.value !== "inline") {
        const popupOffset = mode.value === "horizontal" ? [0, 8] : [10, 0];
        titleNode = () => createVNode(PopupTrigger, {
          "mode": triggerModeRef.value,
          "prefixCls": subMenuPrefixClsValue,
          "visible": !props.internalPopupClose && open.value,
          "popupClassName": popupClassName.value,
          "popupOffset": props.popupOffset || popupOffset,
          "disabled": mergedDisabled.value,
          "onVisibleChange": onPopupVisibleChange
        }, {
          default: () => [baseTitleNode()],
          popup: () => createVNode(MenuContextProvider, {
            "mode": subMenuTriggerModeRef.value
          }, {
            default: () => [createVNode(InternalSubMenuList, {
              "id": popupId,
              "ref": popupRef
            }, {
              default: slots.default
            })]
          })
        });
      } else {
        titleNode = () => createVNode(PopupTrigger, null, {
          default: baseTitleNode
        });
      }
      return createVNode(MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: () => [createVNode(Overflow.Item, _objectSpread$2(_objectSpread$2({
          "component": "li"
        }, attrs), {}, {
          "role": "none",
          "class": classNames(subMenuPrefixClsValue, `${subMenuPrefixClsValue}-${mode.value}`, attrs.class, {
            [`${subMenuPrefixClsValue}-open`]: open.value,
            [`${subMenuPrefixClsValue}-active`]: isActive.value,
            [`${subMenuPrefixClsValue}-selected`]: childrenSelected.value,
            [`${subMenuPrefixClsValue}-disabled`]: mergedDisabled.value
          }),
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "data-submenu-id": key
        }), {
          default: () => {
            return createVNode(Fragment, null, [titleNode(), !overflowDisabled.value && createVNode(InlineSubMenuList, {
              "id": popupId,
              "open": open.value,
              "keyPath": keysPath.value
            }, {
              default: slots.default
            })]);
          }
        })]
      });
    };
  }
});
const menuItemGroupProps = () => ({
  title: PropTypes.any,
  // Internal user prop
  originItemValue: objectType()
});
const ItemGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: false,
  props: menuItemGroupProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useInjectMenu();
    const groupPrefixCls = computed(() => `${prefixCls.value}-item-group`);
    const isMeasure = useMeasure();
    return () => {
      var _a, _b;
      if (isMeasure) return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return createVNode("li", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "onClick": (e) => e.stopPropagation(),
        "class": groupPrefixCls.value
      }), [createVNode("div", {
        "title": typeof props.title === "string" ? props.title : void 0,
        "class": `${groupPrefixCls.value}-title`
      }, [getPropsSlot(slots, props, "title")]), createVNode("ul", {
        "class": `${groupPrefixCls.value}-list`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)])]);
    };
  }
});
const menuDividerProps = () => ({
  prefixCls: String,
  dashed: Boolean
});
const Divider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: menuDividerProps(),
  setup(props) {
    const {
      prefixCls
    } = useInjectMenu();
    const cls = computed(() => {
      return {
        [`${prefixCls.value}-item-divider`]: true,
        [`${prefixCls.value}-item-divider-dashed`]: !!props.dashed
      };
    });
    return () => {
      return createVNode("li", {
        "class": cls.value
      }, null);
    };
  }
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function convertItemsToNodes(list, store, parentMenuInfo) {
  return (list || []).map((opt, index) => {
    if (opt && typeof opt === "object") {
      const _a = opt, {
        label,
        children,
        key,
        type
      } = _a, restProps = __rest(_a, ["label", "children", "key", "type"]);
      const mergedKey = key !== null && key !== void 0 ? key : `tmp-${index}`;
      const parentKeys = parentMenuInfo ? parentMenuInfo.parentKeys.slice() : [];
      const childrenEventKeys = [];
      const menuInfo = {
        eventKey: mergedKey,
        key: mergedKey,
        parentEventKeys: ref(parentKeys),
        parentKeys: ref(parentKeys),
        childrenEventKeys: ref(childrenEventKeys),
        isLeaf: false
      };
      if (children || type === "group") {
        if (type === "group") {
          const childrenNodes2 = convertItemsToNodes(children, store, parentMenuInfo);
          return createVNode(ItemGroup, _objectSpread$2(_objectSpread$2({
            "key": mergedKey
          }, restProps), {}, {
            "title": label,
            "originItemValue": opt
          }), {
            default: () => [childrenNodes2]
          });
        }
        store.set(mergedKey, menuInfo);
        if (parentMenuInfo) {
          parentMenuInfo.childrenEventKeys.push(mergedKey);
        }
        const childrenNodes = convertItemsToNodes(children, store, {
          childrenEventKeys,
          parentKeys: [].concat(parentKeys, mergedKey)
        });
        return createVNode(SubMenu, _objectSpread$2(_objectSpread$2({
          "key": mergedKey
        }, restProps), {}, {
          "title": label,
          "originItemValue": opt
        }), {
          default: () => [childrenNodes]
        });
      }
      if (type === "divider") {
        return createVNode(Divider, _objectSpread$2({
          "key": mergedKey
        }, restProps), null);
      }
      menuInfo.isLeaf = true;
      store.set(mergedKey, menuInfo);
      return createVNode(MenuItem, _objectSpread$2(_objectSpread$2({
        "key": mergedKey
      }, restProps), {}, {
        "originItemValue": opt
      }), {
        default: () => [label]
      });
    }
    return null;
  }).filter((opt) => opt);
}
function useItems(props) {
  const itemsNodes = shallowRef([]);
  const hasItmes = shallowRef(false);
  const store = shallowRef(/* @__PURE__ */ new Map());
  watch(() => props.items, () => {
    const newStore = /* @__PURE__ */ new Map();
    hasItmes.value = false;
    if (props.items) {
      hasItmes.value = true;
      itemsNodes.value = convertItemsToNodes(props.items, newStore);
    } else {
      itemsNodes.value = void 0;
    }
    store.value = newStore;
  }, {
    immediate: true,
    deep: true
  });
  return {
    itemsNodes,
    store,
    hasItmes
  };
}
const getHorizontalStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    menuHorizontalHeight,
    colorSplit,
    lineWidth,
    lineType,
    menuItemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: `${menuHorizontalHeight}px`,
      border: 0,
      borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: menuItemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
};
const getRTLStyle = (_ref) => {
  let {
    componentCls,
    menuArrowOffset
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const accessibilityFocus = (token) => _extends({}, genFocusOutline(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    colorItemText,
    colorItemTextSelected,
    colorGroupTitle,
    colorItemBg,
    colorSubItemBg,
    colorItemBgSelected,
    colorActiveBarHeight,
    colorActiveBarWidth,
    colorActiveBarBorderSize,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    menuItemPaddingInline,
    motionDurationMid,
    colorItemTextHover,
    lineType,
    colorSplit,
    // Disabled
    colorItemTextDisabled,
    // Danger
    colorDangerItemText,
    colorDangerItemTextHover,
    colorDangerItemTextSelected,
    colorDangerItemBgActive,
    colorDangerItemBgSelected,
    colorItemBgHover,
    menuSubMenuBg,
    // Horizontal
    colorItemTextSelectedHorizontal,
    colorItemBgSelectedHorizontal
  } = token;
  return {
    [`${componentCls}-${themeSuffix}`]: {
      color: colorItemText,
      background: colorItemBg,
      [`&${componentCls}-root:focus-visible`]: _extends({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: colorGroupTitle
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: colorItemTextSelected
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${colorItemTextDisabled} !important`
      },
      // Hover
      [`${componentCls}-item:hover, ${componentCls}-submenu-title:hover`]: {
        [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
          color: colorItemTextHover
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        },
        [`${componentCls}-submenu-title`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: colorDangerItemText,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: colorDangerItemTextHover
          }
        },
        [`&${componentCls}-item:active`]: {
          background: colorDangerItemBgActive
        }
      },
      [`${componentCls}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${componentCls}-item-selected`]: {
        color: colorItemTextSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: colorDangerItemTextSelected
        },
        [`a, a:hover`]: {
          color: "inherit"
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: colorItemBgSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: colorDangerItemBgSelected
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: _extends({}, accessibilityFocus(token))
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: colorItemBg
      },
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: _extends(_extends({}, themeSuffix === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: colorActiveBarBorderSize,
          marginTop: -colorActiveBarBorderSize,
          marginBottom: 0,
          borderRadius: 0,
          "&::after": {
            position: "absolute",
            insetInline: menuItemPaddingInline,
            bottom: 0,
            borderBottom: `${colorActiveBarHeight}px solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          },
          [`&-selected`]: {
            color: colorItemTextSelectedHorizontal,
            backgroundColor: colorItemBgSelectedHorizontal,
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${colorActiveBarBorderSize}px ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: colorSubItemBg
        },
        // Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: colorActiveBarBorderSize && colorActiveBarWidth ? {
          width: `calc(100% + ${colorActiveBarBorderSize}px)`
        } : {},
        [`${componentCls}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${colorActiveBarWidth}px solid ${colorItemTextSelected}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(","),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: colorDangerItemTextSelected
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(",")
          }
        }
      }
    }
  };
};
const getVerticalInlineStyle = (token) => {
  const {
    componentCls,
    menuItemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    marginXXS
  } = token;
  const paddingWithArrow = padding + menuArrowSize + marginXS;
  return {
    [`${componentCls}-item`]: {
      position: "relative"
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`,
      paddingInline: padding,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: itemMarginInline,
      marginBlock: marginXXS,
      width: `calc(100% - ${itemMarginInline * 2}px)`
    },
    // disable margin collapsed
    [`${componentCls}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = (token) => {
  const {
    componentCls,
    iconCls,
    menuItemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    fontSizeSM,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary
  } = token;
  const inlineItemStyle = {
    height: menuItemHeight,
    lineHeight: `${menuItemHeight}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [componentCls]: {
        [`&-inline, &-vertical`]: _extends({
          [`&${componentCls}-root`]: {
            boxShadow: "none"
          }
        }, getVerticalInlineStyle(token))
      },
      [`${componentCls}-submenu-popup`]: {
        [`${componentCls}-vertical`]: _extends(_extends({}, getVerticalInlineStyle(token)), {
          boxShadow: boxShadowSecondary
        })
      }
    },
    // Vertical only
    {
      [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
        minWidth: dropdownWidth,
        maxHeight: `calc(100vh - ${controlHeightLG * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${componentCls}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`].join(","),
            [`> ${componentCls}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
          [`& ${componentCls}-item-group-title`]: {
            paddingInlineStart: paddingXL
          }
        },
        // >>>>> Item
        [`${componentCls}-item`]: inlineItemStyle
      }
    },
    // Inline Collapse Only
    {
      [`${componentCls}-inline-collapsed`]: {
        width: menuItemHeight * 2,
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
            [`> ${componentCls}-inline-collapsed-noicon`]: {
              fontSize: fontSizeLG,
              textAlign: "center"
            }
          }
        },
        [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${fontSizeSM}px)`,
          textOverflow: "clip",
          [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${componentCls}-item-icon, ${iconCls}`]: {
            margin: 0,
            fontSize: fontSizeLG,
            lineHeight: `${menuItemHeight}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${componentCls}-item-icon, ${iconCls}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: colorTextLightSolid
          }
        },
        [`${componentCls}-item-group-title`]: _extends(_extends({}, textEllipsis), {
          paddingInline: paddingXS
        })
      }
    }
  ];
};
const genMenuItemStyle = (token) => {
  const {
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    controlHeightSM
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(","),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: fontSize,
        fontSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(","),
        "+ span": {
          marginInlineStart: controlHeightSM - fontSize,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(",")
        }
      },
      [`${componentCls}-item-icon`]: _extends({}, resetIcon()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${componentCls}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
};
const genSubMenuArrowStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: "absolute",
        top: "50%",
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: "currentcolor",
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const getBaseStyle = (token) => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    lineHeight,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    radiusSubMenuItem,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset
  } = token;
  return [
    // Misc
    {
      "": {
        [`${componentCls}`]: _extends(_extends({}, clearFix()), {
          // Hidden
          [`&-hidden`]: {
            display: "none"
          }
        })
      },
      [`${componentCls}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), clearFix()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
        [`ul, ol`]: {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        [`&-overflow`]: {
          display: "flex",
          [`${componentCls}-item`]: {
            flex: "none"
          }
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.radiusItem
        },
        [`${componentCls}-item-group-title`]: {
          padding: `${paddingXS}px ${padding}px`,
          fontSize,
          lineHeight,
          transition: `all ${motionDurationSlow}`
        },
        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: "initial",
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`
        },
        [`${componentCls}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), genMenuItemStyle(token)), {
        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${fontSize * 2}px ${padding}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: zIndexPopup,
            background: "transparent",
            borderRadius: borderRadiusLG,
            boxShadow: "none",
            transformOrigin: "0 0",
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${menuPanelMaskInset}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: menuPanelMaskInset
          },
          [`> ${componentCls}`]: _extends(_extends(_extends({
            borderRadius: borderRadiusLG
          }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: radiusSubMenuItem
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          })
        }
      }), genSubMenuArrowStyle(token)), {
        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${menuArrowOffset})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${menuArrowOffset})`
          }
        },
        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${menuArrowSize * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${menuArrowOffset})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${menuArrowOffset})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${antCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
};
const useStyle$1 = ((prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook("Menu", (token, _ref) => {
    let {
      overrideComponentToken
    } = _ref;
    if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
      return [];
    }
    const {
      colorBgElevated,
      colorPrimary,
      colorError,
      colorErrorHover,
      colorTextLightSolid
    } = token;
    const {
      controlHeightLG,
      fontSize
    } = token;
    const menuArrowSize = fontSize / 7 * 5;
    const menuToken = merge(token, {
      menuItemHeight: controlHeightLG,
      menuItemPaddingInline: token.margin,
      menuArrowSize,
      menuHorizontalHeight: controlHeightLG * 1.15,
      menuArrowOffset: `${menuArrowSize * 0.25}px`,
      menuPanelMaskInset: -7,
      menuSubMenuBg: colorBgElevated
    });
    const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
    const menuDarkToken = merge(menuToken, {
      colorItemText: colorTextDark,
      colorItemTextHover: colorTextLightSolid,
      colorGroupTitle: colorTextDark,
      colorItemTextSelected: colorTextLightSolid,
      colorItemBg: "#001529",
      colorSubItemBg: "#000c17",
      colorItemBgActive: "transparent",
      colorItemBgSelected: colorPrimary,
      colorActiveBarWidth: 0,
      colorActiveBarHeight: 0,
      colorActiveBarBorderSize: 0,
      // Disabled
      colorItemTextDisabled: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorErrorHover,
      colorDangerItemTextSelected: colorTextLightSolid,
      colorDangerItemBgActive: colorError,
      colorDangerItemBgSelected: colorError,
      menuSubMenuBg: "#001529",
      // Horizontal
      colorItemTextSelectedHorizontal: colorTextLightSolid,
      colorItemBgSelectedHorizontal: colorPrimary
    }, _extends({}, overrideComponentToken));
    return [
      // Basic
      getBaseStyle(menuToken),
      // Horizontal
      getHorizontalStyle(menuToken),
      // Vertical
      getVerticalStyle(menuToken),
      // Theme
      getThemeStyle(menuToken, "light"),
      getThemeStyle(menuDarkToken, "dark"),
      // RTL
      getRTLStyle(menuToken),
      // Motion
      genCollapseMotion(menuToken),
      initSlideMotion(menuToken, "slide-up"),
      initSlideMotion(menuToken, "slide-down"),
      initZoomMotion(menuToken, "zoom-big")
    ];
  }, (token) => {
    const {
      colorPrimary,
      colorError,
      colorTextDisabled,
      colorErrorBg,
      colorText,
      colorTextDescription,
      colorBgContainer,
      colorFillAlter,
      colorFillContent,
      lineWidth,
      lineWidthBold,
      controlItemBgActive,
      colorBgTextHover
    } = token;
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      colorItemText: colorText,
      colorItemTextHover: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      colorGroupTitle: colorTextDescription,
      colorItemTextSelected: colorPrimary,
      colorItemTextSelectedHorizontal: colorPrimary,
      colorItemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      colorSubItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActive,
      colorItemBgSelectedHorizontal: "transparent",
      colorActiveBarWidth: 0,
      colorActiveBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorError,
      colorDangerItemTextSelected: colorError,
      colorDangerItemBgActive: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      itemMarginInline: token.marginXXS
    };
  });
  return useOriginHook(prefixCls);
});
const menuProps = () => ({
  id: String,
  prefixCls: String,
  // donot use items, now only support inner use
  items: Array,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  forceSubMenuRender: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: [Number, String]
  },
  motion: Object,
  role: String,
  theme: {
    type: String,
    default: "light"
  },
  mode: {
    type: String,
    default: "vertical"
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: "hover"
  },
  getPopupContainer: Function,
  expandIcon: Function,
  onOpenChange: Function,
  onSelect: Function,
  onDeselect: Function,
  onClick: [Function, Array],
  onFocus: Function,
  onBlur: Function,
  onMousedown: Function,
  "onUpdate:openKeys": Function,
  "onUpdate:selectedKeys": Function,
  "onUpdate:activeKey": Function
});
const EMPTY_LIST = [];
const Menu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: false,
  props: menuProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      direction,
      getPrefixCls
    } = useConfigInject("menu", props);
    const override = useInjectOverride();
    const prefixCls = computed(() => {
      var _a;
      return getPrefixCls("menu", props.prefixCls || ((_a = override === null || override === void 0 ? void 0 : override.prefixCls) === null || _a === void 0 ? void 0 : _a.value));
    });
    const [wrapSSR, hashId] = useStyle$1(prefixCls, computed(() => {
      return !override;
    }));
    const store = shallowRef(/* @__PURE__ */ new Map());
    const siderCollapsed = inject(SiderCollapsedKey, ref(void 0));
    const inlineCollapsed = computed(() => {
      if (siderCollapsed.value !== void 0) {
        return siderCollapsed.value;
      }
      return props.inlineCollapsed;
    });
    const {
      itemsNodes
    } = useItems(props);
    const isMounted = shallowRef(false);
    watchEffect(() => {
      devWarning(!(props.inlineCollapsed === true && props.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.");
      devWarning(!(siderCollapsed.value !== void 0 && props.inlineCollapsed === true), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const activeKeys = ref([]);
    const mergedSelectedKeys = ref([]);
    const keyMapStore = ref({});
    watch(store, () => {
      const newKeyMapStore = {};
      for (const menuInfo of store.value.values()) {
        newKeyMapStore[menuInfo.key] = menuInfo;
      }
      keyMapStore.value = newKeyMapStore;
    }, {
      flush: "post"
    });
    watchEffect(() => {
      if (props.activeKey !== void 0) {
        let keys = [];
        const menuInfo = props.activeKey ? keyMapStore.value[props.activeKey] : void 0;
        if (menuInfo && props.activeKey !== void 0) {
          keys = uniq([].concat(unref(menuInfo.parentKeys), props.activeKey));
        } else {
          keys = [];
        }
        if (!shallowequal(activeKeys.value, keys)) {
          activeKeys.value = keys;
        }
      }
    });
    watch(() => props.selectedKeys, (selectedKeys) => {
      if (selectedKeys) {
        mergedSelectedKeys.value = selectedKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    const selectedSubMenuKeys = ref([]);
    watch([keyMapStore, mergedSelectedKeys], () => {
      let subMenuParentKeys = [];
      mergedSelectedKeys.value.forEach((key) => {
        const menuInfo = keyMapStore.value[key];
        if (menuInfo) {
          subMenuParentKeys = subMenuParentKeys.concat(unref(menuInfo.parentKeys));
        }
      });
      subMenuParentKeys = uniq(subMenuParentKeys);
      if (!shallowequal(selectedSubMenuKeys.value, subMenuParentKeys)) {
        selectedSubMenuKeys.value = subMenuParentKeys;
      }
    }, {
      immediate: true
    });
    const triggerSelection = (info) => {
      if (props.selectable) {
        const {
          key: targetKey
        } = info;
        const exist = mergedSelectedKeys.value.includes(targetKey);
        let newSelectedKeys;
        if (props.multiple) {
          if (exist) {
            newSelectedKeys = mergedSelectedKeys.value.filter((key) => key !== targetKey);
          } else {
            newSelectedKeys = [...mergedSelectedKeys.value, targetKey];
          }
        } else {
          newSelectedKeys = [targetKey];
        }
        const selectInfo = _extends(_extends({}, info), {
          selectedKeys: newSelectedKeys
        });
        if (!shallowequal(newSelectedKeys, mergedSelectedKeys.value)) {
          if (props.selectedKeys === void 0) {
            mergedSelectedKeys.value = newSelectedKeys;
          }
          emit("update:selectedKeys", newSelectedKeys);
          if (exist && props.multiple) {
            emit("deselect", selectInfo);
          } else {
            emit("select", selectInfo);
          }
        }
      }
      if (mergedMode.value !== "inline" && !props.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };
    const mergedOpenKeys = ref([]);
    watch(() => props.openKeys, function() {
      let openKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mergedOpenKeys.value;
      if (!shallowequal(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    let timeout;
    const changeActiveKeys = (keys) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (props.activeKey === void 0) {
          activeKeys.value = keys;
        }
        emit("update:activeKey", keys[keys.length - 1]);
      });
    };
    const disabled = computed(() => !!props.disabled);
    const isRtl = computed(() => direction.value === "rtl");
    const mergedMode = ref("vertical");
    const mergedInlineCollapsed = shallowRef(false);
    watchEffect(() => {
      var _a;
      if ((props.mode === "inline" || props.mode === "vertical") && inlineCollapsed.value) {
        mergedMode.value = "vertical";
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props.mode;
        mergedInlineCollapsed.value = false;
      }
      if ((_a = override === null || override === void 0 ? void 0 : override.mode) === null || _a === void 0 ? void 0 : _a.value) {
        mergedMode.value = override.mode.value;
      }
    });
    const isInlineMode = computed(() => mergedMode.value === "inline");
    const triggerOpenKeys = (keys) => {
      mergedOpenKeys.value = keys;
      emit("update:openKeys", keys);
      emit("openChange", keys);
    };
    const inlineCacheOpenKeys = ref(mergedOpenKeys.value);
    const mountRef = shallowRef(false);
    watch(mergedOpenKeys, () => {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    });
    watch(isInlineMode, () => {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }
      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    const className = computed(() => {
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-root`]: true,
        [`${prefixCls.value}-${mergedMode.value}`]: true,
        [`${prefixCls.value}-inline-collapsed`]: mergedInlineCollapsed.value,
        [`${prefixCls.value}-rtl`]: isRtl.value,
        [`${prefixCls.value}-${props.theme}`]: true
      };
    });
    const rootPrefixCls = computed(() => getPrefixCls());
    const defaultMotions = computed(() => ({
      horizontal: {
        name: `${rootPrefixCls.value}-slide-up`
      },
      inline: collapseMotion(`${rootPrefixCls.value}-motion-collapse`),
      other: {
        name: `${rootPrefixCls.value}-zoom-big`
      }
    }));
    useProvideFirstLevel(true);
    const getChildrenKeys = function() {
      let eventKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const keys = [];
      const storeValue = store.value;
      eventKeys.forEach((eventKey) => {
        const {
          key,
          childrenEventKeys
        } = storeValue.get(eventKey);
        keys.push(key, ...getChildrenKeys(unref(childrenEventKeys)));
      });
      return keys;
    };
    const onInternalClick = (info) => {
      var _a;
      emit("click", info);
      triggerSelection(info);
      (_a = override === null || override === void 0 ? void 0 : override.onClick) === null || _a === void 0 ? void 0 : _a.call(override);
    };
    const onInternalOpenChange = (key, open) => {
      var _a;
      const childrenEventKeys = ((_a = keyMapStore.value[key]) === null || _a === void 0 ? void 0 : _a.childrenEventKeys) || [];
      let newOpenKeys = mergedOpenKeys.value.filter((k) => k !== key);
      if (open) {
        newOpenKeys.push(key);
      } else if (mergedMode.value !== "inline") {
        const subPathKeys = getChildrenKeys(unref(childrenEventKeys));
        newOpenKeys = uniq(newOpenKeys.filter((k) => !subPathKeys.includes(k)));
      }
      if (!shallowequal(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };
    const registerMenuInfo = (key, info) => {
      store.value.set(key, info);
      store.value = new Map(store.value);
    };
    const unRegisterMenuInfo = (key) => {
      store.value.delete(key);
      store.value = new Map(store.value);
    };
    const lastVisibleIndex = ref(0);
    const expandIcon = computed(() => {
      var _a;
      return props.expandIcon || slots.expandIcon || ((_a = override === null || override === void 0 ? void 0 : override.expandIcon) === null || _a === void 0 ? void 0 : _a.value) ? (opt) => {
        let icon = props.expandIcon || slots.expandIcon;
        icon = typeof icon === "function" ? icon(opt) : icon;
        return cloneElement(icon, {
          class: `${prefixCls.value}-submenu-expand-icon`
        }, false);
      } : null;
    });
    useProvideMenu({
      prefixCls,
      activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys,
      disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: computed(() => props.inlineIndent),
      subMenuCloseDelay: computed(() => props.subMenuCloseDelay),
      subMenuOpenDelay: computed(() => props.subMenuOpenDelay),
      builtinPlacements: computed(() => props.builtinPlacements),
      triggerSubMenuAction: computed(() => props.triggerSubMenuAction),
      getPopupContainer: computed(() => props.getPopupContainer),
      inlineCollapsed: mergedInlineCollapsed,
      theme: computed(() => props.theme),
      siderCollapsed,
      defaultMotions: computed(() => isMounted.value ? defaultMotions.value : null),
      motion: computed(() => isMounted.value ? props.motion : null),
      overflowDisabled: shallowRef(void 0),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon,
      forceSubMenuRender: computed(() => props.forceSubMenuRender),
      rootClassName: hashId
    });
    const getChildrenList = () => {
      var _a;
      return itemsNodes.value || flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
    return () => {
      var _a;
      const childList = getChildrenList();
      const allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== "horizontal" || props.disabledOverflow;
      const getWrapperList = (childList2) => {
        return mergedMode.value !== "horizontal" || props.disabledOverflow ? childList2 : (
          // Need wrap for overflow dropdown that do not response for open
          childList2.map((child, index) => (
            // Always wrap provider to avoid sub node re-mount
            createVNode(MenuContextProvider, {
              "key": child.key,
              "overflowDisabled": index > lastVisibleIndex.value
            }, {
              default: () => child
            })
          ))
        );
      };
      const overflowedIndicator = ((_a = slots.overflowedIndicator) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined, null, null);
      return wrapSSR(createVNode(Overflow, _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "onMousedown": props.onMousedown,
        "prefixCls": `${prefixCls.value}-overflow`,
        "component": "ul",
        "itemComponent": MenuItem,
        "class": [className.value, attrs.class, hashId.value],
        "role": "menu",
        "id": props.id,
        "data": getWrapperList(childList),
        "renderRawItem": (node) => node,
        "renderRawRest": (omitItems) => {
          const len = omitItems.length;
          const originOmitItems = len ? childList.slice(-len) : null;
          return createVNode(Fragment, null, [createVNode(SubMenu, {
            "eventKey": OVERFLOW_KEY,
            "key": OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: () => originOmitItems
          }), createVNode(PathContext, null, {
            default: () => [createVNode(SubMenu, {
              "eventKey": OVERFLOW_KEY,
              "key": OVERFLOW_KEY,
              "title": overflowedIndicator,
              "disabled": allVisible,
              "internalPopupClose": len === 0
            }, {
              default: () => originOmitItems
            })]
          })]);
        },
        "maxCount": mergedMode.value !== "horizontal" || props.disabledOverflow ? Overflow.INVALIDATE : Overflow.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": (newLastIndex) => {
          lastVisibleIndex.value = newLastIndex;
        }
      }), {
        default: () => [createVNode(Teleport, {
          "to": "body"
        }, {
          default: () => [createVNode("div", {
            "style": {
              display: "none"
            },
            "aria-hidden": true
          }, [createVNode(PathContext, null, {
            default: () => [getWrapperList(getChildrenList())]
          })])]
        })]
      }));
    };
  }
});
Menu.install = function(app) {
  app.component(Menu.name, Menu);
  app.component(MenuItem.name, MenuItem);
  app.component(SubMenu.name, SubMenu);
  app.component(Divider.name, Divider);
  app.component(ItemGroup.name, ItemGroup);
  return app;
};
Menu.Item = MenuItem;
Menu.Divider = Divider;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
function useRaf(callback) {
  const rafRef = shallowRef();
  const removedRef = shallowRef(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      wrapperRaf.cancel(rafRef.value);
      rafRef.value = wrapperRaf(() => {
        callback(...args);
      });
    }
  }
  return trigger;
}
function useRafState(defaultState) {
  const batchRef = shallowRef([]);
  const state = shallowRef(typeof defaultState === "function" ? defaultState() : defaultState);
  const flushUpdate = useRaf(() => {
    let value = state.value;
    batchRef.value.forEach((callback) => {
      value = callback(value);
    });
    batchRef.value = [];
    state.value = value;
  });
  function updater(callback) {
    batchRef.value.push(callback);
    flushUpdate();
  }
  return [state, updater];
}
const TabNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    // onRemove: { type: Function as PropType<() => void> },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup(props, _ref) {
    let {
      expose,
      attrs
    } = _ref;
    const domRef = ref();
    function onInternalClick(e) {
      var _a;
      if ((_a = props.tab) === null || _a === void 0 ? void 0 : _a.disabled) {
        return;
      }
      props.onClick(e);
    }
    expose({
      domRef
    });
    function onRemoveTab(event) {
      var _a;
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit("remove", {
        key: (_a = props.tab) === null || _a === void 0 ? void 0 : _a.key,
        event
      });
    }
    const removable = computed(() => {
      var _a;
      return props.editable && props.closable !== false && !((_a = props.tab) === null || _a === void 0 ? void 0 : _a.disabled);
    });
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        active,
        tab: {
          key,
          tab,
          disabled,
          closeIcon
        },
        renderWrapper,
        removeAriaLabel,
        editable,
        onFocus
      } = props;
      const tabPrefix = `${prefixCls}-tab`;
      const node = createVNode("div", {
        "key": key,
        "ref": domRef,
        "class": classNames(tabPrefix, {
          [`${tabPrefix}-with-remove`]: removable.value,
          [`${tabPrefix}-active`]: active,
          [`${tabPrefix}-disabled`]: disabled
        }),
        "style": attrs.style,
        "onClick": onInternalClick
      }, [createVNode("div", {
        "role": "tab",
        "aria-selected": active,
        "id": id && `${id}-tab-${key}`,
        "class": `${tabPrefix}-btn`,
        "aria-controls": id && `${id}-panel-${key}`,
        "aria-disabled": disabled,
        "tabindex": disabled ? null : 0,
        "onClick": (e) => {
          e.stopPropagation();
          onInternalClick(e);
        },
        "onKeydown": (e) => {
          if ([KeyCode.SPACE, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        "onFocus": onFocus
      }, [typeof tab === "function" ? tab() : tab]), removable.value && createVNode("button", {
        "type": "button",
        "aria-label": removeAriaLabel || "remove",
        "tabindex": 0,
        "class": `${tabPrefix}-remove`,
        "onClick": (e) => {
          e.stopPropagation();
          onRemoveTab(e);
        }
      }, [(closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon()) || ((_a = editable.removeIcon) === null || _a === void 0 ? void 0 : _a.call(editable)) || "×"])]);
      return renderWrapper ? renderWrapper(node) : node;
    };
  }
});
const DEFAULT_SIZE$1 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes) {
  const offsetMap = ref(/* @__PURE__ */ new Map());
  watchEffect(() => {
    var _a, _b;
    const map = /* @__PURE__ */ new Map();
    const tabsValue = tabs.value;
    const lastOffset = tabSizes.value.get((_a = tabsValue[0]) === null || _a === void 0 ? void 0 : _a.key) || DEFAULT_SIZE$1;
    const rightOffset = lastOffset.left + lastOffset.width;
    for (let i = 0; i < tabsValue.length; i += 1) {
      const {
        key
      } = tabsValue[i];
      let data = tabSizes.value.get(key);
      if (!data) {
        data = tabSizes.value.get((_b = tabsValue[i - 1]) === null || _b === void 0 ? void 0 : _b.key) || DEFAULT_SIZE$1;
      }
      const entity = map.get(key) || _extends({}, data);
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}
const AddButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AddButton",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      expose,
      attrs
    } = _ref;
    const domRef = ref();
    expose({
      domRef
    });
    return () => {
      const {
        prefixCls,
        editable,
        locale
      } = props;
      if (!editable || editable.showAdd === false) {
        return null;
      }
      return createVNode("button", {
        "ref": domRef,
        "type": "button",
        "class": `${prefixCls}-nav-add`,
        "style": attrs.style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || "Add tab",
        "onClick": (event) => {
          editable.onEdit("add", {
            event
          });
        }
      }, [editable.addIcon ? editable.addIcon() : "+"]);
    };
  }
});
const operationNodeProps = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: PropTypes.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  },
  popupClassName: String,
  getPopupContainer: functionType()
};
const OperationNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: false,
  props: operationNodeProps,
  emits: ["tabClick"],
  slots: Object,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const [open, setOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);
    const selectOffset = (offset) => {
      const enabledTabs = props.tabs.filter((tab) => !tab.disabled);
      let selectedIndex = enabledTabs.findIndex((tab) => tab.key === selectedKey.value) || 0;
      const len = enabledTabs.length;
      for (let i = 0; i < len; i += 1) {
        selectedIndex = (selectedIndex + offset + len) % len;
        const tab = enabledTabs[selectedIndex];
        if (!tab.disabled) {
          setSelectedKey(tab.key);
          return;
        }
      }
    };
    const onKeyDown = (e) => {
      const {
        which
      } = e;
      if (!open.value) {
        if ([KeyCode.DOWN, KeyCode.SPACE, KeyCode.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case KeyCode.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case KeyCode.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case KeyCode.ESC:
          setOpen(false);
          break;
        case KeyCode.SPACE:
        case KeyCode.ENTER:
          if (selectedKey.value !== null) props.onTabClick(selectedKey.value, e);
          break;
      }
    };
    const popupId = computed(() => `${props.id}-more-popup`);
    const selectedItemId = computed(() => selectedKey.value !== null ? `${popupId.value}-${selectedKey.value}` : null);
    const onRemoveTab = (event, key) => {
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit("remove", {
        key,
        event
      });
    };
    watch(open, () => {
      if (!open.value) {
        setSelectedKey(null);
      }
    });
    useProvideOverride({});
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        tabs,
        locale,
        mobile,
        moreIcon = ((_a = slots.moreIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined, null, null),
        moreTransitionName,
        editable,
        tabBarGutter,
        rtl,
        onTabClick,
        popupClassName
      } = props;
      if (!tabs.length) return null;
      const dropdownPrefix = `${prefixCls}-dropdown`;
      const dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
      const moreStyle = {
        [rtl ? "marginRight" : "marginLeft"]: tabBarGutter
      };
      if (!tabs.length) {
        moreStyle.visibility = "hidden";
        moreStyle.order = 1;
      }
      const overlayClassName = classNames({
        [`${dropdownPrefix}-rtl`]: rtl,
        [`${popupClassName}`]: true
      });
      const moreNode = mobile ? null : createVNode(Dropdown, {
        "prefixCls": dropdownPrefix,
        "trigger": ["hover"],
        "visible": open.value,
        "transitionName": moreTransitionName,
        "onVisibleChange": setOpen,
        "overlayClassName": overlayClassName,
        "mouseEnterDelay": 0.1,
        "mouseLeaveDelay": 0.1,
        "getPopupContainer": props.getPopupContainer
      }, {
        overlay: () => createVNode(Menu, {
          "onClick": (_ref2) => {
            let {
              key,
              domEvent
            } = _ref2;
            onTabClick(key, domEvent);
            setOpen(false);
          },
          "id": popupId.value,
          "tabindex": -1,
          "role": "listbox",
          "aria-activedescendant": selectedItemId.value,
          "selectedKeys": [selectedKey.value],
          "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
        }, {
          default: () => [tabs.map((tab) => {
            var _a2, _b;
            const removable = editable && tab.closable !== false && !tab.disabled;
            return createVNode(MenuItem, {
              "key": tab.key,
              "id": `${popupId.value}-${tab.key}`,
              "role": "option",
              "aria-controls": id && `${id}-panel-${tab.key}`,
              "disabled": tab.disabled
            }, {
              default: () => [createVNode("span", null, [typeof tab.tab === "function" ? tab.tab() : tab.tab]), removable && createVNode("button", {
                "type": "button",
                "aria-label": props.removeAriaLabel || "remove",
                "tabindex": 0,
                "class": `${dropdownPrefix}-menu-item-remove`,
                "onClick": (e) => {
                  e.stopPropagation();
                  onRemoveTab(e, tab.key);
                }
              }, [((_a2 = tab.closeIcon) === null || _a2 === void 0 ? void 0 : _a2.call(tab)) || ((_b = editable.removeIcon) === null || _b === void 0 ? void 0 : _b.call(editable)) || "×"])]
            });
          })]
        }),
        default: () => createVNode("button", {
          "type": "button",
          "class": `${prefixCls}-nav-more`,
          "style": moreStyle,
          "tabindex": -1,
          "aria-hidden": "true",
          "aria-haspopup": "listbox",
          "aria-controls": popupId.value,
          "id": `${id}-more`,
          "aria-expanded": open.value,
          "onKeydown": onKeyDown
        }, [moreIcon])
      });
      return createVNode("div", {
        "class": classNames(`${prefixCls}-nav-operations`, attrs.class),
        "style": attrs.style
      }, [moreNode, createVNode(AddButton, {
        "prefixCls": prefixCls,
        "locale": locale,
        "editable": editable
      }, null)]);
    };
  }
});
const TabsContextKey = /* @__PURE__ */ Symbol("tabsContextKey");
const useProvideTabs = (props) => {
  provide(TabsContextKey, props);
};
const useInjectTabs = () => {
  return inject(TabsContextKey, {
    tabs: ref([]),
    prefixCls: ref()
  });
};
defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabsContextProvider",
  inheritAttrs: false,
  props: {
    tabs: {
      type: Object,
      default: void 0
    },
    prefixCls: {
      type: String,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useProvideTabs(toRefs(props));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(domRef, onOffset) {
  const [touchPosition, setTouchPosition] = useState();
  const [lastTimestamp, setLastTimestamp] = useState(0);
  const [lastTimeDiff, setLastTimeDiff] = useState(0);
  const [lastOffset, setLastOffset] = useState();
  const motionInterval = ref();
  function onTouchStart(e) {
    const {
      screenX,
      screenY
    } = e.touches[0];
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    clearInterval(motionInterval.value);
  }
  function onTouchMove(e) {
    if (!touchPosition.value) return;
    e.preventDefault();
    const {
      screenX,
      screenY
    } = e.touches[0];
    const offsetX = screenX - touchPosition.value.x;
    const offsetY = screenY - touchPosition.value.y;
    onOffset(offsetX, offsetY);
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    const now = Date.now();
    setLastTimeDiff(now - lastTimestamp.value);
    setLastTimestamp(now);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition.value) return;
    const lastOffsetValue = lastOffset.value;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffsetValue) {
      const distanceX = lastOffsetValue.x / lastTimeDiff.value;
      const distanceY = lastOffsetValue.y / lastTimeDiff.value;
      const absX = Math.abs(distanceX);
      const absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      let currentX = distanceX;
      let currentY = distanceY;
      motionInterval.value = setInterval(() => {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          clearInterval(motionInterval.value);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  const lastWheelDirectionRef = ref();
  function onWheel(e) {
    const {
      deltaX,
      deltaY
    } = e;
    let mixed = 0;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.value === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.value = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.value = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  ref({
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  });
}
function useSyncState(defaultState, onChange) {
  const stateRef = ref(defaultState);
  function setState(updater) {
    const newValue = typeof updater === "function" ? updater(stateRef.value) : updater;
    if (newValue !== stateRef.value) {
      onChange(newValue, stateRef.value);
    }
    stateRef.value = newValue;
  }
  return [stateRef, setState];
}
const useRefs = () => {
  const refs = ref(/* @__PURE__ */ new Map());
  const setRef = (key) => (el) => {
    refs.value.set(key, el);
  };
  return [setRef, refs];
};
const DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
const tabNavListProps = () => {
  return {
    id: {
      type: String
    },
    tabPosition: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    rtl: {
      type: Boolean
    },
    animated: objectType(),
    editable: objectType(),
    moreIcon: PropTypes.any,
    moreTransitionName: {
      type: String
    },
    mobile: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    renderTabBar: {
      type: Function
    },
    locale: objectType(),
    popupClassName: String,
    getPopupContainer: functionType(),
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    }
  };
};
const getTabSize = (tab, containerRect) => {
  const {
    offsetWidth,
    offsetHeight,
    offsetTop,
    offsetLeft
  } = tab;
  const {
    width,
    height,
    x,
    y
  } = tab.getBoundingClientRect();
  if (Math.abs(width - offsetWidth) < 1) {
    return [width, height, x - containerRect.x, y - containerRect.y];
  }
  return [offsetWidth, offsetHeight, offsetLeft, offsetTop];
};
const TabNavList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: false,
  props: tabNavListProps(),
  slots: Object,
  emits: ["tabClick", "tabScroll"],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      tabs,
      prefixCls
    } = useInjectTabs();
    const tabsWrapperRef = shallowRef();
    const tabListRef = shallowRef();
    const operationsRef = shallowRef();
    const innerAddButtonRef = shallowRef();
    const [setRef, btnRefs] = useRefs();
    const tabPositionTopOrBottom = computed(() => props.tabPosition === "top" || props.tabPosition === "bottom");
    const [transformLeft, setTransformLeft] = useSyncState(0, (next, prev) => {
      if (tabPositionTopOrBottom.value && props.onTabScroll) {
        props.onTabScroll({
          direction: next > prev ? "left" : "right"
        });
      }
    });
    const [transformTop, setTransformTop] = useSyncState(0, (next, prev) => {
      if (!tabPositionTopOrBottom.value && props.onTabScroll) {
        props.onTabScroll({
          direction: next > prev ? "top" : "bottom"
        });
      }
    });
    const [wrapperScrollWidth, setWrapperScrollWidth] = useState(0);
    const [wrapperScrollHeight, setWrapperScrollHeight] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(null);
    const [wrapperHeight, setWrapperHeight] = useState(null);
    const [addWidth, setAddWidth] = useState(0);
    const [addHeight, setAddHeight] = useState(0);
    const [tabSizes, setTabSizes] = useRafState(/* @__PURE__ */ new Map());
    const tabOffsets = useOffsets(tabs, tabSizes);
    const operationsHiddenClassName = computed(() => `${prefixCls.value}-nav-operations-hidden`);
    const transformMin = shallowRef(0);
    const transformMax = shallowRef(0);
    watchEffect(() => {
      if (!tabPositionTopOrBottom.value) {
        transformMin.value = Math.min(0, wrapperHeight.value - wrapperScrollHeight.value);
        transformMax.value = 0;
      } else if (props.rtl) {
        transformMin.value = 0;
        transformMax.value = Math.max(0, wrapperScrollWidth.value - wrapperWidth.value);
      } else {
        transformMin.value = Math.min(0, wrapperWidth.value - wrapperScrollWidth.value);
        transformMax.value = 0;
      }
    });
    const alignInRange = (value) => {
      if (value < transformMin.value) {
        return transformMin.value;
      }
      if (value > transformMax.value) {
        return transformMax.value;
      }
      return value;
    };
    const touchMovingRef = shallowRef();
    const [lockAnimation, setLockAnimation] = useState();
    const doLockAnimation = () => {
      setLockAnimation(Date.now());
    };
    const clearTouchMoving = () => {
      clearTimeout(touchMovingRef.value);
    };
    const doMove = (setState, offset) => {
      setState((value) => {
        const newValue = alignInRange(value + offset);
        return newValue;
      });
    };
    useTouchMove(tabsWrapperRef, (offsetX, offsetY) => {
      if (tabPositionTopOrBottom.value) {
        if (wrapperWidth.value >= wrapperScrollWidth.value) {
          return false;
        }
        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight.value >= wrapperScrollHeight.value) {
          return false;
        }
        doMove(setTransformTop, offsetY);
      }
      clearTouchMoving();
      doLockAnimation();
      return true;
    });
    watch(lockAnimation, () => {
      clearTouchMoving();
      if (lockAnimation.value) {
        touchMovingRef.value = setTimeout(() => {
          setLockAnimation(0);
        }, 100);
      }
    });
    const scrollToTab = function() {
      let key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activeKey;
      const tabOffset = tabOffsets.value.get(key) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (tabPositionTopOrBottom.value) {
        let newTransform = transformLeft.value;
        if (props.rtl) {
          if (tabOffset.right < transformLeft.value) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft.value + wrapperWidth.value) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth.value;
          }
        } else if (tabOffset.left < -transformLeft.value) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft.value + wrapperWidth.value) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth.value);
        }
        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        let newTransform = transformTop.value;
        if (tabOffset.top < -transformTop.value) {
          newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop.value + wrapperHeight.value) {
          newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight.value);
        }
        setTransformLeft(0);
        setTransformTop(alignInRange(newTransform));
      }
    };
    const visibleStart = shallowRef(0);
    const visibleEnd = shallowRef(0);
    watchEffect(() => {
      let unit;
      let position;
      let transformSize;
      let basicSize;
      let tabContentSize;
      let addSize;
      const tabOffsetsValue = tabOffsets.value;
      if (["top", "bottom"].includes(props.tabPosition)) {
        unit = "width";
        basicSize = wrapperWidth.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addWidth.value;
        position = props.rtl ? "right" : "left";
        transformSize = Math.abs(transformLeft.value);
      } else {
        unit = "height";
        basicSize = wrapperHeight.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addHeight.value;
        position = "top";
        transformSize = -transformTop.value;
      }
      let mergedBasicSize = basicSize;
      if (tabContentSize + addSize > basicSize && tabContentSize < basicSize) {
        mergedBasicSize = basicSize - addSize;
      }
      const tabsVal = tabs.value;
      if (!tabsVal.length) {
        return [visibleStart.value, visibleEnd.value] = [0, 0];
      }
      const len = tabsVal.length;
      let endIndex = len;
      for (let i = 0; i < len; i += 1) {
        const offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
          endIndex = i - 1;
          break;
        }
      }
      let startIndex = 0;
      for (let i = len - 1; i >= 0; i -= 1) {
        const offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] < transformSize) {
          startIndex = i + 1;
          break;
        }
      }
      return [visibleStart.value, visibleEnd.value] = [startIndex, endIndex];
    });
    const updateTabSizes = () => {
      setTabSizes(() => {
        var _a;
        const newSizes = /* @__PURE__ */ new Map();
        const listRect = (_a = tabListRef.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        tabs.value.forEach((_ref2) => {
          let {
            key
          } = _ref2;
          const btnRef = btnRefs.value.get(key);
          const btnNode = (btnRef === null || btnRef === void 0 ? void 0 : btnRef.$el) || btnRef;
          if (btnNode) {
            const [width, height, left, top] = getTabSize(btnNode, listRect);
            newSizes.set(key, {
              width,
              height,
              left,
              top
            });
          }
        });
        return newSizes;
      });
    };
    watch(() => tabs.value.map((tab) => tab.key).join("%%"), () => {
      updateTabSizes();
    }, {
      flush: "post"
    });
    const onListHolderResize = () => {
      var _a, _b, _c, _d, _e;
      const offsetWidth = ((_a = tabsWrapperRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
      const offsetHeight = ((_b = tabsWrapperRef.value) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
      const addDom = ((_c = innerAddButtonRef.value) === null || _c === void 0 ? void 0 : _c.$el) || {};
      const newAddWidth = addDom.offsetWidth || 0;
      const newAddHeight = addDom.offsetHeight || 0;
      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);
      setAddWidth(newAddWidth);
      setAddHeight(newAddHeight);
      const newWrapperScrollWidth = (((_d = tabListRef.value) === null || _d === void 0 ? void 0 : _d.offsetWidth) || 0) - newAddWidth;
      const newWrapperScrollHeight = (((_e = tabListRef.value) === null || _e === void 0 ? void 0 : _e.offsetHeight) || 0) - newAddHeight;
      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);
      updateTabSizes();
    };
    const hiddenTabs = computed(() => [...tabs.value.slice(0, visibleStart.value), ...tabs.value.slice(visibleEnd.value + 1)]);
    const [inkStyle, setInkStyle] = useState();
    const activeTabOffset = computed(() => tabOffsets.value.get(props.activeKey));
    const inkBarRafRef = shallowRef();
    const cleanInkBarRaf = () => {
      wrapperRaf.cancel(inkBarRafRef.value);
    };
    watch([activeTabOffset, tabPositionTopOrBottom, () => props.rtl], () => {
      const newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props.rtl) {
            newInkStyle.right = toPx(activeTabOffset.value.right);
          } else {
            newInkStyle.left = toPx(activeTabOffset.value.left);
          }
          newInkStyle.width = toPx(activeTabOffset.value.width);
        } else {
          newInkStyle.top = toPx(activeTabOffset.value.top);
          newInkStyle.height = toPx(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = wrapperRaf(() => {
        setInkStyle(newInkStyle);
      });
    });
    watch([() => props.activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom], () => {
      scrollToTab();
    }, {
      flush: "post"
    });
    watch([() => props.rtl, () => props.tabBarGutter, () => props.activeKey, () => tabs.value], () => {
      onListHolderResize();
    }, {
      flush: "post"
    });
    const ExtraContent = (_ref3) => {
      let {
        position,
        prefixCls: prefixCls2,
        extra
      } = _ref3;
      if (!extra) return null;
      const content = extra === null || extra === void 0 ? void 0 : extra({
        position
      });
      return content ? createVNode("div", {
        "class": `${prefixCls2}-extra-content`
      }, [content]) : null;
    };
    return () => {
      const {
        id,
        animated,
        activeKey,
        rtl,
        editable,
        locale,
        tabPosition,
        tabBarGutter,
        onTabClick
      } = props;
      const {
        class: className,
        style
      } = attrs;
      const pre = prefixCls.value;
      const hasDropdown = !!hiddenTabs.value.length;
      const wrapPrefix = `${pre}-nav-wrap`;
      let pingLeft;
      let pingRight;
      let pingTop;
      let pingBottom;
      if (tabPositionTopOrBottom.value) {
        if (rtl) {
          pingRight = transformLeft.value > 0;
          pingLeft = transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        } else {
          pingLeft = transformLeft.value < 0;
          pingRight = -transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        }
      } else {
        pingTop = transformTop.value < 0;
        pingBottom = -transformTop.value + wrapperHeight.value < wrapperScrollHeight.value;
      }
      const tabNodeStyle = {};
      if (tabPosition === "top" || tabPosition === "bottom") {
        tabNodeStyle[rtl ? "marginRight" : "marginLeft"] = typeof tabBarGutter === "number" ? `${tabBarGutter}px` : tabBarGutter;
      } else {
        tabNodeStyle.marginTop = typeof tabBarGutter === "number" ? `${tabBarGutter}px` : tabBarGutter;
      }
      const tabNodes = tabs.value.map((tab, i) => {
        const {
          key
        } = tab;
        return createVNode(TabNode, {
          "id": id,
          "prefixCls": pre,
          "key": key,
          "tab": tab,
          "style": i === 0 ? void 0 : tabNodeStyle,
          "closable": tab.closable,
          "editable": editable,
          "active": key === activeKey,
          "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
          "ref": setRef(key),
          "onClick": (e) => {
            onTabClick(key, e);
          },
          "onFocus": () => {
            scrollToTab(key);
            doLockAnimation();
            if (!tabsWrapperRef.value) {
              return;
            }
            if (!rtl) {
              tabsWrapperRef.value.scrollLeft = 0;
            }
            tabsWrapperRef.value.scrollTop = 0;
          }
        }, slots);
      });
      return createVNode("div", {
        "role": "tablist",
        "class": classNames(`${pre}-nav`, className),
        "style": style,
        "onKeydown": () => {
          doLockAnimation();
        }
      }, [createVNode(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), createVNode(ResizeObserver, {
        "onResize": onListHolderResize
      }, {
        default: () => [createVNode("div", {
          "class": classNames(wrapPrefix, {
            [`${wrapPrefix}-ping-left`]: pingLeft,
            [`${wrapPrefix}-ping-right`]: pingRight,
            [`${wrapPrefix}-ping-top`]: pingTop,
            [`${wrapPrefix}-ping-bottom`]: pingBottom
          }),
          "ref": tabsWrapperRef
        }, [createVNode(ResizeObserver, {
          "onResize": onListHolderResize
        }, {
          default: () => [createVNode("div", {
            "ref": tabListRef,
            "class": `${pre}-nav-list`,
            "style": {
              transform: `translate(${transformLeft.value}px, ${transformTop.value}px)`,
              transition: lockAnimation.value ? "none" : void 0
            }
          }, [tabNodes, createVNode(AddButton, {
            "ref": innerAddButtonRef,
            "prefixCls": pre,
            "locale": locale,
            "editable": editable,
            "style": _extends(_extends({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {
              visibility: hasDropdown ? "hidden" : null
            })
          }, null), createVNode("div", {
            "class": classNames(`${pre}-ink-bar`, {
              [`${pre}-ink-bar-animated`]: animated.inkBar
            }),
            "style": inkStyle.value
          }, null)])]
        })])]
      }), createVNode(OperationNode, _objectSpread$2(_objectSpread$2({}, props), {}, {
        "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), pick(slots, ["moreIcon"])), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});
const TabPanelList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabPanelList",
  inheritAttrs: false,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup(props) {
    const {
      tabs,
      prefixCls
    } = useInjectTabs();
    return () => {
      const {
        id,
        activeKey,
        animated,
        tabPosition,
        rtl,
        destroyInactiveTabPane
      } = props;
      const tabPaneAnimated = animated.tabPane;
      const pre = prefixCls.value;
      const activeIndex = tabs.value.findIndex((tab) => tab.key === activeKey);
      return createVNode("div", {
        "class": `${pre}-content-holder`
      }, [createVNode("div", {
        "class": [`${pre}-content`, `${pre}-content-${tabPosition}`, {
          [`${pre}-content-animated`]: tabPaneAnimated
        }],
        "style": activeIndex && tabPaneAnimated ? {
          [rtl ? "marginRight" : "marginLeft"]: `-${activeIndex}00%`
        } : null
      }, [tabs.value.map((tab) => {
        return cloneElement(tab.node, {
          key: tab.key,
          prefixCls: pre,
          tabKey: tab.key,
          id,
          animated: tabPaneAnimated,
          active: tab.key === activeKey,
          destroyInactiveTabPane
        });
      })])]);
    };
  }
});
const genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return [
    {
      [componentCls]: {
        [`${componentCls}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${motionDurationSlow}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${motionDurationSlow}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down")]
  ];
};
const genCardStyle = (token) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeadBackground,
    tabsCardGutter,
    colorSplit
  } = token;
  return {
    [`${componentCls}-card`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: 0,
          padding: tabsCardHorizontalPadding,
          background: tabsCardHeadBackground,
          border: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`${componentCls}-tab-active`]: {
          color: token.colorPrimary,
          background: token.colorBgContainer
        },
        [`${componentCls}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginLeft: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            }
          }
        }
      },
      [`&${componentCls}-top`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`
          },
          [`${componentCls}-tab-active`]: {
            borderBottomColor: token.colorBgContainer
          }
        }
      },
      [`&${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`
          },
          [`${componentCls}-tab-active`]: {
            borderTopColor: token.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${componentCls}-left, &${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginTop: `${tabsCardGutter}px`
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadiusLG}px 0 0 ${token.borderRadiusLG}px`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px 0`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      }
    }
  };
};
const genDropdownStyle = (token) => {
  const {
    componentCls,
    tabsHoverColor,
    dropdownEdgeChildVerticalPadding
  } = token;
  return {
    [`${componentCls}-dropdown`]: _extends(_extends({}, resetComponent(token)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: `${dropdownEdgeChildVerticalPadding}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: true,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: token.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        "&-item": _extends(_extends({}, textEllipsis), {
          display: "flex",
          alignItems: "center",
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: `${token.paddingXXS}px ${token.paddingSM}px`,
          color: token.colorText,
          fontWeight: "normal",
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: "pointer",
          transition: `all ${token.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM
            },
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: tabsHoverColor
            }
          },
          "&:hover": {
            background: token.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: token.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
};
const genPositionStyle = (token) => {
  const {
    componentCls,
    margin,
    colorSplit
  } = token;
  return {
    // ========================== Top & Bottom ==========================
    [`${componentCls}-top, ${componentCls}-bottom`]: {
      flexDirection: "column",
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        margin: `0 0 ${margin}px 0`,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          content: "''"
        },
        [`${componentCls}-ink-bar`]: {
          height: token.lineWidthBold,
          "&-animated": {
            transition: `width ${token.motionDurationSlow}, left ${token.motionDurationSlow},
            right ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: token.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowRight
          },
          [`&${componentCls}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${componentCls}-top`]: {
      [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${componentCls}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${componentCls}-bottom`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        marginTop: `${margin}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${componentCls}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${componentCls}-left, ${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        flexDirection: "column",
        minWidth: token.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${componentCls}-tab`]: {
          padding: `${token.paddingXS}px ${token.paddingLG}px`,
          textAlign: "center"
        },
        [`${componentCls}-tab + ${componentCls}-tab`]: {
          margin: `${token.margin}px 0 0 0`
        },
        // >>>>>>>>>>> Nav
        [`${componentCls}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: token.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: token.boxShadowTabsOverflowBottom
          },
          [`&${componentCls}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${componentCls}-ink-bar`]: {
          width: token.lineWidthBold,
          "&-animated": {
            transition: `height ${token.motionDurationSlow}, top ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${componentCls}-left`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-ink-bar`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        marginLeft: {
          _skip_check_: true,
          value: `-${token.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    },
    [`${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        [`${componentCls}-ink-bar`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: -token.lineWidth
        },
        borderRight: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingRight: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    }
  };
};
const genSizeStyle = (token) => {
  const {
    componentCls,
    padding
  } = token;
  return {
    [componentCls]: {
      "&-small": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXS}px 0`,
            fontSize: token.fontSize
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${padding}px 0`,
            fontSize: token.fontSizeLG
          }
        }
      }
    },
    [`${componentCls}-card`]: {
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXXS * 1.5}px ${padding}px`
          }
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`
          }
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${token.borderRadius}px ${token.borderRadius}px 0 0`
          }
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadius}px ${token.borderRadius}px 0`
            }
          }
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadius}px 0 0 ${token.borderRadius}px`
            }
          }
        }
      },
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXS}px ${padding}px ${token.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
};
const genTabStyle = (token) => {
  const {
    componentCls,
    tabsActiveColor,
    tabsHoverColor,
    iconCls,
    tabsHorizontalGutter
  } = token;
  const tabCls = `${componentCls}-tab`;
  return {
    [tabCls]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${token.paddingSM}px 0`,
      fontSize: `${token.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": _extends({
        "&:focus:not(:focus-visible), &:active": {
          color: tabsActiveColor
        }
      }, genFocusStyle(token)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: true,
          value: -token.marginXXS
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      "&:hover": {
        color: tabsHoverColor
      },
      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: token.colorPrimary,
        textShadow: token.tabsActiveTextShadow
      },
      [`&${tabCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        "&:focus, &:active": {
          color: token.colorTextDisabled
        }
      },
      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0
      },
      [iconCls]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM
        }
      }
    },
    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: `0 0 0 ${tabsHorizontalGutter}px`
      }
    }
  };
};
const genRtlStyle = (token) => {
  const {
    componentCls,
    tabsHorizontalGutter,
    iconCls,
    tabsCardGutter
  } = token;
  const rtlCls = `${componentCls}-rtl`;
  return {
    [rtlCls]: {
      direction: "rtl",
      [`${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: {
            _skip_check_: true,
            value: `0 0 0 ${tabsHorizontalGutter}px`
          },
          [`${componentCls}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          },
          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0
            },
            marginLeft: {
              _skip_check_: true,
              value: `${token.marginSM}px`
            }
          },
          [`${componentCls}-tab-remove`]: {
            marginRight: {
              _skip_check_: true,
              value: `${token.marginXS}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: `-${token.marginXXS}px`
            },
            [iconCls]: {
              margin: 0
            }
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav`]: {
          order: 1
        },
        [`> ${componentCls}-content-holder`]: {
          order: 0
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav`]: {
          order: 0
        },
        [`> ${componentCls}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginRight: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          }
        }
      }
    },
    [`${componentCls}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-menu-item`]: {
      [`${componentCls}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: true,
          value: "right"
        }
      }
    }
  };
};
const genTabsStyle = (token) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeight,
    tabsCardGutter,
    tabsHoverColor,
    tabsActiveColor,
    colorSplit
  } = token;
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${componentCls}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${token.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${componentCls}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${token.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${componentCls}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${componentCls}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${componentCls}-nav-more`]: {
          position: "relative",
          padding: tabsCardHorizontalPadding,
          background: "transparent",
          border: 0,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${componentCls}-nav-add`]: _extends({
          minWidth: `${tabsCardHeight}px`,
          marginLeft: {
            _skip_check_: true,
            value: `${tabsCardGutter}px`
          },
          padding: `0 ${token.paddingXS}px`,
          background: "transparent",
          border: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: token.colorText,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
          "&:hover": {
            color: tabsHoverColor
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: tabsActiveColor
          }
        }, genFocusStyle(token))
      },
      [`${componentCls}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${componentCls}-ink-bar`]: {
        position: "absolute",
        background: token.colorPrimary,
        pointerEvents: "none"
      }
    }), genTabStyle(token)), {
      // =========================== TabPanes ===========================
      [`${componentCls}-content`]: {
        position: "relative",
        display: "flex",
        width: "100%",
        ["&-animated"]: {
          transition: "margin 0.3s"
        }
      },
      [`${componentCls}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${componentCls}-tabpane`]: {
        outline: "none",
        flex: "none",
        width: "100%"
      }
    }),
    [`${componentCls}-centered`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-nav-wrap`]: {
          [`&:not([class*='${componentCls}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
};
const useStyle = genComponentStyleHook("Tabs", (token) => {
  const tabsCardHeight = token.controlHeightLG;
  const tabsToken = merge(token, {
    tabsHoverColor: token.colorPrimaryHover,
    tabsActiveColor: token.colorPrimaryActive,
    tabsCardHorizontalPadding: `${(tabsCardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth}px ${token.padding}px`,
    tabsCardHeight,
    tabsCardGutter: token.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: token.colorFillAlter,
    dropdownEdgeChildVerticalPadding: token.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), genMotionStyle(tabsToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
const tabsProps = () => {
  return {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    popupClassName: String,
    getPopupContainer: functionType(),
    activeKey: {
      type: [String, Number]
    },
    defaultActiveKey: {
      type: [String, Number]
    },
    direction: stringType(),
    animated: someType([Boolean, Object]),
    renderTabBar: functionType(),
    tabBarGutter: {
      type: Number
    },
    tabBarStyle: objectType(),
    tabPosition: stringType(),
    destroyInactiveTabPane: booleanType(),
    hideAdd: Boolean,
    type: stringType(),
    size: stringType(),
    centered: Boolean,
    onEdit: functionType(),
    onChange: functionType(),
    onTabClick: functionType(),
    onTabScroll: functionType(),
    "onUpdate:activeKey": functionType(),
    // Accessibility
    locale: objectType(),
    onPrevClick: functionType(),
    onNextClick: functionType(),
    tabBarExtraContent: PropTypes.any
  };
};
function parseTabList(children) {
  return children.map((node) => {
    if (isValidElement(node)) {
      const props = _extends({}, node.props || {});
      for (const [k, v] of Object.entries(props)) {
        delete props[k];
        props[camelize(k)] = v;
      }
      const slots = node.children || {};
      const key = node.key !== void 0 ? node.key : void 0;
      const {
        tab = slots.tab,
        disabled,
        forceRender,
        closable,
        animated,
        active,
        destroyInactiveTabPane
      } = props;
      return _extends(_extends({
        key
      }, props), {
        node,
        closeIcon: slots.closeIcon,
        tab,
        disabled: disabled === "" || disabled,
        forceRender: forceRender === "" || forceRender,
        closable: closable === "" || closable,
        animated: animated === "" || animated,
        active: active === "" || active,
        destroyInactiveTabPane: destroyInactiveTabPane === "" || destroyInactiveTabPane
      });
    }
    return null;
  }).filter((tab) => tab);
}
const InternalTabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: false,
  props: _extends(_extends({}, initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  })), {
    tabs: arrayType()
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    devWarning(!(props.onPrevClick !== void 0) && !(props.onNextClick !== void 0), "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.");
    devWarning(!(props.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.");
    devWarning(!(slots.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    const {
      prefixCls,
      direction,
      size,
      rootPrefixCls,
      getPopupContainer
    } = useConfigInject("tabs", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const rtl = computed(() => direction.value === "rtl");
    const mergedAnimated = computed(() => {
      const {
        animated,
        tabPosition
      } = props;
      if (animated === false || ["left", "right"].includes(tabPosition)) {
        return {
          inkBar: false,
          tabPane: false
        };
      } else if (animated === true) {
        return {
          inkBar: true,
          tabPane: true
        };
      } else {
        return _extends({
          inkBar: true,
          tabPane: false
        }, typeof animated === "object" ? animated : {});
      }
    });
    const [mobile] = useState(false);
    const [mergedActiveKey, setMergedActiveKey] = useMergedState(() => {
      var _a;
      return (_a = props.tabs[0]) === null || _a === void 0 ? void 0 : _a.key;
    }, {
      value: computed(() => props.activeKey),
      defaultValue: props.defaultActiveKey
    });
    const [activeIndex, setActiveIndex] = useState(() => props.tabs.findIndex((tab) => tab.key === mergedActiveKey.value));
    watchEffect(() => {
      var _a;
      let newActiveIndex = props.tabs.findIndex((tab) => tab.key === mergedActiveKey.value);
      if (newActiveIndex === -1) {
        newActiveIndex = Math.max(0, Math.min(activeIndex.value, props.tabs.length - 1));
        setMergedActiveKey((_a = props.tabs[newActiveIndex]) === null || _a === void 0 ? void 0 : _a.key);
      }
      setActiveIndex(newActiveIndex);
    });
    const [mergedId] = useMergedState(null, {
      value: computed(() => props.id)
    });
    const mergedTabPosition = computed(() => {
      if (mobile.value && !["left", "right"].includes(props.tabPosition)) {
        return "top";
      } else {
        return props.tabPosition;
      }
    });
    const onInternalTabClick = (key, e) => {
      var _a, _b;
      (_a = props.onTabClick) === null || _a === void 0 ? void 0 : _a.call(props, key, e);
      const isActiveChanged = key !== mergedActiveKey.value;
      setMergedActiveKey(key);
      if (isActiveChanged) {
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, key);
      }
    };
    useProvideTabs({
      tabs: computed(() => props.tabs),
      prefixCls
    });
    return () => {
      const {
        id,
        type,
        tabBarGutter,
        tabBarStyle,
        locale,
        destroyInactiveTabPane,
        renderTabBar = slots.renderTabBar,
        onTabScroll,
        hideAdd,
        centered
      } = props;
      const sharedProps = {
        id: mergedId.value,
        activeKey: mergedActiveKey.value,
        animated: mergedAnimated.value,
        tabPosition: mergedTabPosition.value,
        rtl: rtl.value,
        mobile: mobile.value
      };
      let editable;
      if (type === "editable-card") {
        editable = {
          onEdit: (editType, _ref2) => {
            let {
              key,
              event
            } = _ref2;
            var _a;
            (_a = props.onEdit) === null || _a === void 0 ? void 0 : _a.call(props, editType === "add" ? event : key, editType);
          },
          removeIcon: () => createVNode(CloseOutlined, null, null),
          addIcon: slots.addIcon ? slots.addIcon : () => createVNode(PlusOutlined, null, null),
          showAdd: hideAdd !== true
        };
      }
      let tabNavBar;
      const tabNavBarProps = _extends(_extends({}, sharedProps), {
        moreTransitionName: `${rootPrefixCls.value}-slide-up`,
        editable,
        locale,
        tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll,
        style: tabBarStyle,
        getPopupContainer: getPopupContainer.value,
        popupClassName: classNames(props.popupClassName, hashId.value)
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar(_extends(_extends({}, tabNavBarProps), {
          DefaultTabBar: TabNavList
        }));
      } else {
        tabNavBar = createVNode(TabNavList, tabNavBarProps, pick(slots, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      }
      const pre = prefixCls.value;
      return wrapSSR(createVNode("div", _objectSpread$2(_objectSpread$2({}, attrs), {}, {
        "id": id,
        "class": classNames(pre, `${pre}-${mergedTabPosition.value}`, {
          [hashId.value]: true,
          [`${pre}-${size.value}`]: size.value,
          [`${pre}-card`]: ["card", "editable-card"].includes(type),
          [`${pre}-editable-card`]: type === "editable-card",
          [`${pre}-centered`]: centered,
          [`${pre}-mobile`]: mobile.value,
          [`${pre}-editable`]: type === "editable-card",
          [`${pre}-rtl`]: rtl.value
        }, attrs.class)
      }), [tabNavBar, createVNode(TabPanelList, _objectSpread$2(_objectSpread$2({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]));
    };
  }
});
const Tabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: false,
  props: initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(props, _ref3) {
    let {
      attrs,
      slots,
      emit
    } = _ref3;
    const handleChange = (key) => {
      emit("update:activeKey", key);
      emit("change", key);
    };
    return () => {
      var _a;
      const tabs = parseTabList(flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)));
      return createVNode(InternalTabs, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, omit(props, ["onUpdate:activeKey"])), attrs), {}, {
        "onChange": handleChange,
        "tabs": tabs
      }), slots);
    };
  }
});
const tabPaneProps = () => ({
  tab: PropTypes.any,
  disabled: {
    type: Boolean
  },
  forceRender: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  animated: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
  destroyInactiveTabPane: {
    type: Boolean
  },
  // Pass by TabPaneList
  prefixCls: {
    type: String
  },
  tabKey: {
    type: [String, Number]
  },
  id: {
    type: String
  }
  // closeIcon: PropTypes.any,
});
const __nuxt_component_4 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: false,
  __ANT_TAB_PANE: true,
  props: tabPaneProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const visited = ref(props.forceRender);
    watch([() => props.active, () => props.destroyInactiveTabPane], () => {
      if (props.active) {
        visited.value = true;
      } else if (props.destroyInactiveTabPane) {
        visited.value = false;
      }
    }, {
      immediate: true
    });
    const mergedStyle = computed(() => {
      if (!props.active) {
        if (props.animated) {
          return {
            visibility: "hidden",
            height: 0,
            overflowY: "hidden"
          };
        } else {
          return {
            display: "none"
          };
        }
      }
      return {};
    });
    return () => {
      var _a;
      const {
        prefixCls,
        forceRender,
        id,
        active,
        tabKey
      } = props;
      return createVNode("div", {
        "id": id && `${id}-panel-${tabKey}`,
        "role": "tabpanel",
        "tabindex": active ? 0 : -1,
        "aria-labelledby": id && `${id}-tab-${tabKey}`,
        "aria-hidden": !active,
        "style": [mergedStyle.value, attrs.style],
        "class": [`${prefixCls}-tabpane`, active && `${prefixCls}-tabpane-active`, attrs.class]
      }, [(active || visited.value || forceRender) && ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
Tabs.TabPane = __nuxt_component_4;
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
  app.component(__nuxt_component_4.name, __nuxt_component_4);
  return app;
};

export { Tabs as T, __nuxt_component_4 as _ };
//# sourceMappingURL=index-6SbvSTPG.mjs.map
