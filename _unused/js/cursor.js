// Custom cursor module wrapper.
// Implementazione attiva in script.js (Task 23 done sul legacy). Da migrare.
export const initCursor = () => {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
};
