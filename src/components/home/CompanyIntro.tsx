import React from 'react';
import { COMPANY_INFO } from '../../data/innopackData';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  Award, 
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers
} from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface CompanyIntroProps {
  onLearnMore: () => void;
  onOpenRFQ: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore, onOpenRFQ }) => {
  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-b border-silver-border">
      {/* Background Volumetric Peach Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Layout (BusyBox Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Imagery & Glass Info Panel Overlay */}
          <div className="lg:col-span-5 space-y-6">
            <GlassTiltCard className="p-2 border border-silver-border specular-corner">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="/assets/aboutus.png" 
                  alt="Innopack Automation Ambattur Manufacturing Facility" 
                  className="w-full h-84 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-dark-obsidian/40 to-transparent"></div>
                
                {/* Floating Translucent Location Glass Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-heavy border border-silver-border shadow-2xl">
                  <div className="flex items-center gap-2 text-peach-soft font-mono text-xs mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>MANUFACTURING LOCATION</span>
                  </div>
                  <div className="text-sm font-display font-bold text-softWhite">
                    Ambattur Industrial Estate, Chennai – 600098
                  </div>
                  <div className="text-xs text-silver-pale font-mono mt-0.5">
                    SIDCO Industrial Estate • Tamil Nadu, India
                  </div>
                </div>
              </div>
            </GlassTiltCard>

            {/* SPM Division Callout in Frosted Glass */}
            <div className="p-5 rounded-2xl glass-panel space-y-2 border border-peach-soft/30 light-streak">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-peach-soft font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  SPM Division • ACMAA
                </span>
                <a 
                  href={COMPANY_INFO.spmPartnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-softWhite hover:text-peach-soft inline-flex items-center gap-1 transition-colors"
                >
                  <span>acmaa.net</span>
                  <ExternalLink className="w-3 h-3 text-peach-soft" />
                </a>
              </div>
              <p className="text-xs text-silver-pale leading-relaxed">
                Special Purpose Machine (SPM) division serving automotive, engineering, and FMCG automation requirements across India and overseas.
              </p>
            </div>
          </div>

          {/* Right Column: Company Information & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              <Building2 className="w-3.5 h-3.5 text-peach-soft" />
              <span>SECTION 08 — COMPANY INTRODUCTION</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
                TWO DECADES OF <br />
                <span className="text-peach-gradient">PRECISION ENGINEERING.</span>
              </h2>
              <p className="text-base sm:text-lg text-silver-pale font-medium font-sans">
                "Innopack Automation production units are located in the Ambattur Industrial area in the cosmopolitan city of Chennai, India."
              </p>
            </div>

            <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans font-normal">
              Innopack designs, manufactures and supplies state-of-the-art packing machines, on-line check weighers, and automation solutions for a wide range of products to all FMCG industries as well as sectors such as flour, dal, rice, lube oil, detergents, sweets, bakery, vermicelli, and macaroni.
            </p>

            <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans font-normal">
              For over two decades we have been in the machinery manufacturing industry, particularly in the field of manufacturing SPMs (Special Purpose Machines) for automobile industries, and diversified into the manufacturing of packing machines, check weighers, and automation solutions for export under the headship of the Innopack Automation team.
            </p>

            {/* Engineering Highlights in Translucent Glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel space-y-1 border border-silver-border">
                <div className="text-peach-soft font-bold font-display text-base">In-House Manufacturing</div>
                <p className="text-xs text-silver-pale leading-relaxed">Complete mechanical fabrication, toolless assembly, and dynamic loadcell testing units located in Ambattur.</p>
              </div>
              <div className="p-4 rounded-xl glass-panel space-y-1 border border-silver-border">
                <div className="text-peach-soft font-bold font-display text-base">International Exports</div>
                <p className="text-xs text-silver-pale leading-relaxed">Trusted continuous installations operating across the Sultanate of Oman, United Arab Emirates, and India.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onLearnMore}
                className="px-7 py-3.5 rounded-xl bg-peach-soft text-dark-obsidian font-display font-bold text-xs uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-lg shadow-peach/25 flex items-center gap-2"
              >
                <span>LEARN MORE ABOUT INNOPACK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="px-7 py-3.5 rounded-xl glass-panel hover:border-peach-soft/50 text-softWhite text-xs font-mono uppercase tracking-wider transition-all"
              >
                REQUEST PLANT CONSULTATION
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
