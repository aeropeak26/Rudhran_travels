'use client';

import React from 'react';
import { LayoutGrid } from 'lucide-react';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export default function CtaBanner({ onOpenBookingModal }: CtaBannerProps) {
  return (
    <section className="py-12 md:py-16 md: bg-[#0b162c] md: poppins-regular border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="lg:w-1/3">
            <div className="text-[#f59e0b] text-[10px] font-bold tracking-widest uppercase mb-3">
              CUSTOM VACATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Plan Your Trip
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-sm">
              Traveling with elders or toddlers? Need customized temple halt timings? Get a personalized route estimate.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              
              {/* Date Input */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  APPROX. TRAVEL DATE
                </label>
                <input
                  type="date"
                  className="w-full bg-[#1e293b] text-white border-none rounded-lg px-4 py-3 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Travelers Input */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  NO. OF TRAVELERS
                </label>
                <input
                  type="text"
                  placeholder="5 to 7 Persons"
                  className="w-full bg-[#1e293b] text-white placeholder-slate-400 border-none rounded-lg px-4 py-3 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Destination Input */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  DESIRED DESTINATION
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rameshwaram + Kanyakumari"
                  className="w-full bg-[#1e293b] text-white placeholder-slate-400 border-none rounded-lg px-4 py-3 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-[#f97316] hover:bg-orange-500 text-white font-bold text-[11px] uppercase tracking-wider px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-[1.02] shadow-lg"
              >
                <span>GET QUOTE NOW</span>
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
