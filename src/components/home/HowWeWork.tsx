import React from 'react';
import { CheckCircle2, ArrowRight, Layers, Cpu, Wrench, ShieldCheck, Play } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface HowWeWorkProps {
  onContact: () => void;
  onOpenVideo?: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onContact, onOpenVideo }) => {
  const steps = [
    {
      num: "01",
      title: "Understand Requirements",
      phase: "ANALYSIS & SIZING",
      description: "Our senior engineers conduct a thorough assessment of your product dimensions, target pack speed (PPM), container materials (pouches, cans, bags, cartons), and factory washdown conditions."
    },
    {
      num: "02",
      title: "Identify Suitable Machinery",
      phase: "EQUIPMENT SELECTION",
      description: "We configure the ideal checkweigher or packaging machinery model — matching appropriate loadcell resolution (1g to ±5g), conveyor dimensions, and specialized rejection mechanisms."
    },
    {
      num: "03",
      title: "Supply & Install Equipment",
      phase: "AMBATTUR FABRICATION & COMMISSIONING",
      description: "Rigorous factory acceptance testing (FAT) is conducted at our Ambattur works. We then deliver, level, align, and integrate the system seamlessly into your existing conveyor lines."
    },
    {
      num: "04",
      title: "Demonstrate Machine Operation",
      phase: "TRAINING & VALIDATION",
      description: "Comprehensive hands-on operator training covering touchscreen HMI recipe storage, automated email report dispatching, zero-drift calibration, and hygienic conveyor sanitation."
    },
    {
      num: "05",
      title: "Provide Technical & After-Sales Support",
      phase: "LIFECYCLE ASSISTANCE & SPARES",
      description: "Round-the-clock remote diagnostics via LAN, Wi-Fi, or modem connections, backed by our well-stocked Ambattur spares warehouse ready for immediate component dispatch."
    }
  ];

  return (
    <section className="py-24 bg-dark-graphite relative overflow-hidden border-b border-silver-border">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header (BusyBox Process Inspiration) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-silver-border">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-peach-soft"></span>
              <span>SECTION 07 — STRUCTURED PROCESS JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              HOW WE WORK — <br />
              <span className="text-peach-gradient">FROM SPECIFICATION TO COMMISSIONING.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-silver-metallic max-w-xs leading-relaxed">
            A transparent five-stage engineering methodology ensuring repeatable precision and minimal plant disruption.
          </div>
        </div>

        {/* Process Timeline Flow */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <GlassTiltCard key={idx}>
              <div className="p-8 sm:p-10 rounded-2xl glass-panel space-y-4 border border-silver-border hover:border-peach-soft/50 transition-all light-streak group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Step Number & Phase Pill */}
                  <div className="md:col-span-3 space-y-2">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-peach-soft block">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-silver-metallic uppercase px-2.5 py-1 rounded bg-dark-obsidian border border-silver-border inline-block">
                      {step.phase}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <div className="md:col-span-7 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="md:col-span-2 flex justify-start md:justify-end">
                    <div className="w-10 h-10 rounded-full bg-dark-obsidian border border-silver-border flex items-center justify-center text-peach-soft group-hover:border-peach-soft group-hover:bg-peach-soft/10 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-peach-soft" />
                    </div>
                  </div>

                </div>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Process Action Callout */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-heavy border border-silver-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-display text-softWhite">Ready to Evaluate Your Packaging Line?</h4>
            <p className="text-xs sm:text-sm text-silver-pale">
              Our Ambattur engineering team provides machine trials, speed calculations, and custom conveyor layout drawings.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {onOpenVideo && (
              <button
                onClick={onOpenVideo}
                className="px-6 py-3.5 rounded-xl bg-dark-surface hover:bg-dark-graphite border border-silver-border text-softWhite text-xs font-mono uppercase font-bold flex items-center gap-2 transition-all"
              >
                <Play className="w-3.5 h-3.5 text-peach-soft fill-peach-soft" />
                <span>WATCH MACHINE IN ACTION</span>
              </button>
            )}
            <button
              onClick={onContact}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold text-xs uppercase font-mono tracking-wider transition-all duration-300 shadow-xl shadow-peach/25 hover:shadow-peach/45"
            >
              SCHEDULE TECHNICAL CONSULTATION
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
