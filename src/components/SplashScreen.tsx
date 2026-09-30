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
    <div className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a1526] transition-opacity duration-1000 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-white/10 blur-xl rounded-full"></div>
          <img 
            src="/images/logo.png" 
            alt="Rudhran Travels Logo" 
            className="w-48 md:w-64 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
          {/* Animated fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-500 rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text */}
        <div className="text-white/80 font-medium tracking-widest text-sm tabular-nums flex items-center gap-2">
          <span>{progress}%</span>
          {progress === 100 && (
            <span className="text-emerald-400 text-xs uppercase animate-pulse">Ready</span>
          )}
        </div>
      </div>
    </div>
  );
}
