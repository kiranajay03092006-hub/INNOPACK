import React from 'react';

interface LaserScannerProps {
  label?: string;
  subLabel?: string;
}

export const LaserScanner: React.FC<LaserScannerProps> = ({ 
  label = "LOADCELL CALIBRATION: ACTIVE",
  subLabel = "DYNAMIC ZERO-DRIFT TRACKING • 1ms SAMPLING"
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10">
      {/* Precision Corner Reticles in Peach and Silver */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-peach-soft shadow-[0_0_8px_#F4B7A5]"></div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-peach-soft shadow-[0_0_8px_#F4B7A5]"></div>
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-silver-pale shadow-[0_0_8px_#D8DADD]"></div>
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-silver-pale shadow-[0_0_8px_#D8DADD]"></div>

      {/* Moving Peach Laser Beam */}
      <div className="laser-beam animate-laser-sweep"></div>

      {/* High-Tech Telemetry HUD Overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel-heavy border border-peach-soft/30 text-[10px] font-mono text-peach-soft">
        <span className="w-1.5 h-1.5 rounded-full bg-peach-soft animate-ping"></span>
        <span>{label}</span>
      </div>

      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full glass-panel-heavy border border-silver-border text-[9px] font-mono text-silver-pale">
        <span>{subLabel}</span>
      </div>
    </div>
  );
};
