'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface FleetSectionProps {
  onBookCar: (car: any) => void;
}

export default function FleetSection({ onBookCar }: FleetSectionProps) {
  const [selectedCarIndex, setSelectedCarIndex] = useState<number>(1);

  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 text-slate-900 relative border-b border-slate-200 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            Rental Tariff / Featured Vehicles
          </h2>
          <p className="text-blue-600 text-sm font-normal">
            Well-maintained vehicles for every journey.
          </p>
        </div>

        {/* 3-Car Showcase Carousel Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          
          {/* Left Car */}
          <div className="flex items-center space-x-3 text-center">
            <div className="opacity-60 scale-90 transition-all">
              <div className="text-sm font-normal text-slate-800 mb-1">Clio</div>
              <div className="text-[11px] text-slate-500 font-normal mb-2">5+1 Seats</div>
              <div className="relative w-48 h-28 mx-auto">
                <Image src="/images/hero_car.png" alt="Clio" fill className="object-contain" />
              </div>
            </div>
            <button
              onClick={() => setSelectedCarIndex(0)}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Center Main Featured Car */}
          <div className="text-center space-y-2 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-200 shadow-xl max-w-md w-full">
            <div className="text-xl font-normal text-slate-900">Toyota Innova</div>
            <div className="text-xs text-blue-600 font-normal">6+1 Seats</div>
            <div className="relative w-72 h-40 mx-auto my-2">
              <Image
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                alt="Toyota Innova"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Car */}
          <div className="flex items-center space-x-3 text-center">
            <button
              onClick={() => setSelectedCarIndex(2)}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 shadow hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="opacity-60 scale-90 transition-all">
              <div className="text-sm font-normal text-slate-800 mb-1">Clio</div>
              <div className="text-[11px] text-slate-500 font-normal mb-2">5+1 Seats</div>
              <div className="relative w-48 h-28 mx-auto">
                <Image src="/images/hero_car.png" alt="Clio" fill className="object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Innova Feature Box */}
        <div className="max-w-6xl mx-auto relative mt-12">
          <div className="bg-white border border-slate-100 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-visible flex flex-col lg:flex-row items-stretch">
            
            {/* Left Details (White) */}
            <div className="lg:w-[68%] p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Toyota Innova Crysta</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal mt-1 max-w-lg">
                    South India's most trusted executive long-distance cruiser, known for legendary ride comfort and safety.
                  </p>
                </div>

                <div className="bg-[#fff9ec] border border-[#fde047] px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#ca8a04] flex items-center space-x-1 shadow-sm mt-1">
                  <Star className="w-3 h-3 fill-[#ca8a04] text-[#ca8a04]" />
                  <span>4.9 (420+ trips)</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-1.5"><span className="text-blue-500 text-sm">👤</span><span>7 Seats</span></span>
                <span className="bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-1.5"><span className="text-blue-500 text-sm">❄</span><span>Dual AC</span></span>
                <span className="bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-1.5"><span className="text-blue-500 text-sm">🚘</span><span>Chauffeur Included</span></span>
                <span className="bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-slate-200 flex items-center space-x-1.5"><span className="text-blue-500 text-sm">🧳</span><span>4 Large Bags</span></span>
                <span className="bg-[#eff6ff] text-blue-600 px-3 py-1.5 rounded-lg border border-blue-100 flex items-center space-x-1.5"><span className="text-blue-500 text-sm">⚡</span><span>FASTag Active</span></span>
              </div>

              {/* Fares Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 text-left font-normal">
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 font-medium">Outstation Rate</div>
                  <div className="text-xl font-bold text-blue-600">₹18<span className="text-xs text-slate-500 font-medium"> /km</span></div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 font-medium">Local 8h/80km</div>
                  <div className="text-xl font-bold text-slate-900">₹3,800</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 font-medium">Min. Outstation</div>
                  <div className="text-xl font-bold text-slate-900">300 km<span className="text-xs text-slate-500 font-medium"> /day</span></div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 font-medium">Driver Batta</div>
                  <div className="text-lg font-bold text-blue-600 mt-1">Included</div>
                </div>
              </div>

              {/* Red Note Box */}
              <div className="bg-[#fef2f2] border border-[#fecaca] p-3 rounded-xl text-xs text-slate-600 flex items-center space-x-2 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>Toll, Parking, and Hill Station charges are extra as applicable.</span>
              </div>

            </div>

            {/* Right Action Box (Blue) - Slightly overlapping and popping out */}
            <div className="lg:w-[36%] bg-blue-600 text-white p-8 sm:p-10 flex flex-col justify-center space-y-8 rounded-[32px] shadow-[0_20px_40px_rgba(37,99,235,0.25)] relative lg:-mr-6 lg:-my-6 z-10">
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-blue-100 tracking-[0.1em] mb-1">DRIVER ALLOWANCE</div>
                  <div className="text-[44px] font-bold text-white tracking-tight leading-none mt-2">Rs. 500</div>
                  <div className="text-[15px] font-normal text-blue-100 mt-2">Per Day (Driver Batta)</div>
                </div>

                <div className="w-full h-px bg-blue-500/50" />

                <div>
                  <div className="text-xs font-semibold text-blue-100 tracking-[0.1em] mb-1">RENT / DAY</div>
                  <div className="text-[52px] font-bold text-white tracking-tight leading-none mt-2">Rs. 2200</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button
                  onClick={() => onBookCar({ name: 'Toyota Innova Crysta', perDayRate: 2200 })}
                  className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-[#0b162c] hover:bg-slate-900 text-white font-semibold text-base flex items-center justify-center space-x-3 shadow-xl transition-transform hover:scale-105"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-5 h-5 text-blue-200" />
                </button>

                <div className="text-xs sm:text-[13px] text-center text-blue-100/90 font-normal">
                  Instant WhatsApp confirmation
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
