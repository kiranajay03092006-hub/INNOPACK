import React, { useState } from 'react';
import { Layers, ArrowRight, Eye, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';
import { PRODUCTS, Product } from '../../data/innopackData';

interface BuildAccordionProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId?: string) => void;
}

export const BuildAccordion: React.FC<BuildAccordionProps> = ({ onSelectProduct, onOpenRFQ }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const buildItems = [
    {
      id: "online-dynamic-check-weigher",
      num: "01",
      title: "Online Dynamic Check Weigher",
      range: "10 – 30 kg",
      speed: "Up to 45 PPM",
      accuracy: "±3g to 5g",
      image: "/assets/01s.png",
      description: "Heavy-duty continuous inline check weigher engineered for bags, large pouches, cans, and corrugated carton boxes. Equipped with automatic zero-drift compensation and pneumatic reject pusher.",
      catalog: "/assets/Innopack_Checkweigher_Catalog.pdf",
      specs: [
        { label: "Weighing Range", value: "10 kg – 30 kg" },
        { label: "Dynamic Accuracy", value: "±3g – 5g" },
        { label: "Throughput", value: "Up to 45 PPM" },
        { label: "Display", value: "10.1\" Touch Screen HMI" },
        { label: "Construction", value: "Food-Grade Stainless Steel" },
        { label: "Rejection", value: "Heavy-Duty Pneumatic Pusher" }
      ]
    },
    {
      id: "compact-check-weigher-cw-03",
      num: "02",
      title: "Compact Check Weigher CW-03",
      range: "100g – 3000g",
      speed: "Up to 40 PPM",
      accuracy: "±1g to 3g",
      image: "/assets/02s.png",
      description: "High-precision compact weighing system designed for tight spaces on FMCG, confectionery, biscuit, tea, detergent, and pouch packaging lines. Rapid toolless belt removal.",
      catalog: "/assets/compact-check-weigher-catalog_02.pdf",
      specs: [
        { label: "Weighing Range", value: "100g – 3000g" },
        { label: "Dynamic Accuracy", value: "±1g – 3g" },
        { label: "Throughput", value: "Up to 40 PPM" },
        { label: "Display", value: "7\" Color Touch Screen" },
        { label: "Footprint", value: "Compact Inline Integration" },
        { label: "Rejection", value: "Flipper / Drop-Belt System" }
      ]
    },
    {
      id: "static-check-weigher",
      num: "03",
      title: "Static Check Weigher",
      range: "10 – 30 kg",
      speed: "Manual / Semiauto",
      accuracy: "±5g",
      image: "/assets/03s.png",
      description: "End-of-line verification scale for bulk containers, chemical drums, edible oil tins, and flour bags. Features programmable gross/tare functions, visual limit beacons, and statistical logging.",
      catalog: "/assets/INNOPACK STATIC CHECK WEIGHER CATALOG.pdf",
      specs: [
        { label: "Weighing Range", value: "10 kg – 30 kg" },
        { label: "Static Accuracy", value: "±5g" },
        { label: "Platform", value: "Heavy Duty Fabricated SS" },
        { label: "Tower Light", value: "3-Color Pass/Low/High Beacon" },
        { label: "Data Export", value: "USB Statistical Data Logging" },
        { label: "Integration", value: "Inline or Offline Inspection" }
      ]
    },
    {
      id: "acmaa-spm-integration",
      num: "04",
      title: "Special Purpose Machinery & Conveyors",
      range: "Custom Engineered",
      speed: "Application Specific",
      accuracy: "Custom Tolerances",
      image: "/assets/aboutus.png",
      description: "Custom automated conveyor layouts, microprocessor controls, indexing tables, and turn-key packaging automation lines manufactured in collaboration with our sister SPM division ACMAA (www.acmaa.net).",
      catalog: null,
      specs: [
        { label: "Manufacturing", value: "Ambattur Engineering Works" },
        { label: "Design Tools", value: "3D CAD & Mechanical Simulation" },
        { label: "Controls", value: "Custom PLC & Microprocessor" },
        { label: "Fabrication", value: "CNC Machining & TIG Welding" },
        { label: "FAT Testing", value: "Full-Shift Endurance Run" },
        { label: "Commissioning", value: "Complete On-Site Handover" }
      ]
    }
  ];

  const currentItem = buildItems[activeTab];

  return (
    <section id="work-section" className="build relative bg-dark-obsidian py-24 border-b border-white/10 overflow-hidden">
      
      {/* Background Volumetric Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header (BusyBox Tag + Split Headline) */}
        <header className="max-w-3xl mx-auto text-center space-y-4">
          <div className="bb-tag">
            <Layers className="w-3.5 h-3.5 text-peach-soft" />
            <span>MACHINERY PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            <span className="block">WHAT WE ACTUALLY</span>
            <span className="text-peach-gradient block">ENGINEER & BUILD.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans max-w-2xl mx-auto">
            Select any equipment line below to inspect live specifications, loadcell resolution, and factory integration details.
          </p>
        </header>

        {/* 2-Column BusyBox Accordion + Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Accordion (.bacc) */}
          <div className="lg:col-span-5 space-y-4">
            {buildItems.map((item, idx) => {
              const isOpen = activeTab === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isOpen 
                      ? 'glass-panel-peach border-peach-soft/60 shadow-xl shadow-peach-soft/10' 
                      : 'glass-panel border-white/10 hover:border-silver-border opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-peach-soft">
                        {item.num}
                      </span>
                      <h3 className="font-display font-bold text-lg text-softWhite">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-silver-metallic px-2 py-0.5 rounded bg-dark-obsidian border border-silver-border">
                      {item.range}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="pt-4 mt-3 border-t border-white/10 space-y-3 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs font-mono text-peach-champagne pt-1">
                        <span>Speed: {item.speed}</span>
                        <span>•</span>
                        <span>Accuracy: {item.accuracy}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Synchronized Stage (.bill__stage) */}
          <div className="lg:col-span-7">
            <GlassTiltCard className="w-full">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel-heavy border border-silver-border relative overflow-hidden light-streak space-y-8">
                
                {/* 4 Corner Technical Brackets */}
                <span className="bb-corner-bracket bb-corner-tl" />
                <span className="bb-corner-bracket bb-corner-tr" />
                <span className="bb-corner-bracket bb-corner-bl" />
                <span className="bb-corner-bracket bb-corner-br" />

                {/* Stage Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-silver-steel uppercase block">
                      SYSTEM ARCHITECTURE • {currentItem.num}/04
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-display text-softWhite">
                      {currentItem.title}
                    </h4>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-peach-dim border border-peach-soft/30 text-peach-soft text-xs font-mono font-bold">
                    {currentItem.range}
                  </div>
                </div>

                {/* Center Machinery Showcase */}
                <div className="relative py-6 flex flex-col items-center justify-center min-h-[260px] bg-dark-obsidian/60 rounded-2xl border border-white/10 overflow-hidden">
                  
                  {/* Subtle Radar Scan Rings */}
                  <div className="absolute w-60 h-60 rounded-full border border-peach-soft/10 pointer-events-none" />
                  <div className="absolute w-80 h-80 rounded-full border border-peach-soft/5 pointer-events-none" />
                  
                  <img 
                    src={currentItem.image} 
                    alt={currentItem.title} 
                    className="max-h-[240px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] transform hover:scale-105 transition-transform duration-500 relative z-10"
                  />
                  
                  <div className="w-3/4 h-3 bg-gradient-to-r from-transparent via-peach-soft/25 to-transparent blur-md rounded-full mt-3" />
                </div>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-dark-obsidian/70 border border-white/10 text-xs font-mono">
                  {currentItem.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <span className="text-[10px] text-silver-steel uppercase block">{sp.label}</span>
                      <span className="text-softWhite font-bold text-xs">{sp.value}</span>
                    </div>
                  ))}
                </div>

                {/* Stage Action Controls */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(currentItem.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-silver-steel/20 hover:bg-peach-soft hover:text-dark-obsidian border border-silver-border text-xs font-mono font-bold text-softWhite transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>SPECIFICATIONS</span>
                  </button>

                  {currentItem.catalog && (
                    <a
                      href={currentItem.catalog}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl glass-panel hover:border-peach-soft/50 text-xs font-mono font-bold text-silver-pale hover:text-peach-soft transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>PDF BROCHURE</span>
                    </a>
                  )}

                  <button
                    onClick={() => onOpenRFQ(currentItem.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-peach-soft/20 cursor-pointer"
                  >
                    <span>REQUEST QUOTE*</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </GlassTiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
