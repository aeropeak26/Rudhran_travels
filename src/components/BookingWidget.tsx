'use client';

import React, { useState } from 'react';
import { Search, Luggage, DollarSign, ChevronDown, MessageCircle } from 'lucide-react';

interface BookingWidgetProps {
  onSearchCars: (searchData: any) => void;
}

export default function BookingWidget({ onSearchCars }: BookingWidgetProps) {
  const [activeTab, setActiveTab] = useState<'search' | 'tour' | 'rental'>('search');
  const [carModel, setCarModel] = useState('All Makes');
  const [seats, setSeats] = useState('No of seats');
  const [priceRange, setPriceRange] = useState('No Min');
  const [location, setLocation] = useState('All Locations');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchCars({
      activeTab,
      carModel,
      seats,
      priceRange,
      location,
    });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto poppins">
      
      {/* Floating Green WhatsApp Button on top right */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-6 right-4 sm:right-6 z-30 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 transition-all"
        title="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Main Container Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('search')}
            className={`px-6 py-3.5 flex items-center space-x-2 transition-all ${
              activeTab === 'search'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search Cars ...</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tour')}
            className={`px-6 py-3.5 flex items-center space-x-2 transition-all ${
              activeTab === 'tour'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Luggage className="w-4 h-4" />
            <span>Tour package</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('rental')}
            className={`px-6 py-3.5 flex items-center space-x-2 transition-all ${
              activeTab === 'rental'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Rental car</span>
          </button>
        </div>

        {/* Dropdown Filters Grid */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* CAR MODEL */}
          <div>
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1 tracking-wider">
              CAR MODEL
            </label>
            <div className="relative">
              <select
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:border-blue-600"
              >
                <option value="All Makes">All Makes</option>
                <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                <option value="Maruti Dzire">Maruti Dzire</option>
                <option value="Hyundai i20">Hyundai i20</option>
                <option value="Mahindra XUV700">Mahindra XUV700</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* SEATS */}
          <div>
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1 tracking-wider">
              SEATS
            </label>
            <div className="relative">
              <select
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:border-blue-600"
              >
                <option value="No of seats">No of seats</option>
                <option value="4+1 Seats">4+1 Seats</option>
                <option value="5+1 Seats">5+1 Seats</option>
                <option value="6+1 Seats">6+1 Seats</option>
                <option value="7+1 Seats">7+1 Seats</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* PRICE RANGE */}
          <div>
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1 tracking-wider">
              PRICE RANGE
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:border-blue-600"
              >
                <option value="No Min">No Min</option>
                <option value="Under ₹1500">Under ₹1500</option>
                <option value="₹1500 - ₹3000">₹1500 - ₹3000</option>
                <option value="₹3000 - ₹5000">₹3000 - ₹5000</option>
                <option value="₹5000+">₹5000+</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1 tracking-wider">
              LOCATION
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:border-blue-600"
              >
                <option value="All Locations">All Locations</option>
                <option value="Madurai">Madurai</option>
                <option value="Kodaikanal">Kodaikanal</option>
                <option value="Rameshwaram">Rameshwaram</option>
                <option value="Ooty">Ooty</option>
                <option value="Chennai">Chennai</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Blue Search Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              Search Cars
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
