import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroTypographyProps {
  onEnter: () => void;
  onSkip: () => void;
  animStage: number;
}

export const IntroTypography: React.FC<IntroTypographyProps> = ({ onEnter, onSkip }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      
      {/* 1. Middle-Left Heading Group (Exact BusyBox .hero__heading-group) */}
      <div 
        className="absolute left-6 sm:left-12 lg:left-16 pointer-events-auto max-w-[540px] space-y-6"
        style={{
          top: 'calc(50% - 30px)',
          transform: 'translateY(-50%)'
        }}
      >
        {/* Eyebrow Label */}
        <p className="text-[17px] sm:text-[18px] font-normal text-[#E0DDD9]/85 tracking-[-0.03em] font-sans">
          Precision Engineering, Zero Giveaway
        </p>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium font-sans text-white leading-[1.03] tracking-[-0.05em]">
          Packaging Automation <br />
          <span className="text-white">for high-speed production lines</span>
        </h1>
      </div>

      {/* 2. Bottom Row: Supporting Text & Contact (Exact BusyBox .hero__body) */}
      <div 
        className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-16 right-6 sm:right-12 lg:right-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-auto"
      >
        {/* Left Sub-paragraph */}
        <div className="max-w-[420px] space-y-3.5">
          <p className="text-[15px] text-[#D8DADD]/90 leading-[1.4] tracking-[-0.02em] font-sans">
            Dynamic check weighers, automated packaging machinery and custom engineering systems manufactured in SIDCO Ambattur, Chennai.
          </p>

          <div className="flex items-center gap-4 pt-1">
            <button
              onClick={onEnter}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4B7A5] hover:text-white transition-colors group cursor-pointer"
            >
              <span>ENTER WEBSITE</span>
              <span className="text-[#F4B7A5] font-mono text-sm">*</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onSkip}
              className="text-xs font-mono uppercase tracking-wider text-[#8A8F98] hover:text-[#D8DADD] transition-colors cursor-pointer"
            >
              Skip Intro →
            </button>
          </div>
        </div>

        {/* Right Contact Anchor with BusyBox Corner Bracket */}
        <div className="flex items-center gap-3 text-[15px] text-[#D8DADD]/90 font-sans tracking-[-0.02em]">
          <a 
            href="mailto:sales@innopackautomation.com"
            className="hover:text-[#F4B7A5] transition-colors underline decoration-white/30 underline-offset-4"
          >
            sales@innopackautomation.com
          </a>
          <span className="text-[#F4B7A5] font-mono text-sm select-none" aria-hidden="true">﹂</span>
        </div>

      </div>

    </div>
  );
};
