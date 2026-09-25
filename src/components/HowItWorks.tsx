'use client';

import React from 'react';
import Image from 'next/image';
import { Car, Calendar, Smile, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Vehicle',
      description: 'Select Hatchback, Sedan, SUV, or Luxury car.',
      image: '/images/hero_car.png',
      badge: 'Step 1'
    },
    {
      number: '2',
      title: 'Pick Location & Date',
      description: 'Set your pickup city, trip dates & return schedule.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      badge: 'Step 2'
    },
    {
      number: '3',
      title: 'Book & Enjoy Drive',
      description: 'Instant driver details & doorstep car arrival.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
      badge: 'Step 3'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-900/30 via-slate-900 to-slate-950 text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Rent A Car In 3 Easy Steps
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Simple 3-step booking process with instant driver assignment and zero advance payment options.
          </p>
        </div>

        {/* 3 Cars Visual Flow Row matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 text-center space-y-4 shadow-2xl relative group hover:border-blue-500/60 transition-all duration-300">
                
                {/* Step Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-extrabold mb-1">
                  {step.badge}
                </div>

                {/* Car Render Image */}
                <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-slate-900/60 p-2 flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center justify-center space-x-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Instant Verification</span>
                </div>

              </div>
            </React.Fragment>
          ))}

        </div>

      </div>
    </section>
  );
}
