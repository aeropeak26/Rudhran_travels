'use client';

import React from 'react';

export default function AboutWhyChooseUs({ data }: { data?: any }) {
  const features = data?.features || [
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
    <section className="py-12 md:py-16 bg-white text-[#0f172a] poppins-regular border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 font-bold text-[9px] tracking-widest px-3 py-1.5 rounded-md mb-6 uppercase">
            {data?.badge || 'BUILT ON TRUST'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {data?.title || 'Why Customers Choose Us'}
          </h2>
          <p className="text-slate-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            {data?.description || 'Every booking comes backed with our unyielding commitment to safety, hygiene, and journey comfort.'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: any, idx: number) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative overflow-hidden group">
              
              {/* Background Number Watermark */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-50 transition-colors group-hover:text-blue-50/50 pointer-events-none select-none z-0 tracking-tighter">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <div className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-3">
                  {feature.badge}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
