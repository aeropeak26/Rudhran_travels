'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { vehiclesData } from '@/data/vehicles';
import { 
  CheckCircle2, ChevronRight, User, Shield, Thermometer, Briefcase, 
  MapPin, Clock, Phone, Mail, Zap, PlaySquare, FileText, Check, Car, Calendar, Navigation
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function VehicleDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const vehicle = vehiclesData.find(v => v.id === id);

  if (!vehicle) {
    notFound();
  }

  // Get 3 alternative vehicles
  const alternatives = vehiclesData.filter(v => v.id !== vehicle.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow pb-24">
        
        {/* 1. Breadcrumb & Top Bar */}
        <section className="bg-[#f4f7fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-[11px] font-semibold text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <Link href="/vehicles" className="hover:text-blue-600 transition-colors">Vehicles</Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <span className="text-[#0a192f] font-bold">{vehicle.name}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-widest bg-blue-100/50 px-4 py-1.5 rounded-full">{vehicle.category}</span>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
                <span className="text-amber-400 text-sm">★</span> {vehicle.rating} <span className="font-medium text-slate-500">({vehicle.reviewsCount} Outstation Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Side: Gallery & Highlights */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative h-[350px] md:h-[450px] rounded-[1.5rem] overflow-hidden shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-slate-100 bg-slate-100">
                <Image src={vehicle.gallery[activeImage]} alt={vehicle.name} fill className="object-cover" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <div className="bg-[#1e293b] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" /> Ghat Road Certified
                  </div>
                  <div className="bg-white text-[#1e3a8a] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Navigation className="w-3.5 h-3.5" /> GPS Monitored
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Fleet Unit #CR-408
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {vehicle.gallery.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-20 md:h-24 rounded-[1rem] overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 shadow-md' : 'border-transparent hover:border-slate-300'}`}
                  >
                    <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                    {idx === 0 && <div className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md">Exterior</div>}
                    {idx === 1 && <div className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md">Captain Seats</div>}
                    {idx === 2 && <div className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md">Luggage (4+2)</div>}
                    {idx === 3 && <div className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md">Cockpit</div>}
                  </button>
                ))}
              </div>

              {/* Highlights Row */}
              <div className="flex flex-wrap items-center gap-4 mt-2 p-2 rounded-2xl">
                <div className="flex-1 min-w-[150px] flex items-center gap-3">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-blue-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                  <span className="text-[11px] font-medium text-slate-600 leading-tight block">360° Sanitized before every departure</span>
                </div>
                <div className="flex-1 min-w-[150px] flex items-center gap-3">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-blue-600 shrink-0"><Zap className="w-4 h-4" /></div>
                  <span className="text-[11px] font-medium text-slate-600 leading-tight block">Speed Governor Capped (80 km/h)</span>
                </div>
                <div className="flex-1 min-w-[150px] flex items-center gap-3">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-blue-600 shrink-0"><User className="w-4 h-4" /></div>
                  <span className="text-[11px] font-medium text-slate-600 leading-tight block">Reclining Row 2&3</span>
                </div>
              </div>
            </div>

            {/* Right Side: Info & Tariff */}
            <div className="lg:col-span-5 flex flex-col">
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-[#0f172a] mb-2">{vehicle.name}</h1>
              <h2 className="text-[15px] font-semibold text-blue-600 mb-4">{vehicle.subtitle}</h2>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6">{vehicle.longDesc}</p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center text-center py-4 px-2 rounded-xl bg-white shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-slate-100/50 hover:border-slate-200 transition-colors">
                    <feat.icon className="w-5 h-5 text-blue-600 mb-2" />
                    <span className="text-[11px] font-bold text-[#0f172a] leading-tight mb-0.5">{feat.text}</span>
                    <span className="text-[9px] text-slate-500 font-medium">{feat.subtext}</span>
                  </div>
                ))}
              </div>

              {/* Tariff Box */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.5rem] p-7 border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">TRANSPARENT RATES</span>
                    <h3 className="text-[22px] font-bold text-[#0f172a]">Standard Tariff</h3>
                  </div>
                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">No Hidden Surcharges</span>
                </div>
                
                <div className="flex items-center justify-between bg-[#f4f7fb] rounded-xl p-5 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[2.5rem] font-extrabold text-[#0f172a] tracking-tight">₹{vehicle.price}</span>
                    <span className="text-[11px] font-medium text-slate-500">/ KM (Outstation)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-medium text-slate-500 block mb-0.5">City Package</span>
                    <span className="text-[22px] font-extrabold text-blue-600 block mb-0.5">₹{vehicle.localPackage}</span>
                    <span className="text-[9px] font-medium text-slate-500">{vehicle.localHours}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500 font-medium"><MapPin className="w-3.5 h-3.5 text-blue-500"/> Outstation Minimum Daily Run</div>
                    <span className="font-semibold text-[#0f172a]">{vehicle.minRun} km / calendar day</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500 font-medium"><User className="w-3.5 h-3.5 text-blue-500"/> Driver Allowance (Day Trip)</div>
                    <span className="font-semibold text-[#0f172a]">₹{vehicle.driverAllowance} / day (Included in city)</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500 font-medium"><Clock className="w-3.5 h-3.5 text-blue-500"/> Night Halt Batta (After 10:00 PM)</div>
                    <span className="font-semibold text-[#0f172a]">₹{vehicle.nightBatta} / night</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500 font-medium"><FileText className="w-3.5 h-3.5 text-blue-500"/> Toll, State Tax & Parking</div>
                    <span className="font-semibold text-blue-600">At Actuals via FASTag</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button onClick={() => setIsModalOpen(true)} className="w-full py-3.5 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Book This Vehicle Now
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="py-3 bg-blue-50 hover:bg-blue-100 text-[#1e3a8a] rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> WhatsApp Quote
                    </a>
                    <button onClick={() => setIsModalOpen(true)} className="py-3 bg-blue-50 hover:bg-blue-100 text-[#1e3a8a] rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> Estimate Fare
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-medium px-1 pt-2">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Free Cancellation 24h Prior</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400" /> GST Invoice Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Overview & Touring Experience */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">UNCOMPROMISING RIDE QUALITY</span>
              <h2 className="text-[2rem] font-bold text-[#0f172a] mb-4 tracking-tight">Vehicle Overview & Touring Experience</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                The {vehicle.name} is South India's most celebrated highway cruiser for a reason. Built on an indestructible ladder-frame chassis with double-wishbone front suspension, it absorbs high-speed expressway undulations and uneven mountain tarmac with zero cabin yaw or passenger fatigue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {vehicle.overview.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center ${idx === 0 ? 'bg-indigo-50 text-indigo-600' : idx === 1 ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {idx === 0 ? <Zap className="w-4 h-4" /> : idx === 1 ? <User className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#1e3a8a] bg-blue-50/70 px-3 py-2 rounded-lg w-fit">
                    <CheckCircle2 className={`w-3.5 h-3.5 text-blue-500`} /> {item.tag}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white px-6 py-5 rounded-[1.5rem] shadow-sm w-full">
              <div className="flex items-center gap-2 font-bold text-[#0f172a] text-[13px] shrink-0 md:pr-4">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Best Suited For:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {vehicle.bestSuitedFor.map((suit, idx) => (
                  <span key={idx} className="text-[11px] font-medium text-slate-600 bg-[#f1f5f9] px-4 py-2 rounded-full">{suit}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Elite Chauffeurs Banner */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[1.5rem] p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0 relative">
                <Image src="/images/dest1.png" alt="Chauffeur" fill className="object-cover" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">RUDHRAN ASSURANCE PROTOCOL</span>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Elite Touring Chauffeurs Only</h3>
                <p className="text-[11px] text-slate-500 max-w-2xl leading-relaxed">
                  We never outsource your safety to unverified freelance drivers. Our {vehicle.name} pilots have an average of 12+ years touring experience, speak English and South Indian regional languages, and follow non-smoking cabin mandates.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="flex items-center gap-3 bg-[#f4f7fb] px-4 py-3 rounded-xl border border-transparent">
                <Shield className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#0f172a]">100% Police Verified</p>
                  <p className="text-[9px] text-slate-500 font-medium">Clean Record Check</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#f4f7fb] px-4 py-3 rounded-xl border border-transparent">
                <Thermometer className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#0f172a]">Breathalyzer Certified</p>
                  <p className="text-[9px] text-slate-500 font-medium">Pre-Trip Screening</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Alternative Vehicles */}
        <section className="pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">EXPLORE SOUTH INDIA FLEET</span>
                <h2 className="text-[2rem] font-bold text-[#0f172a] tracking-tight">Alternative Touring Vehicles</h2>
              </div>
              <Link href="/vehicles" className="text-blue-600 text-[13px] font-bold hover:text-blue-700 flex items-center gap-1 mb-2">
                View All 18 Vehicles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alternatives.map(alt => (
                <div key={alt.id} className="bg-white rounded-[1.5rem] overflow-hidden hover:shadow-xl transition-all shadow-sm flex flex-col border border-transparent p-4">
                  <div className="relative h-[220px] bg-slate-100 overflow-hidden rounded-2xl mb-4">
                    <Image src={alt.img} alt={alt.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-[#0f172a]/80 backdrop-blur text-white text-[9px] font-bold px-3 py-1.5 rounded-md">
                      {alt.category}
                    </div>
                  </div>
                  <div className="px-2 pb-2 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-[#0f172a] text-[17px]">{alt.name}</h3>
                      <div className="text-right flex items-baseline gap-0.5">
                        <span className="text-[20px] font-extrabold text-blue-600">₹{alt.price}</span><span className="text-[10px] font-medium text-slate-500">/km</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-5 leading-relaxed flex-grow">{alt.desc}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                      {alt.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-600">
                          <feat.icon className="w-3.5 h-3.5 text-slate-400"/> {feat.text}
                        </div>
                      ))}
                    </div>
                    <Link href={`/vehicles/${alt.id}`} className="w-full py-3.5 bg-[#eef2ff] hover:bg-blue-100 text-[#1e3a8a] rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center">
                      View {alt.name.split(' ')[1]} Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Custom Itinerary CTA */}
        <section className="bg-[#0f172a] text-white py-16 relative overflow-hidden -mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3">DEDICATED CHENNAI TRAVEL DESK</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight leading-tight">Need a Custom Multi-Day Itinerary <br/>for {vehicle.name}?</h2>
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-xl">
                Planning a custom Ooty-Coonoor tour, Madurai-Rameshwaram pilgrimage, or corporate pick-up sequence? Speak directly to our trip managers for fixed all-inclusive package pricing within 15 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 mt-4 md:mt-0">
              <a href="tel:+919840012345" className="px-6 py-3.5 bg-[#0052cc] hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98400 12345
              </a>
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white text-slate-800 hover:bg-slate-50 rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
