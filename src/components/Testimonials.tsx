'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/rentalData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>HAPPY CUSTOMERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            What Our Travelers Say About AeroDrive
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Over 50,000+ happy passengers have trusted us for family vacations, temple tours, and business trips across South India.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 relative group"
            >
              
              <Quote className="w-10 h-10 text-blue-600/30 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                  <div className="text-[10px] text-amber-400 font-semibold">{item.route}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
