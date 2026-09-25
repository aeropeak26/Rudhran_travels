'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

const TESTIMONIAL_LIST: TestimonialItem[] = [
  {
    id: '1',
    name: 'Marcus Vane',
    role: 'Sovereign Holdings Chief',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: '"Aurelia manages our global executive transport flawlessly. Their team understands scheduling and the deep necessity for silence and privacy on transition routes."'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Luxury Lifestyle Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: '"The personalized Monaco coastal itinerary they curated for our family was exquisite. The chauffeur was highly knowledgeable, and our SUV was immaculate."'
  },
  {
    id: '3',
    name: 'Karthik Subramanian',
    role: 'Corporate Travel Lead',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: '"Booked an Innova Crysta for a family trip to Rameshwaram & Madurai. The vehicle was spotless, and the driver was extremely polite and punctual throughout."'
  },
  {
    id: '4',
    name: 'Priya Rajan',
    role: 'Software Architect',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: '"Best outstation rental experience! Transparent billing with zero hidden charges. Will definitely use AeroDrive for all our hill station getaways."'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_LIST.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_LIST.length) % TESTIMONIAL_LIST.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 relative poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Navy Card — taller with generous padding */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0b1b42] text-white px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-28 overflow-hidden shadow-2xl min-h-[480px] sm:min-h-[520px] lg:min-h-[600px] flex items-center">
          
          {/* Faint "Happy Customers" Watermark — centered horizontally on top half */}
          <div className="absolute top-12 left-1/2 -translate-x-[30%] pointer-events-none select-none z-0">
            <span className="text-[80px] sm:text-[100px] lg:text-[130px] font-semibold text-white/[0.04] tracking-tight whitespace-nowrap">
              Happy Customers
            </span>
          </div>

          {/* Subtle gradient glow behind cards area */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-500/[0.03] to-transparent pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
            
            {/* ──── Left Content Column ──── */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              
              <div className="space-y-5">
                {/* Orange Label */}
                <div className="text-[11px] font-normal tracking-[0.2em] text-orange-500 uppercase">
                  TESTIMONIAL
                </div>

                {/* Big Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-white leading-[1.15] tracking-tight">
                  Client<br />Testimonials
                </h2>

                {/* Subtitle */}
                <p className="text-slate-300 text-[13px] sm:text-sm font-normal max-w-[260px] leading-relaxed">
                  Real experiences from travelers who chose us for their journeys.
                </p>
              </div>

              {/* Navigation Arrows — aligned center-right relative to text block, pushed down */}
              <div className="flex items-center space-x-3 pt-16 sm:pt-24 justify-center max-w-[260px]">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-[#9ba3b5] hover:bg-[#858da0] text-[#0b1b42] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-[#9ba3b5] hover:bg-[#858da0] text-[#0b1b42] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ──── Right Animated Cards Carousel ──── */}
            <div className="lg:col-span-8 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: `translateX(-${currentIndex * (320 + 24)}px)` }}
              >
                {TESTIMONIAL_LIST.map((item, idx) => (
                  <div
                    key={item.id}
                    className="w-[300px] sm:w-[320px] flex-shrink-0 bg-[#faf8f4] text-slate-900 rounded-[20px] p-7 sm:p-8 shadow-xl flex flex-col justify-between min-h-[280px] sm:min-h-[300px] border border-amber-100/40 transition-opacity duration-500"
                    style={{ opacity: idx >= currentIndex && idx < currentIndex + 2 ? 1 : 0.4 }}
                  >
                    {/* Top: Stars + Quote */}
                    <div className="space-y-4 flex-1">
                      {/* Gold Rating Stars */}
                      <div className="flex items-center space-x-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-700 text-[13px] sm:text-sm font-serif leading-relaxed">
                        {item.comment}
                      </p>
                    </div>

                    {/* Bottom: Avatar + Author */}
                    <div className="flex items-center space-x-3 pt-5 mt-4 border-t border-slate-200/50">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="text-[13px] font-normal text-slate-900 leading-snug">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-normal text-slate-400">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

