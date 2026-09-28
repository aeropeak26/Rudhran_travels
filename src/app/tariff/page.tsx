'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { vehiclesData } from '@/data/vehicles';
import { 
  CheckCircle2, ChevronRight, User, Shield, Thermometer, Briefcase, 
  MapPin, Clock, Phone, Mail, Zap, PlaySquare, FileText, Check, Car, Calendar, Navigation, ShieldCheck, Moon, Info, AlertCircle
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const additionalCharges = [
  {
    icon: MapPin,
    title: 'Toll Charges',
    desc: 'Expected to be paid by the guest directly at toll booths or via our FASTag account which will be tallied and settled at the end of the trip.',
    tag: 'Actuals - Settled at end of trip'
  },
  {
    icon: Car,
    title: 'Parking Charges',
    desc: 'Airport parking, sightseeing spots, and hotel parking (if your hotel doesn\'t offer free driver parking) are to be paid by the guest directly.',
    tag: 'Actuals - Paid by guest'
  },
  {
    icon: ShieldCheck,
    title: 'Driver Allowance',
    desc: 'Daily bata covers the driver\'s food and daily expenses. This is applicable per calendar day (midnight to midnight) regardless of vehicle usage.',
    tag: 'Included in Local City Packages'
  },
  {
    icon: FileText,
    title: 'Interstate Permits',
    desc: 'When travelling across state borders (e.g., from Tamil Nadu to Kerala or Karnataka), a temporary state permit tax is applicable. We assist in procuring this.',
    tag: 'Actuals - Varies by State & Vehicle'
  },
  {
    icon: Navigation,
    title: 'Additional Kilometres',
    desc: 'If your total travel distance exceeds the daily minimum limit (e.g., 250 km/day for 4 days = 1000 km total), extra kilometres are billed at standard tariff rates.',
    tag: 'Billed post cumulative calculation'
  },
  {
    icon: Moon,
    title: 'Night Halt Batta',
    desc: 'An extra charge applied if the driver is required to drive or stay on duty between 10:00 PM and 6:00 AM. This ensures driver rest and safety.',
    tag: 'Applicable ONLY after 10:00 PM'
  }
];

export default function TariffPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Vehicles');

  const filteredVehicles = vehiclesData.filter(v => {
    if (filter === 'All Vehicles') return true;
    if (filter === 'Sedans') return v.vClass === 'Sedan';
    if (filter === 'SUVs & MUVs') return v.vClass === 'SUV / MUV';
    if (filter === 'Vans & Coaches') return v.vClass === 'Luxury Coach';
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
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">ALL-INCLUSIVE CHENNAI RATES</span>
              <h2 className="text-[2rem] font-bold text-[#0f172a] tracking-tight">Vehicle Rental Rates</h2>
              <p className="text-[13px] text-slate-500 max-w-md mt-2">
                Choose from our extensive fleet of luxury sedans, comfortable MUVs, and spacious group coaches tailored for daily and multi-day outstation circuits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-full shadow-sm border border-slate-200">
              {['All Vehicles', 'Sedans', 'SUVs & MUVs', 'Vans & Coaches'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all ${
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
            {filteredVehicles.map(v => (
              <div key={v.id} className="bg-white rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col">
                <div className="relative h-44 rounded-[1rem] overflow-hidden mb-5 bg-slate-100 group">
                  <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur shadow-sm text-blue-700 text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Navigation className="w-3 h-3" /> City & Outstation
                  </div>
                  {v.id === '1' && (
                    <div className="absolute top-3 left-3 bg-[#0f172a] text-amber-400 text-[8px] font-bold uppercase px-2 py-1 rounded-md shadow-sm">
                      Most Popular
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{v.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium mb-4">{v.category}</p>

                <div className="flex items-center gap-2 mb-6">
                  {v.features.slice(0,3).map((f, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-xl py-2 px-1 text-center">
                      <f.icon className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-[9px] font-bold text-slate-700">{f.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f4f7fb] rounded-xl p-4 flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-slate-600">Outstation Base Fare</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-blue-600">₹{v.price}</span>
                    <span className="text-[10px] font-semibold text-slate-500">/ km</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6 text-[10px]">
                  <div>
                    <span className="block text-slate-400 font-medium mb-0.5">Min. Outstation Run</span>
                    <span className="block font-bold text-[#0f172a]">{v.minRun} km / day</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium mb-0.5">Local City Package</span>
                    <span className="block font-bold text-[#0f172a]">₹{v.localPackage} / 8 Hrs</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium mb-0.5">Night Batta</span>
                    <span className="block font-bold text-[#0f172a]">₹{v.nightBatta} / day</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium mb-0.5">Driver Allowance</span>
                    <span className="block font-bold text-[#0f172a]">₹{v.driverAllowance} / day</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <button onClick={() => setIsModalOpen(true)} className="flex-grow py-3 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[12px] font-bold transition-colors text-center shadow-md shadow-blue-600/20">
                    Enquire Now
                  </button>
                  <a href="tel:+919840012345" className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors shrink-0 border border-blue-100">
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Additional Charges */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">TRANSPARENT EXTRAS TO EXPECT</span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">Additional Charges</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                What you need to know about extra costs. We maintain strict transparent pricing to help you plan your exact journey budget without any unpleasant surprises on the final day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalCharges.map((charge, idx) => (
                <div key={idx} className="bg-white rounded-[1.5rem] p-8 shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <charge.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-3">{charge.title}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-6 flex-grow min-h-[72px]">
                    {charge.desc}
                  </p>
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {charge.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Important Guidelines */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-[2rem] border border-amber-200 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 shadow-sm relative z-10">
              <Info className="w-6 h-6" />
            </div>
            
            <div className="flex-grow relative z-10">
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Important Pricing & Seasonal Guidelines</h3>
              <p className="text-[13px] text-slate-700 mb-6 max-w-3xl leading-relaxed">
                Tariffs may vary slightly during peak vacation seasons, long weekends, and extreme hill-station demands. To ensure your trip goes smoothly without unexpected price hikes, please note the following policies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[12px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Peak Season Rates:</span> May increase by 10-15% during summer holidays (April-May) and Diwali/Pongal rushes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[12px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Round-Trip Basis:</span> Outstation rentals are calculated from garage-to-garage (Chennai). One-way drops will be billed for the return journey distance as well.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[12px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Hill Station Charges:</span> Hill driving puts severe strain on vehicles; an extra daily hill charge of ₹300-₹500 applies for Ooty/Kodaikanal/Munnar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[12px] text-slate-600 leading-relaxed"><span className="font-bold text-[#0f172a]">Strict No-Smoking Policy:</span> All vehicles maintain a strict no-smoking rule in the cabin. A deep-cleaning penalty will apply if violated.</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 pt-2 relative z-10">
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#0f172a] hover:bg-slate-800 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                <FileText className="w-4 h-4" /> Chat with Director
              </a>
            </div>
          </div>
        </section>

        {/* 5. Custom Itinerary CTA */}
        <section className="bg-[#0f172a] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3">INSTANT CUSTOM TARIFFS</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight leading-tight">Need a Custom Travel Quote?</h2>
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-xl">
                Tell us about your journey and we'll help you choose the right vehicle with an exact, guaranteed price breakdown in maximum 15 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 mt-4 md:mt-0">
              <a href="tel:+919840012345" className="px-6 py-3.5 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20">
                <Phone className="w-4 h-4" /> +91 98400 12345
              </a>
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" /> WhatsApp Quote
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
