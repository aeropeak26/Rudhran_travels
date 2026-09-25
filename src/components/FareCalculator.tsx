'use client';

import React, { useState } from 'react';
import { Calculator, Fuel, Shield, ArrowRight, Info } from 'lucide-react';

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
  const estimatedGst = Math.round(subtotal * 0.05); // 5% GST on cab rentals
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
    <section id="fare-calculator" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-4 h-4" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Instant Outstation Fare Calculator
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Calculate exact per-KM outstation fares, driver allowances, and taxes before booking.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form (Left) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Select Car Class */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Select Vehicle Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Hatchback', 'Sedan', 'SUV', 'Luxury'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setCarType(type)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                      carType === type
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>{type}</div>
                    <div className="text-[10px] font-normal opacity-80">₹{carRates[type].perKm}/km</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Estimated Round-Trip Distance (KMs)
                </label>
                <span className="text-sm font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>100 KM</span>
                <span>500 KM</span>
                <span>1000 KM</span>
                <span>2000 KM</span>
              </div>
            </div>

            {/* Days Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                3. Trip Duration (Days)
              </label>
              <div className="flex items-center space-x-3">
                {[1, 2, 3, 4, 5, 7].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`w-10 h-10 rounded-xl font-bold text-xs transition-all border ${
                      days === d
                        ? 'bg-amber-500 border-amber-400 text-slate-950 shadow'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d}D
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox: Driver Allowance */}
            <div className="pt-2">
              <label className="flex items-center space-x-3 cursor-pointer text-xs font-medium text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <input
                  type="checkbox"
                  checked={includeDriverAllowance}
                  onChange={(e) => setIncludeDriverAllowance(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-slate-950 border-slate-700 rounded focus:ring-blue-500"
                />
                <span>Include Driver Night Allowance (₹{selectedRate.driverPerDay}/day)</span>
              </label>
            </div>

          </div>

          {/* Fare Summary Box (Right) */}
          <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
            
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400">ESTIMATED FARE</span>
              <span className="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded font-semibold">
                {carType} Class
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Distance Rate ({billableKm} KM @ ₹{selectedRate.perKm}/km):</span>
                <span className="font-semibold text-white">₹{kmFare.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Driver Allowance ({days} Days):</span>
                <span className="font-semibold text-white">₹{driverFare.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Estimated GST (5%):</span>
                <span className="font-semibold text-white">₹{estimatedGst.toLocaleString('en-IN')}</span>
              </div>

              {billableKm > distanceKm && (
                <div className="flex items-center space-x-1 text-[10px] text-amber-400 pt-1">
                  <Info className="w-3 h-3 flex-shrink-0" />
                  <span>Min {selectedRate.minKmPerDay} KM/day limit applied ({minRequiredKm} KM)</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">ESTIMATED TOTAL</div>
                <div className="text-2xl font-black text-amber-400">
                  ₹{totalFare.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                onClick={handleBookEstimate}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-xs flex items-center space-x-1.5 shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
              >
                <span>Book This Fare</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[10px] text-slate-500 text-center pt-2">
              *Tolls & state permit taxes are extra as per actual receipts.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
