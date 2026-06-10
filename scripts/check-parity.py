#!/usr/bin/env python3
"""Compare IT vs EN pages for structural parity."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAGES = [
    ("index.html", "en/index.html"),
    ("about.html", "en/about.html"),
    ("concierge.html", "en/concierge.html"),
    ("contatti.html", "en/contatti.html"),
    ("ville.html", "en/ville.html"),
]


def count(pattern, text):
    return len(re.findall(pattern, text, re.I))


def check_ville():
    it = (ROOT / "ville.html").read_text(encoding="utf-8")
    en = (ROOT / "en/ville.html").read_text(encoding="utf-8")

    it_folders = sorted(set(re.findall(r"assets/ville/([^/\"']+)/", it)))
    print("\n=== ville.html property parity ===")
    for folder in it_folders:
        ci = len(re.findall(rf"assets/ville/{re.escape(folder)}/\d+\.jpg", it))
        ce = len(re.findall(rf"ville/{re.escape(folder)}/\d+\.jpg", en))
        it_am = len(re.findall(rf'data-villa="{re.escape(folder)}"[\s\S]*?</article>', it))
        en_am = len(re.findall(rf'data-villa="{re.escape(folder)}"[\s\S]*?</article>', en))
        status = "OK" if ci == ce else "MISMATCH"
        if ci != ce:
            print(f"  slides {folder}: IT={ci} EN={ce} [{status}]")

    it_cards = len(re.findall(r'class="villa-card"', it))
    en_cards = len(re.findall(r'class="villa-card"', en))
    print(f"  villa cards: IT={it_cards} EN={en_cards}")

    it_tabs = len(re.findall(r'class="villa-tab"', it))
    en_tabs = len(re.findall(r'class="villa-tab"', en))
    print(f"  villa tabs: IT={it_tabs} EN={en_tabs}")

    bad = en.count("../contatti.html")
    if bad:
        print(f"  WARNING: {bad} broken ../contatti.html links in EN")


def check_page(it_path, en_path):
    it = (ROOT / it_path).read_text(encoding="utf-8")
    en = (ROOT / en_path).read_text(encoding="utf-8")
    name = it_path

    checks = [
        ("sections", r"<section\b", it, en),
        ("footer-credit", r"footer-credit", it, en),
        ("apple-touch-icon", r"apple-touch-icon", it, en),
        ("og:url", r'property="og:url"', it, en),
        ("json-ld", r"application/ld\+json", it, en),
        ("lang EN link footer", r'href="en/', it, en),
        ("lang IT link footer", r'href="\.\./', en, it),
    ]

    issues = []
    for label, pat, a, b in checks:
        ca, cb = count(pat, a), count(pat, b)
        if ca != cb and label not in ("lang EN link footer", "lang IT link footer"):
            issues.append(f"{label}: IT={ca} EN={cb}")

    # EN footer should have IT link, IT footer should have EN link
    it_has_en = 'href="en/' in it or 'href="../en/' in en
    en_has_it = 'href="../' in en and "index.html" in en

    print(f"\n=== {name} ===")
    if issues:
        for i in issues:
            print(f"  {i}")
    else:
        print("  structure OK")


def main():
    for it_p, en_p in PAGES:
        check_page(it_p, en_p)
    check_ville()


if __name__ == "__main__":
    main()
