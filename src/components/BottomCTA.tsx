'use client';

import React from 'react';
import { BadgeCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

interface BottomCTAProps {
  onOpenBookingModal?: () => void;
}

export default function BottomCTA({ onOpenBookingModal }: BottomCTAProps) {
  return (
    <section className="py-12 md:py-16 md: relative md: bg-[#0a1128] overflow-hidden border-t border-slate-800">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
          <span>Instant Dispatch Available</span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
          Ready for Your Next Journey?
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Book your reliable cab or holiday package from Madurai today with transparent rates and dedicated chauffeur support.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <button 
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto bg-[#d97706] hover:bg-orange-600 text-white font-bold text-sm px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/25"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a 
            href="https://wa.me/918760380485" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-sm px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/25"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Quick Quote</span>
          </a>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span>No Cancellation Fees</span>
          </div>
          <span className="hidden sm:inline-block text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span>24/7 Madurai Airport Pickup</span>
          </div>
        </div>

      </div>
    </section>
  );
}
