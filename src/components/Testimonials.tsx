'use client';

import React, { useState, useEffect } from 'react';
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
    comment: '"Booked an Innova Crysta for a family trip to Rameshwaram & Madurai. The vehicle was spotless, and the driver was extremely polite and punctual."'
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_LIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_LIST.length) % TESTIMONIAL_LIST.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white text-slate-900 relative poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Navy Card Container matching screenshot */}
        <div className="relative rounded-[32px] bg-[#071d49] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          
          {/* Faint Background Watermark Text matching screenshot */}
          <div className="absolute right-6 top-6 text-6xl sm:text-8xl font-normal text-slate-400/10 pointer-events-none select-none tracking-tight whitespace-nowrap">
            Happy Customers
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-[11px] font-normal tracking-widest text-orange-500 uppercase">
                TESTIMONIAL
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Client <br /> Testimonials
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-xs leading-relaxed pt-2">
                Real experiences from travelers who chose us for their journeys.
              </p>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center space-x-3 pt-6">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full bg-slate-300/60 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-slate-300/60 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Animated Cards Carousel */}
            <div className="lg:col-span-8 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (320 + 24)}px)` }}
              >
                {TESTIMONIAL_LIST.map((item) => (
                  <div
                    key={item.id}
                    className="w-[300px] sm:w-[340px] flex-shrink-0 bg-[#faf8f5] text-slate-900 rounded-[24px] p-6 sm:p-7 shadow-xl space-y-4 flex flex-col justify-between border border-amber-100/50"
                  >
                    <div className="space-y-3">
                      {/* Rating Stars */}
                      <div className="flex items-center space-x-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-800 text-xs sm:text-sm font-normal italic leading-relaxed">
                        {item.comment}
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-slate-200/60">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="text-xs sm:text-sm font-normal text-slate-900">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-normal text-slate-500">
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
