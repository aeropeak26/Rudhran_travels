'use client';

import React from 'react';
import { Settings2 } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f8fafc] text-slate-900 poppins-regular">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#fef3c7] text-[#d97706] font-bold text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase flex items-center gap-2 justify-center mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
            WHY TRAVEL WITH US?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] tracking-tight mb-4 leading-tight">
            Simplifying Travel with Trust
          </h2>
          <p className="text-slate-500 text-[13px] md:text-sm font-medium">
            Trusted service, comfortable vehicles, experienced drivers, and customer-<br className="hidden md:block"/>first support.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Large Orange Card */}
          <div className="lg:col-span-1 bg-gradient-to-b from-[#fde68a] via-[#fba94c] to-[#ea580c] rounded-[2rem] p-8 md:p-10 text-[#0f172a] shadow-xl relative overflow-hidden flex flex-col">
            
            {/* Background Circle Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-50">
              {/* Outer Dashed Circle */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-dashed border-[#ea580c] rounded-full"></div>
              {/* Inner Solid Circle */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-[#ea580c] rounded-full"></div>
              {/* Small Dot and line */}
              <div className="absolute top-6 right-16 w-2 h-2 bg-[#ea580c] rounded-full ring-2 ring-orange-200/50"></div>
              <div className="absolute top-7 right-12 w-4 h-px bg-[#ea580c] -rotate-45"></div>
            </div>

            <div className="mb-6 flex items-start gap-4">
              <div className="bg-white p-3.5 rounded-2xl shadow-sm shrink-0">
                <Settings2 className="w-6 h-6 text-[#d97706] rotate-90" />
              </div>
              <h3 className="text-2xl font-bold leading-tight pt-1 relative z-10">
                Flexible Travel & Tour <br /> Solutions
              </h3>
            </div>

            <p className="text-[15px] font-medium text-[#334155] mb-8 leading-relaxed relative z-10">
              From short-term city transfers and temple circuits to multi-day hill station packages, we offer personalized options for every schedule.
            </p>

            <div className="w-full h-px bg-black/80 mb-8 relative z-10"></div>

            <ul className="space-y-5 text-[15px] font-medium text-[#334155] flex-grow relative z-10">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <span className="leading-snug">Enjoy the comfort of flexible doorstep pickup & drop</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <span className="leading-snug">Access a diverse fleet of economy, SUV, & executive sedans</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <span className="leading-snug">Choose from daily, weekly, or custom monthly tour packages</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                </div>
                <span className="leading-snug">Zero hidden fees with clear, all-inclusive kilometer billing</span>
              </li>
            </ul>
          </div>

          {/* Right White Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
              <h4 className="text-[#0f172a] text-xl font-bold mb-3">Best Driver Services</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">
                Travel with skilled drivers committed to your safety and comfort.
              </p>
              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                  Best
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <h4 className="text-[#0f172a] text-xl font-bold mb-3">Well-Maintained Fleet</h4>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6">
                  Pristine interiors, high-performance AC units, daily sanitization, and clean upholstery in every vehicle category.
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0f172a] mb-1">120+ <span className="text-xl">Cities Served</span></div>
                <p className="text-blue-500 text-[10px] font-medium">Connecting key metros, coastal belts, and tourist hubs.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
              <h4 className="text-[#0f172a] text-xl font-bold mb-3">Tour Packages</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Plan journey your way with flexible travel options tailored to your needs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
              <h4 className="text-[#0f172a] text-xl font-bold mb-3">24/7 Travel Desk</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Direct human assistance on phone and WhatsApp for flight delays, route changes, or emergency assistance.
              </p>
            </div>
            
          </div>

          {/* Empty spacer for the left column to push pills to the right on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Pill Badges Row (Centered under the right 2 columns) */}
          <div className="lg:col-span-2 flex flex-wrap justify-center gap-3 pt-2">
            {['Daily Car Rental', 'Well-Maintained Cars', 'Economy Cars', 'Transparent Pricing'].map((pill, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-full px-5 py-2.5 text-[11px] font-bold text-slate-600 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                {pill}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
