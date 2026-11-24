import re
import json

def clean_html(html_str):
    # remove scripts and styles
    html_str = re.sub(r'<script.*?</script>', '', html_str, flags=re.S)
    html_str = re.sub(r'<style.*?</style>', '', html_str, flags=re.S)
    # replace block tags with newlines
    html_str = re.sub(r'<(div|p|h[1-6]|li|section|article|header|footer|td|th)[^>]*>', '\n', html_str)
    html_str = re.sub(r'<[^>]+>', ' ', html_str)
    # decode entities
    html_str = html_str.replace('&amp;', '&').replace('&nbsp;', ' ').replace('&#39;', "'").replace('&quot;', '"')
    lines = [l.strip() for l in html_str.split('\n') if l.strip()]
    return '\n'.join(lines)

pages = {
    'home': 'audit_data/pages/https___innopackautomation_com_.html',
    'about': 'audit_data/pages/https___innopackautomation_com_about_us.html',
    'products': 'audit_data/pages/https___innopackautomation_com_products.html',
    'contact': 'audit_data/pages/https___innopackautomation_com_contact_us.html'
}

for name, path in pages.items():
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    cleaned = clean_html(content)
    with open(f'audit_data/clean_{name}.txt', 'w', encoding='utf-8') as out:
        out.write(cleaned)
    print(f"Cleaned {name} -> audit_data/clean_{name}.txt ({len(cleaned)} chars)")

print("Done cleaning all pages!")
