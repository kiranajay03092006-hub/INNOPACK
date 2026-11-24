import React from 'react';
import { PRODUCTS, Product } from '../../data/innopackData';
import { 
  Download, 
  ArrowRight, 
  Eye, 
  Check, 
  Cpu, 
  Activity, 
  Layers, 
  FileText,
  Play,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';
import { LaserScanner } from '../effects/LaserScanner';

interface ProductShowcaseProps {
  onSelectProduct: (productId: string) => void;
  onOpenRFQ: (productId: string) => void;
  onOpenVideo?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  onSelectProduct, 
  onOpenRFQ,
  onOpenVideo 
}) => {
  return (
    <section className="py-24 bg-dark-obsidian relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Volumetric Peach Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header (BusyBox Clarity) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-silver-border">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-peach-soft animate-ping"></span>
              <span>SECTION 05 — CORE MACHINERY CATALOGUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
              PRECISION CHECK WEIGHING <br />
              <span className="text-peach-gradient">MACHINERY.</span>
            </h2>
            <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
              Industrial dynamic and static check weighers manufactured to food-grade sanitary standards. Built with stainless steel chassis, high-speed loadcells, and remote diagnostic telemetry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenVideo && (
              <button
                onClick={onOpenVideo}
                className="px-5 py-3 rounded-xl glass-panel hover:border-peach-soft/50 text-xs font-mono text-softWhite flex items-center gap-2.5 transition-all shadow-md group"
              >
                <div className="w-6 h-6 rounded-full bg-peach-soft/20 border border-peach-soft/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-peach-soft fill-peach-soft" />
                </div>
                <span>WATCH FACTORY VIDEO</span>
              </button>
            )}
          </div>
        </div>

        {/* 3 Product Cards Grid with Large Machinery Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <GlassTiltCard 
              key={product.id}
              className="flex flex-col justify-between specular-corner group border border-silver-border hover:border-peach-soft/50"
            >
              <div>
                {/* 3D Dark Studio Product Viewport with Laser Beam */}
                <div className="relative p-8 bg-gradient-to-b from-dark-surface to-dark-obsidian border-b border-silver-border flex items-center justify-center min-h-[320px] overflow-hidden">
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-peach-soft px-2.5 py-1 rounded-full glass-panel-heavy border border-peach-soft/30 z-20">
                    {product.model}
                  </div>
                  
                  {/* Laser Scanner on Hover */}
                  <LaserScanner label="ACTIVE SENSOR SCAN" subLabel="ZERO DRIFT STABLE" />

                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-64 w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] relative z-10"
                  />

                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-silver-pale px-2.5 py-1 rounded-full glass-panel-heavy border border-silver-border z-20">
                    {product.weighingRange}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-7 space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-peach-soft uppercase tracking-wider font-semibold block">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-silver-pale line-clamp-3 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  {/* Verified Specification Matrix */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono py-2 border-t border-b border-silver-border">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-silver-metallic uppercase block">Throughput:</span>
                      <span className="text-softWhite font-semibold">{product.speed}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-silver-metallic uppercase block">Accuracy:</span>
                      <span className="text-peach-soft font-semibold">{product.accuracy}</span>
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-1.5 text-xs text-silver-pale">
                    {product.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-peach-soft mt-0.5 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="py-2.5 px-3 rounded-lg bg-dark-surface hover:bg-dark-graphite border border-silver-border text-xs font-mono text-softWhite flex items-center justify-center gap-1.5 transition-all group-hover:border-peach-soft/40"
                  >
                    <span>SPECIFICATIONS</span>
                    <Eye className="w-3.5 h-3.5 text-peach-soft" />
                  </button>

                  <button
                    onClick={() => onOpenRFQ(product.id)}
                    className="py-2.5 px-3 rounded-lg bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/40 text-xs font-mono text-peach-soft font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <span>REQUEST QUOTE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href={product.catalogUrl}
                  download={product.catalogFilename}
                  className="w-full py-2 px-3 rounded-lg bg-dark-obsidian hover:bg-dark-surface border border-silver-border text-[11px] font-mono text-silver-pale hover:text-softWhite flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-peach-soft" />
                  <span>DOWNLOAD PDF CATALOGUE</span>
                </a>
              </div>
            </GlassTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
