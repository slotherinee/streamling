import { fireHaptic } from '~/utils/haptic'

export function useHaptic() {
  return {
    success: () => fireHaptic('success'),
    error: () => fireHaptic('error'),
    nudge: () => fireHaptic('nudge'),
    soft: () => fireHaptic('soft'),
    selection: () => fireHaptic('selection'),
  }
}
