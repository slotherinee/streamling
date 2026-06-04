export default defineNuxtPlugin(() => {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')

  function applyReducedMotion(matches: boolean) {
    if (!matches) return
    import('gsap').then(({ gsap }) => {
      gsap.defaults({ duration: 0, delay: 0 })
      gsap.globalTimeline.timeScale(1000)
    })
  }

  applyReducedMotion(query.matches)
  query.addEventListener('change', e => applyReducedMotion(e.matches))
})
