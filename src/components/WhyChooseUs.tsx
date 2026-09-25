'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      theme: 'dark',
      title: 'Car Rental',
      description: 'Enjoy reliable vehicle rentals for both local travel and long-distance journeys.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      theme: 'blue',
      title: 'Safe & Reliable',
      description: 'Your safety and comfort are our priority.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      theme: 'dark',
      title: 'Secure Transactions',
      description: 'Safe, transparent, and hassle-free buying experience.',
      linkText: 'View Packages →',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      theme: 'blue',
      title: 'Best Driver Services',
      description: 'Travel with skilled drivers committed to your safety and comfort.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      theme: 'dark',
      title: 'Tour Packages',
      description: 'Plan journey your way with flexible travel options tailored to your needs.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      theme: 'blue',
      title: 'Group Transportation',
      description: 'Choose spacious vehicles perfect for families, groups and comfortable tours.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Why Travel With Us?
          </h2>

          <p className="text-blue-600 text-sm font-bold max-w-2xl mx-auto">
            Trusted service, comfortable vehicles, experienced drivers, and customer-first support.
          </p>
        </div>

        {/* 6 Cards Grid with top photo section & alternating Black / Blue cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isBlue = card.theme === 'blue';

            return (
              <div
                key={card.id}
                className={`rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between border ${
                  isBlue
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-[#121212] text-white border-slate-800'
                }`}
              >
                {/* Image Top Half */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2 space-y-3">
                  <h3 className="text-xl font-bold leading-snug">
                    {card.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-normal ${
                    isBlue ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {card.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#"
                      className={`text-xs font-bold flex items-center space-x-1 hover:underline ${
                        isBlue ? 'text-amber-300' : 'text-amber-400'
                      }`}
                    >
                      <span>{card.linkText}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
