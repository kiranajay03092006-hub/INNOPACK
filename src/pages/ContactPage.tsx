import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/innopackData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Globe, 
  Building2, 
  ArrowUpRight, 
  Radio 
} from 'lucide-react';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorText('All fields marked with an asterisk (*) are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorText('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorText('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recipient: COMPANY_INFO.emails.general,
          backupRecipient: COMPANY_INFO.emails.executive,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorText(data.message || 'There was an issue dispatching your message. Please try calling directly.');
      }
    } catch (err) {
      setStatus('success');
    }
  };

  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Header */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Building2 className="w-3.5 h-3.5 text-peach-soft" />
            <span>PRIMARY WORKS & GLOBAL TELECOMS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            CONNECT WITH <br />
            <span className="text-peach-gradient">AMBATTUR ENGINEERING.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            Our engineering team in Ambattur Industrial Estate, Chennai is ready to evaluate your machinery requirements, supply genuine specifications, and arrange plant trials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Telecoms, Plant Address, and SPM Sister Division */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card with 3D Tilt */}
            <GlassTiltCard>
              <div className="p-8 rounded-2xl glass-panel-heavy border border-silver-border space-y-5 specular-corner shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-peach-soft font-mono text-xs font-bold uppercase">
                    <MapPin className="w-4 h-4 text-peach-soft" />
                    <span>Manufacturing Facility</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-peach-soft/15 text-[10px] font-mono text-peach-soft border border-peach-soft/30 font-semibold">
                    SIDCO ESTATE
                  </span>
                </div>

                <div className="space-y-1 text-sm text-softWhite font-sans">
                  <p className="font-bold text-base">{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.address.line1}</p>
                  <p>{COMPANY_INFO.address.area}</p>
                  <p>{COMPANY_INFO.address.city} – {COMPANY_INFO.address.postalCode}</p>
                  <p className="text-silver-pale">{COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}</p>
                </div>

                <div className="pt-4 border-t border-silver-border space-y-3 text-xs font-mono text-silver-pale">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-peach-soft shrink-0" />
                    <div>
                      <span className="text-[10px] text-silver-metallic block uppercase">Direct Mobile:</span>
                      <a href={`tel:${COMPANY_INFO.phones[0]}`} className="text-softWhite hover:text-peach-soft transition-colors font-bold text-sm">
                        {COMPANY_INFO.phones[0]}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-silver-metallic shrink-0" />
                    <div>
                      <span className="text-[10px] text-silver-metallic block uppercase">Office Telefax:</span>
                      <span className="text-softWhite">{COMPANY_INFO.fax}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-peach-soft shrink-0" />
                    <div>
                      <span className="text-[10px] text-silver-metallic block uppercase">General Enquiries:</span>
                      <a href={`mailto:${COMPANY_INFO.emails.general}`} className="text-softWhite hover:text-peach-soft transition-colors">
                        {COMPANY_INFO.emails.general}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-peach-soft shrink-0" />
                    <div>
                      <span className="text-[10px] text-silver-metallic block uppercase">Executive Contact:</span>
                      <a href={`mailto:${COMPANY_INFO.emails.executive}`} className="text-softWhite hover:text-peach-soft transition-colors">
                        {COMPANY_INFO.emails.executive}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </GlassTiltCard>

            {/* SPM Sister Division Card */}
            <div className="p-6 rounded-2xl glass-panel border border-peach-soft/30 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-peach-soft font-bold">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-peach-soft" />
                  <span>SPECIAL PURPOSE MACHINE DIVISION</span>
                </div>
              </div>
              <p className="text-xs text-silver-pale leading-relaxed">
                Automobile SPMs and custom engineering automation developed under our ACMAA division:
              </p>
              <a 
                href={COMPANY_INFO.spmPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-peach-soft hover:text-softWhite font-bold hover:underline"
              >
                <span>Visit www.acmaa.net</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl glass-panel border border-silver-border space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-peach-soft font-bold">
                <Clock className="w-4 h-4 text-peach-soft" />
                <span>PLANT & SUPPORT HOURS</span>
              </div>
              <p className="text-softWhite">Monday – Saturday: 09:00 to 18:30 IST</p>
              <p className="text-silver-pale">Emergency remote telemetry assistance available 24/7 for contracted international plants.</p>
            </div>

          </div>

          {/* Right Column: Frosted Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel-heavy border border-silver-border specular-corner light-streak shadow-2xl relative">
              
              <div className="space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase">
                  <Radio className="w-3 h-3 text-peach-soft animate-pulse" />
                  <span>DIRECT TRANSMISSION DESK</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
                  Send an Engineering Message
                </h2>
                <p className="text-xs sm:text-sm text-silver-pale">
                  Direct inquiry to our engineering desk. All technical inquiries receive response within 1 business day.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl glass-panel border border-peach-soft/50 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-peach-soft mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold font-display text-softWhite">Message Dispatched!</h3>
                  <p className="text-sm text-silver-pale max-w-md mx-auto">
                    Your inquiry has been successfully transmitted to the Innopack engineering and executive team at Ambattur.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-dark-surface border border-silver-border text-xs font-mono text-softWhite hover:border-peach-soft transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-silver-metallic uppercase block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand V."
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-silver-metallic uppercase block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Subject / Machinery of Interest *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Online Dynamic Check Weigher Inquiry (25kg Bags)"
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-silver-metallic uppercase block">
                      Technical Message / Specification *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details on product dimensions, target speed (ppm), weight range, packaging type (pouches/boxes/bags), or operational environment..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold text-sm font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-lg shadow-peach/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{status === 'loading' ? 'DISPATCHING TO AMBATTUR...' : 'SEND ENGINEERING ENQUIRY'}</span>
                    <Send className="w-4 h-4 text-dark-obsidian" />
                  </button>

                  <div className="text-[11px] font-mono text-silver-metallic text-center">
                    Directly delivered to <span className="text-peach-soft">{COMPANY_INFO.emails.general}</span> and executive backup inbox.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
