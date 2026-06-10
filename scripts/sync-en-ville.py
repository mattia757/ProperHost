#!/usr/bin/env python3
"""Sync EN ville.html galleries and amenities from IT ville.html."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

AMENITY_EN = {
    "Vista mare": "Sea view",
    "Cucina attrezzata": "Equipped kitchen",
    "Aria condizionata": "A/C",
    "Wi-Fi": "Wi-Fi",
    "Lavatrice": "Washing machine",
    "Smart TV": "Smart TV",
    "Vista porto": "Harbour view",
    "TV": "TV",
    "Patio esterno": "Private patio",
    "Doccia esterna": "Outdoor shower",
    "Centro storico": "Historic centre",
    "Macchina caffè": "Coffee machine",
    "Design": "Design",
    'TV 50"': 'TV 50"',
    "Centro città": "City centre",
    "10 m dal mare": "10 m from sea",
    "Patio": "Patio",
    "Giardino privato": "Private garden",
    "Ingresso indip.": "Ind. entrance",
    "Parcheggio": "Parking",
    "Bagno privato": "Private bathroom",
    "Tramonti": "Sunsets",
    "200 m spiaggia": "200 m beach",
    "Barbecue": "BBQ",
    "2 bagni": "2 bathrooms",
    "Cucina": "Kitchen",
    "Vista mare tramonto": "Sea view sunsets",
    "Campo da tennis": "Tennis court",
    "Giardino": "Garden",
    "Forno a legna": "Wood oven",
}


def parse_articles(html, prefix):
    articles = re.findall(r'<article class="card reveal">.*?</article>', html, re.S)
    parsed = []
    for art in articles:
        h3_m = re.search(r"<h3>(.*?)</h3>", art)
        if not h3_m:
            continue
        slides = re.findall(
            rf'{re.escape(prefix)}ville/([^/]+)/(\d+\.jpg)" alt="([^"]*)"',
            art,
        )
        amenities = re.findall(r'<span class="amenity">([^<]+)</span>', art)
        parsed.append({"h3": h3_m.group(1), "slides": slides, "amenities": amenities})
    return parsed


def build_slides_html(slides, alt_fallback):
    parts = []
    for folder, num, alt in slides:
        alt_text = alt_fallback if alt_fallback else alt
        parts.append(
            f'<div class="swiper-slide"><img src="../assets/ville/{folder}/{num}" '
            f'alt="{alt_text}" loading="lazy"></div>'
        )
    return "".join(parts)


def build_amenities_html(amenities_it):
    pills = "".join(
        f'<span class="amenity">{AMENITY_EN.get(a, a)}</span>' for a in amenities_it
    )
    return f'<div class="amenities">{pills}</div>'


def sync_article(en_art, it_data, en_h3):
    slides_html = build_slides_html(it_data["slides"], en_h3)
    en_art = re.sub(
        r'(<div class="swiper swiper-villa"><div class="swiper-wrapper">).*?(</div><div class="swiper-button-prev">)',
        rf"\1{slides_html}\2",
        en_art,
        count=1,
        flags=re.S,
    )
    amenities_html = build_amenities_html(it_data["amenities"])
    en_art = re.sub(
        r'<div class="amenities">.*?</div>',
        amenities_html,
        en_art,
        count=1,
        flags=re.S,
    )
    return en_art


def main():
    it_html = (ROOT / "ville.html").read_text(encoding="utf-8")
    en_html = (ROOT / "en" / "ville.html").read_text(encoding="utf-8")

    en_html = en_html.replace('href="../contatti.html"', 'href="contatti.html"')

    it_articles = parse_articles(it_html, "assets/")
    en_articles = re.findall(r'<article class="card reveal">.*?</article>', en_html, re.S)

    if len(it_articles) != len(en_articles):
        print(f"WARNING: article count IT={len(it_articles)} EN={len(en_articles)}")

    synced = []
    for i, en_art in enumerate(en_articles):
        if i >= len(it_articles):
            synced.append(en_art)
            continue
        en_h3 = re.search(r"<h3>(.*?)</h3>", en_art)
        en_h3_text = en_h3.group(1) if en_h3 else ""
        synced.append(sync_article(en_art, it_articles[i], en_h3_text))

    en_html = re.sub(
        r'<article class="card reveal">.*?</article>',
        lambda m: synced.pop(0) if synced else m.group(0),
        en_html,
        flags=re.S,
    )

    (ROOT / "en" / "ville.html").write_text(en_html, encoding="utf-8")
    print(f"sync complete: {len(it_articles)} articles")


if __name__ == "__main__":
    main()
