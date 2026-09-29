'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FleetSectionProps {
  data?: any[];
  onBookCar: (car: any) => void;
}

export default function FleetSection({ data, onBookCar }: FleetSectionProps) {
  const [selectedCarIndex, setSelectedCarIndex] = useState<number>(0);

  const defaultCars = [
    { name: 'Sedan', icon: 'M4 14l2-6h12l2 6m-16 0h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z', image: '/images/hero_car.png' },
    { name: 'SUV', icon: 'M4 12l2-6h12l2 6m-16 0h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm3-4h10', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Innova', icon: 'M3 13l2-6h14l2 6m-18 0h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5zm3-4h12', image: '/images/hero_car.png' },
    { name: 'Innova Crysta', icon: 'M3 13l2-6h14l2 6m-18 0h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5zm3-4h12', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Tempo Traveller', icon: 'M3 8h18M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l2-4h14l2 4', image: '/images/hero_car.png' },
    { name: 'Chevrolet', icon: 'M4 14l2-6h12l2 6m-16 0h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
  ];

  const cars = data?.length === 6 ? data : defaultCars;

  // Use icon from default array if data array lacks it
  const displayCars = cars.map((car: any, idx: number) => ({
    ...car,
    icon: car.icon || defaultCars[idx].icon
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCarIndex((prev) => (prev < displayCars.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [displayCars.length]);

  return (
    <section id="fleet" className="py-8 md:py-12 md:py-16 bg-[#0a192f] text-white relative poppins-regular overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-0.5 flex items-center justify-center gap-2">
            <span className="text-[#d97706]">✦</span> 
            Rental Tariff / Featured Vehicles 
            <span className="text-[#d97706]">✦</span>
          </h2>
          <p className="text-slate-300 text-[10px] md:text-xs font-medium">
            Well-maintained vehicles for every journey.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-4 relative z-10">
          {displayCars.map((car: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedCarIndex(index)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${selectedCarIndex === index ? 'opacity-100 scale-105' : 'opacity-50 hover:opacity-80'}`}
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-colors ${selectedCarIndex === index ? 'border-white bg-white/10' : 'border-transparent'}`}>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={car.icon} />
                </svg>
              </div>
              <span className={`text-[8px] md:text-[9px] uppercase font-bold tracking-widest ${selectedCarIndex === index ? 'text-white' : 'text-slate-400'}`}>
                {car.name}
              </span>
            </button>
          ))}
        </div>

        {/* Compact Carousel Showcase */}
        <div className="relative h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] max-w-4xl mx-auto flex items-center justify-center mt-0">
          
          {/* Left Arrow */}
          <button
            onClick={() => setSelectedCarIndex((prev) => (prev > 0 ? prev - 1 : displayCars.length - 1))}
            className="absolute left-0 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#0a192f] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          {/* Car Image with Framer Motion AnimatePresence */}
          <div className="relative w-[85%] h-full z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCarIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={displayCars[selectedCarIndex].image}
                  alt={displayCars[selectedCarIndex].name}
                  fill
                  className="object-contain drop-shadow-2xl mix-blend-screen"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setSelectedCarIndex((prev) => (prev < displayCars.length - 1 ? prev + 1 : 0))}
            className="absolute right-0 z-20 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#0a192f] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          
        </div>

        {/* Overlay subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      </div>
    </section>
  );
}
