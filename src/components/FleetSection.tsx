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
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Details (White) */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <h3 className="text-2xl font-normal text-slate-900">Toyota Innova Crysta</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal mt-1">
                  South India's most trusted executive long-distance cruiser, known for legendary ride comfort and safety.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-normal text-amber-700 flex items-center space-x-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.9 (420+ trips)</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-normal">
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">👤 7 Seats</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">❄ Dual AC</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">🚘 Chauffeur Included</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">🧳 4 Large Bags</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200">⚡ FASTag Active</span>
            </div>

            {/* Fares Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center font-normal">
              <div>
                <div className="text-[10px] text-slate-500 font-normal uppercase">Outstation Rate</div>
                <div className="text-lg font-normal text-blue-700">₹18<span className="text-xs text-slate-500 font-normal">/km</span></div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-normal uppercase">Local 8h/80km</div>
                <div className="text-lg font-normal text-slate-900">₹3,800</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-normal uppercase">Min. Outstation</div>
                <div className="text-lg font-normal text-slate-900">300 km<span className="text-xs text-slate-500 font-normal">/day</span></div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-normal uppercase">Driver Batta</div>
                <div className="text-lg font-normal text-emerald-600">Included</div>
              </div>
            </div>

            {/* Red Note Box */}
            <div className="bg-red-50 border border-red-200 p-3 rounded-xl text-xs text-red-700 flex items-center space-x-2 font-normal">
              <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Toll, Parking, and Hill Station charges are extra as applicable.</span>
            </div>

          </div>

          {/* Right Action Box (Blue) */}
          <div className="lg:col-span-4 bg-blue-600 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] uppercase font-normal text-blue-200">DRIVER ALLOWANCE</div>
                <div className="text-xl font-normal text-amber-300">Rs. 500 <span className="text-xs font-normal text-blue-100">Per Day (Driver Batta)</span></div>
              </div>

              <div className="pt-2 border-t border-blue-500">
                <div className="text-[10px] uppercase font-normal text-blue-200">RENT / DAY</div>
                <div className="text-3xl font-normal text-white">Rs. 2200</div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onBookCar({ name: 'Toyota Innova Crysta', perDayRate: 2200 })}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-normal text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg transition-all hover:scale-105"
              >
                <span>Book This Vehicle</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <div className="text-[10px] text-center text-blue-100 font-normal flex items-center justify-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>Instant WhatsApp confirmation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
