import React from 'react';
import { Package, Scale, Cpu, Wrench, ArrowUpRight } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface CapabilityHighlightsProps {
  onSelectCategory?: (category: string) => void;
  onExplore?: () => void;
}

export const CapabilityHighlights: React.FC<CapabilityHighlightsProps> = ({ onSelectCategory, onExplore }) => {
  const capabilities = [
    {
      num: "01",
      title: "Packaging Machinery",
      category: "Forming, Sealing & Bagging",
      description: "Automated packaging machinery engineered for FMCG, dry grains, edible oils, detergents, and industrial containers.",
      icon: Package,
    },
    {
      num: "02",
      title: "Check Weighing Systems",
      category: "Inline High-Speed Inspection",
      description: "Continuous dynamic and heavy-duty static check weighers equipped with 10.1\" touchscreens and automated rejection mechanisms.",
      icon: Scale,
    },
    {
      num: "03",
      title: "Industrial Automation",
      category: "Control Systems & SPMs",
      description: "Custom automated conveyor layouts, microprocessor controls, and special-purpose machine integration for high-throughput lines.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Engineering Support",
      category: "Lifecycle Diagnostics & Spares",
      description: "On-site installation, operator training, well-stocked spares in Ambattur, and remote telemetry via LAN, Wi-Fi, and modem.",
      icon: Wrench,
    }
  ];

  return (
    <section className="py-20 bg-dark-obsidian relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Subtle Grid & Peach Glow */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header with BusyBox Editorial Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-silver-border">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-peach-soft uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-peach-soft"></span>
              <span>VERIFIED MANUFACTURING CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-softWhite">
              ENGINEERED CAPABILITIES & <br />
              <span className="text-peach-gradient">SPECIALIZED AUTOMATION PILLARS.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-silver-metallic max-w-xs leading-relaxed">
            Four specialized engineering divisions fabricated in Ambattur Industrial Estate, Chennai.
          </div>
        </div>

        {/* 4 Capability Cards in BusyBox Numbered Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <GlassTiltCard key={idx}>
                <div className="p-7 rounded-2xl glass-panel space-y-5 h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 transition-all group light-streak">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-silver-border">
                      <span className="text-2xl font-bold font-mono text-peach-soft">
                        {cap.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-peach-soft/10 border border-peach-soft/25 flex items-center justify-center text-peach-soft group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-peach-soft" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase tracking-wider block">
                        {cap.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-silver-border flex items-center justify-between text-xs font-mono text-silver-metallic group-hover:text-peach-soft transition-colors">
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-peach-soft" />
                  </div>
                </div>
              </GlassTiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
