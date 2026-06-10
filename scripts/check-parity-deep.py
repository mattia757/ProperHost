#!/usr/bin/env python3
"""Deep IT vs EN parity report."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAIRS = [
    ("index.html", "en/index.html"),
    ("about.html", "en/about.html"),
    ("concierge.html", "en/concierge.html"),
    ("contatti.html", "en/contatti.html"),
    ("ville.html", "en/ville.html"),
]

PATTERNS = [
    ("sections", r"<section\b"),
    ("articles", r"<article\b"),
    ("service-card", r"service-card"),
    ("cards .card", r'<article class="card reveal"'),
    ("footer-credit", r"footer-credit"),
    ("apple-touch-icon", r"apple-touch-icon"),
    ("og:url", r'property="og:url"'),
    ("json-ld", r"application/ld\+json"),
    ("sitemap link", r'rel="sitemap"'),
    ("twitter:image", r'name="twitter:image"'),
    ("keywords", r'name="keywords"'),
    ("lang footer link", r"text-decoration:underline"),
]


def count(pat, text):
    return len(re.findall(pat, text, re.I))


def article_count(html):
    return len(re.findall(r'<article class="card reveal">', html))


def main():
    for it_path, en_path in PAIRS:
        it = (ROOT / it_path).read_text(encoding="utf-8")
        en = (ROOT / en_path).read_text(encoding="utf-8")
        print(f"\n=== {it_path} ===")
        diffs = []
        for label, pat in PATTERNS:
            ci, ce = count(pat, it), count(pat, en)
            if ci != ce:
                diffs.append(f"  {label}: IT={ci} EN={ce}")
        if diffs:
            print("\n".join(diffs))
        else:
            print("  counts OK")

    # ville articles
    it_v = (ROOT / "ville.html").read_text(encoding="utf-8")
    en_v = (ROOT / "en/ville.html").read_text(encoding="utf-8")
    it_a = article_count(it_v)
    en_a = article_count(en_v)
    print(f"\n=== ville articles ===")
    print(f"  IT={it_a} EN={en_a}" + (" OK" if it_a == en_a else " MISMATCH"))

    it_articles = parse_ville_articles(it_v, "assets/")
    en_articles = parse_ville_articles(en_v, r"\.\./assets/")
    for i, (it_d, en_d) in enumerate(zip(it_articles, en_articles)):
        if it_d["slides"] != en_d["slides"]:
            print(f"  slide mismatch #{i+1} {it_d['h3']}: IT={it_d['slides']} EN={en_d['slides']}")
        if len(it_d["amenities"]) != len(en_d["amenities"]):
            print(f"  amenity count #{i+1} {it_d['h3']}: IT={len(it_d['amenities'])} EN={len(en_d['amenities'])}")


def parse_ville_articles(html, prefix):
    arts = re.findall(r'<article class="card reveal">.*?</article>', html, re.S)
    out = []
    for a in arts:
        h3 = re.search(r"<h3>(.*?)</h3>", a)
        slides = len(re.findall(rf"{prefix}ville/[^/]+/\d+\.jpg", a))
        amenities = len(re.findall(r'<span class="amenity">', a))
        out.append({"h3": h3.group(1) if h3 else "?", "slides": slides, "amenities": amenities})
    return out


if __name__ == "__main__":
    main()
