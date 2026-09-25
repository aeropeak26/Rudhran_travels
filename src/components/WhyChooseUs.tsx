'use client';

import React from 'react';
import { ShieldCheck, Sparkles, Clock, Wallet, MapPin, UserCheck, HeartHandshake, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Wallet,
      title: 'Zero Hidden Charges',
      description: 'Transparent per-KM fares with clear breakdown of driver allowances, tolls, and taxes.',
      badge: 'Transparent Billing'
    },
    {
      icon: UserCheck,
      title: 'Verified Chauffeurs',
      description: 'Polite, commercial-licensed drivers with extensive highway knowledge and background verification.',
      badge: 'Safety First'
    },
    {
      icon: Sparkles,
      title: 'Disinfected & Clean Fleet',
      description: 'Sanitized cars thoroughly cleaned before every trip with functioning AC and music systems.',
      badge: 'Hygienic Drive'
    },
    {
      icon: Headphones,
      title: '24x7 Customer Support',
      description: 'Dedicated trip managers available round-the-clock for live tracking and helpline assistance.',
      badge: '24/7 Helpline'
    },
    {
      icon: MapPin,
      title: 'Doorstep Pickup & Drop',
      description: 'Punctual arrival at your home, hotel, railway station, or airport terminal anywhere in South India.',
      badge: 'Punctual Service'
    },
    {
      icon: HeartHandshake,
      title: 'Flexible Cancellation',
      description: 'Change plans easily with free cancellation up to 6 hours before scheduled departure.',
      badge: '100% Refundable'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>WHY CHOOSE AERODRIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Built For Your Complete Peace Of Mind
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            We combine premium vehicles, experienced drivers, and technology to deliver South India's most trusted outstation taxi service.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-4 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-950 text-blue-400 px-3 py-1 rounded-full border border-blue-800/50">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
