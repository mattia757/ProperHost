# _unused

Questa cartella contiene file non utilizzati dal sito live di ProperHost.
NON deployare questa cartella sul server di produzione.

## Contenuto

### js/ — Moduli JS (refactoring modulare non collegato all'HTML)
I file HTML caricano solo `script.js`. Questa cartella contiene un refactoring
modulare pianificato (entry point `js/main.js` + moduli ES) mai collegato alle pagine.

### css/ — Moduli CSS (refactoring modulare non collegato all'HTML)
I file HTML caricano solo `style.css`. Questa cartella contiene un refactoring
modulare (`css/main.css` con @import) mai collegato alle pagine.

### data/ — File dati JSON (non caricati dal JS runtime)
`villas.json` e i file `i18n/` sono stati creati per un sistema di dati dinamico
che non è mai stato collegato al JS del sito.

### scripts/ — Script di sviluppo
`inject-cdn.js` — tool Node per iniettare CDN link negli HTML.

### Dev configs
- `package.json` — solo per linting (eslint/prettier)
- `.prettierrc.json`, `.eslintrc.json`, `.editorconfig`, `.prettierignore`

### Loghi non utilizzati
- `logo.jpg`, `logo.png`, `logo-backup.png`, `logo-senza-sfondo.png`
  Il sito usa solo `logo-removebg-preview.png`, `assets/logo-full-white.png` e `assets/logo-full-teal.png`.

### optimize_photos.py
Script Python per ottimizzare le foto (dev tool, non necessario in produzione).
