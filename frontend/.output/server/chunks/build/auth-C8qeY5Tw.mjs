import { u as defineNuxtRouteMiddleware, a8 as navigateTo } from './server.mjs';
import { u as useAuthStore } from './auth-LLhfWJq6.mjs';
import 'vue';
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
import 'vue/server-renderer';
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

const auth = defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  if (!authStore.hasUser) return navigateTo("/login");
});

export { auth as default };
//# sourceMappingURL=auth-C8qeY5Tw.mjs.map
