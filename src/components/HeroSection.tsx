'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Tag, Headphones } from 'lucide-react';
import BookingWidget from './BookingWidget';

interface HeroSectionProps {
  onSearchCars: (searchData: any) => void;
  onOpenBookingModal: () => void;
}

export default function HeroSection({ onSearchCars, onOpenBookingModal }: HeroSectionProps) {
  return (
    <section className="relative bg-[url('/images/Home/bg.png')] bg-cover bg-center bg-no-repeat pt-10 pb-20 text-white overflow-hidden poppins-regular min-h-[520px]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Content (No right side image overlay) */}
        <div className="mb-12 pt-4 max-w-2xl text-left space-y-4">
          
          {/* Reduced Font Size Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-snug text-white">
            Find Your Perfect <br />
            Car <br />
            Drive Your <span className="text-orange-500 font-normal">Dreams</span>
          </h1>

          {/* Reduced Font Size Subtitle */}
          <p className="text-slate-200 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Explore thousands of verified cars from trusted sellers. Best prices. Easy financing. Drive with confidence.
          </p>

          {/* Reduced Font Size Button */}
          <div className="pt-1">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-normal text-xs sm:text-sm shadow-lg shadow-blue-600/40 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span className="font-normal">Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Reduced Font Size Check Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] font-normal text-slate-200">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span className="font-normal">Easy Booking</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Tag className="w-3.5 h-3.5 text-white" />
              <span className="font-normal">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Headphones className="w-3.5 h-3.5 text-white" />
              <span className="font-normal">24/7 Support</span>
            </div>
          </div>

        </div>

        {/* Floating Search Bar Box */}
        <div id="booking-widget" className="relative z-20">
          <BookingWidget onSearchCars={onSearchCars} />
        </div>

      </div>
    </section>
  );
}
