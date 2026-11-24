import React, { useState } from 'react';
import { INDUSTRY_SECTORS, IndustryApplication } from '../../data/innopackData';
import { 
  Factory, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  PackageCheck,
  Sparkles
} from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface IndustryApplicationsProps {
  onSelectProduct: (productId: string) => void;
}

export const IndustryApplications: React.FC<IndustryApplicationsProps> = ({ 
  onSelectProduct 
}) => {
  const [activeSector, setActiveSector] = useState<IndustryApplication>(INDUSTRY_SECTORS[0]);

  return (
    <section className="py-24 bg-dark-graphite relative overflow-hidden border-b border-silver-border">
      {/* Background Volumetric Peach Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header (BusyBox Alignment) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Factory className="w-3.5 h-3.5 text-peach-soft" />
            <span>SECTION 06 — SECTOR APPLICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            INDUSTRIES & <span className="text-peach-gradient">PACKAGING LINES.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
            Innopack packaging machinery and online check weighers are specifically engineered for FMCG, food processing, grains, edible & lube oils, detergents, and industrial packaging plants.
          </p>
        </div>

        {/* Sector Navigation Glass Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {INDUSTRY_SECTORS.map((sector) => (
            <button
              key={sector.name}
              onClick={() => setActiveSector(sector)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeSector.name === sector.name
                  ? 'bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold shadow-lg shadow-peach/25 scale-[1.02]'
                  : 'glass-panel text-silver-pale hover:text-softWhite hover:border-peach-soft/40'
              }`}
            >
              {sector.name.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Selected Sector Deep-Dive in Large Frosted Glass Card */}
        <GlassTiltCard className="p-8 sm:p-12 specular-corner shadow-2xl border border-silver-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full glass-panel-heavy text-xs font-mono text-peach-soft border border-peach-soft/30 font-semibold">
                  {activeSector.category}
                </span>
                <span className="text-xs font-mono text-silver-pale">
                  FMCG & Industrial Packaging
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-display text-softWhite">
                {activeSector.name}
              </h3>

              <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
                {activeSector.description}
              </p>

              {/* Challenge & Solution Grid in Translucent Glass */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl glass-panel space-y-1.5 border border-silver-border">
                  <span className="text-xs font-mono text-peach-soft uppercase font-bold block">
                    Packaging Challenge
                  </span>
                  <p className="text-xs text-silver-pale leading-relaxed">
                    {activeSector.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel space-y-1.5 border border-peach-soft/30">
                  <span className="text-xs font-mono text-softWhite uppercase font-bold block">
                    Innopack Engineered Solution
                  </span>
                  <p className="text-xs text-silver-pale leading-relaxed">
                    {activeSector.solution}
                  </p>
                </div>
              </div>

              {/* Machinery Recommendation */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-silver-metallic uppercase">Recommended Equipment:</span>
                {activeSector.recommendedProducts.map((pId) => (
                  <button
                    key={pId}
                    onClick={() => onSelectProduct(pId)}
                    className="px-3 py-1.5 rounded-lg bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian text-peach-soft text-xs font-mono border border-peach-soft/30 transition-all font-semibold"
                  >
                    {pId === 'online-dynamic-check-weigher' ? 'Dynamic Checkweigher (10–30kg)' : pId === 'compact-check-weigher' ? 'Compact CW-03 (100g–3kg)' : 'Static Checkweigher'}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Composition with Glass Accents */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden glass-panel-heavy border border-silver-border p-3 group">
                <img 
                  src="/assets/supplybg.png" 
                  alt={activeSector.name} 
                  className="w-full h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-dark-obsidian/40 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-heavy border border-peach-soft/30 text-xs font-mono text-softWhite space-y-1">
                  <div className="text-peach-soft font-bold uppercase tracking-wider text-[11px]">
                    APPLICATION ASSURANCE
                  </div>
                  <div>Engineered to meet statutory weights & measures standards across global food and chemical sectors.</div>
                </div>
              </div>
            </div>

          </div>
        </GlassTiltCard>

      </div>
    </section>
  );
};
