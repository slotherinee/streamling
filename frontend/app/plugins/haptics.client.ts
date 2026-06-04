import { fireHaptic } from '~/utils/haptic'

const INTERACTIVE = 'button:not([disabled]), a[href], [role="button"]:not([aria-disabled="true"])'

export default defineNuxtPlugin(() => {
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE)) {
        fireHaptic('selection')
      }
    },
    { capture: true, passive: true },
  )
})
