import React from 'react';
import { 
  Package, 
  Activity, 
  Scale, 
  Cpu, 
  Cog, 
  Headphones, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/innopackData';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface ExpertiseProps {
  onSelectExpertise: (category: string) => void;
  onOpenRFQ: () => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectExpertise, onOpenRFQ }) => {
  const solutions = [
    {
      num: "01",
      id: 'packaging',
      title: "Packaging Machinery",
      subtitle: "FMCG & Industrial Packaging",
      description: "State-of-the-art automated packaging machinery engineered for food, grains, chemicals, and consumer goods. Designed for continuous plant uptime and clean hygienic operation.",
      icon: Package,
      highlight: "Food, Flour, Dal, Rice & Oils",
      cta: "Explore Packaging Solutions"
    },
    {
      num: "02",
      id: 'dynamic-weighing',
      title: "Online Check Weighing",
      subtitle: "High-Speed Dynamic Sorting",
      description: "Inline dynamic checkweighers delivering up to 45 packs/min with high-speed loadcells, auto-zero tracing, touch HMI, and precision drop-down or air jet rejection.",
      icon: Activity,
      highlight: "100g to 30kg Capacities",
      cta: "View Dynamic Models"
    },
    {
      num: "03",
      id: 'static-weighing',
      title: "Static Weighing Systems",
      subtitle: "End-of-Line Quality Assurance",
      description: "Industrial static weighing platforms with 10.1\" color touch displays, automated shift report emailing, and RS232/485 serial communication for ERP logging.",
      icon: Scale,
      highlight: "±5g Static Accuracy",
      cta: "View Static Models"
    },
    {
      num: "04",
      id: 'spm',
      title: "Special Purpose Machines",
      subtitle: "Custom Engineered Tooling",
      description: "Specialized automated machinery developed under our ACMAA division, catering to automobile components, complex assemblies, and custom FMCG processes.",
      icon: Cog,
      highlight: "Automobile & FMCG SPMs",
      externalUrl: COMPANY_INFO.spmPartnerUrl,
      cta: "Visit ACMAA Division (acmaa.net)"
    },
    {
      num: "05",
      id: 'automation',
      title: "Industrial Automation",
      subtitle: "Line Control & PLC Integration",
      description: "Custom conveyor synchronization, automated infeed metering, batch coding synchronization, and sensor-driven production line controls.",
      icon: Cpu,
      highlight: "Turnkey Line Integration",
      cta: "Line Automation Details"
    },
    {
      num: "06",
      id: 'support',
      title: "Engineering Support",
      subtitle: "Remote Diagnostics & Spares",
      description: "Comprehensive assistance from requirements analysis, machine demonstration, installation to remote PLC parameter diagnostics via secure LAN, Wi-Fi, or modem.",
      icon: Headphones,
      highlight: "Global Remote Telemetry",
      cta: "Engineering Support Protocol"
    }
  ];

  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-b border-silver-border">
      {/* Background Volumetric Peach Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-peach-soft animate-pulse"></span>
            <span>SECTION 04 — WHAT WE BUILD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite">
            OUR INDUSTRIAL <span className="text-peach-gradient">SOLUTIONS.</span>
          </h2>

          <p className="text-base text-silver-pale leading-relaxed font-sans">
            From precision check weighers to custom special-purpose machines and packaging lines, Innopack delivers engineered solutions tailored to rigorous manufacturing environments.
          </p>
        </div>

        {/* 6 Solution Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassTiltCard key={idx}>
                <div className="p-8 rounded-2xl glass-panel space-y-6 h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 transition-all light-streak group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-silver-border">
                      <span className="text-2xl font-bold font-mono text-peach-soft">
                        {item.num}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-peach-soft/10 border border-peach-soft/25 flex items-center justify-center text-peach-soft group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-peach-soft" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase tracking-wider block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 rounded-md bg-dark-obsidian border border-silver-border text-[11px] font-mono text-silver-pale">
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-silver-border">
                    {item.externalUrl ? (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-dark-surface hover:bg-peach-soft hover:text-dark-obsidian text-xs font-mono text-softWhite flex items-center justify-between transition-all border border-silver-border"
                      >
                        <span>{item.cta}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onSelectExpertise(item.id)}
                        className="w-full py-2.5 px-3 rounded-lg bg-dark-surface hover:bg-peach-soft hover:text-dark-obsidian text-xs font-mono text-softWhite flex items-center justify-between transition-all border border-silver-border group/btn"
                      >
                        <span>{item.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
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
