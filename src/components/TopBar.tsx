'use client';

import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-blue-950 text-blue-100 text-xs py-2.5 px-4 border-b border-blue-900 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold">+91 98765 43210</span>
          </a>
          <a href="mailto:support@aerodrive.in" className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>support@aerodrive.in</span>
          </a>
          <div className="flex items-center space-x-2 text-blue-200">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>24/7 Outstation & Local Helpline</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Hidden Charges</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-200">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Tamil Nadu & South India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
