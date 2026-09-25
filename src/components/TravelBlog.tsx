'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TravelBlog() {
  const experiences = [
    {
      id: 'exp-1',
      title: 'Alpine Scenic Ride',
      sub: 'Private mountain transfer',
      image: '/images/dest2.png',
    },
    {
      id: 'exp-2',
      title: 'Coastal Chauffeur',
      sub: 'Area coastal touring',
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
      sub: 'City transit & heritage',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#f0f5ff] text-slate-900 relative border-t border-blue-100 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <div className="text-xs font-black text-blue-950 uppercase tracking-widest">
            RIDE EXPERIENCES
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Real Journeys. Real Experiences.
          </h2>

          <p className="text-blue-600 text-sm font-bold">
            Take a glimpse at the memorable journeys, comfortable rides, and travel experiences shared by our customers.
          </p>
        </div>

        {/* 4 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="relative h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl group hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Title & Sub Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <h3 className="text-lg font-black leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-300 font-medium">{item.sub}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Blue View Gallery Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-widest uppercase shadow-xl shadow-blue-600/30 flex items-center space-x-2 mx-auto transition-all hover:scale-105">
            <span>VIEW GALLERY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
