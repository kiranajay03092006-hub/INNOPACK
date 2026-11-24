import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor if device supports hover and has fine pointer (mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    document.documentElement.classList.add('has-cursor');

    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(updatePosition);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsOn(true);

      // Check if target or parent is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, [role="button"], input, textarea, select, .is-clickable, [data-cursor="pointer"], .bb-button, .bb-nav-item, .bacc__btn, .pcard'
        );
        setIsLink(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsOn(false);
    };

    const handleMouseEnter = () => {
      setIsOn(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isOn ? 'is-on' : ''} ${isLink ? 'is-link' : ''}`}
      aria-hidden="true"
    >
      <span className="cursor__dot" />
    </div>
  );
};
