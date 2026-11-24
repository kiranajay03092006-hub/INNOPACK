import React from 'react';
import { Cpu, ShieldCheck, Scale, Wrench, Download, Eye, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/innopackData';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface SolutionsSectionProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId?: string) => void;
  onOpenVideo?: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectProduct,
  onOpenRFQ,
  onOpenVideo
}) => {
  const pillars = [
    {
      num: "01",
      title: "Precision Dynamic Loadcells",
      subtitle: "High-Frequency ±3g to ±5g Sampling",
      description: "Hermetically sealed strain-gauge loadcells engineered for continuous vibration-filtered weight measurement on high-speed conveyor belts."
    },
    {
      num: "02",
      title: "Inline High-Speed Rejection",
      subtitle: "Pneumatic Pusher, Flipper & Drop-Belt",
      description: "Automated reject mechanisms dynamically configured for your packaging format — pouches, bags, rigid cans, or heavy corrugated cartons up to 45 PPM."
    },
    {
      num: "03",
      title: "Sanitary Stainless Steel",
      subtitle: "Food-Grade SS304 / SS316 Construction",
      description: "Designed for rigorous washdown environments across flour mills, dairy, oil packaging, and pharmaceutical plants with toolless belt removal."
    },
    {
      num: "04",
      title: "10.1\" Touchscreen HMI Control",
      subtitle: "Microprocessor Multi-Recipe Memory",
      description: "Intuitive operator interface with up to 100 product presets, automated email shift reports, and instant USB statistical CSV data export."
    },
    {
      num: "05",
      title: "Remote PLC Telemetry & Ambattur Spares",
      subtitle: "Direct LAN, Wi-Fi & Modem Interrogation",
      description: "Encrypted remote diagnostics for firmware updates and parameter calibration, backed by our extensive Ambattur inventory of genuine loadcells and belts."
    }
  ];

  return (
    <section id="solutions-section" className="solutions relative bg-dark-obsidian py-24 border-b border-white/10 overflow-hidden">
      
      {/* Background Volumetric Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header (BusyBox Tag + Split Headline) */}
        <header className="max-w-3xl mx-auto text-center space-y-4">
          <div className="bb-tag">
            <Cpu className="w-3.5 h-3.5 text-peach-soft" />
            <span>THE ENGINEERED SOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            <span className="block">ONE UNIFIED AUTOMATION ARCHITECTURE.</span>
            <span className="text-peach-gradient block">PROTECTING YOUR THROUGHPUT 24/7.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans max-w-2xl mx-auto">
            Engineered in SIDCO Industrial Estate, Ambattur, Chennai — each checkweigher combines high-frequency loadcell instrumentation, microprocessor intelligence, and rugged mechanical fabrication.
          </p>
        </header>

        {/* 5 Solution Pillars Grid (BusyBox Numbered Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, idx) => (
            <GlassTiltCard key={idx} className="h-full">
              <div className="p-6 rounded-2xl glass-panel h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 group transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-2xl font-bold font-mono text-peach-soft">
                      {p.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-peach-soft group-hover:scale-150 transition-transform" />
                  </div>

                  <h3 className="text-base font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <span className="text-[11px] font-mono text-peach-champagne block font-semibold">
                    {p.subtitle}
                  </span>

                  <p className="text-xs text-silver-pale leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-silver-steel">
                  VERIFIED HARDWARE SPEC
                </div>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Machinery Showcase Header */}
        <div id="products-showcase" className="pt-10 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="bb-tag">
                <span>MACHINERY PORTFOLIO</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-softWhite">
                VERIFIED CHECK WEIGHING <span className="text-peach-gradient">SYSTEMS.</span>
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-silver-metallic max-w-md">
              Explore our core product lines with verified specifications, dimensional drawings, and downloadable engineering PDF catalogues.
            </p>
          </div>

          {/* 3 Authentic Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <GlassTiltCard key={product.id} className="h-full">
                <div className="p-7 rounded-2xl glass-panel-heavy h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 group transition-all relative overflow-hidden light-streak">
                  
                  {/* Corner Brackets */}
                  <span className="bb-corner-bracket bb-corner-tl" />
                  <span className="bb-corner-bracket bb-corner-tr" />
                  <span className="bb-corner-bracket bb-corner-bl" />
                  <span className="bb-corner-bracket bb-corner-br" />

                  <div className="space-y-6">
                    
                    {/* Machine Photo Showcase */}
                    <div className="relative rounded-xl bg-dark-obsidian/70 p-4 border border-white/10 flex items-center justify-center min-h-[220px]">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-[190px] w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-dark-obsidian border border-silver-border text-peach-soft font-bold">
                        {product.weighingRange}
                      </span>
                    </div>

                    {/* Machine Titles */}
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-silver-metallic uppercase block">
                        {product.speed} • {product.accuracy}
                      </span>
                      <h4 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                        {product.name}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-silver-pale leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Key Specs Table */}
                    <div className="p-3 rounded-lg bg-dark-obsidian/60 border border-white/10 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-silver-steel">Capacity:</span>
                        <span className="text-softWhite font-bold">{product.weighingRange}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-silver-steel">Throughput:</span>
                        <span className="text-peach-soft font-bold">{product.speed}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-silver-steel">Accuracy:</span>
                        <span className="text-softWhite font-bold">{product.accuracy}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-silver-steel">Rejection:</span>
                        <span className="text-silver-pale">{product.rejectionSystem}</span>
                      </div>
                    </div>

                  </div>

                  {/* Actions: Details & RFQ */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="flex-1 py-3 px-3 rounded-xl bg-silver-steel/20 hover:bg-peach-soft hover:text-dark-obsidian border border-silver-border text-xs font-mono font-bold text-softWhite transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>INSPECT SPECS</span>
                    </button>

                    <button
                      onClick={() => onOpenRFQ(product.id)}
                      className="flex-1 py-3 px-3 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-peach-soft/20"
                    >
                      <span>GET QUOTE*</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </GlassTiltCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
