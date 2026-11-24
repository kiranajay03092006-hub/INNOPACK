import React from 'react';
import { CORE_VALUES } from '../../data/innopackData';
import { ShieldCheck, Clock, Award, Users2, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

export const WhyChooseUs: React.FC = () => {
  const valueIcons: Record<string, React.ElementType> = {
    Reliability: ShieldCheck,
    Punctuality: Clock,
    Quality: Award,
    Relationship: Users2,
    Support: HeadphonesIcon
  };

  return (
    <section className="py-24 bg-dark-graphite relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Volumetric Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-peach-soft" />
            <span>CORE INDUSTRIAL VALUES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            WHY INDUSTRY LEADERS <br />
            <span className="text-peach-gradient">CHOOSE INNOPACK.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans">
            All our actions and business transactions operate around five foundational pillars. In industrial machinery, reliability and support are the determinants of manufacturing success.
          </p>
        </div>

        {/* 5 Core Values Cards Grid in Glass Tilt Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CORE_VALUES.map((val) => {
            const Icon = valueIcons[val.title] || CheckCircle;
            return (
              <GlassTiltCard 
                key={val.title}
                className="p-6 flex flex-col justify-between specular-corner group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-peach-dim border border-peach-soft/30 flex items-center justify-center text-peach-soft group-hover:bg-peach-soft group-hover:text-dark-obsidian transition-colors shadow-md shadow-peach-soft/15">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-peach-champagne font-semibold block mb-1">
                      {val.short}
                    </span>
                    <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-xs text-silver-metallic leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-silver-border text-[10px] font-mono text-silver-steel">
                  VERIFIED VALUE PILLAR
                </div>
              </GlassTiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
