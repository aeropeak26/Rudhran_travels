'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vehiclesData } from '@/data/vehicles';
import { 
  CheckCircle2, ChevronRight, User, Shield, Thermometer, Briefcase, 
  MapPin, Clock, Phone, Mail, Zap, PlaySquare, FileText, Check, Car
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const vehicle = vehiclesData.find(v => v.id === params.id);

  if (!vehicle) {
    notFound();
  }

  // Get 3 alternative vehicles
  const alternatives = vehiclesData.filter(v => v.id !== vehicle.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow pb-24">
        
        {/* 1. Breadcrumb & Top Bar */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-[10px] md:text-xs font-semibold tracking-widest text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <Link href="/vehicles" className="hover:text-blue-600 transition-colors">Vehicles</Link>
              <ChevronRight className="w-3 h-3 opacity-50" />
              <span className="text-[#0a192f]">{vehicle.name}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{vehicle.category}</span>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                <span className="text-amber-500 text-sm">★</span> {vehicle.rating} <span className="font-medium text-slate-500">({vehicle.reviewsCount} Quotation Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Side: Gallery & Highlights */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image src={vehicle.gallery[activeImage]} alt={vehicle.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ghat Road Certified
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-blue-600" /> GPS Monitored
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Fleet (Est. 2018-19)
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {vehicle.gallery.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-20 md:h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 shadow-md' : 'border-transparent hover:border-slate-300'}`}
                  >
                    <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                    {idx === 0 && <div className="absolute bottom-1 left-1 text-[8px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Exterior</div>}
                    {idx === 1 && <div className="absolute bottom-1 left-1 text-[8px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Captain Seats</div>}
                    {idx === 2 && <div className="absolute bottom-1 left-1 text-[8px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Luggage Hold</div>}
                    {idx === 3 && <div className="absolute bottom-1 left-1 text-[8px] font-bold text-white bg-black/60 px-2 py-0.5 rounded">Cockpit</div>}
                  </button>
                ))}
              </div>

              {/* Highlights Row */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="flex-1 min-w-[150px] flex items-center gap-2 bg-blue-50/50 px-4 py-3 rounded-xl border border-blue-100">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Check className="w-3 h-3" /></div>
                  <span className="text-[10px] font-semibold text-slate-700 leading-tight">360° Sanitized before every departure</span>
                </div>
                <div className="flex-1 min-w-[150px] flex items-center gap-2 bg-blue-50/50 px-4 py-3 rounded-xl border border-blue-100">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Shield className="w-3 h-3" /></div>
                  <span className="text-[10px] font-semibold text-slate-700 leading-tight">Speed Governor Capped (80 km/h)</span>
                </div>
                <div className="flex-1 min-w-[150px] flex items-center gap-2 bg-blue-50/50 px-4 py-3 rounded-xl border border-blue-100">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><User className="w-3 h-3" /></div>
                  <span className="text-[10px] font-semibold text-slate-700 leading-tight">Reclining Row 2&3 Seats</span>
                </div>
              </div>
            </div>

            {/* Right Side: Info & Tariff */}
            <div className="lg:col-span-5 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-2">{vehicle.name}</h1>
              <h2 className="text-sm font-semibold text-blue-600 mb-4">{vehicle.subtitle}</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-8">{vehicle.longDesc}</p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-4 gap-3 mb-10">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl border border-slate-100 bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                    <feat.icon className="w-5 h-5 text-blue-600 mb-2" />
                    <span className="text-[10px] font-bold text-[#0a192f] leading-tight mb-1">{feat.text}</span>
                    <span className="text-[8px] text-slate-500">{feat.subtext}</span>
                  </div>
                ))}
              </div>

              {/* Tariff Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">TRANSPARENT PRICING</span>
                    <h3 className="text-lg font-bold text-[#0a192f]">Standard Tariff</h3>
                  </div>
                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">No Hidden Surcharges</span>
                </div>
                
                <div className="flex items-center justify-between bg-white border border-slate-100 p-4 rounded-2xl mb-6 shadow-sm">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-[#0a192f]">₹{vehicle.price}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase pb-1">/ KM (Outstation)</span>
                  </div>
                  <div className="w-px h-10 bg-slate-200 mx-2"></div>
                  <div className="text-right">
                    <span className="text-[9px] font-bold text-slate-500 uppercase block">City Package</span>
                    <span className="text-base font-bold text-blue-600 block">₹{vehicle.localPackage}</span>
                    <span className="text-[8px] text-slate-400">{vehicle.localHours}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-3 h-3 text-blue-500"/> Outstation Minimum Daily Run</div>
                    <span className="font-bold text-[#0a192f]">{vehicle.minRun} km / calendar day</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-600"><User className="w-3 h-3 text-blue-500"/> Driver Allowance (Day Trip)</div>
                    <span className="font-bold text-[#0a192f]">₹{vehicle.driverAllowance} / day (Included in city)</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-600"><Clock className="w-3 h-3 text-blue-500"/> Night Halt Batta (After 10:00 PM)</div>
                    <span className="font-bold text-[#0a192f]">₹{vehicle.nightBatta} / night</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-2 text-slate-600"><FileText className="w-3 h-3 text-blue-500"/> Toll, State Tax & Parking</div>
                    <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Actuals via FASTag</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/20">
                    <Car className="w-4 h-4" /> Book This Vehicle Now
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> WhatsApp Quote
                    </a>
                    <button onClick={() => setIsModalOpen(true)} className="py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Estimate Fare
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-medium px-2 pt-2">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Free Cancellation (48 Hrs)</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24/7 Booking Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Overview & Touring Experience */}
        <section className="py-20 bg-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-2">UNCOMPROMISING RIDE QUALITY</span>
              <h2 className="text-3xl font-bold text-[#0a192f] mb-4">Vehicle Overview & Touring Experience</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The {vehicle.name} is South India's most celebrated highway cruiser for a reason. Built on an indestructible ladder-frame chassis with double-wishbone front suspension, it absorbs high-speed expressway undulations and uneven mountain tarmac with zero cabin yaw or passenger fatigue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {vehicle.overview.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center ${idx === 0 ? 'bg-indigo-50 text-indigo-600' : idx === 1 ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {idx === 0 ? <Zap className="w-4 h-4" /> : idx === 1 ? <User className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a192f] mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-md w-fit">
                    <CheckCircle2 className={`w-3 h-3 ${idx === 0 ? 'text-indigo-500' : idx === 1 ? 'text-blue-500' : 'text-orange-500'}`} /> {item.tag}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#0a192f] text-sm shrink-0 px-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Best Suited For:
              </div>
              <div className="flex flex-wrap items-center gap-2 px-2">
                {vehicle.bestSuitedFor.map((suit, idx) => (
                  <span key={idx} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">{suit}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Elite Chauffeurs Banner */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-4 border-white shadow-lg shrink-0 relative">
              <Image src="/images/dest1.png" alt="Chauffeur" fill className="object-cover" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">RUDHRAN TAMIL NADU PROTOCOL</span>
              <h3 className="text-xl font-bold text-[#0a192f] mb-2">Elite Touring Chauffeurs Only</h3>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                We never outsource your safety to unverified freelance drivers. Our {vehicle.name} pilots have an average of 12+ years touring experience, speak English and South Indian regional languages, and follow non-smoking cabin mandates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-xl border border-blue-100">
                <Shield className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[9px] font-bold text-[#0a192f]">100% Police Verified</p>
                  <p className="text-[8px] text-slate-500">Background cleared</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-xl border border-blue-100">
                <Thermometer className="w-4 h-4 text-blue-600" />
                <div className="text-left">
                  <p className="text-[9px] font-bold text-[#0a192f]">Breathalyzer Certified</p>
                  <p className="text-[8px] text-slate-500">Pre-trip screening</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Alternative Vehicles */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block mb-1">EXPLORE SOUTH INDIA FLEET</span>
                <h2 className="text-2xl font-bold text-[#0a192f]">Alternative Touring Vehicles</h2>
              </div>
              <Link href="/vehicles" className="text-blue-600 text-xs font-bold hover:text-blue-700 flex items-center gap-1">
                View All Vehicles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alternatives.map(alt => (
                <Link href={`/vehicles/${alt.id}`} key={alt.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-[180px] bg-slate-100 overflow-hidden">
                    <Image src={alt.img} alt={alt.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[8px] font-bold uppercase px-2 py-1 rounded">
                      {alt.category.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-[#0a192f] text-lg">{alt.name}</h3>
                      <div className="text-right">
                        <span className="text-base font-bold text-blue-600">₹{alt.price}</span><span className="text-[10px] font-bold text-slate-400">/km</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 mb-4 line-clamp-1">{alt.desc}</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {alt.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-[9px] font-medium text-slate-600"><feat.icon className="w-3 h-3 text-slate-400"/> {feat.text}</div>
                      ))}
                    </div>
                    <div className="w-full py-2.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-xl text-[10px] font-bold transition-colors flex items-center justify-center border border-slate-100 group-hover:border-blue-100">
                      View {alt.name.split(' ')[1]} Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Custom Itinerary CTA */}
        <section className="bg-[#0a192f] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest block mb-2">DEDICATED CHENNAI TRAVEL DESK</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Multi-Day Itinerary for {vehicle.name}?</h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                Planning a custom Ooty-Coonoor tour, Madurai-Rameshwaram pilgrimage, or corporate pick-up sequence? Speak directly to our trip managers for fixed all-inclusive package pricing within 15 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a href="tel:+919840012345" className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20">
                <Phone className="w-4 h-4" /> +91 98400 12345
              </a>
              <a href="https://wa.me/919840012345" target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-white text-slate-800 hover:bg-slate-50 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-500" /> Chat on WhatsApp
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
