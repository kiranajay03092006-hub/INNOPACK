import React from 'react';
import { TECHNICAL_SERVICES } from '../../data/innopackData';
import { 
  Wifi, 
  Cpu, 
  Activity, 
  Video, 
  Wrench, 
  PackageCheck, 
  Users, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Radio
} from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

interface TechnicalSupportProps {
  onOpenRFQ: () => void;
  onOpenVideo?: () => void;
}

export const TechnicalSupport: React.FC<TechnicalSupportProps> = ({ onOpenRFQ, onOpenVideo }) => {
  return (
    <section className="py-24 bg-dark-graphite relative overflow-hidden border-b border-silver-border">
      {/* Background Volumetric Peach Glow & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-volumetric-peach blur-[160px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header (BusyBox Alignment) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Radio className="w-3.5 h-3.5 text-peach-soft animate-pulse" />
            <span>SECTION 09 — LIFECYCLE ASSISTANCE & DIAGNOSTICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            BEYOND MACHINES. <br />
            <span className="text-peach-gradient">COMPLETE ENGINEERING SUPPORT.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
            Our well-trained engineers and staff assist our clients with all their needs including judging requirements, suggesting appropriate products, supplying, installing, demonstrating, and providing responsive after-sales support.
          </p>
        </div>

        {/* Remote Diagnostics Telemetry Callout - Glassmorphic Hero Unit */}
        <GlassTiltCard className="p-8 sm:p-12 relative overflow-hidden specular-corner shadow-2xl border border-silver-border">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-peach-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-peach-soft animate-ping"></span>
                <span className="uppercase tracking-widest font-semibold">
                  REMOTE PLC TELEMETRY & GLOBAL VIDEO ASSISTANCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
                Direct Machine Control Access Via LAN, Wi-Fi or Modem
              </h3>

              <p className="text-sm text-silver-pale leading-relaxed max-w-3xl font-sans italic border-l-2 border-peach-soft pl-4">
                "Innopack's engineering staff offers their clients the opportunity by LAN, Wi-Fi or modem connection to access directly into the machine control system. This allows our engineers to check parameters and analyze operations in real time, so that any possible malfunction can be spotted immediately. Innopack's online video assistance can be deployed to any installation anywhere in the world."
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono text-silver-pale">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-heavy border border-silver-border">
                  <span className="text-peach-soft">✓</span>
                  <span>Instant Parameter Optimization</span>
                </div>
                <div className="flex items-start gap-1.5 px-3 py-1.5 rounded-xl glass-panel-heavy border border-silver-border">
                  <span className="text-peach-soft">✓</span>
                  <span>Real-Time Error Code Diagnostics</span>
                </div>
                <div className="flex items-start gap-1.5 px-3 py-1.5 rounded-xl glass-panel-heavy border border-silver-border">
                  <span className="text-peach-soft">✓</span>
                  <span>Global Technician Video Assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-peach to-peach-blush text-dark-obsidian font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-peach/25 hover:shadow-peach/45 hover:scale-[1.02]"
              >
                REQUEST SUPPORT CONSULTATION
              </button>
              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel text-softWhite hover:border-peach-soft text-xs font-mono uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <Video className="w-3.5 h-3.5 text-peach-soft" />
                  <span>WATCH VIDEO DEMO</span>
                </button>
              )}
            </div>
          </div>
        </GlassTiltCard>

        {/* 6 Lifecycle Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SERVICES.map((serv, idx) => (
            <GlassTiltCard key={idx}>
              <div className="p-7 rounded-2xl glass-panel space-y-4 border border-silver-border hover:border-peach-soft/50 transition-colors h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-peach-soft/10 border border-peach-soft/30 flex items-center justify-center text-peach-soft">
                    <Wrench className="w-5 h-5 text-peach-soft" />
                  </div>

                  <h4 className="text-lg font-bold font-display text-softWhite">
                    {serv.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-silver-border text-xs font-mono text-peach-soft flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach-soft"></span>
                  <span>Ambattur Works Engineering Standard</span>
                </div>
              </div>
            </GlassTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
