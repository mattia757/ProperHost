# Todo - ProperHost

## Task Queue

Ogni task viene assegnata a un solo agent specializzato.  
Ogni task lavora su branch dedicato.  
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
- **Status**: todo
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
- **Status**: todo
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
- **Status**: todo
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
- **Status**: todo
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
- **Status**: todo
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

## Workflow

1. Assegna task all’agent corretto.
2. L’agent lavora solo sul branch `openHands`.
3. L’agent completa la task senza uscire dallo scope.
4. L’agent testa su mobile e desktop.
5. L’agent prepara commit convenzionale.
6. Merge manuale solo dopo verifica.

## Regole

- Un task = un obiettivo chiaro.
- In `openHands` branch vanno tutti i commit dei task svolti, uno per volta.
- Non mischiare task diverse negli stessi commit.
- Non creare nuovi file se non previsto o quanto meno chiedi prima.
- Non fare push di modifiche non testate.
- Non toccare aree non richieste.
- Se una task richiede UI e JS, dividila in due task separate.

## Come usare il file

- `Status: todo` = task da far lavorare ad agent.
- `Status: done` = task già completata, non toccare.
- Ogni task è isolata e assegnata a un solo agent.
- Gli agenti leggono il `todo.md`, scelgono il loro `Status: todo` e lavorano.