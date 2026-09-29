'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Check, MapPin, Clock, Phone, FileText, Zap, ShieldCheck, Star, 
  Map, Calendar, Plus, Car, User, Navigation, ArrowRight, MessageCircle
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function TourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Packages');
  const [packagesData, setPackagesData] = useState<any[]>([]);
  const [pageContent, setPageContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pkgRes, contentRes] = await Promise.all([
          fetch('/api/tour-packages'),
          fetch('/api/tour-content')
        ]);
        const pData = await pkgRes.json();
        const cData = await contentRes.json();
        setPackagesData(pData);
        setPageContent(cData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filters = [
    'All Packages', 'Tamil Nadu', 'Kerala', 'Karnataka', 
    'South India Circuit', 'Family Trips', 'Group Trips'
  ];

  const filteredPackages = packagesData.filter(p => {
    if (filter === 'All Packages') return true;
    return p.category === filter;
  });

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-blue-900 font-bold bg-[#f8fafc]">Loading Curated Journeys...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={pageContent?.heroImage || "/images/hill_station.png"} 
              alt="South India Destinations" 
              fill 
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-[#f97316]">Tour Packages</span>
            </div>

            <div className="bg-[#1e3a8a]/40 text-blue-100 px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#1e3a8a] uppercase tracking-wider text-[10px] font-bold mb-8">
              <div className="w-2 h-2 bg-[#f97316] rounded-full"></div> {pageContent?.badge || 'OUR TOUR PACKAGES'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl">
              {pageContent?.title || 'Discover Places Worth Remembering'}
            </h1>
            
            <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed mb-10 max-w-2xl">
              {pageContent?.description || 'Curated journeys, comfortable travel and unforgettable experiences.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {pageContent?.features && pageContent.features.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-lg text-slate-200 text-[11px] font-medium shadow-sm hover:bg-white/10 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </div> {feat}
                </div>
              ))}
            </div>

            <Link href="#packages" className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors">
              SCROLL TO EXPLORE CURATED CIRCUITS &darr;
            </Link>
          </div>
        </section>

        {/* 2. Packages Grid */}
        <section id="packages" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          
          {/* Filter Bar */}
          <div className="bg-white rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex justify-between items-center mb-12 gap-4 border border-slate-100 max-w-6xl mx-auto overflow-hidden">
            <div className="flex items-center gap-1 w-full overflow-x-auto px-2 scrollbar-hide">
              {filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-3 rounded-full text-[12px] font-bold transition-all whitespace-nowrap shrink-0 ${
                    filter === f 
                    ? 'bg-[#0f172a] text-white shadow-md' 
                    : 'text-slate-500 hover:text-[#0f172a]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-1.5 px-5 py-3 bg-[#f8fafc] rounded-full border border-slate-100 text-[11px] font-bold text-[#0f172a] whitespace-nowrap shrink-0 mr-2">
              <span className="flex items-center gap-1.5 text-slate-500 font-medium"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Showing</span> {filteredPackages.length} Handpicked Packages
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, idx) => (
              <div key={pkg._id} className="relative rounded-[1.5rem] bg-[#0A111E] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group h-[440px]">
                
                {/* Background Image */}
                <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Single Bottom Gradient (Removes complex z-indexes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A111E] via-[#0A111E]/80 to-transparent"></div>

                {/* Optional Ribbons (Top Left) */}
                {pkg.featured && (
                  <div className="absolute top-0 left-0 bg-[#0052cc] text-white text-[9px] font-bold uppercase px-4 py-1.5 rounded-br-xl shadow-md z-20 flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" /> FEATURED JOURNEY
                  </div>
                )}
                {!pkg.featured && pkg.badge && pkg.badge.includes('HERITAGE') && (
                  <div className="absolute top-0 left-0 bg-[#ffb703] text-[#0f172a] text-[9px] font-bold uppercase px-4 py-1.5 rounded-br-xl shadow-md z-20">
                    {pkg.badge}
                  </div>
                )}

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full w-full p-6">
                  
                  {/* Top Badges */}
                  <div className={`flex justify-between items-start w-full ${pkg.featured || (pkg.badge && pkg.badge.includes('HERITAGE')) ? 'pt-5' : ''}`}>
                     <div className="bg-[#0f172a]/60 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center shadow-sm">
                       {pkg.duration}
                     </div>

                     <div className="bg-blue-100/90 text-blue-800 text-[8px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
                        {pkg.badge && !pkg.badge.includes('HERITAGE') ? pkg.badge : 'CURATED TOUR'}
                     </div>
                  </div>

                  <div className="flex-grow"></div>

                  {/* Bottom Content */}
                  <div className="w-full">
                    <div className="text-blue-400 text-[8px] font-black uppercase tracking-widest mb-1.5">
                      {(pkg.subtitle || '').replace(/ \| /g, ' • ')}
                    </div>
                    <h3 className="text-white text-[22px] font-bold mb-2 tracking-tight">{pkg.title}</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-5 line-clamp-2">
                      {pkg.desc}
                    </p>

                    <div className="w-full h-px bg-slate-700/50 mb-5"></div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">STARTING FROM</span>
                        <div className="text-[18px] font-extrabold text-white">₹{pkg.price}</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button onClick={() => setIsModalOpen(true)} className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 rounded-lg transition-colors shadow-sm">
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                        <Link href={`/tour-packages/${pkg._id}`} className="px-5 py-2 bg-[#f97316] hover:bg-orange-600 text-white rounded-lg text-[10px] font-bold transition-colors shadow-sm">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Why Travel With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">
                {pageContent?.whyChooseUs?.badge || 'THE RUDHRAN PROMISE'}
              </span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">
                {pageContent?.whyChooseUs?.title || 'Why Travel With Us?'}
              </h2>
              <p className="text-[13px] text-slate-500 max-w-xl mx-auto leading-relaxed">
                {pageContent?.whyChooseUs?.description || 'We go above and beyond to ensure your outstation journey is safe, comfortable, and exactly as you imagined.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(pageContent?.whyChooseUs?.cards?.length > 0 ? pageContent.whyChooseUs.cards : [
                { icon: 'Car', title: 'Comfortable Vehicles', description: 'Sanitized, showroom-condition fleet spanning sedans to group coaches, complete with working AC and plush interiors.' },
                { icon: 'User', title: 'Experienced Drivers', description: 'Professional, background-verified local drivers who double as route guides for Tamil Nadu, Kerala, and Karnataka.' },
                { icon: 'Navigation', title: 'Flexible Itineraries', description: 'Pause for photos, take detours, or change plans on the go. It\'s your vacation, control it with absolute freedom.' },
                { icon: 'Zap', title: 'Transparent Pricing', description: 'Clear breakdowns provided before booking. Zero hidden fees for tolls, state permits, or driver batta upon arrival.' }
              ]).map((card: any, idx: number) => {
                const IconMap: any = { Car, User, Navigation, Zap, ShieldCheck, MapPin, Clock, Star, Map, Calendar, MessageCircle, Check };
                const IconComponent = IconMap[card.icon] || Check;
                return (
                  <div key={idx} className="bg-[#f8fafc] p-8 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 transition-colors text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0f172a] mb-3">{card.title}</h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. CTA Block */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1527] text-white rounded-[1.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
            
            {/* Background Glowing Spheres */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[55%] w-[400px] h-[400px] bg-[#0052cc]/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[450px] h-[450px] bg-[#0047b3]/50 rounded-full blur-[140px] pointer-events-none z-0"></div>
            
            <div className="max-w-xl relative z-10">
              <span className="text-[9px] font-bold text-[#3b82f6] uppercase tracking-widest block mb-3">SEAMLESS TRAVEL BOOKING</span>
              <h2 className="text-3xl md:text-[2.2rem] font-bold mb-5 tracking-tight leading-tight">Your Next Adventure Starts Here</h2>
              <p className="text-[12px] text-slate-300/90 leading-relaxed mb-8">
                Choose your destination and let us take care of the journey.<br />
                Custom hotel packages and vehicle hires crafted directly by our<br />
                Chennai travel experts.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-[#0066ff] hover:bg-blue-600 text-white rounded-lg text-[12px] font-bold transition-colors shadow-lg shadow-blue-900/20">
                  Plan My Trip
                </button>
                <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1e293b] hover:bg-slate-700 text-white rounded-lg text-[12px] font-bold transition-colors flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Phone className="w-2 h-2 text-white fill-white" />
                  </div> 
                  Contact via WhatsApp
                </a>
              </div>
            </div>
            
          </div>
        </section>

      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
