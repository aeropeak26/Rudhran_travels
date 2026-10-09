'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Clock, ShieldCheck, Star, Zap, Check, ChevronLeft, ChevronRight, X } from 'lucide-react';

const iconMap: Record<string, any> = {
  Clock, ShieldCheck, Star, Zap, Check
};

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageContent, setPageContent] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/gallery-content')
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setPageContent(data);
        }
      })
      .catch(err => console.error('Error fetching gallery content:', err));
  }, []);

  const images = [
    { title: 'Misty Mountain Expedition', desc: 'Pristine Innova Crysta & Force Urbania luxury fleet navigating misty hill ghats.', badge: 'CONVOY • MUNNAR HILLS', img: '/images/dest1.png' },
    { title: 'Heritage Hotel Welcome', desc: 'Uniformed chauffeur door-side service at luxury heritage', badge: '5-STAR HOSPITALITY', img: '/images/dest2.png' },
    { title: 'Precision Driving', desc: 'GPS-tracked executive cockpits', badge: 'COCKPIT GPS', img: '/images/dest1.png' },
    { title: '3-Generation Smiles', desc: 'Comfortable stops across tea estates', badge: 'FAMILY HOLIDAY', img: '/images/dest2.png' },
    { title: 'Pamban Sea Bridge Crossing', desc: 'Ocean breeze drive connecting mainland to holy Rameshwaram.', badge: 'COASTAL LANDMARK', img: '/images/dest1.png' },
    { title: 'Captain Seat Comfort', desc: 'Plush recliners, wood finishes, and dual AC chill on every journey.', badge: 'FIRST CLASS LUXURY', img: '/images/dest2.png' },
    { title: '3-Generation Smiles', desc: 'Comfortable stops across tea estates', badge: 'FAMILY HOLIDAY', img: '/images/dest2.png' },
    { title: 'Pamban Sea Bridge Crossing', desc: 'Ocean breeze drive connecting mainland to holy Rameshwaram.', badge: 'COASTAL LANDMARK', img: '/images/dest1.png' }
  ];

  const galleryItems = pageContent?.gallery?.length > 0 ? pageContent.gallery : images;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryItems.length : null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryItems.length]);

  const getColSpan = (i: number) => {
    const mod = i % 4; // grid is 4 columns. 1-1-2 means 1, 1, 2 = 4. Wait, the user wants 1 1 2.
    // If it's a 4-col grid: Row 1: index 0 (col-span-1), index 1 (col-span-1), index 2 (col-span-2).
    // Let's use a 4 col grid.
    if (mod === 0) return 'md:col-span-1';
    if (mod === 1) return 'md:col-span-1';
    if (mod === 2) return 'md:col-span-2';
    if (mod === 3) return 'md:col-span-2';
    return 'md:col-span-1';
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-16 md: bg-[#f8fafc] md: overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f1f5f9] to-[#f8fafc] z-0 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-12">
              <div className="lg:w-[55%]">
                 <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                   <span className="text-slate-400">HOME <span className="mx-2 text-slate-300">/</span></span> VISUAL GALLERY
                 </div>
                 <div className="bg-blue-50 text-blue-700 text-[9px] font-bold uppercase px-3 py-1.5 rounded-full inline-flex mb-8 tracking-widest border border-blue-100 shadow-sm">
                   <span className="mr-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span> {pageContent?.hero?.subtitle || 'MOMENTS CAPTURED ACROSS SOUTH INDIA'}
                 </div>
                 <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
                   {pageContent?.hero?.title || 'Visual Chronicle: Journeys Crafted With Care'}
                 </h1>
                 <p className="text-[14px] text-slate-600 leading-relaxed max-w-xl mb-10">
                   {pageContent?.hero?.description || 'Explore authentic moments captured across 50,000+ happy journeys through misty tea hills, royal heritage corridors, coastal bridges, and our curated chauffeur arrivals across Tamil Nadu, Kerala, and Karnataka.'}
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-[#d97706] hover:bg-orange-600 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-500/20">
                     BOOK YOUR RIDE
                   </button>
                   <a href="https://wa.me/918760380485" className="px-8 py-4 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-[11px] uppercase tracking-wider rounded-xl transition-colors text-center inline-block">
                     WHATSAPP DESK
                   </a>
                 </div>
              </div>
              <div className="lg:w-[45%] w-full">
                 <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-wrap justify-between gap-y-10 relative">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
                   {(pageContent?.hero?.stats || [
                     { icon: 'Clock', title: '14+ Years', subtitle: 'Trust & Legacy' },
                     { icon: 'ShieldCheck', title: '100% Verified', subtitle: 'Commercial Fleet' },
                     { icon: 'Star', title: '4.9/5 Rating', subtitle: '500+ Reviews' },
                     { icon: 'Zap', title: 'Sanitized Fleet', subtitle: 'Pre-trip clean' }
                   ]).map((stat: any, idx: number) => {
                     const Icon = iconMap[stat.icon] || Check;
                     const bgColors = ['bg-blue-50', 'bg-emerald-50', 'bg-amber-50', 'bg-blue-50'];
                     const textColors = ['text-blue-600', 'text-emerald-600', 'text-amber-500', 'text-blue-600'];
                     return (
                       <div key={idx} className="w-[45%] relative z-10">
                         <div className={`w-10 h-10 ${bgColors[idx % 4]} rounded-lg flex items-center justify-center mb-4 ${textColors[idx % 4]}`}>
                           <Icon className="w-5 h-5"/>
                         </div>
                         <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{stat.title}</h3>
                         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{stat.subtitle}</p>
                       </div>
                     );
                   })}
                 </div>
              </div>
            </div>
          </div>
        </section>



        {/* 3. Photo Grid */}
        <section className="py-12 md:py-16 md: bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
              {galleryItems.map((item: any, i: number) => (
                <div key={i} onClick={() => setLightboxIndex(i)} className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 h-[260px] md:h-[300px] border border-black/5 ${getColSpan(i)}`}>
                   <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent opacity-90 transition-opacity duration-300"></div>
                   
                   <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-md text-[#0f172a] text-[8px] lg:text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                     {item.badge}
                   </div>
                   
                   <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 transition-transform duration-300">
                     <h3 className="text-lg lg:text-xl font-bold text-white mb-1.5">{item.title}</h3>
                     <p className="text-[11px] lg:text-[12px] text-slate-200 leading-relaxed max-w-[90%]">
                       {item.desc}
                     </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section (Auto Scroll) */}
        <section className="py-12 md:py-16 md: bg-[#f0f4f8] md: overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                 <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-3">VERIFIED PAN-INDIA REVIEWS</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">Guest Chronicles & Verified Feedback</h2>
              </div>
              <p className="text-[12px] text-slate-500 max-w-sm text-left md:text-right leading-relaxed">
                Hear directly from families, corporate executives, and international tourists who have experienced our signature outstation travel platforms.
              </p>
            </div>
          </div>
          
          <div className="relative w-full flex overflow-x-hidden">
            <div className="flex gap-6 px-4 animate-marquee whitespace-nowrap min-w-full shrink-0">
              {/* Double the list for infinite scroll illusion */}
              {[...(pageContent?.feedback || [
                { name: 'Suresh Raghavan', title: 'Family Vacation to Ooty', initials: 'SR', quote: 'We booked the 5-day Munnar - Ooty circuit. Our driver Murugan was exceptional - very safe, highly professional. The Innova Crysta was spotless every single morning.' },
                { name: 'Ananya Kapoor', title: 'Corporate Delegate, Chennai', initials: 'AK', quote: 'Flawless execution for our board members from Chennai airport down to Pondicherry and Thanjavur. Punctuality was absolute. Cannot recommend the premium safety protocol and fleet standards enough.' },
                { name: 'Dr. M. Natarajan', title: 'Heritage Temple Tour', initials: 'MN', quote: 'We utilized their XL carrier Traveler for our family temple trip to Kumbakonam. These routes require skill, and our captain handled the 1,200 km circuit beautifully. Very responsive dispatch team.' },
              ]), ...(pageContent?.feedback || [
                { name: 'Suresh Raghavan', title: 'Family Vacation to Ooty', initials: 'SR', quote: 'We booked the 5-day Munnar - Ooty circuit. Our driver Murugan was exceptional - very safe, highly professional. The Innova Crysta was spotless every single morning.' },
                { name: 'Ananya Kapoor', title: 'Corporate Delegate, Chennai', initials: 'AK', quote: 'Flawless execution for our board members from Chennai airport down to Pondicherry and Thanjavur. Punctuality was absolute. Cannot recommend the premium safety protocol and fleet standards enough.' },
                { name: 'Dr. M. Natarajan', title: 'Heritage Temple Tour', initials: 'MN', quote: 'We utilized their XL carrier Traveler for our family temple trip to Kumbakonam. These routes require skill, and our captain handled the 1,200 km circuit beautifully. Very responsive dispatch team.' },
              ])].map((review: any, i: number) => (
                <div key={i} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl transition-shadow relative w-[350px] md:w-[400px] shrink-0 whitespace-normal">
                   <div className="text-blue-200 mb-6">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
                   </div>
                   <p className="text-[13px] text-slate-600 leading-relaxed mb-10 min-h-[80px]">
                     "{review.quote}"
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-[12px] shrink-0 border border-blue-100">
                        {review.initials}
                      </div>
                      <div>
                         <h4 className="text-[13px] font-bold text-[#0f172a]">{review.name}</h4>
                         <p className="text-[9px] text-slate-500 uppercase tracking-wider">{review.title}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Bottom CTA Section */}
        <section className="py-12 md:py-16 md: bg-white md:">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f172a] rounded-[2rem] p-10 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-12">
               {/* Decorative Background */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#1e3a8a_0%,transparent_50%)] opacity-50 z-0"></div>
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 z-0"></div>
               
               <div className="relative z-10 max-w-2xl text-center md:text-left">
                 <span className="text-[9px] font-bold text-[#f97316] uppercase tracking-widest block mb-4">GUARANTEED ON-TIME DEPARTURE</span>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Ready to Create Your Own South India Travel Chronicle?</h2>
                 <p className="text-[13px] text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                   Experience unmatched outstation journeys seamlessly handled by city-cleared route-trained chauffeurs driven strictly to your schedule.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-8 text-[11px] font-medium text-slate-300">
                   <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> 24/7 Operations Desk: +91 8760380485</span>
                   <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Fixed Transparent Tariff Guarantees</span>
                 </div>
               </div>
               
               <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0 min-w-[280px]">
                 <button onClick={() => setIsModalOpen(true)} className="w-full py-4.5 bg-[#d97706] hover:bg-orange-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] text-center h-[52px]">
                   Book Your Journey Now
                 </button>
                 <a href="https://wa.me/918760380485" className="w-full flex items-center justify-center bg-[#1e293b]/80 hover:bg-[#1e293b] text-white border border-white/10 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all h-[52px]">
                   WhatsApp Dispatch Desk
                 </a>
                 <p className="text-[9px] text-slate-500 text-center mt-2 font-medium">Active now • Usually replies within 15 mins</p>
               </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-md"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-md"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={galleryItems[lightboxIndex].img} 
              alt={galleryItems[lightboxIndex].title || 'Gallery image'}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
               {galleryItems[lightboxIndex].badge && (
                 <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                   {galleryItems[lightboxIndex].badge}
                 </span>
               )}
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{galleryItems[lightboxIndex].title}</h3>
               <p className="text-sm md:text-base text-slate-300 max-w-2xl">{galleryItems[lightboxIndex].desc}</p>
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryItems.length : null);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-md"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest">
            {lightboxIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
