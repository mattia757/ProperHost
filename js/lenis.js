// Lenis smooth-scroll wrapper. Loaded via CDN (window.Lenis).
// Returns the instance so callers can pause / destroy.
// Hooks into GSAP ticker if GSAP + ScrollTrigger are present.

const easeOutExpo = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const initLenis = (options = {}) => {
  if (typeof window === 'undefined') return null;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return null;

  if (typeof window.Lenis !== 'function') {
    console.warn('[lenis] window.Lenis not found — CDN not loaded?');
    return null;
  }

  const lenis = new window.Lenis({
    duration: 1.2,
    easing: easeOutExpo,
    smoothWheel: true,
    smoothTouch: false,
    ...options,
  });

  if (window.gsap && window.ScrollTrigger) {
    lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  window.__lenis = lenis;
  return lenis;
};

export const destroyLenis = (instance) => {
  if (!instance) return;
  instance.destroy();
  if (window.__lenis === instance) delete window.__lenis;
};
