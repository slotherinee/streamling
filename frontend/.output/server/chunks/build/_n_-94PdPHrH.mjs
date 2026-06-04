import { _ as __nuxt_component_5 } from './NuxtImg-zNev45Bl.mjs';
import { ao as useI18n, aw as useRoute, t as createError, an as useHead, az as useSeoMeta, _ as __nuxt_component_0, B as Button } from './server.mjs';
import { _ as __nuxt_component_9 } from './WatchModal-kUyGR5LH.mjs';
import { defineComponent, computed, withAsyncContext, ref, resolveDirective, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { e as fromTvShow, u as useProgressStore } from './progress-De0Fy5DO.mjs';
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
import './slide-C57riDBP.mjs';
import './motion-DJBbJh9Y.mjs';
import 'resize-observer-polyfill';
import 'dom-align';
import './index-hqCdhbUA.mjs';
import '../_/SearchOutlined.mjs';
import './zoom-ByxQdbsR.mjs';
import './auth-LLhfWJq6.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[n]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const route = useRoute();
    const mediaId = computed(() => Number(route.params.id));
    const seasonNumber = computed(() => Number(route.params.n));
    const [{ data: tvRaw, error: tvError }, { data: season, error: seasonError }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useApiFetch(() => `/tv/${mediaId.value}`),
      useApiFetch(() => `/tv/${mediaId.value}/season/${seasonNumber.value}`)
    ])), __temp = await __temp, __restore(), __temp);
    if (tvError.value || seasonError.value) throw createError({ statusCode: 404, message: "Season not found" });
    const media = computed(() => tvRaw.value ? fromTvShow(tvRaw.value) : null);
    useHead({ title: computed(() => `${media.value?.title ?? "Series"} — ${season.value?.name ?? "Season"} — Streamly`) });
    useSeoMeta({
      ogTitle: computed(() => `${media.value?.title} ${season.value?.name} — Streamly`),
      description: computed(() => season.value?.overview ?? ""),
      ogDescription: computed(() => season.value?.overview ?? ""),
      ogImage: computed(() => media.value?.backdrop ?? "/og-default.jpg"),
      twitterCard: "summary_large_image"
    });
    useProgressStore();
    const watchOpen = ref(false);
    const selectedEpisode = ref(1);
    const selectedSeason = ref(seasonNumber.value);
    function watchEpisode(episodeNumber) {
      selectedEpisode.value = episodeNumber;
      selectedSeason.value = seasonNumber.value;
      watchOpen.value = true;
    }
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const releasedEpisodes = computed(
      () => (season.value?.episodes ?? []).filter((e) => e.airDate && e.airDate <= today)
    );
    function formatDate(dateStr) {
      if (!dateStr) return "";
      try {
        return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      } catch {
        return dateStr;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_a_button = Button;
      const _component_WatchModal = __nuxt_component_9;
      const _directive_gsap = resolveDirective("gsap");
      if (unref(media) && unref(season)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="relative w-full h-[45vh] min-h-[320px] overflow-hidden">`);
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          src: unref(media).backdrop,
          alt: unref(media).title,
          class: "w-full h-full object-cover",
          width: "1920",
          height: "1080",
          format: "webp",
          loading: "eager"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { scale: 1.05, duration: 1.2, ease: "power2.out" }, void 0, { from: true })), null, _parent));
        _push(`<div class="absolute inset-0 bg-black/60"></div><div class="absolute bottom-0 left-0 right-0 h-40 gradient-to-t-black"></div><div${ssrRenderAttrs(mergeProps({ class: "absolute top-20 inset-x-0 px-4 sm:px-6 lg:px-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -20, duration: 0.5, delay: 0.2 }, void 0, { from: true })))}><div class="flex items-center gap-2 text-sm text-white/60">`);
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
        _push(`<span>/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/tv/${unref(mediaId)}`,
          class: "hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(media).title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(media).title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span>/</span><span class="text-white">${ssrInterpolate(unref(season).name)}</span></div></div><div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 30, duration: 0.7, delay: 0.1 }, void 0, { from: true })))}><div class="flex items-end gap-6">`);
        if (unref(season).poster) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: unref(season).poster,
            alt: unref(season).name,
            class: "hidden sm:block w-28 aspect-[2/3] object-cover rounded-xl border border-white/10 shadow-2xl flex-shrink-0",
            width: "112",
            height: "168",
            format: "webp"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div><p class="text-white/60 text-sm mb-1">${ssrInterpolate(unref(media).title)}</p><h1 class="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">${ssrInterpolate(unref(season).name)}</h1><div class="flex items-center gap-3 text-sm text-white/60"><span>${ssrInterpolate(unref(releasedEpisodes).length)} ${ssrInterpolate(_ctx.$t("season.episodes"))}</span>`);
        if (unref(season).airDate) {
          _push(`<span class="w-1 h-1 rounded-full bg-white/30"></span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(season).airDate) {
          _push(`<span>${ssrInterpolate(formatDate(unref(season).airDate))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div><div class="px-4 sm:px-8 py-10">`);
        if (unref(season).overview) {
          _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 20, duration: 0.5 }, void 0, { from: true })))}><p class="text-foreground/70 leading-relaxed max-w-3xl">${ssrInterpolate(unref(season).overview)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((unref(media).seasons ?? 1) > 1) {
          _push(`<div class="flex items-center gap-3 mb-8 flex-wrap"><span class="text-sm text-muted-foreground">${ssrInterpolate(_ctx.$t("season.jumpTo"))}</span><div class="flex gap-2 flex-wrap"><!--[-->`);
          ssrRenderList(unref(media).seasons ?? 1, (n) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: n,
              to: `/tv/${unref(mediaId)}/season/${n}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_button, {
                    type: n === unref(seasonNumber) ? "primary" : "default",
                    size: "small"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`S${ssrInterpolate(n)}`);
                      } else {
                        return [
                          createTextVNode("S" + toDisplayString(n), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      type: n === unref(seasonNumber) ? "primary" : "default",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("S" + toDisplayString(n), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
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
        _push(`<div class="space-y-3"><h2${ssrRenderAttrs(mergeProps({ class: "text-lg font-bold mb-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 10, duration: 0.4 }, void 0, { from: true })))}>${ssrInterpolate(_ctx.$t("season.episodesTitle"))}</h2><!--[-->`);
        ssrRenderList(unref(releasedEpisodes), (episode) => {
          _push(`<div class="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/30 transition-all duration-200 group"><div class="relative w-40 sm:w-52 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-secondary">`);
          if (episode.still) {
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: episode.still,
              alt: episode.name,
              class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
              loading: "lazy",
              format: "webp",
              width: "208",
              height: "117"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30"${ssrRenderAttr("aria-label", `Watch ${episode.name}`)}><div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"><svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div></button></div><div class="flex-1 min-w-0 py-1"><div class="flex items-start justify-between gap-2 mb-1"><div><span class="text-xs text-muted-foreground">${ssrInterpolate(_ctx.$t("season.episode"))} ${ssrInterpolate(episode.episodeNumber)}</span><h3 class="font-semibold text-foreground leading-tight">${ssrInterpolate(episode.name)}</h3></div>`);
          if (episode.runtime) {
            _push(`<span class="text-xs text-muted-foreground flex-shrink-0">${ssrInterpolate(episode.runtime)}m</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (episode.airDate) {
            _push(`<p class="text-xs text-muted-foreground mb-2">${ssrInterpolate(formatDate(episode.airDate))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="text-sm text-foreground/70 line-clamp-2 leading-relaxed">${ssrInterpolate(episode.overview)}</p></div><div class="hidden sm:flex items-center flex-shrink-0">`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            ghost: "",
            size: "small",
            class: "!opacity-0 group-hover:!opacity-100 transition-opacity",
            onClick: ($event) => watchEpisode(episode.episodeNumber)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("season.watch"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("season.watch")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (unref(media) && unref(watchOpen)) {
          _push(ssrRenderComponent(_component_WatchModal, {
            open: unref(watchOpen),
            "onUpdate:open": ($event) => isRef(watchOpen) ? watchOpen.value = $event : null,
            media: unref(media),
            "initial-season": unref(selectedSeason),
            "initial-episode": unref(selectedEpisode)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tv/[id]/season/[n].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_n_-94PdPHrH.mjs.map
