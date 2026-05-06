# Todo - ProperHost

## Task Queue (async workflow)

Ogni task viene completata da un agent specializzato e pushata su branch separato.

---

### Task 1: MATERIAL DESIGN SHADOWS (completato ✓)
- **Status**: done
- **Branch**: openHands
- **Priority**: high
- **Agent**: ui-designer
- **Desc**: Aggiungere shadow layered, border-radius, micro-interactions
- **Files**: style.css, script.js
- **Notes**: Commit gia pushato

---

### Task 2: ANIMAZIONI HERO
- **Status**: todo
- **Branch**: feature/hero-animations
- **Priority**: medium
- **Agent**: ui-designer
- **Desc**: Animazioni piu elaborate per hero section, entrata text, parallax migliorato
- **Files**: index.html, style.css, script.js

---

### Task 3: MOBILE OPTIMIZATION
- **Status**: todo
- **Branch**: feature/mobile-optimization
- **Priority**: high
- **Agent**: ui-designer
- **Desc**: Migliorare responsive, touch interactions, mobile menu animation
- **Files**: style.css, script.js

---

### Task 4: VILLA SLIDER ENHANCEMENT
- **Status**: todo
- **Branch**: feature/villa-slider
- **Priority**: medium
- **Agent**: coder
- **Desc**: Touch swipe, indicator dots, transizioni piu fluide
- **Files**: style.css, script.js, index.html

---

### Task 5: CONTACT FORM VALIDATION
- **Status**: todo
- **Branch**: feature/form-validation
- **Priority**: medium
- **Agent**: coder
- **Desc**: Validazione JS, messaggi errore, success message
- **Files**: script.js, contatti.html

---

### Task 6: PAGE SPEED OPTIMIZATION
- **Status**: todo
- **Branch**: feature/page-speed
- **Priority**: low
- **Agent**: coder
- **Desc**: Lazy loading images, optimized video, CSS critical
- **Files**: index.html, style.css

---

## workflow

```
Task assign → Agent seleziona → Lavoro in branch → Push → Merge manually
```

## Note
- Usare branch dedicato per ogni task
- Commit atomici con conventional commits
- PR opzionale prima di merge