'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Award, ShieldCheck, Car, Users, Sparkles } from 'lucide-react';

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
    <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Dual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Scenic Destination */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
                <Image
                  src="/images/dest1.png"
                  alt="Scenic Destination Route"
                  width={400}
                  height={450}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-bold text-amber-400">
                  Rameshwaram Route
                </div>
              </div>

              {/* Image 2: Scenic Mountain Route */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group mt-8 sm:mt-12">
                <Image
                  src="/images/dest2.png"
                  alt="Ooty Hills Route"
                  width={400}
                  height={450}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-bold text-blue-400">
                  Ooty Hill Travels
                </div>
              </div>

            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/95 border-2 border-blue-500 p-5 rounded-3xl shadow-2xl text-center backdrop-blur-xl z-10 w-48">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-white">10+</div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Years of Trust</div>
              <div className="text-[10px] text-slate-400">South India Coverage</div>
            </div>

          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT OUR COMPANY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Seamless Car Rentals & Outstation Trips Designed For Your Comfort
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white">AeroDrive Cabs</strong>, we take pride in offering premium, affordable, and safe car rental services across Tamil Nadu, Kerala, Karnataka, and Pondicherry. Whether you need a quick airport drop, an hourly local cab, or a multi-day family outstation vacation, our well-maintained fleet and professional chauffeurs ensure your journey is relaxing and memorable.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bottom Quick Feature Boxes */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">500+ Cars</div>
                  <div className="text-[10px] text-slate-400">Multiple Options</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Verified Drivers</div>
                  <div className="text-[10px] text-slate-400">Background Checked</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Safety First</div>
                  <div className="text-[10px] text-slate-400">GPS Monitored</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
