# in_progress - ProperHost

## Task Queue

Ogni task viene assegnata a un solo agent specializzato.  
Ogni task lavora e pusha sul branch openHands.  
Ogni task deve restare entro il proprio scope.  
Non fare interventi fuori perimetro.  
Non mischiare UI con logica JS.  
Non rompere elementi esistenti.

## Premessa

Questa task queue copre la migrazione completa del sito ProperHost dal codice statico HTML/CSS/JS attuale a un'architettura Next.js 14 (App Router) + TypeScript strict + Tailwind + Lenis + GSAP + Swiper + i18n IT/EN, sotto sottocartella `properhost-next/` (il sito statico esistente resta in root come reference durante la migrazione).

I contenuti, palette, tipografia, nomi ville, contatti e identità di ProperHost restano invariati. Nessun task chiede di replicare elementi distintivi di brand altrui (palette, font, copy, naming, P.IVA, mail). Vedi sezione "Identità ProperHost" sotto: è il vincolo che ogni task deve rispettare.

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
- Display (H1-H3, claim, wordmark): **Cormorant Garamond** — italic 400/500, regular 300/400. Caricato via `next/font/google`.
- Body (paragrafi, UI, microcopy): **Inter** — 300/400/500/600/700. Caricato via `next/font/google`.

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

## Workflow

1. Assegna task all'agent corretto (vedi campo `Agent`).
2. L'agent lavora solo sul branch indicato in `Branch`.
3. L'agent completa la task senza uscire dallo `Scope`.
4. L'agent testa su mobile (375px), tablet (768px), desktop (1440px).
5. L'agent prepara commit convenzionale (`feat:`, `fix:`, `chore:`, `style:`, `refactor:`).
6. Merge manuale solo dopo verifica visiva e funzionale.

## Regole globali

- Un task = un obiettivo chiaro. Niente scope creep.
- Tutti i commit dei task vanno sul branch indicato; merge in `main` solo dopo review.
- Non mischiare task diverse nello stesso commit.
- Non creare nuovi file se non previsti dalla task; in caso, chiedere prima.
- Non fare push di modifiche non testate.
- Non toccare aree non richieste.
- Se una task richiede sia UI che logica JS pesante, dividila in due task separate.
- TypeScript strict ovunque. Niente `any`. Niente `// @ts-ignore`.
- Tutti i componenti animati devono pulire le proprie risorse al dismount (ScrollTrigger, Lenis, Swiper, event listeners).
- Tutte le animazioni rispettano `prefers-reduced-motion`.

---

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
- **Status**: todo
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
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/transition-speed-fix
- **Priority**: high
- **Title**: Transition speed optimization
- **Desc**: Le attuali transizioni e animazioni CSS risultano troppo lente e si percepisce un ritardo visivo importante. Ridurre la durata delle `transition` e delle `animation` su tutti gli elementi interattivi (hover, reveal, scroll-trigger). Puntare a valori tra 150ms e 400ms per le micro-interazioni e 500ms–700ms per gli scroll reveal più elaborati. Rimuovere o ridurre `transition-delay` eccessivi. Verificare che nessun elemento sembri "in ritardo" all'apertura della pagina o allo scroll.
- **Scope**: tutte le animazioni e transizioni CSS, globale.
- **Files**: style.css
- **Dependencies**: nessuna.
- **Notes**: non eliminare le animazioni, solo velocizzarle. Mantenere `ease-out` o `cubic-bezier` fluido per qualità percepita alta.

---

### Task 09
- **Status**: todo
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
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/slider-cursor-buttons
- **Priority**: medium
- **Title**: Slider magnetic cursor navigation buttons
- **Desc**: Nel carosello delle ville in `index.html`, aggiungere due bottoni di navigazione (freccia sinistra e freccia destra) con le seguenti caratteristiche: (1) appaiono solo quando il mouse si avvicina alla rispettiva estremità laterale dello slider (es. entro 120px dal bordo sinistro/destro); (2) seguono il cursore verticalmente in modo fluido tramite JavaScript (cursor-following effect); (3) sono composti da un cerchio piccolo (es. 48px) con sfondo semitrasparente o tinted (es. rgba del colore primario teal), con icona freccia Material Design centrata in bianco; (4) hanno effetto hover con leggera scala e cambio opacità; (5) sono completamente nascosti su mobile (touch swipe già gestito); (6) transizione di apparizione fluida (opacity + scale). Il comportamento deve essere implementato in JavaScript puro, l'aspetto grafico in CSS.
- **Scope**: slider delle ville in index.html — solo JS per logica cursor-follow e show/hide, solo CSS per stile bottoni.
- **Files**: script.js, style.css
- **Dependencies**: Task 04 (slider enhancement) deve essere completata o in stato avanzato.
- **Notes**: tenere separata la logica JS (cursor follow, proximity detection) dallo styling CSS (cerchio, icona, transizioni). Se l'intervento richiede modifiche HTML strutturali, limitarle al minimo indispensabile e documentarle nel commit.

---

### Task 11
- **Status**: todo
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
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/whitespace-fill-sections
- **Priority**: medium
- **Title**: Whitespace fill & content density
- **Desc**: In `index.html` sono presenti aree con troppo spazio bianco vuoto che danno un'impressione di incompletezza. Identificare tutte le aree vuote e riempirle con contenuti visivi coerenti: aggiungere sezioni con testo descrittivo, card di servizi, citazioni, icone materiali, statistiche, o elementi decorativi sottili. Il contenuto aggiunto deve essere coerente con il brand ProperHost (hospitality siciliana, premium, teal/gold). Non aggiungere spazio, ma riempire quello esistente con qualcosa di significativo e bello. Usare layout a griglia o a colonne per distribuire i contenuti in modo equilibrato.
- **Scope**: contenuto e layout visivo di index.html.
- **Files**: index.html, style.css
- **Dependencies**: nessuna.
- **Notes**: non inventare dati o informazioni false. Usare copy placeholder coerente con il tono ProperHost. Niente sezioni duplicate. Se si aggiungono icone, usare Material Icons già caricati o SVG inline.

---

### Task 13
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/background-image-reveals
- **Priority**: medium
- **Title**: Scroll-reveal background images
- **Desc**: Aggiungere più sezioni con immagini di background che si svelano progressivamente allo scroll, come già fatto con le transizioni esistenti ma in modo più diffuso lungo tutta la pagina. Le immagini di sfondo devono: (1) avere overlay semitrasparente per garantire leggibilità del testo sovrapposto; (2) usare `background-attachment: fixed` (parallax) dove supportato, o un effetto clip/reveal via scroll; (3) apparire in modo fluido con transizioni di opacità o scale; (4) usare immagini coerenti con Sicilia, ville, paesaggi mediterranei (usare i path già presenti nel progetto o placeholder). Il risultato deve essere esteticamente accattivante e professionale. Distribuire questi effetti in almeno 3 punti della pagina.
- **Scope**: sezioni con background image in index.html.
- **Files**: index.html, style.css
- **Dependencies**: Task 08 (transition speed) consigliata prima.
- **Notes**: non usare immagini esterne via URL remoti se non già presenti nel progetto. Testare che il testo sopra le immagini sia sempre leggibile (contrasto sufficiente). Su mobile disabilitare `background-attachment: fixed` (causa jank su iOS).

---

### Task 14
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/ville-page-premium
- **Priority**: high
- **Title**: Ville page premium redesign
- **Desc**: La pagina delle ville è la più importante del sito e deve essere ridisegnata in chiave premium Material UI. Interventi richiesti: (1) galleria fotografica delle ville con layout a griglia o masonry, immagini grandi e di impatto; (2) card delle ville con ombre layered, border-radius coerente, hover con elevazione e reveal di dettagli; (3) sezione highlights/punti di forza di ogni villa con icone Material e copy descrittivo; (4) transizioni allo scroll per l'entrata di ogni elemento (slide-in, fade-in, reveal); (5) palette coerente con teal/gold/ivory, sfondi scuri o immagini full-width per separare le sezioni; (6) tipografia gerarchica chiara (titolo villa, sottotitolo, descrizione, call to action); (7) CTA visibile per ogni villa (es. "Richiedi disponibilità" come button Material con ripple). Il risultato deve essere visivamente al livello di un sito di luxury hospitality internazionale.
- **Scope**: pagina ville (ville.html o equivalente), solo CSS e HTML strutturale visivo.
- **Files**: ville.html, style.css
- **Dependencies**: Task 07 (spacing), Task 08 (transition speed).
- **Notes**: non modificare la logica JS esistente. Se servono nuove classi HTML, aggiungerle con nomi semantici e documentarli. Usare le immagini già presenti nel progetto.

---

### Task 15
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/availability-cta-differentiation
- **Priority**: medium
- **Title**: "Richiedi disponibilità" CTA differentiation
- **Desc**: Il pulsante "Richiedi disponibilità" nel nav porta attualmente alla stessa pagina contatti, creando ridondanza e confusione. Differenziare le due esperienze in modo chiaro: (1) il pulsante "Richiedi disponibilità" deve aprire un modal/drawer inline (senza navigare fuori dalla pagina corrente) con un form sintetico: nome, villa desiderata (select), date check-in/check-out, numero ospiti, messaggio opzionale, invio; (2) la pagina "Contatti" rimane per richieste generali, informazioni e comunicazioni non legate a prenotazioni; (3) il pulsante nel nav deve essere stilisticamente distinto: usare lo stile Material button con colore gold (`#b89968`) o teal in contrasto con il nav, con ripple effect e piccola icona calendario o chiave. Il modal deve avere overlay scuro, chiusura con ESC e click fuori, animazione di entrata fluida. La divisione logica è: "Richiedi disponibilità" = prenotazione rapida → modal; "Contatti" = comunicazione generica → pagina dedicata.
- **Scope**: navbar (index.html e tutte le pagine), modal HTML/CSS, stile CTA.
- **Files**: index.html, style.css (modal UI); script.js (apertura/chiusura modal — task JS separata se necessario).
- **Dependencies**: nessuna.
- **Notes**: Se il modal richiede logica JS complessa (validazione, submit), aprire una task separata per il coder. Questo task copre solo la struttura HTML del modal e lo stile CSS. Il coder gestirà l'interattività in una task dedicata se non già coperta da Task 05.

---

### Task 16
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-init
- **Priority**: high
- **Title**: Init Next.js 14 + TypeScript strict + Tailwind + ESLint
- **Desc**: Inizializzare il progetto Next.js 14 dentro una sottocartella `properhost-next/` nella root del repo (NON sovrascrivere i file statici esistenti). Comando di partenza: `pnpm create next-app@latest properhost-next --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm`. Selezionare App Router (default), Turbopack se richiesto. Una volta creato il progetto, aprire `properhost-next/tsconfig.json` e impostare `compilerOptions.strict: true`, `noUncheckedIndexedAccess: true`, `noImplicitAny: true`, `noImplicitReturns: true`, `noFallthroughCasesInSwitch: true`, `forceConsistentCasingInFileNames: true`. Aggiornare `paths` per esporre alias aggiuntivi: `@/components/*`, `@/lib/*`, `@/messages/*`, `@/styles/*`, `@/data/*`, `@/types/*`. Creare struttura directory: `properhost-next/src/app/[locale]/` (vuoto), `src/components/` (vuoto), `src/components/sections/` (vuoto), `src/lib/`, `src/messages/`, `src/styles/`, `src/data/`, `src/types/`. Aggiornare `package.json` con script: `"dev": "next dev"`, `"build": "next build"`, `"start": "next start"`, `"lint": "next lint"`, `"typecheck": "tsc --noEmit"`. Verificare: (a) `pnpm install` parte senza errori; (b) `pnpm dev` avvia su localhost:3000 mostrando la home di default; (c) `pnpm build` produce build senza warning; (d) `pnpm typecheck` passa pulito. Pushare un primo commit `chore: init next.js 14 scaffolding`.
- **Scope**: solo scaffolding del progetto Next.js. Nessun componente custom, nessuno stile custom, nessuna logica applicativa, nessuna libreria extra (Lenis/GSAP/Swiper sono in Task 18).
- **Files**: nuovi: `properhost-next/package.json`, `properhost-next/tsconfig.json`, `properhost-next/next.config.ts`, `properhost-next/tailwind.config.ts`, `properhost-next/postcss.config.mjs`, `properhost-next/.eslintrc.json`, `properhost-next/.gitignore`, struttura cartelle dentro `src/`. Modifiche: nessuna ai file root del sito statico.
- **Dependencies**: nessuna.
- **Notes**: NON eliminare i file statici esistenti (`index.html`, `about.html`, `concierge.html`, `ville.html`, `contatti.html`, `style.css`, `script.js`, `assets/`). Sono il riferimento per copy e asset durante tutta la migrazione. Su Windows usare PowerShell/Bash; verificare che il path `properhost-next/` sia case-sensitive coerente (lowercase). Se `pnpm` non è installato, usare `npm` o `yarn` ma documentarlo in `README.md` del nuovo progetto. Verificare che la cartella `node_modules` sia in `.gitignore`.

---

### Task 17
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-brand-tokens
- **Priority**: high
- **Title**: Brand tokens (CSS variables) + font wiring (Cormorant + Inter)
- **Desc**: Configurare l'identità visiva ProperHost a livello di tokens. (1) Aprire `properhost-next/src/styles/globals.css` (creare se non esiste, e importarlo in `app/[locale]/layout.tsx`). Definire dentro `:root { ... }` TUTTE le CSS variables della palette ProperHost esattamente come elencate nella sezione "Identità ProperHost" di questo PLAN: `--primary`, `--primary-dark`, `--primary-soft`, `--accent`, `--accent-soft`, `--accent-deep`, `--bg`, `--bg-2`, `--bg-3`, `--bg-warm`, `--white: #ffffff`, `--text`, `--text-2`, `--muted`, `--muted-2: #b8b0a0`, `--line: rgba(28,40,38,.10)`, `--line-strong: rgba(28,40,38,.22)`, `--shadow-sm: 0 8px 22px rgba(28,40,38,.06)`, `--shadow: 0 30px 70px rgba(5,30,28,.12)`, `--ease: cubic-bezier(.22,.61,.36,1)`, `--max: 1320px`, `--max-text: 680px`. (2) In `properhost-next/tailwind.config.ts` mappare ogni token nel `theme.extend.colors` (es. `primary: 'var(--primary)'`, `accent: 'var(--accent)'`, `'bg-2': 'var(--bg-2)'`, `'text-2': 'var(--text-2)'`, ecc.), in `theme.extend.boxShadow` esporre `sm: 'var(--shadow-sm)'` e `DEFAULT: 'var(--shadow)'`, in `theme.extend.maxWidth` esporre `container: 'var(--max)'` e `text: 'var(--max-text)'`. (3) Nel layout root caricare i font usando `next/font/google`: `import { Cormorant_Garamond, Inter } from 'next/font/google'` con configurazione `Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500'], style: ['normal','italic'], variable: '--font-display', display: 'swap' })` e `Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-body', display: 'swap' })`. Applicare entrambe le className al tag `<html>` (es. `<html className={`${cormorant.variable} ${inter.variable}`}>`). (4) In `tailwind.config.ts` aggiungere `theme.extend.fontFamily.display: ['var(--font-display)', 'serif']` e `body: ['var(--font-body)', 'sans-serif']`. (5) Settare in `globals.css` il `body` con `font-family: var(--font-body); background: var(--bg); color: var(--text);`. Verificare nel browser con DevTools: le CSS vars sono risolte, i font caricano (Network tab mostra woff2 da Google Fonts), nessun FOIT, le classi `bg-primary`, `text-accent-deep`, `font-display` funzionano.
- **Scope**: solo brand tokens, Tailwind config e font wiring. Nessun componente, nessuna pagina, nessun reset CSS oltre quello base di Tailwind.
- **Files**: nuovi/modificati: `properhost-next/src/styles/globals.css`, `properhost-next/tailwind.config.ts`, `properhost-next/src/app/[locale]/layout.tsx` (creazione minimale solo per testare i font, sarà ampliata in Task 27).
- **Dependencies**: Task 16.
- **Notes**: NON usare valori hex inline nei componenti — sempre `bg-primary`, `text-accent-deep`, `bg-bg-2`, `font-display`, ecc. via Tailwind. NON caricare font diversi da Cormorant Garamond e Inter (no NT Fabulous, no Raleway). Verificare che `display: 'swap'` sia attivo per evitare FOIT. Su Tailwind v4 (se presente in Next.js 14 latest) la sintassi della config potrebbe cambiare — usare `@theme` directive in CSS se necessario. Se la build CSS produce warning su CSS vars non riconosciute da Tailwind, ignorare (sono runtime).

---

### Task 18
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-libs
- **Priority**: high
- **Title**: Install + wrap Lenis, GSAP, Swiper (lib utility)
- **Desc**: Installare e wrappare le librerie di animazione e slider. (1) `pnpm add lenis gsap swiper`. Per SplitText di GSAP: se è disponibile la licenza GreenSock Club, configurare l'auth in `~/.npmrc` o `properhost-next/.npmrc` con `@gsap:registry=https://npm.greensock.com` + `//npm.greensock.com/:_authToken=${GSAP_AUTH_TOKEN}` (token via env, NON committare); altrimenti installare alternativa OSS `pnpm add split-type` come fallback. (2) Creare `properhost-next/src/lib/gsap.ts` con `'use client'`-compatible export: `import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger';` poi `if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }`. Se SplitText disponibile: import e register. Esporta `gsap`, `ScrollTrigger`, opzionale `SplitText`. (3) Creare `properhost-next/src/lib/lenis.ts` con factory function `createLenis()` che ritorna istanza Lenis con config: `{ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, smoothTouch: false, syncTouch: false }`. Export anche `setupLenisRaf(lenis)` che fa setup del raf loop con `requestAnimationFrame` e collega `lenis.on('scroll', ScrollTrigger.update)` e `gsap.ticker.add((time) => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0)`. (4) Creare `properhost-next/src/lib/swiper.ts` che esporta i moduli usati: `import { Navigation, Pagination, Autoplay, EffectFade, FreeMode, Keyboard, A11y } from 'swiper/modules'` ed esporta come named exports per import unificato dai componenti. (5) Verificare che il bundle Next.js NON includa codice GSAP/Lenis/Swiper nel bundle server: usare `'use client'` correttamente nei componenti consumatori e import dinamici se necessario. Test: `pnpm build` deve completare senza errori.
- **Scope**: solo install delle dipendenze e creazione dei wrapper. Nessun uso effettivo nei componenti (sarà nelle task successive 22, 23, 28, 30, 32).
- **Files**: nuovi: `properhost-next/src/lib/gsap.ts`, `properhost-next/src/lib/lenis.ts`, `properhost-next/src/lib/swiper.ts`. Modifiche: `properhost-next/package.json` (deps aggiunte), opzionale `.npmrc` se GSAP Club. Opzionale: `src/lib/splitText.ts` se SplitText non disponibile (helper compatibile con split-type).
- **Dependencies**: Task 16, Task 17.
- **Notes**: NON importare `gsap`, `lenis` o `swiper` direttamente nei componenti — sempre via wrapper di `src/lib/`. Su SSR Lenis e GSAP con plugin browser-only devono essere protetti da check `typeof window !== 'undefined'`. Se SplitText non disponibile, documentare nel commento di `src/lib/gsap.ts` con `// SplitText fallback: src/lib/splitText.ts (uses split-type)`. Verificare che la versione di Swiper installata sia ≥11.x (cambiamenti API rispetto a v8).

---

### Task 19
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-assets
- **Priority**: high
- **Title**: Migrate static assets in public/ (immagini, video, logo)
- **Desc**: Copiare tutti gli asset esistenti dalla cartella `assets/` del sito statico nella cartella `properhost-next/public/assets/` mantenendo gli stessi nomi file (per non dover toccare i path nel copy). Lista completa da copiare (verificare che ognuno esista prima): `logo.png` (anche dalla root), `hero.mp4`, `hero.webm`, `hero-home.jpg`, `hero-home-alt.jpg`, `intro.jpg`, `concierge.jpg`, `concierge-hero.jpg`, `sea.jpg`, `cta.jpg`, `villa-1.jpg`, `villa-2.jpg`, `villa-3.jpg`, `villa-4.jpg`, `villa-5.jpg`, `villa-6.jpg`, `ville-hero.jpg`, `about-hero.jpg`, `about-panel.jpg`, `contatti-hero.jpg`. Se ci sono asset mancanti elencati qui, segnalarlo in commit message ma non bloccare la task. Verificare che (a) i file siano binari integri (apri ogni jpg/png in viewer per confermare); (b) i nomi siano lowercase senza spazi (kebab-case già OK); (c) la struttura sia `properhost-next/public/assets/<file>` e non nidificata oltre. Creare anche un file `properhost-next/public/favicon.ico` (placeholder o estratto dal logo se non presente). Aggiornare `properhost-next/src/app/[locale]/layout.tsx` con `metadata.icons.icon: '/favicon.ico'`. NON ottimizzare le immagini in questa task (sarà Task 46): solo copy 1:1.
- **Scope**: solo copia degli asset. Nessuna ottimizzazione, conversione, ridimensionamento. Nessuna modifica ai nomi (a meno di problemi caratteri speciali, in tal caso documentare).
- **Files**: nuovi: tutti i file in `properhost-next/public/assets/` + `properhost-next/public/favicon.ico`.
- **Dependencies**: Task 16.
- **Notes**: NON eliminare gli asset originali nella cartella `assets/` di root — sono ancora referenziati dal sito statico durante la migrazione. NON rinominare i file (tutte le task successive useranno questi nomi). Su Windows attenzione al copy via shell: usare `Copy-Item -Recurse` o l'esplora risorse, non comandi che corrompono binari. Se un file pesa più di 5MB (es. `hero.mp4` = 3.8MB, `hero.webm` = 4.2MB), tenerli per ora — l'ottimizzazione video è in Task 49.

---

### Task 20
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-i18n
- **Priority**: high
- **Title**: Setup i18n IT/EN con next-intl (default IT, EN secondaria)
- **Desc**: Configurare internazionalizzazione completa con `next-intl`. (1) `pnpm add next-intl`. (2) Creare `properhost-next/src/i18n/request.ts` (config server-side) con `import { getRequestConfig } from 'next-intl/server'` che valida la locale ricevuta e carica il file di messaggi corrispondente. (3) Creare `properhost-next/src/middleware.ts` con `import createMiddleware from 'next-intl/middleware'` e config: `locales: ['it', 'en'], defaultLocale: 'it', localePrefix: 'as-needed'` (così `/` rimanda a `/it/` ma URL pulito di default). Esportare `matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']`. (4) Aggiornare `properhost-next/next.config.ts` con plugin `withNextIntl('./src/i18n/request.ts')`. (5) Strutturare `properhost-next/src/app/[locale]/` con `layout.tsx` (wrappa `NextIntlClientProvider` con `messages` e `locale`) e `page.tsx` (placeholder iniziale). (6) Creare `properhost-next/src/messages/it.json` e `en.json` strutturati per namespace come segue (popolare estraendo letteralmente il copy dai file statici esistenti):

  ```json
  {
    "meta": { "title": "Properhost · Hospitality", "description": "Ville private e servizi tailor-made per un soggiorno autentico in Sicilia." },
    "nav": { "home": "Home", "about": "About", "concierge": "Concierge", "ville": "Ville", "servizi": "Servizi", "contatti": "Contatti", "book": "Book" },
    "hero": { "eyebrow": "Luxury villas in Sicily", "subtitle": "Ville private, dimore selezionate e servizi tailor-made per chi desidera un soggiorno autentico, raffinato e senza pensieri sulla costa siciliana. Ogni dettaglio coordinato per trasformare il viaggio in un'esperienza su misura.", "discover": "Scopri" },
    "mission": { "tag": "Benvenuti", "title": "Ospitalità siciliana, eleganza contemporanea", "ctaLabel": "Scopri le ville", "col1": "...", "col2": "..." },
    "villas": { "tag": "Le nostre ville", "title": "Una collezione selezionata", "explore": "Esplora", "items": { "aurea": { "name": "Villa Aurea", "location": "Taormina", "guests": "10 ospiti · 5 camere", "summary": "..." }, "zagara": { ... }, "bianca": { ... }, "soho": { ... }, "manu": { ... }, "dolceVita": { ... } } },
    "concierge": { "tag": "Private concierge", "title": "Ogni soggiorno, un itinerario su misura", "col1": "...", "col2": "...", "ctaLabel": "Scopri il concierge" },
    "services": { "tag": "I nostri servizi", "title": "Tutto quello che serve per godersi la Sicilia", "items": [{ "id": "01", "title": "Servizio Navetta", "desc": "..." }, ...] },
    "cta": { "tag": "Contattaci", "title": "Progettiamo insieme il tuo soggiorno in Sicilia", "primaryLabel": "Vai al form contatti", "phoneLabel": "+39 339 2923 744" },
    "faq": { "title": "Domande frequenti", "intro": "...", "items": [{ "q": "...", "a": "..." }, ...] },
    "footer": { "lead": "...", "headings": { "contacts": "Contatti", "navigate": "Naviga" }, "rights": "© 2026 Properhost — Tutti i diritti riservati" },
    "contact": { "form": { "name": "Nome e cognome", "email": "Email", "phone": "Telefono", "guests": "Numero ospiti", "dates": "Date del soggiorno", "villa": "Villa o area di interesse", "message": "Messaggio", "privacy": "Accetto la privacy policy...", "submit": "Invia richiesta" } }
  }
  ```

  (7) Tradurre `en.json` mantenendo il tono editoriale luxury (es. "Ville private, dimore selezionate" → "Private villas, hand-picked residences"). NON tradurre meccanicamente con Google Translate — il copy inglese deve suonare naturale a un madrelingua di una rivista travel. (8) Test: visitare `/it` e `/en` deve renderizzare la pagina con copy diverso. (9) Estrarre il copy ESATTO dal sito statico esistente: leggere `index.html` (e tutti gli altri `.html`) e copiare letteralmente le stringhe rilevanti.
- **Scope**: solo configurazione i18n, middleware, file di traduzione popolati. Nessun componente UI dello switcher (sarà in Navbar Task 25).
- **Files**: nuovi: `properhost-next/src/middleware.ts`, `properhost-next/src/i18n/request.ts`, `properhost-next/src/messages/it.json`, `properhost-next/src/messages/en.json`. Modifiche: `properhost-next/next.config.ts`, `properhost-next/src/app/[locale]/layout.tsx`, `properhost-next/src/app/[locale]/page.tsx`.
- **Dependencies**: Task 16, Task 17, Task 19.
- **Notes**: NON inventare copy: tutto il testo italiano viene da file statici esistenti — letterale. NON tradurre con tool automatici per l'inglese. Se una stringa italiana non ha un equivalente esistente nei file statici (es. FAQ, label form aggiuntivi), lasciare in `it.json` con valore corretto e in `en.json` con `"TODO_TRANSLATION"` da revisionare. NON usare `next/router` (App Router usa `next/navigation`). Verificare che `localePrefix: 'as-needed'` produca URL `/` per IT e `/en/` per EN (non `/it/` esplicito).

---

### Task 21
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-lint
- **Priority**: medium
- **Title**: ESLint + Prettier + Husky strict toolchain
- **Desc**: Configurare il toolchain di linting/formatting strict per garantire qualità del codice e prevenire regressioni. (1) Installare deps dev: `pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier prettier husky lint-staged`. (2) Configurare `properhost-next/.eslintrc.json` con `extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/strict', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:jsx-a11y/recommended', 'prettier']`. Rules custom: `'@typescript-eslint/no-explicit-any': 'error'`, `'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]`, `'import/order': ['error', { groups: ['builtin','external','internal','parent','sibling','index'], 'newlines-between': 'always', alphabetize: { order: 'asc' } }]`, `'react/self-closing-comp': 'error'`, `'react-hooks/exhaustive-deps': 'error'`. (3) Configurare `properhost-next/.prettierrc.json`: `{ "singleQuote": true, "semi": false, "trailingComma": "all", "printWidth": 100, "arrowParens": "always", "tabWidth": 2, "endOfLine": "lf" }`. Creare `.prettierignore` con `node_modules`, `.next`, `public`, `*.md`. (4) Setup Husky: `pnpm exec husky init`. Creare `.husky/pre-commit` con `pnpm exec lint-staged`. (5) Configurare `lint-staged` in `package.json`: `"lint-staged": { "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"], "*.{json,css,md}": ["prettier --write"] }`. (6) Aggiungere script: `"lint": "next lint"`, `"lint:fix": "next lint --fix"`, `"format": "prettier --write .\""`, `"format:check": "prettier --check ."`, `"typecheck": "tsc --noEmit"`. (7) Eseguire una passata `pnpm lint:fix` e `pnpm format` per allineare i file generati dalle Task 16-20. Verificare che `pnpm lint && pnpm typecheck && pnpm format:check` passi tutto pulito.
- **Scope**: solo configurazione tooling. Nessuna modifica ai file di codice esistenti (a parte fix automatici eseguiti una volta dal `pnpm lint:fix`).
- **Files**: `properhost-next/.eslintrc.json`, `properhost-next/.prettierrc.json`, `properhost-next/.prettierignore`, `properhost-next/.husky/pre-commit`, `properhost-next/package.json` (script + lint-staged + deps dev). Possibili aggiustamenti automatici nei file di codice esistenti.
- **Dependencies**: Task 16.
- **Notes**: NON disabilitare regole strict per "far passare" il codice — risolverle è il punto del task. Se una regola crea molti falsi positivi su tipi auto-generati Next.js, usare `overrides` mirati (es. su `*.config.ts`). `tsconfig.json.strict` deve restare `true`. Su Windows attenzione a `endOfLine: 'lf'` — può richiedere `git config core.autocrlf input`. Husky può rifiutarsi di installarsi se non c'è `.git/` in root: in tal caso, eseguire `git init` se manca.

---

## Task Queue · Migration Phase 1 — Primitives

---

### Task 22
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-preloader
- **Priority**: medium
- **Title**: Componente Preloader fullscreen con counter + curtain SVG exit
- **Desc**: Creare `properhost-next/src/components/Preloader.tsx` come componente client (`'use client'` in cima al file). Comportamento: al primo load della pagina, mostra un overlay fullscreen (`position: fixed; inset: 0; z-index: 9999`) con sfondo `var(--primary-dark)` (#053e36). Al centro un counter percentuale enorme in Cormorant Garamond regular, font-size `clamp(8rem, 18vw, 16rem)`, color white, rappresentato da `<span ref={counterRef}>0</span>%`. Il counter deve crescere da 0 a 100 in modo guidato dal load progress reale dell'app: usare un mix di `document.readyState`, preload del video hero (`/assets/hero-home.jpg` come poster, `hero.mp4` per metadati), e font ready (`document.fonts.ready`). Se questi segnali completano in <1.2s (caso comune), forzare comunque una durata minima di 1.4s con curva ease-out per sensazione di "qualità". Implementare con GSAP timeline: `tl.to(counter, { innerHTML: 100, duration: 1.4, ease: 'power2.out', snap: { innerHTML: 1 }, onUpdate: () => counterRef.textContent = Math.round(...) + '' })`. Al raggiungimento di 100, esegui exit animation: due path SVG curvi (uno top con `clipPath` o transform da y:0 a y:-100%, uno bottom da y:0 a y:100%) si ritraggono rivelando la pagina sottostante. Path desktop reference: `<path d="M0,0 C480,80 1440,80 1920,0 L1920,1080 L0,1080 Z" />` per top e mirrorato per bottom; viewBox `0 0 1920 1080`. Path mobile: viewBox `0 0 768 1024` con curve scalata. Durata exit 1.2s, easing `power3.inOut`. Salvare flag in `sessionStorage.setItem('properhost.preloaderShown', '1')` per non ripetere il preloader nelle navigazioni interne della stessa sessione (controllo all'avvio: se flag presente, render ritorna `null` immediatamente). Rispettare `prefers-reduced-motion`: se `window.matchMedia('(prefers-reduced-motion: reduce)').matches` è true, salta il counter e fai un fade-out 200ms.
- **Scope**: solo componente Preloader. Non integrarlo ancora nel root layout (sarà Task 27). Test isolato: importarlo in una pagina di test temporanea per verificare comportamento.
- **Files**: nuovo: `properhost-next/src/components/Preloader.tsx`.
- **Dependencies**: Task 17 (font), Task 18 (GSAP wrapper).
- **Notes**: Il preloader deve essere assoluto/fixed sopra il contenuto, NON un wrapper che blocca il render della pagina (così la pagina è già montata sotto e l'exit del preloader la rivela). Usare `gsap.context()` con cleanup obbligatorio al dismount per evitare memory leak. Test edge case: connessione lenta (la pagina impiega 5s a caricare) — il counter deve aspettare il caricamento reale, non scadere a 100 prima. Test sessione: secondo refresh della stessa scheda, preloader NON deve apparire. Se scelta di design: il counter è puramente decorativo e va a 100 in 1.4s indipendentemente dal load reale, va bene (decisione del designer); in tal caso semplificare la logica.

---

### Task 23
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-cursor
- **Priority**: low
- **Title**: Componente CustomCursor (cerchio gold, espande su hover, freccia su slider)
- **Desc**: Creare `properhost-next/src/components/CustomCursor.tsx` come componente client. Sostituisce il cursore di sistema con un cerchio personalizzato che segue il mouse con leggero ritardo. Markup: `<div ref={cursorRef} className="custom-cursor" />`. Stato base CSS: `position: fixed; top: 0; left: 0; width: 32px; height: 32px; border-radius: 50%; background: rgba(184,153,104,0.4); border: 1px solid rgba(216,193,154,0.6); pointer-events: none; z-index: 9999; mix-blend-mode: difference; transform: translate(-50%, -50%); will-change: transform;`. Movimento: usare `gsap.quickTo(cursorRef.current, 'x', { duration: 0.3, ease: 'power3.out' })` e analogo per `y`. Listener su `window.mousemove`: aggiornare con `xTo(e.clientX); yTo(e.clientY)`. Stati hover (rilevati con event delegation su body): (1) target match `'a, button, [role="button"], .interactive'` → `gsap.to(cursorRef.current, { width: 60, height: 60, backgroundColor: 'rgba(184,153,104,1)', duration: 0.3 })`; (2) target match `'.draggable, .swiper, [data-cursor="arrow-next"]'` → cursore diventa cerchio bianco solid 64px con SVG freccia → centrata (manipolare `innerHTML` o usare un secondo elemento con conditional render); analogo per `[data-cursor="arrow-prev"]` con freccia ←; (3) target match `'input, textarea, [contenteditable]'` → cursore nasconde (`opacity: 0`) e ripristina cursore di sistema. Su `mouseleave` torna allo stato base. Disabilitato completamente su touch devices: check `window.matchMedia('(hover: none)').matches` o `'ontouchstart' in window` — se true, render ritorna `null`. Disabilitato anche con `prefers-reduced-motion: reduce`: render ritorna `null`. Lo stile CSS può essere inline o in `globals.css` con classe `.custom-cursor`.
- **Scope**: solo componente cursore. Va montato globalmente nel root layout (Task 27), non in questa task.
- **Files**: nuovo: `properhost-next/src/components/CustomCursor.tsx`. Eventuali stili in `properhost-next/src/styles/globals.css` (se classe `.custom-cursor` definita lì).
- **Dependencies**: Task 18 (GSAP wrapper).
- **Notes**: Su Safari `mix-blend-mode: difference` può avere bug grafici sopra video — testare e fallback a `solid color` se necessario, oppure rimuovere il blend mode mantenendo solo trasparenza. Cleanup obbligatorio: `useEffect` return rimuove tutti gli event listener registrati. NON bloccare il `pointer-events` dei link/button reali — il cursore deve avere `pointer-events: none`. Test: hover su un link, il cursore si espande; hover sullo slider ville, il cursore mostra freccia →. Performance: usare `will-change: transform` ma rimuoverlo dopo (al dismount) per non sprecare GPU.

---

### Task 24
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-section-divider
- **Priority**: medium
- **Title**: Componente SectionDivider (curtain SVG curvo riusabile)
- **Desc**: Creare `properhost-next/src/components/SectionDivider.tsx` come componente riutilizzabile per le transizioni curve tra sezioni con bg color diversi. Props TypeScript: `{ direction: 'top' | 'bottom'; fillColor: string; height?: number; className?: string; ariaHidden?: boolean }`. `direction: 'top'` significa che la curva chiude la parte BASSA della sezione precedente (quindi la curva è in basso, il fill è il colore della sezione successiva). `direction: 'bottom'` significa che la curva apre la parte ALTA della sezione successiva (il fill è il colore della sezione precedente). `fillColor` accetta CSS color o token (es. `'var(--primary)'`). `height` default 80px (mobile) / 120px (desktop) — usare clamp interno `clamp(60px, 8vw, 140px)`. Markup: SVG full-width responsive con `<svg width="100%" height={height} viewBox="0 0 1920 120" preserveAspectRatio="none">` e un `<path>` con `d` che disegna una curva Bézier morbida da sinistra a destra. Path desktop suggerito per direzione 'top' (curva concava verso il basso): `d="M0,0 C480,80 1440,80 1920,0 L1920,120 L0,120 Z"`. Per direzione 'bottom' (curva convessa): `d="M0,120 C480,40 1440,40 1920,120 L1920,0 L0,0 Z"`. Il `<path>` ha `fill={fillColor}`. Aggiungere `aria-hidden="true"` di default (è decorativo). CSS: `display: block; width: 100%; line-height: 0;` per evitare gap di 1px. Posizionamento da parte del consumatore: il divider è un elemento di flusso normale che si posiziona in `<section>` fra due bg, oppure absolute con `bottom: -1px`/`top: -1px` per coprire seam. Rendere componente server-only (no client directive necessaria).
- **Scope**: solo il componente SVG riutilizzabile. Le occorrenze nelle sezioni saranno in Task 35 (stitching home).
- **Files**: nuovo: `properhost-next/src/components/SectionDivider.tsx`.
- **Dependencies**: Task 17 (CSS vars per fillColor da token).
- **Notes**: Il SectionDivider va spesso posizionato OUT-of-flow con `position: absolute; bottom: -1px; left: 0; right: 0` per evitare gap di 1px tra sezioni dovuti ad antialiasing. Verificare su Chrome, Safari, Firefox: a volte il gap appare solo su uno. Il divider NON deve essere un PNG o un `<img>` — sempre SVG inline per scalabilità e accessibilità. Edge case: se le due sezioni hanno bg con gradient complessi, il divider con singolo `fillColor` non basta — in tal caso accettare di non usare divider in quella transizione, o usare gradient SVG (out of scope per ora). Test: con due sezioni `bg-bg` e `bg-bg-2` adiacenti, inserire divider con `fillColor="var(--bg-2)"` `direction="top"` — la transizione deve essere seamless senza gap visibile.

---

### Task 25
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-navbar
- **Priority**: high
- **Title**: Componente Navbar (split nav + wordmark centrale + lang switcher + drawer mobile)
- **Desc**: Creare `properhost-next/src/components/Navbar.tsx` come componente client. È l'elemento più visibile del sito, deve essere robusto su tutti i breakpoint. **Layout desktop (≥980px)**: `position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 32px 0;`. Container interno: grid `grid-template-columns: 1fr auto 1fr; align-items: center; gap: 50px;`. Colonna sinistra (`justify-self: end`): nav con 3 link ordinati `Concierge → /concierge`, `About → /about`, `Ville → /ville`. Colonna centrale: wordmark "Properhost" in Cormorant Garamond italic font-size `clamp(40px, 4.6vw, 58px)` color white, sotto sottotitolo "VILLAS · CONCIERGE · SERVICES" in Inter 9.5px letter-spacing 0.46em uppercase color rgba(255,255,255,.78) margin-top 14px. Tutto è un unico `<Link href="/">` cliccabile. Colonna destra (`justify-self: start`): nav con 3 link `Servizi → /concierge#services`, `Contatti → /contatti`, `Book → /prenotazione` (l'ultimo con classe `nav-book` e una linea decorativa `::before` di 14px gold a sinistra del link, padding-left 24px). Dopo i link a destra, lo switcher lingua: due piccoli link "IT" / "EN" separati da `/`, uppercase Inter 12px letter-spacing 0.32em, link attivo color `var(--accent-soft)`, inattivo color rgba(255,255,255,.6). **Stato scrolled** (oltre 80px di scroll): la navbar diventa `position: fixed`, sfondo `rgba(246,241,232,.96)` con `backdrop-filter: blur(16px)`, padding ridotto a 18px. Tutti i link e il wordmark passano da `color: white` a `color: var(--text)`, gli hover passano a `var(--accent-deep)`. Animare la transizione (180ms ease). **Layout mobile (<980px)**: collassare a `grid-template-columns: auto auto`. A sinistra wordmark compatto (Cormorant 22px). A destra solo hamburger 42px. Quando hamburger cliccato, apre drawer fullscreen che entra da destra: `position: fixed; inset: 0 0 0 auto; width: 100%; max-width: 380px; background: var(--bg);`, `transform: translateX(100%)` di default, `transform: translateX(0)` con classe `.open`, transition 0.5s `var(--ease)`. Drawer contiene tutti i link (Concierge, About, Ville, Servizi, Contatti, Book) verticalmente in Cormorant 18px color `var(--text)`, ognuno con `border-bottom: 1px solid var(--line)`. In fondo al drawer, switcher lingua. **Switcher lingua**: usa `usePathname()` di `next/navigation` per ottenere il path corrente, costruisce il path verso l'altra locale sostituendo il segmento `[locale]` (es. `/ville` → `/en/ville`). **A11y**: `<nav role="navigation" aria-label="Main">`, `<button aria-label="Apri menu" aria-expanded={isOpen} aria-controls="mobile-drawer">` su hamburger, `aria-current="page"` sul link attivo (usare `usePathname` per match), focus visibile (`outline: 2px dotted var(--accent); outline-offset: 4px`). Tastierabile: tab per navigare, Enter per attivare, Esc per chiudere drawer.
- **Scope**: solo Navbar component + drawer mobile + switcher lingua. NON include il modal "Richiedi disponibilità" (è un componente separato, eventualmente Task fuori migration plan).
- **Files**: nuovo: `properhost-next/src/components/Navbar.tsx`. Modifiche: `properhost-next/src/messages/it.json` e `en.json` per le label nav (se non già aggiunte in Task 20).
- **Dependencies**: Task 17, Task 20 (i18n per label e switcher), Task 19 (logo se serve).
- **Notes**: I link interni usano `<Link>` di `next/link`. Lo switcher lingua usa `useRouter` + `usePathname` di `next/navigation`. NON usare `next/router` (App Router). Cleanup listener scroll al dismount obbligatorio. Test su tutti i breakpoint: 375px (mobile), 768px (tablet, drawer ancora attivo), 980px (transizione a desktop), 1440px (desktop pieno). Test scrolled state: scrollare oltre 80px deve attivare il bg blur senza salti visivi. Test focus trap nel drawer mobile: quando è aperto, Tab non deve uscire dal drawer (implementare focus trap o accettare comportamento standard, decisione del coder con commento).

---

### Task 26
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-footer
- **Priority**: medium
- **Title**: Componente Footer (4-col grid con brand, contatti, naviga, social)
- **Desc**: Creare `properhost-next/src/components/Footer.tsx`. **Layout**: `<footer>` semantico, `background: var(--primary-soft)` (#022823), `color: white`, padding `110px 0 44px`. Linea divisoria oro al top: `::before` con `position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(184,153,104,.45) 50%, transparent)`. Container interno max-w 1320px, padding-x 48px. **Grid**: desktop `grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 80px; margin-bottom: 70px`. Mobile: `grid-template-columns: 1fr; gap: 48px`. **Colonna 1 (brand)**: wordmark "Properhost" Cormorant italic 34px color white + sottotitolo "HOSPITALITY" Inter 11px letter-spacing 0.42em color rgba(255,255,255,.78) margin-top 8px. Sotto, paragrafo lead Inter 15px color rgba(255,255,255,.72) line-height 1.85 max-w 34ch: testo "Ospitalità siciliana di charme, ville selezionate e servizi tailor-made per soggiorni autentici sull'isola." Sotto, riga "Palermo · Sicilia · Italia" Inter 13px color rgba(255,255,255,.55). **Colonna 2 (contatti)**: titolo h5 "Contatti" Inter 11px font-weight 600 uppercase letter-spacing 0.32em color `var(--accent-soft)` margin-bottom 28px. Sotto, lista verticale di link: `<a href="tel:+393392923744">+39 339 2923 744</a>`, `<a href="tel:+393925108539">+39 392 5108 539</a>`, `<a href="mailto:properhost.company@gmail.com">properhost.company@gmail.com</a>`, `<a href="https://www.properhost.it" target="_blank" rel="noopener">www.properhost.it</a>`. Tutti Inter 14.5px line-height 2.1 color rgba(255,255,255,.72) hover `var(--accent-soft)`. **Colonna 3 (naviga)**: titolo h5 "Naviga" stesso stile. Lista link a tutte le pagine: Home, About, Concierge & Servizi, Ville, Richiedi disponibilità. Link a `next/link` href corrispondenti. **Colonna 4 (social)**: titolo h5 "Seguici". Sotto, riga di icone SVG inline (Instagram, Facebook), 24×24px color white, hover `var(--accent-soft)`. Handle social: usare `#` come placeholder con commento `// TODO: handle social ProperHost da definire con cliente`. **Strip in basso**: separatore `border-top: 1px solid rgba(255,255,255,.12); padding-top: 34px`. Riga flex space-between: a sinistra `© 2026 Properhost — Tutti i diritti riservati` Inter 11px letter-spacing 0.28em uppercase color rgba(255,255,255,.55), a destra mini switcher lingua "IT / EN" stesso stile (duplicato di quello in Navbar). Mobile: strip diventa column con gap 14px.
- **Scope**: solo Footer component. Niente form newsletter (non richiesto). Niente menu servizi separato (i servizi sono parte di Concierge nella nav).
- **Files**: nuovo: `properhost-next/src/components/Footer.tsx`. Modifiche: `messages/*.json` per le label footer e i titoli colonna.
- **Dependencies**: Task 17, Task 20.
- **Notes**: Le icone social vanno in SVG inline (no librerie esterne come react-icons o lucide). NON inventare URL social: usare `#` come placeholder, lasciare TODO commentato. NON aggiungere copy non presente nel sito attuale (no newsletter, no link extra). Verificare che i link tel: e mailto: aprano correttamente l'app di default. Test: a 375px tutto deve impilarsi pulito, link tap-friendly (almeno 44×44px area cliccabile).

---

### Task 27
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-root-layout
- **Priority**: high
- **Title**: Root Layout con Lenis provider + Preloader + Cursor + Navbar + Footer
- **Desc**: Completare `properhost-next/src/app/[locale]/layout.tsx` integrando tutti i componenti primitivi creati nelle Task 22-26. **Struttura del JSX**:

  ```tsx
  <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
    <body>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Preloader />
        <CustomCursor />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </NextIntlClientProvider>
    </body>
  </html>
  ```

  **`<LenisProvider>` componente client**: nuovo file `properhost-next/src/components/LenisProvider.tsx`. Usa la factory di Task 18: al mount crea istanza Lenis, avvia raf loop, registra cleanup al dismount. Detecta `prefers-reduced-motion`: se attivo, NON inizializza Lenis (lascia scroll nativo). Espone children inalterati. **Wiring font**: in alto al file, `import { Cormorant_Garamond, Inter } from 'next/font/google'` con la config decisa in Task 17 (variabili CSS). Applica le className al `<html>`. **Metadata**: aggiungere `export const metadata: Metadata = { title: { default: 'Properhost · Hospitality', template: '%s · Properhost' }, description: t('meta.description'), icons: { icon: '/favicon.ico' }, openGraph: { ... }, twitter: { ... } }` (placeholder OG/Twitter, popolare in Task 47). Per i18n nei metadata: usare `getTranslations` di next-intl da `next-intl/server`. **`generateStaticParams`**: esportare funzione che ritorna `[{ locale: 'it' }, { locale: 'en' }]` per static generation di entrambe le locali. **Test**: avviare `pnpm dev`, visitare `/` e `/en/`. Deve apparire (a) Preloader brevemente, (b) Navbar fissa in alto, (c) main vuoto al momento, (d) Footer in fondo. CustomCursor visibile su desktop. Lenis attivo: scroll fluido. Console deve essere pulita, niente warning hydration.
- **Scope**: solo wiring del root layout e composizione dei componenti già creati. Nessuna pagina concreta (è in Task 35).
- **Files**: modifiche: `properhost-next/src/app/[locale]/layout.tsx`. Nuovi: `properhost-next/src/components/LenisProvider.tsx`.
- **Dependencies**: Task 17, Task 18, Task 20, Task 22, Task 23, Task 25, Task 26.
- **Notes**: Verificare che Lenis non interferisca con Swiper (Swiper gestisce il proprio touch nativo nel componente VilleSlider/ServiziSlider, e Lenis deve lasciar passare i touch dentro lo slider). Cleanup obbligatorio di Lenis al dismount. `prefers-reduced-motion` deve disabilitare Lenis E i plugin GSAP attivi. Test critico: navigare tra pagine `/about` → `/ville` (quando esisteranno) — Lenis deve essere persistente (non reinizializzarsi e perdere stato di scroll), oppure reinizializzarsi pulito (decisione: se persistente complica, accettare reinit pulito). Verificare console: NIENTE warning React, NIENTE warning hydration mismatch (causa comune: codice che usa `window` durante SSR — proteggere tutto con `typeof window !== 'undefined'` o `useEffect`).

---

## Task Queue · Migration Phase 2 — Sezioni Home

---

### Task 28
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-hero
- **Priority**: high
- **Title**: Sezione Hero (video bg full-screen + paragrafo bottom-right + CTA tondo "Scopri")
- **Desc**: Creare `properhost-next/src/components/sections/Hero.tsx`. **Layout**: `min-h-screen relative overflow-hidden bg-black`. **Video di sfondo**: `<video autoPlay muted loop playsInline preload="metadata" poster="/assets/hero-home.jpg" className="absolute inset-0 w-full h-full object-cover z-0">` con sources `<source src="/assets/hero.webm" type="video/webm" />` e `<source src="/assets/hero.mp4" type="video/mp4" />`. **Overlay**: `<div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(0,0,0,.32) 50%, rgba(0,0,0,.55) 100%)' }} />`. **Contenuto in basso a destra**: container assoluto `position: absolute; bottom: 70px; right: max(40px, calc((100vw - var(--max))/2 + 28px)); z-index: 3`. Dentro, layout flex column align-end gap 36px: (a) paragrafo Cormorant Garamond regular font-size 21px line-height 1.55 color rgba(255,255,255,.95) text-align right max-w 480px — copy da `messages.hero.subtitle`: "Ville private, dimore selezionate e servizi tailor-made per chi desidera un soggiorno autentico, raffinato e senza pensieri sulla costa siciliana. Ogni dettaglio coordinato per trasformare il viaggio in un'esperienza su misura." (b) bottone "Scopri" pill bianco: `<Link href="#villas">` min-width 180px padding 22px 44px border-radius 999px background white color `var(--primary)` font-family Inter font-size 12px font-weight 600 letter-spacing 0.36em uppercase box-shadow `0 14px 40px rgba(0,0,0,.18)`. Hover: bg `var(--accent)` color white translateY(-3px) box-shadow `0 20px 50px rgba(0,0,0,.24)`. **Scroll indicator** (decorativo): `position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); width: 1px; height: 70px; background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,.55) 100%); z-index: 2`. **Animazione di ingresso** (al mount, GSAP timeline su `useGSAP` o `useEffect`): paragrafo entra con `opacity: 0; y: 30` → `opacity: 1; y: 0` duration 1.0 ease power3.out; bottone con stagger 0.2s; scroll indicator fade in dopo 1.5s. Bounce verticale infinito sullo scroll indicator dopo l'ingresso. **Mobile (<760px)**: container bottom-right diventa bottom-left con padding 24px. Bottone full-width o min-width ridotta a 150px. Video resta full-screen. Paragrafo font 17px max-w 100%.
- **Scope**: solo Hero section. NON includere SplitText reveal del titolo (questa hero non ha h1 grande visibile, solo paragrafo e CTA — il SplitText sarà su h2 in Mission, Task 42). NON includere autoplay del video con audio.
- **Files**: nuovo: `properhost-next/src/components/sections/Hero.tsx`. Modifiche: `messages/*.json` con namespace `hero` (subtitle, discoverLabel).
- **Dependencies**: Task 17, Task 19 (asset video), Task 20.
- **Notes**: Video deve avere `playsInline` per iOS (autoplay funziona solo se muted+playsInline). Su connessioni lente fallback automatico al poster image (`hero-home.jpg`). NON usare `<Image>` Next per il video (è tag `<video>` nativo). Test: su mobile (in particolare iOS Safari) verificare che il video parta in autoplay; se no, accettare il poster come fallback (NON forzare autoplay con audio o intervento utente). Test connessione lenta (Throttling 3G in DevTools): la pagina deve mostrare il poster mentre il video carica. Verificare CLS: il video con `aspect-ratio` o dimensioni esplicite (alternativa: `object-cover` su container `min-h-screen` lo rende safe).

---

### Task 29
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-mission
- **Priority**: high
- **Title**: Sezione Mission/Intro (editorial 3-col: titolone + 2 colonne testo + CTA pillola)
- **Desc**: Creare `properhost-next/src/components/sections/Mission.tsx`. **Layout**: `<section className="bg-bg-2 py-40 md:py-48 lg:py-52">`. Container interno max-w 1320px padding-x 48px. **Grid**: desktop `grid-template-columns: 1.25fr 1fr 1fr; gap: 80px; align-items: start`. Mobile (<1100px): collassa a 2 colonne `1fr 1fr` con la prima a `grid-column: 1 / -1`. Mobile <760px: 1 colonna unica. **Colonna 1 (sinistra, headline + CTA)**: `<div className="flex flex-col items-start gap-12">`. Dentro: (a) section-tag "Benvenuti" — span Inter font-size 11px font-weight 500 uppercase letter-spacing 0.36em color `var(--accent-deep)` con dash decorativo `::before` di 28px x 1px gold a sinistra. Markup suggerito: `<span className="section-tag">Benvenuti</span>` con CSS gestito globalmente o via Tailwind. (b) titolo h2 Cormorant Garamond font-weight 400 font-size `clamp(40px, 4.6vw, 64px)` line-height 1.04 letter-spacing -0.012em color `var(--primary)` "Ospitalità siciliana, **eleganza** contemporanea" con `<em>eleganza</em>` italic font-weight 500 color `var(--accent-deep)`. Markup: `<h2 className="font-display ...">Ospitalità siciliana, <em>eleganza</em> contemporanea</h2>`. (c) CTA pill: `<Link href="/ville" className="btn-pill">Scopri le ville</Link>` con stile Inter 11px uppercase letter-spacing 0.34em padding 20px 44px border-radius 999px bg `var(--primary)` color white border 1px solid `var(--primary)`. Hover: bg `var(--accent)` border `var(--accent)` translateY(-2px) box-shadow `0 14px 36px rgba(11,107,94,.22)`. **Colonna 2 (testo descrittivo)**: padding-top 14px (allinea con la prima riga del titolo). Paragrafo Inter font-size 15px font-weight 400 line-height 1.95 color `var(--text-2)`. Copy da `messages.mission.col1`: "Dimore selezionate con identità architettonica chiara, immerse in contesti naturali iconici dell'isola. Ogni villa è scelta per posizione, dettaglio e atmosfera: il luogo conta tanto quanto il servizio." **Colonna 3**: stessa struttura. Copy da `messages.mission.col2`: "Assistenza dedicata prima, durante e dopo il soggiorno, costruita su una rete di partner locali scelti per affidabilità e stile. Ogni dettaglio coordinato senza appesantire la tua esperienza." **Animazioni**: aggiungere `data-reveal` o classe `reveal` sui 3 blocchi figli del grid. Saranno animati con stagger in Task 43 (ScrollTrigger). Per ora, fade-in CSS base 800ms con opacity 0→1 al primo render. **Mobile**: spaziatura ridotta a `py-24`, gap grid 32px.
- **Scope**: solo Mission section.
- **Files**: nuovo: `properhost-next/src/components/sections/Mission.tsx`. Modifiche: `messages/*.json` namespace `mission`.
- **Dependencies**: Task 17, Task 20.
- **Notes**: NON inserire foto in questa sezione (è puro editoriale, lo standard luxury). NON usare orange (palette altrui) — il CTA è sempre teal/oro. NON inventare copy: i due paragrafi sopra sono ProperHost (rielaborati dal copy esistente in `index.html` `intro` section). NON usare claim altrui ("Ville d'incanto" è di un competitor — lasciarlo fuori). Verificare allineamento delle colonne: la prima riga del paragrafo col2 e col3 deve combaciare visivamente con il titolo della col1 (regolare padding-top se necessario). Test responsive: su 1024px deve restare su 3 col, su 980px collassa a 2, su 760px a 1.

---

### Task 30
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-villa-slider
- **Priority**: high
- **Title**: Sezione VilleSlider full-bleed (Swiper fade, 6 ville, frecce, CTA)
- **Desc**: Creare `properhost-next/src/components/sections/VilleSlider.tsx` come componente client. **Layout**: full-bleed `width: 100vw; height: 100vh; min-height: 600px; position: relative; overflow: hidden; background: #0a0a0a`. **Dati villa**: definirli in un array `src/data/villas.ts` tipato:

  ```ts
  export type Villa = { slug: string; name: string; location: string; image: string; alt: string }
  export const VILLAS: Villa[] = [
    { slug: 'aurea',       name: 'Villa Aurea',       location: 'Taormina', image: '/assets/villa-1.jpg', alt: 'Villa Aurea — Taormina' },
    { slug: 'zagara',      name: 'Villa Zagara',      location: 'Noto',     image: '/assets/villa-2.jpg', alt: 'Villa Zagara — Noto' },
    { slug: 'bianca',      name: 'Villa Bianca',      location: 'Siracusa', image: '/assets/villa-3.jpg', alt: 'Villa Bianca — Siracusa' },
    { slug: 'soho',        name: 'Villa Soho',        location: 'Ragusa',   image: '/assets/villa-4.jpg', alt: 'Villa Soho — Ragusa' },
    { slug: 'manu',        name: 'Villa Manu',        location: 'Modica',   image: '/assets/villa-5.jpg', alt: 'Villa Manu — Modica' },
    { slug: 'dolce-vita',  name: 'Villa Dolce Vita',  location: 'Scicli',   image: '/assets/villa-6.jpg', alt: 'Villa Dolce Vita — Scicli' },
  ]
  ```

  Importarlo nel componente. **Swiper config**: `import { Swiper, SwiperSlide } from 'swiper/react'`, modules da `@/lib/swiper`: Autoplay, EffectFade, Keyboard, A11y. Config: `effect="fade"`, `loop={true}`, `autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}`, `keyboard={{ enabled: true }}`, `a11y={{ enabled: true, prevSlideMessage: 'Villa precedente', nextSlideMessage: 'Villa successiva' }}`. **Slide markup**: per ogni villa, `<SwiperSlide><Image src={villa.image} alt={villa.alt} fill priority={idx===0} sizes="100vw" className="object-cover" /></SwiperSlide>`. Ken Burns effect (zoom-out 1.05→1 in 8s) sull'immagine attiva: applicare classe `.is-active img { animation: ken-burns 8s linear forwards }` con keyframes `from { transform: scale(1.05) } to { transform: scale(1) }`. **Overlay**: `<div className="absolute inset-0 z-2 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,.10) 40%, rgba(0,0,0,.45) 100%)' }} />`. **Titolo centrato**: `<h2 ref={titleRef}>` Cormorant italic font-weight 400 font-size `clamp(56px, 8vw, 120px)` color white text-align center text-shadow `0 4px 30px rgba(0,0,0,.35)`. Posizione assoluta `position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 3; pointer-events: none`. Inizialmente mostra il nome del primo villa. Al cambio slide, fade-out (`opacity: 0; transform: translateY(10px)` 350ms) → cambia testo → fade-in. Hook: `swiper.on('slideChangeTransitionStart', ...)`. **Frecce di navigazione**: due `<button>` con SVG arrow custom (stile minimal, freccia di 40×14 viewBox `0 0 40 14` con linee sottili 1px). Posizione absolute top 50% transform translateY(-50%), left/right `max(40px, calc((100vw - var(--max))/2))`. Click → `swiperRef.current?.slidePrev()` / `slideNext()`. **CTA "Esplora"**: pillola bianca outline al center bottom, link a `/ville` (catalogo). `position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%)`. Padding 18px 42px border 1px solid rgba(255,255,255,.85) border-radius 999px color white Inter 11px uppercase letter-spacing 0.34em. Hover: bg white color `var(--primary)`. **Touch swipe**: nativo in Swiper. **Keyboard**: ArrowLeft/ArrowRight già gestiti da Swiper config. **Cleanup**: `useEffect` return distrugge l'istanza Swiper.
- **Scope**: solo VilleSlider section. Le pagine villa singola sono separate (Task 39). NON pre-popolare ulteriori interaction (modali, hover state complesse) — solo navigazione + autoplay.
- **Files**: nuovo: `properhost-next/src/components/sections/VilleSlider.tsx`, `properhost-next/src/data/villas.ts`. Modifiche: `messages/*.json` namespace `villas` per le label statiche (eyebrow, exploreLabel, ariaLabels).
- **Dependencies**: Task 17, Task 18 (Swiper wrapper), Task 19 (asset villa), Task 20.
- **Notes**: Usare `<Image>` Next con `priority` per la prima slide (LCP) e `loading="lazy"` per le altre. `fill` + `sizes="100vw"` + parent con `position: relative` `width:100% height:100%`. Cleanup Swiper al dismount via `useEffect` return — altrimenti memory leak su navigazioni interne. NON hardcodare i nomi villa nel componente: leggerli da `VILLAS` array. NON usare arrow button delle classi default Swiper — i nostri sono custom. Test: autoplay funziona, mouseenter pausa, mouseleave riprende, click sulle frecce funziona, keyboard ←/→ funziona, swipe su touch device funziona. Performance: il Ken Burns con animation CSS deve essere applicato solo all'attiva (con classe `.is-active`) per non animare 6 immagini in parallelo.

---

### Task 31
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-concierge-panel
- **Priority**: medium
- **Title**: Sezione ConciergePanel (panel teal editoriale + bg image fixed parallax)
- **Desc**: Creare `properhost-next/src/components/sections/ConciergePanel.tsx`. **Struttura a due strati verticali**: (1) **Pannello teal con contenuto editoriale**: `<div className="bg-primary text-white py-24 md:py-32">`. Container max-w 1320px. Grid `grid-template-columns: 1.25fr 1fr 1fr; gap: 80px; align-items: start`. **Colonna 1 (sinistra)**: section-tag "Private concierge" Inter 11px uppercase letter-spacing 0.36em color `var(--accent-soft)` con dash gold prima. Titolo h2 Cormorant font-weight 400 font-size `clamp(40px, 4.6vw, 64px)` line-height 1.04 color white "Ogni soggiorno, **un itinerario** su misura" con `<em>un itinerario</em>` italic font-weight 500 color `var(--accent-soft)`. Sotto, CTA pill outline bianco: `<Link href="/concierge">` min-width 200px padding 20px 44px border-radius 999px background transparent color white border 1px solid rgba(255,255,255,.85) "Scopri il concierge". Hover: bg white color `var(--primary)` border-color white. **Colonna 2**: paragrafo Inter 15px line-height 1.95 color rgba(255,255,255,.85) — copy: "Dalla prenotazione del transfer all'organizzazione di una cena privata con chef, ogni dettaglio viene coordinato per offrirti un'esperienza fluida, personale e memorabile per tutto il soggiorno in villa." **Colonna 3**: paragrafo simile — copy: "Chef privati, transfer premium, wellness in struttura, escursioni in yacht e accesso a esperienze riservate: un unico referente costruisce intorno a te l'itinerario, senza appesantire la tua permanenza." (2) **Background image fixed (parallax)**: subito sotto il pannello, `<div className="concierge-fixed-bg" role="img" aria-label="Servizio concierge in villa">` con CSS: `height: 70vh; background-image: url('/assets/concierge.jpg'); background-attachment: fixed; background-size: cover; background-position: center; position: relative`. Overlay leggero `::before` con `background: linear-gradient(180deg, rgba(2,40,35,.10) 0%, rgba(2,40,35,.20) 100%)`. **Mobile (<760px)**: disabilitare `background-attachment: fixed` (causa jank pesante su iOS Safari) → `background-attachment: scroll`. Ridurre height a 50vh. Pannello: collassa a 1 colonna gap 32px. **NO foto sopra il pannello**, solo sotto.
- **Scope**: solo ConciergePanel section. NON ricreare la features grid (chef privato, transfer, wellness, sea experience) della vecchia versione — quella sezione vive nella pagina `/concierge` dedicata (Task 37).
- **Files**: nuovo: `properhost-next/src/components/sections/ConciergePanel.tsx`. Modifiche: `messages/*.json` namespace `conciergePanel`.
- **Dependencies**: Task 17, Task 19 (asset concierge.jpg), Task 20.
- **Notes**: Il copy nei tre blocchi è ProperHost — NON sostituirlo con copy altrui (es. "Concierge smart per ogni esigenza" è di un competitor — non usarlo). Il colore del pannello è teal `var(--primary)`, NON blu polvere altrui (`#7f98b2`). Test parallax desktop: scrollare la pagina, l'immagine fissa deve restare ferma mentre il contenuto scorre. Test mobile: iOS Safari deve mostrare l'immagine in scroll normale, non con jank. Verificare contrasto AA: testo bianco su `var(--primary)` (#0b6b5e) ha contrasto sufficiente, ma testare con strumento.

---

### Task 32
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-servizi-slider
- **Priority**: medium
- **Title**: Sezione ServiziSlider (Swiper free-mode 6 servizi)
- **Desc**: Creare `properhost-next/src/components/sections/ServiziSlider.tsx` componente client. **Layout**: `<section className="bg-bg-3 py-32 md:py-40">`. Container max-w 1320px. **Header centrato**: section-tag "I nostri servizi" Inter uppercase letter-spacing 0.36em color `var(--accent-deep)` con dash gold prima. Titolo h2 Cormorant font-weight 300 font-size `clamp(32px, 4.6vw, 58px)` line-height 1.05 color `var(--primary)` "Tutto quello che serve per **godersi** la Sicilia" con `<em>godersi</em>` italic color `var(--accent-deep)`. Paragrafo Inter 17px line-height 1.85 color `var(--text-2)` max-w 680px margin-x auto: "Dal transfer al chef privato, dai noleggi alle escursioni nelle isole Egadi: un'offerta essenziale pensata per viaggiare senza pensieri." **Frecce di navigazione custom**: posizionate ai lati del titolo (non sopra/sotto lo slider). SVG geometrico (riferimento poligonale: triangolo + linea, viewBox `0 0 100 46.5` con `<polygon points="41.9 8 40.5 6.6 24.3 22.8 40.5 39 41.9 37.6 28.1 23.8 75.7 23.8 75.7 21.8 28.1 21.8 41.9 8" fill="var(--primary)" />` per la freccia sinistra; mirror per destra). Size 60-80px desktop, 40px mobile. Click → controllano lo Swiper. **Dati servizi**: array tipato in `src/data/services.ts`:

  ```ts
  export type Service = { id: string; number: string; title: string; description: string }
  export const SERVICES: Service[] = [
    { id: 'navetta',  number: '01', title: 'Servizio Navetta', description: 'Trasferimenti su richiesta da e per porto e aeroporto: comodo, veloce e sempre puntuale. Arrivi e riparti senza pensare a nulla.' },
    { id: 'mezzi',    number: '02', title: 'Noleggio Mezzi',  description: 'Auto, scooter e biciclette per muoverti in totale libertà. Scegli il mezzo giusto per il tuo stile di viaggio.' },
    { id: 'gommoni', number: '03', title: 'Noleggio Gommoni', description: 'Un gommone tutto per te per esplorare calette nascoste e vivere il mare in totale autonomia. Esperienza esclusiva su prenotazione.' },
    { id: 'chef',     number: '04', title: 'Chef Privato',     description: 'La vera cucina siciliana direttamente nel tuo alloggio: piatti tipici personalizzati, ingredienti freschi e locali.' },
    { id: 'favignana', number: '05', title: 'Tour Favignana', description: 'Scopri la perla delle Egadi: Cala Rossa, Cala Azzurra e un mare cristallino. Un\'esperienza indimenticabile.' },
    { id: 'levanzo',  number: '06', title: 'Tour Levanzo',    description: 'Relax e natura autentica tra acque limpide, piccoli borghi e un\'atmosfera unica tutta da scoprire.' },
  ]
  ```

  **Swiper config**: modules FreeMode, Navigation, A11y. `slidesPerView={3}` desktop, `1.5` tablet, `1.2` mobile. `freeMode={{ enabled: true, momentum: true }}`. `spaceBetween={30}`. `centeredSlides={false}`. Cursore custom su hover dello slider: `data-cursor="drag"` per attivare lo stato cursore custom (cerchio gold con freccia ↔). **Card di ogni slide**: `<article className="service-card bg-bg-warm border border-line p-10 transition-all duration-500">`. Padding 42px 32px. Numero "01" Cormorant italic font-size 18px color `var(--accent-deep)` con dash gold prefix (30px x 1px). Titolo h4 Cormorant 24px font-weight 400 line-height 1.25 color `var(--text)` margin 0 0 14px 42px. Paragrafo Inter 15px line-height 1.75 color `var(--text-2)` margin-left 42px. Hover card: border-color `var(--accent)` background white transform translateY(-6px) box-shadow `var(--shadow-sm)`.
- **Scope**: solo ServiziSlider section. Niente CTA "Richiedi" su ogni card per ora (semplificare; può essere aggiunta successivamente come task UI).
- **Files**: nuovo: `properhost-next/src/components/sections/ServiziSlider.tsx`, `properhost-next/src/data/services.ts`. Modifiche: `messages/*.json` namespace `services` con array di traduzioni per ogni id servizio.
- **Dependencies**: Task 17, Task 18, Task 20.
- **Notes**: Copy servizi è ProperHost (vedi `index.html` linee 167-198 del file statico). NON aggiungere servizi non presenti. Lo stile delle frecce è geometrico/poligonale come da viewBox dato — è uno stile minimal e neutro che molti brand luxury usano, non distintivo di un brand specifico. Test: drag dello slider funziona, frecce funzionano, su mobile slidesPerView 1.2 mostra la "peek" del prossimo card. Cleanup Swiper al dismount.

---

### Task 33
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-cta-prenota
- **Priority**: medium
- **Title**: Sezione CtaPrenota (parallax bg + claim grande + double button)
- **Desc**: Creare `properhost-next/src/components/sections/CtaPrenota.tsx`. **Layout**: full-bleed `<section className="cta py-40 md:py-56 relative text-center text-white overflow-hidden">`. **Background**: bg-image `url('/assets/cta.jpg')` con `background-size: cover; background-position: center; background-attachment: fixed` (parallax sussurrato). **Overlay**: gradient `linear-gradient(180deg, rgba(11,107,94,.78) 0%, rgba(2,40,35,.92) 100%)` come `::before` absolute inset-0 z-1 (toni teal ProperHost, NON `rgba(73,111,145,.40)` altrui). **Container**: max-w 700px relative z-2 padding-x 48px. **Contenuto centrato**: section-tag "Contattaci" Inter 11px uppercase letter-spacing 0.36em color `var(--accent-soft)` con dash gold prima. Titolo h2 Cormorant font-weight 300 font-size `clamp(36px, 5vw, 64px)` line-height 1.05 color white margin-x auto max-w 20ch "Progettiamo insieme il tuo soggiorno in **Sicilia**" con `<em>Sicilia</em>` italic font-weight 400 color `var(--accent-soft)`. Paragrafo Inter 18px line-height 1.85 color rgba(255,255,255,.88) max-w 580px margin-x auto: "Scrivici: ti risponderemo con una proposta personalizzata, disponibilità e servizi dedicati." **Doppio CTA**: container flex gap 14px justify-center flex-wrap. (a) Button primario teal: `<Link href="/contatti" className="btn btn-primary">Vai al form contatti</Link>` — bg `var(--primary)` color white border 1px solid `var(--primary)` Inter 11px uppercase letter-spacing 0.28em padding 18px 36px. Hover: bg `var(--accent)` border-color `var(--accent)` translateY(-2px). (b) Button ghost outline bianco: `<a href="tel:+393392923744" className="btn btn-ghost">+39 339 2923 744</a>` — bg transparent color white border 1px solid rgba(255,255,255,.7). Hover: border-color `var(--accent)`. **Animazione**: titolo h2 con `data-reveal` per SplitText (Task 42). **Mobile (<760px)**: padding ridotto a `py-24`, disabilitare `background-attachment: fixed` (passa a `scroll`), titolo font 32-44px, paragrafo 16px. CTA stack verticalmente.
- **Scope**: solo CtaPrenota section.
- **Files**: nuovo: `properhost-next/src/components/sections/CtaPrenota.tsx`. Modifiche: `messages/*.json` namespace `cta`.
- **Dependencies**: Task 17, Task 19 (cta.jpg), Task 20.
- **Notes**: NON usare claim altrui ("La tua fuga da sogno comincia qui" è di un competitor — non usarlo). NON usare bottone terracotta (`#D36B3D` è palette altrui) — solo teal/oro ProperHost. Il copy del paragrafo è ProperHost da `index.html`. Test: parallax funziona su desktop scrollando, mobile usa scroll normale (verificare iOS). Il titolo deve respirare nel layout mobile (max-w 20ch lo aiuta).

---

### Task 34
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-faq
- **Priority**: medium
- **Title**: Sezione FAQ accordion (6 domande, una aperta alla volta)
- **Desc**: Creare `properhost-next/src/components/sections/Faq.tsx` componente client (per gestire stato aperto). **Layout**: `<section className="bg-primary-dark py-32 text-white">`. Container max-w 920px padding-x 48px. **Header centrato**: titolo h2 Cormorant font-weight 300 font-size `clamp(40px, 5vw, 64px)` line-height 1.05 color white margin-bottom 16px text-align center "Domande frequenti". Paragrafo Inter 16px line-height 1.85 color rgba(255,255,255,.85) max-w 580px margin-x auto text-align center: "Le risposte alle richieste più comuni. Per tutto il resto, scrivici o chiamaci direttamente." **Lista accordion**: `<ul className="faq-list mt-16">`. **Stato React**: `const [openIndex, setOpenIndex] = useState<number | null>(null)`. Click su una domanda imposta openIndex (toggle: se uguale all'indice, mette null). **Item markup**: per ogni voce `<li className="faq-item">` con: (a) `<button>` full-width text-left flex justify-between items-center padding 24px 0 border-bottom `1px solid rgba(255,255,255,.12)`. Contenuto: span domanda Inter 16px font-weight 500 color white. Sulla destra icona +/− gold (Inter font 24px color `var(--accent-soft)`, ruota 45° quando aperta). aria-expanded, aria-controls. (b) `<div className="faq-answer">` con `max-height: 0; overflow: hidden; transition: max-height 400ms ease-out`. Quando aperta: max-height `<scrollHeight>px` calcolato via JS o `max-height: 1000px` se semplificato. Padding-bottom 24px. Risposta Inter 15px line-height 1.7 color rgba(255,255,255,.78). **Dati FAQ**: array tipato in `src/data/faqs.ts`:

  ```ts
  export type Faq = { q: string; a: string }
  export const FAQS_IT: Faq[] = [
    { q: 'Come prenoto una villa Properhost?', a: 'La prenotazione passa sempre da una richiesta di disponibilità tramite il modulo contatti o WhatsApp/telefono. Riceverai una proposta personalizzata con date, prezzo, eventuali servizi inclusi ed extra. La conferma definitiva avviene dopo il versamento dell\'acconto.' },
    { q: 'Cosa include il servizio concierge?', a: 'Il concierge coordina tutto ciò che riguarda l\'esperienza in villa: check-in dedicato, transfer da/per aeroporto e porto, chef privato, escursioni in mare, prenotazioni ristoranti, wellness in struttura, organizzazione di occasioni speciali. Alcuni servizi sono inclusi, altri si attivano su richiesta con preventivo dedicato.' },
    { q: 'Quali metodi di pagamento accettate?', a: 'Bonifico bancario per acconto e saldo. Per richieste specifiche di pagamento con carta o frazionato, contattaci direttamente — valutiamo soluzioni caso per caso.' },
    { q: 'Quali sono le politiche di cancellazione e modifica del soggiorno?', a: 'Le condizioni variano in base alla villa e al periodo. In generale: cancellazione con rimborso parziale fino a 60 giorni prima del check-in, dopo il termine il rimborso è discrezionale. Le modifiche di date si valutano in base alla disponibilità della struttura. Tutto è specificato nel contratto di soggiorno.' },
    { q: 'Quali servizi extra posso richiedere durante il soggiorno?', a: 'Tutti i servizi del catalogo concierge — chef privato, transfer, noleggi (auto, scooter, gommone), tour delle Egadi, wellness, esperienze enogastronomiche, occasioni speciali. Le richieste vanno comunicate idealmente in fase di prenotazione, ma valutiamo anche aggiunte last-minute compatibilmente con la disponibilità dei partner.' },
    { q: 'In quali zone della Sicilia operate?', a: 'Le ville della collezione attuale si trovano sulla costa orientale e nel Val di Noto: Taormina, Noto, Siracusa, Ragusa, Modica, Scicli. I servizi concierge coprono l\'intera Sicilia per chi soggiorna nelle nostre dimore.' },
  ]
  ```

  **Animazione apertura**: usare GSAP per `to(answer, { height: 'auto', duration: 0.4, ease: 'power2.out' })` e chiusura `to(answer, { height: 0, duration: 0.3, ease: 'power2.in' })`. Solo una domanda aperta alla volta (chiudere la precedente prima di aprire la nuova). **A11y**: ogni button ha `aria-expanded`, `aria-controls` puntato all'id della risposta, e la risposta ha `role="region" aria-labelledby` puntato all'id del button.
- **Scope**: solo FAQ section. Le risposte vanno scritte ad hoc per ProperHost (non esistono nel sito statico) — vedi i 6 esempi sopra.
- **Files**: nuovo: `properhost-next/src/components/sections/Faq.tsx`, `properhost-next/src/data/faqs.ts`. Modifiche: `messages/*.json` namespace `faq` con array di {q, a}.
- **Dependencies**: Task 17, Task 18 (GSAP), Task 20.
- **Notes**: Le risposte sopra sono BOZZA — il cliente ProperHost dovrebbe revisionarle perché alcune (es. politiche di cancellazione, metodi di pagamento) richiedono dati reali del business. Lasciare commento `// TODO: confermare con cliente le risposte 3 e 4 (pagamento, cancellazione)`. Tono: editoriale, breve, professionale. NON copiare FAQ da altri brand. Il colore di sfondo `var(--primary-dark)` è una scelta luxury per dare contrasto con le sezioni precedenti su `var(--bg-2)`/`var(--bg-3)`.

---

### Task 35
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-home-page
- **Priority**: high
- **Title**: Home page stitching con SectionDividers (composizione finale)
- **Desc**: Creare `properhost-next/src/app/[locale]/page.tsx` come Server Component (default in App Router) — i singoli componenti sezione che ne hanno bisogno sono già marcati `'use client'`. Importare e comporre tutte le sezioni nell'ordine corretto, intervallate da `<SectionDivider />` dove c'è cambio di bg color. **Struttura JSX**:

  ```tsx
  import Hero from '@/components/sections/Hero'
  import Mission from '@/components/sections/Mission'
  import VilleSlider from '@/components/sections/VilleSlider'
  import ConciergePanel from '@/components/sections/ConciergePanel'
  import ServiziSlider from '@/components/sections/ServiziSlider'
  import CtaPrenota from '@/components/sections/CtaPrenota'
  import Faq from '@/components/sections/Faq'
  import SectionDivider from '@/components/SectionDivider'

  export default function HomePage() {
    return (
      <>
        <Hero />
        <SectionDivider direction="top" fillColor="var(--bg-2)" />
        <Mission />
        <VilleSlider />
        <SectionDivider direction="bottom" fillColor="var(--primary)" />
        <ConciergePanel />
        <SectionDivider direction="top" fillColor="var(--bg-3)" />
        <ServiziSlider />
        <CtaPrenota />
        <SectionDivider direction="bottom" fillColor="var(--primary-dark)" />
        <Faq />
      </>
    )
  }
  ```

  **Verifica colore divider**: il `fillColor` di ogni divider DEVE coincidere con il bg della sezione successiva (per `direction="top"`) o precedente (per `direction="bottom"`), per ottenere effetto seamless. Mappa: Hero (nero) → Mission (`bg-2`) richiede divider con fill `bg-2`. Mission (`bg-2`) → VilleSlider (nero) richiede di solito nessun divider (la transizione cromatica drastica è ok in luxury, oppure divider `direction="bottom" fillColor="var(--bg-2)"` per chiudere la mission). VilleSlider (nero) → ConciergePanel (`primary`) richiede divider `direction="bottom" fillColor="black"` o saltare (direzione di design). ConciergePanel (sotto: bg fissa parallax) → ServiziSlider (`bg-3`) richiede divider con fill `bg-3`. ServiziSlider (`bg-3`) → CtaPrenota (parallax con overlay teal scuro): divider opzionale. CtaPrenota → FAQ (`primary-dark`): divider `bottom fillColor="var(--primary-dark)"`. **Posizionamento**: i SectionDivider sono elementi di flusso che vanno tra le sezioni, quindi `<section>` non li deve nidificare. **Metadata**: aggiungere export `metadata` a livello di pagina con title e description specifiche home (override del default in layout). Usare `getTranslations` da `next-intl/server` per i metadata localizzati. **Skeleton/Loading**: opzionale, non richiesto in questo step. **Test**: `pnpm dev`, visitare `/it` e `/en`, verificare ordine sezioni, transizioni fluide, scroll Lenis, niente CLS, niente errori console.
- **Scope**: solo composizione home. Nessuna nuova logica di sezione. Nessuna modifica ai componenti già creati.
- **Files**: nuovo: `properhost-next/src/app/[locale]/page.tsx`. Modifiche: `messages/*.json` per metadata.home se non già presente.
- **Dependencies**: Task 24, 27, 28, 29, 30, 31, 32, 33, 34.
- **Notes**: Verificare che lo scroll Lenis funzioni fluido tra tutte le sezioni. Verificare CLS = 0 (tutte le immagini hanno width/height espliciti via `<Image>` Next con dimensioni o `fill` + parent dimensionato). Lighthouse target 90+ già a questo step (Performance). Test cross-browser: Chrome, Safari, Firefox. Se i divider creano gap di 1px in qualche browser, usare `position: relative; margin-top: -1px` sul divider successivo come hack noto.

---

## Task Queue · Migration Phase 3 — Pagine interne

---

### Task 36
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-page-about
- **Priority**: medium
- **Title**: Pagina /about (mission, valori, territorio)
- **Desc**: Creare `properhost-next/src/app/[locale]/about/page.tsx`. Estrarre il copy esistente da `about.html` del sito statico e tradurlo in struttura componenti. Sezioni: (1) Page hero con bg image `/assets/about-hero.jpg`, eyebrow "About", h1 Cormorant "Un modo più **personale** di vivere la Sicilia", paragrafo descrittivo, side card luxury con sub-claim "Calore mediterraneo, standard internazionali" e descrizione. (2) Sezione "Il progetto" con grid 2-col: testo a sinistra (titolo "Ospitalità di charme, **senza rigidità**", paragrafo, lista 3 punti) e immagine a destra (`/assets/about-panel.jpg`) con cornice oro sfalsata. (3) Sezione "Valori" con titolo "Tre principi che **guidano** ogni soggiorno" e 3 card senza foto: "01 Autenticità", "02 Discrezione", "03 Precisione" con copy esistente. (4) Sezione CTA "Scopri la selezione completa di ville e servizi" con doppio button (Ville + Concierge). Layout responsive coerente con la home. Usare i componenti `<SectionDivider />` tra cambi bg. Metadata: title "About · Properhost", description specifica about. Riutilizzare le classi/utilities già definite (eyebrow, section-tag, btn-pill, card-luxury, ecc.).
- **Scope**: solo pagina /about. Nessun nuovo componente complesso (riusare quelli di home).
- **Files**: nuovo: `properhost-next/src/app/[locale]/about/page.tsx`. Eventuali sub-componenti riutilizzabili in `src/components/sections/AboutHero.tsx`, ecc. Modifiche: `messages/*.json` namespace `about`.
- **Dependencies**: Task 27 (layout), Task 24 (SectionDivider), Task 19 (asset).
- **Notes**: Tutto il copy viene da `about.html` esistente — letterale, NON inventare. Le 3 card valori non hanno immagine, sono pure testuali con numero in metadata gold. Verificare che la pagina si integri visivamente con la home (stesso footer, stessa navbar fixed, stesso scroll).

---

### Task 37
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-page-concierge
- **Priority**: medium
- **Title**: Pagina /concierge (dettaglio servizi, features grid)
- **Desc**: Creare `properhost-next/src/app/[locale]/concierge/page.tsx`. Estrarre copy da `concierge.html` esistente. Sezioni: (1) Page hero con bg `/assets/concierge-hero.jpg`, eyebrow "Concierge", h1 "Servizi pensati **intorno** al tuo soggiorno", side card "Un unico referente per tutto". (2) Sezione "Assistenza dedicata" con grid 2-col: immagine a sinistra (`/assets/concierge.jpg`) con cornice oro, testo a destra (titolo "Organizzazione precisa, **atmosfera** rilassata", paragrafo, lista 4 punti su transfer/chef/boat/wellness). (3) Sezione "Servizi principali" con il ServiziSlider o una griglia 6 servizi (id="services" per ancora interna). (4) Sezione 3 card extra: Wine & Food, Celebrations, Family Care con copy esistente. (5) Sezione CTA con bg `/assets/sea.jpg`. Riutilizzare componenti esistenti. Metadata title/description specifici concierge.
- **Scope**: solo pagina /concierge.
- **Files**: nuovo: `properhost-next/src/app/[locale]/concierge/page.tsx` + eventuali sub-components. Modifiche: `messages/*.json` namespace `conciergePage`.
- **Dependencies**: Task 27, Task 32 (ServiziSlider riusato).
- **Notes**: Copy da `concierge.html`. La pagina deve avere ancora `#services` per il deep-link dalla nav.

---

### Task 38
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-page-ville-list
- **Priority**: high
- **Title**: Pagina /ville (catalogo griglia 6 ville)
- **Desc**: Creare `properhost-next/src/app/[locale]/ville/page.tsx`. Estrarre copy da `ville.html` esistente. Sezioni: (1) Page hero con bg `/assets/ville-hero.jpg`, eyebrow "Le nostre ville", h1 "Dimore selezionate per **location**, privacy e carattere", side card "Dalla costa orientale al Val di Noto". (2) Sezione "Catalogo ville" con grid 3-col (mobile 1, tablet 2): 6 card villa premium con immagine (4:5 aspect ratio), tag location, meta ospiti/camere, nome Cormorant, breve description, CTA "Richiedi info" (link a `/contatti?villa={slug}` o `/ville/{slug}`). Hover: scale immagine 1.07, gradient overlay, translateY -8px. (3) Sezione "Come scegliere" grid 2-col: testo a sinistra (titolo "La villa giusta dipende da **posizione** e stile", lista 3 punti) e immagine a destra (`/assets/about-panel.jpg`). (4) CTA finale con bg `/assets/sea.jpg`: "Hai già in mente una **zona** o una villa?". Usare i dati di `src/data/villas.ts` (Task 30) per popolare le card. Metadata title/description.
- **Scope**: solo pagina catalogo /ville. Le pagine villa singola sono Task 39.
- **Files**: nuovo: `properhost-next/src/app/[locale]/ville/page.tsx`. Eventuale `src/components/VillaCard.tsx` riutilizzabile. Modifiche: `messages/*.json`.
- **Dependencies**: Task 27, Task 30 (data villas).
- **Notes**: Copy da `ville.html`. Le 6 card devono linkare a `/ville/[slug]` (Task 39) anche se quella pagina non esiste ancora — usa `<Link>` con href dinamico, in dev darà 404 finché Task 39 non è fatta.

---

### Task 39
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-page-ville-detail
- **Priority**: high
- **Title**: Dynamic route /ville/[slug] (6 villa detail pages)
- **Desc**: Creare `properhost-next/src/app/[locale]/ville/[slug]/page.tsx` come dynamic segment. Implementare `generateStaticParams` che ritorna i 6 slug: aurea, zagara, bianca, soho, manu, dolce-vita. **Validazione slug**: nel page component, leggere `params.slug`, fare lookup in `VILLAS` array; se non trovato, chiamare `notFound()` da `next/navigation`. Sezioni della pagina: (1) Page hero con bg dell'immagine villa (`villa.image`), eyebrow "Villa Properhost", h1 nome villa Cormorant grande, sotto location e meta (es. "10 ospiti · 5 camere"). (2) Sezione "La villa" grid 2-col: descrizione lunga a sinistra (paragrafi multipli, copy specifico per villa — da popolare in `messages` o estendere `VILLAS` con campo `description`), gallery di 3-4 thumb a destra. (3) Sezione "Punti di forza" con 4-5 features specifiche villa (es. piscina infinity, terrazza panoramica, accesso al mare, chef incluso 1 sera, ecc.) — copy bozza, da raffinare con cliente. (4) Sezione "Richiedi disponibilità" con form sintetico inline o link a `/contatti?villa={slug}`. (5) Sezione "Altre ville" che mostra le 2 ville successive nel catalogo (next/prev nel array, wrap circolare). Per ora (mancando descrizioni specifiche villa per villa), usare placeholder `description: '<TODO: descrizione specifica per Villa X>'` nel data file e segnalare che il copy deve essere fornito dal cliente.
- **Scope**: solo template dynamic ville detail. Le descrizioni specifiche villa per villa sono BOZZA — task content separata sarà necessaria per finalizzarle.
- **Files**: nuovo: `properhost-next/src/app/[locale]/ville/[slug]/page.tsx`, `properhost-next/src/app/[locale]/ville/[slug]/not-found.tsx`. Estensione di `src/data/villas.ts` con campo `description`, `features`, `gallery` (array di immagini). Modifiche: `messages/*.json`.
- **Dependencies**: Task 27, Task 30 (data villas), Task 38.
- **Notes**: Per ora ProperHost ha 1 immagine per villa (`villa-1.jpg`...`villa-6.jpg`). La gallery 3-4 thumb è BOZZA: o (a) usiamo 4 volte la stessa immagine come placeholder con commento `// TODO: gallery reali per villa`, o (b) decidiamo che ogni villa ha una sola immagine e rimuoviamo la sezione gallery. Decisione del coder: optare per (b) come default, lasciando hook per future gallery. Configurare ISR: `export const revalidate = 3600` per consentire aggiornamento contenuti senza redeploy.

---

### Task 40
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-page-contatti
- **Priority**: high
- **Title**: Pagina /contatti (form completo + recapiti)
- **Desc**: Creare `properhost-next/src/app/[locale]/contatti/page.tsx`. Estrarre copy da `contatti.html`. Sezioni: (1) Page hero con bg `/assets/contatti-hero.jpg`, eyebrow "Contatti", h1 "Parliamo del tuo **soggiorno** in Sicilia", side card "Entro 24 ore lavorative". (2) Sezione contact-layout con grid asymmetric: a sinistra (sticky) recapiti — section-tag, h2, paragrafo, lista contact-list (Telefono, Email, Sito, Area operativa). A destra contact-card bianca con form. **Form**: campi (nome, email, telefono, ospiti number, dates text, villa text con preselect da query string `?villa=aurea`, messaggio textarea, checkbox privacy). Submit: action a `https://api.staticforms.xyz/submit` (mantenere lo stesso endpoint del sito statico) con accessKey `sf_48b268096f28838111e4dcc9` come hidden input. **Validazione client-side**: required su nome, email, messaggio, privacy. Email valida via regex. Number positivo per ospiti. Mostrare errori sotto i campi (Inter 12px color red-600). On submit success: mostrare messaggio "Grazie, ti ricontatteremo a breve" e pulire form. (3) Sezione service-grid con 6 servizi (riutilizzare ServiziSlider in modalità grid statica oppure cards con icone emoji come da `contatti.html`). Metadata.
- **Scope**: solo pagina /contatti. La validazione del form va lato client; il submit usa l'endpoint StaticForms esistente.
- **Files**: nuovo: `properhost-next/src/app/[locale]/contatti/page.tsx`. Eventuale `src/components/ContactForm.tsx` separato.
- **Dependencies**: Task 27, Task 32 (ServiziSlider riusato), Task 19.
- **Notes**: Tenere lo stesso endpoint `staticforms.xyz` e accessKey per non interrompere il flusso prenotazioni esistente. Se in futuro il cliente vuole spostarlo a un'API route Next o a Resend/SendGrid, sarà task separato. Validazione: usare React state, non librerie pesanti come react-hook-form (per ora).

---

### Task 41
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-page-prenotazione
- **Priority**: medium
- **Title**: Pagina /prenotazione (richiesta disponibilità form esteso)
- **Desc**: Creare `properhost-next/src/app/[locale]/prenotazione/page.tsx`. Pagina dedicata alla richiesta disponibilità (linkata dal pulsante "Book" nel nav). Layout simile a /contatti ma form più strutturato per la prenotazione. Campi: villa preferita (select da VILLAS array, opzione "Da definire / consigliami"), data check-in (date input), data check-out (date input), numero ospiti adulti (number), numero bambini (number), numero camere preferito (number), servizi extra interessati (checkbox group: Chef privato, Transfer, Concierge dedicato, Tour, Wellness, Yacht), note libere (textarea), nome (required), email (required), telefono (required), privacy (checkbox required). Il form va a stessa endpoint StaticForms con campo hidden `form_type=prenotazione` per distinguere dai contatti generici. Validazione client. Hero con copy diverso da /contatti, focus su "Disponibilità & Preventivo".
- **Scope**: solo pagina /prenotazione.
- **Files**: nuovo: `properhost-next/src/app/[locale]/prenotazione/page.tsx`. Eventuale `src/components/BookingForm.tsx`.
- **Dependencies**: Task 27, Task 30 (data villas), Task 40 (riusare logica form).
- **Notes**: Verificare che il submit StaticForms accetti i nuovi campi (in caso di limite plan, ridurre i campi al minimo essenziale e mettere il resto nelle "note libere"). Date validation: check-out deve essere dopo check-in.

---

## Task Queue · Migration Phase 4 — Animazioni

---

### Task 42
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-splittext
- **Priority**: medium
- **Title**: SplitText reveal su tutti i titoli h1/h2/h3 con ScrollTrigger
- **Desc**: Creare hook custom `properhost-next/src/lib/useSplitReveal.ts` che (a) accetta un ref a un elemento testuale e una config `{ type: 'lines' | 'words' | 'chars' | 'lines,words' | 'lines,words,chars'; stagger?: number; duration?: number; delay?: number }`; (b) all'entrata in viewport (ScrollTrigger `start: 'top 80%'`) anima il SplitText con fromTo `y: 100%; opacity: 0` → `y: 0; opacity: 1`, stagger 0.05-0.12s, duration 1.0s, ease `power3.out`. Usare SplitText di GSAP se disponibile (Club), altrimenti `split-type` come fallback. Applicare il hook a tutti i titoli h1/h2/h3 di sezione: Hero (nessun h1 grande), Mission h2, ConciergePanel h2, ServiziSlider h2, CtaPrenota h2, Faq h2, Page hero h1 di about/concierge/ville/contatti/prenotazione, VilleSlider h2 (titolo villa nel center, animato già al cambio slide ma anche al primo entry). Usare un attributo `data-split-text-type` sui titoli per indicare il tipo: "lines,words" default, "chars" per i titoli più piccoli decorativi. Cleanup obbligatorio al dismount: `splitInstance.revert()` + `scrollTrigger.kill()`. Rispettare `prefers-reduced-motion`: se attivo, il hook non fa nulla (testo appare statico).
- **Scope**: solo hook + applicazione a tutti i titoli esistenti. Non animare paragrafi (è Task 43).
- **Files**: nuovo: `properhost-next/src/lib/useSplitReveal.ts`. Modifiche: tutti i componenti sezione che hanno h2/h1 (Hero, Mission, ConciergePanel, ServiziSlider, CtaPrenota, Faq, AboutPage, ConciergePage, VillePage, VillaDetailPage, ContattiPage, PrenotazionePage).
- **Dependencies**: Task 18 (GSAP wrapper, SplitText o fallback), Task 28-34 (sezioni create).
- **Notes**: Il hook deve essere usato in componenti `'use client'`. NON applicare SplitText a testi che cambiano dinamicamente (es. il villa name nel slider che cambia ad ogni slide — quello ha la sua animazione fade dedicata). Test: ogni titolo entra una volta sola al primo viewport entry; se l'utente scrolla in su e in giù, non riparte (uso `once: true` di ScrollTrigger). Verificare che il revert al dismount lasci il testo originale visibile (non vuoto).

---

### Task 43
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-scroll-reveals
- **Priority**: medium
- **Title**: ScrollTrigger reveals su elementi `.reveal` (paragrafi, card, CTA)
- **Desc**: Creare un effetto reveal generico per tutti gli elementi non-titoli: paragrafi, card, button, immagini di sezione. Approccio: in un componente client globale `properhost-next/src/components/RevealOnScroll.tsx` o in un hook `useReveal.ts`, alla mount registrare un IntersectionObserver (o ScrollTrigger batch) che osserva tutti gli `[data-reveal]` o `.reveal` nel DOM. Quando un elemento entra al 80% del viewport, aggiungere classe `.in` o animare con GSAP `fromTo({ opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })`. Stagger naturale via `ScrollTrigger.batch()` con `interval: 0.12s`. Applicare attributo `data-reveal` a: paragrafi delle sezioni, card di servizi, card di ville, immagini di mission/concierge, CTA pillola, list item. Compatibile con SplitText (Task 42) — i titoli hanno la loro logica, gli altri elementi hanno questa. Rispettare `prefers-reduced-motion`.
- **Scope**: solo logica reveal generica + applicazione attributi sui componenti.
- **Files**: nuovi: `properhost-next/src/lib/useReveal.ts` o `properhost-next/src/components/RevealOnScroll.tsx`. Modifiche: aggiungere `data-reveal` ai componenti sezione.
- **Dependencies**: Task 18, Task 28-34.
- **Notes**: Già in `script.js` del sito statico c'è una versione vanilla di questa logica con `IntersectionObserver`. La versione Next/GSAP deve essere superiore: stagger naturale, easing più morbido, integrazione con Lenis. Test: ogni reveal solo una volta (usare `once: true` o `scrollTrigger.kill()` dopo trigger).

---

### Task 44
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-parallax
- **Priority**: low
- **Title**: Parallax sussurrato su Hero overlay e CtaPrenota bg
- **Desc**: Implementare effetto parallax leggero (ratio 0.3 = sussurrato, NON aggressivo) su: (a) Hero — l'overlay video si muove verticalmente al 30% della velocità di scroll, dando una sensazione di profondità. Implementazione: ScrollTrigger con `scrub: true`, animazione `gsap.to(heroOverlay, { y: 200, scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 1 } })`. (b) CtaPrenota — già ha `background-attachment: fixed` su CSS (Task 33), che è un parallax statico. Aggiungere un parallax JS più sofisticato: muovere l'overlay teal con scrub. (c) Concierge fixed bg: idem. **Mobile**: disabilitare tutti i parallax (verifica `window.innerWidth < 768` o media query) — su mobile il parallax è jank pesante e poco apprezzato. **Reduced motion**: disabilitare completamente.
- **Scope**: solo parallax su 3 punti (hero, cta, concierge bg).
- **Files**: modifiche: `Hero.tsx`, `CtaPrenota.tsx`, `ConciergePanel.tsx`. Eventuale hook `useParallax.ts`.
- **Dependencies**: Task 18, Task 28, Task 31, Task 33.
- **Notes**: Il parallax deve essere "sussurrato" — non più del 30% della velocità di scroll. NON spingere a 70-80% (sembra esagerato/economico). Test: scrollare lentamente, percepire la profondità ma non un'animazione invadente.

---

### Task 45
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-reduced-motion
- **Priority**: medium
- **Title**: prefers-reduced-motion fallback completo (a11y critica)
- **Desc**: Implementare un sistema centrale per rispettare `prefers-reduced-motion: reduce`. (1) Creare hook `useReducedMotion()` in `properhost-next/src/lib/useReducedMotion.ts` che ritorna boolean reattivo all'OS preference (con `matchMedia` listener). (2) In `LenisProvider`: se reducedMotion → NON inizializzare Lenis, lasciare scroll nativo. (3) In `Preloader`: se reducedMotion → render solo fade-out 200ms invece di counter+curtain. (4) In `CustomCursor`: se reducedMotion → non renderizzare. (5) In `useSplitReveal` e `useReveal`: se reducedMotion → applicare immediatamente lo stato finale (testo visibile, no animazione). (6) In `useParallax`: se reducedMotion → no animation. (7) Aggiungere CSS rule globale: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`. Test: in DevTools attivare "Emulate prefers-reduced-motion: reduce" e verificare che (a) non c'è preloader animato, (b) cursore di sistema visibile, (c) Lenis disabilitato (scroll è nativo, snappy), (d) titoli appaiono istantaneamente, (e) parallax disabilitato.
- **Scope**: aggiunte mirate ai componenti esistenti per la a11y. Niente refactor pesante.
- **Files**: nuovo: `properhost-next/src/lib/useReducedMotion.ts`. Modifiche: `LenisProvider.tsx`, `Preloader.tsx`, `CustomCursor.tsx`, `useSplitReveal.ts`, `useReveal.ts`, `useParallax.ts`, `globals.css`.
- **Dependencies**: Task 22, 23, 27, 42, 43, 44.
- **Notes**: La preferenza utente è importante per accessibilità — utenti con disturbi vestibolari, ADHD, epilessia possono soffrire fortemente di animazioni. NON è opzionale.

---

## Task Queue · Migration Phase 5 — Performance, SEO, A11y, Deploy

---

### Task 46
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-image-optim
- **Priority**: high
- **Title**: Migrare tutte le `<img>` a `<Image>` Next con sizes responsive
- **Desc**: Sostituire ogni `<img>` nei componenti con il componente `<Image>` di `next/image`. Per ogni Image: definire `width` e `height` espliciti (per evitare CLS) o usare `fill` con parent `position: relative` dimensionato. Definire `sizes` responsive accurato (es. `(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw` per le card villa nella griglia). Usare `priority` SOLO per immagini above-the-fold critiche per LCP (es. hero poster, prima slide del VilleSlider). Tutte le altre con `loading="lazy"` (default). `placeholder="blur"` con `blurDataURL` generato a build time (next-image-export-optimizer o usare base64 statici). Configurare `next.config.ts` con `images.formats: ['image/avif', 'image/webp']` per servire formati moderni.
- **Scope**: solo refactor immagini. Niente nuove feature.
- **Files**: modifiche: tutti i componenti che usano `<img>` (sezioni home, page hero di pagine interne, ecc.). Modifiche `next.config.ts`.
- **Dependencies**: Task 28-41 (componenti creati).
- **Notes**: Le immagini hero video (poster) e villa-1.jpg sono LCP candidates su rispettive pagine — `priority`. Verificare con Lighthouse che LCP < 2.5s.

---

### Task 47
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-seo
- **Priority**: high
- **Title**: SEO completo (metadata, OG, Twitter, structured data, sitemap, robots)
- **Desc**: (1) Per ogni pagina (home, /about, /concierge, /ville, /ville/[slug], /contatti, /prenotazione) esportare `metadata: Metadata` con title specifico, description, openGraph (title, description, images, type, locale), twitter (card type, title, description, images). Usare `getTranslations` per i18n nelle metadata. (2) Aggiungere structured data JSON-LD: in `/ville/[slug]/page.tsx` schema `LodgingBusiness` con name, address, geo, image, priceRange, aggregateRating placeholder, telephone. In root layout schema `Organization` con name "Properhost", URL, logo, address Palermo, contactPoint. In /contatti schema `ContactPage`. (3) Creare `properhost-next/src/app/sitemap.ts` che genera sitemap.xml con tutte le rotte statiche e dinamiche (locales × pagine × slug villa). (4) Creare `properhost-next/src/app/robots.ts` con `User-agent: *, Allow: /, Sitemap: <baseUrl>/sitemap.xml`. (5) Aggiungere `<link rel="canonical">` per ogni pagina. (6) `og:image` come immagine 1200×630 dedicata: creare in `public/og/` (placeholder usando crop di hero-home.jpg).
- **Scope**: solo SEO/metadata. Niente analytics (separato).
- **Files**: nuovi: `src/app/sitemap.ts`, `src/app/robots.ts`, `public/og/og-default.jpg`, `public/og/og-villa-{slug}.jpg`. Modifiche: tutti i `page.tsx` per esportare metadata, layout root per Organization JSON-LD.
- **Dependencies**: Task 35, 36, 37, 38, 39, 40, 41.
- **Notes**: Per generare og:image 1200×630 brand-specific, possibile usare `@vercel/og` Next API route (ma richiede effort). Per ora: usare hero-home.jpg cropped manualmente — TODO dedicato per immagini OG custom.

---

### Task 48
- **Status**: todo
- **Agent**: ui-designer
- **Branch**: feature/migration-a11y
- **Priority**: high
- **Title**: A11y polish (focus visibili, ARIA, scrollbar, skip link)
- **Desc**: (1) Aggiungere skip-to-content link all'inizio del body: `<a href="#main" className="skip-link">Vai al contenuto</a>` con CSS che lo nasconde fuori dallo schermo finché non riceve focus. (2) Verificare che TUTTI gli elementi interattivi (link, button, input, select, textarea) abbiano focus visibile chiaro: outline 2px dotted `var(--accent)` outline-offset 4px, mai `outline: none` senza alternativa. (3) Aggiungere `aria-label` o `aria-labelledby` a tutti gli elementi non testuali (icone, button-icon, slider). (4) Verificare ordine tab logico in tutte le pagine. (5) Scrollbar custom: `::-webkit-scrollbar { width: 6px } ::-webkit-scrollbar-track { background: transparent } ::-webkit-scrollbar-thumb { background: rgba(11,107,94,.3) } ::-webkit-scrollbar-thumb:hover { background: rgba(11,107,94,.6) }`. (6) Aggiungere `lang={locale}` su `<html>`. (7) Test con strumenti: Lighthouse A11y → 100, axe DevTools → 0 violazioni, screen reader (VoiceOver/NVDA) → naviga tutta la home.
- **Scope**: solo polish a11y. Niente refactor strutturale.
- **Files**: modifiche: `globals.css` (skip-link, focus, scrollbar), Navbar.tsx, layout.tsx, vari componenti per ARIA.
- **Dependencies**: Task 25, 27, 35-41.
- **Notes**: A11y NON è opzionale. Score 100 Lighthouse A11y è target obbligatorio.

---

### Task 49
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-lighthouse
- **Priority**: high
- **Title**: Lighthouse audit completo + ottimizzazioni (target 95+ Perf)
- **Desc**: Eseguire Lighthouse audit (Chrome DevTools) su `pnpm build && pnpm start` → localhost:3000, in modalità Mobile e Desktop. Risolvere ogni problema fino a target: Performance ≥95, Accessibility = 100, Best Practices ≥95, SEO ≥95. Aree tipiche di intervento: (1) **LCP**: ottimizzare hero video (codec H.265 max 1080p), comprimere `villa-1.jpg` (LCP della home post-hero), usare `priority` correttamente, preload font. (2) **CLS**: tutte le immagini con dimensioni esplicite, video con `aspect-ratio`, font con `display: 'swap'` + `size-adjust` se necessario. (3) **TBT**: ridurre JS bundle — tree-shake Swiper modules, lazy-import GSAP plugins, dynamic import di componenti pesanti (Faq solo se in viewport, ecc.). (4) **FCP**: minimizzare CSS critico inline. (5) **Best Practices**: HTTPS only, no console errors, immagini con alt valide. (6) **SEO**: meta description su tutte le pagine, canonical url, robots/sitemap valid. Documentare ogni intervento nel commit.
- **Scope**: ottimizzazioni cross-cutting per raggiungere target Lighthouse.
- **Files**: vari, secondo necessità.
- **Dependencies**: Task 35-48.
- **Notes**: Lighthouse fluttua tra run; fare 3 run consecutive e prendere la mediana. Target: 95+ stabile.

---

### Task 50
- **Status**: todo
- **Agent**: coder
- **Branch**: feature/migration-vercel-deploy
- **Priority**: high
- **Title**: Deploy Vercel + ISR + custom domain
- **Desc**: (1) Connettere il repo GitHub a Vercel, configurare il root del progetto come `properhost-next/` (monorepo support se l'altro sito statico è ancora in root). Build command: `pnpm build`. Output: `.next`. (2) Configurare Environment Variables se necessarie (es. `STATICFORMS_KEY` se il key del form va in env). (3) Configurare ISR: in `/ville` e `/ville/[slug]` esportare `export const revalidate = 3600` (rigenera ogni ora). (4) Deploy preview da branch `develop` o equivalente, poi merge in `main` per production. (5) Configurare custom domain: properhost.it punta al deployment Vercel, gestire DNS A/CNAME come da guide Vercel. SSL automatico. (6) Configurare redirect del vecchio sito statico al nuovo (se hosting precedente diverso). (7) Configurare 301 redirect da legacy URL come `/index.html` → `/`, `/about.html` → `/about`, ecc. (8) Test post-deploy: visitare ogni pagina, controllare console pulita, verificare che il form di /contatti invii correttamente (test reale a properhost.company@gmail.com con flag).
- **Scope**: solo deploy ops + DNS + ISR config.
- **Files**: `properhost-next/vercel.json` (se config custom serve), `properhost-next/next.config.ts` (per redirect).
- **Dependencies**: Task 35-49.
- **Notes**: Verificare che `next-intl` middleware funzioni correttamente in production (test `/en` route). Verificare che i font Google carichino dalla CDN Vercel. Monitor primi giorni con Vercel Analytics o Plausible (separato).

---

## Suggerimento di assegnazione tra agent

Senza conoscere il ruolo specifico dei tuoi 3 agent, distribuzione ragionevole:

- **ui-designer**: Task 17, 24, 26, 28, 29, 31, 33, 36, 37, 38, 42, 43, 44, 48
- **coder**: Task 16, 18, 19, 20, 21, 22, 23, 25, 27, 30, 32, 34, 35, 39, 40, 41, 45, 46, 47, 49, 50
- **terzo agent (qa-tester / fullstack / infra)**: può assorbire 21, 45, 48, 49, 50 oppure aiutare in parallelo su review/test cross-task

Se i tuoi agent hanno ruoli diversi (es. uno specializzato in SEO, uno in animazioni GSAP, uno in deploy), riassegna di conseguenza. Posso aggiornare la mappa se mi dici i ruoli esatti.

## Workflow

1. Assegna task all'agent corretto.
2. L'agent lavora solo sul branch `openHands`.
3. L'agent completa la task senza uscire dallo scope.
4. L'agent testa su mobile e desktop.
5. L'agent prepara commit convenzionale.
6. Merge manuale solo dopo verifica.

## Regole

- Un task = un obiettivo chiaro.
- In `openHands` branch vanno tutti i commit dei task svolti, uno per volta.
- Non mischiare task diverse negli stessi commit.
- Non creare nuovi file se non previsto o quanto meno chiedi prima.
- Non fare push di modifiche non testate.
- Non toccare aree non richieste.
- Se una task richiede UI e JS, dividila in due task separate.