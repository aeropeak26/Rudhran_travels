'use client';

import React from 'react';
import { Users, Wind, UserCheck, Briefcase, Tag, AlertTriangle, ArrowRight } from 'lucide-react';

interface FleetSectionProps {
  onBookCar: (car: any) => void;
}

export default function FleetSection({ onBookCar }: FleetSectionProps) {
  return (
    <section id="fleet" className="py-24 bg-slate-50 relative poppins-regular z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Content Area */}
          <div className="p-8 lg:p-10 flex-grow flex flex-col justify-between">
            
            <div>
              {/* Header Row */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight mb-2">
                    Toyota Innova Crysta
                  </h2>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-lg">
                    South India's most trusted executive long-distance cruiser, known for legendary ride comfort and safety.
                  </p>
                </div>
                
                {/* Rating Badge */}
                <div className="hidden sm:flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706] px-3 py-1.5 rounded-md shadow-sm border border-amber-100/50">
                  <span className="text-xs">★</span>
                  <span className="text-[10px] font-bold tracking-wide">4.9 (420+ trips)</span>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2.5 mt-6 mb-10">
                <div className="flex items-center gap-1.5 bg-blue-50/70 text-blue-600 px-3 py-1.5 rounded-md text-[10px] font-bold border border-blue-100 shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                  <span>7 Seats</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50/70 text-blue-600 px-3 py-1.5 rounded-md text-[10px] font-bold border border-blue-100 shadow-sm">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Dual AC</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50/70 text-blue-600 px-3 py-1.5 rounded-md text-[10px] font-bold border border-blue-100 shadow-sm">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Chauffeur Included</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50/70 text-blue-600 px-3 py-1.5 rounded-md text-[10px] font-bold border border-blue-100 shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>4 Large Bags</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50/70 text-blue-600 px-3 py-1.5 rounded-md text-[10px] font-bold border border-blue-100 shadow-sm">
                  <Tag className="w-3.5 h-3.5" />
                  <span>FASTag Active</span>
                </div>
              </div>
            </div>

            <div>
              {/* Pricing Grid Container */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/80 flex flex-wrap gap-y-6 md:gap-y-0 justify-between items-center mb-6">
                
                <div className="w-1/2 md:w-auto">
                  <div className="text-[10px] text-slate-400 font-bold tracking-wider mb-1">Outstation Rate</div>
                  <div className="flex items-baseline gap-1 text-blue-600">
                    <span className="text-2xl font-bold tracking-tight">₹18</span>
                    <span className="text-[10px] font-bold text-slate-400">/km</span>
                  </div>
                </div>

                <div className="w-1/2 md:w-auto md:border-l border-slate-200 md:pl-6">
                  <div className="text-[10px] text-slate-400 font-bold tracking-wider mb-1">Local 8hr/80km</div>
                  <div className="text-2xl font-bold text-[#0f172a] tracking-tight">
                    ₹3,800
                  </div>
                </div>

                <div className="w-1/2 md:w-auto md:border-l border-slate-200 md:pl-6">
                  <div className="text-[10px] text-slate-400 font-bold tracking-wider mb-1">Min. Outstation</div>
                  <div className="flex items-baseline gap-1 text-[#0f172a]">
                    <span className="text-xl font-bold tracking-tight">300 km</span>
                    <span className="text-[10px] font-bold text-slate-400">/day</span>
                  </div>
                </div>

                <div className="w-1/2 md:w-auto md:border-l border-slate-200 md:pl-6">
                  <div className="text-[10px] text-slate-400 font-bold tracking-wider mb-1">Driver Batta</div>
                  <div className="text-lg font-bold text-blue-600">
                    Included
                  </div>
                </div>

              </div>

              {/* Warning Notice */}
              <div className="flex items-center gap-2.5 bg-red-50/50 border border-red-100/50 px-4 py-2.5 rounded-xl text-red-600">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-wide">Toll, Parking, and Hill Station charges are extra as applicable.</span>
              </div>
            </div>

          </div>

          {/* Right Blue Panel */}
          <div className="bg-gradient-to-br from-[#1e40af] to-[#172554] lg:w-[320px] flex-shrink-0 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
            {/* Background subtle elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 space-y-8">
              
              {/* Driver Allowance */}
              <div>
                <div className="text-blue-200/80 text-[9px] font-bold uppercase tracking-widest mb-1.5">DRIVER ALLOWANCE</div>
                <div className="text-white text-3xl font-bold tracking-tight mb-1">Rs. 500</div>
                <div className="text-blue-300/80 text-[10px] font-medium tracking-wide">Per Day (Driver Batta)</div>
              </div>
              
              <div className="h-px w-full bg-white/10"></div>

              {/* Rent Per Day */}
              <div>
                <div className="text-blue-200/80 text-[9px] font-bold uppercase tracking-widest mb-1.5">RENT / DAY</div>
                <div className="text-white text-4xl font-bold tracking-tight mb-6">Rs. 2200</div>
                
                <button 
                  onClick={() => onBookCar({ title: 'Toyota Innova Crysta', startingPrice: 2200 })}
                  className="w-full bg-[#f97316] hover:bg-orange-500 text-white font-bold text-[11px] tracking-wider uppercase py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02]"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-blue-300/70 text-[9px] mt-4 font-medium tracking-wide">
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
