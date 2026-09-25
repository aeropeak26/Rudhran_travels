'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

interface FareCalculatorProps {
  onBookEstimatedFare: (estimate: any) => void;
}

export default function FareCalculator({ onBookEstimatedFare }: FareCalculatorProps) {
  const [distanceKm, setDistanceKm] = useState<number>(350);
  const [days, setDays] = useState<number>(2);
  const [carType, setCarType] = useState<'Sedan' | 'SUV' | 'Hatchback' | 'Luxury'>('Sedan');
  const [includeDriverAllowance, setIncludeDriverAllowance] = useState<boolean>(true);

  const carRates = {
    Hatchback: { perKm: 11, minKmPerDay: 250, driverPerDay: 400 },
    Sedan: { perKm: 13, minKmPerDay: 250, driverPerDay: 500 },
    SUV: { perKm: 19, minKmPerDay: 300, driverPerDay: 600 },
    Luxury: { perKm: 45, minKmPerDay: 300, driverPerDay: 1000 },
  };

  const selectedRate = carRates[carType];
  const minRequiredKm = selectedRate.minKmPerDay * days;
  const billableKm = Math.max(distanceKm, minRequiredKm);

  const kmFare = billableKm * selectedRate.perKm;
  const driverFare = includeDriverAllowance ? selectedRate.driverPerDay * days : 0;
  const subtotal = kmFare + driverFare;
  const estimatedGst = Math.round(subtotal * 0.05); // 5% GST
  const totalFare = subtotal + estimatedGst;

  const handleBookEstimate = () => {
    onBookEstimatedFare({
      carType,
      distanceKm,
      days,
      billableKm,
      kmFare,
      driverFare,
      estimatedGst,
      totalFare,
    });
  };

  return (
    <section id="fare-calculator" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
            <Calculator className="w-4 h-4 text-orange-500" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Instant Outstation Fare Calculator
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Calculate exact per-KM outstation fares, driver allowances, and taxes before booking.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form (Left) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Select Car Class */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Vehicle Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Hatchback', 'Sedan', 'SUV', 'Luxury'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setCarType(type)}
                    className={`py-3 px-2 rounded-xl text-xs font-black transition-all border ${
                      carType === type
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div>{type}</div>
                    <div className="text-[10px] font-normal opacity-90">₹{carRates[type].perKm}/km</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  2. Estimated Round-Trip Distance (KMs)
                </label>
                <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {distanceKm} KM
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="25"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-1">
                <span>100 KM</span>
                <span>500 KM</span>
                <span>1000 KM</span>
                <span>2000 KM</span>
              </div>
            </div>

            {/* Days Selection */}
            <div>
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                3. Trip Duration (Days)
              </label>
              <div className="flex items-center space-x-3">
                {[1, 2, 3, 4, 5, 7].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`w-10 h-10 rounded-xl font-black text-xs transition-all border ${
                      days === d
                        ? 'bg-amber-500 border-amber-500 text-slate-950 shadow'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {d}D
                  </button>
                ))}
              </div>
            </div>

            {/* Driver Allowance */}
            <div className="pt-2">
              <label className="flex items-center space-x-3 cursor-pointer text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  checked={includeDriverAllowance}
                  onChange={(e) => setIncludeDriverAllowance(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500"
                />
                <span>Include Driver Night Allowance (₹{selectedRate.driverPerDay}/day)</span>
              </label>
            </div>

          </div>

          {/* Fare Summary Box (Right) */}
          <div className="md:col-span-5 bg-blue-950 text-white p-6 rounded-3xl space-y-4 shadow-xl">
            
            <div className="flex justify-between items-center border-b border-blue-900 pb-3">
              <span className="text-xs font-bold text-blue-200">ESTIMATED FARE</span>
              <span className="text-[10px] bg-blue-800 text-blue-100 px-2 py-0.5 rounded font-extrabold">
                {carType} Class
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-blue-100">
                <span>Distance Rate ({billableKm} KM @ ₹{selectedRate.perKm}/km):</span>
                <span className="font-bold text-white">₹{kmFare.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-blue-100">
                <span>Driver Allowance ({days} Days):</span>
                <span className="font-bold text-white">₹{driverFare.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-blue-100">
                <span>Estimated GST (5%):</span>
                <span className="font-bold text-white">₹{estimatedGst.toLocaleString('en-IN')}</span>
              </div>

              {billableKm > distanceKm && (
                <div className="flex items-center space-x-1 text-[10px] text-amber-400 pt-1 font-medium">
                  <Info className="w-3 h-3 flex-shrink-0" />
                  <span>Min {selectedRate.minKmPerDay} KM/day limit applied ({minRequiredKm} KM)</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-blue-900 flex justify-between items-end">
              <div>
                <div className="text-[10px] text-blue-200 uppercase font-extrabold">ESTIMATED TOTAL</div>
                <div className="text-2xl font-black text-amber-400">
                  ₹{totalFare.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                onClick={handleBookEstimate}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black text-xs flex items-center space-x-1.5 shadow-lg transition-all hover:scale-105"
              >
                <span>Book This Fare</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[10px] text-blue-300 text-center pt-2">
              *Tolls & state permit taxes extra as per actuals.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
