'use client';

import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { 
  Check, MapPin, Clock, Phone, FileText, Star, 
  Map, Calendar, Plus, Car, User, Navigation, ArrowRight,
  ShieldCheck, Leaf, Lightbulb, Info
} from 'lucide-react';

export default function TourPackageDetails({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pkg, setPkg] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`/api/tour-packages/${id}`);
        if (!res.ok) {
          router.push('/tour-packages');
          return;
        }
        const data = await res.json();
        setPkg(data);
      } catch (err) {
        console.error(err);
        router.push('/tour-packages');
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [id, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-blue-900 font-bold bg-slate-50">Loading Itinerary Details...</div>;
  }

  if (!pkg) {
    return null;
  }

  // Fallback data if hero detailed fields are missing
  const heroData = pkg.hero || {
    badge: 'CURATED TOUR PACKAGE',
    title: pkg.title,
    desc: pkg.desc,
    pacing: 'Flexible',
    stayTier: 'Standard',
    carriage: 'Varies',
    escort: 'Local Driver',
    pricingTitle: pkg.title,
    pricingType: 'BASE TARIFF',
    pricingAdvance: 'ENQUIRE NOW',
  };

  const waypoints = pkg.waypoints && pkg.waypoints.length > 0 ? pkg.waypoints : [
    { id: '01', title: 'Start', desc: 'Journey begins' },
    { id: '02', title: 'Destination', desc: 'Main attraction' },
    { id: '03', title: 'End', desc: 'Return trip' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <section className="relative w-full h-[600px] bg-[#071324] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src={pkg.img} alt={pkg.title} fill className="object-cover opacity-60" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071324]/20 to-[#071324]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              
              <div className="max-w-xl">
                <div className="bg-[#1e3a8a]/40 border border-blue-500/30 text-blue-300 text-[9px] font-bold uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6 backdrop-blur-md">
                  <Star className="w-3 h-3 fill-blue-300" /> {heroData.badge || 'CURATED TOUR'}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                  {heroData.title || pkg.title}
                </h1>
                
                <p className="text-[13px] text-slate-300 leading-relaxed mb-10 max-w-lg">
                  {heroData.desc || pkg.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">PACING</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> {heroData.pacing || 'Standard'}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">STAY TIER</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {heroData.stayTier || 'Standard'}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">CARRIAGE</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <Car className="w-3.5 h-3.5 text-purple-400" /> {heroData.carriage || 'Any SUV'}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">ESCORT</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> {heroData.escort || 'Professional Chauffeur'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-[380px]">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest block mb-2">{heroData.pricingTitle || pkg.title}</span>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-white text-4xl font-black">₹{pkg.price}</span>
                      <span className="text-slate-400 text-[11px] font-medium mb-1">/ trip</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase mt-2">{heroData.pricingType || 'BASE RATE'}</div>
                  </div>

                  <div className="space-y-4 mb-8 relative z-10">
                    <div className="flex items-center gap-3 text-slate-200 text-[12px]">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div> Top-Tier Vehicle & Fuel
                    </div>
                    <div className="flex items-center gap-3 text-slate-200 text-[12px]">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div> All Tolls & State Permits
                    </div>
                    <div className="flex items-center gap-3 text-slate-200 text-[12px]">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div> Driver Bata (Food/Stay)
                    </div>
                  </div>

                  <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#f97316] hover:bg-orange-600 text-white rounded-xl text-[13px] font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 relative z-10">
                    <Calendar className="w-4 h-4" /> {heroData.pricingAdvance || 'RESERVE NOW'}
                  </button>
                  <p className="text-center text-slate-400 text-[10px] mt-4">100% Secure. Cancel anytime.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Content Tabs / Nav */}
        <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
              <Link href="#route" className="py-4 text-[12px] font-bold text-slate-900 border-b-2 border-[#f97316] whitespace-nowrap">
                Route & Waypoints
              </Link>
              <Link href="#itinerary" className="py-4 text-[12px] font-bold text-slate-500 hover:text-slate-900 whitespace-nowrap transition-colors">
                Detailed Itinerary
              </Link>
              <Link href="#fleet" className="py-4 text-[12px] font-bold text-slate-500 hover:text-slate-900 whitespace-nowrap transition-colors">
                Available Fleet
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Route Map Outline */}
        <section id="route" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">THE CIRCUIT</span>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">Curated Route Map</h2>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-8">
                  Our experts have designed this specific route to maximize your time experiencing the destination, while keeping travel stretches comfortable and scenic.
                </p>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-[12px] font-bold text-slate-800">
                    <Navigation className="w-4 h-4 text-orange-500" /> Total Distance Cover
                  </div>
                  <div className="text-3xl font-black text-slate-900">~{pkg.itinerary?.reduce((acc: number, curr: any) => acc + parseInt(curr.distance.replace(/\D/g, '') || '0'), 0)} <span className="text-sm font-medium text-slate-500">kilometers</span></div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative">
                  {/* Map Line Connector */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
                    {waypoints.map((point: any, idx: number) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full border-[3px] border-blue-600 shadow-lg flex items-center justify-center text-blue-600 font-black text-[12px] mb-3">
                          {point.id}
                        </div>
                        <h4 className="text-[14px] font-bold text-slate-900 mb-1">{point.title}</h4>
                        <p className="text-[11px] text-slate-500 w-32">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Detailed Itinerary (Timeline) */}
        <section id="itinerary" className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-2">DAY BY DAY</span>
              <h2 className="text-3xl font-bold text-[#0f172a] tracking-tight">Your Detailed Itinerary</h2>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-slate-200 md:-translate-x-1/2 hidden md:block"></div>

              {pkg.itinerary && pkg.itinerary.map((day: any, idx: number) => (
                <div key={idx} className={`relative flex flex-col ${day.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className={`relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg ${day.reverse ? 'md:ml-auto' : ''}`}>
                      <Image src={day.img} alt={day.title} fill className="object-cover" />
                      
                      {/* Mileage Overlay */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-orange-500" /> {day.distance} Drive
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-[27px] md:left-1/2 w-4 h-4 bg-orange-500 border-4 border-white rounded-full md:-translate-x-1/2 hidden md:block shadow-sm"></div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2">
                    <div className={`bg-slate-50 p-8 rounded-2xl border border-slate-100 ${day.reverse ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">{day.dayLabel}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{day.tag} • {day.tagDesc}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{day.title}</h3>
                      <p className="text-[13px] text-slate-600 leading-relaxed mb-6">
                        {day.desc}
                      </p>

                      {day.note && (
                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex gap-3 mb-6">
                          <div className="mt-0.5">
                            {day.note.icon === 'lightbulb' && <Lightbulb className="w-4 h-4 text-orange-500" />}
                            {day.note.icon === 'leaf' && <Leaf className="w-4 h-4 text-green-500" />}
                            {day.note.icon === 'shield' && <ShieldCheck className="w-4 h-4 text-blue-500" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-900 block mb-1">{day.note.title}</span>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{day.note.content}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 border-t border-slate-200 pt-4">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                          <MapPin className="w-3 h-3 text-slate-600" />
                        </div>
                        Overnight Stay: <span className="text-slate-900 font-bold">{day.stay}</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Fleet / Pricing Tiers */}
        <section id="fleet" className="py-20 bg-[#071324] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">CHOOSE YOUR CARRIAGE</span>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Available Fleet & Pricing</h2>
              <p className="text-[13px] text-slate-400 max-w-xl mx-auto leading-relaxed">
                Prices are for the entire vehicle for the full duration of the {pkg.duration} trip, including driver, fuel, and tolls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pkg.vehicles && pkg.vehicles.map((v: any, idx: number) => (
                <div key={idx} className={`relative rounded-3xl p-8 ${v.recommended ? 'bg-gradient-to-b from-blue-900 to-[#071324] border-2 border-blue-500/50 shadow-2xl shadow-blue-900/20 transform md:-translate-y-4' : 'bg-white/5 border border-white/10'}`}>
                  
                  {v.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      Recommended
                    </div>
                  )}

                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">{v.category}</div>
                  <h3 className="text-2xl font-bold text-center mb-1">{v.name}</h3>
                  <p className="text-[11px] text-slate-400 text-center mb-6">{v.subtitle}</p>

                  <div className="text-center mb-8">
                    <span className="text-4xl font-black">₹{v.price}</span>
                    <span className="text-[11px] text-slate-400 block mt-1">Total Trip Cost</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {v.features.map((f: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${v.recommended ? 'bg-blue-500' : 'bg-white/10'}`}>
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-[12px] text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setIsModalOpen(true)} className={`w-full py-3.5 rounded-xl text-[12px] font-bold transition-all flex justify-center items-center gap-2 ${
                    v.recommended 
                    ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}>
                    Book This Vehicle <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
