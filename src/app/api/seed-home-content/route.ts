import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import HomePageContent from '@/models/HomePageContent';

export async function GET() {
  try {
    await connectMongo();
    
    // Clear existing
    await HomePageContent.deleteMany({});

    const defaultData = {
      hero: {
        badgeText: "MADURAI'S TRUSTED TRAVEL PARTNER",
        title: "Your Journey, \nOur Responsibility.",
        subtitle: "Safe, comfortable, and transparent cab rentals, temple circuits, and hill holiday packages originating from Madurai across Tamil Nadu and South India.",
        backgroundImage: "/images/Home/bg.png"
      },
      about: {
        image: "/images/dest1.png",
        experienceYears: "10+",
        subheading: "ABOUT RUDHRAN CAB TRAVELS",
        title: "Your Journey, \nOur Responsibility",
        subtitle: "Headquartered in Madurai, Rudhran Cab Travels was founded with a mission to eliminate the stress of unreliable outstation rentals and overpriced tourist services. Rudhran Cab Travels is committed to providing safe, comfortable, and reliable travel experiences from Madurai. From local trips and outstation journeys to customized tour packages, we ensure every customer travels with confidence, convenience, and peace of mind.",
        features: [
          "Professional Service",
          "Experienced Drivers",
          "Well Maintained Vehicles",
          "24/7 Support"
        ]
      },
      popularDestinations: [
        {
          state: 'Tamil Nadu', status: 'Available Now', statusColor: 'bg-emerald-500', location: 'Kodaikanal, Tamil Nadu',
          title: 'Kodaikanal Pine & Lake Tour', price: '₹750', rating: 4.9, reviews: 240, image: '/images/dest1.png',
          features: ['3D / 2N', 'Lake & Mist', 'Cab Included', '3-Star Stay']
        },
        {
          state: 'Kerala', status: 'Trending', statusColor: 'bg-emerald-500', location: 'Munnar, Kerala',
          title: 'Munnar Misty Tea Plantation', price: '₹750', rating: 5.0, reviews: 310, image: '/images/dest2.png',
          features: ['4D / 3N', 'Tea Gardens', 'Crysta Chauffeur', 'Resort Stay']
        },
        {
          state: 'Kerala', status: 'Bestseller', statusColor: 'bg-emerald-500', location: 'Alleppey, Kerala',
          title: 'Alleppey Luxury Houseboat...', price: '₹750', rating: 4.9, reviews: 195, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
          features: ['2D / 1N', 'Private Cruise', 'All Meals', 'Sunset Deck']
        },
        {
          state: 'Tamil Nadu', status: 'Available Now', statusColor: 'bg-emerald-500', location: 'Ooty, Nilgiris',
          title: 'Ooty & Coonoor Heritage Trail', price: '₹750', rating: 4.8, reviews: 180, image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1565?auto=format&fit=crop&w=800&q=80',
          features: ['3D / 2N', 'Toy Train', 'Cab Included', 'Rose Gardens']
        },
        {
          state: 'Karnataka', status: 'Popular', statusColor: 'bg-emerald-500', location: 'Mysore, Karnataka',
          title: 'Royal Mysore Palace & Coorg...', price: '₹750', rating: 4.9, reviews: 220, image: 'https://images.unsplash.com/photo-1600011844415-dfdbb6349190?auto=format&fit=crop&w=800&q=80',
          features: ['4D / 3N', 'Heritage Palace', 'Coffee Estate', 'SUV Included']
        },
        {
          state: 'Tamil Nadu', status: 'Spiritual', statusColor: 'bg-emerald-500', location: 'Madurai & Rameshwaram',
          title: 'Meenakshi & Pamban Island Tour', price: '₹750', rating: 5.0, reviews: 280, image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&w=800&q=80',
          features: ['2D / 1N', 'Temple Darshan', 'Pamban Sea Bridge', 'AC Sedan']
        }
      ],
      featureVehicles: [
        { name: 'Sedan', image: '/images/hero_car.png' },
        { name: 'SUV', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
        { name: 'Innova', image: '/images/hero_car.png' },
        { name: 'Innova Crysta', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
        { name: 'Tempo Traveller', image: '/images/hero_car.png' },
        { name: 'Chevrolet', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' }
      ],
      generalToyota: {
        title: "Toyota Innova Crysta",
        subtitle: "South India's most trusted executive long-distance cruiser, known for legendary ride comfort and safety.",
        ratingText: "4.9 (420+ trips)",
        outstationRate: "₹18",
        localRate: "₹3,800",
        minOutstation: "300 km",
        driverBatta: "Included",
        rentPerDay: "Rs. 2200"
      },
      tourPackages: [
        {
          badge: 'BESTSELLER', badgeColor: 'bg-[#fbbf24] text-amber-900', duration: '4D / 3N', region: 'KERALA HIGHLANDS',
          title: 'Munnar Tea Hills & Valleys', desc: 'Wander through emerald tea gardens, cascading waterfalls, and cool mountain peaks.', price: '₹13,500', priceUnit: '/ person', rating: '4.9 (420+ reviews)', image: '/images/dest2.png'
        },
        {
          badge: 'LUXURY STAY', badgeColor: 'bg-white text-slate-800', duration: '2D / 1N', region: 'KERALA COAST',
          title: 'Alleppey Houseboat Cruise', desc: 'Drift along tranquil palm-fringed canals on a private traditional luxury houseboat.', price: '₹15,200', priceUnit: '/ couple', rating: '5.0 (610+ reviews)', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'
        },
        {
          badge: 'POPULAR', badgeColor: 'bg-[#6366f1] text-white', duration: '3D / 2N', region: 'TAMIL NADU WESTERN GHATS',
          title: 'Kodaikanal Pine & Mist', desc: 'Breathe in fragrant pine woods, boating on the star-shaped lake and misty pillar rocks.', price: '₹11,800', priceUnit: '/ person', rating: '4.8 (380+ reviews)', image: '/images/dest1.png'
        },
        {
          badge: 'HILL STATION', badgeColor: 'bg-[#10b981] text-white', duration: '3D / 2N', region: 'QUEEN OF HILL STATIONS',
          title: 'Ooty & Coonoor Nilgiris', desc: 'Scenic Toy Train ride through Nilgiri mountains, botanical gardens, and sprawling tea estates.', price: '₹12,200', priceUnit: '/ person', rating: '4.9 (510+ reviews)', image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1565?auto=format&fit=crop&w=800&q=80'
        },
        {
          badge: 'HERITAGE TOUR', badgeColor: 'bg-[#fbbf24] text-amber-900', duration: '3D / 2N', region: 'KARNATAKA SPLENDOR',
          title: 'Royal Mysore Palace', desc: 'Witness the majestic golden illuminated royal palace, Indo-Saracenic grandeur, and Chamundi hills.', price: '₹14,900', priceUnit: '/ person', rating: '4.9 (490+ reviews)', image: 'https://images.unsplash.com/photo-1600011844415-dfdbb6349190?auto=format&fit=crop&w=800&q=80'
        },
        {
          badge: 'SPIRITUAL CIRCUIT', badgeColor: 'bg-[#ef4444] text-white', duration: '3D / 2N', region: 'ANCIENT TEMPLES & SEA',
          title: 'Madurai & Rameshwaram', desc: 'Historic towering temple gopurams, ancient spiritual rituals, and scenic Pamban sea bridge.', price: '₹13,800', priceUnit: '/ person', rating: '4.9 (340+ reviews)', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?auto=format&fit=crop&w=800&q=80'
        }
      ],
      whyTravelWithUs: {
        title: "Simplifying Travel with Trust",
        subtitle: "Trusted service, comfortable vehicles, experienced drivers, and customer-<br className=\"hidden md:block\"/>first support.",
        bullets: [
          "Enjoy the comfort of flexible doorstep pickup & drop",
          "Access a diverse fleet of economy, SUV, & executive sedans",
          "Choose from daily, weekly, or custom monthly tour packages",
          "Zero hidden fees with clear, all-inclusive kilometer billing"
        ]
      },
      rideExperiences: [
        { title: 'Alpine Scenic Ride', sub: 'Private mountain transfer', image: '/images/dest2.png' },
        { title: 'Coastal Chauffeur', sub: 'Amalfi coastal touring', image: '/images/dest1.png' },
        { title: 'VIP Jet Escort', sub: 'Tarmac connection', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' },
        { title: 'Historic City Arrival', sub: 'London City transit', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80' }
      ]
    };

    const seeded = await HomePageContent.create(defaultData);
    
    return NextResponse.json({ message: 'Home page content seeded successfully', data: seeded });
  } catch (error) {
    console.error('Error seeding HomePageContent:', error);
    return NextResponse.json({ error: 'Failed to seed content' }, { status: 500 });
  }
}
