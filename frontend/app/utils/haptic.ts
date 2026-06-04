import { WebHaptics } from 'web-haptics'

export type HapticPresetName = 'selection' | 'soft' | 'nudge' | 'success' | 'error'

let _instance: WebHaptics | null = null

function getInstance(): WebHaptics {
  if (!_instance) _instance = new WebHaptics()
  return _instance
}

function isReducedMotion(): boolean {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function fireHaptic(preset: HapticPresetName): void {
  if (typeof window === 'undefined') return
  if (isReducedMotion()) return
  getInstance().trigger(preset)
}
