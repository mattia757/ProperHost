// Optional ES-module entry point. The legacy script.js still drives the
// existing UI; this file lets future modules opt in to GSAP/Lenis when
// the CDN libraries are loaded.

import { setupGsap } from './gsapSetup.js';
import { initLenis } from './lenis.js';

document.addEventListener('DOMContentLoaded', () => {
  setupGsap();
  initLenis();
});
