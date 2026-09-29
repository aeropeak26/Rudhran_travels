'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, Clock, Car, Users, BadgeCheck, Shield, Smile, Award, 
  MapPin, Route, Briefcase, Plane, Users2, Key, Phone, MessageCircle, ArrowRightLeft, Zap, FileCheck, Calendar, Map, ArrowDown, Check
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import AboutWhyChooseUs from '@/components/AboutWhyChooseUs';
import AboutCtaBanner from '@/components/AboutCtaBanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageContent, setPageContent] = useState<any>(null);

  React.useEffect(() => {
    fetch('/api/about-content')
      .then(res => res.json())
      .then(data => {
        if (data && Object.keys(data).length > 0) {
          setPageContent(data);
        }
      })
      .catch(err => console.error('Error fetching about content:', err));
  }, []);

  const iconMap: Record<string, any> = {
    CheckCircle2, Clock, Car, Users, BadgeCheck, Shield, Smile, Award, 
    MapPin, Route, Briefcase, Plane, Users2, Key, Phone, MessageCircle, ArrowRightLeft, Zap, FileCheck, Calendar, Map, ArrowDown, Check
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero Banner */}
        <section className="py-12 md:py-16 md: relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <Image 
            src={pageContent?.hero?.heroImage || "/images/dest2.png"} 
            alt="Scenic road" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-10">
            <div className="flex items-center justify-center space-x-2 text-[10px] md:text-xs font-semibold tracking-widest text-slate-300 uppercase mb-8">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="opacity-50">/</span>
              <span className="text-blue-400">ABOUT US</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/40 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
              <span className="text-[10px] md:text-xs font-bold text-blue-200 uppercase tracking-widest">ABOUT RUDHRAN TRAVELS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight mb-8 leading-tight">
              {pageContent?.hero?.title || 'Your Journey, Our Commitment'}
            </h1>
            
            <p className="text-base md:text-lg text-slate-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              {pageContent?.hero?.description || 'Reliable travel services designed around your comfort, safety, and convenience across South India and beyond.'}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium border-t border-white/10 pt-10">
              {(pageContent?.hero?.points || ['100% Sanitized Fleet', 'Verified Chauffeurs', 'Transparent Pricing', '24/7 Trip Support']).map((point: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[4]" />
                  </div>
                  <span className="text-slate-100">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Your Trusted Travel Partner */}
        <section className="py-12 md:py-16 md: md: bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Image Side */}
              <div className="relative">
                <div className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden">
                  <Image 
                    src={pageContent?.whoWeAre?.image || "/images/hero_car.png"} 
                    alt="Travel Partner" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 w-[90%] max-w-[320px]">
                  <div className="w-12 h-12 bg-blue-50 rounded-[14px] flex items-center justify-center text-blue-600 shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0a192f] mb-0.5">{pageContent?.whoWeAre?.floatingCard?.badge || 'CERTIFIED AGENCY'}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{pageContent?.whoWeAre?.floatingCard?.description || 'Government Registered & Fully Insured Fleet'}</div>
                  </div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="space-y-6 lg:pl-8">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {pageContent?.whoWeAre?.badge || 'WHO WE ARE'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">{pageContent?.whoWeAre?.title || 'Your Trusted Travel Partner'}</h2>
                
                <div className="space-y-5 text-slate-600 leading-relaxed text-sm">
                  <p>{pageContent?.whoWeAre?.description1 || "Established with a passion for exceptional hospitality and seamless mobility, Rudhran Travels has evolved into South India's premier chauffeured transportation and curated tour specialist. We blend modern fleet management with personalized guest care, ensuring every mile feels safe, comfortable, and truly memorable."}</p>
                  <p>{pageContent?.whoWeAre?.description2 || "Whether you are coordinating multi-day hill station tours, interstate pilgrimage routes, fast-paced corporate airport transits, or comfortable family vacations, our team executes every detail with precision and genuine courtesy."}</p>
                </div>
                
                <ul className="space-y-4 py-6">
                  {(pageContent?.whoWeAre?.points || [
                    'Personalized itineraries customized to your schedule and pacing',
                    'Meticulously inspected, spotless, late-model fleet of sedans, SUVs & tempo travellers',
                    'Veteran chauffeurs with deep ghat-road and interstate route mastery'
                  ]).map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <span className="text-sm font-semibold text-[#0a192f]">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/vehicles" className="px-6 py-3 bg-[#2a41d0] hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md shadow-blue-900/20">
                    Explore Our Fleet
                  </Link>
                  <Link href="/#packages" className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-semibold text-sm transition-all">
                    View Tour Packages
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Stats Section */}
        <section className="py-12 md:py-16 md: md: bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {(pageContent?.whoWeAre?.stats || [
                { icon: 'Calendar', number: '10+', title: 'Years Experience', desc: 'A decade of punctuality and road excellence across Tamil Nadu, Kerala, Karnataka, and Andhra.' },
                { icon: 'Smile', number: '5,000+', title: 'Happy Customers', desc: 'Over 98% 5-star ratings from families, solo explorers, and corporate executives.' },
                { icon: 'Map', number: '100+', title: 'Tour Packages', desc: 'Handcrafted journeys to hill stations, coastal gems, and historic temple circuits.' },
                { icon: 'ArrowDown', number: '50+', title: 'Modern Vehicles', desc: 'From premium sedans and Toyota Innova Crystas to luxury Force Urbania cruisers.' }
              ]).map((stat: any, idx: number) => {
                const IconComp = iconMap[stat.icon] || Check;
                const colors = [
                  { bg: 'bg-[#eff6ff]', text: 'text-[#2563eb]' },
                  { bg: 'bg-[#fffbeb]', text: 'text-[#f59e0b]' },
                  { bg: 'bg-[#ecfdf5]', text: 'text-[#10b981]' },
                  { bg: 'bg-[#f5f3ff]', text: 'text-[#8b5cf6]' }
                ];
                const c = colors[idx % colors.length];
                return (
                  <div 
                    key={idx}
                    className="p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e2e8f0]/80 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #FFFFFF 56%, #cdd9fa 100%)' }}
                  >
                    <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center ${c.text} mb-8 shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-4xl font-bold text-[#0a192f] mb-1">{stat.number}</h3>
                    <p className="text-sm font-bold text-[#0a192f] mb-4">{stat.title}</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{stat.desc}</p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* 4. Making Every Journey Better */}
        <section className="py-12 md:py-16 md: md: bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
                {pageContent?.ourPurpose?.badge || 'OUR PURPOSE'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">{pageContent?.ourPurpose?.title || 'Making Every Journey Better'}</h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">{pageContent?.ourPurpose?.description || 'A customer-centric approach rooted in hospitality, reliability, and unquestionable safety standards.'}</p>
            </div>
            
            <div className="bg-[#0b1b3d] rounded-[2rem] p-10 md:p-16 text-center text-white mb-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-blue-500/10 blur-[100px] pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/5 mb-8 relative z-10">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">OUR CORE MISSION</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl mx-auto relative z-10 italic text-slate-100 font-serif">
                {pageContent?.ourPurpose?.missionQuote || '“Our mission is to provide safe, comfortable, reliable, and affordable travel experiences while delivering exceptional customer service, transparent billing, and unforgettable memories for every traveler.”'}
              </h3>
              
              <div className="mt-12 flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">THE RUDHRAN STANDARD</span>
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, bgC: 'bg-[#2a41d0]', textC: 'text-white', shadowC: 'shadow-blue-900/20', badgeC: 'bg-emerald-50 text-emerald-600 border-emerald-100', footerC: 'text-blue-600', data: pageContent?.ourPurpose?.cards?.[0] || { title: 'Safety First', badge: 'Zero Tolerance', desc: 'Rigorous 54-point vehicle inspections before every trip...', footerLeft: 'Verified Protocol', footerRight: '24/7 Monitored' } },
                { icon: Smile, bgC: 'bg-[#eb6e00]', textC: 'text-white', shadowC: 'shadow-orange-900/20', badgeC: 'bg-amber-50 text-amber-600 border-amber-100', footerC: 'text-amber-600', data: pageContent?.ourPurpose?.cards?.[1] || { title: 'Guest Delight', badge: 'Premium Care', desc: 'Thoughtful courtesies from illuminated cars...', footerLeft: 'Complimentary Water', footerRight: 'Fast Charging' } },
                { icon: FileCheck, bgC: 'bg-[#0c182e]', textC: 'text-white', shadowC: 'shadow-slate-900/20', badgeC: 'bg-[#f0f4f8] text-[#0a192f] border-transparent', footerC: 'text-slate-700', data: pageContent?.ourPurpose?.cards?.[2] || { title: 'Uncompromising Integrity', badge: '100% Honest', desc: 'Upfront per-kilometer billing...', footerLeft: 'Automated GST Invoice', footerRight: 'Exact Metre' } },
              ].map((c, i) => {
                const IconComp = c.icon;
                return (
                  <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 ${c.bgC} ${c.textC} rounded-[14px] flex items-center justify-center mb-6 shadow-md ${c.shadowC}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-[#0a192f]">{c.data.title}</h4>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${c.badgeC}`}>{c.data.badge}</span>
                      </div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-8">
                        {c.data.desc}
                      </p>
                    </div>
                    
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className={`text-[11px] font-bold ${c.footerC}`}>{c.data.footerLeft}</span>
                      <span className={`text-[11px] font-bold ${c.footerC}`}>{c.data.footerRight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Everything We Offer */}
        <section className="py-12 md:py-16 md: md: bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
                {pageContent?.tailoredMobility?.badge || 'TAILORED MOBILITY'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">{pageContent?.tailoredMobility?.title || 'Everything We Offer'}</h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">{pageContent?.tailoredMobility?.description || 'Tailored mobility solutions crafted for individuals, families, and enterprise teams across South India.'}</p>
            </div>
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6">
              
              {/* Card 1: Local Transportation (Col 1, Row 1) */}
              <div className="lg:col-start-1 lg:row-start-1 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-4">{pageContent?.tailoredMobility?.card1?.title || 'Local Transportation'}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card1?.desc || 'Hourly city rides, business commutes, shopping trips, and point-to-point transfers with courteous chauffeurs.'}</p>
              </div>

              {/* Card 2: Outstation Trips (Col 2, Row 1) */}
              <div className="lg:col-start-2 lg:row-start-1 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-4">{pageContent?.tailoredMobility?.card2?.title || 'Outstation Trips'}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card2?.desc || 'Stress-free round trips and multi-day vacations across South India with seasoned highway and ghat-road drivers.'}</p>
              </div>

              {/* Card 3: Airport VIP 1 (Col 3, Row 1-2) */}
              <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 bg-[#0b1120] p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden flex flex-col shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-md border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">ARCHETYPE 04 • DARK LUXE VIP</span>
                    </div>
                    <div className="px-2.5 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                      <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">BLACK TIER</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{pageContent?.tailoredMobility?.card3VIP?.title || 'Airport VIP Meet & Greet'}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">{pageContent?.tailoredMobility?.card3VIP?.desc || 'Punctual terminal curbside receiving with custom iPad name boards, active flight telemetry sync, and luggage trolley handling.'}</p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        <span className="text-[11px] font-medium text-slate-300">Flight Tracking Engine</span>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-400">{pageContent?.tailoredMobility?.card3VIP?.featureTitle || 'Auto-Buffer +60m'}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card3VIP?.featureDesc || 'Pickup auto-adjusts if your flight is delayed. Zero wait surcharges.'}</p>
                  </div>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="relative z-10 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 mt-auto">
                  RESERVE AIRPORT CHAUFFEUR &rarr;
                </button>
              </div>

              {/* Card 4: Airport VIP 2 (Col 1, Row 2-3) */}
              <div className="lg:col-start-1 lg:row-start-2 lg:row-span-2 bg-[#0b1120] p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden flex flex-col shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-md border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">ARCHETYPE 04 • DARK LUXE VIP</span>
                    </div>
                    <div className="px-2.5 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                      <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">BLACK TIER</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{pageContent?.tailoredMobility?.card4VIP?.title || 'Airport VIP Meet & Greet'}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">{pageContent?.tailoredMobility?.card4VIP?.desc || 'Punctual terminal curbside receiving with custom iPad name boards, active flight telemetry sync, and luggage trolley handling.'}</p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        <span className="text-[11px] font-medium text-slate-300">Flight Tracking Engine</span>
                      </div>
                      <span className="text-[11px] font-bold text-cyan-400">{pageContent?.tailoredMobility?.card4VIP?.featureTitle || 'Auto-Buffer +60m'}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card4VIP?.featureDesc || 'Pickup auto-adjusts if your flight is delayed. Zero wait surcharges.'}</p>
                  </div>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="relative z-10 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 mt-auto">
                  RESERVE AIRPORT CHAUFFEUR &rarr;
                </button>
              </div>

              {/* Card 5: Corporate Travel (Col 2, Row 2) */}
              <div className="lg:col-start-2 lg:row-start-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-4">{pageContent?.tailoredMobility?.card5?.title || 'Corporate Travel'}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card5?.desc || 'Executive mobility management, VIP delegation handling, GST compliant invoicing, and dedicated enterprise accounts.'}</p>
              </div>

              {/* Card 6: Group & Event Travel 1 (Col 2, Row 3) */}
              <div className="lg:col-start-2 lg:row-start-3 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-4">{pageContent?.tailoredMobility?.card6?.title || 'Group & Event Travel'}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card6?.desc || 'Spacious 12-17 seater luxury Force Urbanias and Tempo Travellers for weddings, pilgrimages, and family reunions.'}</p>
              </div>

              {/* Card 7: Group & Event Travel 2 (Col 3, Row 3) */}
              <div className="lg:col-start-3 lg:row-start-3 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-4">{pageContent?.tailoredMobility?.card7?.title || 'Group & Event Travel'}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pageContent?.tailoredMobility?.card7?.desc || 'Spacious 12-17 seater luxury Force Urbanias and Tempo Travellers for weddings, pilgrimages, and family reunions.'}</p>
              </div>

            </div>

            {/* Bottom Full-width Card */}
            <div className="mt-6 bg-white border border-slate-100 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <ArrowRightLeft className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a192f] mb-1">{pageContent?.tailoredMobility?.bottomCard?.title || 'Chauffeur-Driven Vehicle Rental'}</h3>
                    <p className="text-sm text-slate-500">{pageContent?.tailoredMobility?.bottomCard?.desc || 'Custom daily, weekly, or monthly rentals across executive sedans, Toyota Crystas, Hycross, and luxury SUVs.'}</p>
                  </div>
                </div>
                <Link href="/#tariff" className="text-sm font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap flex items-center gap-1 shrink-0">
                  Check Vehicle Tariff &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Why Customers Choose Us */}
        <AboutWhyChooseUs data={pageContent?.whyChooseUs} />

        {/* 7. CTA Banner */}
        <AboutCtaBanner />

      </main>

      <Footer />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedItem={null} 
      />
    </div>
  );
}
