'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, Clock, Car, Users, BadgeCheck, Shield, Smile, Award, 
  MapPin, Route, Briefcase, Plane, Users2, Key, Phone, MessageCircle, ArrowRightLeft, Zap, FileCheck
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero Banner */}
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/images/dest2.png" 
            alt="Scenic road" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-xs md:text-sm font-medium tracking-widest text-blue-300 uppercase mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="opacity-50">/</span>
              <span className="text-white">ABOUT US</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Your Journey, Our Commitment
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-3xl mx-auto">
              Reliable transit services designed for exceptional comfort, safety, and convenience across South India and beyond.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>Well-Maintained Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>24/7 Trip Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Your Trusted Travel Partner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero_car.png" 
                  alt="Travel Partner" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Certified Services</div>
                    <div className="text-xs text-slate-500 font-medium">Government Approved Travel Partner</div>
                  </div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="space-y-6">
                <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase">ABOUT US</div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Your Trusted Travel Partner</h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    For over a decade, Rudhran Travels has been a symbol of hospitality, trust, and quality in the travel industry. We are more than just a transportation provider; we are your dedicated travel partners. With an uncompromising focus on passenger safety, comfort, and reliability, we ensure that every journey you take with us is smooth, hassle-free, and memorable.
                  </p>
                  <p>
                    Whether it's a quick outstation trip, a detailed multi-city tour, or a seamless airport transfer, our well-maintained fleet of vehicles and experienced, courteous drivers are always ready to exceed your expectations.
                  </p>
                </div>
                
                <ul className="space-y-4 py-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">Personalized travel solutions tailored to your individual needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">A diverse fleet of vehicles ranging from comfortable sedans to spacious SUVs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">Verified and professional drivers committed to your safety.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
                  >
                    Book A Ride
                  </button>
                  <Link 
                    href="/#packages" 
                    className="px-8 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full font-medium text-sm transition-all hover:border-slate-300"
                  >
                    View Tour Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stats Section */}
        <section className="py-12 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">10+</h3>
                <p className="text-sm font-semibold text-slate-900">Years Experience</p>
                <p className="text-xs text-slate-500 leading-relaxed">Over a decade of providing reliable transportation services across South India.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-2">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">5,000+</h3>
                <p className="text-sm font-semibold text-slate-900">Happy Customers</p>
                <p className="text-xs text-slate-500 leading-relaxed">Consistently delivering smiles through exceptional travel experiences and service.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">100+</h3>
                <p className="text-sm font-semibold text-slate-900">Total Vehicles</p>
                <p className="text-xs text-slate-500 leading-relaxed">A wide range of well-maintained cars, from economy hatchbacks to premium SUVs.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-sm font-semibold text-slate-900">Expert Drivers</p>
                <p className="text-xs text-slate-500 leading-relaxed">Highly trained, verified, and professional chauffeurs dedicated to your safety.</p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Making Every Journey Better */}
        <section className="py-24 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
                OUR PURPOSE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">Making Every Journey Better</h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">A customer-centric approach rooted in hospitality, reliability, and unquestionable safety standards.</p>
            </div>
            
            <div className="bg-[#0b1b3d] rounded-[2rem] p-10 md:p-16 text-center text-white mb-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-500/10 blur-[100px] pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/5 mb-8 relative z-10">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">OUR CORE MISSION</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl mx-auto relative z-10 italic text-slate-100 font-serif">
                “Our mission is to provide safe, comfortable, reliable, and affordable travel experiences while delivering exceptional customer service, transparent billing, and unforgettable memories for every traveler.”
              </h3>
              
              <div className="mt-12 flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">THE RUDHRAN STANDARD</span>
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#2a41d0] text-white rounded-[14px] flex items-center justify-center mb-6 shadow-md shadow-blue-900/20">
                    <Shield className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#0a192f]">Safety First</h4>
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">Zero Tolerance</span>
                  </div>
                  
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    Rigorous 54-point vehicle inspections before every trip, speed-governed driving, round-the-clock emergency dispatch, and verified captains.
                  </p>
                </div>
                
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-blue-600">Verified Protocol</span>
                  <span className="text-[11px] font-bold text-blue-600">24/7 Monitored</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#eb6e00] text-white rounded-[14px] flex items-center justify-center mb-6 shadow-md shadow-orange-900/20">
                    <Smile className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#0a192f]">Guest Delight</h4>
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full border border-amber-100">Premium Care</span>
                  </div>
                  
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    Thoughtful courtesies from illuminated cars and high-speed multi-device charging ports to flexible pause-and-explore pitstop stops without rush.
                  </p>
                </div>
                
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-600">Complimentary Water</span>
                  <span className="text-[11px] font-bold text-amber-600">Fast Charging</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#0c182e] text-white rounded-[14px] flex items-center justify-center mb-6 shadow-md shadow-slate-900/20">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#0a192f] leading-tight">Uncompromising<br />Integrity</h4>
                    <div className="flex flex-col items-center bg-[#f0f4f8] rounded-xl px-3 py-1">
                      <span className="text-[9px] font-bold text-[#0a192f]">100%</span>
                      <span className="text-[10px] font-bold text-[#0a192f]">Honest</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    Upfront per-kilometer billing, automated digital toll logs, transparent FASTag records, and absolutely zero surprise hidden surcharges.
                  </p>
                </div>
                
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-700">Automated GST Invoice</span>
                  <span className="text-[11px] font-bold text-slate-700">Exact Metre</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Everything We Offer */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
                TAILORED MOBILITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">Everything We Offer</h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">Tailored mobility solutions crafted for individuals, families, and enterprise teams across South India.</p>
            </div>
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Local Transportation */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <MapPin className="w-6 h-6 text-blue-600 mb-6" />
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">Local Transportation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Hourly city rides, business commutes, shopping trips, and point-to-point transfers with courteous chauffeurs.</p>
              </div>

              {/* Outstation Trips */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <Zap className="w-6 h-6 text-blue-600 mb-6" />
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">Outstation Trips</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Stress-free round trips and multi-day vacations across South India with seasoned highway and ghat-road drivers.</p>
              </div>

              {/* Airport VIP (Tall Dark Card) */}
              <div className="lg:row-span-2 bg-[#0b1120] p-8 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">ARCHETYPE 04 • DARK LUXE VIP</span>
                    </div>
                    <div className="px-2.5 py-1 bg-amber-500/10 rounded border border-amber-500/20">
                      <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">BLACK TIER</span>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Airport VIP Meet & Greet</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">Punctual terminal curbside receiving with custom iPad name boards, active flight telemetry sync, and luggage trolley handling.</p>

                  <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 mb-8 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        <span className="text-[11px] font-medium text-slate-300">Flight Tracking Engine</span>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-400">Auto-Buffer +60m</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Pickup auto-adjusts if your flight is delayed. Zero wait surcharges.</p>
                  </div>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="relative z-10 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  RESERVE AIRPORT CHAUFFEUR &rarr;
                </button>
              </div>

              {/* Corporate Travel */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <Briefcase className="w-6 h-6 text-blue-600 mb-6" />
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">Corporate Travel</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Executive mobility management, VIP delegation handling, GST compliant invoicing, and dedicated enterprise accounts.</p>
              </div>

              {/* Group & Event Travel */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <Users2 className="w-6 h-6 text-blue-600 mb-6" />
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">Group & Event Travel</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Spacious 12-17 seater luxury Force Urbanias and Tempo Travellers for weddings, pilgrimages, and family reunions.</p>
              </div>

            </div>

            {/* Bottom Full-width Card */}
            <div className="mt-6 bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <ArrowRightLeft className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a192f] mb-1">Chauffeur-Driven Vehicle Rental</h3>
                    <p className="text-sm text-slate-500">Custom daily, weekly, or monthly rentals across executive sedans, Toyota Crystas, Hycross, and luxury SUVs.</p>
                  </div>
                </div>
                <Link href="/#tariff" className="text-sm font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap flex items-center gap-1 shrink-0">
                  Check Vehicle Tariff &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Why Customers Choose Us */}
        <WhyChooseUs />

        {/* 7. CTA Banner */}
        <CtaBanner onOpenBookingModal={() => setIsModalOpen(true)} />

      </main>

      <Footer />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedItem={null} 
      />
    </div>
  );
}
