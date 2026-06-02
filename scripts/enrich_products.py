"""
Bulk-enrich all product pages with 100-200 words of unique content.
Reads frontmatter + meta description, generates structured sections.
"""
import os, re, yaml

PRODUCTS_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "content", "products")

CTA_PATTERNS = re.compile(
    r'(call now|contact us|order now|get a quote|buy now|shop now|visit our|order today|\.\s*(Call|Contact|Order|Get|Shop|Visit)\b)',
    re.IGNORECASE
)
LEADIN_PATTERNS = re.compile(
    r'^(Buy|Get|Shop|Order|Find|Discover)\s+.+?[\.!](\s+|$)',
    re.IGNORECASE
)

BRAND_VARIANTS = [" | Secuview", " - Secuview", " – Secuview", "| Secuview", "– Secuview"]
LOCATION_MARKERS = re.compile(r'\s+(Qatar|Doha|in Qatar|in Doha)\s*', re.IGNORECASE)
PREFIXES = re.compile(r'^(Best|Top|Buy|Pro|High-quality|Premium|Durable)\s+', re.IGNORECASE)

def parse_frontmatter(text):
    m = re.match(r'^---\n(.*?)\n---\n(.*)', text, re.DOTALL)
    if not m:
        return None, text
    fm = yaml.safe_load(m.group(1))
    body = m.group(2).lstrip('\n')
    return fm, body

def clean_product_name(title):
    name = title
    for v in BRAND_VARIANTS:
        name = name.split(v)[0]
    name = re.sub(r'\s*\|\s*.*', '', name)
    name = LOCATION_MARKERS.sub('', name)
    name = PREFIXES.sub('', name)
    return name.strip()

def extract_features(desc):
    text = LEADIN_PATTERNS.sub('', desc)
    text = CTA_PATTERNS.sub('', text)
    parts = re.split(r'[,;.!]+', text)
    cleaned = []
    for p in parts:
        p = p.strip().strip('.').strip()
        if not p:
            continue
        if len(p) < 5:
            continue
        if p.lower().startswith(('buy ', 'get ', 'shop ', 'order ', 'call ', 'contact ', 'visit ')):
            continue
        if re.match(r'^(Call|Contact|Order|Get|Shop|Visit)\b', p, re.IGNORECASE):
            continue
        if any(kw in p.lower() for kw in ['quote', 'call now', 'contact us']):
            continue
        p = p[0].upper() + p[1:]
        if p not in cleaned:
            cleaned.append(p)
    return cleaned

def generate_content(fm):
    title = fm.get("title", "")
    desc = fm.get("description", "")
    categories = fm.get("categories", [])
    sku = fm.get("sku", "")
    price = fm.get("price", 0)
    primary_cat = categories[0] if categories else "General"

    name = clean_product_name(title)
    features = extract_features(desc)

    lines = []

    lines.append(f"Looking for a reliable {name.lower()} in Qatar? The Secuview {name.lower()} delivers consistent performance, solid build quality, and dependable value for homeowners, businesses, and installers across Doha and the region.")
    lines.append("")

    if features:
        lines.append("### Key Features")
        for f in features[:8]:
            lines.append(f"- **{f}**")
        lines.append("")

    lines.append("### Specifications")
    lines.append("| Attribute | Value |")
    lines.append("|---|---|")
    lines.append(f"| **Product** | {name} |")
    lines.append(f"| **SKU** | {sku} |")
    if price:
        lines.append(f"| **Price** | QAR {price:.2f} |")
    lines.append(f"| **Brand** | Secuview |")
    lines.append(f"| **Availability** | In Stock |")
    lines.append(f"| **Categories** | {', '.join(categories)} |")
    lines.append("")

    cat_lower = ' '.join(c.lower() for c in categories)

    if 'security' in cat_lower or 'surveillance' in cat_lower:
        lines.append("### Applications")
        lines.append(f"The {name} is ideally suited for monitoring entrances, parking areas, warehouses, retail stores, and office premises across Qatar.")
        lines.append(f"Its design handles both indoor and outdoor environments, with construction suited to local climate conditions.")
        lines.append("Use it as part of a multi-camera setup for complete property surveillance coverage.")
    elif 'network' in cat_lower or 'access point' in cat_lower or 'router' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Designed for networking in small to medium businesses, schools, hotels, and residential buildings in Qatar.")
        lines.append(f"The {name} helps build a stable, high-performance network infrastructure for daily operations.")
        lines.append(f"It integrates easily with existing network equipment for straightforward deployment.")
    elif 'audio' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Perfect for public address and audio systems in schools, mosques, shopping malls, offices, and commercial buildings across Qatar.")
        lines.append(f"The {name} delivers clear, consistent audio for announcements, background music, and emergency alerts.")
        lines.append(f"Connects easily with existing audio infrastructure for professional installation.")
    elif 'smart home' in cat_lower or 'smart' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Enhance your smart home or office setup in Qatar with reliable automation and control from the {name}.")
        lines.append(f"Ideal for improving convenience, security, and energy efficiency in modern spaces.")
        lines.append(f"Compatible with standard protocols for straightforward setup and daily use.")
    elif 'cable' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Essential for structured cabling in data centers, offices, security systems, and residential installations across Qatar.")
        lines.append(f"The {name} provides reliable signal transmission for network data, video, and audio systems.")
        lines.append(f"Built to meet industry standards for performance and long-term durability.")
    elif 'accessor' in cat_lower or 'mount' in cat_lower or 'bracket' in cat_lower or 'junction' in cat_lower or 'box' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Provides reliable mounting and secure installation for CCTV cameras and other equipment in Qatar.")
        lines.append(f"Built from durable materials suited for indoor and outdoor use in local conditions.")
        lines.append(f"Designed for straightforward installation with standard tools and equipment.")
    elif 'cabinet' in cat_lower or 'rack' in cat_lower:
        lines.append("### Applications")
        lines.append(f"Ideal for organizing network and AV equipment in server rooms, data centers, and commercial installations across Qatar.")
        lines.append(f"The {name} keeps equipment secure, ventilated, and neatly organized.")
        lines.append(f"Standard sizing ensures compatibility with most rack-mountable devices.")
    else:
        lines.append("### Applications")
        lines.append(f"Suitable for a wide range of commercial and residential applications in Qatar.")
        lines.append(f"The {name} adapts to various use cases and installation environments.")
        lines.append("")

    name_lower = name.lower()
    price_str = f"QAR {price:.2f}" if price else "competitive pricing"

    qa = []
    if any(kw in name_lower for kw in ["camera", "cctv", "security camera", "ip camera"]):
        qa.append((f"Is the {name} suitable for outdoor use in Qatar's climate?",
                   f"Yes. The {name} is built with weather-resistant construction designed to withstand Qatar's hot and humid conditions. It operates reliably in both indoor and outdoor environments throughout the year."))
        qa.append((f"Does the {name} include warranty in Qatar?",
                   f"Yes, the {name} comes with a manufacturer warranty. Contact Secuview for specific warranty terms, coverage details, and after-sales support in Doha."))
        qa.append((f"Can I integrate the {name} with an existing CCTV system?",
                   f"With ONVIF support and standard IP camera protocols, the {name} integrates with most NVRs and CCTV management systems commonly used in Qatar."))
    elif any(kw in name_lower for kw in ["switch", "router", "access point", "extender", "poe"]):
        qa.append((f"Is the {name} easy to set up?",
                   f"Yes. The {name} is designed for straightforward installation. For best performance, follow the included setup guide. Secuview offers installation support across Qatar."))
        qa.append((f"What is the delivery time for the {name} in Qatar?",
                   f"The {name} is in stock and available for fast delivery across Doha and all regions of Qatar. Contact Secuview for current delivery estimates."))
    elif any(kw in name_lower for kw in ["speaker", "amplifier", "audio", "pa", "sound", "microphone", "public address"]):
        qa.append((f"Can the {name} integrate with existing audio equipment?",
                   f"Yes. The {name} is designed to work with most standard PA and audio systems. Contact Secuview to confirm compatibility with your existing setup in Qatar."))
        qa.append((f"Does Secuview offer professional installation for the {name}?",
                   f"Yes. Secuview offers professional installation services for customers in Doha and across Qatar. Contact us for a quote tailored to your premises."))
    elif any(kw in name_lower for kw in ["cable", "coaxial", "cat5", "cat6", "cat7", "hdmi", "vga", "rg59"]):
        qa.append((f"What lengths are available for the {name}?",
                   f"The {name} is available in standard lengths suitable for typical installations in Qatar. Contact Secuview for specific length requirements and custom orders."))
        qa.append((f"Is the {name} suitable for outdoor use in Qatar?",
                   f"Depending on the cable type, some variants are suitable for outdoor installation. Contact Secuview to confirm the best option for your specific environment."))
    elif any(kw in name_lower for kw in ["bracket", "mount", "junction box", "enclosure"]):
        qa.append((f"Is the {name} compatible with standard equipment?",
                   f"Yes. The {name} is designed to work with standard equipment sold by Secuview in Qatar. Check the dimensions above for exact compatibility."))
        qa.append((f"What material is the {name} made from?",
                   f"The {name} is constructed from durable materials suited for long-term use in Qatar's environment. See the product specifications above for details."))
    elif any(kw in name_lower for kw in ["cabinet", "rack", "server"]):
        qa.append((f"What size equipment fits the {name}?",
                   f"The {name} is built to standard sizing for compatibility with most rack-mountable devices. Check the specifications above for exact dimensions."))
        qa.append((f"Does the {name} include mounting hardware?",
                   f"The {name} includes the necessary mounting hardware for standard installations. Contact Secuview for specific installation requirements in Qatar."))
    else:
        qa.append((f"What is the price of the {name} in Qatar?",
                   f"The {name} is priced at {price_str}. Contact Secuview for the latest pricing and availability."))
        qa.append((f"Where can I buy the {name} in Qatar?",
                   f"Purchase the {name} directly from Secuview. Order via WhatsApp or visit our showroom in Doha for a hands-on demonstration."))

    lines.append("### Frequently Asked Questions")
    for q, a in qa:
        lines.append(f"**{q}**")
        lines.append(a)
        lines.append("")

    return "\n".join(lines)

def main():
    processed = 0
    updated = 0
    errors = []

    for fname in sorted(os.listdir(PRODUCTS_DIR)):
        if not fname.endswith(".md"):
            continue
        fpath = os.path.join(PRODUCTS_DIR, fname)
        processed += 1

        with open(fpath, "r", encoding="utf-8") as f:
            raw = f.read()

        fm, body = parse_frontmatter(raw)
        if fm is None:
            errors.append(f"{fname}: invalid frontmatter")
            continue

        body = body.lstrip("\n")

        overview_match = re.search(r'^## Overview$(.*?)(?=^## |\Z)', body, re.MULTILINE | re.DOTALL)
        gallery_match = re.search(r'^## Gallery', body, re.MULTILINE)

        if not gallery_match:
            continue

        gallery_start = gallery_match.start()

        new_content = generate_content(fm)

        new_body = (
            "## Overview\n\n"
            + new_content
            + "\n\n"
            + body[gallery_start:]
        )

        new_raw = "---\n" + yaml.dump(fm, default_flow_style=False, allow_unicode=True).strip() + "\n---\n\n" + new_body

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_raw)

        updated += 1

    print(f"Processed: {processed}")
    print(f"Updated: {updated}")
    print(f"Errors: {len(errors)}")
    for e in errors:
        print(f"  - {e}")

if __name__ == "__main__":
    main()
