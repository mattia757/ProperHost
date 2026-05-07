# in_progress - ProperHost

## Task Queue

Ogni task viene assegnata a un solo agent specializzato.  
Ogni task lavora e pusha sul branch openHands.  
Ogni task deve restare entro il proprio scope.  
Non fare interventi fuori perimetro.  
Non mischiare UI con logica JS.  
Non rompere elementi esistenti.

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