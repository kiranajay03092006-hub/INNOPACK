import React from 'react';
import { AlertCircle, Scale, ShieldAlert, Cpu, Network, Wrench, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { GlassTiltCard } from '../effects/GlassTiltCard';

export const IndustrialChallenge: React.FC = () => {
  const challenges = [
    {
      num: "01",
      tag: "WEIGHING ACCURACY",
      title: "Inaccurate Product Weighing",
      subtitle: "Costly Giveaway & Statutory Underfill Liabilities",
      problem: "Packaging line managers face statutory penalties for underweight consignments, while uncalibrated overfilling quietly bleeds kilograms of expensive product across millions of packs every shift.",
      solution: "Innopack dynamic check weighers utilize hermetically sealed strain-gauge loadcells sampling at 1000 Hz with automatic zero-drift compensation, delivering ±3g precision on moving conveyors.",
      renderDiagram: () => (
        <div className="p-3 rounded-xl bg-dark-obsidian/80 border border-white/5 space-y-2 font-mono text-[10px]">
          <div className="flex items-center justify-between text-silver-steel">
            <span>CALIBRATION TOLERANCE BAND</span>
            <span className="text-peach-soft">±3.0g DYNAMIC</span>
          </div>
          <svg className="w-full h-14 overflow-visible" viewBox="0 0 260 50">
            {/* Upper & Lower Tolerance Band */}
            <rect x="0" y="10" width="260" height="30" fill="rgba(244, 183, 165, 0.08)" rx="4" />
            <line x1="0" y1="10" x2="260" y2="10" stroke="rgba(244, 183, 165, 0.3)" strokeDasharray="3 3" />
            <line x1="0" y1="40" x2="260" y2="40" stroke="rgba(244, 183, 165, 0.3)" strokeDasharray="3 3" />
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255, 255, 255, 0.2)" />
            {/* Uncalibrated Giveaway Drift (Red/Dim) */}
            <path d="M0 32 Q 50 18, 100 8 T 200 4 T 260 2" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />
            {/* Innopack Precision Calibrated (Peach) */}
            <path d="M0 25 Q 40 23, 80 26 T 160 24 T 260 25" fill="none" stroke="#F4B7A5" strokeWidth="2" />
            <circle cx="160" cy="24" r="3" fill="#F4B7A5" />
          </svg>
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-red-400">--- Uncalibrated Drift (Giveaway Loss)</span>
            <span className="text-peach-soft font-semibold">― Innopack ±3g Target</span>
          </div>
        </div>
      )
    },
    {
      num: "02",
      tag: "LINE CONTINUITY",
      title: "Unsynchronized Production Lines",
      subtitle: "Conveyor Jams, Seal Bottlenecks & Shift Downtime",
      problem: "Standalone sealing and bagging machines running at 40+ packs/min cause severe pile-ups if inspection conveyors slip, pause, or fail to divert rejected packs at line speed without interrupting upstream flow.",
      solution: "Our high-speed variable speed conveyors integrate pneumatic pushers, drop-belts, and mechanical diverters capable of rejecting out-of-spec packages seamlessly at up to 45 packs/min.",
      renderDiagram: () => (
        <div className="p-3 rounded-xl bg-dark-obsidian/80 border border-white/5 space-y-2 font-mono text-[10px]">
          <div className="flex items-center justify-between text-silver-steel">
            <span>CONVEYOR FLOW VELOCITY</span>
            <span className="text-peach-soft">45 PPM SYNCHRONIZED</span>
          </div>
          <svg className="w-full h-14 overflow-visible" viewBox="0 0 260 50">
            {/* Conveyor Belt Track */}
            <rect x="0" y="20" width="180" height="10" rx="3" fill="rgba(216, 218, 221, 0.15)" />
            {/* Moving Infeed Packs */}
            <rect x="15" y="14" width="22" height="16" rx="2" fill="#D8DADD" opacity="0.8" />
            <rect x="65" y="14" width="22" height="16" rx="2" fill="#D8DADD" opacity="0.8" />
            <rect x="115" y="14" width="22" height="16" rx="2" fill="#F4B7A5" />
            {/* Diverter Actuator Arm */}
            <line x1="145" y1="10" x2="160" y2="35" stroke="#F4B7A5" strokeWidth="2.5" />
            {/* Divert Rejection Bin Path */}
            <path d="M150 25 Q 180 35, 230 45" fill="none" stroke="#F4B7A5" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="220" y="36" width="35" height="12" rx="2" fill="rgba(244, 183, 165, 0.2)" stroke="#F4B7A5" strokeWidth="1" />
            <text x="225" y="45" fill="#F4B7A5" fontSize="8" fontFamily="monospace">REJECT</text>
          </svg>
          <div className="flex items-center justify-between text-[9px] text-silver-steel">
            <span>Dynamic Infeed (45 PPM)</span>
            <span className="text-emerald-400 font-semibold">Continuous Zero-Stall</span>
          </div>
        </div>
      )
    },
    {
      num: "03",
      tag: "DIGITAL TELEMETRY",
      title: "Isolated Automation Islands",
      subtitle: "Blind Operations, Missing Audits & Slow Diagnostics",
      problem: "Conventional check weighers without digital interfaces leave plant supervisors blind to shift weight distribution trends and require days of waiting for technician visits during unexpected line stoppages.",
      solution: "Innopack systems feature USB statistical audit logging, RS485 PLC communication, and encrypted remote diagnostics accessible via LAN, Wi-Fi, or modem directly from our Ambattur support center.",
      renderDiagram: () => (
        <div className="p-3 rounded-xl bg-dark-obsidian/80 border border-white/5 space-y-2 font-mono text-[10px]">
          <div className="flex items-center justify-between text-silver-steel">
            <span>PLANT TELEMETRY ARCHITECTURE</span>
            <span className="text-peach-soft">RS485 / LAN / MODBUS</span>
          </div>
          <svg className="w-full h-14 overflow-visible" viewBox="0 0 260 50">
            {/* HMI Node */}
            <rect x="10" y="10" width="55" height="30" rx="3" fill="rgba(244, 183, 165, 0.15)" stroke="#F4B7A5" strokeWidth="1" />
            <text x="18" y="28" fill="#F4B7A5" fontSize="9" fontFamily="monospace">HMI 10.1"</text>
            {/* Connecting Bus */}
            <line x1="65" y1="25" x2="110" y2="25" stroke="#D8DADD" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* PLC Integration Node */}
            <rect x="110" y="10" width="55" height="30" rx="3" fill="rgba(216, 218, 221, 0.1)" stroke="#D8DADD" strokeWidth="1" />
            <text x="120" y="28" fill="#D8DADD" fontSize="9" fontFamily="monospace">LINE PLC</text>
            {/* Ambattur Diagnostic Cloud Bus */}
            <line x1="165" y1="25" x2="200" y2="25" stroke="#F4B7A5" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="200" y="10" width="55" height="30" rx="3" fill="rgba(244, 183, 165, 0.25)" stroke="#F4B7A5" strokeWidth="1" />
            <text x="205" y="28" fill="#F4B7A5" fontSize="8" fontFamily="monospace">AMBATTUR</text>
          </svg>
          <div className="flex items-center justify-between text-[9px] text-silver-steel">
            <span>USB Shift CSV Export</span>
            <span className="text-peach-soft font-semibold">24/7 Diagnostics Link</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="problem-section" className="problem relative bg-dark-graphite py-24 border-b border-white/10 overflow-hidden">
      
      {/* Background Framing Vertical Lines (BusyBox Pattern) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 bottom-0 left-4 sm:left-6 lg:left-8 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 bottom-0 right-4 sm:right-6 lg:right-8 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent pointer-events-none hidden md:block" />

        {/* Top Hairline Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-16" />

        {/* Section Header with BusyBox Split-Span Title */}
        <header className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="bb-tag">
            <AlertCircle className="w-3.5 h-3.5 text-peach-soft" />
            <span>THE PACKAGING CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-softWhite leading-tight">
            <span className="block">THE GAP BETWEEN HIGH-SPEED PACKAGING</span>
            <span className="text-peach-gradient block">AND GUARANTEED ZERO GIVEAWAY.</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-metallic leading-relaxed font-sans max-w-2xl mx-auto">
            High-volume food, chemical, and FMCG manufacturing plants lose significant profit at the final weighing station. We engineer machines to solve three core vulnerabilities:
          </p>
        </header>

        {/* 3 Problem Cards Grid with Interactive Technical Diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <GlassTiltCard key={idx} className="h-full">
              <article className="pcard relative rounded-2xl glass-panel p-8 h-full flex flex-col justify-between border border-silver-border hover:border-peach-soft/50 transition-all duration-300 light-streak group">
                
                {/* 4 Corner Technical Brackets */}
                <span className="bb-corner-bracket bb-corner-tl" />
                <span className="bb-corner-bracket bb-corner-tr" />
                <span className="bb-corner-bracket bb-corner-bl" />
                <span className="bb-corner-bracket bb-corner-br" />

                <div className="space-y-6">
                  
                  {/* Top Card Meta: Monospace Number & Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-2xl font-bold font-mono text-peach-soft">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-dark-obsidian border border-silver-border text-silver-pale">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-mono text-peach-champagne font-semibold block uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-bold font-display text-softWhite group-hover:text-peach-soft transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Problem Description */}
                  <p className="text-xs sm:text-sm text-silver-pale leading-relaxed font-sans text-left">
                    {item.problem}
                  </p>

                  {/* Technical CAD Diagram */}
                  <div className="pt-2">
                    {item.renderDiagram()}
                  </div>

                </div>

                {/* Bottom Engineered Solution Callout */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-peach-soft font-semibold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-peach-soft" />
                    <span>INNOPACK ENGINEERING FIX:</span>
                  </div>
                  <p className="text-xs text-silver-metallic leading-relaxed font-sans">
                    {item.solution}
                  </p>
                </div>

              </article>
            </GlassTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
