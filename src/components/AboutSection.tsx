'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Award, ShieldCheck, Car, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const features = [
    'Verified, trained, and polite commercial chauffeurs',
    'Transparent per-KM & day fares with zero hidden charges',
    'Clean, disinfected, and modern AC fleet of cars',
    '24/7 real-time GPS tracking & customer emergency support',
    'Flexible booking with door-step pickup and drop',
    'Instant GST invoicing for corporate and personal travels'
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Dual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Scenic Destination */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                <Image
                  src="/images/dest1.png"
                  alt="Scenic Destination Route"
                  width={400}
                  height={450}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black text-blue-900 shadow">
                  Rameshwaram Route
                </div>
              </div>

              {/* Image 2: Scenic Mountain Route */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group mt-8 sm:mt-12">
                <Image
                  src="/images/dest2.png"
                  alt="Ooty Hills Route"
                  width={400}
                  height={450}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-black text-orange-600 shadow">
                  Ooty Hill Travels
                </div>
              </div>

            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-600 p-5 rounded-3xl shadow-2xl text-center z-10 w-48">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-2">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-blue-950">10+</div>
              <div className="text-xs font-extrabold text-orange-500 uppercase tracking-wider">Years of Trust</div>
              <div className="text-[10px] text-slate-500 font-semibold">South India Coverage</div>
            </div>

          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>ABOUT OUR COMPANY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Seamless Car Rentals & Outstation Trips Designed For Every Journey
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900 font-extrabold">AeroDrive Cabs</strong>, we offer premium, affordable, and safe car rental services across Tamil Nadu, Kerala, Karnataka, and Pondicherry. Whether you need an outstation vacation taxi, an hourly local rental, or an airport drop, our verified chauffeurs ensure your travel is relaxing and memorable.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="pt-2">
              <button className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center space-x-2 shadow-lg shadow-blue-600/20 transition-all hover:scale-105">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
