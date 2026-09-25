'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import BookingWidget from './BookingWidget';

interface HeroSectionProps {
  onSearchCars: (searchData: any) => void;
  onOpenBookingModal: () => void;
}

export default function HeroSection({ onSearchCars, onOpenBookingModal }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1b36] via-[#102a54] to-[#0d1e3d] pt-12 pb-24 text-white overflow-hidden poppins">
      
      {/* Radial Blue Aqua Glow behind car */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[300px] bg-blue-500/25 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Find Your Perfect <br />
              Car <br />
              Drive Your <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Dreams</span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base max-w-lg font-normal leading-relaxed mx-auto lg:mx-0">
              Explore thousands of verified cars from trusted sellers. Best prices. Easy financing. Drive with confidence.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/40 flex items-center space-x-2.5 mx-auto lg:mx-0 transition-all hover:scale-105"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Check Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs font-semibold text-blue-100">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Easy Booking</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Support</span>
              </div>
            </div>

          </div>

          {/* Right Silver Car Graphic */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/hero_car.png"
                alt="Rudhran Travel Car"
                width={750}
                height={450}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform duration-500"
              />
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
