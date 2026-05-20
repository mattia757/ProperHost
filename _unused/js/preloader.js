// Preloader module wrapper.
// L'implementazione attiva del preloader vive in script.js durante la
// migrazione (Task 22 done sui file legacy). Da migrare qui poi.
export const initPreloader = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('.preloader')?.classList.add('hidden');
  }
};
