'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-10 md:right-6 md:bottom-12 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current" />
      </a>
      <a
        href="tel:+919876543210"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Call Support"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current" />
      </a>
    </div>
  );
}
