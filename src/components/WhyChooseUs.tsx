'use client';

import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: '01',
      badge: 'PUNCTUALITY GUARANTEE',
      title: 'Reliable Service',
      desc: 'Guaranteed vehicle allocation and prompt on-time pickups with active GPS live dispatch and travel monitoring.',
    },
    {
      id: '02',
      badge: 'ZERO HIDDEN COSTS',
      title: 'Transparent Pricing',
      desc: 'Zero hidden surcharges, comprehensive fare breakdown upfront, and standardized interstate permit guidelines.',
    },
    {
      id: '03',
      badge: 'VERIFIED CAPTAINS',
      title: 'Experienced Drivers',
      desc: 'Courteous, polite, verified highway specialists fluent in local dialects and seasoned with mountainous terrain expertise.',
    },
    {
      id: '04',
      badge: 'STERILIZED CABINS',
      title: 'Clean & Well-Maintained',
      desc: 'Daily 32-point safety audits, spotless upholstery, fresh car fragrance, and powerful multi-row climate control.',
    },
    {
      id: '05',
      badge: 'MODULAR BOOKINGS',
      title: 'Flexible Travel Options',
      desc: 'Customizable sightseeing pauses, seamless itinerary adjustments on-the-go, and vehicle swaps when plans change.',
    },
    {
      id: '06',
      badge: 'HUMAN ASSISTANCE',
      title: 'Dedicated Support',
      desc: '24/7 dedicated travel concierge desk ready to assist you instantly via WhatsApp and direct helpline calls.',
    }
  ];

  return (
    <section className="py-24 bg-white poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-[#f3f7fe] text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">
            BUILT ON TRUST
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a192f]">
            Why Customers Choose Us
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Every booking comes backed with our unyielding commitment to safety, hygiene, and journey comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white border border-slate-100 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Number Watermark */}
              <div className="absolute top-6 right-8 text-6xl font-bold text-slate-50 group-hover:text-blue-50/50 transition-colors pointer-events-none select-none">
                {card.id}
              </div>
              
              <div className="relative z-10">
                <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-3">
                  {card.badge}
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
