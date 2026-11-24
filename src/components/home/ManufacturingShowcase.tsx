import React from 'react';
import { MapPin, ShieldCheck, Cpu, Wrench, Factory } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

export const ManufacturingShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Volumetric Peach Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach blur-[150px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-peach-soft" />
              <span>AMBATTUR PRODUCTION HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              MANUFACTURING & <br />
              <span className="text-peach-gradient">ENGINEERING FACILITY.</span>
            </h2>
            <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans">
              Our specialized manufacturing units in SIDCO Industrial Estate, Ambattur, Chennai feature precision mechanical machining, electrical panel wiring, calibration test rigs, and dedicated spare parts inventory.
            </p>
          </div>

          <div className="p-4 rounded-2xl glass-panel-heavy border border-silver-border text-xs font-mono text-silver-pale">
            <span className="text-peach-soft font-bold block mb-1">SIDCO INDUSTRIAL ESTATE</span>
            <span>Ambattur, Chennai – 600098, Tamil Nadu</span>
          </div>
        </div>

        {/* Authentic Facility Image Showcase Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Facility Card */}
          <GlassTiltCard className="md:col-span-8 p-2 border border-silver-border specular-corner group">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/assets/team.jpg" 
                alt="Innopack Automation Engineering Team & Works" 
                className="w-full h-84 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-dark-obsidian/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-peach-soft px-3 py-1 rounded-full glass-panel-heavy border border-peach-soft/40 inline-block font-semibold">
                  ENGINEERING ASSEMBLY & CALIBRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
                  Mechanical Fabrication, Assembly & FAT Verification
                </h3>
                <p className="text-xs sm:text-sm text-silver-pale max-w-xl leading-relaxed">
                  Every checkweigher undergoes rigorous multi-hour operational endurance testing, static calibration with certified weights, and software tolerance checks before dispatch.
                </p>
              </div>
            </div>
          </GlassTiltCard>

          {/* Side Facility Cards */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            <GlassTiltCard className="p-5 border border-silver-border flex-1 flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-3">
                <img 
                  src="/assets/Goals.jpeg" 
                  alt="Innopack Production Engineering Goals" 
                  className="w-full h-36 object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-peach-champagne font-bold block">Hygienic SS Standards</span>
                <h4 className="text-base font-bold font-display text-softWhite">Stainless Steel Sanitary Construction</h4>
                <p className="text-xs text-silver-metallic leading-relaxed">
                  Food-grade SS fabrication ensuring compliance with hygiene regulations across food and pharmaceutical plants.
                </p>
              </div>
            </GlassTiltCard>

            <GlassTiltCard className="p-5 border border-silver-border flex-1 flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-3">
                <img 
                  src="/assets/Careers.jpg" 
                  alt="Innopack Technical Workshop" 
                  className="w-full h-36 object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-silver-pale font-bold block">Stock & Spares Hub</span>
                <h4 className="text-base font-bold font-display text-softWhite">Equipped Warehouse & Critical Spares</h4>
                <p className="text-xs text-silver-metallic leading-relaxed">
                  Holding genuine load cells, timing belts, pneumatic cylinders, and control boards for rapid turnaround.
                </p>
              </div>
            </GlassTiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
