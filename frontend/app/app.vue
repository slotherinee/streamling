<script setup lang="ts">
import { theme as antTheme } from 'ant-design-vue'

useHead({
  htmlAttrs: { class: 'dark' },
})

const antdTheme = {
  algorithm: antTheme.darkAlgorithm,
  token: {
    colorPrimary: '#1677ff',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    borderRadius: 10,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    colorBgBase: '#0a0a0a',
    colorBgContainer: '#141414',
    colorBgElevated: '#1c1c1c',
  },
}

const pageTransition = {
  mode: 'out-in',
  onLeave(el: Element, done: () => void) {
    const anim = (el as HTMLElement).animate(
      [{ opacity: '1' }, { opacity: '0' }],
      { duration: 150, easing: 'ease', fill: 'forwards' },
    )
    anim.onfinish = done
    anim.oncancel = done
  },
  onEnter(el: Element, done: () => void) {
    const anim = (el as HTMLElement).animate(
      [{ opacity: '0' }, { opacity: '1' }],
      { duration: 220, easing: 'ease' },
    )
    anim.onfinish = done
    anim.oncancel = done
  },
}
</script>

<template>
  <a-config-provider :theme="antdTheme">
    <a-extract-style>
      <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
          <NuxtPage :transition="pageTransition" />
        </NuxtLayout>
      </div>
    </a-extract-style>
  </a-config-provider>
</template>

<style>
/* ── Layout transitions ── */
.layout-enter-active { transition: opacity 0.35s ease; }
.layout-leave-active { transition: opacity 0.2s ease; }
.layout-enter-from,
.layout-leave-to { opacity: 0; }
</style>
