'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MapPin, Clock, Coffee, Car, Home, Leaf, Ship, Utensils, Sun, Train, Flower, Castle, Landmark, Waves, Star } from 'lucide-react';

interface PopularDestinationsProps {
  data?: any[];
  onSelectDestination: (dest: any) => void;
}

export default function PopularDestinations({ data, onSelectDestination }: PopularDestinationsProps) {
  const defaultDestinations = [
    {
      state: 'Tamil Nadu',
      status: 'Available Now',
      statusColor: 'bg-emerald-500',
      location: 'Kodaikanal, Tamil Nadu',
      title: 'Kodaikanal Pine & Lake Tour',
      price: '₹750',
      rating: 4.9,
      reviews: 240,
      image: '/images/dest1.png',
      features: [
        { icon: Clock, text: '3D / 2N', color: 'text-slate-400' },
        { icon: Coffee, text: 'Lake & Mist', color: 'text-amber-500' },
        { icon: Car, text: 'Cab Included', color: 'text-red-500' },
        { icon: Home, text: '3-Star Stay', color: 'text-orange-400' },
      ]
    },
    {
      state: 'Kerala',
      status: 'Trending',
      statusColor: 'bg-emerald-500',
      location: 'Munnar, Kerala',
      title: 'Munnar Misty Tea Plantation',
      price: '₹750',
      rating: 5.0,
      reviews: 310,
      image: '/images/dest2.png',
      features: [
        { icon: Clock, text: '4D / 3N', color: 'text-slate-400' },
        { icon: Leaf, text: 'Tea Gardens', color: 'text-green-500' },
        { icon: Car, text: 'Crysta Chauffeur', color: 'text-red-500' },
        { icon: Home, text: 'Resort Stay', color: 'text-orange-400' },
      ]
    },
    {
      state: 'Kerala',
      status: 'Bestseller',
      statusColor: 'bg-emerald-500',
      location: 'Alleppey, Kerala',
      title: 'Alleppey Luxury Houseboat...',
      price: '₹750',
      rating: 4.9,
      reviews: 195,
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: Clock, text: '2D / 1N', color: 'text-slate-400' },
        { icon: Ship, text: 'Private Cruise', color: 'text-red-400' },
        { icon: Utensils, text: 'All Meals', color: 'text-slate-400' },
        { icon: Sun, text: 'Sunset Deck', color: 'text-orange-500' },
      ]
    },
    {
      state: 'Tamil Nadu',
      status: 'Available Now',
      statusColor: 'bg-emerald-500',
      location: 'Ooty, Nilgiris',
      title: 'Ooty & Coonoor Heritage Trail',
      price: '₹750',
      rating: 4.8,
      reviews: 180,
      image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1565?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: Clock, text: '3D / 2N', color: 'text-slate-400' },
        { icon: Train, text: 'Toy Train', color: 'text-red-500' },
        { icon: Car, text: 'Cab Included', color: 'text-red-500' },
        { icon: Flower, text: 'Rose Gardens', color: 'text-pink-400' },
      ]
    },
    {
      state: 'Karnataka',
      status: 'Popular',
      statusColor: 'bg-emerald-500',
      location: 'Mysore, Karnataka',
      title: 'Royal Mysore Palace & Coorg...',
      price: '₹750',
      rating: 4.9,
      reviews: 220,
      image: 'https://images.unsplash.com/photo-1600011844415-dfdbb6349190?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: Clock, text: '4D / 3N', color: 'text-slate-400' },
        { icon: Castle, text: 'Heritage Palace', color: 'text-stone-500' },
        { icon: Coffee, text: 'Coffee Estate', color: 'text-amber-700' },
        { icon: Car, text: 'SUV Included', color: 'text-red-500' },
      ]
    },
    {
      state: 'Tamil Nadu',
      status: 'Spiritual',
      statusColor: 'bg-emerald-500',
      location: 'Madurai & Rameshwaram',
      title: 'Meenakshi & Pamban Island Tour',
      price: '₹750',
      rating: 5.0,
      reviews: 280,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: Clock, text: '2D / 1N', color: 'text-slate-400' },
        { icon: Landmark, text: 'Temple Darshan', color: 'text-red-500' },
        { icon: Waves, text: 'Pamban Sea Bridge', color: 'text-blue-500' },
        { icon: Car, text: 'AC Sedan', color: 'text-red-500' },
      ]
    }
  ];

  const destinations = data?.length === 6 ? data.map((d: any, i: number) => ({
    ...d,
    features: defaultDestinations[i].features.map((df, j) => ({
      ...df,
      text: d.features?.[j] || df.text
    }))
  })) : defaultDestinations;

  return (
    <section className="py-12 md:py-16 md: md: bg-white text-slate-900 poppins-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#fef3c7] text-[#d97706] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
            REGIONAL EXCURSIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-2">
            Popular Destinations
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Carefully timed road trips departing daily from Madurai city center.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <div 
              key={index}
              onClick={() => onSelectDestination(item)}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* Image Half */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                
                {/* Gradient Overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                    {item.state}
                  </span>
                  <span className={`${item.statusColor} text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm`}>
                    {item.status}
                  </span>
                </div>

                {/* Top Right Heart */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4 fill-current" />
                </div>

                {/* Bottom Left Location */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                {/* Bottom Right Indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1">
                  <div className="w-3 h-1 bg-[#fbbf24] rounded-full"></div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                </div>
              </div>

              {/* Content Half */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                
                {/* Title & Price */}
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="font-bold text-[#0f172a] text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="font-bold text-lg text-[#0f172a]">
                    {item.price}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  <div className="flex text-[#fbbf24] text-[10px]">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 ml-1">({item.rating})</span>
                  <span className="text-[11px] text-slate-400 font-medium">{item.reviews} Reviews</span>
                </div>

                <div className="h-px w-full bg-slate-100 mb-4 mt-auto"></div>

                {/* Features Row */}
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  {item.features.map((feat: any, i: number) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-500">
                      <feat.icon className={`w-3.5 h-3.5 ${feat.color}`} />
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
