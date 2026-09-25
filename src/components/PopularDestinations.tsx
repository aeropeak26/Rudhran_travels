'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, Clock, Car, Compass, ArrowRight } from 'lucide-react';

interface DestinationsProps {
  onSelectDestination: (dest: any) => void;
}

export default function PopularDestinations({ onSelectDestination }: DestinationsProps) {
  const destinationCards = [
    {
      id: 'p-1',
      title: 'Madurai Sightseeing',
      location: 'Madurai',
      image: '/images/dest1.png',
      price: 750,
      rating: '5.0',
      duration: '1 Day',
      vehicle: 'AC Vehicle',
      guidance: 'Complete Guidance',
    },
    {
      id: 'p-2',
      title: 'Madurai to Kodaikanal',
      location: 'Kodaikanal',
      image: '/images/dest2.png',
      price: 1300,
      rating: '5.0',
      duration: '1 Day',
      vehicle: 'AC Vehicle',
      guidance: 'Complete Guidance',
    },
    {
      id: 'p-3',
      title: 'Madurai to Rameshwaram',
      location: 'Rameshwaram',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      price: 1400,
      rating: '5.0',
      duration: '1 Day',
      vehicle: 'AC Vehicle',
      guidance: 'Complete Guidance',
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-white text-slate-900 relative border-b border-slate-200 poppins-regular">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            Popular destinations
          </h2>
          <p className="text-blue-600 text-sm font-normal">
            Explore More, Travel Better
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinationCards.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* SPECIAL OFFER Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-normal uppercase px-3 py-1 rounded-md shadow">
                    SPECIAL OFFER
                  </div>

                  {/* Location Overlay Bottom Left */}
                  <div className="absolute bottom-3 left-3 text-white text-sm font-normal flex items-center space-x-1 drop-shadow-md">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span className="font-normal">{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-normal text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xl font-normal text-orange-600">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-xs text-amber-500 font-normal">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-[10px] text-slate-400 font-normal">(Top Rating)</span>
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-normal text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Car className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.vehicle}</span>
                    </div>
                    <div className="col-span-2 flex items-center space-x-1.5 pt-1">
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.guidance}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => onSelectDestination(item)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-normal text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                >
                  BOOK NOW
                </button>

                <button
                  onClick={() => onSelectDestination(item)}
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-normal text-xs flex items-center justify-center space-x-1 transition-all"
                >
                  <span className="font-normal">More Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Center Blue Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-normal text-xs uppercase tracking-widest shadow-xl shadow-blue-600/30 flex items-center space-x-2 mx-auto transition-all hover:scale-105">
            <span className="font-normal">SEE ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
