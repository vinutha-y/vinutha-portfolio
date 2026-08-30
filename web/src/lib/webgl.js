// Cheap WebGL support probe — used to decide whether to mount the R3F
// canvas at all, so the site degrades to a static diagram instead of a
// blank/broken hero on very old devices or locked-down browsers.
export function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function isLowEndDevice() {
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4; // Chromium-only, undefined elsewhere
  const smallScreen = window.innerWidth < 640;
  return cores <= 4 || mem <= 4 || smallScreen;
}
