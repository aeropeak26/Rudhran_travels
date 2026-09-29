'use client';

import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '4 Adults (Family)',
    vehicle: 'Toyota Innova Crysta'
  });
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Send WhatsApp quote
    const text = `Hello Rudhran Travels! I would like to book the ${pkg?.category} Grand Tourer (${pkg?.title}).\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Departure Date:* ${formData.date}\n*Guests:* ${formData.guests}\n*Vehicle:* ${formData.vehicle}\n\nPlease confirm availability and lock my rate.`;
    window.open(`https://wa.me/919840012345?text=${encodeURIComponent(text)}`, '_blank');
    
    // Clear form
    setFormData({
      name: '',
      phone: '',
      date: '',
      guests: '4 Adults (Family)',
      vehicle: 'Toyota Innova Crysta'
    });
    setSubmitting(false);
  };

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
        <section className="py-12 md:py-16 md: relative w-full h-[600px] bg-[#071324] overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image src={pkg.img} alt={pkg.title} fill className="object-cover opacity-60" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071324]/20 to-[#071324]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <div className="bg-[#1e3a8a]/40 border border-blue-500/30 text-blue-300 text-[9px] font-bold uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6 backdrop-blur-md">
                  <Star className="w-3 h-3 fill-blue-300" /> {heroData.badge}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-tight leading-tight">
                  {heroData.title}
                </h1>
                
                <p className="text-[13px] text-slate-300 leading-relaxed mb-10 max-w-lg">
                  {heroData.desc}
                </p>

                {/* 4 Info Pills */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">PACING</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> {heroData.pacing}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">STAY TIER</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {heroData.stayTier}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">CARRIAGE</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <Car className="w-3.5 h-3.5 text-purple-400" /> {heroData.carriage}
                    </div>
                  </div>
                  <div className="bg-[#0f172a]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">ESCORT</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <User className="w-3.5 h-3.5 text-blue-400" /> {heroData.escort}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Floating Pricing Card */}
              <div className="w-full lg:w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] overflow-hidden shadow-2xl">
                <div className="h-48 relative overflow-hidden">
                   <Image src={pkg.img} alt="Pricing Image" fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30"></div>
                   <div className="absolute top-4 left-4 bg-[#0f172a]/80 backdrop-blur-md text-[9px] font-bold text-white px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full"></div> {heroData.pricingTitle}
                   </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-[#0f172a] to-[#071324]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[8px] font-bold text-[#f97316] uppercase tracking-widest block mb-1">FIXED EXPEDITION TARIFF</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-white">₹{pkg.price}</span>
                        <span className="text-[10px] text-slate-400">/ person</span>
                      </div>
                    </div>
                    <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[8px] font-bold uppercase px-2 py-1 rounded">
                      {heroData.pricingType}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed mb-6 border-b border-white/5 pb-6">
                    Includes dedicated vehicle, ghat chauffeur, private houseboat with feast, tolls, and boutique accommodations.
                  </p>
                  <button className="w-full py-3.5 bg-[#f97316] hover:bg-orange-600 text-white rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20">
                    <Check className="w-4 h-4" /> {heroData.pricingAdvance}
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 2. Route Waypoints */}
        <section className="py-12 md:py-16 md: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 - relative z-20">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 md:p-8">
            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-6">GRAND TOURER ROUTE WAYPOINTS</span>
            <div className="flex flex-wrap gap-4">
              {waypoints.map((wp: any, idx: number) => (
                <div key={idx} className="flex-1 min-w-[200px] bg-[#f8fafc] hover:bg-blue-50 transition-colors border border-slate-100 rounded-xl p-3 flex items-center gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                    {wp.id}
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#0f172a] mb-0.5">{wp.title}</h4>
                    <p className="text-[9px] text-slate-500">{wp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Itinerary */}
        <section className="py-12 md:py-16 md: md: bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">CHRONICLE & ITINERARY</span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">The Day-by-Day Expedition Journal</h2>
              <p className="text-[13px] text-slate-500 max-w-xl mx-auto leading-relaxed">
                Chronologically curated for optimal light, low-traffic ghat transit, and insider gastronomy stops.
              </p>
            </div>

            <div className="space-y-8">
              {(pkg.itinerary || []).map((day: any, idx: number) => (
                <div key={idx} className={`bg-white rounded-2xl p-2 md:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch overflow-hidden ${day.reverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-2/5 min-h-[250px] md:min-h-full relative rounded-xl overflow-hidden shrink-0">
                     <Image src={day.img} alt={day.title} fill className="object-cover" />
                     <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full">
                       {day.dayLabel}
                     </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 py-4 md:py-6 pr-4 md:pr-8 pl-4 md:pl-0 flex flex-col">
                    {day.tag && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-[8px] font-bold px-2 py-1 rounded uppercase tracking-wider ${day.tag === 'RAINFOREST CORRIDOR' ? 'bg-emerald-500 text-white' : day.tag === 'GRAND FINALE' ? 'bg-blue-600 text-white' : 'bg-[#f97316] text-white'}`}>{day.tag}</span>
                        <span className={`text-[10px] font-bold ${day.tag === 'RAINFOREST CORRIDOR' ? 'text-emerald-600' : 'text-blue-600'}`}>{day.tagDesc}</span>
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">{day.title}</h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed mb-6">{day.desc}</p>
                    
                    {day.note && (
                      <div className={`rounded-xl p-4 mb-6 border ${day.note.icon === 'lightbulb' ? 'bg-[#fffbeb] border-[#fde68a]' : day.note.icon === 'leaf' ? 'bg-[#ecfdf5] border-[#a7f3d0]' : 'bg-[#eff6ff] border-[#bfdbfe]'}`}>
                        <div className="flex gap-3">
                          <div className={`mt-0.5 shrink-0 ${day.note.icon === 'lightbulb' ? 'text-amber-500' : day.note.icon === 'leaf' ? 'text-emerald-600' : 'text-blue-600'}`}>
                            {day.note.icon === 'lightbulb' && <Lightbulb className="w-4 h-4" />}
                            {day.note.icon === 'leaf' && <Leaf className="w-4 h-4" />}
                            {day.note.icon === 'shield' && <ShieldCheck className="w-4 h-4" />}
                          </div>
                          <p className={`text-[11px] leading-relaxed ${day.note.icon === 'leaf' ? 'text-emerald-800' : day.note.icon === 'shield' ? 'text-blue-800' : 'text-slate-800'}`}>
                            <strong>{day.note.title}</strong> {day.note.content}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between text-[10px] font-bold border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1.5 text-blue-600">
                        {(day.stay || '').includes('Houseboat') ? <MapPin className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />} Stay / Experience: <span className="text-slate-500">{day.stay}</span>
                      </div>
                      <div className="text-[#0f172a]">
                        Distance: {day.distance}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Vehicles Section */}
        <section className="py-12 md:py-16 md: md: bg-[#f4f7f9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-2">EXECUTIVE CARRIAGE FLEET</span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">Choose Your Hill-Certified Carriage</h2>
              <p className="text-[13px] text-slate-500 max-w-xl mx-auto leading-relaxed">
                Every vehicle is owned and meticulously maintained by Rudhran with dedicated certified drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {(pkg.vehicles || []).map((veh: any, idx: number) => (
                <div key={idx} className={`rounded-2xl p-8 relative overflow-hidden transition-transform hover:-translate-y-2 ${veh.recommended ? 'bg-[#0B1527] text-white shadow-2xl scale-105 z-10 py-12 md:py-16 border border-blue-500/20' : 'bg-white shadow-lg border border-slate-100'}`}>
                  {veh.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0052cc] text-white text-[9px] font-bold uppercase px-6 py-1.5 rounded-b-xl">
                      MOST POPULAR FOR GHATS
                    </div>
                  )}
                  
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className={`text-[8px] font-bold uppercase tracking-widest block mb-2 ${veh.recommended ? 'text-slate-400' : 'text-slate-500'}`}>{veh.category}</span>
                      <h3 className={`text-2xl font-bold mb-1 ${veh.recommended ? 'text-white' : 'text-[#0f172a]'}`}>{veh.name}</h3>
                      <p className={`text-[11px] ${veh.recommended ? 'text-slate-400' : 'text-slate-500'}`}>{veh.subtitle}</p>
                    </div>
                    {veh.recommended && <div className="text-[9px] font-bold text-slate-300">Recommended</div>}
                    {!veh.recommended && <div className="text-[9px] font-bold text-slate-400">{veh.tier}</div>}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${veh.recommended ? 'text-[#f97316]' : 'text-[#0f172a]'}`}>₹{veh.price}</span>
                      <span className={`text-[10px] font-medium ${veh.recommended ? 'text-slate-400' : 'text-slate-500'}`}>/ person</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {(veh.features || []).map((feat: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${veh.recommended ? 'text-[#f97316]' : 'text-blue-600'}`} />
                        <span className={`text-[12px] ${veh.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl text-[11px] font-bold transition-colors shadow-sm ${veh.recommended ? 'bg-[#3b82f6] hover:bg-blue-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                    SELECT {veh.name.split(' ')[1] ? veh.name.split(' ')[1].toUpperCase() : veh.name.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Inclusions / Exclusions */}
        <section className="py-12 md:py-16 md: md: bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f0fdf4] border border-emerald-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-emerald-950">100% Inclusions Guarantee</h3>
                </div>
                <ul className="space-y-4">
                  {(pkg.inclusions || []).map((inc: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[12px] text-emerald-800 leading-relaxed">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Info className="w-5 h-5 text-slate-500" />
                  <h3 className="text-lg font-bold text-slate-800">Exclusions & Direct Pay</h3>
                </div>
                <ul className="space-y-4">
                  {(pkg.exclusions || []).map((exc: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">&times;</div>
                      <span className="text-[12px] text-slate-600 leading-relaxed">{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Booking Form */}
        <section className="py-12 md:py-16 md: bg-[#111c30] md: relative overflow-hidden">
          {/* Background Maps/Graphics */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[#0c1524]/60 mix-blend-multiply z-10"></div>
             {/* We can use pkg.img as a blurred dark background for texture if no specific transport image is available */}
             <Image src="/images/dest1.png" alt="Background" fill className="object-cover opacity-10 grayscale" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Content */}
              <div className="w-full lg:w-5/12 pr-0 lg:pr-8">
                <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest block mb-4">FAST-TRACK DISPATCH</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Reserve Your {pkg.category} Grand Tourer</h2>
                <p className="text-[13px] text-slate-300/80 leading-relaxed mb-10">
                  Receive your tailored PDF dossier and driver credentials via WhatsApp within 15 minutes. ₹2,000 refundable advance locks in your reservation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/919840012345" className="px-6 py-3.5 bg-[#10b981] hover:bg-emerald-500 text-white rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                    <Phone className="w-4 h-4 fill-white" /> WHATSAPP DESK (+91 98400 12345)
                  </a>
                  <a href="tel:+919840012345" className="px-6 py-3.5 bg-[#1e293b]/50 hover:bg-[#1e293b] text-[#f97316] border border-white/5 rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#f97316] fill-[#f97316]" /> CALL HOTLINE
                  </a>
                </div>
              </div>

              {/* Right Booking Form */}
              <div className="w-full lg:w-7/12">
                <div className="bg-[#152033] border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl relative">
                  
                  {/* Status Indicator */}
                  <div className="bg-[#064e3b]/40 border border-[#064e3b] text-emerald-400 text-[10px] font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Live Desk: 2 Ahead • 4m Response
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">GUEST NAME</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Ramesh Sundaram" className="w-full bg-transparent border-b border-white/10 hover:border-white/20 px-1 py-2 text-white text-[13px] placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all" />
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between items-center">
                           <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">WHATSAPP NUMBER</label>
                           <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-wider">VERIFIED DISPATCH</span>
                         </div>
                        <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98400 00000" className="w-full bg-transparent border-b border-white/10 hover:border-white/20 px-1 py-2 text-white text-[13px] placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">DEPARTURE DATE</label>
                        <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-transparent border-b border-white/10 hover:border-white/20 px-1 py-2 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all [color-scheme:dark]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">GUESTS MANIFEST</label>
                        <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full bg-transparent border-b border-white/10 hover:border-white/20 px-1 py-2 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all appearance-none">
                          <option className="bg-[#152033]">4 Adults (Family)</option>
                          <option className="bg-[#152033]">2 Adults (Couple)</option>
                          <option className="bg-[#152033]">6 Adults (Group)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CARRIAGE SELECTION</label>
                        <select value={formData.vehicle} onChange={e => setFormData({...formData, vehicle: e.target.value})} className="w-full bg-transparent border-b border-white/10 hover:border-white/20 px-1 py-2 text-white text-[13px] focus:outline-none focus:border-blue-500 transition-all appearance-none">
                          <option className="bg-[#152033]">Toyota Innova Crysta</option>
                          <option className="bg-[#152033]">Executive Sedan</option>
                          <option className="bg-[#152033]">Force Urbania</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#121c2c] border border-[#1e3a8a]/30 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between mt-8 gap-4">
                       <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#1e3a8a]/50 flex items-center justify-center shrink-0">
                           <span className="text-[#3b82f6] font-bold text-[10px]">₹</span>
                         </div>
                         <div className="text-[11px] text-slate-400 font-medium">Lock Rate: <strong className="text-white font-bold tracking-wide">₹2,000 Refundable Advance</strong></div>
                       </div>
                       <div className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Zero Surge Surcharge</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button type="submit" disabled={submitting} className="flex-1 py-4 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white rounded-lg text-[12px] font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50">
                        <ArrowRight className="w-4 h-4" /> {submitting ? 'PROCESSING...' : 'REQUEST BOOKING'}
                      </button>
                      <button type="button" onClick={() => window.open('tel:+919840012345')} className="px-8 py-4 bg-[#1e293b]/60 hover:bg-[#1e293b] text-slate-300 border border-white/5 rounded-lg text-[11px] font-medium transition-all">
                        Call now for enquiry
                      </button>
                    </div>
                  </form>
                </div>
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
