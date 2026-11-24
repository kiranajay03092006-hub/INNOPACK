import React, { useState } from 'react';
import { INDUSTRY_SECTORS } from '../data/innopackData';
import { Factory, CheckCircle2, PackageCheck, ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

interface IndustriesPageProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onSelectProduct, onOpenRFQ }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Food & Milling', 'FMCG & Packaging', 'Liquids & Oils', 'Chemical & Industrial'];

  const filteredSectors = activeCategory === 'all' 
    ? INDUSTRY_SECTORS 
    : INDUSTRY_SECTORS.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Header */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Factory className="w-3.5 h-3.5 text-peach-soft" />
            <span>SECTORS & PACKAGING LINE INTEGRATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            ENGINEERED FOR RIGOROUS <br />
            <span className="text-peach-gradient">INDUSTRIAL PRODUCTION LINES.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            Innopack Automation delivers high-speed dynamic weighing and custom packaging automation across FMCG, flour & grain milling, edible oils, lubricants, confectionery, and dry industrial materials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-2xl glass-panel border border-silver-border">
          <span className="text-xs font-mono text-peach-soft font-semibold px-2 uppercase">
            Filter Sectors:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-peach-soft text-dark-obsidian font-bold shadow-md shadow-peach/30'
                  : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
              }`}
            >
              {cat === 'all' ? 'ALL SECTORS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Industry Application Grid with 3D Tilt Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSectors.map((sector, idx) => (
            <GlassTiltCard key={idx}>
              <div className="p-8 sm:p-10 rounded-3xl glass-panel-heavy border border-silver-border hover:border-peach-soft/50 transition-all space-y-6 specular-corner light-streak shadow-2xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-peach-soft/15 text-xs font-mono text-peach-soft border border-peach-soft/30 font-semibold">
                      {sector.category}
                    </span>
                    <span className="text-xs font-mono text-silver-metallic">
                      Continuous Packaging Line
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
                    {sector.name}
                  </h3>

                  <p className="text-sm text-silver-pale leading-relaxed font-sans">
                    {sector.description}
                  </p>

                  {/* Operational Challenge & Engineered Solution */}
                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl glass-panel border border-silver-border text-xs space-y-1">
                      <div className="font-mono text-silver-pale uppercase font-bold text-[11px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-silver-metallic"></span>
                        Production Challenge:
                      </div>
                      <p className="text-silver-pale">
                        {sector.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl glass-panel border border-peach-soft/30 text-xs space-y-1">
                      <div className="font-mono text-peach-soft uppercase font-bold text-[11px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft"></span>
                        Innopack Engineered Solution:
                      </div>
                      <p className="text-silver-pale">
                        {sector.solution}
                      </p>
                    </div>
                  </div>

                  {/* Recommended Products */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-silver-metallic uppercase block mb-2">
                      Engineered Equipment:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sector.recommendedProducts.map((prodId, pIdx) => (
                        <button 
                          key={pIdx}
                          onClick={() => onSelectProduct(prodId)}
                          className="px-3 py-1.5 rounded-lg bg-dark-surface hover:bg-peach-soft/15 border border-silver-border hover:border-peach-soft text-xs font-mono text-softWhite hover:text-peach-soft transition-colors font-medium"
                        >
                          {prodId === 'online-dynamic-check-weigher' ? 'Dynamic Checkweigher (10–30kg)' : prodId === 'compact-check-weigher' ? 'Compact CW-03 (100g–3kg)' : 'Static Checkweigher'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-silver-border flex items-center justify-between">
                  <button
                    onClick={onOpenRFQ}
                    className="text-xs font-mono text-peach-soft hover:text-softWhite flex items-center gap-1.5 transition-colors group font-bold"
                  >
                    <span>REQUEST SECTOR SPECIFICATION</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs font-mono text-silver-metallic">
                    {sector.category}
                  </span>
                </div>
              </div>
            </GlassTiltCard>
          ))}
        </div>

        {/* Global Client Case Study Callout */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-silver-border specular-corner flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-peach-soft uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4 text-peach-soft" />
              <span>PROVEN INTERNATIONAL DEPLOYMENTS</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
              Trusted by Leading Food & Milling Giants
            </h4>
            <p className="text-sm text-silver-pale">
              Operating continuously across the Sultanate of Oman, UAE, and major domestic Indian manufacturing clusters including Salalah Mills Co. (S.A.O.G.), Oman Agro Industries LLC, and Lahairoi Packaging Systems.
            </p>
          </div>

          <button
            onClick={onOpenRFQ}
            className="px-8 py-4 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-md shadow-peach/30 shrink-0"
          >
            DISCUSS APPLICATION WITH ENGINEERS
          </button>
        </div>

      </div>
    </div>
  );
};
