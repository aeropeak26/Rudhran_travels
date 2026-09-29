'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const [footerInfo, setFooterInfo] = useState({
    phone: '+91 98400 12345',
    email: 'info@rudhrantravels.com',
    address: '42, GST Road, Guindy, Chennai, Tamil Nadu 600032'
  });
  const [socialInfo, setSocialInfo] = useState({
    instagram: '#'
  });

  useEffect(() => {
    fetch('/api/general-settings')
      .then(res => res.json())
      .then(data => {
        if (data?.footer) setFooterInfo(data.footer);
        if (data?.social) setSocialInfo(data.social);
      })
      .catch(err => console.error('Error fetching Footer settings:', err));
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '/tour-packages' },
    { name: 'Car Services', href: '/#services' },
    { name: 'Rental Tariff', href: '/tariff' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/#contact' }
  ];

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 text-[11px] md:text-xs poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-slate-300">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="Rudhran Travels Logo" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 leading-relaxed pr-4">
              Premium car rental, outstation journeys, and curated tour packages across South India. Reliable vehicles, vetted professional drivers, and transparent pricing.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href={socialInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`transition-colors ${pathname === link.href ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 4: CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">CONTACT INFO</h4>
            
            <div className="space-y-3 text-slate-700">
              <a href={`tel:${footerInfo.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Phone className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span>{footerInfo.phone}</span>
              </a>

              <a href={`mailto:${footerInfo.email}`} className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Mail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span>{footerInfo.email}</span>
              </a>

              <div className="flex items-start space-x-3 text-slate-700 pr-4">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{footerInfo.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <div>
            Copyright © {new Date().getFullYear()} Rudhran Travels. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

