'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="text-xs font-black text-blue-600 tracking-widest uppercase">
              WELCOME TO YOUR JOURNEY, OUR COMMITMENT
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Travel with Comfort. Explore with Confidence.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                At Rudhran Travels, we believe every journey should be comfortable, safe, and truly memorable. With years of experience in the travel industry, we provide reliable travel solutions designed around your needs.
              </p>
              <p>
                From business trips and family vacations to group tours and leisure getaways, our well-maintained fleet and dedicated service ensure a smooth travel experience from start to finish.
              </p>
              <p>
                With a commitment to quality, safety, and customer satisfaction, we go beyond transportation -- we make every journey an experience worth remembering.
              </p>
              <p className="font-bold text-slate-900">
                Plan Your Journey with Rudhran Travels
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                CONTACT US
              </a>
            </div>

          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[450px]">
              
              {/* Top Mountain Background Card */}
              <div className="absolute top-0 left-0 w-3/4 h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/dest2.png"
                  alt="Mountain Landscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-800 flex items-center space-x-1.5 shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>System Status: Online & Ready</span>
                </div>
              </div>

              {/* Top Right Floating Best Ratings Badge */}
              <div className="absolute top-8 right-0 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl text-center z-20">
                <div className="text-[10px] font-bold text-slate-500 mb-1">Best ratings</div>
                <div className="text-base">⭐⭐⭐⭐⭐</div>
              </div>

              {/* Bottom Cockpit Image Card */}
              <div className="absolute bottom-0 right-0 w-3/4 h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="Car Cockpit Navigation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge: 200+ Travels */}
              <div className="absolute bottom-16 left-12 bg-white border border-slate-200 p-4 rounded-2xl shadow-2xl z-30 min-w-[200px]">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xl font-black text-slate-900">200+ Travels</span>
                  <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                </div>
                <p className="text-[10px] text-slate-500 leading-tight mb-2">
                  Quality Vehicles, Seamless Bookings, and 5-Star Travel Experiences.
                </p>
                <div className="flex items-center -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
