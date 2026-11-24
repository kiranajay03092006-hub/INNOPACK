import React from 'react';
import { ArrowUpRight, ArrowRight, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/innopackData';

interface FinalCTAProps {
  onContact: () => void;
  onOpenRFQ: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContact, onOpenRFQ }) => {
  return (
    <section id="contact-section" className="cta relative bg-dark-obsidian pt-28 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Background Volumetric Glow & Centerline Axis (BusyBox .cta Pattern) */}
      <span className="absolute left-0 right-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-volumetric-peach blur-[170px] pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Main CTA Callout Container */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          <div className="bb-tag inline-flex">
            <span>READY TO COMMISSION YOUR PACKAGING LINE?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-[1.08]">
            <span className="block">STOP LOSING MARGIN TO PACKAGE GIVEAWAY</span>
            <span className="text-peach-gradient block">AND UNPLANNED LINE DOWNTIME.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic max-w-2xl mx-auto leading-relaxed font-sans">
            Consult our senior automation engineers in Ambattur, Chennai. We calculate dynamic tolerances, recommend tailored conveyor layouts, and provide formal machinery quotations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              onClick={onOpenRFQ}
              className="px-9 py-4 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-peach-soft/25 hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              <span>REQUEST ENGINEERING QUOTE</span>
              <span className="text-dark-obsidian font-mono text-sm">*</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onContact}
              className="px-8 py-4 rounded-xl glass-panel hover:border-peach-soft/50 text-softWhite font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>DIRECT AMBATTUR CONTACT</span>
            </button>
          </div>

          <div className="pt-2 text-xs font-mono text-silver-steel">
            <span>DIRECT TELEPHONE: {COMPANY_INFO.phones[0]} • TYPICAL RESPONSE WITHIN 4 BUSINESS HOURS</span>
          </div>

        </div>

        {/* Global Footer (.foot) */}
        <footer className="pt-16 border-t border-white/10 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/innopack_mark_peach.png" 
                  alt="Innopack Automation Logo" 
                  className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(244,183,165,0.4)]"
                />
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-lg text-softWhite tracking-tight">
                    Innopack
                  </span>
                  <span className="text-peach-soft font-mono text-xs font-semibold">
                    Automation®
                  </span>
                </div>
              </div>

              <p className="text-xs text-silver-metallic leading-relaxed font-sans max-w-sm">
                Engineering high-speed dynamic check weighers, automated packaging machinery, and custom industrial automation solutions since inception in Ambattur Industrial Estate, Chennai.
              </p>

              <div className="pt-2">
                <a 
                  href="http://www.acmaa.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-peach-soft hover:underline"
                >
                  <span>SISTER DIVISION: ACMAA SPM AUTOMATION</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Navigation Anchors */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-peach-champagne font-bold uppercase tracking-wider block">
                NAVIGATION
              </span>
              <ul className="space-y-2 text-xs font-sans text-silver-pale">
                <li><a href="#home" className="hover:text-peach-soft transition-colors">Home*</a></li>
                <li><a href="#problem-section" className="hover:text-peach-soft transition-colors">Packaging Challenges*</a></li>
                <li><a href="#solutions-section" className="hover:text-peach-soft transition-colors">Our Solutions*</a></li>
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Machinery Portfolio*</a></li>
                <li><a href="#industrial-supply" className="hover:text-peach-soft transition-colors">Industrial Products & Tools*</a></li>
                <li><a href="#customers-section" className="hover:text-peach-soft transition-colors">Client & Supplier Registry*</a></li>
              </ul>
            </div>

            {/* Machinery Lines */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-peach-champagne font-bold uppercase tracking-wider block">
                EQUIPMENT LINES
              </span>
              <ul className="space-y-2 text-xs font-sans text-silver-pale">
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Online Dynamic Weigher (10–30 kg)</a></li>
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Compact Check Weigher CW-03</a></li>
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Static Check Weigher (10–30 kg)</a></li>
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Special Purpose Machinery (SPMs)</a></li>
                <li><a href="#work-section" className="hover:text-peach-soft transition-colors">Custom Belt Conveyors</a></li>
              </ul>
            </div>

            {/* Verified Location & Telecom */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-peach-champagne font-bold uppercase tracking-wider block">
                HEADQUARTERS
              </span>
              <div className="space-y-2 text-xs text-silver-pale font-sans">
                <p className="leading-relaxed">
                  No. 96 - E, SIDCO Industrial Estate, Ambattur Industrial Estate, Chennai – 600098, Tamil Nadu, India
                </p>
                <p className="font-mono text-peach-soft pt-1">
                  Tel: {COMPANY_INFO.phones[0]}
                </p>
                <p className="font-mono text-silver-metallic">
                  Email: {COMPANY_INFO.emails.general}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-silver-steel">
            <span>© 2026 INNOPACK AUTOMATION. ALL RIGHTS RESERVED. AMBATTUR, CHENNAI, INDIA.</span>
            <div className="flex items-center gap-6">
              <span>DESIGNED TO STRICT BUSYBOX.IO STANDARDS</span>
              <span>PEACH & SILVER GLASSMORPHISM</span>
            </div>
          </div>

        </footer>

      </div>
    </section>
  );
};
