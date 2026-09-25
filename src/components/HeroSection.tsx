'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Shield, Star, Award, ChevronRight, PhoneCall } from 'lucide-react';
import BookingWidget from './BookingWidget';

interface HeroSectionProps {
  onSearchCars: (searchData: any) => void;
  onOpenBookingModal: () => void;
}

export default function HeroSection({ onSearchCars, onOpenBookingModal }: HeroSectionProps) {
  return (
    <section className="relative hero-gradient pt-8 pb-20 md:pb-28 overflow-hidden text-white border-b border-slate-800">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Left Copy, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>South India's Top Rated Outstation & Rental Taxi</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Rent Your Perfect Car <br className="hidden sm:inline" />
              Drive Your <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40">Dreams</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Experience seamless outstation travel, local hourly car rentals, and airport transfers with verified drivers, sanitized vehicles, and 100% transparent pricing.
            </p>

            {/* CTAs & Stats Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBookingModal}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/30 flex items-center space-x-2 hover:scale-105 active:scale-95 transition-all"
              >
                <span>BOOK A CAR NOW</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href="tel:+919876543210"
                className="px-6 py-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:bg-slate-800 text-slate-200 font-bold text-sm sm:text-base flex items-center space-x-2.5 transition-all hover:text-amber-400"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>+91 98765 43210</span>
              </a>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">500+</div>
                <div className="text-xs text-slate-400 font-medium">Verified Fleet Cars</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-blue-400">4.9 ★</div>
                <div className="text-xs text-slate-400 font-medium">Customer Rating</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">50k+</div>
                <div className="text-xs text-slate-400 font-medium">Trips Completed</div>
              </div>
            </div>

          </div>

          {/* Right Visual Car Render */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Circle */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/30 blur-3xl absolute -z-10 animate-pulse" />
            
            {/* Car Image Container */}
            <div className="relative group w-full max-w-lg">
              <Image
                src="/images/hero_car.png"
                alt="AeroDrive Luxury Rental Car"
                width={700}
                height={420}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-4 -left-2 sm:left-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center space-x-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Top Rated Service</div>
                  <div className="text-[10px] text-slate-400">Chauffeur & Self Drive</div>
                </div>
              </div>

              {/* Top Right Safety Badge */}
              <div className="absolute -top-2 -right-2 bg-blue-600/90 border border-blue-400/50 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white">Insured & GPS Enabled</span>
              </div>

            </div>

          </div>

        </div>

        {/* Tabbed Floating Search Bar Widget */}
        <div id="booking-widget" className="relative z-20">
          <BookingWidget onSearchCars={onSearchCars} />
        </div>

      </div>
    </section>
  );
}
