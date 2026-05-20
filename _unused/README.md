# _unused — Non deployare in produzione

Cartella di archivio per file non serviti dal sito live o solo per sviluppo locale.

## Contenuto aggiuntivo (rispetto al commit precedente)

| File/cartella | Motivo |
|---------------|--------|
| `hero.webm`, `hero.mp4` | Video hero legacy, sostituiti da `video_bello.*` |
| `hero-home-alt.jpg` | Variante hero non referenziata |
| `dashboard.html` | Pagina interna, esclusa da robots.txt |
| `.agents/`, `AGENTS.md` | Documentazione e task per agenti AI |
| `.github/` | Workflow CI (notifiche GitHub) |
| `_logo_p*.png`, `_page_*.png`, `7bcad9c6-*.png` | Export/screenshot temporanei |

## Struttura deploy (root del progetto)

```
/
├── index.html, about.html, ville.html, contatti.html, concierge.html
├── en/                    # Versione inglese
├── ville/                 # Pagine singole villa
├── css/style.css          # Stylesheet unico
├── js/script.js           # JavaScript unico
├── assets/
│   ├── videos/            # Video hero
│   ├── images/
│   │   ├── hero/          # Poster e immagini hero
│   │   ├── pages/         # Hero e visual pagine interne
│   │   ├── villas/        # Foto ville (villa-1 … villa-6)
│   │   └── brand/         # Loghi header
├── logo-removebg-preview.png  # Favicon
├── sitemap.xml, robots.txt, _headers, _redirects
└── _unused/               # ← ESCLUDERE dal deploy
```
