'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Disable on admin routes
    if (pathname?.startsWith('/admin')) {
      setLoading(false);
      return;
    }

    // Check if we've already shown the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setLoading(false);
      return;
    }

    // Progress animation
    const duration = 3000;
    const intervalTime = 30; // update every 30ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('hasSeenSplash', 'true');
        }, 300); // Wait a bit after reaching 100% before fading out
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50 transition-opacity duration-1000 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-orange-400/10 blur-[60px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full px-8">
        {/* Logo */}
        <div className="mb-10 relative">
          <img 
            src="/images/logo.png" 
            alt="Rudhran Travels Logo" 
            className="w-56 md:w-72 relative z-10 drop-shadow-xl"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-[280px] md:max-w-xs h-1.5 bg-slate-200 rounded-full overflow-hidden mb-5 relative shadow-inner">
          {/* Animated fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-orange-500 rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text */}
        <div className="text-slate-600 font-bold tracking-widest text-[11px] md:text-xs tabular-nums flex items-center justify-center min-w-[80px]">
          {progress === 100 ? (
            <span className="text-emerald-600 uppercase animate-pulse">Ready</span>
          ) : (
            <span>LOADING {progress}%</span>
          )}
        </div>
      </div>
    </div>
  );
}
