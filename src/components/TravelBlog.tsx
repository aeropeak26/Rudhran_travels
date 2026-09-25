'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight, BookOpen, Clock } from 'lucide-react';

export default function TravelBlog() {
  const articles = [
    {
      id: 'blog-1',
      title: 'Top 10 Scenic Road Trip Routes in South India',
      image: '/images/dest1.png',
      date: 'Sep 20, 2026',
      readTime: '5 min read',
      excerpt: 'Discover breathtaking coastal highways, mountain hairpin bends, and heritage temple stops from Chennai to Rameshwaram.',
    },
    {
      id: 'blog-2',
      title: 'Essential Safety Tips for Outstation Driving & Night Travel',
      image: '/images/hero_car.png',
      date: 'Sep 18, 2026',
      readTime: '4 min read',
      excerpt: 'Why choosing verified commercial chauffeurs ensures zero stress, GPS safety, and hassle-free highway toll collection.',
    },
    {
      id: 'blog-3',
      title: 'Ooty vs Kodaikanal: Which Hill Station Should You Visit?',
      image: '/images/dest2.png',
      date: 'Sep 15, 2026',
      readTime: '6 min read',
      excerpt: 'A comprehensive travel comparison covering weather, boat lakes, tea gardens, and best car rental options for families.',
    },
    {
      id: 'blog-4',
      title: 'Choosing Between Self-Drive and Chauffeur-Driven Cars',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      date: 'Sep 12, 2026',
      readTime: '4 min read',
      excerpt: 'Understand driver night allowances, fuel policies, state permit taxes, and how to select the right car for your trip.',
    },
  ];

  return (
    <section className="py-20 bg-slate-100 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>TRAVEL GUIDES & NEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Outstation Travel Tips & Route Guides
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Read expert road trip advice, holiday itineraries, and car rental tips to plan your perfect vacation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-1 text-[11px] text-slate-500 font-medium">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                <a
                  href="#"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
            View All Travel Articles
          </button>
        </div>

      </div>
    </section>
  );
}
