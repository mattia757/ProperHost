// One-shot script: injects CDN tags for Lenis / GSAP / ScrollTrigger /
// Swiper / split-type into every HTML file under the project root.
// Idempotent: skips files that already contain the marker comment.

import { readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\//, '');

const HEAD_BLOCK = `  <!-- CDN libraries (Lenis / GSAP / Swiper) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.42/bundled/lenis.min.js" defer crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js" defer crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer crossorigin="anonymous"></script>
`;

const MODULE_TAG = '  <script type="module" src="/js/main.js"></script>\n';
const HEAD_MARKER = 'CDN libraries (Lenis / GSAP / Swiper)';
const MODULE_MARKER = '/js/main.js';

const skipDirs = new Set(['node_modules', '.git', '.github', 'assets', '.agents', 'scripts']);

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (skipDirs.has(e.name)) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
};

const inject = (file) => {
  let html = readFileSync(file, 'utf8');
  let changed = false;

  if (!html.includes(HEAD_MARKER) && html.includes('</head>')) {
    html = html.replace('</head>', `${HEAD_BLOCK}</head>`);
    changed = true;
  }

  if (!html.includes(MODULE_MARKER) && html.includes('</body>')) {
    html = html.replace('</body>', `${MODULE_TAG}</body>`);
    changed = true;
  }

  if (changed) writeFileSync(file, html, 'utf8');
  return changed;
};

const main = async () => {
  const cwd = process.cwd();
  const files = await walk(cwd);
  let touched = 0;
  for (const f of files) {
    if (inject(f)) {
      touched += 1;
      console.log('updated', f.replace(cwd, '.'));
    }
  }
  console.log(`\n${touched}/${files.length} HTML files updated.`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
