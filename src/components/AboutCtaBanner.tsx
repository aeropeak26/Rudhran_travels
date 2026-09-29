'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';

export default function AboutCtaBanner() {
  return (
    <section className="relative bg-[#0a1526] py-12 md:py-16 poppins-regular overflow-hidden flex items-center justify-center">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">
          BEGIN YOUR JOURNEY
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Plan Your Journey?
        </h2>
        
        <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us about your upcoming travel plans or group requirements. Our travel experts are available 24/7 to provide instant quotes and personalized assistance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="/#vehicles"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[13px] px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
          >
            Explore Vehicles
          </Link>
          
          <Link 
            href="/contact"
            className="bg-white hover:bg-slate-100 text-[#0f172a] font-bold text-[13px] px-8 py-3.5 rounded-lg shadow-md transition-all"
          >
            Contact Us
          </Link>

          <a 
            href="https://wa.me/919840012345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#022c22] border border-emerald-900/50 hover:bg-[#064e3b] text-emerald-400 font-bold text-[13px] px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>

          <a 
            href="tel:+919840012345"
            className="text-slate-300 hover:text-white font-bold text-[13px] flex items-center gap-2 px-4 py-3.5 transition-colors ml-2"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            Call: +91 98400 12345
          </a>
        </div>

      </div>
    </section>
  );
}
