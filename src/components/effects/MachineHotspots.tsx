import React, { useState } from 'react';
import { Cpu, ShieldCheck, Activity, Sliders, X, Sparkles } from 'lucide-react';

interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  xPercent: number; // percentage left
  yPercent: number; // percentage top
}

const DEFAULT_HOTSPOTS: Hotspot[] = [
  {
    id: 'hmi',
    title: '10.1" Touch HMI Terminal',
    subtitle: 'Microprocessor Interface',
    description: 'Multilingual graphical touch terminal with recipe memory, automated shift reporting, and auto zero drift compensation.',
    xPercent: 32,
    yPercent: 28,
  },
  {
    id: 'loadcell',
    title: 'Precision Strain Gauge Loadcell',
    subtitle: 'Dynamic Core Sensor',
    description: 'Stainless steel hermetically sealed loadcell with ±3g dynamic accuracy and 1000 Hz continuous high-frequency sampling.',
    xPercent: 52,
    yPercent: 58,
  },
  {
    id: 'rejection',
    title: 'Pneumatic Reject Mechanism',
    subtitle: 'Sorting Automation',
    description: 'Configurable with drop-down conveyor, high-speed air jet, or heavy-duty push paddle to segregate off-weight containers.',
    xPercent: 78,
    yPercent: 48,
  },
  {
    id: 'conveyor',
    title: 'Sanitary Stainless Conveyor',
    subtitle: 'SS Hygienic Construction',
    description: 'Quick-release food-grade conveyor belt engineered for food, milling, and chemical environments with toolless sanitation.',
    xPercent: 25,
    yPercent: 68,
  }
];

export const MachineHotspots: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {DEFAULT_HOTSPOTS.map((spot) => {
        const isSelected = activeHotspot?.id === spot.id;

        return (
          <div
            key={spot.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
          >
            {/* Hotspot Target Reticle Node */}
            <button
              onClick={() => setActiveHotspot(isSelected ? null : spot)}
              className="relative group focus:outline-none flex items-center justify-center p-2"
              aria-label={`Inspect ${spot.title}`}
            >
              {/* Outer Pulsing Ring */}
              <span className="absolute w-7 h-7 rounded-full opacity-60 animate-ping bg-peach-soft" />
              
              {/* Middle Border Ring */}
              <span className="w-5 h-5 rounded-full flex items-center justify-center backdrop-blur-md border border-peach-soft bg-dark-obsidian/90 shadow-[0_0_12px_#F4B7A5]">
                <span className="w-2 h-2 rounded-full bg-peach-soft" />
              </span>
            </button>

            {/* Floating Translucent Peach Glass Tooltip */}
            {isSelected && (
              <div 
                className="absolute z-30 w-64 sm:w-72 p-4 rounded-xl glass-panel-heavy border border-peach-soft/40 shadow-2xl transition-all duration-300 animate-fadeIn top-full left-1/2 -translate-x-1/2 mt-2"
              >
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-silver-border">
                  <div>
                    <span className="text-[10px] font-mono text-peach-soft uppercase tracking-wider block font-semibold">
                      {spot.subtitle}
                    </span>
                    <h4 className="text-sm font-bold font-display text-softWhite">
                      {spot.title}
                    </h4>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }}
                    className="p-1 rounded text-silver-metallic hover:text-softWhite"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-silver-pale leading-relaxed pt-2 font-sans">
                  {spot.description}
                </p>

                <div className="mt-3 pt-2 border-t border-silver-border flex items-center justify-between text-[10px] font-mono text-silver-metallic">
                  <span>TELEMETRY: VERIFIED</span>
                  <span className="text-peach-soft font-semibold">INSPECTION ACTIVE</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
