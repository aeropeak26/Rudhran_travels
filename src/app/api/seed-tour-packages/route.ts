import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import TourPackage from '@/models/TourPackage';
import TourPageContent from '@/models/TourPageContent';
import { packagesData } from '@/data/packages';

export async function GET() {
  try {
    await connectToDatabase();

    // 1. Seed Tour Packages
    await TourPackage.deleteMany({});
    
    // Transform the static data slightly if needed, but it should mostly match
    // Note: The static data has `id`, Mongoose uses `_id`. We'll just insert it as is, Mongoose will auto-generate `_id`.
    const formattedPackages = packagesData.map(pkg => {
      const { id, ...rest } = pkg;
      return rest;
    });

    await TourPackage.insertMany(formattedPackages);

    // 2. Seed Tour Page Content
    await TourPageContent.deleteMany({});
    
    const initialContent = {
      heroImage: '/images/hill_station.png',
      badge: 'OUR TOUR PACKAGES',
      title: 'Discover Places Worth Remembering',
      description: 'Curated journeys, comfortable travel and unforgettable experiences across beautiful destinations in Tamil Nadu, Kerala, and Karnataka with our premium fleet.',
      features: [
        'Guaranteed Punctual Chauffeurs',
        '100% Tailored Itineraries',
        'Zero Hidden Costs'
      ]
    };

    await TourPageContent.create(initialContent);

    return NextResponse.json({ 
      message: 'SUCCESS! Tour Packages and Page Content seeded successfully.', 
      packagesCount: formattedPackages.length 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error seeding tour packages:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
