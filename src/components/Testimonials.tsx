"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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
    id: "1",
    name: "Marcus Vane",
    role: "Sovereign Holdings Chief",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      '"Aurelia manages our global executive transport flawlessly. Their team understands scheduling and the deep necessity for silence and privacy on transition routes."',
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Luxury Lifestyle Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      '"The personalized Monaco coastal itinerary they curated for our family was exquisite. The chauffeur was highly knowledgeable, and our SUV was immaculate."',
  },
  {
    id: "3",
    name: "Karthik Subramanian",
    role: "Corporate Travel Lead",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      '"Booked an Innova Crysta for a family trip to Rameshwaram & Madurai. The vehicle was spotless, and the driver was extremely polite and punctual throughout."',
  },
  {
    id: "4",
    name: "Priya Rajan",
    role: "Software Architect",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      '"Best outstation rental experience! Transparent billing with zero hidden charges. Will definitely use AeroDrive for all our hill station getaways."',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Extend the list for seamless looping: [Last, 1, 2, 3, 4, First, Second]
  // We add 'Second' to ensure the right edge is covered during the jump.
  const extendedList = [
    TESTIMONIAL_LIST[TESTIMONIAL_LIST.length - 1],
    ...TESTIMONIAL_LIST,
    TESTIMONIAL_LIST[0],
    TESTIMONIAL_LIST[1],
  ];

  const handleNext = useCallback(() => {
    if (currentIndex >= extendedList.length - 2) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, extendedList.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedList.length - 2) {
      setIsTransitioning(false);
      setCurrentIndex(1); // Jump back to the first real item seamlessly
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedList.length - 3); // Jump back to the last real item
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative poppins-regular overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Dark Navy Card — taller with generous padding */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0b1b42] text-white px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-28 overflow-hidden shadow-2xl min-h-[400px] lg:min-h-[500px] flex items-center">
          {/* Faint "Happy Customers" Watermark */}
          <div className="absolute top-8 left-16 sm:left-32 pointer-events-none select-none z-0">
            <span className="text-[80px] sm:text-[120px] lg:text-[150px] font-bold text-white/[0.04] tracking-tight whitespace-nowrap">
              Happy Customers
            </span>
          </div>

          {/* Subtle gradient glow behind cards area */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-500/[0.03] to-transparent pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* ──── Left Content Column ──── */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Orange Label */}
                  <div className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase">
                    TESTIMONIAL
                  </div>

                  {/* Big Heading */}
                  <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-bold text-white leading-tight tracking-tight">
                    Client
                    <br />
                    Testimonials
                  </h2>

                  {/* Subtitle */}
                  <p className="text-slate-300 text-[13px] sm:text-sm font-medium max-w-[280px] leading-relaxed pt-2">
                    Real experiences from travelers who chose us for their journeys.
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center space-x-4 pt-12 sm:pt-20 ml-12 sm:ml-20">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[#9ba3b5] hover:bg-[#858da0] text-[#0b1b42] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90"
                    aria-label="Previous Testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#9ba3b5] hover:bg-[#858da0] text-[#0b1b42] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90"
                    aria-label="Next Testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ──── Right Animated Cards Carousel ──── */}
              <div className="lg:col-span-8 overflow-hidden">
                <div
                  className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]" : ""}`}
                  style={{
                    transform: `translateX(-${currentIndex * (340 + 24)}px)`,
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {extendedList.map((item, idx) => {
                    const isVisuallyActive = idx >= currentIndex && idx < currentIndex + 2;

                    return (
                      <div
                        key={`${item.id}-${idx}`}
                        className="w-[300px] sm:w-[340px] flex-shrink-0 bg-[#faf8f4] text-slate-900 rounded-[20px] p-8 shadow-xl flex flex-col justify-between min-h-[400px] sm:min-h-[320px] transition-opacity duration-500"
                        style={{ opacity: isVisuallyActive ? 1 : 0.4 }}
                      >
                        {/* Top: Stars + Quote */}
                        <div className="space-y-5 flex-1">
                          {/* Gold Rating Stars (Outlined) */}
                          <div className="flex items-center space-x-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-transparent text-amber-500 stroke-2"
                              />
                            ))}
                          </div>

                          {/* Quote Text */}
                          <p className="text-slate-600 text-[13px] sm:text-sm font-serif leading-relaxed">
                            {item.comment}
                          </p>
                        </div>

                        {/* Bottom: Avatar + Author */}
                        <div className="flex items-center space-x-4 pt-4">
                          <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div>
                            <div className="text-[13px] font-bold text-slate-900 leading-snug">
                              {item.name}
                            </div>
                            <div className="text-[11px] font-medium text-slate-500">
                              {item.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
