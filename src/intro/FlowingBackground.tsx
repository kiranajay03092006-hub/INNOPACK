import React, { useRef, useState, useEffect } from 'react';

interface FlowingBackgroundProps {
  mousePos: { x: number; y: number };
}

export const FlowingBackground: React.FC<FlowingBackgroundProps> = ({ mousePos }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.95;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setVideoLoaded(true)).catch(() => {});
      }
    }
  }, []);

  const offsetX = typeof window !== 'undefined'
    ? ((mousePos.x / window.innerWidth) - 0.5) * 12
    : 0;
  const offsetY = typeof window !== 'undefined'
    ? ((mousePos.y / window.innerHeight) - 0.5) * 12
    : 0;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#0E0B0A]">
      {/* 1. Base Ultra-HD Vibrant Poster Image (Always visible, full richness) */}
      <img
        src="/assets/busybox-hero-bg.jpg"
        alt="Innopack Industrial Landscape"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-[1.02]"
        style={{
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.02)`
        }}
      />

      {/* 2. Looping Video on Top (Fades in over poster once playing) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out scale-[1.02] ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.02)`
        }}
      >
        <source src="/assets/busybox-hero-video.mp4" type="video/mp4" />
      </video>

      {/* 3. Subtle Film Grain Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
