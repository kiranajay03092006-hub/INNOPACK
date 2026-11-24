import React from 'react';

interface IntroTransitionProps {
  isEntering: boolean;
  children: React.ReactNode;
}

export const IntroTransition: React.FC<IntroTransitionProps> = ({ isEntering, children }) => {
  return (
    <div className={`transition-all duration-1000 ease-out ${
      isEntering 
        ? 'opacity-100 translate-y-0 filter-none' 
        : 'opacity-0 -translate-y-8 blur-sm pointer-events-none'
    }`}>
      {children}
    </div>
  );
};
