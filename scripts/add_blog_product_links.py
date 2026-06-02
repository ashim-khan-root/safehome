"""
Add internal links from blog posts to relevant product pages.
For blog posts without any product links, adds a "Shop Related Products" section.
"""
import os, re

BLOG_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "content", "blog")

PRODUCT_SLUGS = {
    "4g-lte-router-guide-qatar.md": [
        ("4G LTE Router", "/products/secuview-11ac-1200mbps-wide-range-wireless-4g-lte-router/"),
    ],
    "cat6-vs-fiber-business-qatar.md": [
        ("Cat6 Network Cable 305m", "/products/secuview-bare-copper-23awg-cat6-network-cable/"),
        ("Cat6 CCA Cable 305m", "/products/secuview-cca-23awg-cat6-network-cable/"),
        ("HDMI Extender via Cat6", "/products/secuview-4k-60hz-hdmi-extender-60m-over-cat6-cascade-connection-supported/"),
        ("USB Extender via Cat5/6", "/products/secuview-usb-rj45-extender-150ft-usb-extension-via-cat5-5e-6-cable/"),
    ],
    "how-to-choose-poe-switch-cctv-qatar.md": [
        ("4-Port PoE Switch", "/products/secuview-4-port-poe-switch-with-1-uplink-gigabit-performance/"),
        ("8-Port PoE Switch 120W", "/products/secuview-120w-8-port-poe-switch-2-uplink-ports-10-100mbps-operation/"),
        ("16-Port PoE Switch 300W", "/products/secuview-16-port-gigabit-poe-switch-300w/"),
        ("24-Port PoE Switch", "/products/secuview-24-port-gigabit-poe-switch-fast-reliable-network-with-2-uplink-2-sfp/"),
    ],
    "mesh-wifi-vs-access-point-qatar-villa.md": [
        ("Dual Band Access Point 1200Mbps", "/products/secuview-1200mbps-dual-band-wireless-access-point/"),
        ("AX1800 WiFi 6 Access Point", "/products/secuview-ax1800-wi-fi-6-dualband-access-point/"),
        ("4G LTE Router", "/products/secuview-11ac-1200mbps-wide-range-wireless-4g-lte-router/"),
    ],
    "nvr-dvr-buying-guide-cctv-qatar.md": [
        ("16CH 4K PoE NVR", "/products/secuview-16ch-4k-hybrid-nvr-i-poe-built-in-onvif-support/"),
        ("8CH 4K NVR", "/products/secuview-8ch-4k-non-poe-nvr-fast-performance-onvif-support/"),
        ("16CH 4K Non-PoE NVR", "/products/secuview-16ch-4k-non-poe-hybrid-nvr-high-performance-onvif-support/"),
    ],
    "pa-system-guide-mosques-schools-qatar.md": [
        ("100W PA Amplifier", "/products/secuview-100w-public-address-power-amplifier-with-multiple-audio-sources/"),
        ("280W PA Amplifier", "/products/secuview-280w-public-address-amplifier-with-clear-sound/"),
        ("480W 4-Zone PA Amplifier", "/products/secuview-480w-public-address-amplifier-with-4-zones/"),
        ("10W Ceiling Speaker", "/products/secuview-10w-ceiling-speaker-clear-sound/"),
    ],
    "pa-system-maintenance-mosques-qatar.md": [
        ("100W PA Amplifier", "/products/secuview-100w-public-address-power-amplifier-with-multiple-audio-sources/"),
        ("6W Ceiling Speaker", "/products/secuview-6w-ceiling-speaker-powerful-sound-for-home-and-office/"),
        ("10W Volume Controller", "/products/secuview-10w-volume-controller-reliable-steel-build-wall-mount-design/"),
    ],
    "security-camera-installation-villa-qatar.md": [
        ("12MP Outdoor IP Camera", "/products/secuview-12mp-weatherproof-outdoor-ip-camera-smart-detection-onvif/"),
        ("6MP PTZ Camera", "/products/secuview-6mp-outdoor-ip-ptz-camera-auto-focus-lens-weatherproof/"),
        ("Camera Mount Bracket", "/products/secuview-1258-abs-indoor-outdoor-l-type-cctv-wall-mount-bracket/"),
        ("Junction Box", "/products/secuview-105mm-waterproof-metal-junction-box-for-security-cameras/"),
    ],
    "smart-home-automation-guide-qatar.md": [
        ("Smart Video Doorphone", "/products/secuview-10-inch-wifi-smart-video-doorphone/"),
        ("Solar 4G Security Camera", "/products/secuview-wireless-ip-outdoor-solar-powered-4g-security-camera/"),
    ],
    "top-5-security-cameras-qatar.md": [
        ("12MP Outdoor IP Camera", "/products/secuview-12mp-weatherproof-outdoor-ip-camera-smart-detection-onvif/"),
        ("6MP PTZ Camera", "/products/secuview-6mp-outdoor-ip-ptz-camera-auto-focus-lens-weatherproof/"),
        ("5MP Indoor IP Camera", "/products/secuview-5mp-indoor-ip-camera-two-way-audio-auto-tracking-onvif/"),
        ("Solar 4G Camera", "/products/secuview-wireless-ip-outdoor-solar-powered-4g-security-camera/"),
    ],
    "video-doorbell-smart-doorphone-guide-qatar.md": [
        ("Smart Video Doorphone", "/products/secuview-10-inch-wifi-smart-video-doorphone/"),
    ],
}

def main():
    updated = 0
    skipped = []

    for fname, products in PRODUCT_SLUGS.items():
        fpath = os.path.join(BLOG_DIR, fname)
        if not os.path.exists(fpath):
            skipped.append(f"{fname}: file not found")
            continue

        with open(fpath, "r", encoding="utf-8") as f:
            raw = f.read()

        if "/products/" in raw:
            skipped.append(f"{fname}: already has product links")
            continue

        section_lines = ["", "---", "", "### Shop Related Products", ""]
        for label, url in products:
            section_lines.append(f"- [{label}]({url})")
        section_lines.append("")

        section_text = "\n".join(section_lines)

        wa_match = re.search(r'\(https://wa\.me/\d+\?text=.*?\)', raw)
        if wa_match:
            insert_pos = wa_match.end()
            new_raw = raw[:insert_pos] + section_text + raw[insert_pos:]
        else:
            raw_lines = raw.split("\n")
            for i in range(len(raw_lines) - 1, -1, -1):
                if "Browse " in raw_lines[i] or "**Browse" in raw_lines[i]:
                    insert_pos = sum(len(l) + 1 for l in raw_lines[:i+1])
                    new_raw = raw[:insert_pos] + section_text + raw[insert_pos:]
                    break
            else:
                new_raw = raw.rstrip() + "\n" + section_text

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_raw)

        updated += 1

    print(f"Updated: {updated}")
    print(f"Skipped: {len(skipped)}")
    for s in skipped:
        print(f"  - {s}")

if __name__ == "__main__":
    main()
