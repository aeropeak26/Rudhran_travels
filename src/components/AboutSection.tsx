'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Car, ShieldCheck, Settings, PhoneCall } from 'lucide-react';

export default function AboutSection({ data }: { data?: any }) {
  const defaultFeatures = ["Professional Service", "Experienced Drivers", "Well Maintained Vehicles", "24/7 Support"];
  const features = data?.features?.length === 4 ? data.features : defaultFeatures;

  return (
    <section id="about" className="py-12 md:py-16 bg-white text-slate-900 relative border-b border-slate-100 overflow-hidden poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src={data?.image || "/images/dest1.png"}
                alt="Toyota Innova on Mountain Road"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 right-4 md:right-8 bg-[#0b162c] text-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(11,22,44,0.3)] flex items-center gap-4 z-20 border border-white/10 max-w-[280px]">
              <div className="bg-[#d97706] text-white text-xl font-bold rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                {data?.experienceYears || "10+"}
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Years Experience</h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">Serving Madurai & Tamil Nadu Travelers</p>
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0">
            
            <div className="text-[10px] font-bold text-blue-600 tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 h-px bg-blue-600"></span>
              {data?.subheading || "ABOUT RUDHRAN CAB TRAVELS"}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1] whitespace-pre-line">
              {data?.title || "Your Journey, \nOur Responsibility"}
            </h2>

            <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium">
              {data?.subtitle || "Headquartered in Madurai, Rudhran Cab Travels was founded with a mission to eliminate the stress of unreliable outstation rentals and overpriced tourist services. Rudhran Cab Travels is committed to providing safe, comfortable, and reliable travel experiences from Madurai. From local trips and outstation journeys to customized tour packages, we ensure every customer travels with confidence, convenience, and peace of mind."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 pt-4">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-[#0f172a]">{features[0]}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-[#0f172a]">{features[1]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-[#0f172a]">{features[2]}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-[#0f172a]">{features[3]}</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="tel:+918760380485"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#0b162c] hover:bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider shadow-xl transition-transform hover:scale-[1.02]"
              >
                <span>Speak with Operations Team</span>
                <ArrowRight className="w-4 h-4 text-blue-300" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
