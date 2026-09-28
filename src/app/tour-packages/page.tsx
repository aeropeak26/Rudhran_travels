'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { packagesData } from '@/data/packages';
import { 
  CheckCircle2, MapPin, Clock, Phone, FileText, Zap, ShieldCheck, Star, 
  Map, Calendar, Plus, Car, User, Navigation, ArrowRight
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function TourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Packages');

  const filters = [
    'All Packages', 'Tamil Nadu', 'Kerala', 'Karnataka', 
    'South India Circuit', 'Family Trips', 'Group Trips'
  ];

  const filteredPackages = packagesData.filter(p => {
    if (filter === 'All Packages') return true;
    return p.category === filter;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hill_station.png" 
              alt="South India Destinations" 
              fill 
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-white font-bold">Tour Packages</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white mb-6 leading-tight max-w-2xl">
              Discover Places Worth Remembering
            </h1>
            
            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Curated journeys, comfortable travel and unforgettable experiences across beautiful destinations in Tamil Nadu, Kerala, and Karnataka with our premium fleet.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Customized Plans
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 100% Tailored Itineraries
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Fixed Hotel Costs
              </div>
            </div>

            <Link href="#packages" className="inline-flex items-center gap-2 text-[11px] font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors">
              Scroll To Explore South India Trips &darr;
            </Link>
          </div>
        </section>

        {/* 2. Packages Grid */}
        <section id="packages" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          
          {/* Filter Bar */}
          <div className="bg-white rounded-full p-2 shadow-lg shadow-black/5 flex flex-col md:flex-row justify-between items-center mb-10 overflow-x-auto gap-4 border border-slate-100">
            <div className="flex items-center gap-1 min-w-max">
              {filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                    filter === f 
                    ? 'bg-[#0f172a] text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#0f172a]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full text-[11px] font-bold transition-colors whitespace-nowrap shrink-0">
              <Plus className="w-3.5 h-3.5" /> Custom & Honeymoon Packages
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, idx) => (
              <div key={pkg.id} className={`bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col group ${pkg.featured ? 'md:col-span-2' : 'col-span-1'}`}>
                
                {/* Image Section */}
                <div className={`relative ${pkg.featured ? 'h-64 md:h-80' : 'h-64'} bg-slate-100 overflow-hidden`}>
                  <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Map className="w-3 h-3" /> {pkg.badge}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#0052cc] text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full shadow-md">
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Title overlay for featured, standard position for normal */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-1">{pkg.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-300 text-[10px] font-medium uppercase tracking-wider">
                      <MapPin className="w-3 h-3" /> {pkg.subtitle}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[12px] text-slate-600 leading-relaxed mb-6 flex-grow">
                    {pkg.desc}
                  </p>

                  <div className="flex items-end justify-between border-t border-slate-100 pt-5">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Starts From</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-[#0f172a]">₹{pkg.price}</span>
                        <span className="text-[9px] font-medium text-slate-500">/ person</span>
                      </div>
                    </div>
                    
                    <button onClick={() => setIsModalOpen(true)} className="px-5 py-2.5 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/20">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 3. Why Travel With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">THE RUDHRAN PROMISE</span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">Why Travel With Us?</h2>
              <p className="text-[13px] text-slate-500 max-w-xl mx-auto leading-relaxed">
                We go above and beyond to ensure your outstation journey is safe, comfortable, and exactly as you imagined.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f8fafc] p-8 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 transition-colors text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 text-blue-600">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">Comfortable Vehicles</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Sanitized, showroom-condition fleet spanning sedans to group coaches, complete with working AC and plush interiors.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 transition-colors text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">Experienced Drivers</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Professional, background-verified local drivers who double as route guides for Tamil Nadu, Kerala, and Karnataka.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 transition-colors text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 text-blue-600">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">Flexible Itineraries</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Pause for photos, take detours, or change plans on the go. It's your vacation, control it with absolute freedom.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 transition-colors text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">Transparent Pricing</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Clear breakdowns provided before booking. Zero hidden fees for tolls, state permits, or driver batta upon arrival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA Block */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f172a] text-white rounded-[2rem] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block mb-3">START PLANNING TODAY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">Your Next Adventure Starts Here</h2>
              <p className="text-[14px] text-slate-400 leading-relaxed max-w-lg mb-0">
                Let us map out a flawless travel experience. Share your desired dates and destinations, and we'll craft the perfect itinerary.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10">
              <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-8 py-4 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                <Map className="w-4 h-4" /> Plan My Trip
              </button>
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
