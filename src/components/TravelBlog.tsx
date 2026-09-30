'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TravelBlog({ data }: { data?: any[] }) {
  const defaultExperiences = [
    {
      id: 'exp-1',
      title: 'Alpine Scenic Ride',
      sub: 'Private mountain transfer',
      image: '/images/dest2.png',
    },
    {
      id: 'exp-2',
      title: 'Coastal Chauffeur',
      sub: 'Amalfi coastal touring',
      image: '/images/dest1.png',
    },
    {
      id: 'exp-3',
      title: 'VIP Jet Escort',
      sub: 'Tarmac connection',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'exp-4',
      title: 'Historic City Arrival',
      sub: 'London City transit',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const experiences = data?.length === 4 ? data : defaultExperiences;

  return (
    <section className="py-12 md:py-16 md: md: bg-white text-slate-900 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fef3c7] text-[#d97706] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
            RIDE EXPERIENCES
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
            Real Journeys. Real Experiences.
          </h2>

          <p className="text-slate-500 text-sm md:text-[15px] font-medium leading-relaxed max-w-xl mx-auto">
            Take a glimpse at the memorable journeys, comfortable rides, and travel experiences shared by our customers.
          </p>
        </div>

        {/* 4 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="relative h-[380px] rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              
              {/* Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
              
              {/* Dark Overlay Box for Text */}
              <div className="absolute top-6 left-6 right-6 bg-[#0f172a]/40 backdrop-blur-md rounded-2xl p-4 text-white shadow-lg border border-white/10 transition-transform duration-300 group-hover:-translate-y-1 z-20">
                <h3 className="text-[17px] font-bold leading-tight mb-1 font-serif">{item.title}</h3>
                <p className="text-[11px] text-slate-300 font-medium">{item.sub}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 rounded-lg bg-[#f97316] hover:bg-orange-500 text-white font-bold text-[11px] tracking-wider uppercase shadow-lg shadow-orange-500/20 flex items-center space-x-2 mx-auto transition-all hover:scale-[1.02]">
            <span>Explore All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
