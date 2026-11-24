import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../../data/innopackData';

interface ContactCTAProps {
  onContact: () => void;
  onOpenRFQ: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onContact, onOpenRFQ }) => {
  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-t border-silver-border">
      {/* Background Volumetric Peach & Silver Flares */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-volumetric-peach blur-[140px] pointer-events-none opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel-heavy p-8 sm:p-12 md:p-16 relative overflow-hidden specular-corner light-streak border border-silver-border shadow-2xl">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-peach-soft animate-pulse"></span>
              <span>SECTION 11 — DIRECT FACTORY CONSULTATION & RFQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              LET'S BUILD YOUR NEXT <br />
              <span className="text-peach-gradient">INDUSTRIAL SOLUTION.</span>
            </h2>

            <p className="text-base sm:text-lg text-silver-pale leading-relaxed font-sans">
              Have a packaging or automation requirement? Connect with our team to discuss your engineering needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenRFQ}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-display font-bold text-sm uppercase font-mono tracking-wider transition-all duration-300 shadow-xl shadow-peach/30 hover:shadow-peach/50 active:scale-95 flex items-center gap-2"
              >
                <span>REQUEST DETAILED RFQ</span>
                <ArrowRight className="w-4 h-4 text-dark-obsidian" />
              </button>

              <button
                onClick={onContact}
                className="px-8 py-4 rounded-xl glass-panel hover:border-peach-soft/50 text-softWhite font-display font-semibold text-sm uppercase font-mono tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-peach/10"
              >
                CONTACT FACTORY DIRECT
              </button>
            </div>

            {/* Quick Contact Footer Bar */}
            <div className="pt-8 border-t border-silver-border flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-silver-pale">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-peach-soft" />
                <span>Ambattur Industrial Estate, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-peach-soft" />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-softWhite transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-peach-soft" />
                <a href={`mailto:${COMPANY_INFO.emails.general}`} className="hover:text-softWhite transition-colors">
                  {COMPANY_INFO.emails.general}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
