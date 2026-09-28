'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { vehiclesData } from '@/data/vehicles';
import { 
  CheckCircle2, ChevronRight, User, Shield, Thermometer, Briefcase, 
  MapPin, Clock, Phone, Mail, Zap, PlaySquare, FileText, Check, Car, Calendar, Navigation, ShieldCheck, Moon, Info, AlertCircle, Sparkles, Star
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const additionalCharges = [
  {
    icon: CheckCircle2,
    title: 'Toll Charges',
    desc: 'Scanned electronically in real-time via official NHAI FASTag. Itemized digital slips and pass notifications are verified directly with you at actual government rates.',
    tag: 'AT ACTUALS (GOVT RATES)'
  },
  {
    icon: MapPin,
    title: 'Parking Charges',
    desc: 'Physical parking fee receipts incurred at Chennai Airport (MAA), railway junctions, major pilgrimage shrines, UNESCO monument sites, and hotel valet points.',
    tag: 'ACTUAL PRINTED SLIPS'
  },
  {
    icon: Briefcase,
    title: 'Driver Allowance',
    desc: 'Daily chauffeur batta covering certified driver nourishment and overnight rest during outstation journeys. Fixed at ₹400 to ₹600 based on vehicle category.',
    tag: '₹400 - ₹600 / CALENDAR DAY'
  },
  {
    icon: Info,
    title: 'Interstate Permits',
    desc: 'State road transport tax and official border entry permits when crossing into Kerala, Karnataka, Andhra Pradesh, or Puducherry with automated online tax receipts.',
    tag: 'GOVT BORDER TAX INVOICED'
  },
  {
    icon: Navigation,
    title: 'Additional Kilometres',
    desc: 'Travel exceeding the pre-booked daily minimum threshold (250 km or 300 km) billed at the standardized transparent per-kilometer rate indicated in your card.',
    tag: 'CALCULATED PER VEHICLE RATE'
  },
  {
    icon: Moon,
    title: 'Night & Hill Station Cess',
    desc: 'Modest night driving allowance applicable strictly between 10:00 PM and 6:00 AM, alongside municipal hill station green entry fees (Ooty/Kodaikanal/Yercaud).',
    tag: '₹300 NIGHT / ACTUAL CESS'
  }
];

const tariffCardOverrides: Record<string, any> = {
  '1': {
    title: 'Toyota Innova Crysta',
    subtitle: 'Luxury 2.4 / 2.8',
    badge: 'CAPTAIN SEATS',
    mostPopular: true
  },
  '2': {
    title: 'Sedan',
    subtitle: 'Dzire / Etios / Aura',
    badge: 'CITY & HIGHWAY',
    mostPopular: false
  },
  '3': {
    title: 'Premium SUV',
    subtitle: 'XUV700 / Scorpio-N',
    badge: 'GHAT & HILL TERRAIN',
    mostPopular: false
  },
  '4': {
    title: 'Toyota Innova',
    subtitle: 'Standard MPV',
    badge: 'TOURING CLASSIC',
    mostPopular: false
  },
  '5': {
    title: 'Force Urbania VIP',
    subtitle: 'Monocoque Body',
    badge: 'EXECUTIVE VIP VAN',
    mostPopular: false
  },
  '6': {
    title: 'Tempo Traveller',
    subtitle: 'Group Deluxe',
    badge: 'PILGRIMAGE & GROUPS',
    mostPopular: false
  }
};

export default function TariffPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Vehicles');

  const filteredVehicles = vehiclesData.filter(v => {
    if (filter === 'All Vehicles') return true;
    if (filter === 'Sedans') return v.vClass === 'Sedan';
    if (filter === 'SUVs & MPVs') return v.vClass === 'SUV / MUV';
    if (filter === 'Group Coaches') return v.vClass === 'Luxury Coach';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero_car.png" 
              alt="South India Touring Fleet" 
              fill 
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#0f172a]/85 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-white font-bold">Rental Tariff</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[9px] font-bold uppercase tracking-widest rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" /> SOUTH INDIA'S LEADING FLEET RENTALS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Chauffeur-Driven Fleet <br/>Rental Tariff & Packages
            </h1>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-12 max-w-2xl">
              Transparent and fixed pricing for a safe and effortless journey across South India. No hidden charges. No nasty surprises. 24/7 dedicated travel support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> State Permit Included
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Zero Hidden Extras
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Trained English Drivers
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-[11px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 24/7 Roadside Assist
              </div>
            </div>

          </div>
        </section>

        {/* 2. Rates Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2 flex items-center gap-2">
                <span className="w-4 h-px bg-blue-600 block"></span> FLEET TARIFF GUIDE
              </span>
              <h2 className="text-[2rem] font-bold text-[#0f172a] tracking-tight">Vehicle Rental Rates</h2>
              <p className="text-[13px] text-slate-600 max-w-md mt-2 leading-relaxed">
                Choose the vehicle that best fits your journey. Outstation rates include sanitized vehicle, certified chauffeur, and fuel expenses.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-[#f8fafc] p-1.5 rounded-full shadow-sm border border-slate-200">
              {['All Vehicles', 'Sedans', 'SUVs & MPVs', 'Group Coaches'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-[11px] font-bold transition-all ${
                    filter === f 
                    ? 'bg-[#0f172a] text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#0f172a]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map(v => {
              const override = tariffCardOverrides[v.id] || { title: v.name, subtitle: v.category, badge: 'CITY & HIGHWAY', mostPopular: false };
              
              return (
              <div key={v.id} className="relative mt-4">
                {/* Most Popular Badge (Absolute positioned above card) */}
                {override.mostPopular && (
                  <div className="absolute -top-3 left-6 bg-orange-500 text-white text-[9px] font-bold uppercase px-4 py-1.5 rounded-t-lg z-10 flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3 h-3 fill-white" /> MOST POPULAR OUTSTATION MPV
                  </div>
                )}

                <div className={`bg-white rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all border ${override.mostPopular ? 'border-orange-200' : 'border-slate-200'} flex flex-col h-full relative z-20`}>
                  
                  {/* Card Image */}
                  <div className="relative h-48 rounded-[1rem] overflow-hidden mb-5 bg-slate-100 group">
                    <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    
                    <div className="absolute top-3 left-3 bg-[#0f172a]/80 backdrop-blur shadow-sm text-white text-[9px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 uppercase">
                      {override.badge}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur shadow-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      AC Included
                    </div>
                  </div>

                  {/* Card Titles */}
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xl font-bold text-[#0f172a]">{override.title}</h3>
                    <p className="text-[9px] font-semibold text-slate-500 uppercase">{override.subtitle}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {v.features.slice(0,3).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-[#f4f7fb] rounded-full py-1.5 px-3 text-center">
                        <f.icon className="w-3 h-3 text-slate-500" />
                        <span className="text-[9px] font-bold text-slate-600">{f.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Base Fare block */}
                  <div className="bg-[#f4f7fb] rounded-[1rem] p-4 flex items-center justify-between mb-5">
                    <span className="text-[11px] font-medium text-slate-600">Outstation Base Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[2rem] font-extrabold text-blue-600 leading-none">₹{v.price}</span>
                      <span className="text-[10px] font-semibold text-[#0f172a]">/ km</span>
                    </div>
                  </div>

                  {/* Detailed Pricing Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-[11px] flex-grow">
                    <div>
                      <span className="block text-slate-500 font-medium mb-1">Full Day (8h/80km)</span>
                      <span className="block font-bold text-[#0f172a]">₹{v.localPackage}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 font-medium mb-1">Min. Outstation</span>
                      <span className="block font-bold text-[#0f172a]">{v.minRun} km / day</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 font-medium mb-1">Extra KM</span>
                      <span className="block font-bold text-[#0f172a]">₹{v.price} / km</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 font-medium mb-1">Driver Allowance</span>
                      <span className="block font-bold text-[#0f172a]">₹{v.driverAllowance} / day</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex items-center gap-3">
                    <button onClick={() => setIsModalOpen(true)} className="flex-grow py-3.5 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[12px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
                      <FileText className="w-3.5 h-3.5" /> Enquire Now
                    </button>
                    <a href="tel:+919840012345" className="w-[52px] h-[52px] flex items-center justify-center bg-[#f4f7fb] hover:bg-blue-50 text-blue-600 rounded-xl transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* 3. Additional Charges */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-2">TRANSPARENT BILLING STANDARDS</span>
              <h2 className="text-[2rem] font-bold text-[#0f172a] mb-4 tracking-tight">Additional Charges</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                100% transparent out-of-pocket costs with zero hidden markups. You only pay for authentic travel expenses supported by official receipts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalCharges.map((charge, idx) => (
                <div key={idx} className="bg-white rounded-[1.5rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                    <charge.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-3">{charge.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6 min-h-[72px]">
                    {charge.desc}
                  </p>
                  <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider">
                    {charge.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Important Guidelines */}
        <section className="py-16 bg-[#f8fafc] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[1.5rem] border-l-4 border-l-blue-600 p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">Important Pricing & Seasonal Guidelines</h3>
              <p className="text-[12px] text-slate-600 mb-6 max-w-3xl leading-relaxed">
                Rates may vary depending on destination, travel duration, season and specific trip requirements. Contact us for an exact quotation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Peak Season Rates:</span> Moderate surcharges during Ooty summer festival, Tirupati Brahmotsavam, and Pongal.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Round-Trip Rule:</span> Outstation km calculation begins and terminates at our Guindy / Central Chennai garage.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Multi-Day Packages:</span> Avail bundled flat-discount itineraries for 5+ day temple and hill circuits.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Air-Conditioning Policy:</span> AC operates uninterrupted on highways, but turned off on steep uphill hairpins for engine safety.</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 pt-2">
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#0f172a] hover:bg-slate-800 text-white rounded-xl text-[12px] font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                <FileText className="w-4 h-4" /> Clarify with Specialist
              </a>
            </div>
          </div>
        </section>

        {/* 5. Custom Itinerary CTA */}
        <section className="bg-[#f8fafc] pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111827] text-white rounded-[2rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3">INSTANT CUSTOM ITINERARY</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight leading-tight">Need a Custom Travel Quote?</h2>
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-xl mb-8">
                Tell us about your journey and we'll help you choose the right vehicle with an exact, guaranteed price breakdown in less than 15 minutes.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[10px] font-medium text-slate-300">
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-blue-400" /> Instant Confirmation</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Verified Chauffeurs</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-blue-400" /> 4.9★ Rated Agency</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 mt-4 md:mt-0 relative z-10">
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20">
                <Zap className="w-4 h-4" /> Get a Free Quote
              </a>
              <a href="tel:+919840012345" className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-transparent rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98400 12345
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
