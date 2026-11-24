import React, { useState } from 'react';
import { TECHNICAL_SERVICES, COMPANY_INFO } from '../data/innopackData';
import { 
  Wifi, 
  Activity, 
  Video, 
  Wrench, 
  PackageCheck, 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Clock, 
  Radio, 
  Server, 
  RefreshCw 
} from 'lucide-react';
import { GlassTiltCard } from '../components/effects/GlassTiltCard';

interface SupportPageProps {
  onOpenRFQ: () => void;
  onOpenVideo?: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onOpenRFQ, onOpenVideo }) => {
  // Interactive Remote Telemetry Simulation State
  const [sampleWeight, setSampleWeight] = useState(25.04);
  const [syncStatus, setSyncStatus] = useState<'IDLE' | 'SYNCING' | 'VERIFIED'>('VERIFIED');
  const [toleranceBand, setToleranceBand] = useState('±0.02 kg');

  const triggerDiagnosticSync = () => {
    setSyncStatus('SYNCING');
    setTimeout(() => {
      setSampleWeight(+(25.0 + (Math.random() * 0.08 - 0.04)).toFixed(3));
      setSyncStatus('VERIFIED');
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 bg-dark-obsidian min-h-screen text-silver-pale">
      
      {/* Header */}
      <div className="relative py-20 bg-dark-graphite border-b border-silver-border overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-volumetric-peach pointer-events-none blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-peach text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
            <Activity className="w-3.5 h-3.5 text-peach-soft" />
            <span>ENGINEERING & TECHNICAL SUPPORT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            BEYOND MACHINES. <br />
            <span className="text-peach-gradient">COMPLETE LIFECYCLE ASSISTANCE.</span>
          </h1>

          <p className="text-base sm:text-lg text-silver-pale max-w-3xl leading-relaxed font-sans">
            Innopack Automation delivers comprehensive lifecycle engineering support: from requirement judgment and plant trials to remote PLC telemetry diagnostics and instant spare parts dispatch.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Remote Diagnostics Telemetry Deep-Dive & Live Simulator */}
        <div className="rounded-3xl glass-panel-heavy border border-peach-soft/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden specular-corner light-streak">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-peach text-xs font-mono text-peach-soft">
                <Radio className="w-3 h-3 text-peach-soft animate-pulse" />
                <span>SECURE MACHINE CONTROL SYSTEM TELEMETRY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-softWhite uppercase leading-tight">
                LAN, Wi-Fi & Modem Remote Machine Inspection
              </h2>

              <p className="text-sm sm:text-base text-silver-pale leading-relaxed italic border-l-2 border-peach-soft pl-4">
                "Innopack's engineering staff offers their clients the opportunity by LAN, Wi-Fi or modem connection to access directly into the machine control system. This allows to check parameters, analyze operations in real time, so that any possible malfunction can be spotted immediately. Innopack's online video assistance can be used in any installation anywhere in the world."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-silver-pale pt-2">
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                  <div className="text-peach-soft font-bold">LAN / ETHERNET</div>
                  <p>Gigabit factory network connection with encrypted parameter streaming.</p>
                </div>
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                  <div className="text-peach-soft font-bold">INDUSTRIAL WI-FI</div>
                  <p>Plant-floor wireless mobility for fast tablet/HMI supervisor access.</p>
                </div>
                <div className="p-3.5 rounded-xl glass-panel border border-silver-border space-y-1">
                  <div className="text-peach-soft font-bold">CELLULAR MODEM</div>
                  <p>Dedicated remote tunnel for international sites without local network access.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenRFQ}
                  className="px-6 py-3 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-md shadow-peach/25"
                >
                  SCHEDULE REMOTE SUPPORT SESSION
                </button>

                {onOpenVideo && (
                  <button
                    onClick={onOpenVideo}
                    className="px-6 py-3 rounded-xl bg-dark-surface hover:bg-dark-graphite text-softWhite border border-silver-border text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <Video className="w-3.5 h-3.5 text-peach-soft" />
                    <span>WATCH ONLINE VIDEO ASSISTANCE</span>
                  </button>
                )}
              </div>
            </div>

            {/* Interactive Telemetry HUD Simulator Widget */}
            <div className="lg:col-span-5 bg-dark-obsidian/90 rounded-2xl border border-peach-soft/30 p-6 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-silver-border text-xs font-mono">
                <div className="flex items-center gap-2 text-peach-soft">
                  <Server className="w-4 h-4 text-peach-soft" />
                  <span>PLC_DIAGNOSTICS_V4</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-peach-soft/15 text-peach-soft border border-peach-soft/30 text-[10px] font-bold">
                  CONNECTIVITY: LIVE
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-surface/60 border border-silver-border">
                  <span className="text-silver-pale">CURRENT LOADCELL VALUE:</span>
                  <span className="text-base font-bold text-softWhite font-display">
                    {sampleWeight.toFixed(3)} kg
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-surface/60 border border-silver-border">
                  <span className="text-silver-pale">DYNAMIC TOLERANCE:</span>
                  <span className="text-peach-soft font-bold">{toleranceBand}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-surface/60 border border-silver-border">
                  <span className="text-silver-pale">TELEMETRY LINK STATUS:</span>
                  <span className={`font-bold ${syncStatus === 'SYNCING' ? 'text-peach-soft animate-pulse' : 'text-softWhite'}`}>
                    {syncStatus === 'SYNCING' ? 'RECEIVING STREAM...' : 'SYNCHRONIZED (0 ERRORS)'}
                  </span>
                </div>
              </div>

              <button
                onClick={triggerDiagnosticSync}
                disabled={syncStatus === 'SYNCING'}
                className="w-full py-3 px-4 rounded-xl bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/40 text-peach-soft font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === 'SYNCING' ? 'animate-spin' : ''}`} />
                <span>{syncStatus === 'SYNCING' ? 'STREAMING REAL-TIME DATA...' : 'PING REMOTE LOADCELL TELEMETRY'}</span>
              </button>

              <div className="text-[10px] font-mono text-silver-metallic text-center">
                Secure 256-bit encrypted tunnel connection to Ambattur central engineering desk.
              </div>
            </div>

          </div>
        </div>

        {/* 6 Technical Services Offered */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-peach-soft uppercase tracking-wider font-semibold">
              SERVICE SCOPE
            </span>
            <h2 className="text-3xl font-bold font-display text-softWhite uppercase">
              End-to-End Client Assistance
            </h2>
            <p className="text-xs sm:text-sm text-silver-pale">
              Every phase of project realization is managed by experienced mechanical and automation engineers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_SERVICES.map((serv, idx) => (
              <GlassTiltCard key={idx}>
                <div className="p-7 rounded-2xl glass-panel space-y-4 border border-silver-border hover:border-peach-soft/40 transition-colors h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-peach-soft/10 border border-peach-soft/30 flex items-center justify-center text-peach-soft">
                      <Wrench className="w-5 h-5 text-peach-soft" />
                    </div>

                    <h3 className="text-xl font-bold font-display text-softWhite">
                      {serv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans">
                      {serv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-silver-border text-xs font-mono text-peach-soft flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-peach-soft"></span>
                    <span>Verified Ambattur Service Protocol</span>
                  </div>
                </div>
              </GlassTiltCard>
            ))}
          </div>
        </div>

        {/* Stocked Spares & Expedited Dispatch */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-heavy border border-silver-border specular-corner flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-peach-soft uppercase tracking-wider font-bold">
              <PackageCheck className="w-4 h-4 text-peach-soft" />
              <span>AMBATTUR INDUSTRIAL ESTATE SPARES DEPOT</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-softWhite">
              Ready-to-Ship Spares & Rapid Support
            </h4>
            <p className="text-sm text-silver-pale leading-relaxed">
              "Our well-equipped and well-stocked store holds all our stock products, enabling us to deliver without delay and provide any spares or accessories required."
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-softWhite pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft" />
                Replacement Belts & Conveyors
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft" />
                Strain Gauge Loadcells
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft" />
                Touchscreen HMI Modules
              </span>
            </div>
          </div>

          <button
            onClick={onOpenRFQ}
            className="px-8 py-4 rounded-xl bg-peach-soft text-dark-obsidian font-bold text-xs font-mono uppercase tracking-wider hover:bg-peach-champagne transition-all shadow-md shadow-peach/25 shrink-0"
          >
            ORDER SPARES / REQUEST SUPPORT
          </button>
        </div>

      </div>
    </div>
  );
};
