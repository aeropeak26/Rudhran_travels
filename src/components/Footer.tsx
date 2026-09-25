'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070e17] text-slate-400 border-t border-slate-900 pt-16 pb-8 text-xs poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="text-xl font-black tracking-wider text-white">
              RUDHRAN <span className="text-xs font-bold px-2 py-0.5 bg-orange-600 text-white rounded tracking-normal uppercase">CAR TRAVELS</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Premium car rental, outstation journeys, and curated tour packages across South India. Reliable vehicles, vetted professional drivers, and transparent pricing.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <span className="text-[10px] text-slate-500 font-bold ml-2">Govt. Registered</span>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2 font-medium text-slate-300">
              {['Home', 'Tour Packages', 'Car Services', 'Rental Tariff', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR SERVICES */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">OUR SERVICES</h4>
            <ul className="space-y-2 font-medium text-slate-300">
              {['Car Rental', 'Outstation Travel', 'Tour Packages', 'Airport Transfers', 'Tempo Traveller'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">CONTACT INFO</h4>
            
            <div className="space-y-2.5 text-slate-300">
              <a href="tel:+919840012345" className="flex items-center space-x-2.5 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="font-bold">+91 98400 12345</span>
              </a>

              <a href="mailto:info@rudhrantravels.com" className="flex items-center space-x-2.5 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@rudhrantravels.com</span>
              </a>

              <div className="flex items-start space-x-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>42, GST Road, Guindy, Chennai, Tamil Nadu 600032</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            Copyright © {new Date().getFullYear()} Rudhran Travels. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
