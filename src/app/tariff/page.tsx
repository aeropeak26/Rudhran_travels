'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { vehiclesData } from '@/data/vehicles';
import { 
  CheckCircle2, ChevronRight, User, Shield, Thermometer, Briefcase, 
  MapPin, Clock, Phone, Mail, Zap, PlaySquare, FileText, Check, Car, Calendar, Navigation, ShieldCheck, Moon, Info, AlertCircle, Sparkles, Star, Snowflake, Cloud, MessageCircle
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const additionalCharges = [
  {
    icon: Info,
    title: 'Toll Gate & FASTag',
    desc: 'Billed directly as per actual NHAI digital FASTag statement receipts. No estimated toll lump sums or markups.',
    tag: 'At Actuals via FASTag'
  },
  {
    icon: ShieldCheck,
    title: 'Interstate & Parking Tax',
    desc: 'State border permits (Kerala, Karnataka, AP, Pondicherry) and temple parking slips paid directly at government checkpoints.',
    tag: 'State Government Receipts'
  },
  {
    icon: Moon,
    title: 'Night Driving Charges',
    desc: 'Applicable strictly when vehicle is in active driving transit between 10:00 PM and 6:00 AM for chauffeur alertness safety.',
    tag: '₹300 per night journey'
  },
  {
    icon: Cloud,
    title: 'Hill Station Entry / Cess',
    desc: 'Green cess & entry fees prescribed by local collectorate councils (e.g. Ooty, Kodaikanal, Munnar, Yercaud).',
    tag: 'Per District Tariff'
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

  const vehicleOrder = ['2', '3', '4', '1', '6', '5'];

  const filteredVehicles = vehiclesData.filter(v => {
    if (filter === 'All Vehicles') return true;
    if (filter === 'Sedans') return v.vClass === 'Sedan';
    if (filter === 'SUVs & MPVs') return v.vClass === 'SUV / MUV';
    if (filter === 'Group Coaches') return v.vClass === 'Luxury Coach';
    return true;
  }).sort((a, b) => {
    return vehicleOrder.indexOf(a.id) - vehicleOrder.indexOf(b.id);
  });

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-[#0A162C]">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-orange-500">Rental Tariff</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#182a47] text-blue-200 text-[9px] font-bold uppercase tracking-widest rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div> TRANSPARENT & HONEST PRICING
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Chauffeur-Driven Fleet <br/>Rental Tariff & Packages
            </h1>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-12 max-w-2xl">
              Transparent and flexible vehicle rental pricing for every journey across South India. No surprises, no hidden levies—just pure travel precision.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-[#1c2a44] hover:bg-[#233554] transition-colors px-5 py-3 rounded-xl text-slate-200 text-[11px] font-medium shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Zero Hidden Costs
              </div>
              <div className="flex items-center gap-2 bg-[#1c2a44] hover:bg-[#233554] transition-colors px-5 py-3 rounded-xl text-slate-200 text-[11px] font-medium shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Upfront Driver Batta
              </div>
              <div className="flex items-center gap-2 bg-[#1c2a44] hover:bg-[#233554] transition-colors px-5 py-3 rounded-xl text-slate-200 text-[11px] font-medium shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Digital FASTag Slips
              </div>
              <div className="flex items-center gap-2 bg-[#1c2a44] hover:bg-[#233554] transition-colors px-5 py-3 rounded-xl text-slate-200 text-[11px] font-medium shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> GST Invoicing Ready
              </div>
            </div>

          </div>
        </section>

        {/* 2. Rates Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ffedd5] text-yellow-700 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> FLEET TARIFF GUIDE
              </div>
              <h2 className="text-[2rem] font-bold text-[#0f172a] tracking-tight">Vehicle Rental Rates</h2>
              <p className="text-[13px] text-slate-600 max-w-md mt-2 leading-relaxed">
                Choose the vehicle that best fits your journey. Outstation rates include sanitized vehicle, certified chauffeur, and fuel expenses.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 bg-[#e2e8f0]/60 p-1.5 rounded-full border border-slate-200">
              {['All Vehicles', 'Sedans', 'SUVs & MPVs', 'Group Coaches'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-[12px] font-medium transition-all ${
                    filter === f 
                    ? 'bg-[#0f172a] text-white shadow-sm font-semibold' 
                    : 'text-slate-600 hover:bg-white hover:text-[#0f172a]'
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff6624] text-white text-[10px] font-bold uppercase px-5 py-1.5 rounded-full z-30 flex items-center gap-1.5 shadow-md whitespace-nowrap border-2 border-white">
                    <Star className="w-3.5 h-3.5" /> <Star className="w-3.5 h-3.5 fill-white" /> MOST POPULAR OUTSTATION MPV
                  </div>
                )}

                <div className={`bg-white rounded-[1.5rem] p-5 shadow-sm hover:shadow-xl transition-all border ${override.mostPopular ? 'border-2 border-[#0052cc]' : 'border-slate-200'} flex flex-col h-full relative z-20`}>
                  
                  {/* Card Image */}
                  <div className="relative h-48 rounded-[1rem] overflow-hidden mb-5 bg-slate-100 group">
                    <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    
                    <div className={`absolute top-3 left-3 shadow-sm text-white text-[9px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 uppercase ${override.mostPopular ? 'bg-[#107c58]' : 'bg-[#1e293b]'}`}>
                      {override.badge}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white shadow-sm text-[#0f172a] text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-slate-100">
                      <Snowflake className="w-3 h-3 text-blue-500" /> AC Included
                    </div>
                  </div>

                  {/* Card Titles */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1">TRANSPARENT RATES</span>
                      <h3 className="text-[17px] font-bold text-[#0f172a] leading-tight">{override.title}</h3>
                    </div>
                    <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-[8px] font-bold shrink-0">
                      Driver Batta Included
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[28px] font-extrabold text-blue-600 tracking-tight leading-none">₹{v.price}</span>
                        <span className="text-[10px] font-bold text-slate-600">/ KM (Outstation Base)</span>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1.5 block leading-relaxed">Calculated garage-to-garage transparent meter</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-[9px] text-slate-400 font-medium">City Package</span>
                      <span className="block text-[15px] font-bold text-[#0f172a] mt-0.5">₹{v.localPackage}</span>
                      <span className="block text-[8px] text-slate-400 mt-0.5">8 Hrs / 80 KMs</span>
                    </div>
                  </div>

                  {/* Detailed List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-600 shrink-0"></div> Outstation Min. Daily Run
                      </div>
                      <span className="font-bold text-[#0f172a] text-right">{v.minRun} km / calendar day</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-600 shrink-0"></div> Driver Allowance (Day Trip)
                      </div>
                      <span className="font-bold text-emerald-600 text-right">₹{v.driverAllowance} / day (Included in O/S)</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-600 shrink-0"></div> Night Halt Batta (After 10:00 PM)
                      </div>
                      <span className="font-bold text-[#0f172a] text-right">₹300 / night</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-blue-600 shrink-0"></div> Toll, State Tax & Parking
                      </div>
                      <span className="font-bold text-blue-600 text-right">At Actuals via FASTag</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-2">
                    <button onClick={() => setIsModalOpen(true)} className="w-full py-3 bg-[#f97316] hover:bg-orange-600 text-white rounded-lg text-[12px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
                      Book This Vehicle Now <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-white border border-blue-200 hover:bg-blue-50 rounded-lg text-[10px] font-bold text-blue-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-blue-900/5">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Quote
                      </a>
                      <button onClick={() => setIsModalOpen(true)} className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-[10px] font-bold text-slate-700 transition-colors flex items-center justify-center gap-1.5">
                        <span>🧮</span> Fare Calculator
                      </button>
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className="mt-5 flex items-center justify-between text-[9px] text-slate-400 font-medium px-1">
                    <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Zero Hidden Fees</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24/7 Dispatch Desk</div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* 3. Additional Charges */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-[#ffedd5] text-yellow-700 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> TRANSPARENT BILLING STANDARDS
              </div>
              <h2 className="text-[2rem] font-bold text-[#0f172a] mb-4 tracking-tight">Additional Charges & Terms</h2>
              <p className="text-[13px] text-slate-500 leading-relaxed max-w-2xl">
                100% transparent out-of-pocket costs with zero hidden markups. You only pay for authentic travel expenses supported by official receipts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalCharges.map((charge, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                    <charge.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">{charge.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-6 flex-grow">
                    {charge.desc}
                  </p>
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-[10px] font-bold text-blue-600">
                      {charge.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 5. Custom Itinerary CTA */}
        <section className="bg-[#f8fafc] pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B172A] text-white rounded-[1.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            
            {/* Background Glowing Spheres */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none z-0"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[90px] pointer-events-none z-0"></div>

            <div className="max-w-xl text-center md:text-left relative z-10">
              <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-3">INSTANT CUSTOM ITINERARY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">Need a Custom Travel Quote?</h2>
              <p className="text-[13px] text-slate-300 leading-relaxed mb-8">
                Tell us about your journey and we'll help you choose the right vehicle with an exact, guaranteed price breakdown in less than 15 minutes.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-[10px] font-medium text-slate-300">
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-orange-500" /> Instant Confirmation</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-500" /> Verified Chauffeurs</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-orange-500" /> 4.9★ Rated Agency</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 mt-6 md:mt-0 relative z-10">
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-[#E87B1E] hover:bg-orange-600 text-white rounded-xl text-[12px] font-bold transition-colors flex items-center gap-2 shadow-lg shadow-orange-900/20">
                <Navigation className="w-4 h-4 rotate-90" /> Get a Free Quote
              </a>
              <a href="tel:+919840012345" className="px-6 py-3.5 bg-[#1d3b3a] hover:bg-[#234c4a] text-emerald-400 rounded-xl text-[12px] font-bold transition-colors flex items-center gap-2">
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
