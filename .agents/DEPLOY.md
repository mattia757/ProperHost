# Deploy ProperHost (Task 50)

Sito statico. Nessuna build step richiesta.

## Host consigliato

**Cloudflare Pages** (CDN globale, free SSL, integrazione GitHub).

In alternativa: Netlify (form handling integrato), Vercel.

## Setup Cloudflare Pages

1. Login Cloudflare > Pages > Create > Connect to Git
2. Repo: `ProperHost`, branch produzione: `main`
3. Build settings:
   - Framework preset: **None**
   - Build command: *(vuoto)*
   - Build output directory: `/`
4. Custom domain: `www.properhost.it`
5. Apex redirect: `properhost.it` -> `www.properhost.it` via Page Rule

## File di configurazione

- `_redirects` — regole 301 e fallback (nella root)
- `_headers` — cache + sicurezza (nella root)
- `sitemap.xml` — già presente, aggiornare a ogni nuova pagina
- `robots.txt` — già presente

## DNS

- A/AAAA o CNAME come da pannello Cloudflare/Netlify
- TTL 3600 in transizione, poi 86400

## Test post-deploy

1. Visitare ogni pagina IT + EN, console pulita
2. Form contatti: invio reale a `properhost.company@gmail.com`
   con flag `[TEST]` per identificare
3. Lighthouse mobile da rete reale (vedi LIGHTHOUSE.md)
4. Verificare cache headers via `curl -I https://www.properhost.it/assets/villa-1.jpg`

## Backup pre-deploy

Esportare i record DNS attuali prima di puntare il dominio.
