'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      theme: 'dark',
      title: 'Car Rental',
      description: 'Enjoy reliable vehicle rentals for both local travel and long-distance journeys.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      theme: 'blue',
      title: 'Safe & Reliable',
      description: 'Your safety and comfort are our priority.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      theme: 'dark',
      title: 'Secure Transactions',
      description: 'Safe, transparent, and hassle-free buying experience.',
      linkText: 'View Packages →',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      theme: 'blue',
      title: 'Best Driver Services',
      description: 'Travel with skilled drivers committed to your safety and comfort.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      theme: 'dark',
      title: 'Tour Packages',
      description: 'Plan journey your way with flexible travel options tailored to your needs.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      theme: 'blue',
      title: 'Group Transportation',
      description: 'Choose spacious vehicles perfect for families, groups and comfortable tours.',
      linkText: 'Explore Local →',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900">
            Why Travel With Us?
          </h2>

          <p className="text-blue-600 text-sm font-normal max-w-2xl mx-auto">
            Trusted service, comfortable vehicles, experienced drivers, and customer-first support.
          </p>
        </div>

        {/* 6 Cards Grid with photo top half & overlapping text box matching screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const isBlue = card.theme === 'blue';

            return (
              <div
                key={card.id}
                className="relative rounded-[28px] overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group flex flex-col justify-end min-h-[360px]"
              >
                {/* Photo Top Half */}
                <div className="absolute inset-0 h-full w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-40" />
                </div>

                {/* Overlapping Bottom Box matching screenshot 3 */}
                <div className={`relative z-10 p-6 m-3 rounded-2xl shadow-2xl space-y-3 ${
                  isBlue
                    ? 'bg-[#1d5bd8] text-white'
                    : 'bg-[#181818] text-white'
                }`}>
                  <h3 className="text-lg font-normal leading-snug text-white">
                    {card.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-normal ${
                    isBlue ? 'text-blue-100' : 'text-slate-300'
                  }`}>
                    {card.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#"
                      className={`text-xs font-normal flex items-center space-x-1 hover:underline ${
                        isBlue ? 'text-white' : 'text-[#d89b1d]'
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
