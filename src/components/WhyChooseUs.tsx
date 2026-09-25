'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, ArrowRight, Wallet, UserCheck, Sparkles, Headphones, MapPin, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      theme: 'dark', // Black card
      title: 'Verified Commercial Drivers',
      description: 'Polite, experienced, and background-verified chauffeurs trained in highway driving and route optimization.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      icon: UserCheck,
    },
    {
      id: 2,
      theme: 'blue', // Electric Blue card
      title: 'Zero Hidden Charges Guarantee',
      description: 'Transparent per-KM billing with upfront driver night allowance, toll estimate, and GST invoices.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      icon: Wallet,
    },
    {
      id: 3,
      theme: 'dark', // Black card
      title: 'Sanitized & Premium Vehicles',
      description: 'Regularly serviced AC fleet equipped with GPS tracking, emergency SOS, and pristine clean interiors.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      icon: Sparkles,
    },
    {
      id: 4,
      theme: 'blue', // Electric Blue card
      title: '24x7 Real-Time Customer Care',
      description: 'Dedicated trip coordinators monitoring your journey live with 24/7 breakdown helpline assistance.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      icon: Headphones,
    },
    {
      id: 5,
      theme: 'dark', // Black card
      title: 'Doorstep Pickup & Punctual Drop',
      description: 'On-time pickup from your doorstep, hotel lobby, or airport terminal across all South India cities.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      icon: MapPin,
    },
    {
      id: 6,
      theme: 'blue', // Electric Blue card
      title: 'Flexible Booking & Easy Cancellation',
      description: 'Zero penalty cancellation up to 6 hours before departure time with instant refund back to your account.',
      rating: 5,
      driverImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>OUR EXCELLENCE & PROMISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Why Travelers Choose AeroDrive
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            We deliver complete safety, comfort, and uncompromised quality on every single journey.
          </p>
        </div>

        {/* 6 Grid Cards with Alternating Black & Vibrant Blue Styling matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isBlue = card.theme === 'blue';
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`rounded-3xl p-7 space-y-5 shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between border ${
                  isBlue
                    ? 'bg-blue-600 text-white border-blue-500 shadow-blue-600/20'
                    : 'bg-slate-900/90 text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Row: Driver Avatar + Rating */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow">
                        <Image
                          src={card.driverImg}
                          alt="Driver Chauffeur"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-slate-950/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-300" />
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold leading-snug">
                    {card.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isBlue ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {card.description}
                  </p>

                </div>

                {/* Bottom Read More Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-[11px] font-bold ${
                    isBlue ? 'text-amber-300' : 'text-blue-400'
                  }`}>
                    VERIFIED GUARANTEE
                  </span>

                  <button className={`text-xs font-bold flex items-center space-x-1 transition-transform hover:translate-x-1 ${
                    isBlue ? 'text-white' : 'text-amber-400'
                  }`}>
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
