'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, Filter, RotateCcw, ChevronDown, User, Check, Zap, MapPin, Search, Mail, Phone,
  Car, Shield, Droplets, RefreshCcw, Navigation, Clock, Thermometer, Briefcase, PlaySquare, Home
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { vehiclesData } from '@/data/vehicles';

export default function VehiclesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vClassFilter, setVClassFilter] = useState('All Vehicle Classes');
  const [seatsFilter, setSeatsFilter] = useState('Any Capacity');
  const [acFilter, setAcFilter] = useState('AC Only');
  const [sortBy, setSortBy] = useState('Highest Recommended');
  const [quickFilter, setQuickFilter] = useState('All Vehicles');

  const filteredVehicles = vehiclesData.filter(v => {
    if (vClassFilter !== 'All Vehicle Classes' && v.vClass !== vClassFilter) return false;
    if (seatsFilter !== 'Any Capacity' && v.seats !== seatsFilter) return false;
    if (acFilter === 'AC Only' && !v.ac) return false;
    if (acFilter === 'Non-AC' && v.ac) return false;
    if (quickFilter !== 'All Vehicles' && !v.quickTags.includes(quickFilter)) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'Highest Recommended') return b.rating - a.rating;
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  const resetFilters = () => {
    setVClassFilter('All Vehicle Classes');
    setSeatsFilter('Any Capacity');
    setAcFilter('AC Only');
    setSortBy('Highest Recommended');
    setQuickFilter('All Vehicles');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative w-full pt-16 pb-20 bg-gradient-to-b from-[#eef2fb] to-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-start max-w-4xl">
              <div className="flex items-center space-x-2 text-[10px] md:text-xs font-semibold tracking-widest text-slate-500 mb-8">
                <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1"><Home className="w-3 h-3"/> Home</Link>
                <span className="opacity-50">/</span>
                <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                <span className="opacity-50">/</span>
                <span className="text-[#0a192f]">Our Fleet</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> OUR FLEET
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#0a192f] mb-6">
                Our Fleet
              </h1>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
                Comfortable, reliable vehicles for every type of journey. Executive sedans, spacious touring MUVs, and luxury group coaches maintained to showroom standards.
              </p>
              
              <div className="w-full bg-white px-8 py-6 rounded-[1.5rem] shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a192f]">100% Sanitized</p>
                    <p className="text-[10px] text-slate-500">Cleaned pre-trip</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a192f]">Verified Chauffeurs</p>
                    <p className="text-[10px] text-slate-500">Uniformed & trained</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a192f]">Transparent Per-KM</p>
                    <p className="text-[10px] text-slate-500">No hidden surges</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a192f]">24/7 Roadside Care</p>
                    <p className="text-[10px] text-slate-500">Instant backup team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Filter Bar */}
        <section className="bg-white border-y border-slate-200 py-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-5 gap-4">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-[#0a192f]">Filter Fleet</h2>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{filteredVehicles.length} vehicles available</span>
              </div>
              <button onClick={resetFilters} className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1.5 transition-colors">
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">VEHICLE CLASS</label>
                <div className="relative">
                  <select 
                    value={vClassFilter}
                    onChange={(e) => setVClassFilter(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-sm text-[#0a192f] font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                  >
                    <option>All Vehicle Classes</option>
                    <option>Sedan</option>
                    <option>SUV / MUV</option>
                    <option>Luxury Coach</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">SEATING CAPACITY</label>
                <div className="relative">
                  <select 
                    value={seatsFilter}
                    onChange={(e) => setSeatsFilter(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-sm text-[#0a192f] font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                  >
                    <option>Any Capacity</option>
                    <option>4 Seats</option>
                    <option>6 - 7 Seats</option>
                    <option>12+ Seats</option>
                  </select>
                  <User className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">CLIMATE CONTROL</label>
                <div className="flex bg-slate-50 border border-slate-200 rounded-xl p-1">
                  <button 
                    onClick={() => setAcFilter('AC Only')}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-bold rounded-lg py-2 transition-all ${acFilter === 'AC Only' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-[#0a192f]'}`}
                  >
                    {acFilter === 'AC Only' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                    AC Only
                  </button>
                  <button 
                    onClick={() => setAcFilter('Non-AC')}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-bold rounded-lg py-2 transition-all ${acFilter === 'Non-AC' ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-[#0a192f]'}`}
                  >
                    {acFilter === 'Non-AC' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                    Non-AC
                  </button>
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">SORT BY</label>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 text-sm text-[#0a192f] font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
                  >
                    <option>Highest Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <Filter className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2">QUICK SELECT:</span>
              <button 
                onClick={() => setQuickFilter('All Vehicles')}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${quickFilter === 'All Vehicles' ? 'bg-[#0a192f] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                All Vehicles
              </button>
              <button 
                onClick={() => setQuickFilter('Hill Station Ready')}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${quickFilter === 'Hill Station Ready' ? 'bg-[#0a192f] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                Hill Station Ready
              </button>
              <button 
                onClick={() => setQuickFilter('Corporate Executive')}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${quickFilter === 'Corporate Executive' ? 'bg-[#0a192f] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                Corporate Executive
              </button>
              <button 
                onClick={() => setQuickFilter('Pilgrimage Group')}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${quickFilter === 'Pilgrimage Group' ? 'bg-[#0a192f] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                Pilgrimage Group
              </button>
              <button 
                onClick={() => setQuickFilter('Airport Transfers')}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors ${quickFilter === 'Airport Transfers' ? 'bg-[#0a192f] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
              >
                Airport Transfers
              </button>
            </div>
          </div>
        </section>

        {/* 3. Vehicle Cards Grid */}
        <section className="py-16 bg-slate-50 min-h-[400px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredVehicles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Car className="w-16 h-16 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-[#0a192f] mb-2">No vehicles found</h3>
                <p className="text-sm text-slate-500 mb-6">We couldn't find any vehicles matching your current filter criteria.</p>
                <button onClick={resetFilters} className="text-blue-600 text-sm font-bold flex items-center gap-2 hover:text-blue-700">
                  <RotateCcw className="w-4 h-4" /> Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map(vehicle => (
                  <div key={vehicle.id} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col">
                    <div className="relative h-[220px] bg-slate-100">
                      <Image src={vehicle.img} alt={vehicle.name} fill className="object-cover" />
                      
                      {vehicle.tagText && (
                        <div className={`absolute top-4 left-4 ${vehicle.tagColor === 'amber' ? 'bg-amber-400 text-amber-950' : vehicle.tagColor === 'emerald' ? 'bg-emerald-400 text-emerald-950' : vehicle.tagColor === 'cyan' ? 'bg-slate-900/80 backdrop-blur-md text-white' : vehicle.tagColor === 'slate' ? 'bg-slate-100 text-slate-700' : 'bg-blue-600 text-white'} text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5`}>
                          {vehicle.tagIcon && (
                            vehicle.tagColor === 'amber' ? <span className="w-1.5 h-1.5 rounded-full bg-amber-950"></span> : <vehicle.tagIcon className={`w-3 h-3 ${vehicle.tagColor === 'cyan' ? 'text-cyan-400' : ''}`} />
                          )}
                          {vehicle.tagText}
                        </div>
                      )}
                      
                      {vehicle.tagBadge && (
                        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          {vehicle.tagBadge}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">{vehicle.category}</span>
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                          <span className="text-amber-500">★</span> {vehicle.rating}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#0a192f] mb-3">{vehicle.name}</h3>
                      <p className="text-xs text-slate-500 mb-6 line-clamp-2">{vehicle.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                            <feature.icon className="w-3.5 h-3.5 text-blue-500" /> <span className="text-[11px] font-medium text-slate-700">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OUTSTATION RATE</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-[#0a192f]">₹{vehicle.price}</span>
                            <span className="text-xs text-slate-500">/ km</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-slate-500">Local (8hr / 80km) package:</span>
                          <span className="text-[10px] font-bold text-[#0a192f]">₹{vehicle.localPackage}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-slate-500">Minimum run:</span>
                          <span className="text-[10px] font-bold text-[#0a192f]">{vehicle.minRun} km / day</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <Link href={`/vehicles/${vehicle.id}`} className="py-3 bg-white border border-slate-200 hover:bg-slate-50 text-[#0a192f] text-xs font-bold rounded-xl transition-colors flex items-center justify-center">View Details</Link>
                        <button onClick={() => setIsModalOpen(true)} className="py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1">Enquire Now &rarr;</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. Why Discerning Travelers Choose Our Fleet (Stats) */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[9px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4 inline-block">THE RUDHRAN STANDARD</span>
              <h2 className="text-3xl font-bold text-[#0a192f] mb-4">Why Discerning Travelers Choose Our Fleet</h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">Every vehicle is backed by strict engineering audits, vetted career chauffeurs, and completely transparent kilometer auditing.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">50+ Point Safety Audit</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Tires, braking systems, suspension, air conditioning, and emergency tooling are systematically verified before every long-distance assignment.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Zero-Breakdown Promise
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">Ghat & Highway Experts</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Chauffeurs have an average of 10+ years driving across South India's hairpin ghat roads (Ooty, Kodaikanal, Munnar) with spotless safety records.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Police/Background-Vetted
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">100% Pristine Cabins</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Deep-sanitized upholstery, fresh cabin fragrances, complimentary mineral water bottles, tissue dispensers, and mobile charging docks.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Executive Hospitality
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">No Driver Batta Surges</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Clear timeline pricing upfront. Inter-state tolls, parking allowances, and standardized driver batta without mid-journey surprises or fluctuations.</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Direct Digital Invoicing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact Form Section */}
        <section className="bg-[#0b1120] text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold uppercase tracking-widest rounded-md mb-6">
                  <Phone className="w-3 h-3" /> 24/7 CONCIERGE SUPPORT
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Need Help Choosing the Right Vehicle?</h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">Our 24/7 fleet travel coordinators will assess your passenger count, luggage volume, and travel route to recommend the ideal cab for your tour.</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-300 font-medium">
                  <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-400" /> 15-Min Instant Quote</div>
                  <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> 0% Hidden Charges</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> On-Time Guaranteed</div>
                </div>
              </div>
              
              {/* Right Side Form */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">First Name</label>
                      <input type="text" className="w-full bg-transparent border-none text-sm text-white placeholder-slate-600 focus:outline-none" placeholder="John" />
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Last Name</label>
                      <input type="text" className="w-full bg-transparent border-none text-sm text-white placeholder-slate-600 focus:outline-none" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                      <input type="email" className="w-full bg-transparent border-none text-sm text-white placeholder-slate-600 focus:outline-none" placeholder="john@example.com" />
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                      <input type="tel" className="w-full bg-transparent border-none text-sm text-white placeholder-slate-600 focus:outline-none" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Travel Details</label>
                    <textarea rows={3} className="w-full bg-transparent border-none text-sm text-white placeholder-slate-600 focus:outline-none resize-none" placeholder="Pickup location, destination, travel dates, passenger count..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> Send Request
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
