'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export default function CtaBanner({ onOpenBookingModal }: CtaBannerProps) {
  return (
    <section className="relative bg-[#07132b] text-white py-20 sm:py-28 overflow-hidden poppins-regular">
      
      {/* Background Subtle Gradient Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Top Label */}
        <div className="text-[11px] sm:text-xs font-semibold text-blue-400 uppercase tracking-[0.15em]">
          BEGIN YOUR JOURNEY
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          Ready to Plan Your Journey?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-slate-300 text-sm sm:text-[15px] max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us about your upcoming travel plans or group requirements. Our travel experts are available 24/7 to provide instant quotes and personalized assistance.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6">
          <button
            onClick={onOpenBookingModal}
            className="px-6 py-3 rounded-[12px] bg-[#1d6cf3] hover:bg-[#1554c2] text-white font-medium text-sm transition-all"
          >
            Explore Vehicles
          </button>

          <button
            onClick={onOpenBookingModal}
            className="px-6 py-3 rounded-[12px] bg-white hover:bg-slate-100 text-slate-900 font-medium text-sm transition-all"
          >
            Contact Us
          </button>

          <a
            href="https://wa.me/919840012345"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-3 rounded-[12px] bg-[#021f18]/40 border border-[#043d2c] hover:bg-[#021f18] text-[#1fc47c] font-medium text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="tel:+919840012345"
            className="flex items-center space-x-2 px-3 py-3 text-slate-300 hover:text-white font-normal text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call: +91 98400 12345</span>
          </a>
        </div>

      </div>
    </section>
  );
}
