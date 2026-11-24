import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/innopackData';
import { 
  Download, 
  Eye, 
  ArrowRight, 
  Play, 
  Cpu, 
  Activity, 
  Layers, 
  FileText,
  CheckCircle2,
  Filter,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { LaserScanner } from '../components/effects/LaserScanner';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

interface ProductsPageProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId: string) => void;
  onOpenVideo?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onSelectProduct, 
  onOpenRFQ,
  onOpenVideo 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProducts = selectedFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.id === selectedFilter);

  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Header */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Cpu className="w-3.5 h-3.5 text-peach-soft" />
            <span>INDUSTRIAL MACHINERY CATALOGUE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            DYNAMIC CHECK WEIGHING & <br />
            <span className="text-peach-gradient">AUTOMATION SYSTEMS.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            High-speed dynamic loadcell platforms, sanitary compact pouch sorters, and heavy-duty static verification machines engineered for rigorous round-the-clock packaging environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl glass-panel border border-silver-border shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-peach-soft font-semibold">
            <Filter className="w-4 h-4 text-peach-soft" />
            <span>SELECT MACHINERY CLASSIFICATION:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'bg-peach-soft text-dark-obsidian font-bold shadow-md shadow-peach/30'
                  : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
              }`}
            >
              ALL SYSTEMS ({PRODUCTS.length})
            </button>
            {PRODUCTS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedFilter(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedFilter === p.id
                    ? 'bg-peach-soft text-dark-obsidian font-bold shadow-md shadow-peach/30'
                    : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
                }`}
              >
                {p.model}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards List */}
        <div className="space-y-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="rounded-3xl glass-panel-heavy p-6 sm:p-8 lg:p-10 specular-corner light-streak border border-silver-border shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Product Image Frame with Laser Scanner */}
                <div className="lg:col-span-5 bg-dark-obsidian/90 rounded-2xl border border-silver-border p-6 flex flex-col items-center justify-center relative group min-h-[340px] overflow-hidden shadow-inner">
                  <LaserScanner label="ACTIVE LOADCELL SAMPLING" subLabel="ZERO DRIFT STABILIZATION" />
                  
                  <div className="absolute top-4 left-4 text-[10px] font-mono text-peach-soft px-3 py-1 rounded-full bg-peach-soft/15 border border-peach-soft/30 z-20 backdrop-blur-md">
                    MODEL: {product.model}
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-72 w-auto object-contain transition-transform duration-700 group-hover:scale-105 my-4 relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                  />

                  {product.videoUrl && onOpenVideo && (
                    <button
                      onClick={onOpenVideo}
                      className="w-full mt-2 py-2.5 px-4 rounded-xl bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/30 text-xs font-mono font-bold text-peach-soft flex items-center justify-center gap-2 transition-all duration-300 relative z-10"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>WATCH PLANT OPERATIONAL VIDEO</span>
                    </button>
                  )}
                </div>

                {/* Product Specifications & Engineering Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-peach-soft font-bold">
                        {product.category}
                      </span>
                      <span className="text-xs font-mono text-silver-metallic">
                        • Verified Ambattur Works Design
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
                      {product.name}
                    </h2>

                    <p className="text-sm text-silver-pale leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Verified Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase block">Weighing Range</span>
                      <span className="text-sm font-bold font-display text-softWhite">{product.weighingRange}</span>
                    </div>
                    <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase block">Speed Capacity</span>
                      <span className="text-sm font-bold font-display text-peach-soft">{product.speed}</span>
                    </div>
                    <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase block">Accuracy</span>
                      <span className="text-sm font-bold font-display text-softWhite">{product.accuracy}</span>
                    </div>
                    <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                      <span className="text-[10px] font-mono text-silver-metallic uppercase block">Power Supply</span>
                      <span className="text-sm font-bold font-display text-softWhite">{product.power}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-peach-soft font-semibold uppercase tracking-wider block">
                      KEY MACHINE FEATURES & INTEGRATIONS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-silver-pale">
                      {product.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-peach-soft shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-silver-border flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="px-6 py-3 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all flex items-center gap-2 shadow-md shadow-peach/25"
                    >
                      <span>INSPECT SPECIFICATIONS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenRFQ(product.id)}
                      className="px-6 py-3 rounded-xl bg-dark-surface hover:bg-dark-graphite text-softWhite border border-silver-border hover:border-peach-soft text-xs font-mono uppercase tracking-wider transition-all"
                    >
                      REQUEST QUOTE ({product.model})
                    </button>

                    <a
                      href={product.catalogUrl}
                      download={product.catalogFilename}
                      className="px-5 py-3 rounded-xl bg-dark-obsidian hover:bg-dark-surface text-peach-soft border border-silver-border hover:border-peach-soft/40 text-xs font-mono flex items-center gap-2 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF CATALOGUE</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
