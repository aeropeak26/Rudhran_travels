'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenBookingModal: (carOrDestination?: any) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '/tour-packages' },
    { name: 'Rental Tariff', href: '/tariff' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 poppins-regular ${
      isScrolled ? 'bg-white shadow-md py-1.5' : 'bg-white shadow-sm py-2 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <img 
            src="/images/logo.png" 
            alt="Rudhran Travels Logo" 
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: Book Now & ENQUIRY NOW & Dark Mode */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2 rounded-lg bg-[#d97706] hover:bg-orange-600 text-white font-medium text-[13px] transition-colors"
          >
            Book Now
          </button>

          <button 
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold text-[11px] uppercase tracking-wide transition-colors"
          >
            ENQUIRY NOW
          </button>

          <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center ml-2">
            <Moon className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-4 py-1.5 rounded-lg bg-[#d97706] text-white font-medium text-xs shadow"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 absolute w-full shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors border-b border-slate-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#d97706] text-white font-medium text-sm"
            >
              <span>Book Now</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs uppercase"
            >
              <span>Enquiry Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
