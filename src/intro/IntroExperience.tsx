import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IntroScene } from './IntroScene';
import { IntroTypography } from './IntroTypography';
import { IntroCursor } from './IntroCursor';

interface IntroExperienceProps {
  onEnterWebsite: (targetSection?: string) => void;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({ onEnterWebsite }) => {
  const [animStage, setAnimStage] = useState<number>(5);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isOverObject, setIsOverObject] = useState<boolean>(false);

  // Lock body scroll while Intro is active to prevent page jump
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Crisp choreographed reveal sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimStage(1), 80),   // Video & Background
      setTimeout(() => setAnimStage(2), 250),  // Eyebrow
      setTimeout(() => setAnimStage(3), 450),  // Main Headline
      setTimeout(() => setAnimStage(4), 650),  // Supporting Text
      setTimeout(() => setAnimStage(5), 850),  // CTAs & Actions
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  // Smooth continuous dissolve transition
  const handleTriggerEnter = (targetSection?: string) => {
    if (isExiting) return;
    setIsExiting(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      onEnterWebsite(targetSection);
    }, 450);
  };

  // Wheel listener: naturally detect downward scroll to enter
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 20 && !isExiting) {
        handleTriggerEnter();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'Enter', 'ArrowDown', 'PageDown'].includes(e.code) && !isExiting) {
        handleTriggerEnter();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExiting]);

  return (
    <div className={`fixed inset-0 w-screen h-screen z-50 bg-[#0E0B0A] overflow-hidden select-none transition-all duration-500 ease-out ${
      isExiting ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      
      {/* 1. Subtle Custom Cursor */}
      <IntroCursor isOverObject={isOverObject} />

      {/* 2. Top Header Navigation (Single, Clean, Matches BusyBox Exactly) */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 lg:px-16 py-7 flex items-center justify-between border-b border-transparent bg-transparent">
        
        {/* Innopack Brand Wordmark & Peach Emblem */}
        <div className="flex items-center gap-3">
          <img 
            src="/assets/innopack_mark_peach.png" 
            alt="Innopack Emblem" 
            className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(244,183,165,0.4)]"
          />
          <div className="flex items-baseline gap-1">
            <span className="font-sans font-bold text-base sm:text-lg text-softWhite tracking-tight">
              Innopack
            </span>
            <span className="text-peach-soft font-mono text-xs font-semibold">
              Automation®
            </span>
          </div>
        </div>

        {/* Minimal Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Home', section: 'home' },
            { label: 'Solutions', section: 'solutions-section' },
            { label: 'Process', section: 'process-section' },
            { label: 'Machinery', section: 'products-showcase' },
            { label: 'Challenges', section: 'problem-section' },
            { label: 'Contact', section: 'contact-section' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleTriggerEnter(item.section)}
              className="bb-nav-item text-xs font-mono tracking-wider focus:outline-none"
            >
              <span>{item.label}</span>
              <span className="bb-nav-star" aria-hidden="true">*</span>
            </button>
          ))}
        </nav>

        {/* Top-Right Action Pill (Matches BusyBox 'Book a call ↗') */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleTriggerEnter('contact-section')}
            className="px-4 py-2 rounded-full border border-white/20 hover:border-peach-soft text-softWhite hover:text-peach-soft text-xs font-mono tracking-wide transition-all duration-300 flex items-center gap-1.5 group backdrop-blur-md"
          >
            <span>Request a quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </header>

      {/* 3. Cinematic 3D Scene (Video Background + 3D Isometric Cube + Radiating Rays) */}
      <div className="absolute inset-0 opacity-100">
        <IntroScene onHoverObject={setIsOverObject} />
      </div>

      {/* 4. Left Asymmetric Editorial Typography */}
      <IntroTypography
        onEnter={() => handleTriggerEnter()}
        onSkip={() => handleTriggerEnter()}
        animStage={animStage}
      />

    </div>
  );
};
