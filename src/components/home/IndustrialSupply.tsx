import React, { useState } from 'react';
import { Wrench, Shield, CheckCircle2, ArrowRight, Cog, Gauge, Flame, Wind, Sparkles, Layers, Cpu } from 'lucide-react';

interface IndustrialSupplyProps {
  onOpenRFQ?: (product?: string) => void;
  onContact?: () => void;
}

export const IndustrialSupply: React.FC<IndustrialSupplyProps> = ({ onOpenRFQ, onContact }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const productsAndServices = [
    {
      id: 'torquing',
      title: 'Torquing and Tensioning',
      category: 'TORQUING & TENSIONING',
      badge: 'FLANGE & BOLTING INTEGRITY',
      icon: Wrench,
      spec: 'Calibrated up to 50,000 Nm',
      description: 'Engineered hydraulic torque wrenches, bolt tensioners, and calibrated nut runners for critical flange make-up, heavy machinery assembly, and high-pressure pipe connections.',
      highlights: [
        'Low-profile & square-drive hydraulic torque wrenches',
        'Multi-stage hydraulic bolt tensioners',
        'Flange alignment, spreaders & nut splitters',
        'Digital torque verification & calibration certificates'
      ],
      diagram: (
        <svg viewBox="0 0 200 80" className="w-full h-full text-peach-soft stroke-current fill-none stroke-[1.2] opacity-80">
          <circle cx="40" cy="40" r="22" strokeDasharray="3 3" />
          <circle cx="40" cy="40" r="14" />
          <circle cx="40" cy="40" r="5" fill="currentColor" />
          <path d="M40 18 L160 18 L180 40 L160 62 L40 62" />
          <line x1="80" y1="18" x2="80" y2="62" />
          <line x1="120" y1="18" x2="120" y2="62" />
          <circle cx="160" cy="40" r="6" />
          <text x="75" y="44" fill="currentColor" stroke="none" className="text-[8px] font-mono">TORQUE VECTOR</text>
        </svg>
      )
    },
    {
      id: 'hydro-jetting',
      title: 'Hydro jetting and hydroblasting',
      category: 'HYDRO JETTING & BLASTING',
      badge: 'SURFACE PREP & DEPOSIT REMOVAL',
      icon: Gauge,
      spec: 'Up to 2,800 Bar / 40,000 PSI',
      description: 'Ultra-high-pressure water jetting systems and specialized nozzle assemblies engineered for industrial heat exchanger tube bundles, tank de-scaling, paint stripping, and heavy refractory removal.',
      highlights: [
        'UHP hydroblasting units from 500 to 2,800 Bar',
        'Rotary lance tube-bundle cleaning systems',
        'Automated pipe cleaning & surface preparation heads',
        'Zero-chemical eco-friendly residue removal'
      ],
      diagram: (
        <svg viewBox="0 0 200 80" className="w-full h-full text-peach-soft stroke-current fill-none stroke-[1.2] opacity-80">
          <path d="M20 40 L70 40" strokeWidth="3" />
          <path d="M70 30 L95 40 L70 50 Z" fill="currentColor" />
          <path d="M95 40 Q130 20 180 15" strokeDasharray="2 2" />
          <path d="M95 40 Q140 35 185 35" strokeDasharray="2 2" />
          <path d="M95 40 Q140 45 185 45" strokeDasharray="2 2" />
          <path d="M95 40 Q130 60 180 65" strokeDasharray="2 2" />
          <text x="105" y="70" fill="currentColor" stroke="none" className="text-[8px] font-mono">40,000 PSI UHP JET</text>
        </svg>
      )
    },
    {
      id: 'cold-cutting',
      title: 'Cold cutting and bevelling',
      category: 'COLD CUTTING & BEVELLING',
      badge: 'SPARK-FREE PIPE MACHINING',
      icon: Cog,
      spec: 'ATEX / Spark-Free Certified',
      description: 'Portable split-frame pneumatic and hydraulic pipe cold cutting and beveling machines designed for hazardous refinery, offshore, and petrochemical pipeline modifications.',
      highlights: [
        'Simultaneous cold cutting and weld-prep beveling',
        'Split-frame clamshell design for in-situ pipe lines',
        'Compound beveling (30°, 37.5°, J-prep & transitions)',
        'Flame-free operation in explosive ATEX Class 1 zones'
      ],
      diagram: (
        <svg viewBox="0 0 200 80" className="w-full h-full text-peach-soft stroke-current fill-none stroke-[1.2] opacity-80">
          <rect x="30" y="25" width="140" height="30" rx="3" strokeDasharray="4 2" />
          <line x1="100" y1="10" x2="100" y2="70" strokeWidth="2" />
          <path d="M90 25 L100 40 L90 55" fill="none" strokeWidth="2" />
          <path d="M110 25 L100 40 L110 55" fill="none" strokeWidth="2" />
          <circle cx="100" cy="40" r="3" fill="currentColor" />
          <text x="115" y="20" fill="currentColor" stroke="none" className="text-[8px] font-mono">COLD CUT 37.5°</text>
        </svg>
      )
    },
    {
      id: 'compressor-parts',
      title: 'A variety of genuine air compressor parts',
      category: 'COMPRESSOR PARTS',
      badge: 'OEM CERTIFIED REPLACEMENTS',
      icon: Wind,
      spec: '100% OEM Compatibility',
      description: 'Complete inventory of genuine industrial air compressor components, maintenance kits, and consumable replacement parts for rotary screw, reciprocating, and centrifugal compressors.',
      highlights: [
        'Precision intake valves & thermostatic valves',
        'OEM-spec rotary screw airend rebuild kits & bearings',
        'High-efficiency spin-on oil separators & micro-air filters',
        'Heavy-duty synthetic compressor lubricants & gasket sets'
      ],
      diagram: (
        <svg viewBox="0 0 200 80" className="w-full h-full text-peach-soft stroke-current fill-none stroke-[1.2] opacity-80">
          <circle cx="60" cy="40" r="24" />
          <circle cx="60" cy="40" r="14" strokeDasharray="2 2" />
          <path d="M60 16 L60 26 M60 54 L60 64 M36 40 L46 40 M74 40 L84 40" strokeWidth="2" />
          <path d="M95 30 L165 30 L165 50 L95 50 Z" />
          <line x1="110" y1="30" x2="110" y2="50" />
          <line x1="130" y1="30" x2="130" y2="50" />
          <line x1="150" y1="30" x2="150" y2="50" />
          <text x="98" y="65" fill="currentColor" stroke="none" className="text-[8px] font-mono">GENUINE ROTARY AIREND</text>
        </svg>
      )
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? productsAndServices 
    : productsAndServices.filter(item => item.id === activeTab || item.category === activeTab);

  return (
    <section 
      id="industrial-supply" 
      className="relative bg-dark-obsidian py-24 sm:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background Industrial Refinery Texture (supplybg.png from Innopack assets) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity filter blur-[1px]"
        style={{ backgroundImage: "url('/assets/supplybg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-obsidian via-transparent to-dark-obsidian pointer-events-none" />

      {/* Background Volumetric Lighting & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-30" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#E9A58F]/10 blur-[140px] pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header (BusyBox Editorial Style) */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="bb-tag inline-flex items-center gap-2">
            <Wrench className="w-3.5 h-3.5 text-peach-soft" />
            <span>INDUSTRIAL SUPPLY & SPECIALIZED TOOLING DIVISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-[1.1]">
            <span className="block">HIGH-GRADE</span>
            <span className="text-peach-gradient block">INDUSTRIAL PRODUCTS.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans max-w-3xl mx-auto">
            We are proud to offer a wide range of international and locally sourced high-grade industrial products tailored to meet the needs of various industrial operations. Our specialization lies in industrial tools and equipment.
          </p>

          {/* Interactive Category Tabs matching the screenshot pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
            {[
              { id: 'all', label: 'ALL EQUIPMENT & SERVICES' },
              { id: 'torquing', label: 'TORQUING & TENSIONING' },
              { id: 'hydro-jetting', label: 'HYDRO JETTING & BLASTING' },
              { id: 'cold-cutting', label: 'COLD CUTTING & BEVELLING' },
              { id: 'compressor-parts', label: 'GENUINE COMPRESSOR PARTS' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-peach-soft text-dark-obsidian border-peach-soft font-bold shadow-lg shadow-peach-soft/20'
                    : 'bg-white/5 text-silver-pale border-white/10 hover:border-peach-soft/40 hover:text-softWhite'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Specialized Products & Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-peach-soft/50 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between shadow-2xl hover:shadow-peach-soft/10"
            >
              {/* Corner Tech Brackets */}
              <span className="absolute top-3 left-3 text-peach-soft/40 font-mono text-[10px] pointer-events-none">﹁</span>
              <span className="absolute bottom-3 right-3 text-peach-soft/40 font-mono text-[10px] pointer-events-none">﹂</span>

              <div className="space-y-6">
                {/* Header Metadata */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="px-3 py-1 rounded-full bg-peach-soft/10 text-peach-soft border border-peach-soft/30 font-mono text-[11px] font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-silver-metallic">
                    {item.spec}
                  </span>
                </div>

                {/* Technical CAD Diagram Preview */}
                <div className="relative w-full h-32 rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 flex items-center justify-center p-3 overflow-hidden group-hover:border-peach-soft/30 transition-colors">
                  <div className="absolute inset-0 bg-radial-vignette opacity-50" />
                  <div className="w-full h-full flex items-center justify-center">
                    {item.diagram}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Specific Capabilities List */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-peach-champagne font-semibold uppercase tracking-wider block">
                    CAPABILITY SPECIFICATION:
                  </span>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-silver-pale">
                        <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenRFQ && onOpenRFQ(item.title)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-peach-soft hover:text-softWhite transition-colors group/btn"
                >
                  <span>INQUIRE FOR {item.title.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] font-mono text-silver-steel">
                  READY STOCK
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement Callout Banner (Exact verbatim from user screenshot) */}
        <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-peach-soft/15 via-white/[0.05] to-peach-soft/10 border border-peach-soft/30 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-soft/20 text-peach-soft font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-peach-soft" />
                <span>INNOPACK CORPORATE COMMITMENT</span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-display font-medium text-softWhite leading-relaxed max-w-3xl">
                “Our commitment is to provide dependable, efficient, and safe equipment and services that support your projects at every stage.”
              </p>
              <div className="text-xs font-mono text-silver-metallic">
                Backed by senior mechatronics engineers & direct Ambattur stockroom spares
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => onOpenRFQ && onOpenRFQ('High-Grade Industrial Products')}
                className="px-6 py-3.5 rounded-xl bg-peach-soft hover:bg-peach-champagne text-dark-obsidian font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-peach-soft/20 hover:scale-105 active:scale-95"
              >
                <span>REQUEST PRODUCT CATALOG*</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustrialSupply;
