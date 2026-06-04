import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _extends from '@babel/runtime/helpers/esm/extends';
import { defineComponent, shallowRef, computed, watch, nextTick, createVNode, inject, watchEffect, ref, Fragment, provide } from 'vue';
import { al as useConfigInject, T as getPropsSlot, G as genComponentStyleHook, a7 as merge, e as PropTypes, aa as resetComponent, aC as warning, o as classNames, Z as getTransitionName, a2 as initDefaultProps, aE as withInstall, z as flattenChildren, x as filterEmpty, h as anyType } from './server.mjs';
import { u as useResponsiveObserver, r as responsiveArray } from './responsiveObserve-CTFzy5SU.mjs';
import { R as ResizeObserver, o as omit, c as cloneElement } from './motion-DJBbJh9Y.mjs';
import { T as Tooltip, t as tooltipDefaultProps, a as abstractTooltipProps, b as getArrowStyle } from './collapseMotion-CIsPMioQ.mjs';
import { i as initZoomMotion } from './zoom-ByxQdbsR.mjs';
import { P as PresetColors } from './colors-ByhoJTJo.mjs';

function useBreakpoint() {
  const screens = shallowRef({});
  useResponsiveObserver();
  return screens;
}
function eagerComputed(fn) {
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, {
    flush: "sync"
    // needed so updates are immediate.
  });
  return result;
}
const genBaseStyle$1 = (token) => {
  const {
    antCls,
    componentCls,
    iconCls,
    avatarBg,
    avatarColor,
    containerSize,
    containerSizeLG,
    containerSizeSM,
    textFontSize,
    textFontSizeLG,
    textFontSizeSM,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    lineWidth,
    lineType
  } = token;
  const avatarSizeStyle = (size, fontSize, radius) => ({
    width: size,
    height: size,
    lineHeight: `${size - lineWidth * 2}px`,
    borderRadius: "50%",
    [`&${componentCls}-square`]: {
      borderRadius: radius
    },
    [`${componentCls}-string`]: {
      position: "absolute",
      left: {
        _skip_check_: true,
        value: "50%"
      },
      transformOrigin: "0 center"
    },
    [`&${componentCls}-icon`]: {
      fontSize,
      [`> ${iconCls}`]: {
        margin: 0
      }
    }
  });
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      color: avatarColor,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: avatarBg,
      border: `${lineWidth}px ${lineType} transparent`,
      [`&-image`]: {
        background: "transparent"
      },
      [`${antCls}-image-img`]: {
        display: "block"
      }
    }), avatarSizeStyle(containerSize, textFontSize, borderRadius)), {
      [`&-lg`]: _extends({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG)),
      [`&-sm`]: _extends({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
};
const genGroupStyle = (token) => {
  const {
    componentCls,
    groupBorderColor,
    groupOverlapping,
    groupSpace
  } = token;
  return {
    [`${componentCls}-group`]: {
      display: "inline-flex",
      [`${componentCls}`]: {
        borderColor: groupBorderColor
      },
      [`> *:not(:first-child)`]: {
        marginInlineStart: groupOverlapping
      }
    },
    [`${componentCls}-group-popover`]: {
      [`${componentCls} + ${componentCls}`]: {
        marginInlineStart: groupSpace
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Avatar", (token) => {
  const {
    colorTextLightSolid,
    colorTextPlaceholder
  } = token;
  const avatarToken = merge(token, {
    avatarBg: colorTextPlaceholder,
    avatarColor: colorTextLightSolid
  });
  return [genBaseStyle$1(avatarToken), genGroupStyle(avatarToken)];
}, (token) => {
  const {
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    fontSize,
    fontSizeLG,
    fontSizeXL,
    fontSizeHeading3,
    marginXS,
    marginXXS,
    colorBorderBg
  } = token;
  return {
    containerSize: controlHeight,
    containerSizeLG: controlHeightLG,
    containerSizeSM: controlHeightSM,
    textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
    textFontSizeLG: fontSizeHeading3,
    textFontSizeSM: fontSize,
    groupSpace: marginXXS,
    groupOverlapping: -marginXS,
    groupBorderColor: colorBorderBg
  };
});
const AvatarContextKey = /* @__PURE__ */ Symbol("AvatarContextKey");
const useAvatarInjectContext = () => {
  return inject(AvatarContextKey, {});
};
const useAvatarProviderContext = (context) => {
  return provide(AvatarContextKey, context);
};
const avatarProps = () => ({
  prefixCls: String,
  shape: {
    type: String,
    default: "circle"
  },
  size: {
    type: [Number, String, Object],
    default: () => "default"
  },
  src: String,
  /** Srcset of image avatar */
  srcset: String,
  icon: PropTypes.any,
  alt: String,
  gap: Number,
  draggable: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: String,
  loadError: {
    type: Function
  }
});
const Avatar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatar",
  inheritAttrs: false,
  props: avatarProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const isImgExist = shallowRef(true);
    const isMounted = shallowRef(false);
    const scale = shallowRef(1);
    const avatarChildrenRef = shallowRef(null);
    const avatarNodeRef = shallowRef(null);
    const {
      prefixCls
    } = useConfigInject("avatar", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const avatarCtx = useAvatarInjectContext();
    const size = computed(() => {
      return props.size === "default" ? avatarCtx.size : props.size;
    });
    const screens = useBreakpoint();
    const responsiveSize = eagerComputed(() => {
      if (typeof props.size !== "object") {
        return void 0;
      }
      const currentBreakpoint = responsiveArray.find((screen) => screens.value[screen]);
      const currentSize = props.size[currentBreakpoint];
      return currentSize;
    });
    const responsiveSizeStyle = (hasIcon) => {
      if (responsiveSize.value) {
        return {
          width: `${responsiveSize.value}px`,
          height: `${responsiveSize.value}px`,
          lineHeight: `${responsiveSize.value}px`,
          fontSize: `${hasIcon ? responsiveSize.value / 2 : 18}px`
        };
      }
      return {};
    };
    const setScaleParam = () => {
      if (!avatarChildrenRef.value || !avatarNodeRef.value) {
        return;
      }
      const childrenWidth = avatarChildrenRef.value.offsetWidth;
      const nodeWidth = avatarNodeRef.value.offsetWidth;
      if (childrenWidth !== 0 && nodeWidth !== 0) {
        const {
          gap = 4
        } = props;
        if (gap * 2 < nodeWidth) {
          scale.value = nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1;
        }
      }
    };
    const handleImgLoadError = () => {
      const {
        loadError
      } = props;
      const errorFlag = loadError === null || loadError === void 0 ? void 0 : loadError();
      if (errorFlag !== false) {
        isImgExist.value = false;
      }
    };
    watch(() => props.src, () => {
      nextTick(() => {
        isImgExist.value = true;
        scale.value = 1;
      });
    });
    watch(() => props.gap, () => {
      nextTick(() => {
        setScaleParam();
      });
    });
    return () => {
      var _a, _b;
      const {
        shape,
        src,
        alt,
        srcset,
        draggable,
        crossOrigin
      } = props;
      const mergeShape = (_a = avatarCtx.shape) !== null && _a !== void 0 ? _a : shape;
      const icon = getPropsSlot(slots, props, "icon");
      const pre = prefixCls.value;
      const classString = {
        [`${attrs.class}`]: !!attrs.class,
        [pre]: true,
        [`${pre}-lg`]: size.value === "large",
        [`${pre}-sm`]: size.value === "small",
        [`${pre}-${mergeShape}`]: true,
        [`${pre}-image`]: src && isImgExist.value,
        [`${pre}-icon`]: icon,
        [hashId.value]: true
      };
      const sizeStyle = typeof size.value === "number" ? {
        width: `${size.value}px`,
        height: `${size.value}px`,
        lineHeight: `${size.value}px`,
        fontSize: icon ? `${size.value / 2}px` : "18px"
      } : {};
      const children = (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      let childrenToRender;
      if (src && isImgExist.value) {
        childrenToRender = createVNode("img", {
          "draggable": draggable,
          "src": src,
          "srcset": srcset,
          "onError": handleImgLoadError,
          "alt": alt,
          "crossorigin": crossOrigin
        }, null);
      } else if (icon) {
        childrenToRender = icon;
      } else if (isMounted.value || scale.value !== 1) {
        const transformString = `scale(${scale.value}) translateX(-50%)`;
        const childrenStyle = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString
        };
        const sizeChildrenStyle = typeof size.value === "number" ? {
          lineHeight: `${size.value}px`
        } : {};
        childrenToRender = createVNode(ResizeObserver, {
          "onResize": setScaleParam
        }, {
          default: () => [createVNode("span", {
            "class": `${pre}-string`,
            "ref": avatarChildrenRef,
            "style": _extends(_extends({}, sizeChildrenStyle), childrenStyle)
          }, [children])]
        });
      } else {
        childrenToRender = createVNode("span", {
          "class": `${pre}-string`,
          "ref": avatarChildrenRef,
          "style": {
            opacity: 0
          }
        }, [children]);
      }
      return wrapSSR(createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "ref": avatarNodeRef,
        "class": classString,
        "style": [sizeStyle, responsiveSizeStyle(!!icon), attrs.style]
      }), [childrenToRender]));
    };
  }
});
const genBaseStyle = (token) => {
  const {
    componentCls,
    popoverBg,
    popoverColor,
    width,
    fontWeightStrong,
    popoverPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG: borderRadius,
    zIndexPopup,
    marginXS,
    colorBgElevated
  } = token;
  return [
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: true,
          value: 0
        },
        zIndex: zIndexPopup,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        "--antd-arrow-background-color": colorBgElevated,
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        [`${componentCls}-inner`]: {
          backgroundColor: popoverBg,
          backgroundClip: "padding-box",
          borderRadius,
          boxShadow: boxShadowSecondary,
          padding: popoverPadding
        },
        [`${componentCls}-title`]: {
          minWidth: width,
          marginBottom: marginXS,
          color: colorTextHeading,
          fontWeight: fontWeightStrong
        },
        [`${componentCls}-inner-content`]: {
          color: popoverColor
        }
      })
    },
    // Arrow Style
    getArrowStyle(token, {
      colorBg: "var(--antd-arrow-background-color)"
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        [`${componentCls}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
};
const genColorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: PresetColors.map((colorKey) => {
      const lightColor = token[`${colorKey}-6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          "--antd-arrow-background-color": lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit,
    paddingSM,
    controlHeight,
    fontSize,
    lineHeight,
    padding
  } = token;
  const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        padding: 0
      },
      [`${componentCls}-title`]: {
        margin: 0,
        padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
        borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
      },
      [`${componentCls}-inner-content`]: {
        padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
      }
    }
  };
};
const useStyle = genComponentStyleHook("Popover", (token) => {
  const {
    colorBgElevated,
    colorText,
    wireframe
  } = token;
  const popoverToken = merge(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12
    // Fixed Value
  });
  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), initZoomMotion(popoverToken, "zoom-big")];
}, (_ref) => {
  let {
    zIndexPopupBase
  } = _ref;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
});
const popoverProps = () => _extends(_extends({}, abstractTooltipProps()), {
  content: anyType(),
  title: anyType()
});
const Popover = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APopover",
  inheritAttrs: false,
  props: initDefaultProps(popoverProps(), _extends(_extends({}, tooltipDefaultProps()), {
    trigger: "hover",
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup(props, _ref) {
    let {
      expose,
      slots,
      attrs
    } = _ref;
    const tooltipRef = ref();
    warning(props.visible === void 0);
    expose({
      getPopupDomNode: () => {
        var _a, _b;
        return (_b = (_a = tooltipRef.value) === null || _a === void 0 ? void 0 : _a.getPopupDomNode) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
    const {
      prefixCls,
      configProvider
    } = useConfigInject("popover", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const rootPrefixCls = computed(() => configProvider.getPrefixCls());
    const getOverlay = () => {
      var _a, _b;
      const {
        title = filterEmpty((_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots)),
        content = filterEmpty((_b = slots.content) === null || _b === void 0 ? void 0 : _b.call(slots))
      } = props;
      const hasTitle = !!(Array.isArray(title) ? title.length : title);
      const hasContent = !!(Array.isArray(content) ? content.length : title);
      if (!hasTitle && !hasContent) return null;
      return createVNode(Fragment, null, [hasTitle && createVNode("div", {
        "class": `${prefixCls.value}-title`
      }, [title]), createVNode("div", {
        "class": `${prefixCls.value}-inner-content`
      }, [content])]);
    };
    return () => {
      const overlayCls = classNames(props.overlayClassName, hashId.value);
      return wrapSSR(createVNode(Tooltip, _objectSpread(_objectSpread(_objectSpread({}, omit(props, ["title", "content"])), attrs), {}, {
        "prefixCls": prefixCls.value,
        "ref": tooltipRef,
        "overlayClassName": overlayCls,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom-big", props.transitionName),
        "data-popover-inject": true
      }), {
        title: getOverlay,
        default: slots.default
      }));
    };
  }
});
const Popover$1 = withInstall(Popover);
const groupProps = () => ({
  prefixCls: String,
  maxCount: Number,
  maxStyle: {
    type: Object,
    default: void 0
  },
  maxPopoverPlacement: {
    type: String,
    default: "top"
  },
  maxPopoverTrigger: String,
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: {
    type: [Number, String, Object],
    default: "default"
  },
  shape: {
    type: String,
    default: "circle"
  }
});
const Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AAvatarGroup",
  inheritAttrs: false,
  props: groupProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("avatar", props);
    const groupPrefixCls = computed(() => `${prefixCls.value}-group`);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    watchEffect(() => {
      const context = {
        size: props.size,
        shape: props.shape
      };
      useAvatarProviderContext(context);
    });
    return () => {
      const {
        maxPopoverPlacement = "top",
        maxCount,
        maxStyle,
        maxPopoverTrigger = "hover",
        shape
      } = props;
      const cls = {
        [groupPrefixCls.value]: true,
        [`${groupPrefixCls.value}-rtl`]: direction.value === "rtl",
        [`${attrs.class}`]: !!attrs.class,
        [hashId.value]: true
      };
      const children = getPropsSlot(slots, props);
      const childrenWithProps = flattenChildren(children).map((child, index) => cloneElement(child, {
        key: `avatar-key-${index}`
      }));
      const numOfChildren = childrenWithProps.length;
      if (maxCount && maxCount < numOfChildren) {
        const childrenShow = childrenWithProps.slice(0, maxCount);
        const childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
        childrenShow.push(createVNode(Popover$1, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": maxPopoverTrigger,
          "placement": maxPopoverPlacement,
          "overlayClassName": `${groupPrefixCls.value}-popover`
        }, {
          default: () => [createVNode(Avatar, {
            "style": maxStyle,
            "shape": shape
          }, {
            default: () => [`+${numOfChildren - maxCount}`]
          })]
        }));
        return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]));
      }
      return wrapSSR(createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]));
    };
  }
});
Avatar.Group = Group;
Avatar.install = function(app) {
  app.component(Avatar.name, Avatar);
  app.component(Group.name, Group);
  return app;
};

export { Avatar as A };
//# sourceMappingURL=index-D8L1WcIT.mjs.map
