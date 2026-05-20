// Swiper config helpers. Swiper itself is loaded via CDN (window.Swiper).

export const villaFadeConfig = () => ({
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: true,
  speed: 900,
  autoplay: { delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true },
  keyboard: { enabled: true },
  a11y: {
    prevSlideMessage: 'Villa precedente',
    nextSlideMessage: 'Villa successiva',
  },
});

export const serviziFreeModeConfig = () => ({
  slidesPerView: 1.2,
  spaceBetween: 24,
  freeMode: { enabled: true, momentum: true },
  breakpoints: {
    760: { slidesPerView: 1.6, spaceBetween: 28 },
    1024: { slidesPerView: 3, spaceBetween: 32 },
  },
});

export const createSwiper = (selector, config) => {
  if (typeof window === 'undefined' || !window.Swiper) {
    console.warn('[swiper] window.Swiper not found — CDN not loaded?');
    return null;
  }
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!el) return null;
  return new window.Swiper(el, config);
};
