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
    <section id="destinations" className="py-20 bg-slate-950 text-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>POPULAR DESTINATIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Explore Top Outstation Routes & Tour Packages
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base">
            Book hassle-free round trip outstation cabs or customizable tour packages with experienced chauffeurs for South India's finest tourist destinations.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge Overlay */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs font-bold text-amber-400 flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{dest.rating} ({dest.reviews})</span>
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-1 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{dest.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                    {dest.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {dest.popularCars.map((car, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-medium">
                        {car}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Starting From</div>
                  <div className="text-lg font-black text-amber-400">
                    ₹{dest.startingPrice.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-400 font-normal"> / day</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectDestination(dest)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-slate-900/60 border border-slate-800 p-6 rounded-3xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Need a Customized Outstation Itinerary?</h4>
            <p className="text-xs text-slate-400">We offer multi-city tour packages with driver allowance, hill station permits, and temple drop-offs.</p>
          </div>
          <button
            onClick={() => onSelectDestination(DESTINATIONS[0])}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex-shrink-0 transition-colors"
          >
            Request Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
