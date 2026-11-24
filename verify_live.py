import urllib.request
import urllib.parse
import json

BASE_URL = "http://localhost:5000"

def test_endpoint(url, method="GET", data=None):
    req = urllib.request.Request(url, method=method)
    if data:
        req.add_header("Content-Type", "application/json")
        encoded = json.dumps(data).encode("utf-8")
    else:
        encoded = None
    try:
        with urllib.request.urlopen(req, data=encoded, timeout=5) as r:
            status = r.status
            content_type = r.headers.get("Content-Type", "")
            content_len = len(r.read())
            return status, content_type, content_len, None
    except Exception as e:
        return 500, "", 0, str(e)

print("=== INNOPACK REDESIGNED WEBSITE TEST SUITE ===")

# Test 1: Homepage
s, ct, l, err = test_endpoint(f"{BASE_URL}/")
print(f"1. Homepage (/) : Status {s}, Content-Type: {ct}, Size: {l} bytes (Err: {err})")

# Test 2: Health API
s, ct, l, err = test_endpoint(f"{BASE_URL}/api/health")
print(f"2. Health API (/api/health) : Status {s}, Content-Type: {ct}, Size: {l} bytes")

# Test 3: Asset Logo
s, ct, l, err = test_endpoint(f"{BASE_URL}/assets/innopackautomation.png")
print(f"3. Logo (/assets/innopackautomation.png) : Status {s}, Content-Type: {ct}, Size: {l} bytes")

# Test 4: Product Image
s, ct, l, err = test_endpoint(f"{BASE_URL}/assets/01s.png")
print(f"4. Product Image (/assets/01s.png) : Status {s}, Content-Type: {ct}, Size: {l} bytes")

# Test 5: Product PDF Catalog
s, ct, l, err = test_endpoint(f"{BASE_URL}/assets/Innopack_Checkweigher_Catalog.pdf")
print(f"5. PDF Catalog (/assets/Innopack_Checkweigher_Catalog.pdf) : Status {s}, Content-Type: {ct}, Size: {l} bytes")

# Test 6: Machine Video
s, ct, l, err = test_endpoint(f"{BASE_URL}/assets/Innopack_Checkweigher_Video_01.mp4")
print(f"6. Machine Video (/assets/Innopack_Checkweigher_Video_01.mp4) : Status {s}, Content-Type: {ct}, Size: {l} bytes")

# Test 7: Contact Form POST API
contact_payload = {
    "name": "Industrial Test Engineer",
    "email": "engineer@fmcg-testing.com",
    "subject": "Check Weigher CW-03 Enquiry for Bakery Line",
    "message": "We require quotation and conveyor dimension drawing for compact check weigher operating at 40 packs/min."
}
s, ct, l, err = test_endpoint(f"{BASE_URL}/api/contact", method="POST", data=contact_payload)
print(f"7. Contact Form API (/api/contact) : Status {s}, Content-Type: {ct}, Size: {l} bytes (Err: {err})")

# Test 8: RFQ Form POST API
rfq_payload = {
    "name": "Plant Automation Manager",
    "email": "manager@oman-milling.com",
    "company": "Salalah Agro Packaging",
    "phone": "+968 9123 4567",
    "product": "online-dynamic-check-weigher",
    "lineSpeed": "30 cartons/min",
    "weightRange": "10-25 kg bags",
    "message": "Need pricing for dynamic check weigher with automated pushing mechanism and LAN telemetry."
}
s, ct, l, err = test_endpoint(f"{BASE_URL}/api/enquiry", method="POST", data=rfq_payload)
print(f"8. RFQ Form API (/api/enquiry) : Status {s}, Content-Type: {ct}, Size: {l} bytes (Err: {err})")

print("\nAll integration tests executed!")
