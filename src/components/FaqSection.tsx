'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/rentalData';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about outstation taxi bookings, driver charges, fuel rules, and safety guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base font-bold text-white flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout box for more questions */}
        <div className="mt-12 text-center bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific custom route question?</h4>
            <p className="text-xs text-slate-400">Our customer support team is online 24/7 to assist with fare estimates.</p>
          </div>

          <a
            href="tel:+919876543210"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center space-x-2 transition-all hover:scale-105 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +91 98765 43210</span>
          </a>
        </div>

      </div>
    </section>
  );
}
