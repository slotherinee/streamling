import { ref, readonly } from 'vue';

function usePageReady(delay = 600) {
  const ready = ref(false);
  return readonly(ready);
}

export { usePageReady as u };
//# sourceMappingURL=usePageReady-CEiMWPaE.mjs.map
