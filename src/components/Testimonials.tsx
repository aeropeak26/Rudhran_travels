'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/rentalData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>HAPPY CUSTOMERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            What Our Travelers Say About AeroDrive
          </h2>

          <p className="text-blue-200 text-sm sm:text-base">
            Over 50,000+ happy passengers have trusted us for outstation vacations and business travel across South India.
          </p>
        </div>

        {/* Crisp White Reviews Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-2xl hover:shadow-3xl transition-all duration-300 relative group"
            >
              
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm font-medium italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="text-sm font-black text-slate-900 flex items-center space-x-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="text-xs text-slate-500 font-semibold">{item.role}</div>
                  <div className="text-[10px] text-blue-600 font-extrabold">{item.route}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
