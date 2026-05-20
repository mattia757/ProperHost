// GSAP setup wrapper. Registers ScrollTrigger and exposes a helper for
// SplitText-style splitting (uses split-type CDN as fallback for non-Club users).

export const setupGsap = () => {
  if (typeof window === 'undefined') return null;
  if (!window.gsap) {
    console.warn('[gsap] window.gsap not found — CDN not loaded?');
    return null;
  }

  if (window.ScrollTrigger && !window.gsap.__stRegistered) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.gsap.__stRegistered = true;
  }

  return window.gsap;
};

// Lightweight wrapper that prefers Club SplitText if present,
// otherwise falls back to split-type (window.SplitType).
export const splitLines = (target) => {
  if (!target) return null;

  if (window.SplitText) {
    return new window.SplitText(target, { type: 'lines,words' });
  }

  if (window.SplitType) {
    const inst = new window.SplitType(target, { types: 'lines,words' });
    return { lines: inst.lines, words: inst.words, revert: () => inst.revert() };
  }

  return null;
};
