import React from 'react';
import { X, Activity, Play, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl = '/assets/Innopack_Checkweigher_Video_01.mp4',
  title = "Innopack Check Weigher — Real-Time Production Demonstration"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl glass-panel-heavy rounded-2xl border border-silver-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-graphite border-b border-silver-border">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-peach-soft animate-ping"></span>
            <div>
              <h3 className="font-display font-bold text-softWhite text-base md:text-lg tracking-wide uppercase">
                {title}
              </h3>
              <p className="text-xs font-mono text-silver-metallic">
                Innopack Automation • Factory Floor Telemetry & Inline Operation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-silver-pale hover:text-softWhite hover:bg-dark-surface transition-colors"
            aria-label="Close Video"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative bg-black aspect-video flex items-center justify-center">
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Footer Telemetry HUD */}
        <div className="px-6 py-4 bg-dark-obsidian border-t border-silver-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-2.5 rounded-xl glass-panel border border-silver-border">
            <span className="text-silver-metallic block text-[10px] uppercase">DYNAMIC SPEED</span>
            <span className="text-softWhite font-bold text-sm">30 - 45 PPM</span>
          </div>
          <div className="p-2.5 rounded-xl glass-panel border border-peach-soft/30">
            <span className="text-silver-metallic block text-[10px] uppercase">ACCURACY BENCHMARK</span>
            <span className="text-peach-soft font-bold text-sm">±3g to 5g</span>
          </div>
          <div className="p-2.5 rounded-xl glass-panel border border-silver-border">
            <span className="text-silver-metallic block text-[10px] uppercase">REJECTION SYSTEM</span>
            <span className="text-softWhite font-bold text-sm">Pneumatic / Drop</span>
          </div>
          <div className="p-2.5 rounded-xl glass-panel border border-silver-border">
            <span className="text-silver-metallic block text-[10px] uppercase">TELEMETRY</span>
            <span className="text-peach-soft font-bold text-sm">LAN / Wi-Fi Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
