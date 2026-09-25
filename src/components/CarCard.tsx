'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Fuel, Settings, Luggage, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Car } from '../data/rentalData';

interface CarCardProps {
  car: Car;
  onBookCar: (car: Car) => void;
}

export default function CarCard({ car, onBookCar }: CarCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Car Image Container */}
        <div className="relative h-48 sm:h-52 w-full bg-slate-950 p-4 flex items-center justify-center overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Pill */}
          <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow">
            {car.category}
          </div>

          {/* Rating Pill */}
          <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{car.rating}</span>
            <span className="text-slate-400 text-[10px]">({car.reviewsCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {car.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium">Chauffeur Driven & Outstation Ready</p>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-300 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-amber-400" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-4 h-4 text-emerald-400" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Luggage className="w-4 h-4 text-purple-400" />
              <span>{car.luggage} Bags</span>
            </div>
          </div>

          {/* Features Bullets */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {car.features.map((feat, idx) => (
              <span key={idx} className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-md flex items-center space-x-1">
                <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Price & Action Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-400">
            Outstation Rate: <strong className="text-white">₹{car.ratePerKm}/km</strong>
          </div>
          <div className="text-xl font-black text-amber-400">
            ₹{car.perDayRate.toLocaleString('en-IN')}
            <span className="text-xs text-slate-400 font-normal"> / day</span>
          </div>
        </div>

        <button
          onClick={() => onBookCar(car)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-105"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>

    </div>
  );
}
