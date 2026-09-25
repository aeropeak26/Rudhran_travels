'use client';

import React from 'react';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export default function CtaBanner({ onOpenBookingModal }: CtaBannerProps) {
  return (
    <div className="poppins">
      
      {/* 1. Futuristic Skyline CTA Section matching screenshot */}
      <section className="py-20 bg-gradient-to-r from-[#0b192e] via-[#112647] to-[#0b192e] text-white relative overflow-hidden border-t border-blue-900">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest">
            YOUR PERSONAL FLEET AWAITS
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Are You Ready to Planning a Trip?
          </h2>

          <p className="text-blue-200 text-xs sm:text-sm max-w-xl mx-auto font-normal">
            Tell us your destination and we'll help you choose the right vehicle. Pickup Location, Destination, Travel Date, Passengers, Vehicle Preference..
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBookingModal}
              className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
            >
              BOOK JOURNEY NOW
            </button>

            <button
              onClick={onOpenBookingModal}
              className="px-7 py-3.5 rounded-full bg-transparent border border-white hover:bg-white hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              CONTACT US
            </button>
          </div>

        </div>
      </section>

      {/* 2. Ready to Plan Your Journey Banner (Dark Blue) matching screenshot */}
      <section className="py-16 bg-[#091526] text-white relative border-t border-blue-950">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-5">
          
          <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            BEGIN YOUR JOURNEY
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Plan Your Journey?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Tell us about your upcoming travel plans or group requirements. Our travel experts are available 24/7 to provide instant quotes and personalized assistance.
          </p>

          {/* 4 Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow"
            >
              Explore Vehicles
            </button>

            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow hover:bg-slate-100"
            >
              Contact Us
            </button>

            <a
              href="https://wa.me/919840012345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+919840012345"
              className="px-4 py-3 text-xs font-bold text-blue-300 hover:text-white flex items-center space-x-1"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call: +91 98400 12345</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
