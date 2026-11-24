import React, { useState, useEffect } from 'react';
import { FlowingBackground } from './FlowingBackground';
import { CentralObject } from './CentralObject';
import { ConnectionLines } from './ConnectionLines';

interface IntroSceneProps {
  onHoverObject?: (hovered: boolean) => void;
}

export const IntroScene: React.FC<IntroSceneProps> = ({ onHoverObject }) => {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-dark-obsidian">
      {/* 1. Procedural Flowing Metallic Peach & Silver Strands Background */}
      <FlowingBackground mousePos={mousePos} />

      {/* 2. Floating 3D Industrial Precision Glass Cube & Radial Connecting Lines */}
      <CentralObject mousePos={mousePos} onHoverObject={onHoverObject} />

      {/* 3. 2D Coordinate Blueprint HUD & Reticles */}
      <ConnectionLines />
    </div>
  );
};
