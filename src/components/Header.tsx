'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

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
    { name: 'Tariff', href: '#fleet' },
    { name: 'Service', href: '#about' },
    { name: 'Gallery', href: '#destinations' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 poppins-regular ${
      isScrolled ? 'bg-[#032880]/95 backdrop-blur-md shadow-xl py-3 border-b border-blue-900/50' : 'bg-[#032880] py-4 border-b border-blue-900/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo: RUDHRAN CAR TRAVELS */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="text-2xl font-normal tracking-wider text-white">
            RUDHRAN <span className="text-xs font-normal px-2 py-0.5 bg-orange-600 text-white rounded tracking-normal uppercase">CAR TRAVELS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-normal text-slate-200 hover:text-orange-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons: RESERVE NOW & ENQUIRY NOW */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-normal text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
          >
            RESERVE NOW
          </button>

          <button 
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-blue-950 font-normal text-xs uppercase tracking-wider shadow transition-all hover:scale-105"
          >
            ENQUIRY NOW
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-3.5 py-1.5 rounded-full bg-orange-500 text-white font-normal text-xs uppercase shadow"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#032880] border-b border-blue-900 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-normal text-slate-200 hover:bg-blue-900 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-blue-900 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-orange-500 text-white font-normal text-xs uppercase shadow"
            >
              <span>RESERVE NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
