'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, Clock, Car, Users, BadgeCheck, Shield, Smile, Award, 
  MapPin, Route, Briefcase, Plane, Users2, Key, Phone, MessageCircle 
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero Banner */}
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <Image 
            src="/images/dest2.png" 
            alt="Scenic road" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-xs md:text-sm font-medium tracking-widest text-blue-300 uppercase mb-6">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="opacity-50">/</span>
              <span className="text-white">ABOUT US</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Your Journey, Our Commitment
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-3xl mx-auto">
              Reliable transit services designed for exceptional comfort, safety, and convenience across South India and beyond.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>Well-Maintained Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 
                <span>24/7 Trip Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Your Trusted Travel Partner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/hero_car.png" 
                  alt="Travel Partner" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Certified Services</div>
                    <div className="text-xs text-slate-500 font-medium">Government Approved Travel Partner</div>
                  </div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="space-y-6">
                <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase">ABOUT US</div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Your Trusted Travel Partner</h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    For over a decade, Rudhran Travels has been a symbol of hospitality, trust, and quality in the travel industry. We are more than just a transportation provider; we are your dedicated travel partners. With an uncompromising focus on passenger safety, comfort, and reliability, we ensure that every journey you take with us is smooth, hassle-free, and memorable.
                  </p>
                  <p>
                    Whether it's a quick outstation trip, a detailed multi-city tour, or a seamless airport transfer, our well-maintained fleet of vehicles and experienced, courteous drivers are always ready to exceed your expectations.
                  </p>
                </div>
                
                <ul className="space-y-4 py-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">Personalized travel solutions tailored to your individual needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">A diverse fleet of vehicles ranging from comfortable sedans to spacious SUVs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm md:text-base font-medium text-slate-700">Verified and professional drivers committed to your safety.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
                  >
                    Book A Ride
                  </button>
                  <Link 
                    href="/#packages" 
                    className="px-8 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full font-medium text-sm transition-all hover:border-slate-300"
                  >
                    View Tour Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stats Section */}
        <section className="py-12 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">10+</h3>
                <p className="text-sm font-semibold text-slate-900">Years Experience</p>
                <p className="text-xs text-slate-500 leading-relaxed">Over a decade of providing reliable transportation services across South India.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-2">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">5,000+</h3>
                <p className="text-sm font-semibold text-slate-900">Happy Customers</p>
                <p className="text-xs text-slate-500 leading-relaxed">Consistently delivering smiles through exceptional travel experiences and service.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">100+</h3>
                <p className="text-sm font-semibold text-slate-900">Total Vehicles</p>
                <p className="text-xs text-slate-500 leading-relaxed">A wide range of well-maintained cars, from economy hatchbacks to premium SUVs.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-sm font-semibold text-slate-900">Expert Drivers</p>
                <p className="text-xs text-slate-500 leading-relaxed">Highly trained, verified, and professional chauffeurs dedicated to your safety.</p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Making Every Journey Better */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">OUR MISSION</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Making Every Journey Better</h2>
              <p className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">At Rudhran Travels, our core philosophy revolves around exceeding customer expectations at every turn.</p>
            </div>
            
            <div className="bg-[#07132b] rounded-[2.5rem] p-10 md:p-20 text-center text-white mb-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              
              <div className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-8 relative z-10">OUR COMMITMENT</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl mx-auto relative z-10 italic">
                "Our mission is to provide safe, comfortable, reliable, and affordable travel experiences while delivering exceptional customer service, transparent pricing, and unforgettable memories for every traveler."
              </h3>
              <p className="text-slate-400 mt-8 text-sm font-medium tracking-wide relative z-10">— The Rudhran Travels Team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <Shield className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center justify-between">
                  Safety First 
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full uppercase tracking-wider">Priority</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rigorous vehicle maintenance protocols and comprehensive background checks for all drivers to ensure your complete peace of mind on every journey.
                </p>
                <div className="mt-6">
                  <Link href="/#safety" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">Learn More &rarr;</Link>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <Smile className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center justify-between">
                  Guest Delight
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full uppercase tracking-wider">Promise</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every customer is our guest. We strive to provide a warm, courteous, and highly responsive travel experience that makes you feel valued from booking to drop-off.
                </p>
                <div className="mt-6">
                  <Link href="/#reviews" className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">Read Reviews &rarr;</Link>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-800/30">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center justify-between">
                  Uncompromising Integrity
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Honest pricing with zero hidden fees. We believe in building trust through complete transparency and ethical business practices in all our services.
                </p>
                <div className="mt-6">
                  <Link href="/#pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1">View Pricing &rarr;</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Everything We Offer */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">PREMIUM SERVICES</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Everything We Offer</h2>
              <p className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Comprehensive transportation solutions tailored to meet your diverse travel requirements across the region.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Light Card 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Local Transportation</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">Explore the city with ease. Our local cabs are available for full-day or half-day rentals, perfect for shopping, meetings, or sightseeing.</p>
              </div>

              {/* Light Card 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Route className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Outstation Trips</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">Comfortable rides for out-of-town journeys. Enjoy well-maintained vehicles and experienced drivers for safe highway travel.</p>
              </div>

              {/* Dark Card 1 (Airport) */}
              <div className="bg-[#07132b] p-8 rounded-[2rem] text-white relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" alt="Airport" fill className="object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-bold px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full uppercase tracking-wider inline-block mb-6 border border-blue-500/30">
                    Popular Request
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Airport Pick-up & Drop</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">Punctual and reliable transfers to and from the airport. Never miss a flight with our prompt service and real-time tracking.</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium transition-colors">
                    Book Airport Transfer
                  </button>
                </div>
              </div>

              {/* Dark Card 2 (Corporate) */}
              <div className="bg-[#121a2f] p-8 rounded-[2rem] text-white relative overflow-hidden group shadow-xl lg:row-span-2 flex flex-col">
                <div className="text-[10px] font-bold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full uppercase tracking-wider inline-block mb-6 border border-amber-500/30 self-start">
                  Business Services
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Corporate Travel</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                  Tailored transportation solutions for businesses. We offer employee transit, executive pick-ups, and long-term vehicle leasing with dedicated account management.
                </p>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> <span className="text-xs">Monthly Billing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> <span className="text-xs">Priority Support</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors">
                  Contact for Corporate Deals
                </button>
              </div>

              {/* Light Card 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Chauffeur Services</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">Hire professional drivers for your own car. Experienced, verified chauffeurs for daily commute, outstation trips, or special events.</p>
              </div>

              {/* Light Card 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all group lg:col-span-1">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-6">
                   <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Group & Event Travel</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">Spacious TTs and buses for family functions, weddings, corporate outings, and educational tours.</p>
                <Link href="/#fleet" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">View Large Vehicles &rarr;</Link>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Why Customers Choose Us (Static Layout matching image) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">OUR CORE VALUES</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Why Customers Choose Us</h2>
              <p className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Built on a foundation of trust, reliability, and excellence. Here is what makes us different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {[
                { 
                  id: "01", 
                  title: "Reliable Service", 
                  desc: "Punctuality is our promise. Count on us for timely pickups and drops without any last-minute cancellations." 
                },
                { 
                  id: "02", 
                  title: "Transparent Pricing", 
                  desc: "No hidden charges, no surge pricing. What you see is exactly what you pay for your complete journey." 
                },
                { 
                  id: "03", 
                  title: "Expert Chauffeurs", 
                  desc: "Professional, courteous, and highly experienced drivers who know the routes and prioritize your safety." 
                },
                { 
                  id: "04", 
                  title: "Clean & Well-Maintained", 
                  desc: "Every vehicle undergoes strict cleaning and mechanical checks before every single trip." 
                },
                { 
                  id: "05", 
                  title: "Flexible Travel Options", 
                  desc: "Customizable planning to suit your schedule. From hourly rentals to multi-day packages, we accommodate your needs." 
                },
                { 
                  id: "06", 
                  title: "Dedicated Support", 
                  desc: "24/7 customer assistance. Our support team is always ready to resolve queries and assist you during your trip." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 relative overflow-hidden group hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-4 right-6 text-6xl font-bold text-slate-200/50 group-hover:text-blue-100 transition-colors pointer-events-none">
                    {item.id}
                  </div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3 relative z-10">CORE STRENGTH</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* 7. CTA Banner */}
        <CtaBanner onOpenBookingModal={() => setIsModalOpen(true)} />

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
