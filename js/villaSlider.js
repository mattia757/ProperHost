// Villa slider wrapper.
// Implementazione attiva in script.js (Task 30 done sul legacy). Da migrare a Swiper.
import { createSwiper, villaFadeConfig } from './swiperSetup.js';

export const initVillaSlider = (selector = '.villa-swiper') =>
  createSwiper(selector, villaFadeConfig());
