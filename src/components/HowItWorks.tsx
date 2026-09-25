'use client';

import React from 'react';
import { Car, MapPin, Smile, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Car',
      description: 'Select from our wide fleet of Hatchbacks, Sedans, SUVs, or Luxury cars based on your passenger count and budget.',
      icon: Car,
      color: 'from-blue-600 to-blue-400'
    },
    {
      number: '02',
      title: 'Pick Location & Date',
      description: 'Set your pickup city, destination, travel dates, and whether you prefer chauffeur driven or self drive options.',
      icon: MapPin,
      color: 'from-amber-500 to-orange-500'
    },
    {
      number: '03',
      title: 'Enjoy Your Journey',
      description: 'Receive instant WhatsApp driver details, doorstep vehicle arrival, and experience a safe, smooth, hassle-free ride.',
      icon: Smile,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white relative border-y border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>SIMPLE PROCESS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Rent A Car In 3 Easy Steps
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base">
            Booking your outstation trip or local ride takes less than 2 minutes with transparent pricing and zero hidden fees.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-slate-700 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 bg-slate-950/80 border border-slate-800 rounded-3xl p-8 text-center space-y-5 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                
                {/* Step Icon Badge */}
                <div className="relative inline-block">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${step.color} p-0.5 shadow-xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-xl shadow">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
