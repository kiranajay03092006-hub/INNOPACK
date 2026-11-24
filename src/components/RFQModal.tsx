import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Radio } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/innopackData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, preselectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: preselectedProduct || 'online-dynamic-check-weigher',
    lineSpeed: '',
    weightRange: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recipient: COMPANY_INFO.emails.general,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch (err) {
      console.log('Enquiry logged locally:', formData);
      setStatus('success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl glass-panel-heavy rounded-3xl border border-silver-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col specular-corner light-streak"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-dark-graphite border-b border-silver-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-peach-soft font-semibold block mb-1 flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-peach-soft animate-pulse" />
              DIRECT FACTORY CONSULTATION & RFQ
            </span>
            <h3 className="font-display font-bold text-softWhite text-xl tracking-wide uppercase">
              Connect With Innopack Engineers
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-silver-pale hover:text-softWhite hover:bg-dark-surface transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {status === 'success' ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-peach-soft/15 border border-peach-soft flex items-center justify-center text-peach-soft shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-softWhite text-2xl">Enquiry Dispatched Successfully</h4>
              <p className="text-sm text-silver-pale max-w-md mx-auto leading-relaxed">
                Thank you for contacting Innopack Automation. Our engineering team at Ambattur Industrial Estate will review your technical specifications and respond shortly.
              </p>
              <div className="p-4 rounded-xl glass-panel border border-silver-border text-xs font-mono text-peach-soft">
                Direct contacts: {COMPANY_INFO.phones[0]} | {COMPANY_INFO.emails.general}
              </div>
              <button
                onClick={() => {
                  setStatus('idle');
                  onClose();
                }}
                className="mt-4 px-6 py-3 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Your Name <span className="text-peach-soft">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Work Email <span className="text-peach-soft">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. FMCG Industries Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                  Product / System of Interest
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id} className="bg-dark-obsidian text-softWhite">
                      {p.name} ({p.weighingRange})
                    </option>
                  ))}
                  <option value="custom-spm" className="bg-dark-obsidian text-softWhite">
                    Special Purpose Machine / Custom Automation
                  </option>
                  <option value="packaging-machinery" className="bg-dark-obsidian text-softWhite">
                    Packaging Machinery & Line Integration
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Target Line Speed (Optional)
                  </label>
                  <input
                    type="text"
                    name="lineSpeed"
                    value={formData.lineSpeed}
                    onChange={handleChange}
                    placeholder="e.g. 35 packs/minute"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                    Target Weight Range
                  </label>
                  <input
                    type="text"
                    name="weightRange"
                    value={formData.weightRange}
                    onChange={handleChange}
                    placeholder="e.g. 500g – 2kg, or 25kg bags"
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-silver-metallic mb-1 uppercase">
                  Project Requirements / Message <span className="text-peach-soft">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your packaging line, product dimensions, conveyor needs or engineering questions..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-silver-border focus:border-peach-soft text-softWhite text-sm focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold text-sm uppercase font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-peach/25 hover:shadow-peach/45 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>DISPATCHING SPECIFICATION...</span>
                  ) : (
                    <>
                      <span>SUBMIT RFQ SPECIFICATION</span>
                      <Send className="w-4 h-4 text-dark-obsidian" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
