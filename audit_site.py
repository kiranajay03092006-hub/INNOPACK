import urllib.request
import urllib.parse
import re
import os
import ssl
import json
from html.parser import HTMLParser

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.in_script = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'noscript'):
            self.in_script = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript'):
            self.in_script = False

    def handle_data(self, data):
        if not self.in_script:
            cleaned = data.strip()
            if cleaned:
                self.texts.append(cleaned)

def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            content_type = resp.headers.get('content-type', '')
            data = resp.read()
            return data, content_type
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        return None, None

def main():
    os.makedirs("audit_data/pages", exist_ok=True)
    os.makedirs("audit_data/assets", exist_ok=True)

    base_url = "https://innopackautomation.com/"
    visited_urls = set()
    queue = [base_url]

    # Additional known or common pages to check
    known_paths = [
        "", "about-us.html", "about.html", "products.html", "online-dynamic-check-weigher.html",
        "compact-check-weigher.html", "static-check-weigher.html", "contact.html", "contact-us.html",
        "careers.html", "industries.html", "services.html", "clients.html"
    ]
    for p in known_paths:
        full = urllib.parse.urljoin(base_url, p)
        if full not in queue:
            queue.append(full)

    all_links = set()
    all_images = set()
    all_pdfs = set()
    page_contents = {}

    while queue:
        current_url = queue.pop(0)
        # Normalize
        current_url = current_url.split('#')[0]
        if current_url in visited_urls:
            continue
        visited_urls.add(current_url)

        print(f"Crawling: {current_url}")
        data, content_type = fetch_url(current_url)
        if not data:
            continue

        if 'text/html' in content_type or current_url.endswith('.html') or current_url == base_url or current_url.endswith('/'):
            html_text = data.decode('utf-8', errors='ignore')
            safe_name = re.sub(r'[^a-zA-Z0-9]', '_', current_url) + ".html"
            with open(f"audit_data/pages/{safe_name}", "w", encoding="utf-8") as f:
                f.write(html_text)

            # extract text
            parser = TextExtractor()
            parser.feed(html_text)
            page_contents[current_url] = {
                "title": re.search(r'<title>(.*?)</title>', html_text, re.I | re.S).group(1).strip() if re.search(r'<title>(.*?)</title>', html_text, re.I | re.S) else "",
                "text": parser.texts
            }

            # Find links
            found_hrefs = re.findall(r'href=["\']([^"\']+)["\']', html_text)
            for h in found_hrefs:
                target = urllib.parse.urljoin(current_url, h).split('#')[0]
                if 'innopackautomation.com' in target:
                    if target.endswith(('.pdf', '.PDF')):
                        all_pdfs.add(target)
                    elif not any(target.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js', '.zip']):
                        if target not in visited_urls and target not in queue:
                            queue.append(target)
                elif target.endswith(('.pdf', '.PDF')):
                    all_pdfs.add(target)

            # Find images
            found_srcs = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|gif|svg|webp))["\']', html_text, re.I)
            for s in found_srcs:
                img_url = urllib.parse.urljoin(current_url, s)
                all_images.add(img_url)

            # Also find background-image urls
            bg_imgs = re.findall(r'url\(["\']?([^"\'\)]+\.(?:png|jpg|jpeg|gif|svg|webp))["\']?\)', html_text, re.I)
            for bg in bg_imgs:
                img_url = urllib.parse.urljoin(current_url, bg)
                all_images.add(img_url)

    print(f"\nCrawled {len(visited_urls)} pages.")
    print(f"Found {len(all_images)} unique images.")
    print(f"Found {len(all_pdfs)} unique PDFs/documents.")

    # Save summary json
    with open("audit_data/extracted_pages.json", "w", encoding="utf-8") as f:
        json.dump(page_contents, f, indent=2)

    # Download images
    downloaded_assets = {}
    print("\nDownloading images...")
    for img_url in all_images:
        filename = os.path.basename(urllib.parse.urlparse(img_url).path)
        if not filename:
            continue
        dest = os.path.join("audit_data/assets", filename)
        if not os.path.exists(dest):
            data, _ = fetch_url(img_url)
            if data:
                with open(dest, "wb") as f:
                    f.write(data)
                downloaded_assets[img_url] = dest
                print(f"Saved: {filename}")

    # Download PDFs
    print("\nDownloading PDFs...")
    for pdf_url in all_pdfs:
        filename = os.path.basename(urllib.parse.urlparse(pdf_url).path)
        dest = os.path.join("audit_data/assets", filename)
        if not os.path.exists(dest):
            data, _ = fetch_url(pdf_url)
            if data:
                with open(dest, "wb") as f:
                    f.write(data)
                print(f"Saved PDF: {filename}")

    with open("audit_data/downloaded_assets.json", "w", encoding="utf-8") as f:
        json.dump(downloaded_assets, f, indent=2)

    print("\nAudit extraction complete!")

if __name__ == "__main__":
    main()
