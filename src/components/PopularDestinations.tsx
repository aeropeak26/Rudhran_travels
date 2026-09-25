'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, Clock, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/rentalData';

interface DestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export default function PopularDestinations({ onSelectDestination }: DestinationsProps) {
  return (
    <section id="destinations" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-orange-500" />
            <span>POPULAR DESTINATIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Explore Top Outstation Routes & Tour Packages
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base">
            Book round trip outstation cabs or tour packages with verified chauffeurs for South India's finest destinations.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-slate-900 flex items-center space-x-1 shadow">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{dest.rating}</span>
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-3 left-3 bg-orange-500 text-white font-extrabold px-3 py-1 rounded-full text-xs flex items-center space-x-1 shadow">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-1 text-slate-500 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{dest.location}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {dest.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed font-normal">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-extrabold">Starting From</div>
                  <div className="text-lg font-black text-blue-900">
                    ₹{dest.startingPrice.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-500 font-normal"> / day</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectDestination(dest)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center space-x-1.5 shadow-md shadow-blue-600/20 transition-all hover:scale-105"
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
