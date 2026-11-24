import React from 'react';

interface CentralObjectProps {
  mousePos?: { x: number; y: number };
  onHoverObject?: (hovered: boolean) => void;
}

export const CentralObject: React.FC<CentralObjectProps> = () => {
  // Center cube and radiating lines removed per user request for a clean, uninterrupted landscape view
  return null;
};
