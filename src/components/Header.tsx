'use client';

import React, { useState, useEffect } from 'react';
import { Car, Menu, X, PhoneCall, ChevronRight, User } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: (carOrDestination?: any) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Tour Packages', href: '#destinations' },
    { name: 'Car Fleet', href: '#fleet' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Fare Estimator', href: '#fare-calculator' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3' : 'bg-slate-950 py-4 border-b border-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-amber-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-white flex items-center">
              AERO<span className="text-amber-500">DRIVE</span>
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-blue-600/30 text-blue-400 border border-blue-500/40 rounded">CAB</span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide font-medium">PREMIUM CAR & OUTSTATION RENTALS</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => onOpenBookingModal()}
            className="flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <User className="w-4 h-4 text-blue-400" />
            <span>Login / Register</span>
          </button>

          <button
            onClick={() => onOpenBookingModal()}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Book A Ride</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-3 py-1.5 rounded-lg bg-amber-500 text-white font-bold text-xs shadow"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href="tel:+919876543210"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline: +91 98765 43210</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow"
            >
              <span>Instant Online Booking</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
