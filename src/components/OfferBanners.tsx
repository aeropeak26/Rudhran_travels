'use client';

import React from 'react';
import { Tag, Sparkles, ArrowRight, Gift } from 'lucide-react';

interface OfferBannersProps {
  onOpenBookingModal: () => void;
}

export default function OfferBanners({ onOpenBookingModal }: OfferBannersProps) {
  return (
    <section className="py-12 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Banner 1 */}
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 border border-blue-500/40 p-8 overflow-hidden shadow-2xl flex flex-col justify-between group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>FIRST TRIP OFFER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Get Flat ₹500 OFF On Your First Outstation Trip!
              </h3>

              <p className="text-xs sm:text-sm text-blue-200">
                Use Promo Code <strong className="text-amber-300 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-amber-400/40">DRIVE500</strong> at checkout for all sedan & SUV outstation bookings.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <span className="text-[11px] text-blue-300 font-medium">*Valid on trips over 250 KMs</span>
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center space-x-1.5 shadow transition-all hover:scale-105"
              >
                <span>Claim Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Banner 2 */}
          <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 border border-amber-500/40 p-8 overflow-hidden shadow-2xl flex flex-col justify-between group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5" />
                <span>WEEKEND SPECIAL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Free Driver Night Allowance On 3+ Day Tours!
              </h3>

              <p className="text-xs sm:text-sm text-amber-200">
                Book a round trip to Ooty, Kodai, or Munnar for 3 days and save up to ₹1,800 on driver charges.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <span className="text-[11px] text-amber-300 font-medium">*Auto-applied on qualifying packages</span>
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center space-x-1.5 shadow transition-all hover:scale-105"
              >
                <span>Book Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
