export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach(() => {
    import('gsap').then(({ gsap }) => {
      gsap.killTweensOf('*')
    })
  })

  router.afterEach(() => {
    nextTick(() => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh()
      }).catch(() => {})
    })
  })
})
