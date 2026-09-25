'use client';

import React, { useState } from 'react';
import { Car as CarIcon, Sparkles, SlidersHorizontal } from 'lucide-react';
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
    <section id="fleet" className="py-20 bg-slate-950 text-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <CarIcon className="w-4 h-4 text-amber-400" />
            <span>OUR VEHICLE FLEET</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Explore Our Modern Car Rental Fleet
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base">
            Choose from compact hatchbacks for quick city runs, comfortable sedans for outstation trips, or premium 7-seater SUVs for family vacations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
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

        {/* Fleet Bottom Callout */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/30 p-8 rounded-3xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Looking for Luxury Wedding or Corporate Fleet?</span>
            </h4>
            <p className="text-xs text-slate-400">We provide Jaguar, Mercedes Benz, Audi, and Tempo Travellers for corporate events & grand weddings.</p>
          </div>

          <button
            onClick={() => onBookCar(CAR_FLEET[4])}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all hover:scale-105 whitespace-nowrap"
          >
            Inquire Luxury Fleet
          </button>
        </div>

      </div>
    </section>
  );
}
