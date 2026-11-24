import React, { useState } from 'react';
import { Play, ArrowRight, ArrowUpRight, Activity, ShieldCheck, Scale, Cpu, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../../data/innopackData';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
  onOpenVideo: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExplore, 
  onContact, 
  onOpenVideo,
  onSelectProduct 
}) => {
  const [activeHeroMachine, setActiveHeroMachine] = useState<number>(0);

  const heroMachines = [
    {
      id: "online-dynamic-check-weigher",
      title: "Online Dynamic Check Weigher",
      capacity: "10 kg – 30 kg",
      speed: "Up to 45 PPM",
      accuracy: "±3g to 5g Dynamic",
      liveWeight: "10.004 kg",
      status: "IN-SPEC (TOLERANCE ±3g)",
      image: "/assets/01s.png",
      tag: "FLAGSHIP INLINE SYSTEM"
    },
    {
      id: "compact-check-weigher-cw-03",
      title: "Compact Check Weigher CW-03",
      capacity: "100g – 3000g",
      speed: "Up to 40 PPM",
      accuracy: "±1g to 3g High-Speed",
      liveWeight: "500.4 g",
      status: "IN-SPEC (TOLERANCE ±1g)",
      image: "/assets/02s.png",
      tag: "POUCH & FMCG PRECISION"
    },
    {
      id: "static-check-weigher",
      title: "Static Check Weigher",
      capacity: "10 kg – 30 kg",
      speed: "Manual / Semi-Auto",
      accuracy: "±5g Verification",
      liveWeight: "25.002 kg",
      status: "IN-SPEC (TOLERANCE ±5g)",
      image: "/assets/03s.png",
      tag: "BULK & DRUM VERIFICATION"
    }
  ];

  const currentMachine = heroMachines[activeHeroMachine];

  return (
    <section id="home" className="hero relative min-h-[94vh] flex flex-col justify-center bg-[#0E0B0A] overflow-hidden pt-28 pb-16 border-b border-white/10">
      
      {/* Background Poster & Flowing Fiber Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen overflow-hidden">
        <img 
          src="/assets/busybox-hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B0A]/70 via-transparent to-[#0E0B0A]" />
      </div>

      {/* Volumetric Radial Peach Glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[650px] h-[550px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-40" />

      {/* Technical Ambient Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Header Label (BusyBox Tag Pattern) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="bb-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-peach-soft animate-ping" />
            <span>PRECISION ENGINEERING & PACKAGING AUTOMATION</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-silver-metallic">
            <span>PLANT LOCATION:</span>
            <span className="text-softWhite font-semibold">SIDCO AMBATTUR, CHENNAI</span>
            <span className="text-peach-soft">﹂</span>
          </div>
        </div>

        {/* Hero Grid: Typography + Interactive Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: BusyBox Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display uppercase tracking-tight text-softWhite leading-[1.04]">
                ENGINEERING THE <br />
                <span className="text-peach-gradient">
                  FUTURE OF AUTOMATION.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-silver-pale tracking-wide font-sans">
                Precision check weighers. High-speed packaging machinery. Industrial reliability.
              </p>
            </div>

            <p className="text-sm sm:text-base text-silver-metallic max-w-xl leading-relaxed font-sans">
              Innopack Automation designs and manufactures high-throughput inline check weighers and automated packaging machinery in Chennai — engineered to eliminate product giveaway, guarantee compliance, and ensure non-stop shift reliability.
            </p>

            {/* Dynamic Key Specification Chips */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark-graphite/60 border border-silver-border max-w-lg backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-silver-steel uppercase block">CAPACITY RANGE</span>
                <span className="text-softWhite font-bold font-display text-base sm:text-lg">{currentMachine.capacity}</span>
              </div>
              <div className="space-y-0.5 border-l border-white/10 pl-3">
                <span className="text-[10px] font-mono text-silver-steel uppercase block">LINE SPEED</span>
                <span className="text-peach-soft font-bold font-display text-base sm:text-lg">{currentMachine.speed}</span>
              </div>
              <div className="space-y-0.5 border-l border-white/10 pl-3">
                <span className="text-[10px] font-mono text-silver-steel uppercase block">ACCURACY</span>
                <span className="text-softWhite font-bold font-display text-base sm:text-lg">{currentMachine.accuracy.split(' ')[0]}</span>
              </div>
            </div>

            {/* Action Buttons with Sweep Underlines */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="px-8 py-4 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-peach-soft/20 hover:shadow-peach-soft/40 hover:scale-[1.02] active:scale-95 flex items-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE MACHINERY</span>
                <span className="text-dark-obsidian font-mono text-sm">*</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 rounded-xl glass-panel hover:border-peach-soft/50 text-softWhite font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-peach-soft/20 flex items-center justify-center text-peach-soft group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-peach-soft" />
                </div>
                <span>WATCH PLANT VIDEO (01:24)</span>
              </button>

              <div className="w-full sm:w-auto pt-2 sm:pt-0">
                <a
                  href="mailto:sales@innopackautomation.com"
                  className="text-xs font-mono text-silver-pale hover:text-peach-soft transition-colors flex items-center gap-1.5"
                >
                  <span>sales@innopackautomation.com</span>
                  <span className="text-peach-soft">﹂</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Centerpiece with Interactive Telemetry HUD */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Coordinate Ring & Radial Highlight */}
            <div className="absolute inset-0 bg-volumetric-peach rounded-full blur-[110px] scale-90 pointer-events-none opacity-35" />

            <GlassTiltCard className="w-full max-w-lg">
              <div className="relative rounded-2xl glass-panel-heavy p-6 sm:p-7 border border-silver-border shadow-2xl overflow-hidden light-streak">
                
                {/* Corner Markings (BusyBox Style) */}
                <span className="bb-corner-bracket bb-corner-tl" />
                <span className="bb-corner-bracket bb-corner-tr" />
                <span className="bb-corner-bracket bb-corner-bl" />
                <span className="bb-corner-bracket bb-corner-br" />

                {/* Top Interactive Machine Selector Pills */}
                <div className="flex items-center justify-between pb-3.5 border-b border-silver-border relative z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-peach-soft animate-pulse" />
                    <span className="text-[10px] font-mono text-peach-soft font-semibold uppercase tracking-wider">
                      {currentMachine.tag}
                    </span>
                  </div>

                  {/* 3 Model Switchers */}
                  <div className="flex items-center gap-1">
                    {heroMachines.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => setActiveHeroMachine(idx)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                          activeHeroMachine === idx 
                            ? 'bg-peach-soft text-dark-obsidian font-bold' 
                            : 'bg-dark-obsidian/60 text-silver-steel hover:text-silver-pale border border-white/5'
                        }`}
                        title={m.title}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Authentic Industrial Machinery Centerpiece */}
                <div className="relative py-4 flex flex-col items-center justify-center min-h-[310px]">
                  
                  {/* Live Dynamic Loadcell HUD Tag floating above machine */}
                  <div className="absolute top-2 left-2 z-30 px-3 py-1.5 rounded-lg bg-dark-obsidian/85 border border-silver-border/80 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                    <Activity className="w-3.5 h-3.5 text-peach-soft animate-pulse" />
                    <div className="text-left font-mono">
                      <span className="text-[9px] text-silver-steel block leading-none">LIVE LOADCELL</span>
                      <span className="text-xs font-bold text-softWhite">{currentMachine.liveWeight}</span>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2 z-30 px-2.5 py-1.5 rounded-lg bg-dark-obsidian/85 border border-silver-border/80 backdrop-blur-md shadow-xl font-mono text-[9px] text-right">
                    <span className="text-emerald-400 font-semibold block leading-tight">● {currentMachine.status}</span>
                    <span className="text-silver-steel block leading-none mt-0.5">{currentMachine.speed}</span>
                  </div>

                  <img 
                    key={currentMachine.id}
                    src={currentMachine.image} 
                    alt={currentMachine.title} 
                    className="max-h-[300px] w-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transform hover:scale-105 transition-transform duration-500 relative z-10"
                  />

                  {/* Ground Specular Platform Reflection */}
                  <div className="w-4/5 h-3 bg-gradient-to-r from-transparent via-peach-soft/30 to-transparent blur-md rounded-full mt-2" />
                </div>

                {/* Machine HUD Status Bar */}
                <div className="pt-3.5 border-t border-silver-border flex items-center justify-between text-xs font-mono relative z-20">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[10px] text-silver-steel uppercase block">MODEL SPECIFICATION</span>
                    <span className="text-softWhite font-bold block text-xs truncate max-w-[240px] sm:max-w-xs">
                      {currentMachine.title}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectProduct(currentMachine.id)}
                    className="px-3 py-1.5 rounded-lg bg-peach-dim hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/30 text-peach-soft text-xs font-mono transition-all font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>FULL SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
