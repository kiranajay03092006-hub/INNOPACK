import React, { useState, useEffect } from 'react';
import { Activity, Gauge, Sliders, ShieldCheck, CheckCircle2, AlertTriangle, RefreshCw, Zap } from 'lucide-react';
import { GlassTiltCard } from './GlassTiltCard';

export const InteractiveWeighingSimulator: React.FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<'cw03' | 'dynamic' | 'static'>('cw03');
  const [targetWeight, setTargetWeight] = useState<number>(500); // grams
  const [simulatedSample, setSimulatedSample] = useState<number>(501.2);
  const [toleranceGrams, setToleranceGrams] = useState<number>(3);
  const [speedPPM, setSpeedPPM] = useState<number>(40);
  const [status, setStatus] = useState<'pass' | 'underfill' | 'overfill'>('pass');
  const [packCount, setPackCount] = useState<number>(1842);
  const [rejectCount, setRejectCount] = useState<number>(14);

  const handleSelectMachine = (type: 'cw03' | 'dynamic' | 'static') => {
    setSelectedMachine(type);
    if (type === 'cw03') {
      setTargetWeight(500);
      setToleranceGrams(3);
      setSpeedPPM(42);
      setSimulatedSample(500.8);
    } else if (type === 'dynamic') {
      setTargetWeight(15000); // 15kg
      setToleranceGrams(20);
      setSpeedPPM(28);
      setSimulatedSample(15012);
    } else {
      setTargetWeight(25000); // 25kg
      setToleranceGrams(5);
      setSpeedPPM(10);
      setSimulatedSample(25003);
    }
  };

  useEffect(() => {
    const diff = simulatedSample - targetWeight;
    if (Math.abs(diff) <= toleranceGrams) {
      setStatus('pass');
    } else if (diff < -toleranceGrams) {
      setStatus('underfill');
    } else {
      setStatus('overfill');
    }
  }, [simulatedSample, targetWeight, toleranceGrams]);

  const handleSimulatePass = (scenario: 'perfect' | 'under' | 'over') => {
    setPackCount(prev => prev + 1);
    if (scenario === 'perfect') {
      const variance = (Math.random() - 0.5) * (toleranceGrams * 0.8);
      setSimulatedSample(Number((targetWeight + variance).toFixed(1)));
    } else if (scenario === 'under') {
      setRejectCount(prev => prev + 1);
      const under = -(toleranceGrams + 2 + Math.random() * 5);
      setSimulatedSample(Number((targetWeight + under).toFixed(1)));
    } else {
      setRejectCount(prev => prev + 1);
      const over = toleranceGrams + 2 + Math.random() * 6;
      setSimulatedSample(Number((targetWeight + over).toFixed(1)));
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark-obsidian via-dark-graphite to-dark-obsidian relative overflow-hidden border-t border-b border-silver-border">
      {/* Background Volumetric Peach Glow */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-volumetric-peach blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-peach-soft/30 text-xs font-mono text-peach-soft uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-peach-soft animate-pulse" />
            <span>INTERACTIVE WEIGHING & REJECTION HUD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            DYNAMIC WEIGHING <br />
            <span className="text-peach-gradient">CALIBRATION SIMULATOR.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-pale leading-relaxed font-sans">
            Test how our high-speed loadcells and auto-zero tracking algorithms detect minute gram variations in real time, trigger pneumatic rejection, and safeguard statutory fill tolerances.
          </p>
        </div>

        {/* Interactive Glass Console */}
        <div className="rounded-3xl glass-panel-heavy p-6 sm:p-10 specular-corner space-y-8 shadow-2xl">
          
          {/* Machine Selection Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-silver-border">
            <span className="text-xs font-mono text-silver-metallic uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Sliders className="w-4 h-4 text-peach-soft" />
              SELECT EQUIPMENT PROFILE:
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSelectMachine('cw03')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedMachine === 'cw03'
                    ? 'bg-peach-soft text-dark-obsidian font-bold shadow-[0_0_15px_rgba(244,183,165,0.4)]'
                    : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
                }`}
              >
                COMPACT CW-03 (100g–3kg)
              </button>
              <button
                onClick={() => handleSelectMachine('dynamic')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedMachine === 'dynamic'
                    ? 'bg-peach-soft text-dark-obsidian font-bold shadow-[0_0_15px_rgba(244,183,165,0.4)]'
                    : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
                }`}
              >
                DYNAMIC CHECKWEIGHER (10–30kg)
              </button>
              <button
                onClick={() => handleSelectMachine('static')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedMachine === 'static'
                    ? 'bg-peach-soft text-dark-obsidian font-bold shadow-[0_0_15px_rgba(244,183,165,0.4)]'
                    : 'bg-dark-surface text-silver-pale hover:text-softWhite border border-silver-border'
                }`}
              >
                STATIC CHECKWEIGHER (10–30kg)
              </button>
            </div>
          </div>

          {/* Main Dashboard Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Weight Oscilloscope / Dial Readout */}
            <div className="lg:col-span-7 bg-dark-obsidian/90 rounded-2xl p-6 sm:p-8 border border-silver-border space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-silver-pale flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-peach-soft animate-ping"></span>
                  DIGITAL LOADCELL OSCILLOSCOPE (1000 Hz)
                </span>
                <span className="text-peach-soft font-bold">STABLE ZERO-DRIFT</span>
              </div>

              {/* Dynamic Waveform SVG */}
              <div className="h-32 w-full flex items-center justify-center relative">
                <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(216,218,221,0.1)" strokeDasharray="4 4" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(244,183,165,0.2)" />
                  <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(216,218,221,0.1)" strokeDasharray="4 4" />

                  {/* Dynamic Weight Trace */}
                  <path
                    d={`M 0,60 Q 100,${status === 'pass' ? '58' : status === 'underfill' ? '95' : '25'} 250,${status === 'pass' ? '60' : status === 'underfill' ? '92' : '28'} T 500,60`}
                    fill="none"
                    stroke="#F4B7A5"
                    strokeWidth="3"
                    className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(244,183,165,0.8)]"
                  />
                </svg>
                
                {/* Center Weight Measurement */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl sm:text-5xl font-bold font-display text-softWhite tracking-wider">
                    {simulatedSample} {selectedMachine === 'cw03' ? 'g' : 'g'}
                  </span>
                  <span className="text-xs font-mono text-silver-pale mt-1">
                    TARGET: {targetWeight}g • TOLERANCE: ±{toleranceGrams}g
                  </span>
                </div>
              </div>

              {/* Real-time Status Banner */}
              <div className={`p-4 rounded-xl flex items-center justify-between text-xs font-mono transition-all ${
                status === 'pass'
                  ? 'bg-peach-soft/15 border border-peach-soft/50 text-peach-soft'
                  : 'bg-dark-surface border border-silver-pale text-softWhite'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {status === 'pass' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-peach-soft" />
                      <span>WEIGHT VERIFIED WITHIN SPECIFICATION — ACCEPT PACK</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-peach-soft" />
                      <span>OFF-SPECIFICATION DETECTED: {status === 'underfill' ? 'UNDERFILL' : 'OVERFILL'} — PNEUMATIC EJECT ACTIVE</span>
                    </>
                  )}
                </div>
                <span className="hidden sm:inline font-bold">
                  {Math.abs(simulatedSample - targetWeight).toFixed(1)}g VARIANCE
                </span>
              </div>
            </div>

            {/* Test Controller Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-mono text-silver-metallic uppercase font-semibold block">
                  SIMULATE WEIGHING SCENARIOS:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleSimulatePass('perfect')}
                    className="p-3 rounded-xl bg-peach-soft/15 hover:bg-peach-soft hover:text-dark-obsidian border border-peach-soft/40 text-peach-soft text-xs font-mono font-bold transition-all text-center cursor-pointer"
                  >
                    PASS PACK<br />(In Tolerance)
                  </button>
                  <button
                    onClick={() => handleSimulatePass('under')}
                    className="p-3 rounded-xl bg-dark-surface hover:bg-dark-graphite border border-silver-border text-silver-pale text-xs font-mono font-bold transition-all text-center cursor-pointer"
                  >
                    UNDERFILL<br />(Eject Low)
                  </button>
                  <button
                    onClick={() => handleSimulatePass('over')}
                    className="p-3 rounded-xl bg-dark-surface hover:bg-dark-graphite border border-silver-border text-silver-pale text-xs font-mono font-bold transition-all text-center cursor-pointer"
                  >
                    OVERFILL<br />(Eject High)
                  </button>
                </div>
              </div>

              {/* Dynamic Counters */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl glass-panel border border-silver-border space-y-1">
                  <span className="text-[10px] font-mono text-silver-metallic uppercase">Total Inspected</span>
                  <span className="text-2xl font-bold font-display text-softWhite block">{packCount}</span>
                  <span className="text-[10px] font-mono text-peach-soft">Line Speed: {speedPPM} PPM</span>
                </div>
                <div className="p-4 rounded-xl glass-panel border border-silver-border space-y-1">
                  <span className="text-[10px] font-mono text-silver-metallic uppercase">Total Rejected</span>
                  <span className="text-2xl font-bold font-display text-peach-soft block">{rejectCount}</span>
                  <span className="text-[10px] font-mono text-silver-metallic">Reject Rate: {((rejectCount / packCount) * 100).toFixed(2)}%</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-surface/60 border border-silver-border text-[11px] font-mono text-silver-pale leading-relaxed">
                Automated shift report data syncs via RS232, USB, or remote LAN/Wi-Fi connection to central ERP and engineering stations.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
