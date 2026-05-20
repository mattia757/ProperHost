// Servizi slider wrapper.
// Implementazione attiva in script.js (Task 32 done sul legacy). Da migrare a Swiper.
import { createSwiper, serviziFreeModeConfig } from './swiperSetup.js';

export const initServiziSlider = (selector = '.servizi-swiper') =>
  createSwiper(selector, serviziFreeModeConfig());
