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
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Car Image Container */}
        <div className="relative h-48 sm:h-52 w-full bg-slate-50 p-4 flex items-center justify-center overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Pill */}
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow">
            {car.category}
          </div>

          {/* Rating Pill */}
          <div className="absolute top-3 right-3 bg-white border border-slate-200 text-slate-900 text-xs font-black px-2.5 py-1 rounded-full flex items-center space-x-1 shadow">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{car.rating}</span>
            <span className="text-slate-500 text-[10px]">({car.reviewsCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
              {car.name}
            </h3>
            <p className="text-xs text-slate-500 font-bold">Chauffeur Driven & Outstation Ready</p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-orange-500" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-4 h-4 text-emerald-600" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Luggage className="w-4 h-4 text-purple-600" />
              <span>{car.luggage} Bags</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price & Action Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold">
            Rate: <strong className="text-slate-900 font-extrabold">₹{car.ratePerKm}/km</strong>
          </div>
          <div className="text-xl font-black text-blue-900">
            ₹{car.perDayRate.toLocaleString('en-IN')}
            <span className="text-xs text-slate-500 font-normal"> / day</span>
          </div>
        </div>

        <button
          onClick={() => onBookCar(car)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center space-x-1.5 shadow-md shadow-blue-600/20 transition-all hover:scale-105"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>

    </div>
  );
}
