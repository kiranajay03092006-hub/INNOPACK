import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck, Wrench, Play } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface ResultsAndProcessProps {
  onContact: () => void;
  onOpenVideo?: () => void;
}

export const ResultsAndProcess: React.FC<ResultsAndProcessProps> = ({ onContact, onOpenVideo }) => {
  const benefits = [
    {
      num: "01",
      title: "Zero Giveaway, Maximum Margin",
      subtitle: "RECLAIM KILOGRAMS PER SHIFT",
      description: "Eliminate excess product giveaway that silently erodes operational profit. Over 10 million packs per year, tight ±3g calibration translates directly to substantial bottom-line savings."
    },
    {
      num: "02",
      title: "Uninterrupted 45 PPM Flow",
      subtitle: "NO CONVEYOR BOTTLENECKS",
      description: "High-speed rejection diverters and synchronized conveyor variable-speed drives ensure out-of-spec packages are ejected smoothly without stalling upstream sealing machines."
    },
    {
      num: "03",
      title: "Standardized Recipe Memory",
      subtitle: "ELIMINATE TRIBAL KNOWLEDGE",
      description: "Store up to 100 pre-configured product recipes on the 10.1\" touchscreen HMI. Shift operators change over between pouches, cartons, and cans in seconds without recalibration errors."
    },
    {
      num: "04",
      title: "Sanitary Durability & Spares",
      subtitle: "AMBATTUR BACKED LONGEVITY",
      description: "Stainless steel food-grade sanitary fabrication withstands aggressive washdown regimes. Our Ambattur warehouse maintains complete stocks of loadcells, belts, and cylinders."
    }
  ];

  const steps = [
    {
      num: "01",
      phase: "ANALYSIS & SIZING",
      title: "Understand Requirements",
      description: "Our senior engineers assess your packaging dimensions, target line speed (PPM), container materials (pouches, cans, bags, cartons), and factory washdown conditions."
    },
    {
      num: "02",
      phase: "EQUIPMENT SELECTION",
      title: "Identify Suitable Machinery",
      description: "We configure the ideal checkweigher model — selecting matching loadcell sensitivity (1g to ±5g), conveyor dimensions, and specialized rejection mechanisms."
    },
    {
      num: "03",
      phase: "AMBATTUR FABRICATION & FAT",
      title: "Supply & Install Equipment",
      description: "Rigorous factory acceptance testing (FAT) is conducted at our Ambattur works. We then deliver, level, align, and integrate the system seamlessly into your existing conveyor lines."
    },
    {
      num: "04",
      phase: "TRAINING & VALIDATION",
      title: "Demonstrate Machine Operation",
      description: "Hands-on operator training covering touchscreen HMI recipe storage, automated email shift report dispatch, zero-drift calibration, and hygienic conveyor sanitation."
    },
    {
      num: "05",
      phase: "LIFECYCLE ASSISTANCE & SPARES",
      title: "Technical & After-Sales Support",
      description: "Remote telemetry diagnostics via LAN, Wi-Fi, or modem connections, backed by our well-stocked Ambattur spares warehouse ready for immediate component dispatch."
    }
  ];

  return (
    <section id="process-section" className="results relative bg-dark-graphite py-24 border-b border-white/10 overflow-hidden">
      
      {/* Background Volumetric Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-volumetric-peach blur-[170px] pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* PART 1: BENEFITS (BusyBox .ben Section) */}
        <div className="space-y-16">
          
          <header className="max-w-3xl mx-auto text-center space-y-4">
            <div className="bb-tag">
              <TrendingUp className="w-3.5 h-3.5 text-peach-soft" />
              <span>OPERATIONAL RETURNS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              <span className="block">WHAT INDUSTRY LEADERS</span>
              <span className="text-peach-gradient block">GAIN WITH INNOPACK.</span>
            </h2>

            <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans max-w-2xl mx-auto">
              Investing in precision check weighing is not merely compliance — it is an active margin-recovery engine for packaging facilities.
            </p>
          </header>

          {/* 4 Benefits Cards with Corner Brackets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <GlassTiltCard key={idx} className="h-full">
                <article className="relative rounded-2xl glass-panel p-7 h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 transition-all duration-300 light-streak group">
                  
                  {/* Corner Brackets */}
                  <span className="bb-corner-bracket bb-corner-tl" />
                  <span className="bb-corner-bracket bb-corner-tr" />
                  <span className="bb-corner-bracket bb-corner-bl" />
                  <span className="bb-corner-bracket bb-corner-br" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-2xl font-bold font-mono text-peach-soft">
                        {b.num}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-peach-soft" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-peach-champagne uppercase font-bold tracking-wider block">
                        {b.subtitle}
                      </span>
                      <h3 className="text-lg font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors leading-snug">
                        {b.title}
                      </h3>
                    </div>

                    <p className="text-xs text-silver-pale leading-relaxed font-sans">
                      {b.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-silver-steel">
                    MEASURABLE IMPACT
                  </div>

                </article>
              </GlassTiltCard>
            ))}
          </div>

        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* PART 2: PROCESS TIMELINE (BusyBox .proc Section) */}
        <div className="space-y-16">
          
          <header className="max-w-3xl mx-auto text-center space-y-4">
            <div className="bb-tag">
              <Clock className="w-3.5 h-3.5 text-peach-soft" />
              <span>THE ENGINEERING JOURNEY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              <span className="block">FROM REQUIREMENT ASSESSMENT</span>
              <span className="text-peach-gradient block">TO COMMISSIONED LINE.</span>
            </h2>

            <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans max-w-2xl mx-auto">
              Our 5-stage project methodology ensures transparent sizing, rigorous Ambattur FAT validation, and seamless plant integration.
            </p>
          </header>

          {/* 5 Process Cards Horizontal Progression */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((st, idx) => (
              <GlassTiltCard key={idx} className="h-full">
                <div className="p-6 rounded-2xl glass-panel h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 group transition-all relative">
                  
                  {/* Top Phase Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-2xl font-bold font-mono text-peach-soft">
                        {st.num}
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-silver-steel px-2 py-0.5 rounded bg-dark-obsidian border border-silver-border">
                        STEP {st.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-peach-champagne uppercase font-bold tracking-wider block">
                      {st.phase}
                    </span>

                    <h3 className="text-base font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors leading-snug">
                      {st.title}
                    </h3>

                    <p className="text-xs text-silver-pale leading-relaxed font-sans">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-silver-steel">
                    <span>STAGE {st.num}/05</span>
                    <ArrowRight className="w-3 h-3 text-peach-soft group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>
              </GlassTiltCard>
            ))}
          </div>

          {/* Process Video & Contact Callout Banner */}
          <div className="p-8 sm:p-10 rounded-2xl glass-panel-heavy border border-silver-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center sm:text-left max-w-2xl">
              <span className="text-xs font-mono text-peach-soft uppercase font-bold tracking-wider block">
                EXPERIENCE OUR FACTORY ACCEPTANCE TESTING
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-softWhite">
                Witness High-Speed Checkweighing in Action at Ambattur
              </h4>
              <p className="text-xs sm:text-sm text-silver-metallic leading-relaxed">
                Watch actual operational video footage of our dynamic loadcells inspecting packaged cartons at line speed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="px-6 py-3.5 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-peach-soft/20"
                >
                  <Play className="w-3.5 h-3.5 fill-dark-obsidian" />
                  <span>WATCH TEST VIDEO</span>
                </button>
              )}

              <button
                onClick={onContact}
                className="px-6 py-3.5 rounded-xl border border-silver-border hover:border-peach-soft text-softWhite font-bold text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>BOOK ASSESSMENT</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
