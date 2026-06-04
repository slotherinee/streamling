export function usePageReady(delay = 600) {
  const ready = ref(false)
  onMounted(() => {
    setTimeout(() => { ready.value = true }, delay)
  })
  return readonly(ready)
}
