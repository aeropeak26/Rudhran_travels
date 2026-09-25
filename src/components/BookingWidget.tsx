'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Car, Navigation, Search, CheckCircle2, ArrowRightLeft } from 'lucide-react';

interface BookingWidgetProps {
  onSearchCars: (searchData: any) => void;
}

export default function BookingWidget({ onSearchCars }: BookingWidgetProps) {
  const [activeTab, setActiveTab] = useState<'outstation' | 'local' | 'airport'>('outstation');
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [pickupLocation, setPickupLocation] = useState('Chennai');
  const [dropLocation, setDropLocation] = useState('Rameshwaram');
  const [pickupDate, setPickupDate] = useState('2026-10-01');
  const [pickupTime, setPickupTime] = useState('06:00');
  const [returnDate, setReturnDate] = useState('2026-10-03');
  const [carCategory, setCarCategory] = useState('All');

  const popularCities = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Bangalore', 'Rameshwaram', 'Ooty', 'Kodaikanal', 'Munnar'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchCars({
      activeTab,
      tripType,
      pickupLocation,
      dropLocation: activeTab === 'local' ? 'Local Hourly' : dropLocation,
      pickupDate,
      pickupTime,
      returnDate: tripType === 'roundTrip' ? returnDate : null,
      carCategory
    });
  };

  const swapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(temp);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-blue-900/10">
      
      {/* Top Main Tabs: Outstation | Local | Airport */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
        <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('outstation')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center space-x-2 transition-all ${
              activeTab === 'outstation'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>Outstation Cabs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('local')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center space-x-2 transition-all ${
              activeTab === 'local'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Local Hourly Rental</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('airport')}
            className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center space-x-2 transition-all ${
              activeTab === 'airport'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Airport Transfer</span>
          </button>
        </div>

        {/* Sub-toggle for Outstation: Round Trip vs One Way */}
        {activeTab === 'outstation' && (
          <div className="flex items-center space-x-4 text-xs font-bold text-slate-700">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
                className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500"
              />
              <span>Round Trip</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500"
              />
              <span>One Way Drop</span>
            </label>
          </div>
        )}
      </div>

      {/* Booking Form Grid */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Pickup Location */}
        <div className="relative">
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>PICK UP CITY / ADDRESS</span>
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
          >
            {popularCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Drop Location */}
        {activeTab !== 'local' && (
          <div className="relative">
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-extrabold text-slate-700 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>DROP DESTINATION</span>
              </label>
              <button
                type="button"
                onClick={swapLocations}
                className="text-[10px] font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                title="Swap Locations"
              >
                <ArrowRightLeft className="w-3 h-3" />
                <span>Swap</span>
              </button>
            </div>
            <select
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
            >
              {popularCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        )}

        {/* Local Duration */}
        {activeTab === 'local' && (
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>PACKAGE DURATION</span>
            </label>
            <select className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500">
              <option>8 Hours / 80 KMs</option>
              <option>12 Hours / 120 KMs</option>
              <option>4 Hours / 40 KMs</option>
            </select>
          </div>
        )}

        {/* Pickup Date & Time */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>PICKUP DATE & TIME</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold rounded-xl px-3 py-3 focus:outline-none focus:border-blue-600"
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold rounded-xl px-3 py-3 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Return Date */}
        {activeTab === 'outstation' && tripType === 'roundTrip' && (
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              <span>RETURN DATE</span>
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold rounded-xl px-3 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>
        )}

        {/* Vehicle Preference */}
        {(activeTab === 'airport' || (activeTab === 'outstation' && tripType === 'oneWay')) && (
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center space-x-1.5">
              <Car className="w-3.5 h-3.5 text-emerald-600" />
              <span>VEHICLE PREFERENCE</span>
            </label>
            <select
              value={carCategory}
              onChange={(e) => setCarCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-600"
            >
              <option value="All">Any Available Car</option>
              <option value="Sedan">Sedan (Dzire / Etios)</option>
              <option value="SUV">SUV (Innova Crysta)</option>
              <option value="Hatchback">Hatchback (Swift / i20)</option>
              <option value="Luxury">Luxury (BMW / Audi)</option>
            </select>
          </div>
        )}

        {/* Search Submit Button */}
        <div className="md:col-span-2 lg:col-span-4 mt-2">
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-base tracking-wide flex items-center justify-center space-x-3 shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Search className="w-5 h-5 text-amber-300" />
            <span>SEARCH AVAILABLE CARS & ESTIMATE FARE</span>
          </button>
        </div>

      </form>

      {/* Trust Badges */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600">
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Zero Advance Payment Option</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Clean & Sanitized Vehicles</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Verified Commercial Drivers</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>24x7 Breakdown Support</span>
        </div>
      </div>

    </div>
  );
}
