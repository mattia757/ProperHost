// i18n switcher module.
// Calcola l'href della lingua alternativa rispetto al path corrente.

export const getAlternateLocaleHref = (currentPath = window.location.pathname, target = 'en') => {
  const isEn = currentPath.startsWith('/en/') || currentPath === '/en';
  if (target === 'en') {
    if (isEn) return currentPath;
    if (currentPath === '/' || currentPath === '') return '/en/';
    return `/en${currentPath}`;
  }
  if (!isEn) return currentPath;
  const stripped = currentPath.replace(/^\/en\/?/, '/');
  return stripped || '/';
};

export const initI18n = () => {
  document.querySelectorAll('[data-locale-target]').forEach((el) => {
    const target = el.dataset.localeTarget;
    el.setAttribute('href', getAlternateLocaleHref(window.location.pathname, target));
  });
};
