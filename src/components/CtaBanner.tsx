'use client';

import React from 'react';
import Image from 'next/image';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export default function CtaBanner({ onOpenBookingModal }: CtaBannerProps) {
  return (
    <section className="relative bg-[#081325] text-white py-24 sm:py-28 overflow-hidden border-t border-b border-slate-800 poppins-regular">
      
      {/* Background Image Layer (Fallback gradient + customizable bg image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home/cta_bg.png"
          alt="Futuristic City Fleet Background"
          fill
          className="object-cover opacity-35"
          onError={(e) => {
            // Hide image if file not yet uploaded by user
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081325]/90 via-[#081325]/70 to-[#081325]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        
        {/* Top Gold Label */}
        <div className="text-[11px] sm:text-xs font-normal text-[#e5b638] uppercase tracking-widest">
          YOUR PERSONAL FLEET AWAITS
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white max-w-3xl mx-auto leading-snug">
          Are You Ready to Planning a <br className="hidden sm:inline" /> Trip?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-normal leading-relaxed pt-1">
          Tell us your destination and we'll help you choose the right vehicle. Pickup Location, Destination, Travel Date, Passengers, Vehicle Preference...
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-full bg-[#e5b638] hover:bg-[#d6a528] text-slate-950 font-normal text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all hover:scale-105"
          >
            BOOK JOURNEY NOW
          </button>

          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-full bg-transparent border border-slate-400 hover:border-white hover:bg-white/10 text-white font-normal text-xs uppercase tracking-wider transition-all"
          >
            CONTACT US
          </button>
        </div>

      </div>
    </section>
  );
}
