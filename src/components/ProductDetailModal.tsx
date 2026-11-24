import React from 'react';
import { Product } from '../data/innopackData';
import { 
  X, 
  Download, 
  Check, 
  Cpu, 
  Play, 
  ArrowRight
} from 'lucide-react';
import { LaserScanner } from './effects/LaserScanner';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenRFQ: (productId: string) => void;
  onOpenVideo?: (videoUrl: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  onClose, 
  onOpenRFQ,
  onOpenVideo 
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl glass-panel-heavy rounded-3xl border border-silver-border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col specular-corner light-streak"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-dark-graphite border-b border-silver-border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-peach-soft/15 border border-peach-soft/40 text-peach-soft font-mono text-xs uppercase tracking-wider font-semibold">
              MODEL: {product.model}
            </span>
            <h3 className="font-display font-bold text-softWhite text-lg md:text-xl tracking-wide uppercase">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-silver-pale hover:text-softWhite hover:bg-dark-surface transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          
          {/* Top Section: Machinery Image + Key Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 bg-dark-obsidian/90 rounded-2xl border border-silver-border p-6 flex flex-col items-center justify-center relative group overflow-hidden shadow-inner">
              <LaserScanner label="INSPECTION SCAN ACTIVE" subLabel="SS HYGIENIC PLATFORM" />
              
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-72 w-auto object-contain my-4 transition-transform duration-500 group-hover:scale-105 relative z-10"
              />
              {product.videoUrl && onOpenVideo && (
                <button
                  onClick={() => onOpenVideo(product.videoUrl!)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/30 text-xs font-mono font-bold text-peach-soft flex items-center justify-center gap-2 transition-all relative z-10"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH PLANT OPERATIONAL VIDEO</span>
                </button>
              )}
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-peach-soft font-bold">
                {product.category}
              </div>
              <h2 className="text-2xl font-bold font-display text-softWhite">
                {product.tagline}
              </h2>
              <p className="text-sm text-silver-pale leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Verified Specification Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                  <span className="text-[10px] font-mono text-silver-metallic block uppercase">Weighing Range</span>
                  <span className="text-softWhite font-bold text-sm">{product.weighingRange}</span>
                </div>
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                  <span className="text-[10px] font-mono text-silver-metallic block uppercase">Line Speed</span>
                  <span className="text-peach-soft font-bold text-sm">{product.speed}</span>
                </div>
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                  <span className="text-[10px] font-mono text-silver-metallic block uppercase">Accuracy</span>
                  <span className="text-softWhite font-bold text-sm">{product.accuracy}</span>
                </div>
                {product.resolution && (
                  <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                    <span className="text-[10px] font-mono text-silver-metallic block uppercase">Resolution</span>
                    <span className="text-softWhite font-bold text-sm">{product.resolution}</span>
                  </div>
                )}
                {product.display && (
                  <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                    <span className="text-[10px] font-mono text-silver-metallic block uppercase">Interface</span>
                    <span className="text-softWhite font-bold text-sm">{product.display}</span>
                  </div>
                )}
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border">
                  <span className="text-[10px] font-mono text-silver-metallic block uppercase">Rejection</span>
                  <span className="text-peach-soft font-bold text-xs truncate" title={product.rejectionSystem}>{product.rejectionSystem}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenRFQ(product.id)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-bold text-xs md:text-sm uppercase font-mono tracking-wider shadow-lg shadow-peach/25 hover:shadow-peach/45 transition-all flex items-center gap-2"
                >
                  <span>REQUEST QUOTE / RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={product.catalogUrl}
                  download={product.catalogFilename}
                  className="px-5 py-3.5 rounded-xl bg-dark-surface hover:bg-dark-graphite border border-silver-border text-softWhite text-xs md:text-sm font-semibold uppercase font-mono tracking-wider flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-peach-soft" />
                  <span>ORIGINAL PDF CATALOGUE</span>
                </a>
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-softWhite text-lg uppercase tracking-wide flex items-center gap-2">
              <Cpu className="w-5 h-5 text-peach-soft" />
              Verified Engineering Specifications
            </h4>
            <div className="overflow-x-auto rounded-2xl border border-silver-border bg-dark-surface/40">
              <table className="w-full text-left text-xs md:text-sm">
                <tbody className="divide-y divide-silver-border font-mono">
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40 w-1/3">Model Identifier</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.model}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Weighing Range</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.weighingRange}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Operational Speed</td>
                    <td className="py-3 px-4 text-peach-soft font-medium">{product.speed}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Certified Accuracy</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.accuracy}</td>
                  </tr>
                  {product.resolution && (
                    <tr>
                      <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Weighing Resolution</td>
                      <td className="py-3 px-4 text-softWhite font-medium">{product.resolution}</td>
                    </tr>
                  )}
                  {product.conveyorSize && (
                    <tr>
                      <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Conveyor Dimensions</td>
                      <td className="py-3 px-4 text-softWhite font-medium">{product.conveyorSize}</td>
                    </tr>
                  )}
                  {product.dimensions && (
                    <tr>
                      <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Overall Dimensions</td>
                      <td className="py-3 px-4 text-softWhite font-medium">{product.dimensions}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Electrical Power</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.power}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Pneumatic Air Supply</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.airSupply}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Operating Ambient Temp</td>
                    <td className="py-3 px-4 text-softWhite font-medium">{product.operatingTemp}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-silver-metallic bg-dark-obsidian/40">Rejection Mechanism</td>
                    <td className="py-3 px-4 text-peach-soft font-medium">{product.rejectionSystem}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Features and Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-softWhite text-base uppercase tracking-wide flex items-center gap-2">
                <Check className="w-5 h-5 text-peach-soft" />
                Standard Equipment Features
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-silver-pale">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-peach-soft mt-1.5 shrink-0 shadow-[0_0_6px_#F4B7A5]"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-bold text-softWhite text-base uppercase tracking-wide flex items-center gap-2">
                <Check className="w-5 h-5 text-peach-soft" />
                Target Industry Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-dark-surface border border-silver-border text-xs text-silver-pale font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
