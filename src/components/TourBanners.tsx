'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Tag } from 'lucide-react';

interface TourBannersProps {
  onOpenBookingModal: (item?: any) => void;
}

export default function TourBanners({ onOpenBookingModal }: TourBannersProps) {
  return (
    <section className="py-16 bg-white text-slate-900 relative border-b border-slate-200 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left 2 Banners (Stacked) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Banner 1: Madurai Sightseeing */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/images/dest1.png"
                alt="Madurai Temple"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

              {/* Frosted Glass Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/20 backdrop-blur-xl border border-white/30 p-5 rounded-2xl text-white shadow-2xl space-y-3 max-w-lg">
                <div className="text-[10px] font-black tracking-widest text-orange-400 uppercase">
                  🏰 MADURAI
                </div>

                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-black text-white">Madurai Sightseeing</h3>
                  <div className="text-lg font-black text-orange-400">
                    <span className="line-through text-slate-300 text-xs mr-1">₹950</span>
                    ₹750
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                  <span className="bg-white/20 px-2.5 py-1 rounded">1 Day</span>
                  <span className="bg-white/20 px-2.5 py-1 rounded">AC Vehicle</span>
                  <span className="bg-white/20 px-2.5 py-1 rounded">Guided Tour</span>
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai Sightseeing', startingPrice: 750 })}
                    className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs flex items-center space-x-1 shadow"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai Sightseeing', startingPrice: 750 })}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>

            {/* Banner 2: Madurai to Rameshwaram */}
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Coastal Rameshwaram"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

              {/* Frosted Glass Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/20 backdrop-blur-xl border border-white/30 p-5 rounded-2xl text-white shadow-2xl space-y-3 max-w-lg">
                <div className="text-[10px] font-black tracking-widest text-cyan-300 uppercase">
                  ⛵ COASTAL
                </div>

                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-black text-white">Madurai to Rameshwaram</h3>
                  <div className="text-lg font-black text-orange-400">
                    ₹1400
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                  <span className="bg-white/20 px-2.5 py-1 rounded">1 Day</span>
                  <span className="bg-white/20 px-2.5 py-1 rounded">AC Vehicle</span>
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai to Rameshwaram', startingPrice: 1400 })}
                    className="p-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-center shadow"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal({ title: 'Madurai to Rameshwaram', startingPrice: 1400 })}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Tall Banner: Kodaikanal */}
          <div className="lg:col-span-4 relative min-h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
            <Image
              src="/images/dest2.png"
              alt="Kodaikanal Mountains"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            {/* Special Offer Badge */}
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow">
              Special Offer
            </div>

            {/* Bottom Frosted Glass Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-xl border border-white/30 p-5 rounded-2xl text-white shadow-2xl space-y-3">
              <div className="text-[10px] font-black tracking-widest text-emerald-300 uppercase">
                ⛰ KODAIKANAL
              </div>

              <h3 className="text-xl font-black text-white">Madurai to Kodaikanal</h3>
              
              <div className="flex items-center space-x-1 text-xs text-amber-400 font-bold">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-[10px] text-slate-200 font-normal">(Top Rating)</span>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="bg-white/20 px-2.5 py-1 rounded">1 Day</span>
                <span className="bg-white/20 px-2.5 py-1 rounded">Hill Station</span>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <div>
                  <div className="text-[10px] text-slate-300">Starting at</div>
                  <div className="text-xl font-black text-orange-400">₹1300</div>
                </div>

                <button
                  onClick={() => onOpenBookingModal({ title: 'Madurai to Kodaikanal', startingPrice: 1300 })}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/30"
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
