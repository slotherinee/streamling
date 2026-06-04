function fireHaptic(preset) {
  return;
}
function useHaptic() {
  return {
    success: () => fireHaptic(),
    error: () => fireHaptic(),
    nudge: () => fireHaptic(),
    soft: () => fireHaptic(),
    selection: () => fireHaptic()
  };
}

export { useHaptic as u };
//# sourceMappingURL=useHaptic-NT3uIsTJ.mjs.map
