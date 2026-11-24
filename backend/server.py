import os
import json
import re
import smtplib
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify, send_from_directory, send_file

DIST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "dist"))

app = Flask(__name__, static_folder=DIST_DIR, static_url_path="")

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")
os.makedirs(DATA_DIR, exist_ok=True)
ENQUIRIES_FILE = os.path.join(DATA_DIR, "enquiries.json")

# SMTP Configuration from Environment
SMTP_SERVER = os.environ.get("SMTP_SERVER", "")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
DEFAULT_RECIPIENT = os.environ.get("ENQUIRY_RECIPIENT", "info@innopackautomation.com")
BACKUP_RECIPIENT = os.environ.get("BACKUP_RECIPIENT", "elan@innopackautomation.com")

def save_enquiry(entry):
    entries = []
    if os.path.exists(ENQUIRIES_FILE):
        try:
            with open(ENQUIRIES_FILE, "r", encoding="utf-8") as f:
                entries = json.load(f)
        except Exception:
            entries = []
    entries.append(entry)
    with open(ENQUIRIES_FILE, "w", encoding="utf-8") as f:
        json.dump(entries, f, indent=2)

def is_valid_email(email):
    return bool(re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email))

def dispatch_email(subject, body, sender_email):
    if SMTP_SERVER and SMTP_USER and SMTP_PASSWORD:
        try:
            msg = MIMEMultipart()
            msg["From"] = SMTP_USER
            msg["To"] = f"{DEFAULT_RECIPIENT}, {BACKUP_RECIPIENT}"
            msg["Subject"] = f"[Innopack Website Enquiry] {subject}"
            msg["Reply-To"] = sender_email
            msg.attach(MIMEText(body, "plain"))

            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=10) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)
            return True, "Email dispatched via configured SMTP server."
        except Exception as e:
            return False, f"SMTP dispatch failed: {str(e)}"
    else:
        print(f"\n[INNOPACK ENQUIRY LOGGED]")
        print(f"To: {DEFAULT_RECIPIENT}, {BACKUP_RECIPIENT}")
        print(f"Subject: {subject}")
        print(f"Reply-To: {sender_email}")
        print(f"Body:\n{body}\n")
        return True, "Enquiry recorded in local industrial database (SMTP server credentials pending in environment)."

@app.route("/api/contact", methods=["POST"])
def handle_contact():
    data = request.get_json() or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    subject = data.get("subject", "").strip()
    message = data.get("message", "").strip()
    honeypot = data.get("honeypot", "")

    if honeypot:
        return jsonify({"status": "rejected", "message": "Bot detected"}), 400

    if not name or not email or not subject or not message:
        return jsonify({"status": "error", "message": "All fields are required."}), 400

    if not is_valid_email(email):
        return jsonify({"status": "error", "message": "Invalid email address format."}), 400

    enquiry_record = {
        "id": f"ENQ-{int(datetime.utcnow().timestamp())}",
        "type": "contact_form",
        "name": name,
        "email": email,
        "subject": subject,
        "message": message,
        "ip": request.remote_addr,
        "timestamp": datetime.utcnow().isoformat()
    }
    save_enquiry(enquiry_record)

    body = f"""New Contact Form Enquiry from Website:
----------------------------------------
Name: {name}
Email: {email}
Subject: {subject}
Timestamp: {enquiry_record['timestamp']}
Message:
{message}
----------------------------------------
Innopack Automation Engineering Support System
Ambattur Industrial Estate, Chennai
"""
    success, note = dispatch_email(subject, body, email)

    return jsonify({
        "status": "success",
        "message": "Enquiry received successfully.",
        "enquiryId": enquiry_record["id"],
        "note": note
    })

@app.route("/api/enquiry", methods=["POST"])
def handle_rfq():
    data = request.get_json() or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    company = data.get("company", "").strip()
    phone = data.get("phone", "").strip()
    product = data.get("product", "").strip()
    line_speed = data.get("lineSpeed", "").strip()
    weight_range = data.get("weightRange", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"status": "error", "message": "Name, email, and message are required."}), 400

    if not is_valid_email(email):
        return jsonify({"status": "error", "message": "Invalid email address format."}), 400

    rfq_record = {
        "id": f"RFQ-{int(datetime.utcnow().timestamp())}",
        "type": "rfq_consultation",
        "name": name,
        "email": email,
        "company": company,
        "phone": phone,
        "product": product,
        "lineSpeed": line_speed,
        "weightRange": weight_range,
        "message": message,
        "ip": request.remote_addr,
        "timestamp": datetime.utcnow().isoformat()
    }
    save_enquiry(rfq_record)

    body = f"""New RFQ & Technical Consultation Request:
----------------------------------------
Product Selected: {product}
Customer Name: {name}
Email: {email}
Company: {company}
Phone / WhatsApp: {phone}
Target Line Speed: {line_speed}
Target Weight Range: {weight_range}
Timestamp: {rfq_record['timestamp']}

Technical Specification / Message:
{message}
----------------------------------------
Innopack Automation Engineering Support Hub
Ambattur Industrial Estate, Chennai
"""
    success, note = dispatch_email(f"RFQ: {product} - {company or name}", body, email)

    return jsonify({
        "status": "success",
        "message": "RFQ received successfully.",
        "rfqId": rfq_record["id"],
        "note": note
    })

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "online",
        "service": "Innopack Automation Production Server",
        "facility": "Ambattur Works, Chennai",
        "timestamp": datetime.utcnow().isoformat()
    })

# Serve frontend build
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path != "" and os.path.exists(os.path.join(DIST_DIR, path)):
        return send_from_directory(DIST_DIR, path)
    else:
        index_file = os.path.join(DIST_DIR, "index.html")
        if os.path.exists(index_file):
            return send_file(index_file)
        return "Dist index.html not found. Please run 'npm run build'.", 404

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting Innopack Automation Server at http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
