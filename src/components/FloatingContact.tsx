'use client';

import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function FloatingContact() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }
  return (
    <div className="fixed right-4 bottom-6 md:right-6 md:bottom-8 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-2xl hover:shadow-green-500/30 transition-transform duration-300 hover:scale-110 group relative"
        title="WhatsApp Support"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9 relative z-10" />
      </a>
      <a
        href="tel:+919876543210"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-transform duration-300 hover:scale-110 ml-1 md:ml-1"
        title="Call Support"
      >
        <FaPhoneAlt className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
}
