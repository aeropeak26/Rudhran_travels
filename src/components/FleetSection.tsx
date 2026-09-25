'use client';

import React, { useState } from 'react';
import { Car as CarIcon, Sparkles } from 'lucide-react';
import { CAR_FLEET, Car } from '../data/rentalData';
import CarCard from './CarCard';

interface FleetSectionProps {
  onBookCar: (car: Car) => void;
}

export default function FleetSection({ onBookCar }: FleetSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Sedan', 'SUV', 'Hatchback', 'Luxury'];

  const filteredCars = activeCategory === 'All'
    ? CAR_FLEET
    : CAR_FLEET.filter((car) => car.category === activeCategory);

  return (
    <section id="fleet" className="py-20 bg-white text-slate-900 relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
            <CarIcon className="w-4 h-4 text-orange-500" />
            <span>OUR VEHICLE FLEET</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Explore Our Modern Rental Fleet
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base">
            Choose from compact hatchbacks, luxury sedans, or spacious 7-seater SUVs for family vacations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Vehicles' : cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onBookCar={onBookCar} />
          ))}
        </div>

      </div>
    </section>
  );
}
