'use client';

import React from 'react';
import { PhoneCall, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export default function CtaBanner({ onOpenBookingModal }: CtaBannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest shadow-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>ARE YOU READY TO EXPLORE?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Book Your Outstation Car Drive <br />
          With <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">Complete Peace Of Mind</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Instant booking confirmation, verified commercial drivers, 24x7 GPS safety monitoring, and zero hidden charges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-base shadow-2xl shadow-orange-500/30 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            <span>BOOK ONLINE NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:+919876543210"
            className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-bold text-base flex items-center space-x-3 transition-all hover:text-amber-400"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" />
            <span>HELPLINE: +91 98765 43210</span>
          </a>
        </div>

      </div>
    </section>
  );
}
