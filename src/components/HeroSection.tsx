'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Phone, MessageCircle, Clock } from 'lucide-react';
import BookingWidget from './BookingWidget';

interface HeroSectionProps {
  data?: any;
  onSearchCars: (searchData: any) => void;
  onOpenBookingModal: () => void;
}

export default function HeroSection({ data, onSearchCars, onOpenBookingModal }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-16 md: relative bg-cover bg-center bg-no-repeat pb-4 text-white poppins-regular min-h-[460px]" style={{ backgroundImage: `url(${data?.backgroundImage || '/images/Home/bg.png'})` }}>
      
      {/* Mobile Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent md:hidden z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Hero Content */}
        <div className="mb-12 pt-10 md:pt-16 max-w-3xl text-left space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>{data?.badgeText || "MADURAI'S TRUSTED TRAVEL PARTNER"}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white whitespace-pre-line">
            {data?.title || "Your Journey, \nOur Responsibility."}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base max-w-xl font-medium leading-relaxed drop-shadow-md">
            {data?.subtitle || "Safe, comfortable, and transparent cab rentals, temple circuits, and hill holiday packages originating from Madurai across Tamil Nadu and South India."}
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenBookingModal}
              className="px-8 py-3.5 rounded-xl bg-[#d97706] hover:bg-orange-600 text-white font-bold text-[13px] shadow-[0_0_20px_rgba(217,119,6,0.4)] flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/tour-packages"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-[13px] flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-[11px] font-medium text-white/90 drop-shadow-md">
            <a href="tel:+918760380485" className="flex items-center space-x-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call: +91 87603 80485</span>
            </a>
            <a href="https://wa.me/918760380485" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct WhatsApp</span>
            </a>
            <div className="flex items-center space-x-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Instant 15-Min Confirmation</span>
            </div>
          </div>

        </div>

        {/* Floating Search Bar Box */}
        <div id="booking-widget" className="relative z-30 mb-8 md:-mb-28 mt-8">
          <BookingWidget onSearchCars={onSearchCars} />
        </div>

      </div>
    </section>
  );
}
