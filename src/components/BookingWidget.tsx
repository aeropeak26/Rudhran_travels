'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Car, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BookingWidgetProps {
  onSearchCars: (searchData: any) => void;
}

export default function BookingWidget({ onSearchCars }: BookingWidgetProps) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchCars({
      pickup,
      destination,
      date,
      vehicle: vehicle || 'Innova Crysta Luxury',
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto poppins-regular">
      
      {/* Main Container Card */}
      <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/60 border border-slate-100 overflow-hidden">
        
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-8 bg-blue-600 rounded-full mt-1"></div>
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">Plan Your Journey</h2>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  Transparent per-kilometer rates • Zero hidden surcharges • Fast confirmation
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-bold text-blue-600 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Drivers Active In Madurai
            </div>
          </div>

          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end mb-6">
            
            {/* PICKUP POINT */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-2 tracking-wider">
                PICKUP POINT
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                  <Navigation className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Madurai Airport / Junction"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-[#f4f7fb] border-none text-slate-800 text-xs font-medium rounded-xl pl-11 pr-4 h-[52px] focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            {/* DESTINATION / TRIP */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-2 tracking-wider">
                DESTINATION / TRIP
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Kodaikanal / Rameshwaram"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#f4f7fb] border-none text-slate-800 text-xs font-medium rounded-xl pl-11 pr-4 h-[52px] focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            {/* JOURNEY DATE */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-2 tracking-wider">
                JOURNEY DATE
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#f4f7fb] border-none text-slate-800 text-xs font-medium rounded-xl pl-11 pr-4 h-[52px] focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* VEHICLE CLASS */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-2 tracking-wider">
                VEHICLE CLASS
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                  <Car className="w-4 h-4" />
                </div>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-[#f4f7fb] border-none text-slate-800 text-xs font-medium rounded-xl pl-11 pr-4 h-[52px] focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none"
                >
                  <option value="">Innova Crysta Luxury</option>
                  <option value="Sedan">Sedan (Etios/Dzire)</option>
                  <option value="SUV">SUV (Innova)</option>
                  <option value="Tempo">Tempo Traveller</option>
                </select>
              </div>
            </div>

            {/* GET QUOTE Button */}
            <div className="lg:col-span-1">
              <button
                type="submit"
                className="w-full h-[52px] rounded-xl bg-[#d97706] hover:bg-orange-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-[0_0_20px_rgba(217,119,6,0.3)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Bottom Features Row */}
          <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-4">
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#0f172a] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No hidden charges
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#0f172a] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              24/7 travel desk
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#0f172a] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Immediate WhatsApp Quotation
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
