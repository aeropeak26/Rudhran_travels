'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { packagesData } from '@/data/packages';
import { 
  Check, MapPin, Clock, Phone, FileText, Zap, ShieldCheck, Star, 
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-[#f97316]">Tour Packages</span>
            </div>

            <div className="bg-[#1e3a8a]/40 text-blue-100 px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#1e3a8a] uppercase tracking-wider text-[10px] font-bold mb-8">
              <div className="w-2 h-2 bg-[#f97316] rounded-full"></div> OUR TOUR PACKAGES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl">
              Discover Places Worth <br className="hidden md:block" />Remembering
            </h1>
            
            <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Curated journeys, comfortable travel and unforgettable experiences across beautiful destinations in Tamil Nadu, Kerala, and Karnataka with our premium fleet.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-slate-200 text-[11px] font-medium shadow-sm hover:bg-white/10 transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div> Guaranteed Punctual Chauffeurs
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-slate-200 text-[11px] font-medium shadow-sm hover:bg-white/10 transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div> 100% Tailored Itineraries
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-slate-200 text-[11px] font-medium shadow-sm hover:bg-white/10 transition-colors">
                <div className="w-4 h-4 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div> Zero Hidden Costs
              </div>
            </div>

            <Link href="#packages" className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors">
              SCROLL TO EXPLORE CURATED CIRCUITS &darr;
            </Link>
          </div>
        </section>

        {/* 2. Packages Grid */}
        <section id="packages" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          
          {/* Filter Bar */}
          <div className="bg-white rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex justify-between items-center mb-12 gap-4 border border-slate-100 max-w-6xl mx-auto overflow-hidden">
            <div className="flex items-center gap-1 w-full overflow-x-auto px-2 scrollbar-hide">
              {filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-full text-[12px] font-bold transition-all whitespace-nowrap shrink-0 ${
                    filter === f 
                    ? 'bg-[#0f172a] text-white shadow-md' 
                    : 'text-slate-500 hover:text-[#0f172a]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-1.5 px-5 py-3 bg-[#f8fafc] rounded-full border border-slate-100 text-[11px] font-bold text-[#0f172a] whitespace-nowrap shrink-0 mr-2">
              <span className="flex items-center gap-1.5 text-slate-500 font-medium"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Showing</span> {filteredPackages.length} Handpicked Packages
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, idx) => (
              <div key={pkg.id} className={`relative rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group border border-white/10 h-[420px] ${pkg.featured ? 'md:col-span-2' : 'col-span-1'}`}>
                
                {/* Optional Orange Top Tab */}
                {pkg.badge && !pkg.featured && pkg.badge.includes('HERITAGE') && (
                  <div className="absolute top-0 left-6 bg-[#ffb703] text-[#0f172a] text-[8px] font-black uppercase px-3 py-1.5 rounded-b-lg z-20 shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                {/* Background Image */}
                <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-[#0b1324]/60 to-[#0b1324]/10 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-[#0b1324]/90 to-transparent h-2/3 top-1/3 z-0"></div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full w-full p-6">
                  
                  {/* Top Badges */}
                  <div className={`flex justify-between items-start w-full ${pkg.badge && !pkg.featured && pkg.badge.includes('HERITAGE') ? 'pt-6' : ''}`}>
                     {pkg.featured ? (
                       <div className="bg-[#0052cc] text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                         <Star className="w-3 h-3 fill-white" /> FEATURED JOURNEY
                       </div>
                     ) : (
                       <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center shadow-sm">
                         {pkg.duration}
                       </div>
                     )}

                     {pkg.featured ? (
                       <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                         <Clock className="w-3 h-3 text-slate-300" /> {pkg.duration}
                       </div>
                     ) : (
                       <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 text-[#ffb703] text-[9px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#ffb703]" /> 4.9
                       </div>
                     )}
                  </div>

                  <div className="flex-grow"></div>

                  {/* Bottom Content */}
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 text-blue-400 text-[8px] font-black uppercase tracking-widest mb-2">
                      <MapPin className="w-3 h-3" /> {pkg.subtitle}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">{pkg.title}</h3>
                    <p className={`text-[11px] text-slate-300 leading-relaxed mb-5 ${pkg.featured ? 'max-w-md' : 'max-w-sm'}`}>
                      {pkg.desc}
                    </p>

                    <div className="w-full h-px bg-white/10 mb-5"></div>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">STARTING FROM</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-extrabold text-white">₹{pkg.price}</span>
                          <span className="text-[9px] font-medium text-slate-400">/ person</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {pkg.featured ? (
                          <>
                            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 border border-white/20 hover:bg-white/10 text-white rounded-lg text-[10px] font-bold transition-colors shadow-sm">
                              Quick Enquire
                            </button>
                            <button onClick={() => setIsModalOpen(true)} className="px-5 py-2 bg-[#0052cc] hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold transition-colors shadow-md shadow-blue-600/20 flex items-center gap-1.5">
                              Explore Package &rarr;
                            </button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => setIsModalOpen(true)} className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white/10 text-slate-300 rounded-lg transition-colors shadow-sm">
                              <FileText className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-[#0052cc] hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold transition-colors shadow-md shadow-blue-600/20">
                              View Details
                            </button>
                          </>
                        )}
                      </div>
                    </div>
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
