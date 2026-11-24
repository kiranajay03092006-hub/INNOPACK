import React, { useEffect, useState, useRef } from 'react';

interface IntroCursorProps {
  isOverObject?: boolean;
}

export const IntroCursor: React.FC<IntroCursorProps> = ({ isOverObject }) => {
  const [isOn, setIsOn] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate for mouse pointers on desktop
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsOn(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = !!target.closest('a, button, [role="button"], .bb-button, .bb-tag');
        setIsLink(interactive);
      }
    };

    const handleMouseLeave = () => setIsOn(false);
    const handleMouseEnter = () => setIsOn(true);

    const updateLoop = () => {
      // Direct instant dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp follower ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${isOn ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
      {/* Central Cursor Dot in Soft Peach */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-peach-soft transition-transform duration-200 ${
          isLink || isOverObject ? 'scale-150 bg-softWhite' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Following Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-peach-soft/60 transition-all duration-300 ${
          isLink 
            ? 'scale-150 border-peach-soft bg-peach-soft/10 shadow-[0_0_15px_rgba(244,183,165,0.4)]' 
            : isOverObject 
              ? 'scale-175 border-softWhite border-dashed animate-spin' 
              : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
