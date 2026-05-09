# Lighthouse audit checklist (Task 49)

Eseguire Lighthouse da Chrome DevTools (Mobile + Desktop) servendo
il sito in locale (`npx --yes serve .` su `http://localhost:3000`).

Target minimo:

- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 95+

## Pagine da auditare

- `/` (home)
- `/about.html`
- `/concierge.html`
- `/ville.html`
- `/ville/aurea.html` (campione villa singola)
- `/contatti.html`
- `/en/` e almeno una pagina `/en/*` per controllo i18n

## Punti di attenzione tipici

1. LCP — hero video pesante. Verificare:
   - poster `hero-home.jpg` con `loading="eager"` `fetchpriority="high"`
   - `<source>` WebM prima di MP4 per browser moderni
   - max bitrate 1080p, ~3MB
2. CLS — ogni `<img>` deve avere `width` + `height` espliciti
3. TBT — script CDN con `defer`, niente JS sincrono inline pesante
4. FCP — preconnect Google Fonts presente, `font-display: swap`
5. SEO — meta description univoca per pagina, canonical, hreflang
6. A11y — skip-link, contrasto, focus visibile, alt su tutte le immagini

## Output

Salvare i report HTML in `.agents/lighthouse/` con timestamp.
Documentare ogni intervento di ottimizzazione nei commit.
