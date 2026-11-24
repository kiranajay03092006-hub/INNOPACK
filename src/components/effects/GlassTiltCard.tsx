import React, { useState, useRef } from 'react';

interface GlassTiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'peach' | 'silver' | 'neutral';
}

export const GlassTiltCard: React.FC<GlassTiltCardProps> = ({ 
  children, 
  className = '',
  glowColor = 'peach'
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth tilt angles
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform,
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`relative glass-panel rounded-2xl overflow-hidden ${className}`}
    >
      {/* Dynamic Specular Peach/Silver Glare Layer */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(244, 183, 165, 0.25) 0%, rgba(216, 218, 221, 0.10) 30%, transparent 65%)`
        }}
      />
      {children}
    </div>
  );
};
