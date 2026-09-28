'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

interface TourBannersProps {
  onOpenBookingModal: (item?: any) => void;
}

export default function TourBanners({ onOpenBookingModal }: TourBannersProps) {
  const packages = [
    {
      badge: 'BESTSELLER',
      badgeColor: 'bg-[#fbbf24] text-amber-900',
      duration: '4D / 3N',
      region: 'KERALA HIGHLANDS',
      title: 'Munnar Tea Hills & Valleys',
      desc: 'Wander through emerald tea gardens, cascading waterfalls, and cool mountain peaks.',
      price: '₹13,500',
      priceUnit: '/ person',
      rating: '4.9 (420+ reviews)',
      image: '/images/dest2.png'
    },
    {
      badge: 'LUXURY STAY',
      badgeColor: 'bg-white text-slate-800',
      duration: '2D / 1N',
      region: 'KERALA COAST',
      title: 'Alleppey Houseboat Cruise',
      desc: 'Drift along tranquil palm-fringed canals on a private traditional luxury houseboat.',
      price: '₹15,200',
      priceUnit: '/ couple',
      rating: '5.0 (610+ reviews)',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      actionColor: 'bg-[#fbbf24] text-amber-900'
    },
    {
      badge: 'POPULAR',
      badgeColor: 'bg-[#6366f1] text-white',
      duration: '3D / 2N',
      region: 'TAMIL NADU WESTERN GHATS',
      title: 'Kodaikanal Pine & Mist',
      desc: 'Breathe in fragrant pine woods, boating on the star-shaped lake and misty pillar rocks.',
      price: '₹11,800',
      priceUnit: '/ person',
      rating: '4.8 (380+ reviews)',
      image: '/images/dest1.png'
    },
    {
      badge: 'HILL STATION',
      badgeColor: 'bg-[#10b981] text-white',
      duration: '3D / 2N',
      region: 'QUEEN OF HILL STATIONS',
      title: 'Ooty & Coonoor Nilgiris',
      desc: 'Scenic Toy Train ride through Nilgiri mountains, botanical gardens, and sprawling tea estates.',
      price: '₹12,200',
      priceUnit: '/ person',
      rating: '4.9 (510+ reviews)',
      image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1565?auto=format&fit=crop&w=800&q=80'
    },
    {
      badge: 'HERITAGE TOUR',
      badgeColor: 'bg-[#fbbf24] text-amber-900',
      duration: '3D / 2N',
      region: 'KARNATAKA SPLENDOR',
      title: 'Royal Mysore Palace',
      desc: 'Witness the majestic golden illuminated royal palace, Indo-Saracenic grandeur, and Chamundi hills.',
      price: '₹14,900',
      priceUnit: '/ person',
      rating: '4.9 (490+ reviews)',
      image: 'https://images.unsplash.com/photo-1600011844415-dfdbb6349190?auto=format&fit=crop&w=800&q=80',
      actionColor: 'bg-[#fbbf24] text-amber-900'
    },
    {
      badge: 'SPIRITUAL CIRCUIT',
      badgeColor: 'bg-[#ef4444] text-white',
      duration: '3D / 2N',
      region: 'ANCIENT TEMPLES & SEA',
      title: 'Madurai & Rameshwaram',
      desc: 'Historic towering temple gopurams, ancient spiritual rituals, and scenic Pamban sea bridge.',
      price: '₹13,800',
      priceUnit: '/ person',
      rating: '4.9 (340+ reviews)',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="pb-24 pt-0 bg-slate-50 text-slate-900 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#fffbeb] text-[#d97706] font-bold text-[10px] tracking-widest px-3 py-1.5 rounded-full mb-4 flex items-center gap-2 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
            CURATED DESTINATIONS & HOLIDAYS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-2">
            Explore Handcrafted Tour Packages
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Well-maintained vehicles for every journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              onClick={() => onOpenBookingModal(pkg)}
              className="group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-lg border border-slate-100/10"
            >
              {/* Background Image */}
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                unoptimized
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0f172a]/95 z-10"></div>

              {/* Top Badges */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="flex gap-2">
                  <div className={`text-[10px] font-bold px-3 py-1.5 rounded-full ${pkg.badgeColor} uppercase tracking-wider shadow-md`}>
                    {pkg.badge}
                  </div>
                  <div className="bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">
                    {pkg.duration}
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-md ${pkg.actionColor || 'bg-white/20 backdrop-blur-md text-white'}`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 mt-auto pt-4">
                <div className="text-[10px] font-bold text-[#fbbf24] tracking-widest uppercase mb-1">
                  {pkg.region}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-5 max-w-sm">
                  {pkg.desc}
                </p>
                
                <div className="h-px w-full bg-white/10 mb-4"></div>
                
                <div className="flex justify-between items-center">
                  <div className="text-white font-medium text-xs">
                    From <span className="font-bold text-sm">{pkg.price}</span> <span className="text-slate-400 text-[10px]">{pkg.priceUnit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#10b981] text-[10px] font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    {pkg.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-orange-500 text-white font-bold text-sm shadow-md shadow-orange-500/20 flex items-center space-x-2 mx-auto transition-all hover:scale-[1.02]">
            <span>Explore All Destinations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
