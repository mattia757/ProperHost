# in_progress — ProperHost (Static HTML/CSS/JS)

## Task Queue

Ogni task viene assegnata a un solo agent specializzato.
Ogni task lavora e pusha sul branch `openHands`.
Ogni task deve restare entro il proprio scope.
Non fare interventi fuori perimetro.
Non mischiare UI con logica JS.
Non rompere elementi esistenti.

## Premessa

Questa task queue copre lo sviluppo e il refinement completo del sito ProperHost come progetto **statico**, realizzato con **HTML5, CSS3 e JavaScript vanilla (ES2020+)**. Nessun framework UI, nessun bundler obbligatorio, nessuna dipendenza pesante.

Il sito esiste già nei file di root: `index.html`, `about.html`, `concierge.html`, `ville.html`, `contatti.html`, `style.css`, `script.js`, `assets/`. Le task sotto coprono sia il polish dell'esistente sia l'aggiunta di nuove feature (preloader, custom cursor, animazioni avanzate, i18n IT/EN, pagine villa singola, modal prenotazione, ottimizzazione performance, deploy).

I contenuti, palette, tipografia, nomi ville, contatti e identità di ProperHost restano invariati. Nessun task chiede di replicare elementi distintivi di brand altrui. Vedi sezione "Identità ProperHost": è il vincolo che ogni task deve rispettare.

## Identità ProperHost (vincolante)

### Palette (CSS variables)
- `--primary: #0b6b5e` — teal profondo (azioni primarie, link, accenti)
- `--primary-dark: #053e36` — teal notturno (overlay, footer)
- `--primary-soft: #022823` — nero-verde (footer scuro)
- `--accent: #b89968` — oro antico (accenti luxury, hover, dettagli)
- `--accent-soft: #d8c19a` — oro chiaro (hover, dettagli)
- `--accent-deep: #8a6f43` — oro scuro (testi su chiaro)
- `--bg: #f6f1e8` — avorio caldo (sfondo principale)
- `--bg-2: #efe7d6` — sabbia chiara (fasce alternate)
- `--bg-3: #e7dcc6` — sabbia calda (dettagli)
- `--bg-warm: #fbf7ef` — bianco caldo
- `--text: #1c2826` — testo principale
- `--text-2: #3f504c` — testo body
- `--muted: #7a857f` — metadati

### Tipografia
- Display (H1-H3, claim, wordmark): **Cormorant Garamond** — italic 400/500, regular 300/400. Caricata via Google Fonts con `<link rel="preconnect">` + `<link rel="stylesheet">` o `@import` in CSS (preferire `<link>` per performance).
- Body (paragrafi, UI, microcopy): **Inter** — 300/400/500/600/700. Caricata via Google Fonts allo stesso modo.

### Brand
- Nome: **Properhost** · Hospitality
- Tagline: Ospitalità siciliana di charme, ville selezionate e servizi tailor-made per soggiorni autentici sull'isola.
- Sede: Palermo · Sicilia · Italia
- Contatti: +39 339 2923 744 · +39 392 5108 539 · properhost.company@gmail.com · www.properhost.it
- Ville (6): Villa Aurea (Taormina) · Villa Zagara (Noto) · Villa Bianca (Siracusa) · Villa Soho (Ragusa) · Villa Manu (Modica) · Villa Dolce Vita (Scicli)
- Servizi (6): Servizio Navetta · Noleggio Mezzi · Noleggio Gommoni · Chef Privato · Tour Favignana · Tour Levanzo

### Vietato
- Usare palette diverse da quella sopra (no `#7f98b2`, `#496f91`, `#D36B3D` o altri toni che non siano in `--primary*`/`--accent*`/`--bg*`).
- Usare font diversi da Cormorant Garamond + Inter (no NT Fabulous, no Raleway, no Archivo).
- Inventare nomi di ville o servizi non presenti nella lista sopra.
- Copiare claim editoriali da altri brand (no "Vivi la Sicilia, davvero", "Concierge smart per ogni esigenza", "Ville d'incanto, immerse nella bellezza siciliana", "La tua fuga da sogno comincia qui", "Siamo custodi di un'ospitalità raffinata", "Sicilia, su misura"). Il copy ProperHost esistente nei file `index.html` / `about.html` / `concierge.html` / `ville.html` / `contatti.html` è la fonte autorevole — riusarlo, eventualmente raffinarlo, mai sostituirlo con copy altrui.
- Usare email / P.IVA / domini di altri brand.
- Introdurre framework (React, Vue, Svelte, Next.js, ecc.) o bundler obbligatori (Webpack, Vite con framework, ecc.).

## Workflow

1. Assegna task all'agent corretto (vedi campo `Agent`).
2. L'agent lavora solo sul branch indicato in `Branch`.
3. L'agent completa la task senza uscire dallo `Scope`.
4. L'agent testa su mobile (375px), tablet (768px), desktop (1440px).
5. L'agent prepara commit convenzionale (`feat:`, `fix:`, `chore:`, `style:`, `refactor:`).
6. Merge manuale solo dopo verifica visiva e funzionale.

## Regole globali

- HTML5 semantico, CSS3 moderno, JavaScript vanilla (ES2020+).
- Niente framework UI o frontend.
- Librerie esterne (Lenis, GSAP, Swiper) caricate via CDN ufficiale o file locali in `vendor/`. Documentare nel commit la versione esatta.
- Codice modulare: separare logica in moduli JS distinti dentro `js/`, importati con `<script type="module" src="./js/main.js">`. `script.js` legacy può essere mantenuto durante la migrazione e ridotto via via.
- Niente jQuery.
- Niente `var`: usare `const`/`let`. Niente `function` style legacy quando una arrow funziona.
- Tutti i listener registrati globalmente devono essere cleanup-able o documentati come permanenti.
- Tutte le animazioni rispettano `prefers-reduced-motion`.
- Un task = un obiettivo chiaro. Niente scope creep.
- Tutti i commit dei task vanno sul branch indicato; merge in `main` solo dopo review.
- Non mischiare task diverse nello stesso commit.
- Non creare nuovi file se non previsti dalla task; in caso, chiedere prima.
- Non fare push di modifiche non testate.
- Non toccare aree non richieste.
- Se una task richiede sia UI che logica JS pesante, dividila in due task separate.

---

### Task 01
- **Status**: done
- **Agent**: ui-designer
- **Branch**: openHands
- **Priority**: high
- **Title**: Material design shadows system
- **Desc**: Introdurre shadow layered, border-radius coerenti, micro-interactions e gerarchia visiva più premium.
- **Scope**: miglioramento visuale globale.
- **Files**: style.css
- **Notes**: commit già pushato.

---

### Task 02
- **Status**: in_progress
- **Agent**: ui-designer
- **Branch**: feature/hero-animations
- **Priority**: high
- **Title**: Hero scroll animation polish
- **Desc**: Rendere la hero section più elegante con animazioni allo scroll, ingresso testi, overlay morbidi e parallax leggero.
- **Scope**: hero fullscreen, intro iniziale, transizioni visive.
- **Files**: index.html, style.css
- **Dependencies**: nessuna.
- **Notes**: mantenere la leggibilità del testo sul video background.

---

### Task 03
- **Status**: in_progress
- **Agent**: ui-designer
- **Branch**: feature/mobile-optimization
- **Priority**: high
- **Title**: Mobile visual optimization
- **Desc**: Migliorare responsive layout, spacing, touch targets, menu mobile e densità visiva su schermi piccoli.
- **Scope**: mobile/tablet UX.
- **Files**: style.css, index.html
- **Dependencies**: nessuna.
- **Notes**: niente overflow orizzontale, niente elementi troppo piccoli.

---

### Task 04
- **Status**: in_progress
- **Agent**: coder
- **Branch**: feature/villa-slider
- **Priority**: medium
- **Title**: Villa slider enhancement
- **Desc**: Aggiungere touch swipe, autoplay più fluido, pause on interaction, indicatori e transizioni più stabili.
- **Scope**: slider ville.
- **Files**: script.js, index.html
- **Dependencies**: style system già definito.
- **Notes**: testare su mobile e keyboard interaction.

---

### Task 05
- **Status**: in_progress
- **Agent**: coder
- **Branch**: feature/form-validation
- **Priority**: medium
- **Title**: Contact form validation
- **Desc**: Implementare validazione campi, messaggi di errore chiari, success state e gestione submit.
- **Scope**: form contatti.
- **Files**: script.js, contatti.html
- **Dependencies**: nessuna.
- **Notes**: messaggi accessibili e comprensibili.

---

### Task 06
- **Status**: in_progress
- **Agent**: coder
- **Branch**: feature/page-speed
- **Priority**: low
- **Title**: Page speed optimization
- **Desc**: Ottimizzare caricamento media, lazy loading, comportamento video, e logica JS non necessaria.
- **Scope**: performance frontend.
- **Files**: index.html, style.css, script.js
- **Dependencies**: verificare impatto su hero video.
- **Notes**: non sacrificare qualità visiva.

---

### Task 07
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/text-alignment-spacing
- **Priority**: high
- **Title**: Text alignment & spacing fix
- **Desc**: Verificare e correggere l'allineamento di tutti i testi su desktop, tablet e mobile. I testi non devono risultare mai decentrati, fuori asse o sbilenchi. Aggiungere `margin` e `padding` adeguati ovunque il testo sia troppo attaccato al bordo del proprio riquadro/contenitore. Controllare in particolare: hero text, sezione ville, sezione contatti, card, titoli di sezione e paragrafi descrittivi. Nessun testo deve toccare i bordi del proprio contenitore senza respirare.
- **Scope**: tipografia e spaziatura globale, tutte le pagine.
- **Files**: style.css
- **Dependencies**: nessuna.
- **Notes**: attenzione agli elementi centrati con `text-align: center` che su mobile diventano sbilenchi; testare sempre su viewport 375px, 768px e 1440px.

---

### Task 08
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/transition-speed-fix
- **Priority**: high
- **Title**: Transition speed optimization
- **Desc**: Le attuali transizioni e animazioni CSS risultano troppo lente e si percepisce un ritardo visivo importante. Ridurre la durata delle `transition` e delle `animation` su tutti gli elementi interattivi (hover, reveal, scroll-trigger). Puntare a valori tra 150ms e 400ms per le micro-interazioni e 500ms-700ms per gli scroll reveal più elaborati. Rimuovere o ridurre `transition-delay` eccessivi. Verificare che nessun elemento sembri "in ritardo" all'apertura della pagina o allo scroll.
- **Scope**: tutte le animazioni e transizioni CSS, globale.
- **Files**: style.css
- **Dependencies**: nessuna.
- **Notes**: non eliminare le animazioni, solo velocizzarle. Mantenere `ease-out` o `cubic-bezier` fluido per qualità percepita alta.

---

### Task 09
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/hero-text-position
- **Priority**: high
- **Title**: Hero text position fix
- **Desc**: In `index.html` il testo centrale posizionato sotto il nav occupa uno spazio errato e in alcuni casi copre o si sovrappone alla navbar. Correggere il posizionamento in modo che il testo hero sia visibile per intero sotto il nav, correttamente centrato verticalmente nel viewport, senza sovrapposizioni. Usare `padding-top` o `margin-top` che tenga conto dell'altezza della navbar (es. con `var(--nav-height)` o valore fisso). Verificare su tutti i breakpoint.
- **Scope**: hero section in index.html.
- **Files**: style.css, index.html
- **Dependencies**: nessuna.
- **Notes**: la navbar è fixed o sticky? Assicurarsi di usare l'offset corretto per non coprire mai il testo hero. Testare su mobile e desktop.

---

### Task 10
- **Status**: done
- **Agent**: coder
- **Branch**: feature/slider-cursor-buttons
- **Priority**: medium
- **Title**: Slider magnetic cursor navigation buttons
- **Desc**: Nel carosello delle ville in `index.html`, aggiungere due bottoni di navigazione (freccia sinistra e freccia destra) con le seguenti caratteristiche: (1) appaiono solo quando il mouse si avvicina alla rispettiva estremità laterale dello slider (es. entro 120px dal bordo sinistro/destro); (2) seguono il cursore verticalmente in modo fluido tramite JavaScript (cursor-following effect); (3) sono composti da un cerchio piccolo (es. 48px) con sfondo semitrasparente o tinted (es. rgba del colore primario teal), con icona freccia Material Design centrata in bianco; (4) hanno effetto hover con leggera scala e cambio opacità; (5) sono completamente nascosti su mobile (touch swipe già gestito); (6) transizione di apparizione fluida (opacity + scale). Il comportamento deve essere implementato in JavaScript puro, l'aspetto grafico in CSS.
- **Scope**: slider delle ville in index.html — solo JS per logica cursor-follow e show/hide, solo CSS per stile bottoni.
- **Files**: script.js (o nuovo modulo `js/sliderCursorButtons.js`), style.css
- **Dependencies**: Task 04 (slider enhancement) deve essere completata o in stato avanzato.
- **Notes**: tenere separata la logica JS dallo styling CSS. Se l'intervento richiede modifiche HTML strutturali, limitarle al minimo indispensabile.

---

### Task 11
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/section-breathing-space
- **Priority**: medium
- **Title**: Inter-section spacing & breathing room
- **Desc**: Aggiungere spazio verticale adeguato tra tutte le sezioni di `index.html`. In particolare: dopo il carosello ville il contenuto successivo deve avere `margin-top` o `padding-top` sufficiente per respirare. Applicare una spaziatura verticale coerente tra tutte le sezioni della pagina (es. `padding: 80px 0` o `120px 0` per sezioni principali). Usare CSS custom properties per standardizzare i valori. Nessuna sezione deve sembrare "attaccata" alla precedente senza separazione visiva.
- **Scope**: spaziatura verticale tra sezioni, index.html.
- **Files**: style.css
- **Dependencies**: nessuna.
- **Notes**: non aggiungere spazio casuale, usare una scala ritmica (es. 40px, 80px, 120px). Verificare su mobile che la spaziatura non sia eccessiva.

---

### Task 12
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/whitespace-fill-sections
- **Priority**: medium
- **Title**: Whitespace fill & content density
- **Desc**: In `index.html` sono presenti aree con troppo spazio bianco vuoto che danno un'impressione di incompletezza. Identificare tutte le aree vuote e riempirle con contenuti visivi coerenti: aggiungere sezioni con testo descrittivo, card di servizi, citazioni, icone materiali, statistiche, o elementi decorativi sottili. Il contenuto aggiunto deve essere coerente con il brand ProperHost (hospitality siciliana, premium, teal/gold). Non aggiungere spazio, ma riempire quello esistente con qualcosa di significativo e bello.
- **Scope**: contenuto e layout visivo di index.html.
- **Files**: index.html, style.css
- **Dependencies**: nessuna.
- **Notes**: non inventare dati o informazioni false. Usare copy placeholder coerente con il tono ProperHost. Niente sezioni duplicate. Se si aggiungono icone, usare Material Icons già caricati o SVG inline.

---

### Task 13
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/background-image-reveals
- **Priority**: medium
- **Title**: Scroll-reveal background images
- **Desc**: Aggiungere più sezioni con immagini di background che si svelano progressivamente allo scroll. Le immagini di sfondo devono: (1) avere overlay semitrasparente per garantire leggibilità del testo sovrapposto; (2) usare `background-attachment: fixed` (parallax) dove supportato, o un effetto clip/reveal via scroll; (3) apparire in modo fluido con transizioni di opacità o scale; (4) usare immagini coerenti con Sicilia, ville, paesaggi mediterranei (usare i path già presenti nel progetto). Distribuire questi effetti in almeno 3 punti della pagina.
- **Scope**: sezioni con background image in index.html.
- **Files**: index.html, style.css
- **Dependencies**: Task 08 (transition speed) consigliata prima.
- **Notes**: non usare immagini esterne via URL remoti. Testare che il testo sopra le immagini sia sempre leggibile. Su mobile disabilitare `background-attachment: fixed` (causa jank su iOS).

---

### Task 14
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/ville-page-premium
- **Priority**: high
- **Title**: Ville page premium redesign
- **Desc**: La pagina delle ville è la più importante del sito e deve essere ridisegnata in chiave premium. Interventi richiesti: (1) galleria fotografica delle ville con layout a griglia o masonry, immagini grandi e di impatto; (2) card delle ville con ombre layered, border-radius coerente, hover con elevazione e reveal di dettagli; (3) sezione highlights di ogni villa con icone Material e copy descrittivo; (4) transizioni allo scroll per l'entrata di ogni elemento; (5) palette coerente con teal/gold/ivory, sfondi scuri o immagini full-width per separare le sezioni; (6) tipografia gerarchica chiara; (7) CTA visibile per ogni villa.
- **Scope**: pagina ville (ville.html), solo CSS e HTML strutturale visivo.
- **Files**: ville.html, style.css
- **Dependencies**: Task 07 (spacing), Task 08 (transition speed).
- **Notes**: non modificare la logica JS esistente. Se servono nuove classi HTML, aggiungerle con nomi semantici e documentarli. Usare le immagini già presenti nel progetto.

---

### Task 15
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/availability-cta-differentiation
- **Priority**: medium
- **Title**: "Richiedi disponibilità" CTA differentiation
- **Desc**: Il pulsante "Richiedi disponibilità" nel nav porta attualmente alla stessa pagina contatti, creando ridondanza. Differenziare le due esperienze: (1) il pulsante "Richiedi disponibilità" deve aprire un modal/drawer inline (senza navigare fuori dalla pagina) con un form sintetico: nome, villa desiderata (select), date check-in/check-out, numero ospiti, messaggio opzionale, invio; (2) la pagina "Contatti" rimane per richieste generali; (3) il pulsante nel nav deve essere stilisticamente distinto: stile button con colore gold (`#b89968`) o teal in contrasto con il nav, con piccola icona calendario o chiave. Il modal deve avere overlay scuro, chiusura con ESC e click fuori, animazione di entrata fluida.
- **Scope**: navbar (tutte le pagine), modal HTML/CSS, stile CTA. La logica JS modal va in task separata se diventa pesante.
- **Files**: index.html (e tutte le pagine), style.css; eventualmente `js/modalBooking.js`.
- **Dependencies**: nessuna.
- **Notes**: Il modal richiede logica JS (apertura, chiusura, validazione, submit) — coordinare con Task 05 o aprire task JS dedicata.

---

## Task Queue · Refactor Phase 1 — Architettura statica & primitive

---

### Task 16
- **Status**: done
- **Agent**: coder
- **Branch**: feature/project-structure
- **Priority**: high
- **Title**: Riorganizzazione struttura progetto statico
- **Desc**: Riorganizzare la struttura dei file per renderla manutenibile su scala. Mantenere il sito alla root (no sottocartelle per le pagine HTML in produzione, per pulizia degli URL: `/index.html`, `/about.html`, ecc.). Creare le seguenti cartelle: `css/` (suddividere `style.css` in moduli: `css/tokens.css`, `css/base.css`, `css/typography.css`, `css/components.css`, `css/sections.css`, `css/pages.css`, `css/responsive.css`, importati in ordine da un `css/main.css` con `@import` o linkati separatamente in `<head>`); `js/` (suddividere `script.js` in moduli ES: `js/main.js` come entry point con `<script type="module">`, `js/lenis.js`, `js/preloader.js`, `js/cursor.js`, `js/navbar.js`, `js/villaSlider.js`, `js/serviziSlider.js`, `js/faq.js`, `js/forms.js`, `js/i18n.js`, `js/animations.js`); `assets/` (immagini, video — già presente, mantenere); `vendor/` (eventuali librerie locali se non si usa CDN); `data/` (file JSON: `data/villas.json`, `data/services.json`, `data/faqs.json`, `data/i18n/it.json`, `data/i18n/en.json`); `og/` (immagini Open Graph). Mantenere `style.css` e `script.js` come puntatori temporanei/legacy durante la migrazione, da deprecare quando ogni modulo è migrato. Verificare che ogni pagina HTML referenzi i nuovi path e che il sito funzioni esattamente come prima dopo la riorganizzazione.
- **Scope**: solo riorganizzazione file, nessun cambiamento di logica o stile.
- **Files**: spostamento di style.css → css/* e script.js → js/*. Modifiche ai `<link>` e `<script>` in tutte le pagine HTML.
- **Dependencies**: nessuna.
- **Notes**: testare tutte le pagine dopo lo spostamento. Mantenere git history pulita usando `git mv` dove possibile. Niente file orfani.

---

### Task 17
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/css-tokens-fonts
- **Priority**: high
- **Title**: CSS variables (palette tokens) consolidate + Google Fonts wiring
- **Desc**: Consolidare TUTTE le CSS variables della palette ProperHost in un unico file `css/tokens.css`, definite dentro `:root { ... }`: tutte le voci della sezione "Identità ProperHost" + extra utili per l'app (`--white: #ffffff`, `--muted-2: #b8b0a0`, `--line: rgba(28,40,38,.10)`, `--line-strong: rgba(28,40,38,.22)`, `--shadow-sm: 0 8px 22px rgba(28,40,38,.06)`, `--shadow: 0 30px 70px rgba(5,30,28,.12)`, `--ease: cubic-bezier(.22,.61,.36,1)`, `--max: 1320px`, `--max-text: 680px`, `--nav-height: 92px`, `--nav-height-scrolled: 64px`). Rimuovere ogni hex inline da altri file CSS — sostituire con riferimento a `var(--*)`. In `<head>` di ogni pagina HTML aggiungere preconnect e load font Google: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap">`. In `css/typography.css` definire `--font-display: 'Cormorant Garamond', serif;` e `--font-body: 'Inter', system-ui, sans-serif;`, applicare al `body { font-family: var(--font-body); }` e creare classe `.font-display { font-family: var(--font-display); }` per i titoli. Verificare con DevTools che le CSS vars siano risolte ovunque e che i font carichino senza FOIT (grazie a `display=swap`).
- **Scope**: solo tokens CSS + font wiring. Nessun nuovo componente.
- **Files**: nuovo `css/tokens.css`; modifiche in tutti i file CSS esistenti (sostituzione hex con var) e in tutti gli HTML (preconnect + link font).
- **Dependencies**: Task 16.
- **Notes**: NON usare hex inline nei componenti — sempre tramite CSS var. NON caricare font diversi da Cormorant Garamond e Inter. Verificare LCP non peggiori per il caricamento font (preconnect aiuta).

---

### Task 18
- **Status**: done
- **Agent**: coder
- **Branch**: feature/libs-loading
- **Priority**: high
- **Title**: Caricamento Lenis, GSAP, Swiper via CDN + wrapper modules
- **Desc**: Caricare le tre librerie principali via CDN ufficiale e creare wrapper JS che le incapsulino. **Lenis** (smooth scroll): `<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>` (versione bundled UMD) o ESM da `https://cdn.skypack.dev/lenis`. **GSAP + ScrollTrigger**: `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>` e `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>`. **Swiper**: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">` e `<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>`. Creare wrapper module `js/lenis.js` con factory `createLenis()` che ritorna istanza configurata `{ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, smoothTouch: false }`, registra raf loop e collega `lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(time => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0)`. Esportare anche `destroyLenis(instance)`. Wrapper `js/gsapSetup.js` registra `ScrollTrigger` e (se disponibile) `SplitText`; per SplitText senza licenza GSAP Club, usare fallback: caricare `split-type` da CDN `https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js` e wrappare con interfaccia compatibile. Wrapper `js/swiperSetup.js` esporta solo helper di config (autoplay, fade, freeMode) per i moduli che useranno Swiper. Tutti i caricamenti CDN devono usare `defer` per non bloccare il render iniziale, e `crossorigin="anonymous"` per integrità.
- **Scope**: solo caricamento librerie e wrapper. Nessun uso effettivo nei componenti (sarà nelle task 22, 23, 30, 32, 42, 43, 44).
- **Files**: nuovi `js/lenis.js`, `js/gsapSetup.js`, `js/swiperSetup.js`. Modifiche a tutte le pagine HTML in `<head>` per caricare CDN.
- **Dependencies**: Task 16.
- **Notes**: pinare le versioni (no `@latest`) per evitare regressioni invisibili. Verificare in console che `window.gsap`, `window.ScrollTrigger`, `window.Swiper` e `window.Lenis` siano definiti dopo il load. Su SSR-like preview o pagine offline, fallback grazioso (try/catch).

---

### Task 19
- **Status**: done
- **Agent**: coder
- **Branch**: feature/assets-audit
- **Priority**: medium
- **Title**: Audit e organizzazione assets
- **Desc**: Audit della cartella `assets/` esistente e organizzazione finale. Verificare presenza di tutti i file referenziati nelle pagine HTML: `logo.png`, `hero.mp4`, `hero.webm`, `hero-home.jpg`, `hero-home-alt.jpg`, `intro.jpg`, `concierge.jpg`, `concierge-hero.jpg`, `sea.jpg`, `cta.jpg`, `villa-1.jpg` … `villa-6.jpg`, `ville-hero.jpg`, `about-hero.jpg`, `about-panel.jpg`, `contatti-hero.jpg`. Per ogni asset: (1) verificare integrità file aprendolo in un viewer; (2) lowercase senza spazi (kebab-case); (3) dimensioni ragionevoli (jpg < 500KB ciascuna come obiettivo, tranne hero che può essere fino a 1MB). NON ottimizzare in questa task (Task 46 dedicata). Creare un favicon completo: `favicon.ico` (32x32), `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` (180x180), tutti derivati dal logo ProperHost o da una "P" stilizzata in palette teal/gold. Aggiungere in tutte le pagine HTML i link `<link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png">`. Documentare nel commit eventuali asset mancanti rispetto alla lista.
- **Scope**: solo audit, rinomina, favicon. Niente compressione/conversione.
- **Files**: cartella `assets/`, root favicon files, modifiche `<head>` di tutte le pagine HTML.
- **Dependencies**: Task 16.
- **Notes**: NON eliminare asset già referenziati. Su Windows attenzione al case-sensitivity quando si rinomina. Se logo non esiste in formato adatto a favicon, generare un placeholder con tool a scelta (GIMP, online).

---

### Task 20
- **Status**: done
- **Agent**: coder
- **Branch**: feature/i18n-vanilla
- **Priority**: high
- **Title**: i18n IT/EN vanilla (data-i18n + JSON + URL prefix /en/)
- **Desc**: Implementare internazionalizzazione vanilla senza librerie. **Strategia URL**: italiano default (URL puliti `/`, `/about.html`, `/ville.html`, ecc.); inglese in sottocartella `/en/` (es. `/en/index.html`, `/en/about.html`). Creare la cartella `en/` con copia di ogni pagina HTML, identica come markup ma con `<html lang="en">` e contenuti in inglese. **Strategia contenuti**: opzione A (consigliata, semplice) — testi inglesi inseriti direttamente nei file HTML di `/en/`; opzione B (più sofisticata) — usare attributi `data-i18n="namespace.key"` su tutti gli elementi testuali e un loader JS che fetch `data/i18n/it.json` o `data/i18n/en.json` in base alla lingua corrente, sostituendo i textContent al load. Per ProperHost statico, scegliere **opzione A** per massimizzare SEO e velocità (i contenuti sono nel markup, non lazy-fetched). Comunque creare i file `data/i18n/it.json` e `data/i18n/en.json` con tutte le stringhe organizzate per namespace (`nav`, `hero`, `mission`, `villas`, `concierge`, `services`, `cta`, `faq`, `footer`, `contact`, `about`, `prenotazione`) come fonte unica di verità per la traduzione, da cui derivare i contenuti delle pagine HTML manualmente. Estrarre il copy IT letteralmente dai file statici esistenti. Tradurre EN con tono editoriale luxury (no Google Translate meccanico). **Switcher lingua**: aggiungere a navbar e footer link `IT` / `EN` che, in base al path corrente, rimandi alla versione opposta (es. da `/about.html` a `/en/about.html` e viceversa) — implementare in `js/i18n.js` con funzione `getAlternateLocaleHref(currentPath, targetLocale)`. Aggiungere in `<head>` di ogni pagina `<link rel="alternate" hreflang="it" href="...">` e `<link rel="alternate" hreflang="en" href="...">` per SEO i18n.
- **Scope**: setup i18n + creazione cartella `/en/` + switcher + JSON di riferimento. NON è richiesto un sistema dinamico runtime (rest del copy è statico nel markup).
- **Files**: nuovi `data/i18n/it.json`, `data/i18n/en.json`, `js/i18n.js`, intera cartella `en/` con tutte le pagine duplicate e tradotte. Modifiche a tutti gli HTML root per aggiungere hreflang e link switcher.
- **Dependencies**: Task 16.
- **Notes**: il copy EN deve suonare naturale a un madrelingua di una rivista travel. Lasciare commento `<!-- TODO: review EN translation -->` se incerto. Verificare che `<html lang="en">` sia presente in tutte le pagine inglesi.

---

### Task 21
- **Status**: done
- **Agent**: coder
- **Branch**: feature/lint-format
- **Priority**: medium
- **Title**: ESLint + Prettier + .editorconfig + opzionale husky
- **Desc**: Configurare toolchain di linting/formatting per HTML, CSS, JS vanilla. (1) Init `package.json` minimale (solo per gestire devDeps): `npm init -y`, poi `npm install --save-dev eslint @eslint/js prettier eslint-config-prettier`. (2) `.eslintrc.json` con `{ "env": { "browser": true, "es2022": true }, "extends": ["eslint:recommended", "prettier"], "parserOptions": { "ecmaVersion": "latest", "sourceType": "module" }, "rules": { "no-var": "error", "prefer-const": "error", "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], "eqeqeq": "error", "curly": "error" } }`. (3) `.prettierrc.json`: `{ "singleQuote": true, "semi": true, "trailingComma": "all", "printWidth": 100, "arrowParens": "always", "tabWidth": 2, "endOfLine": "lf" }`. (4) `.prettierignore` con `node_modules`, `assets`, `vendor`. (5) `.editorconfig` con `root = true` + UTF-8 + LF + indent 2. (6) Script in `package.json`: `"lint": "eslint 'js/**/*.js'"`, `"lint:fix": "eslint 'js/**/*.js' --fix"`, `"format": "prettier --write '**/*.{html,css,js,json,md}'"`, `"format:check": "prettier --check '**/*.{html,css,js,json,md}'"`. (7) Opzionale husky: `npx husky init`, pre-commit hook che esegue `npm run format:check && npm run lint`. (8) Eseguire una passata `npm run lint:fix && npm run format` per allineare i file esistenti. Verificare che tutto passi pulito.
- **Scope**: solo tooling. Nessuna modifica logica.
- **Files**: nuovi `package.json`, `.eslintrc.json`, `.prettierrc.json`, `.prettierignore`, `.editorconfig`, opzionale `.husky/pre-commit`. Aggiunta `node_modules/` a `.gitignore`.
- **Dependencies**: Task 16.
- **Notes**: NON disabilitare regole strict per "far passare" il codice. Su Windows verificare `endOfLine: 'lf'` con `git config core.autocrlf input`.

---

## Task Queue · Refactor Phase 2 — Componenti / Primitive UI

---

### Task 22
- **Status**: done
- **Agent**: coder
- **Branch**: feature/preloader
- **Priority**: medium
- **Title**: Preloader fullscreen vanilla (counter + curtain SVG exit)
- **Desc**: Creare componente preloader come blocco HTML inserito all'inizio di `<body>` in tutte le pagine (oppure iniettato via JS al `DOMContentLoaded`, decisione del coder). **Markup**: `<div id="preloader" aria-hidden="true"><div class="preloader__counter"><span class="preloader__num">0</span>%</div><svg class="preloader__curtain preloader__curtain--top" viewBox="0 0 1920 1080" preserveAspectRatio="none"><path d="M0,0 C480,80 1440,80 1920,0 L1920,1080 L0,1080 Z" fill="var(--primary-dark)"/></svg></div>`. **Stile**: `position: fixed; inset: 0; z-index: 9999; background: var(--primary-dark); display: flex; align-items: center; justify-content: center;`. Counter Cormorant regular `clamp(8rem, 18vw, 16rem)` color white. **Logica JS** in `js/preloader.js`: al `DOMContentLoaded`, controllare `sessionStorage.getItem('properhost.preloaderShown')` — se `'1'` rimuovere subito il preloader; altrimenti animare counter da 0 a 100 con GSAP timeline (`duration: 1.4, ease: 'power2.out', snap: { textContent: 1 }`), poi exit animation (curtain SVG path che si ritrae con clip-path o transform y -100% in 1.2s ease power3.inOut), poi rimuovere il nodo dal DOM e settare `sessionStorage.setItem('properhost.preloaderShown', '1')`. **Reduced motion**: se `matchMedia('(prefers-reduced-motion: reduce)').matches`, fade-out 200ms senza counter. Dipendenze visuali: il preloader copre TUTTA la pagina inclusa la navbar; nessuna interazione possibile finché non sparisce. Importare il modulo in `js/main.js` per priorità di esecuzione.
- **Scope**: solo Preloader.
- **Files**: nuovo `js/preloader.js`. Markup HTML inline in tutte le pagine (oppure script che lo crea). CSS in `css/components.css` o nuovo `css/preloader.css`.
- **Dependencies**: Task 17, 18.
- **Notes**: testare connessione lenta in DevTools; il preloader non deve bloccare il rendering della pagina sotto. Cleanup obbligatorio: rimuovere il nodo dal DOM dopo l'exit per liberare memoria. Test sessione: secondo refresh non deve riapparire.

---

### Task 23
- **Status**: done
- **Agent**: coder
- **Branch**: feature/custom-cursor
- **Priority**: low
- **Title**: Custom cursor vanilla (cerchio gold, espande su hover, freccia su slider)
- **Desc**: Implementare cursore personalizzato in `js/cursor.js` come modulo. **Detection touch device**: se `matchMedia('(hover: none)').matches` o `'ontouchstart' in window`, return early (non istanziare). **Reduced motion**: idem return early. **Markup creato runtime**: `<div id="custom-cursor" aria-hidden="true"></div>` appeso a `body`. **Stile** (CSS in `css/cursor.css`): `position: fixed; top: 0; left: 0; width: 32px; height: 32px; border-radius: 50%; background: rgba(184,153,104,0.4); border: 1px solid rgba(216,193,154,0.6); pointer-events: none; z-index: 9998; mix-blend-mode: difference; transform: translate(-50%, -50%); will-change: transform; transition: width 200ms ease, height 200ms ease, background 200ms ease;`. **Movimento**: usare GSAP `gsap.quickTo(el, 'x', { duration: 0.3, ease: 'power3.out' })` su `mousemove`. **Stati hover** via event delegation su `body`: `'a, button, [role="button"], .interactive'` → cursore 60px gold solid; `[data-cursor="arrow-next"]`, `[data-cursor="arrow-prev"]`, `.swiper` → cursore 64px bianco con SVG freccia; `'input, textarea, [contenteditable]'` → cursore nascosto e ripristina cursore di sistema. **Cleanup**: tutti gli event listener registrati con riferimento, removable se necessario in futuro.
- **Scope**: solo custom cursor.
- **Files**: nuovo `js/cursor.js`, nuovo `css/cursor.css` (o aggiunta in `components.css`).
- **Dependencies**: Task 18.
- **Notes**: su Safari `mix-blend-mode: difference` può avere bug grafici sopra video; testare e fallback a opacity solid se necessario. Performance: `will-change` solo quando il cursore è attivo, rimuoverlo se istanza distrutta.

---

### Task 24
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/section-divider
- **Priority**: medium
- **Title**: Section Divider SVG riutilizzabile (curve tra sezioni)
- **Desc**: Creare componente HTML/CSS riusabile per le transizioni curve tra sezioni con bg color diversi. Può essere implementato come (a) snippet HTML da copia-incollare con classe condivisa, oppure (b) helper JS in `js/sectionDivider.js` con funzione `createDivider({ direction, fillColor, height })` che ritorna un nodo DOM da appendere. Preferire **approccio (a)** per ProperHost statico (massima semplicità). **Markup**: `<svg class="section-divider section-divider--top" viewBox="0 0 1920 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0,0 C480,80 1440,80 1920,0 L1920,120 L0,120 Z" fill="var(--bg-2)"/></svg>`. **CSS** in `css/components.css`: `.section-divider { display: block; width: 100%; height: clamp(60px, 8vw, 140px); line-height: 0; }`. Variante `.section-divider--bottom` con path `d="M0,120 C480,40 1440,40 1920,120 L1920,0 L0,0 Z"`. **Convenzione**: il `fill` del path deve corrispondere al bg della sezione successiva (per `--top`) o precedente (per `--bottom`). Documentare nel CSS un esempio chiaro. **Posizionamento**: il divider è elemento di flusso normale tra `<section>`. Per evitare gap di 1px da antialiasing, posizionarlo con `margin-top: -1px` o `position: relative; top: -1px`.
- **Scope**: solo definizione del componente + esempio in CSS.
- **Files**: aggiunte a `css/components.css`. Eventuale snippet in un file `snippets/section-divider.html` come reference.
- **Dependencies**: Task 17.
- **Notes**: SVG inline (NO `<img>`). Il divider è decorativo: `aria-hidden="true"` obbligatorio.

---

### Task 25
- **Status**: done
- **Agent**: coder
- **Branch**: feature/navbar
- **Priority**: high
- **Title**: Navbar split + wordmark + lang switcher + drawer mobile
- **Desc**: Refactor della navbar attuale in componente coerente, ripetuto in tutte le pagine HTML (root + `/en/`). **Layout desktop (>=980px)**: `position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 32px 0;`. Container interno grid `1fr auto 1fr; align-items: center; gap: 50px;`. Sinistra (justify-self: end): nav con `Concierge`, `About`, `Ville`. Centro: `<a href="/">` con wordmark "Properhost" Cormorant italic `clamp(40px, 4.6vw, 58px)` color white + sottotitolo "VILLAS · CONCIERGE · SERVICES" Inter 9.5px letter-spacing 0.46em uppercase color rgba(255,255,255,.78) margin-top 14px. Destra (justify-self: start): nav con `Servizi` (link a `/concierge.html#services`), `Contatti`, `Book` (con classe `nav-book` e dash gold prefix). Dopo, switcher lingua "IT / EN". **Stato scrolled** (oltre 80px): la navbar diventa `bg: rgba(246,241,232,.96); backdrop-filter: blur(16px); padding: 18px 0;`, link e wordmark passano a `color: var(--text)`, hover `var(--accent-deep)`. Animare con CSS transition 180ms. Toggle classe `.is-scrolled` da `js/navbar.js` su `scroll` event throttled. **Mobile (<980px)**: grid `auto auto`. A sinistra wordmark compatto Cormorant 22px. A destra hamburger button 42px. Click hamburger → drawer fullscreen entra da destra: `<div id="mobile-drawer" class="mobile-drawer"><nav>... </nav></div>` con `position: fixed; inset: 0 0 0 auto; width: 100%; max-width: 380px; background: var(--bg); transform: translateX(100%); transition: transform 0.5s var(--ease);`, `.is-open` rimuove transform. Drawer contiene tutti i link verticali Cormorant 18px color `var(--text)`, ognuno con `border-bottom: 1px solid var(--line)`. In fondo lo switcher lingua. **Switcher**: in `js/i18n.js`, `getAlternateLocaleHref()` calcola l'URL della lingua alternativa basato su `window.location.pathname`. **A11y**: `<nav role="navigation" aria-label="Main">`, hamburger `aria-label="Apri menu" aria-expanded aria-controls="mobile-drawer"`, `aria-current="page"` sul link attivo (calcolato JS), focus visibile (`outline: 2px dotted var(--accent); outline-offset: 4px`), Esc per chiudere drawer.
- **Scope**: navbar + drawer + lang switcher (no modal "Richiedi disponibilità", quello è Task 15).
- **Files**: HTML in tutte le pagine (oppure in modulo `partials/navbar.html` da includere via JS o build step). CSS in `css/components.css` o `css/navbar.css`. JS in `js/navbar.js`.
- **Dependencies**: Task 17, 20.
- **Notes**: la navbar è ripetuta in 5+ pagine — considerare uno script di build minimo (Node script che fa template inclusion al deploy) oppure un loader JS che fetch e injecta `partials/navbar.html` al `DOMContentLoaded` per evitare duplicazione del markup. Decisione del coder: per ora copia-incolla manuale è accettabile dato il numero limitato di pagine; documentare nel commit.

---

### Task 26
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/footer
- **Priority**: medium
- **Title**: Footer 4-col (brand, contatti, naviga, social)
- **Desc**: Creare footer coerente, ripetuto in tutte le pagine. **Markup**: `<footer class="site-footer">` con `background: var(--primary-soft); color: white; padding: 110px 0 44px; position: relative;`. Linea decorativa gold al top via `::before`: `content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(184,153,104,.45) 50%, transparent);`. Container max-w 1320px padding-x 48px. Grid desktop `1.6fr 1fr 1fr 1fr; gap: 80px; margin-bottom: 70px`. Mobile <760px: grid `1fr; gap: 48px`. **Col 1 (brand)**: wordmark + sottotitolo + paragrafo lead 34ch + riga "Palermo · Sicilia · Italia". **Col 2 (Contatti)**: titolo h5 Inter 11px uppercase letter-spacing 0.32em color `var(--accent-soft)`. Lista link: tel `+39 339 2923 744`, tel `+39 392 5108 539`, mail `properhost.company@gmail.com`, sito `www.properhost.it`. Inter 14.5px line-height 2.1 color rgba(255,255,255,.72). Hover `var(--accent-soft)`. **Col 3 (Naviga)**: link a Home, About, Concierge & Servizi, Ville, Richiedi disponibilità. **Col 4 (Seguici)**: SVG inline Instagram + Facebook 24×24, hover gold. Handle social con `#` placeholder + commento HTML `<!-- TODO: handle social ProperHost da definire -->`. **Strip in basso**: separatore `border-top: 1px solid rgba(255,255,255,.12); padding-top: 34px`. Riga flex space-between: copyright a sinistra, mini switcher lingua "IT / EN" a destra. Mobile: stripe diventa column gap 14px.
- **Scope**: solo Footer.
- **Files**: HTML in tutte le pagine. CSS in `css/components.css` o `css/footer.css`.
- **Dependencies**: Task 17, 20.
- **Notes**: SVG icons inline (no librerie). Niente newsletter (non richiesta). Tap-friendly su mobile (44×44px area cliccabile).

---

### Task 27
- **Status**: done
- **Agent**: coder
- **Branch**: feature/page-shell
- **Priority**: high
- **Title**: Page shell unificato (head + preloader + cursor + lenis init + navbar + footer)
- **Desc**: Standardizzare l'inizializzazione di tutte le pagine. (1) Definire un blocco `<head>` standard con tutti i meta, preconnect, link font, link CSS in ordine corretto, link JS con `defer`/`type="module"`, da copiare in tutte le pagine HTML; documentarlo in `snippets/head.html`. (2) Inserire il preloader markup all'inizio di `<body>`. (3) Subito dopo, istanziare il custom cursor (markup creato runtime). (4) Includere navbar standard. (5) `<main>` con contenuto specifico pagina. (6) Includere footer standard. (7) Script di chiusura prima di `</body>`: `<script type="module" src="/js/main.js"></script>`. (8) `js/main.js` inizializza in ordine: `import { setupGsap } from './gsapSetup.js'; import { initPreloader } from './preloader.js'; import { initLenis } from './lenis.js'; import { initCursor } from './cursor.js'; import { initNavbar } from './navbar.js'; import { initRevealAnimations } from './animations.js';` poi `document.addEventListener('DOMContentLoaded', () => { setupGsap(); initPreloader(); const lenis = initLenis(); initCursor(); initNavbar(); initRevealAnimations(); });`. **Cleanup**: nessuno richiesto su sito statico (no SPA), ma documentare l'ordine come "se Lenis e GSAP coesistono, Lenis deve essere inizializzato dopo GSAP per agganciare ScrollTrigger.update".
- **Scope**: orchestrazione globale.
- **Files**: tutte le pagine HTML. `js/main.js` nuovo o aggiornato. `snippets/head.html` come reference.
- **Dependencies**: Task 17, 18, 22, 23, 25, 26.
- **Notes**: Lenis NON deve interferire con Swiper sui slider — Swiper gestisce il proprio touch. Test critico: scrollare smoothly tra hero, slider, sezioni — tutto fluido senza salti.

---

## Task Queue · Refactor Phase 3 — Sezioni Home

---

### Task 28
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/hero-section
- **Priority**: high
- **Title**: Hero fullscreen (video bg + paragrafo bottom-right + CTA "Scopri")
- **Desc**: Refactor della hero in `index.html`. **Markup**: `<section class="hero" aria-label="Home"><video class="hero__video" autoplay muted loop playsinline preload="metadata" poster="/assets/hero-home.jpg"><source src="/assets/hero.webm" type="video/webm"><source src="/assets/hero.mp4" type="video/mp4"></video><div class="hero__overlay" aria-hidden="true"></div><div class="hero__content"><p class="hero__lead">Ville private, dimore selezionate e servizi tailor-made...</p><a class="btn btn--scopri" href="#villas">Scopri</a></div><div class="hero__scroll-indicator" aria-hidden="true"></div></section>`. **CSS**: hero `min-height: 100vh; position: relative; overflow: hidden; background: black;`. Video `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;`. Overlay z-1 con `linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(0,0,0,.32) 50%, rgba(0,0,0,.55) 100%)`. Content `position: absolute; bottom: 70px; right: max(40px, calc((100vw - 1320px)/2 + 28px)); z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 36px;`. Lead Cormorant 21px line-height 1.55 color rgba(255,255,255,.95) text-align right max-w 480px. Bottone "Scopri" pill bianco min-width 180px padding 22px 44px border-radius 999px bg white color `var(--primary)` Inter 12px font-weight 600 letter-spacing 0.36em uppercase shadow 0 14px 40px rgba(0,0,0,.18). Hover bg `var(--accent)` color white translateY -3px. Scroll indicator `position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); width: 1px; height: 70px; background: linear-gradient(180deg, transparent, rgba(255,255,255,.55));`. **Animazione ingresso** (in `js/animations.js` o `js/heroAnimations.js`): GSAP timeline `tl.from('.hero__lead', { opacity: 0, y: 30, duration: 1.0, ease: 'power3.out' }).from('.btn--scopri', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6').from('.hero__scroll-indicator', { opacity: 0, duration: 0.5 }, '+=0.3');`. Bounce verticale infinito sullo scroll indicator. **Mobile (<760px)**: content allineato bottom-left, padding 24px, paragrafo font 17px, bottone min-width 150px o full-width.
- **Scope**: solo hero in index.html.
- **Files**: `index.html`, `css/sections.css` o `css/hero.css`, `js/animations.js`.
- **Dependencies**: Task 17, 18, 19.
- **Notes**: video con `playsinline` per iOS autoplay. Su connessioni lente fallback al poster. Verificare CLS = 0.

---

### Task 29
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/mission-section
- **Priority**: high
- **Title**: Mission/Intro editorial 3-col
- **Desc**: Refactor sezione intro/mission in `index.html`. **Markup**: `<section class="mission"><div class="container"><div class="mission__grid"><div class="mission__col mission__col--lead"><span class="section-tag">Benvenuti</span><h2 class="font-display">Ospitalità siciliana, <em>eleganza</em> contemporanea</h2><a class="btn btn--pill-primary" href="ville.html">Scopri le ville</a></div><div class="mission__col"><p>Dimore selezionate con identità architettonica chiara, immerse in contesti naturali iconici dell'isola...</p></div><div class="mission__col"><p>Assistenza dedicata prima, durante e dopo il soggiorno...</p></div></div></div></section>`. **CSS**: section `bg: var(--bg-2); padding: 160px 0 192px;`. Container max-w 1320px padding-x 48px. Grid `grid-template-columns: 1.25fr 1fr 1fr; gap: 80px; align-items: start;`. <1100px: 2 col con prima `grid-column: 1 / -1`. <760px: 1 col. **Section-tag** Inter 11px font-weight 500 uppercase letter-spacing 0.36em color `var(--accent-deep)` con dash 28x1px gold prima (via `::before`). **H2** Cormorant 400 `clamp(40px, 4.6vw, 64px)` line-height 1.04 letter-spacing -0.012em color `var(--primary)`, `<em>` italic 500 color `var(--accent-deep)`. **Pill primary** bg `var(--primary)` color white Inter 11px uppercase letter-spacing 0.34em padding 20px 44px border-radius 999px border 1px solid `var(--primary)`. Hover bg `var(--accent)` translateY -2px shadow 0 14px 36px rgba(11,107,94,.22). **Paragrafi col 2 e 3** Inter 15px line-height 1.95 color `var(--text-2)` padding-top 14px (allineamento prima riga col1).
- **Scope**: solo Mission section.
- **Files**: `index.html`, CSS pertinente.
- **Dependencies**: Task 17.
- **Notes**: copy ProperHost letterale dai file esistenti, NON sostituire con copy altrui. Niente foto in questa sezione (è puro editoriale).

---

### Task 30
- **Status**: done
- **Agent**: coder
- **Branch**: feature/villa-slider-swiper
- **Priority**: high
- **Title**: VilleSlider full-bleed (Swiper fade, 6 ville, frecce, CTA)
- **Desc**: Refactor slider ville usando Swiper (libreria già caricata in Task 18). **Dati ville**: array in `data/villas.json` (oppure inline nel JS):
```json
[
  { "slug": "aurea", "name": "Villa Aurea", "location": "Taormina", "image": "/assets/villa-1.jpg", "alt": "Villa Aurea — Taormina" },
  { "slug": "zagara", "name": "Villa Zagara", "location": "Noto", "image": "/assets/villa-2.jpg", "alt": "Villa Zagara — Noto" },
  { "slug": "bianca", "name": "Villa Bianca", "location": "Siracusa", "image": "/assets/villa-3.jpg", "alt": "Villa Bianca — Siracusa" },
  { "slug": "soho", "name": "Villa Soho", "location": "Ragusa", "image": "/assets/villa-4.jpg", "alt": "Villa Soho — Ragusa" },
  { "slug": "manu", "name": "Villa Manu", "location": "Modica", "image": "/assets/villa-5.jpg", "alt": "Villa Manu — Modica" },
  { "slug": "dolce-vita", "name": "Villa Dolce Vita", "location": "Scicli", "image": "/assets/villa-6.jpg", "alt": "Villa Dolce Vita — Scicli" }
]
```
**Markup** generato JS da template literal o markup statico in `index.html` con id `#villas`: `<section class="villa-slider" id="villas"><div class="swiper villa-swiper">...slides...</div><h2 class="villa-slider__title font-display">Villa Aurea</h2><button class="villa-slider__arrow villa-slider__arrow--prev">...</button><button class="villa-slider__arrow villa-slider__arrow--next">...</button><a class="btn btn--pill-outline" href="ville.html">Esplora</a></section>`. **CSS**: section `width: 100vw; height: 100vh; min-height: 600px; position: relative; overflow: hidden; background: #0a0a0a;`. Slide `<img loading="lazy">` (la prima `loading="eager" fetchpriority="high"` per LCP). **Swiper config** in `js/villaSlider.js`: `new Swiper('.villa-swiper', { modules: [Autoplay, EffectFade, Keyboard, A11y], effect: 'fade', loop: true, autoplay: { delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }, keyboard: { enabled: true }, a11y: { prevSlideMessage: 'Villa precedente', nextSlideMessage: 'Villa successiva' } })`. **Ken Burns**: classe `.swiper-slide-active img { animation: ken-burns 8s linear forwards }` con keyframes `from { transform: scale(1.05) } to { transform: scale(1) }`. **Titolo centrato fade-out/in** al `slideChangeTransitionStart` con GSAP. **Frecce custom** SVG, position absolute, click → `swiper.slidePrev()` / `slideNext()`. **CTA "Esplora"** pill outline bianco al center-bottom link a `ville.html`.
- **Scope**: solo VilleSlider.
- **Files**: `index.html`, `data/villas.json`, `js/villaSlider.js`, CSS pertinente.
- **Dependencies**: Task 17, 18, 19.
- **Notes**: usare `<img>` con `loading`, `decoding="async"`, `srcset`/`sizes` per responsive. Cleanup Swiper non necessario su sito statico (no navigation tra "pagine" — ricaricamento full).

---

### Task 31
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/concierge-panel
- **Priority**: medium
- **Title**: ConciergePanel (panel teal editoriale + bg image fixed parallax)
- **Desc**: Sezione doppia in `index.html`. **Pannello teal**: `<section class="concierge-panel"><div class="container"><div class="concierge-panel__grid"><div class="concierge-panel__col-lead"><span class="section-tag section-tag--gold">Private concierge</span><h2 class="font-display">Ogni soggiorno, <em>un itinerario</em> su misura</h2><a class="btn btn--pill-outline-light" href="concierge.html">Scopri il concierge</a></div><div class="concierge-panel__col"><p>...</p></div><div class="concierge-panel__col"><p>...</p></div></div></div></section>`. CSS: bg `var(--primary)` color white padding 96-128px. Section-tag color `var(--accent-soft)`. H2 white con `<em>` italic color `var(--accent-soft)`. Pill outline bianco bg transparent border 1px solid rgba(255,255,255,.85). Hover bg white color `var(--primary)`. **Bg image fissa**: subito sotto, `<div class="concierge-fixed-bg" role="img" aria-label="Servizio concierge in villa"></div>` con CSS `height: 70vh; background-image: url('/assets/concierge.jpg'); background-attachment: fixed; background-size: cover; background-position: center;`. Overlay `::before` linear-gradient teal scuro. **Mobile <760px**: disabilitare `background-attachment: fixed` (causa jank iOS) → `scroll`. Height ridotta a 50vh.
- **Scope**: solo ConciergePanel section.
- **Files**: `index.html`, CSS.
- **Dependencies**: Task 17, 19.
- **Notes**: copy ProperHost. NON usare claim altrui ("Concierge smart per ogni esigenza" è di un competitor).

---

### Task 32
- **Status**: done
- **Agent**: coder
- **Branch**: feature/servizi-slider
- **Priority**: medium
- **Title**: ServiziSlider (Swiper free-mode 6 servizi)
- **Desc**: Refactor sezione servizi con Swiper free-mode. **Dati** in `data/services.json`:
```json
[
  { "id": "navetta", "number": "01", "title": "Servizio Navetta", "description": "Trasferimenti su richiesta da e per porto e aeroporto..." },
  { "id": "mezzi", "number": "02", "title": "Noleggio Mezzi", "description": "Auto, scooter e biciclette..." },
  { "id": "gommoni", "number": "03", "title": "Noleggio Gommoni", "description": "Un gommone tutto per te..." },
  { "id": "chef", "number": "04", "title": "Chef Privato", "description": "La vera cucina siciliana..." },
  { "id": "favignana", "number": "05", "title": "Tour Favignana", "description": "Scopri la perla delle Egadi..." },
  { "id": "levanzo", "number": "06", "title": "Tour Levanzo", "description": "Relax e natura autentica..." }
]
```
**Markup**: `<section class="servizi-slider" id="services"><div class="container"><header><span class="section-tag section-tag--gold-deep">I nostri servizi</span><h2 class="font-display">Tutto quello che serve per <em>godersi</em> la Sicilia</h2><p>Dal transfer al chef privato...</p></header><div class="swiper servizi-swiper">...slides generated JS or static...</div><div class="servizi-slider__nav"><button class="servizi-slider__arrow--prev">←</button><button class="servizi-slider__arrow--next">→</button></div></div></section>`. **CSS**: section bg `var(--bg-3)` padding 128-160px. Card servizi padding 42px 32px bg `var(--bg-warm)` border 1px solid `var(--line)`. Numero Cormorant italic 18px color `var(--accent-deep)` con dash gold prefix. Titolo h4 Cormorant 24px. Paragrafo Inter 15px color `var(--text-2)`. Hover card: border-color `var(--accent)` bg white translateY -6px shadow `var(--shadow-sm)`. **Swiper config** in `js/serviziSlider.js`: `new Swiper('.servizi-swiper', { modules: [FreeMode, Navigation, A11y], slidesPerView: 1.2, spaceBetween: 30, freeMode: { enabled: true, momentum: true }, breakpoints: { 760: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } }, navigation: { prevEl: '.servizi-slider__arrow--prev', nextEl: '.servizi-slider__arrow--next' } })`. Frecce SVG poligonali (viewBox 0 0 100 46.5) come stile minimal.
- **Scope**: solo ServiziSlider.
- **Files**: `index.html`, `data/services.json`, `js/serviziSlider.js`, CSS.
- **Dependencies**: Task 17, 18.
- **Notes**: copy servizi ProperHost da `index.html` esistente. Cursore custom su drag area: `data-cursor="drag"` (gestito da `js/cursor.js`).

---

### Task 33
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/cta-prenota
- **Priority**: medium
- **Title**: CtaPrenota full-bleed (parallax bg + claim + double button)
- **Desc**: Sezione CTA finale in `index.html`. **Markup**: `<section class="cta-prenota"><div class="cta-prenota__bg" aria-hidden="true"></div><div class="cta-prenota__overlay" aria-hidden="true"></div><div class="container"><span class="section-tag section-tag--gold">Contattaci</span><h2 class="font-display">Progettiamo insieme il tuo soggiorno in <em>Sicilia</em></h2><p>Scrivici: ti risponderemo con una proposta personalizzata...</p><div class="cta-prenota__buttons"><a class="btn btn--primary" href="contatti.html">Vai al form contatti</a><a class="btn btn--ghost-light" href="tel:+393392923744">+39 339 2923 744</a></div></div></section>`. **CSS**: section padding 160-224px text-align center color white relative overflow hidden. `__bg` absolute inset-0 z-0 `background-image: url('/assets/cta.jpg'); background-size: cover; background-position: center; background-attachment: fixed;`. `__overlay` absolute inset-0 z-1 `linear-gradient(180deg, rgba(11,107,94,.78) 0%, rgba(2,40,35,.92) 100%)`. Container relative z-2 max-w 700px. **Mobile <760px**: padding 96px, `background-attachment: scroll`, h2 32-44px, p 16px, buttons stack vertical.
- **Scope**: solo CtaPrenota.
- **Files**: `index.html`, CSS.
- **Dependencies**: Task 17, 19.
- **Notes**: NO claim altrui ("La tua fuga da sogno comincia qui" è competitor). NO bottone terracotta (palette altrui). Solo teal/oro ProperHost.

---

### Task 34
- **Status**: done
- **Agent**: coder
- **Branch**: feature/faq-accordion
- **Priority**: medium
- **Title**: FAQ accordion (6 domande, una aperta alla volta)
- **Desc**: Sezione FAQ in `index.html`. **Dati** in `data/faqs.json` (6 voci q/a, BOZZA): "Come prenoto una villa Properhost?", "Cosa include il servizio concierge?", "Quali metodi di pagamento accettate?", "Quali sono le politiche di cancellazione?", "Quali servizi extra posso richiedere?", "In quali zone della Sicilia operate?". **Markup**: `<section class="faq"><div class="container"><h2 class="font-display">Domande frequenti</h2><p>Le risposte alle richieste più comuni...</p><ul class="faq-list">[generated JS]</ul></div></section>`. Per ogni voce `<li class="faq-item"><button class="faq-item__q" aria-expanded="false" aria-controls="faq-a-{i}"><span>Domanda...</span><span class="faq-item__icon">+</span></button><div class="faq-item__a" id="faq-a-{i}" role="region" aria-labelledby="faq-q-{i}"><p>Risposta...</p></div></li>`. **CSS**: section bg `var(--primary-dark)` color white padding 128px. Container max-w 920px. H2 Cormorant 300 `clamp(40px, 5vw, 64px)`. Each item: button full-width text-left flex justify-between padding 24px 0 border-bottom 1px solid rgba(255,255,255,.12). Icon `+` Inter 24px gold, ruota 45° quando aperto (`is-open` class). Answer `max-height: 0; overflow: hidden; transition: max-height 400ms ease-out;`, when open `max-height: 600px`. **JS** in `js/faq.js`: click handler delega su `.faq-list`, toggle `is-open`, chiude le altre, aggiorna `aria-expanded`. Animazione apertura via GSAP `gsap.to(answer, { height: 'auto', duration: 0.4, ease: 'power2.out' })`.
- **Scope**: solo FAQ section.
- **Files**: `index.html`, `data/faqs.json`, `js/faq.js`, CSS.
- **Dependencies**: Task 17, 18.
- **Notes**: risposte BOZZA, marcate `<!-- TODO: confermare con cliente le risposte 3 e 4 -->`. Non copiare FAQ da altri brand.

---

### Task 35
- **Status**: done
- **Agent**: coder
- **Branch**: feature/home-stitching
- **Priority**: high
- **Title**: Home page stitching con SectionDividers
- **Desc**: Comporre `index.html` con tutte le sezioni nell'ordine corretto, intervallate da `<svg class="section-divider">` dove c'è cambio di bg color. Ordine: Hero → SectionDivider (top, fill `var(--bg-2)`) → Mission → VilleSlider → SectionDivider (bottom, fill `var(--primary)`) → ConciergePanel + concierge fixed bg → SectionDivider (top, fill `var(--bg-3)`) → ServiziSlider → CtaPrenota → SectionDivider (bottom, fill `var(--primary-dark)`) → Faq. Verificare che ogni divider abbia `fill` corrispondente al bg adiacente. Posizionare con `margin-top: -1px` per evitare seam. **Test**: scroll fluido Lenis, niente CLS, niente errori console. Cross-browser Chrome, Safari, Firefox.
- **Scope**: solo composizione finale home.
- **Files**: `index.html`.
- **Dependencies**: Task 24, 27, 28, 29, 30, 31, 32, 33, 34.
- **Notes**: target Lighthouse 90+ già a questo punto.

---

## Task Queue · Refactor Phase 4 — Pagine interne

---

### Task 36
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/about-page
- **Priority**: medium
- **Title**: about.html refinement (mission, valori, territorio)
- **Desc**: Refactor `about.html` (e `en/about.html`) usando i pattern definiti. Sezioni: (1) Page hero con bg `/assets/about-hero.jpg`, eyebrow "About", h1 Cormorant "Un modo più <em>personale</em> di vivere la Sicilia", side card "Calore mediterraneo, standard internazionali". (2) "Il progetto" grid 2-col con testo e immagine `/assets/about-panel.jpg` con cornice oro sfalsata. (3) "Valori" 3 card senza foto: "01 Autenticità", "02 Discrezione", "03 Precisione". (4) CTA finale doppio button (Ville + Concierge). Riusare `<svg class="section-divider">` tra cambi bg. Meta title/description specifici.
- **Scope**: solo about.html (root + en/).
- **Files**: `about.html`, `en/about.html`, CSS.
- **Dependencies**: Task 27, 24, 19.
- **Notes**: copy letterale da `about.html` esistente.

---

### Task 37
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/concierge-page
- **Priority**: medium
- **Title**: concierge.html refinement (dettaglio servizi, features grid)
- **Desc**: Refactor `concierge.html` (e `en/concierge.html`). Sezioni: (1) Page hero `/assets/concierge-hero.jpg`, h1 "Servizi pensati <em>intorno</em> al tuo soggiorno". (2) "Assistenza dedicata" grid 2-col image-left + text-right. (3) Sezione "Servizi principali" con anchor `#services`, riusare ServiziSlider o griglia 6 servizi. (4) 3 card extra: Wine & Food, Celebrations, Family Care. (5) CTA con bg `/assets/sea.jpg`.
- **Scope**: solo concierge.html (root + en/).
- **Files**: `concierge.html`, `en/concierge.html`, CSS.
- **Dependencies**: Task 27, 32 (ServiziSlider riuso).
- **Notes**: la pagina deve avere `id="services"` per deep-link da nav.

---

### Task 38
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/ville-list-page
- **Priority**: high
- **Title**: ville.html catalogo 6 ville
- **Desc**: Refactor `ville.html` (e `en/ville.html`). Sezioni: (1) Page hero `/assets/ville-hero.jpg`, h1 "Dimore selezionate per <em>location</em>, privacy e carattere". (2) Catalogo grid 3-col (mobile 1, tablet 2): 6 card villa. Card markup: `<article class="villa-card"><a class="villa-card__link" href="ville/{slug}.html"><div class="villa-card__image"><img src="..." alt="..." loading="lazy" decoding="async"></div><div class="villa-card__body"><span class="villa-card__location">Taormina</span><h3 class="villa-card__name font-display">Villa Aurea</h3><p class="villa-card__meta">10 ospiti · 5 camere</p><p class="villa-card__summary">...</p><span class="villa-card__cta">Richiedi info →</span></div></a></article>`. Hover: image scale 1.07, card translateY -8px, shadow elevata. (3) "Come scegliere" grid 2-col. (4) CTA finale con bg `/assets/sea.jpg`.
- **Scope**: solo ville.html (root + en/).
- **Files**: `ville.html`, `en/ville.html`, CSS, eventualmente JS per generare le card da `data/villas.json`.
- **Dependencies**: Task 27, 30 (data ville).
- **Notes**: link card a `ville/{slug}.html` (Task 39).

---

### Task 39
- **Status**: done
- **Agent**: coder
- **Branch**: feature/villa-detail-pages
- **Priority**: high
- **Title**: 6 pagine villa singola statiche
- **Desc**: Creare 6 pagine HTML statiche, una per villa: `ville/aurea.html`, `ville/zagara.html`, `ville/bianca.html`, `ville/soho.html`, `ville/manu.html`, `ville/dolce-vita.html` (e duplicate in `en/ville/`). Template comune (decisione del coder: copia-incolla manuale di un template oppure script Node che generi da `data/villas.json` — preferire script per consistency). **Sezioni per pagina**: (1) Page hero con bg dell'immagine villa, eyebrow "Villa Properhost", h1 nome villa, sotto location e meta (es. "10 ospiti · 5 camere"). (2) "La villa" grid 2-col: descrizione lunga a sinistra, gallery thumb a destra (per ora 1 immagine placeholder, marcato `<!-- TODO: gallery reali per villa -->`). (3) "Punti di forza" 4-5 features specifiche (BOZZA: piscina infinity, terrazza panoramica, accesso al mare, chef incluso 1 sera, ecc.). (4) "Richiedi disponibilità" link a `/contatti.html?villa={slug}` (precompilazione query param gestita in Task 40). (5) "Altre ville" mostra le 2 ville successive nel catalogo (next/prev wrap circolare). Estendere `data/villas.json` con campi `description`, `features[]`, `gallery[]`. Per ora `description` placeholder con `TODO: descrizione specifica per Villa X`.
- **Scope**: solo template + 6 pagine villa singola.
- **Files**: nuovi `ville/*.html` (6 file root + 6 in `en/ville/`), modifiche `data/villas.json`.
- **Dependencies**: Task 27, 30.
- **Notes**: scegliere script Node per generare le pagine in modo consistent (file `scripts/generate-villas.js` opzionale). La duplicazione del template è il principale tradeoff vs framework — accettarla con disciplina.

---

### Task 40
- **Status**: done
- **Agent**: coder
- **Branch**: feature/contatti-page
- **Priority**: high
- **Title**: contatti.html form completo + recapiti
- **Desc**: Refactor `contatti.html` (e `en/contatti.html`). Sezioni: (1) Page hero `/assets/contatti-hero.jpg`, eyebrow "Contatti", h1 "Parliamo del tuo <em>soggiorno</em> in Sicilia". (2) Layout asymmetric: sticky a sinistra recapiti (telefono ×2, email, sito, area operativa), a destra contact card bianca con form. **Form**: action `https://api.staticforms.xyz/submit` (mantenere endpoint esistente), method POST, hidden `accessKey=sf_48b268096f28838111e4dcc9`. Campi: nome (required), email (required), telefono, ospiti (number), date (text), villa (text con preselect da `?villa={slug}` query param via JS), messaggio (textarea, required), checkbox privacy (required). Pre-compilazione villa: in `js/forms.js` leggere `URLSearchParams(window.location.search).get('villa')`, fare lookup nel `villas.json` per il nome formattato, popolare il campo. **Validazione client**: regex email, ospiti positivo, required check; errori sotto i campi Inter 12px color red-600. **Submit handling**: intercept con `fetch`, on success mostrare success message "Grazie, ti ricontatteremo a breve" e clear form. (3) Service-grid con 6 servizi (riusare ServiziSlider in modalità grid statica con `slidesPerView: 3` fixed, oppure card statiche).
- **Scope**: solo contatti.html.
- **Files**: `contatti.html`, `en/contatti.html`, `js/forms.js`, CSS.
- **Dependencies**: Task 27, 32, 19.
- **Notes**: mantenere endpoint StaticForms per non interrompere flusso. Validation senza librerie pesanti.

---

### Task 41
- **Status**: done
- **Agent**: coder
- **Branch**: feature/prenotazione-page
- **Priority**: medium
- **Title**: prenotazione.html (richiesta disponibilità form esteso)
- **Desc**: Creare `prenotazione.html` (e `en/prenotazione.html`) come pagina dedicata, linkata dal "Book" del nav. Layout simile a contatti ma form più strutturato. Campi: villa preferita (select da villas.json + opzione "Da definire / consigliami"), check-in (date), check-out (date), adulti (number), bambini (number), camere preferite (number), servizi extra (checkbox group: Chef privato, Transfer, Concierge dedicato, Tour, Wellness, Yacht), note (textarea), nome (required), email (required), telefono (required), privacy (checkbox required). Stessa endpoint StaticForms, hidden `form_type=prenotazione` per distinguere. Validation: check-out > check-in. Hero con copy diverso da contatti, focus su "Disponibilità & Preventivo".
- **Scope**: solo prenotazione.html.
- **Files**: nuovo `prenotazione.html`, `en/prenotazione.html`, modifiche `js/forms.js`, CSS.
- **Dependencies**: Task 27, 30, 40.
- **Notes**: verificare limite plan StaticForms su numero campi; in caso, ridurre o spostare alcuni campi nelle "note libere".

---

## Task Queue · Refactor Phase 5 — Animazioni & motion

---

### Task 42
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/splittext-reveal
- **Priority**: medium
- **Title**: SplitText reveal su h1/h2/h3 con ScrollTrigger
- **Desc**: Creare helper in `js/animations.js` che applica SplitText reveal a tutti i titoli con attributo `data-split-reveal`. Helper config: tipo split (`'lines'`, `'words'`, `'lines,words'`, `'chars'`), stagger, duration, ease. Per ogni elemento, all'entrata in viewport (ScrollTrigger `start: 'top 80%'`) animare con `gsap.from(splitInstance.lines, { y: '100%', opacity: 0, stagger: 0.08, duration: 1.0, ease: 'power3.out' })`. Usare SplitText GSAP Club se licenza disponibile, altrimenti fallback `split-type` (caricato in Task 18). Applicare attributo `data-split-reveal="lines,words"` ai titoli h2 di Mission, ConciergePanel, ServiziSlider, CtaPrenota, Faq, e h1 dei page hero (about, concierge, ville, ville singola, contatti, prenotazione). Il villa-slider title ha animazione propria al cambio slide, non SplitText. **Reduced motion**: helper return early se attivo, testo statico visibile. **Once**: ogni reveal solo al primo viewport entry (`once: true`).
- **Scope**: solo helper SplitText + applicazione attributi.
- **Files**: `js/animations.js`, modifiche HTML per `data-split-reveal`.
- **Dependencies**: Task 18, 28-34.
- **Notes**: cleanup `splitInstance.revert()` se la pagina viene ricaricata in modalità SPA (su sito statico, full reload, non necessario).

---

### Task 43
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/scroll-reveals
- **Priority**: medium
- **Title**: ScrollTrigger reveals su `[data-reveal]` (paragrafi, card, CTA)
- **Desc**: In `js/animations.js`, registrare un `ScrollTrigger.batch('[data-reveal]', { start: 'top 85%', interval: 0.12, onEnter: batch => gsap.from(batch, { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', stagger: 0.12 }), once: true })`. Applicare attributo `data-reveal` a paragrafi sezione, card servizi/ville, immagini di mission/concierge, CTA pillola, list item. Compatibile con SplitText (Task 42) — i titoli hanno la loro logica, gli altri elementi hanno questa. **Reduced motion**: skip totale.
- **Scope**: solo logica reveal generica + applicazione attributi.
- **Files**: `js/animations.js`, modifiche HTML.
- **Dependencies**: Task 18, 28-34.
- **Notes**: già esiste in `script.js` versione vanilla con IntersectionObserver — sostituire con ScrollTrigger batch per stagger naturale e integrazione con Lenis.

---

### Task 44
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/parallax-subtle
- **Priority**: low
- **Title**: Parallax sussurrato su Hero overlay e CtaPrenota bg
- **Desc**: In `js/animations.js`, applicare parallax leggero (ratio 0.3) a 3 punti: (a) Hero overlay si muove al 30% dello scroll: `gsap.to('.hero__overlay', { y: 200, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })`. (b) CtaPrenota bg image: stesso pattern con `y: -100`. (c) Concierge fixed bg: ratio simile. **Mobile (<768px)**: disabilitare tutti i parallax (jank pesante iOS). **Reduced motion**: disable.
- **Scope**: solo 3 parallax.
- **Files**: `js/animations.js`.
- **Dependencies**: Task 18, 28, 31, 33.
- **Notes**: ratio sussurrato (0.2-0.3), non aggressivo. Test scroll lento: percepire profondità senza distrazione.

---

### Task 45
- **Status**: done
- **Agent**: coder
- **Branch**: feature/reduced-motion
- **Priority**: medium
- **Title**: prefers-reduced-motion fallback completo (a11y critica)
- **Desc**: Implementare sistema centrale per rispettare `prefers-reduced-motion: reduce`. (1) Helper `js/utils.js` con `export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;` e listener reattivo. (2) Lenis: se reduced → NON inizializzare (scroll nativo). (3) Preloader: fade-out 200ms invece di counter. (4) CustomCursor: NON renderizzare. (5) SplitText reveal e generic reveal: applicare stato finale immediato. (6) Parallax: skip. (7) CSS rule globale in `css/base.css`: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`. Test in DevTools "Emulate prefers-reduced-motion: reduce" e verificare comportamento.
- **Scope**: aggiunte mirate.
- **Files**: nuovo `js/utils.js`, modifiche a `js/lenis.js`, `js/preloader.js`, `js/cursor.js`, `js/animations.js`, `css/base.css`.
- **Dependencies**: Task 22, 23, 27, 42, 43, 44.
- **Notes**: preferenza utente cruciale per a11y. NON è opzionale.

---

## Task Queue · Refactor Phase 6 — Performance, SEO, A11y, Deploy

---

### Task 46
- **Status**: done
- **Agent**: coder
- **Branch**: feature/image-optim
- **Priority**: high
- **Title**: Ottimizzazione immagini (AVIF/WebP, srcset, lazy)
- **Desc**: Per ogni immagine in `assets/`: (1) generare versioni WebP e AVIF con tool a scelta (Squoosh CLI, ImageMagick, sharp via script Node `scripts/optim-images.js`). (2) Generare versioni responsive multiple (es. 400w, 800w, 1200w, 1600w, 2400w per le hero). (3) Sostituire ogni `<img src="...">` con `<picture><source type="image/avif" srcset="..."><source type="image/webp" srcset="..."><img src="fallback.jpg" alt="..." loading="lazy" decoding="async" width="..." height="..."></picture>`. (4) Per immagini above-the-fold critiche per LCP (hero poster, prima slide VilleSlider, page hero immagini): `loading="eager"` e `fetchpriority="high"`. (5) Tutte le altre `loading="lazy"`. (6) `width` e `height` espliciti su ogni `<img>` per evitare CLS. (7) Mantenere asset originali come fallback ma servire AVIF/WebP. Target peso totale: hero < 800KB, ville < 300KB ciascuna. Documentare nel commit la riduzione di peso.
- **Scope**: solo refactor immagini.
- **Files**: nuovi file in `assets/` (versioni avif/webp/responsive), modifiche in tutti i file HTML che usano `<img>`. Eventuale `scripts/optim-images.js`.
- **Dependencies**: Task 19, 28-41.
- **Notes**: target Lighthouse LCP < 2.5s.

---

### Task 47
- **Status**: done
- **Agent**: coder
- **Branch**: feature/seo-meta-jsonld
- **Priority**: high
- **Title**: SEO completo (meta, OG, Twitter, JSON-LD, sitemap, robots)
- **Desc**: (1) Per ogni pagina HTML aggiungere `<head>`: title univoco, meta description, meta keywords (opzionale), `<link rel="canonical">`, `<link rel="alternate" hreflang="it/en">`, OG tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`), Twitter Card (`twitter:card`, `twitter:title`, ecc.), theme-color (palette teal). (2) JSON-LD: in tutte le pagine schema `Organization` per ProperHost (name, url, logo, address Palermo, contactPoint con tel ed email). In `ville/{slug}.html` schema `LodgingBusiness` con name, address, image, priceRange, telephone. In `contatti.html` schema `ContactPage`. Inserire come `<script type="application/ld+json">{}</script>` nel `<head>`. (3) Creare `sitemap.xml` manuale alla root con tutte le URL (root + `/en/`, tutte le pagine + 6 ville x 2 lingue). Aggiornare ad ogni nuova pagina. Tool consigliato per generazione semi-automatica: script Node che legge la struttura cartelle. (4) Creare `robots.txt` alla root con `User-agent: *`, `Allow: /`, `Sitemap: https://www.properhost.it/sitemap.xml`. (5) OG image dedicate 1200×630 per ogni pagina (placeholder iniziale: crop di hero-home.jpg, salvate in `og/`).
- **Scope**: solo SEO/metadata.
- **Files**: modifiche a tutti i `<head>` HTML, nuovi `sitemap.xml`, `robots.txt`, immagini in `og/`.
- **Dependencies**: Task 35-41.
- **Notes**: target Lighthouse SEO 95+. Per og:image custom, valutare in futuro generatore (es. Cloudinary o canvas-based script).

---

### Task 48
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/a11y-polish
- **Priority**: high
- **Title**: A11y polish (focus, ARIA, skip-link, scrollbar, contrast)
- **Desc**: (1) Aggiungere skip-to-content link all'inizio di `<body>` in tutte le pagine: `<a href="#main" class="skip-link">Vai al contenuto</a>` nascosto fuori schermo finché non riceve focus. CSS: `.skip-link { position: absolute; left: -9999px; ... } .skip-link:focus { left: 1rem; top: 1rem; ... }`. Aggiungere `<main id="main">` in tutte le pagine. (2) Verificare focus visibile su TUTTI gli interattivi: `outline: 2px dotted var(--accent); outline-offset: 4px;`. Mai `outline: none` senza alternativa. (3) ARIA su elementi non testuali: tutte le icone decorative `aria-hidden="true"`, tutti i bottoni-icona `aria-label="..."`, slider `aria-label`, modali `aria-modal="true" role="dialog"`. (4) Ordine tab logico: verificare con Tab in tutte le pagine. (5) Scrollbar custom: `::-webkit-scrollbar { width: 6px } ::-webkit-scrollbar-thumb { background: rgba(11,107,94,.3); border-radius: 3px } ::-webkit-scrollbar-thumb:hover { background: rgba(11,107,94,.6) }`. (6) `<html lang="it">` (e `lang="en"` per `/en/`). (7) Test completo: Lighthouse A11y → 100, axe DevTools 0 violazioni, screen reader (VoiceOver/NVDA) → naviga tutta la home senza ostacoli.
- **Scope**: polish a11y.
- **Files**: modifiche a tutti gli HTML, CSS in `css/base.css`.
- **Dependencies**: Task 25, 27, 35-41.
- **Notes**: A11y NON opzionale. Score 100 obbligatorio.

---

### Task 49
- **Status**: blocked
- **Agent**: coder
- **Branch**: feature/lighthouse-audit
- **Blocked by**: richiede Chrome/Lighthouse esterno; checklist preparata in `.agents/LIGHTHOUSE.md`.
- **Priority**: high
- **Title**: Lighthouse audit + ottimizzazioni (target Performance 95+)
- **Desc**: Eseguire Lighthouse audit (Chrome DevTools) su sito servito staticamente (es. `npx serve .` su localhost:3000), in modalità Mobile e Desktop. Risolvere ogni problema fino a target: Performance ≥95, Accessibility = 100, Best Practices ≥95, SEO ≥95. Aree tipiche: (1) **LCP**: ottimizzare hero video (codec H.265 max 1080p, max 3MB); preload poster. (2) **CLS**: tutte immagini con `width`/`height`, video con `aspect-ratio`. (3) **TBT**: minify JS, defer non-critical scripts (analytics se presenti, dopo onLoad), code-split dove possibile. (4) **FCP**: critical CSS inline nel `<head>` per above-the-fold (estrarre con tool come `critical` o manualmente). (5) Best Practices: serve via HTTPS, no console errors, alt valide. (6) SEO: già coperto in Task 47. Documentare ogni intervento nel commit.
- **Scope**: ottimizzazioni cross-cutting.
- **Files**: vari, secondo necessità.
- **Dependencies**: Task 35-48.
- **Notes**: Lighthouse fluttua; mediana di 3 run. Target 95+ stabile.

---

### Task 50
- **Status**: done
- **Agent**: coder
- **Branch**: feature/deploy-static
- **Priority**: high
- **Title**: Deploy statico (Netlify / Vercel / Cloudflare Pages) + DNS + redirect
- **Desc**: (1) Scegliere host statico: **Netlify** (consigliato per semplicità + form handling alternativo se mai si volesse migrare via da StaticForms), **Vercel** (ottimo CDN), **Cloudflare Pages** (CDN rapido + free SSL). Per ProperHost statico: **Netlify** o **Cloudflare Pages**. (2) Connettere repo GitHub all'host scelto, configurare branch `main` come production. Build command: `# nessuna build` (sito 100% statico) — oppure `npm run build` se si introduce uno script di image-optim/sitemap-generation in Task 46/47. Output dir: root del repo. (3) Configurare custom domain `www.properhost.it` (e redirect da `properhost.it` → `www.properhost.it` o viceversa, scelta SEO). DNS: A record o CNAME come da guida host. SSL automatico via Let's Encrypt. (4) Configurare 301 redirect da legacy URL (se applicabile, es. `/index.html` → `/`). Su Netlify usare `_redirects` file. Su Cloudflare Pages: `_redirects` o regole CF. (5) Configurare cache headers per asset statici (immagini, font: `Cache-Control: public, max-age=31536000, immutable`). Su Netlify: `_headers` file. (6) Test post-deploy: visitare ogni pagina IT + EN, console pulita, form contatti invia correttamente (test reale a properhost.company@gmail.com con flag visibile per identificare il test). (7) Setup analytics privacy-friendly (Plausible o Umami) opzionale, in task separata.
- **Scope**: solo deploy ops + DNS + redirect.
- **Files**: nuovi `_redirects`, `_headers` (per Netlify) o equivalenti.
- **Dependencies**: Task 35-49.
- **Notes**: verificare che i path assoluti `/assets/...` funzionino (vs relativi). Test mobile su rete reale, non solo emulator. Backup DNS originali prima della modifica.

---

### Task 51
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/cards-audit
- **Priority**: high
- **Title**: Audit completo card (testi, padding, margin)
- **Desc**: Controllare tutte le card del sito (`.card`, `.cards--ville .card`, `.service-card`, `.villa-feature`, `.hero-card`, `.contact-card`) verificando padding interno, margin tra contenuti, allineamento testi e gerarchia visiva. Nessun testo deve toccare i bordi della card. La spaziatura tra title, meta, paragrafo e CTA dev'essere coerente. Le card devono avere ritmo visivo simile e rispettare la gerarchia tipografica.
- **Scope**: globale — tutte le card su tutte le pagine.
- **Files**: style.css
- **Dependencies**: nessuna.
- **Notes**: testare su 375px, 768px, 1440px.

---

### Task 52
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/lang-switcher-visible
- **Priority**: high
- **Title**: Switcher lingua IT/EN sempre visibile
- **Desc**: Sulle pagine IT non c'è uno switcher lingua visibile per passare a EN (e viceversa con un design coerente). Aggiungere un mini-switcher "IT / EN" sticky o nel nav, ben visibile su desktop e mobile, con stato attivo evidenziato. Il link deve calcolare il path della pagina alternativa (es. `/about.html` ↔ `/en/about.html`).
- **Scope**: navbar di tutte le pagine IT + EN.
- **Files**: style.css, tutte le pagine HTML.
- **Dependencies**: nessuna.
- **Notes**: lo switcher dev'essere riconoscibile come tale al primo colpo d'occhio.

---

### Task 53
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/fill-empty-areas
- **Priority**: medium
- **Title**: Riempire o rimuovere aree vuote sparse
- **Desc**: In alcuni punti di alcune pagine ci sono aree vuote (gap di whitespace eccessivi, sezioni sottili che danno impressione di incompletezza, padding eccessivi tra blocchi). Per ogni occorrenza: o riempire con contenuto coerente con il brand (citazioni, micro-strip, divider sottili, micro-feature), oppure ridurre il padding/togliere lo spazio. Non aggiungere dati inventati. Verificare in particolare about/valori, concierge/extra cards, ville/come scegliere, prenotazione/aside info.
- **Scope**: index, about, concierge, ville, contatti, prenotazione + EN equivalenti.
- **Files**: HTML pertinenti, style.css per spaziature.
- **Dependencies**: nessuna.

---

### Task 54
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/hero-nav-centered-logo
- **Priority**: high
- **Title**: Hero index — navbar split con logo centrato + wordmark Properhost al centro del video
- **Desc**: Refactor della parte iniziale di `index.html` per replicare il pattern visto su SiciLife (riferimento di layout, NON di palette/copy/identità). Modifiche richieste: (1) **Navbar split**: il logo ProperHost (immagine `logo.png` o wordmark "Properhost" già presente) va posizionato esattamente al CENTRO della navbar, in alto. A SINISTRA del logo le voci `Concierge`, `About`, `Services` (o l'attuale spezzatura ITA equivalente). A DESTRA del logo le voci `Apartments`, `Villas`, `Book` (o equivalente: `Ville`, `Contatti`, `Richiedi disponibilità`). Mantenere a estrema destra il pulsante CTA "Richiedi disponibilità" e lo switcher lingua IT/EN. Layout grid `1fr auto 1fr` con `align-items: center; gap: clamp(24px, 4vw, 60px)`. (2) **Logo Properhost al centro del video hero**: aggiungere overlay con il wordmark/logo Properhost grande, centrato nel viewport del video hero (orizzontale e verticale), in bianco con leggera ombra per leggibilità sopra il video. Cormorant italic `clamp(48px, 7vw, 96px)` o uso del file logo. Sotto il wordmark, sottotitolo "VILLAS · CONCIERGE · SERVICES" Inter 11px letter-spacing 0.46em uppercase color rgba(255,255,255,.78). (3) **Testo descrittivo + bottone "Scopri" tutto a destra**: il blocco di testo (`Ville private, dimore selezionate e servizi tailor-made...`) e il bottone "Scopri" devono trovarsi nella parte destra del viewport hero (allineamento `align-items: flex-end; text-align: right`), non più al centro. Posizionare il blocco con `position: absolute; bottom: clamp(60px, 10vh, 120px); right: clamp(24px, 6vw, 100px); max-width: 480px;`. Il bottone "Scopri" rimane sotto il paragrafo, allineato a destra. (4) Su mobile (<760px): la navbar collassa in hamburger, il logo centrale del video diventa più piccolo (`clamp(32px, 9vw, 56px)`), il blocco testo+bottone passa a `bottom-left` con padding 24px e width 100%.
- **Scope**: navbar di `index.html` (e `en/index.html`) + hero section + overlay video. NON toccare le altre pagine in questo task (la navbar split può essere estesa in task separato se richiesto).
- **Files**: `index.html`, `en/index.html`, `style.css` (o moduli CSS pertinenti se già splittato).
- **Dependencies**: Task 25, 28.
- **Notes**: il riferimento SiciLife è SOLO di layout (logo al centro + nav su entrambi i lati). NON copiare palette, copy, font o identità di SiciLife. Mantenere palette teal/oro ProperHost, font Cormorant + Inter, copy ProperHost esistente. Verificare che il logo grande sopra il video non interferisca con la leggibilità del paragrafo bottom-right (tonalità bianca con drop-shadow leggera). Test su 375px, 768px, 1440px.

---

### Task 55
- **Status**: done
- **Agent**: coder
- **Branch**: feature/villa-slider-photo-navigation
- **Priority**: high
- **Title**: VilleSlider — aggiungere navigazione per scorrere le foto delle ville
- **Desc**: Nella sezione del carosello ville di `index.html` (slider che mostra le 6 ville, es. "Villa Aurea") attualmente non esiste un meccanismo visibile per l'utente per scorrere manualmente le foto/ville. Verificare lo stato attuale dello slider (Swiper o vanilla) e: (1) aggiungere frecce di navigazione `←` / `→` sempre visibili (non solo on hover) ai lati dello slider, ben distinguibili — cerchio 56px bg `rgba(255,255,255,.18)` backdrop-filter blur(12px) border 1px solid `rgba(255,255,255,.35)` color white, hover bg `var(--accent)` con scale(1.06); (2) aggiungere indicatori (pagination dots o bullet count "01 / 06") nella parte inferiore centrale dello slider, con stato attivo evidenziato in `var(--accent)`; (3) abilitare touch swipe su mobile (se non già attivo) con momentum naturale; (4) abilitare navigazione tastiera (`ArrowLeft`/`ArrowRight`) quando lo slider è in viewport; (5) il titolo della villa visibile (es. "Villa Aurea") deve sempre aggiornarsi al cambio slide con fade morbido; (6) mantenere autoplay 6500ms con `pauseOnMouseEnter: true` e `disableOnInteraction: false`. Verificare che gli arrow buttons NON entrino in conflitto col custom cursor (Task 23) o coi magnetic buttons del Task 10.
- **Scope**: solo slider ville in `index.html` (e `en/index.html`) — navigazione foto.
- **Files**: `index.html`, `en/index.html`, `script.js` o `js/villaSlider.js`, `style.css` o CSS pertinente.
- **Dependencies**: Task 04, Task 30.
- **Notes**: il problema utente è "non c'è un modo per scorrere le foto" — la priorità è la VISIBILITÀ del controllo. Se Swiper è già usato, abilitare i moduli `Navigation` e `Pagination` con elementi custom stilizzati. Test obbligatorio su mobile reale (touch swipe) e desktop (frecce + tastiera).

---

### Task 56
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/scopri-button-spacing
- **Priority**: medium
- **Title**: Spaziatura bottone "Scopri" — distanziamento simmetrico tra paragrafo sopra e contenuto sotto
- **Desc**: Nella hero di `index.html`, il bottone "Scopri" attualmente non è distanziato in modo equilibrato: la distanza tra il paragrafo descrittivo (sopra) e il bottone è diversa dalla distanza tra il bottone e il contenuto/elemento sottostante. Correggere applicando `margin-top` e `margin-bottom` (oppure `gap` nel container flex) IDENTICI sopra e sotto il bottone, in modo che il bottone risulti otticamente centrato nel proprio "respiro". Valore consigliato: `margin: clamp(28px, 4vh, 48px) 0;` o `gap: clamp(28px, 4vh, 48px)` se il container parent è flex column. Verificare anche che lo `scroll-indicator` (se presente sotto il bottone) abbia un distanziamento coerente con il ritmo. Se il pulsante è dentro un flex column con `gap`, normalizzare il gap in tutto il blocco hero content.
- **Scope**: solo bottone "Scopri" nella hero di `index.html`.
- **Files**: `style.css` o `css/hero.css`.
- **Dependencies**: Task 28, Task 54 (se 54 cambia struttura hero, applicare 56 dopo).
- **Notes**: misurare con DevTools che le distanze sopra/sotto siano uguali al pixel (o entro 2px di tolleranza per arrotondamenti `clamp`). Test su 375px, 768px, 1440px.

---

### Task 57
- **Status**: done
- **Agent**: coder
- **Branch**: feature/servizi-images-fix
- **Priority**: high
- **Title**: Sezione "I nostri servizi" — immagini non visibili nelle card
- **Desc**: Nella sezione "Tutto quello che serve per godersi la Sicilia" / "I nostri servizi" di `index.html`, passando il cursore sopra le card si capisce che dovrebbero esserci delle immagini (cursor pointer, hover effect attivo) ma le immagini NON vengono visualizzate. Investigare la causa: (1) verificare i path `src` delle `<img>` nelle card servizi (controllare se i file esistono in `assets/`); (2) verificare se le immagini sono caricate ma nascoste da CSS (`display: none`, `visibility: hidden`, `opacity: 0`, `height: 0`, parent `overflow: hidden` con dimensioni 0); (3) verificare la console del browser per 404 o errori di caricamento; (4) verificare se le card servizio usano `background-image` invece di `<img>` e se il path è corretto e accessibile. Una volta trovata la causa: ripristinare la visualizzazione delle immagini, assicurandosi che siano coerenti col design delle card servizio (dimensioni, aspect-ratio, object-fit cover, border-radius coerente con la card). Se le immagini mancano dagli assets, segnalare quali file servono e proporre placeholder coerenti dal pool esistente (`hero-home.jpg`, `concierge.jpg`, `sea.jpg`, ecc.).
- **Scope**: sezione servizi in `index.html` (e `en/index.html`) — sia HTML che CSS che eventualmente JS che le genera.
- **Files**: `index.html`, `en/index.html`, `style.css` o CSS pertinente, eventualmente `data/services.json` o `js/serviziSlider.js`, `assets/`.
- **Dependencies**: Task 32.
- **Notes**: prima di modificare, fare un audit veloce con DevTools (Network tab + Elements tab) per identificare la causa esatta. Documentare nel commit cosa era rotto.

---

### Task 58
- **Status**: done
- **Agent**: coder
- **Branch**: feature/i18n-switcher-en-to-it
- **Priority**: high
- **Title**: Switcher lingua — bug ritorno da EN a IT
- **Desc**: Il flusso utente attuale: l'utente è su una pagina IT, clicca "EN" → viene correttamente portato alla versione inglese della stessa pagina (es. `/about.html` → `/en/about.html`). Ma quando l'utente è su una pagina EN e clicca "IT" → viene portato a una pagina sbagliata (probabilmente la home IT, oppure una 404, oppure rimane su una pagina EN). Investigare la logica dello switcher in `js/i18n.js` (funzione `getAlternateLocaleHref` o equivalente) e correggere il calcolo del path inverso. Logica corretta: (1) se `window.location.pathname` inizia con `/en/`, rimuovere il prefisso `/en/` per ottenere il path IT (es. `/en/about.html` → `/about.html`, `/en/ville/aurea.html` → `/ville/aurea.html`, `/en/` → `/`); (2) se `window.location.pathname` NON inizia con `/en/`, aggiungere il prefisso (es. `/about.html` → `/en/about.html`, `/` o `/index.html` → `/en/index.html`). Gestire correttamente i casi edge: trailing slash, URL `/`, URL con query string e hash (preservarli), URL deep nested (`/ville/aurea.html`). Testare TUTTI i collegamenti switcher su TUTTE le pagine sia IT che EN: home, about, concierge, ville, contatti, prenotazione + 6 ville singole. Verificare anche i link `<link rel="alternate" hreflang>` nel `<head>`: devono puntare correttamente alla controparte.
- **Scope**: solo logica switcher lingua + verifica `<link rel="alternate">` nei `<head>`.
- **Files**: `js/i18n.js` (o `script.js` se logica inline), tutte le pagine HTML per verificare gli hreflang.
- **Dependencies**: Task 20, Task 52.
- **Notes**: scrivere unit test mentale (o reale se framework test è disponibile) per la funzione `getAlternateLocaleHref`. Test cases minimi: `/`, `/index.html`, `/about.html`, `/ville/aurea.html`, `/en/`, `/en/index.html`, `/en/about.html`, `/en/ville/aurea.html`. Documentare nel commit gli input/output attesi.

---

### Task 59
- **Status**: done
- **Agent**: ui-designer
- **Branch**: feature/concierge-services-visibility
- **Priority**: high
- **Title**: Pagina concierge — non tutti i servizi si vedono
- **Desc**: Nella pagina `concierge.html` ("Un catalogo essenziale, ma completo" / "Servizi principali"), non tutti i servizi della catalogazione vengono visualizzati. Investigare la causa: (1) verificare HTML — sono presenti tutte le card servizio nel markup? (almeno: Wine & Food, Celebrations, Family Care + i 6 servizi principali Navetta, Mezzi, Gommoni, Chef, Favignana, Levanzo); (2) verificare CSS — la griglia/swiper della sezione servizi sta clippando o nascondendo elementi (`overflow: hidden` su parent troppo basso, `max-height` limitato, `display: none` su breakpoint, `grid-template-columns` che non avvolge); (3) verificare JS — eventuale slider Swiper con `slidesPerView` fisso che mostra solo i primi N senza scroll/navigation; (4) verificare se manca CTA/footer della sezione perché tagliato. Una volta identificata la causa: garantire che TUTTI i servizi siano visibili (o tramite scroll/swiper navigabile con frecce e dots SEMPRE visibili, o tramite griglia che avvolga tutti gli elementi su tutte le viewport). Aggiungere se necessario indicatori "scroll →" o pagination per chiarire all'utente che ci sono più contenuti. Replicare stesso fix su `en/concierge.html`.
- **Scope**: sezione "Servizi principali" / catalogo della pagina `concierge.html` (e `en/concierge.html`).
- **Files**: `concierge.html`, `en/concierge.html`, `style.css` o CSS pertinente, eventualmente `js/serviziSlider.js`.
- **Dependencies**: Task 32, Task 37.
- **Notes**: verificare visualizzazione su 375px, 768px, 1024px, 1440px. Se il problema è uno Swiper con navigazione invisibile, riusare il pattern Task 55 (frecce sempre visibili + pagination dots).

---

## Suggerimento di assegnazione tra agent

Distribuzione ragionevole con 3 agent:

- **ui-designer**: Task 17, 24, 26, 28, 29, 31, 33, 36, 37, 38, 42, 43, 44, 48
- **coder**: Task 16, 18, 19, 20, 21, 22, 23, 25, 27, 30, 32, 34, 35, 39, 40, 41, 45, 46, 47, 49, 50
- **terzo agent (qa-tester / fullstack / infra)**: può assorbire 21, 45, 48, 49, 50 oppure aiutare in parallelo su review/test cross-task.

Se gli agent hanno ruoli diversi, riassegnare di conseguenza.

## Workflow

1. Assegna task all'agent corretto.
2. L'agent lavora solo sul branch `openHands` (o sul branch indicato dalla task).
3. L'agent completa la task senza uscire dallo scope.
4. L'agent testa su mobile, tablet e desktop.
5. L'agent prepara commit convenzionale.
6. Merge manuale solo dopo verifica.

## Regole

- Un task = un obiettivo chiaro.
- Su `openHands` vanno tutti i commit dei task svolti, uno per volta.
- Non mischiare task diverse negli stessi commit.
- Non creare nuovi file se non previsto, o quanto meno chiedi prima.
- Non fare push di modifiche non testate.
- Non toccare aree non richieste.
- Se una task richiede UI e JS, dividila in due task separate.
