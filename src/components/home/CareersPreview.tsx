import React from 'react';
import { CAREER_ROLES } from '../../data/innopackData';
import { Briefcase, ArrowRight, Sparkles, Send, MapPin, Clock } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface CareersPreviewProps {
  onGoToCareers: () => void;
  onOpenRFQ: () => void;
}

export const CareersPreview: React.FC<CareersPreviewProps> = ({ onGoToCareers, onOpenRFQ }) => {
  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Volumetric Peach Glow */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-peach-soft" />
            <span>TALENT & ENGINEERING CAREERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-softWhite">
            BUILD THE FUTURE OF <br />
            <span className="text-peach-gradient">AUTOMATION ENGINEERING.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans">
            Innopack Automation offers an agile, precision-driven workplace in Ambattur Industrial Estate with hands-on exposure to high-speed dynamic loadcells, PLC firmware, and automated packaging machinery.
          </p>
        </div>

        {/* Roles Grid with 3D Glass Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CAREER_ROLES.map((role, idx) => (
            <GlassTiltCard key={idx} className="h-full">
              <div className="p-7 glass-panel rounded-2xl h-full flex flex-col justify-between space-y-5 border border-silver-border hover:border-peach-soft/50 group light-streak">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-3 py-1 rounded-full bg-peach-dim text-peach-soft font-semibold border border-peach-soft/30">
                      {role.department}
                    </span>
                    <span className="text-silver-pale flex items-center gap-1">
                      <Clock className="w-3 h-3 text-peach-soft" />
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors leading-snug">
                    {role.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-silver-metallic">
                    <MapPin className="w-3.5 h-3.5 text-peach-champagne" />
                    <span>{role.location}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-silver-pale pt-3 border-t border-silver-border">
                    {role.responsibilities.slice(0, 2).map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft mt-1.5 shrink-0 shadow-[0_0_6px_#F4B7A5]"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-silver-border">
                  <button
                    onClick={onGoToCareers}
                    className="w-full py-3 px-4 rounded-xl bg-silver-steel/20 hover:bg-peach-soft hover:text-dark-obsidian border border-silver-border hover:border-peach-soft text-xs font-mono font-bold text-softWhite flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(244,183,165,0.25)]"
                  >
                    <span>VIEW ROLE SPECIFICATION</span>
                    <ArrowRight className="w-3.5 h-3.5 text-peach-soft group-hover:text-dark-obsidian transition-colors" />
                  </button>
                </div>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Clean Application Callout Floating Glass Banner */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-heavy border border-silver-border specular-corner flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-peach-champagne font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-peach-champagne" />
              <span>Speculative Applications Welcome</span>
            </div>
            <h4 className="text-xl font-bold font-display text-softWhite">Don't See Your Specific Discipline Listed?</h4>
            <p className="text-xs sm:text-sm text-silver-metallic">
              We are constantly seeking passionate mechatronics engineers, PLC programmers, mechanical draftsmen, and assembly technicians.
            </p>
          </div>
          <button
            onClick={onGoToCareers}
            className="px-7 py-3.5 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider shrink-0 transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(244,183,165,0.35)] hover:scale-105 active:scale-95"
          >
            <span>SUBMIT RESUME</span>
            <Send className="w-3.5 h-3.5 text-dark-obsidian" />
          </button>
        </div>

      </div>
    </section>
  );
};
