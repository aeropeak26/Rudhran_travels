'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FleetSectionProps {
  onBookCar: (car: any) => void;
}

export default function FleetSection({ onBookCar }: FleetSectionProps) {
  const [selectedCarIndex, setSelectedCarIndex] = useState<number>(1);

  const cars = [
    { name: 'Sedan', icon: 'M4 14l2-6h12l2 6m-16 0h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z', image: '/images/hero_car.png' },
    { name: 'SUV', icon: 'M4 12l2-6h12l2 6m-16 0h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm3-4h10', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Innova', icon: 'M3 13l2-6h14l2 6m-18 0h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5zm3-4h12', image: '/images/hero_car.png' },
    { name: 'Innova Crysta', icon: 'M3 13l2-6h14l2 6m-18 0h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5zm3-4h12', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Tempo Traveller', icon: 'M3 8h18M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l2-4h14l2 4', image: '/images/hero_car.png' },
    { name: 'Chevrolet', icon: 'M4 14l2-6h12l2 6m-16 0h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
  ];

  return (
    <section id="fleet" className="py-24 bg-[#0a192f] text-white relative poppins-regular overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-[#d97706]">✦</span> 
            Rental Tariff / Featured Vehicles 
            <span className="text-[#d97706]">✦</span>
          </h2>
          <p className="text-slate-300 text-sm font-medium">
            Well-maintained vehicles for every journey.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 relative z-10">
          {cars.map((car, index) => (
            <button
              key={index}
              onClick={() => setSelectedCarIndex(index)}
              className={`flex flex-col items-center gap-4 transition-all duration-300 ${selectedCarIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-colors ${selectedCarIndex === index ? 'border-white bg-white/10' : 'border-transparent'}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={car.icon} />
                </svg>
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${selectedCarIndex === index ? 'text-white' : 'text-slate-400'}`}>
                {car.name}
              </span>
            </button>
          ))}
        </div>

        {/* Large Carousel Showcase */}
        <div className="relative h-[250px] md:h-[400px] max-w-5xl mx-auto flex items-center justify-center">
          
          {/* Left Arrow */}
          <button
            onClick={() => setSelectedCarIndex((prev) => (prev > 0 ? prev - 1 : cars.length - 1))}
            className="absolute left-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0a192f] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Car Image */}
          <div className="relative w-[90%] h-full z-10">
            <Image
              key={selectedCarIndex}
              src={cars[selectedCarIndex].image}
              alt={cars[selectedCarIndex].name}
              fill
              className="object-contain animate-fadeIn drop-shadow-2xl mix-blend-screen"
              unoptimized
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setSelectedCarIndex((prev) => (prev < cars.length - 1 ? prev + 1 : 0))}
            className="absolute right-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0a192f] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          
        </div>

        {/* Overlay subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      </div>
    </section>
  );
}
