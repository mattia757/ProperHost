"""Optimize a curated set of photos from ../immagini/ into Sito/assets/
   - Resize longest side to 1800px for hero/large, 1200px for cards
   - Save as JPEG quality 82, progressive, sRGB
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent
SRC = ROOT.parent / "immagini"
OUT = ROOT / "assets"
OUT.mkdir(exist_ok=True)

# Curated list: (source_filename, output_name, target_long_edge)
# HDR shots tend to be the best-exposed tripod wide shots.
ITEMS = [
    # Hero (home) + poster for the video
    ("DSC00438-HDR.JPEG",   "hero-home.jpg",        2000),
    ("DSC09683-HDR.JPEG",   "hero-home-alt.jpg",    2000),

    # Intro / about panels
    ("DSC00510-HDR.JPEG",   "intro.jpg",            1600),
    ("DSC09693-HDR.JPEG",   "about-hero.jpg",       2000),
    ("DSC00590-HDR.JPEG",   "about-panel.jpg",      1400),

    # Villa cards (home + pagina ville)
    ("DSC00443-HDR.JPEG",   "villa-1.jpg",          1400),
    ("DSC00453-HDR.JPEG",   "villa-2.jpg",          1400),
    ("DSC00463-HDR.JPEG",   "villa-3.jpg",          1400),
    ("DSC00473-HDR.JPEG",   "villa-4.jpg",          1400),
    ("DSC00540-HDR.JPEG",   "villa-5.jpg",          1400),
    ("DSC00635-HDR.JPEG",   "villa-6.jpg",          1400),

    # Concierge / chef / servizi
    ("DSC09502-HDR.JPEG",   "concierge.jpg",        1600),
    ("DSC09429-HDR.JPEG",   "concierge-hero.jpg",   2000),
    ("DSC09743-HDR.JPEG",   "sea.jpg",              1600),

    # CTA / footer / ville hero / contatti hero
    ("DSC09615-HDR.JPEG",   "cta.jpg",              2000),
    ("DSC00645-HDR.JPEG",   "ville-hero.jpg",       2000),
    ("DSC09324-HDR.JPEG",   "contatti-hero.jpg",    2000),
]

def process(src: Path, dst: Path, target: int):
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        # Resize preserving aspect ratio so the LONGEST side = target
        w, h = im.size
        longest = max(w, h)
        if longest > target:
            ratio = target / longest
            im = im.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
        im.save(dst, "JPEG", quality=82, progressive=True, optimize=True)

for src_name, out_name, target in ITEMS:
    src = SRC / src_name
    if not src.exists():
        print(f"MISSING: {src_name}")
        continue
    dst = OUT / out_name
    process(src, dst, target)
    kb = dst.stat().st_size // 1024
    print(f"  {out_name:22s}  {kb:>5d} KB  ({target}px)")

print("Done.")
