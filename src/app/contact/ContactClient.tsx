'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { 
  Phone, MapPin, Mail, ShieldCheck, Clock, ArrowRight, Map, Star, MessageCircle
} from 'lucide-react';

export default function ContactClient({ initialData }: { initialData: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactData, setContactData] = useState<any>(initialData);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'South India Tour Package (Ooty / Munnar / Kodaikanal)',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pickupLocation: 'Contact Form',
          dropLocation: formData.enquiryType,
          pickupDate: 'N/A',
          pickupTime: 'N/A'
        })
      });
      if (!res.ok) throw new Error('Failed to submit request');
      
      toast.success('Your message has been sent successfully! Our travel planner will contact you shortly.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: 'South India Tour Package (Ooty / Munnar / Kodaikanal)',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('There was an issue submitting your request. Please try contacting us directly on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      <TopBar />
      <Header onOpenBookingModal={() => setIsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-16 md: relative w-full h-[500px] bg-[#0c1222] overflow-hidden flex flex-col justify-center items-center text-center">
          {contactData?.backgroundImage ? (
            <>
              <img src={contactData.backgroundImage} alt="Contact background" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
            </>
          ) : (
            <>
              {/* Background Gradients & Patterns */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e1438] via-[#0c1222] to-[#0c1222] z-0"></div>
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#4c1d95_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#1e3a8a_0%,transparent_50%)] z-0"></div>
              {/* Network-like subtle texture using SVG or CSS - using a simple dotted grid as fallback */}
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            </>
          )}
          
          <div className="relative z-10 max-w-3xl px-4 mt-10">
            <div className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest mb-6">HOME <span className="text-slate-500 mx-2">/</span> CONTACT US</div>
            <div className="bg-white/10 border border-white/10 text-white text-[9px] font-bold uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span> CONTACT OUR DISPATCH DESK
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Contact Us</h1>
            <p className="text-[13px] text-slate-300 leading-relaxed max-w-xl mx-auto">
              Reach our 24/7 Chennai operations desk for outstation chauffeur bookings, corporate luxury fleet, and bespoke South India tour itineraries.
            </p>
          </div>
        </section>

        {/* 2. Main Split Section */}
        <section className="py-12 md:py-16 md: md: bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              
               {/* Left Col - Contact Info */}
               <div className="lg:w-5/12 pt-4">
                  <div className="bg-amber-100 text-amber-700 text-[9px] font-bold uppercase px-3 py-1.5 rounded-full inline-flex mb-8 tracking-widest">
                    <span className="mr-1">★</span> GET IN TOUCH
                  </div>
                  <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0f172a] mb-6 tracking-tight leading-tight">We are always ready to help you and answer your questions</h2>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-10">
                    Whether you are scheduling an outstation corporate trip across Tamil Nadu, planning a scenic family holiday to Munnar and Ooty, or reserving an airport pickup in Chennai, our concierge travel advisors are on standby 24 hours a day, 7 days a week.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">CALL CENTER</h4>
                        <p className="text-[14px] font-bold text-[#0f172a] tracking-wide">
                          {(() => {
                            const p1 = contactData?.callCenter?.phone1 || '+91 8760380485';
                            const p2 = contactData?.callCenter?.phone2 || '';
                            return (
                              <>
                                {p1}
                                {p2 && p2 !== p1 && (
                                  <>
                                    <br />
                                    {p2}
                                  </>
                                )}
                              </>
                            );
                          })()}
                        </p>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-amber-50 group-hover:bg-amber-500 group-hover:text-white transition-colors text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">OUR LOCATION</h4>
                        <p className="text-[13px] font-medium text-slate-700 leading-relaxed whitespace-pre-wrap">{contactData?.location?.address || '216, E Veli St,\nKamarajar Salai, Madurai 625001'}</p>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">EMAIL</h4>
                        <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
                          {(() => {
                            const e1 = contactData?.email?.email1 || 'madurairudhrantravels@gmail.com';
                            const e2 = contactData?.email?.email2 || '';
                            return (
                              <>
                                {e1}
                                {e2 && e2 !== e1 && (
                                  <>
                                    <br />
                                    {e2}
                                  </>
                                )}
                              </>
                            );
                          })()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                       <div className="bg-blue-50 p-2 rounded-lg"><ShieldCheck className="w-4 h-4 text-blue-500" /></div>
                       <div>
                         <h5 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-widest mb-0.5">VERIFIED CHAUFFEURS</h5>
                         <p className="text-[9px] text-slate-500">Commercial Badge & Route Trained</p>
                       </div>
                    </div>
                    <div className="flex-1 bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                       <div className="bg-amber-50 p-2 rounded-lg"><Clock className="w-4 h-4 text-amber-500" /></div>
                       <div>
                         <h5 className="text-[9px] font-bold text-[#0f172a] uppercase tracking-widest mb-0.5">PUNCTUALITY ASSURED</h5>
                         <p className="text-[9px] text-slate-500">Real-time GPS Tracking</p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Right Col - Form */}
               <div className="lg:w-7/12">
                  <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 relative overflow-hidden">
                     <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Get In Touch</h3>
                     <p className="text-[12px] text-slate-500 leading-relaxed mb-8 max-w-md">Submit your travel details, vehicle requirements, or South India itinerary ideas, and a travel planner will call within 15 minutes.</p>
                     
                     <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                       <div className="space-y-2">
                         <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">FULL NAME</label>
                         <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Ramesh Sundaram" className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 md:py-3.5 text-[13px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                         <div className="space-y-2">
                           <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">EMAIL ADDRESS</label>
                           <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="booking@example.com" className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 md:py-3.5 text-[13px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">WHATSAPP NUMBER</label>
                           <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 8760380485" className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 md:py-3.5 text-[13px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
                         </div>
                       </div>
                       
                       <div className="space-y-2">
                         <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">ENQUIRY TYPE / SERVICE</label>
                         <div className="relative">
                           <select value={formData.enquiryType} onChange={e => setFormData({...formData, enquiryType: e.target.value})} className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 md:py-3.5 text-[13px] text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none shadow-sm cursor-pointer">
                             <option>South India Tour Package (Ooty / Munnar / Kodaikanal)</option>
                             <option>Outstation Journey (One-way / Round-trip)</option>
                             <option>Airport Transfer & Dispatch</option>
                             <option>Corporate Fleet Booking</option>
                           </select>
                           <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </div>
                         </div>
                       </div>
                       
                       <div className="space-y-2">
                         <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">MESSAGE / ITINERARY REQUIREMENTS</label>
                         <textarea rows={3} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your travel dates, vehicle preference, or custom itinerary..." className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-2.5 md:py-3.5 text-[13px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-sm"></textarea>
                       </div>
                       
                       <button type="submit" disabled={submitting} className="py-3.5 px-8 bg-[#0f172a] hover:bg-blue-900 text-white rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-lg w-auto min-w-[200px] disabled:opacity-50">
                         {submitting ? 'SENDING...' : 'SEND A MESSAGE'} <ArrowRight className="w-4 h-4" />
                       </button>
                     </form>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* 3. Operations Hub Map Section */}
        <section className="py-12 md:py-16 md: md: bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <div>
                 <div className="flex items-center gap-2 mb-4">
                   <Map className="w-4 h-4 text-blue-600" />
                   <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">FLEET DEPLOYMENT & GRAND DISPATCH</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 tracking-tight leading-tight">Madurai Operations Hub</h2>
                 <p className="text-[13px] text-slate-500 max-w-xl leading-relaxed">Positioned strategically in Madurai for immediate deployment across the city and Madurai Airport.</p>
              </div>
              <a href="https://www.google.com/maps/place/Madurai+Rudhran+Travels/@9.9205879,78.1225256,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00c531325f7d89:0x90b6c198192a651d!8m2!3d9.9205879!4d78.1251005!16s%2Fg%2F11rq1m4yq0?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold px-5 py-3.5 rounded-xl transition-colors flex items-center gap-2 shadow-sm">
                 <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>

            <div className="w-full h-[450px] rounded-[2rem] overflow-hidden relative shadow-lg border border-slate-100 mb-8 bg-[#f8fafc]">
               {/* Map overlay iframe */}
               <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Madurai%20Rudhran%20Travels&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale opacity-50 mix-blend-multiply"></iframe>
               
               {/* Center Marker Pin */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                  <div className="w-12 h-12 bg-[#0f172a] rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center mb-2 relative">
                     <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                     <div className="w-3.5 h-3.5 bg-[#f97316] rounded-full"></div>
                  </div>
                  <div className="bg-[#0f172a] text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">Rudhran Travels Hub</div>
               </div>

               {/* Floating Info Card */}
               <div className="absolute top-6 left-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 max-w-[280px] z-20 hover:scale-105 transition-transform cursor-pointer">
                 <div className="flex items-start justify-between mb-2">
                   <h4 className="text-[10px] font-bold text-[#0f172a] uppercase tracking-wider leading-tight">RUDHRAN TRAVELS HEAD OFFICE</h4>
                   <div className="bg-blue-50 p-1 rounded-full"><ArrowRight className="w-3 h-3 text-blue-600 -rotate-45" /></div>
                 </div>
                 <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">{contactData?.location?.address || '216, E Veli St, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001'}</p>
                 <div className="flex items-center gap-1.5 text-[10px] text-slate-800 font-bold mb-3">
                   4.9 <div className="flex gap-0.5"><Star className="w-3 h-3 fill-amber-400 text-amber-400"/><Star className="w-3 h-3 fill-amber-400 text-amber-400"/><Star className="w-3 h-3 fill-amber-400 text-amber-400"/><Star className="w-3 h-3 fill-amber-400 text-amber-400"/><Star className="w-3 h-3 fill-amber-400 text-amber-400"/></div> <span className="text-slate-400 font-normal">(500+ reviews)</span>
                 </div>
                 <a href="https://www.google.com/maps/place/Madurai+Rudhran+Travels/@9.9205879,78.1225256,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00c531325f7d89:0x90b6c198192a651d!8m2!3d9.9205879!4d78.1251005!16s%2Fg%2F11rq1m4yq0?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1">View on Google Maps <ArrowRight className="w-3 h-3" /></a>
               </div>
            </div>


          </div>
        </section>

        {/* 4. Bottom CTA Section */}
        <section className="py-12 md:py-16 md: md: bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f172a] rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
               {/* Decorative Gradient */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#1e3a8a_0%,transparent_50%)] opacity-50 z-0"></div>
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 z-0"></div>
               
               <div className="relative z-10 max-w-xl text-center md:text-left">
                 <span className="text-[9px] font-bold text-[#f97316] uppercase tracking-widest block mb-4">READY FOR DEPARTURE?</span>
                 <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 tracking-tight leading-tight">Reserve Your Chauffeur in Under 3 Minutes</h2>
                 <p className="text-[13px] text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
                   Fast-track direct dispatch booking. Instant digital receipt and driver mapping.
                 </p>
               </div>
               
               <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                 <a href={`tel:${contactData?.callCenter?.phone1?.replace(/[^0-9+]/g, '') || '+918760380485'}`} className="px-8 py-4.5 bg-[#2563eb] hover:bg-blue-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                   <Phone className="w-4 h-4 fill-white" /> CALL FAST DESK
                 </a>
                 <a href={`https://wa.me/${contactData?.callCenter?.phone1?.replace(/[^0-9]/g, '') || '918760380485'}`} className="px-8 py-4.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                   <MessageCircle className="w-4 h-4" /> WHATSAPP TOLL-FREE
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
