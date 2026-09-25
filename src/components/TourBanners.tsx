'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

interface TourBannersProps {
  onOpenBookingModal: (item?: any) => void;
}

export default function TourBanners({ onOpenBookingModal }: TourBannersProps) {
  return (
    <section className="py-16 bg-white text-slate-900 relative border-b border-slate-200 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot 2 */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            Tour Packages
          </h2>
          <p className="text-blue-600 text-sm font-normal">
            Well-maintained vehicles for every journey.
          </p>
        </div>

        {/* 2-Column Main Grid matching screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: 2 Stacked Wide Banners (8 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Banner 1: Madurai Sightseeing */}
            <div className="relative h-64 sm:h-72 rounded-[32px] overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/images/dest1.png"
                alt="Madurai Temple"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />

              {/* Frosted Glass Overlay Box at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-xl border border-white/40 p-4 sm:p-5 rounded-2xl text-slate-900 shadow-2xl space-y-2.5">
                <div className="text-[10px] font-normal tracking-widest text-orange-600 uppercase flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-orange-600" />
                  <span>MADURAI</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-normal text-slate-900">Madurai Sightseeing</h3>
                  <div className="text-sm font-normal text-slate-800">
                    <span className="line-through text-slate-500 text-xs mr-1">₹950</span>
                    ₹750
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 text-[10px] font-normal">
                  <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">1 Day</span>
                  <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">AC Vehicle</span>
                  <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">Guided Tour</span>
                </div>

                <div className="flex items-center space-x-3 pt-1 justify-end">
                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai Sightseeing', startingPrice: 750 })}
                    className="px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-normal text-xs flex items-center space-x-1 shadow"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai Sightseeing', startingPrice: 750 })}
                    className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-normal text-xs shadow-lg shadow-orange-500/30"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>

            {/* Banner 2: Madurai to Rameshwaram */}
            <div className="relative h-64 sm:h-72 rounded-[32px] overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Coastal Rameshwaram"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />

              {/* Frosted Glass Overlay Box at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-xl border border-white/40 p-4 sm:p-5 rounded-2xl text-slate-900 shadow-2xl space-y-2.5">
                <div className="text-[10px] font-normal tracking-widest text-orange-600 uppercase flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-orange-600" />
                  <span>COASTAL</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-normal text-slate-900">Madurai to Rameshwaram</h3>
                  <div className="text-sm font-normal text-slate-800">
                    ₹1400
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 text-[10px] font-normal">
                  <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">1 Day</span>
                  <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">AC Vehicle</span>
                </div>

                <div className="flex items-center space-x-3 pt-1 justify-end">
                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai to Rameshwaram', startingPrice: 1400 })}
                    className="p-2 rounded-full bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center shadow"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai to Rameshwaram', startingPrice: 1400 })}
                    className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-normal text-xs shadow-lg shadow-orange-500/30"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Tall Vertical Banner - Madurai to Kodaikanal (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[520px] rounded-[32px] overflow-hidden border border-slate-200 shadow-xl group">
            <Image
              src="/images/dest2.png"
              alt="Kodaikanal Mountains"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Special Offer Red Badge Top-Left */}
            <div className="absolute top-4 left-4 bg-[#c82323] text-white text-[10px] font-normal px-3 py-1 rounded-full shadow">
              Special Offer
            </div>

            {/* Bottom Frosted Glass Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-xl border border-white/40 p-5 rounded-2xl text-slate-900 shadow-2xl space-y-3">
              <div className="text-[10px] font-normal tracking-widest text-orange-600 uppercase flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-orange-600" />
                <span>KODAIKANAL</span>
              </div>

              <h3 className="text-lg font-normal text-slate-900">Madurai to Kodaikanal</h3>
              
              <div className="flex items-center space-x-1 text-xs text-amber-500 font-normal">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-[10px] text-slate-600 font-normal">(Top Rating)</span>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] font-normal">
                <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">1 Day</span>
                <span className="bg-white/50 border border-white/60 px-2.5 py-1 rounded-full text-slate-800">Hill Station</span>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex justify-between items-center text-xs text-slate-700">
                  <span className="font-normal">Starting at</span>
                  <span className="font-normal text-slate-900">₹1300</span>
                </div>

                <button
                  onClick={() => onOpenBookingModal({ title: 'Madurai to Kodaikanal', startingPrice: 1300 })}
                  className="w-full py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-normal text-xs shadow-lg shadow-orange-500/30"
                >
                  Book Experience
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
