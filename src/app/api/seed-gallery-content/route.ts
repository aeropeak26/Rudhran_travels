import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import GalleryPageContent from '@/models/GalleryPageContent';

export async function GET() {
  try {
    await connectMongo();

    // Clear existing data to ensure a fresh seed
    await GalleryPageContent.deleteMany({});

    const initialContent = {
      hero: {
        title: 'Visual Chronicle: Journeys Crafted With Care',
        subtitle: 'MOMENTS CAPTURED ACROSS SOUTH INDIA',
        badge: 'HOME / VISUAL GALLERY',
        description: 'Explore authentic moments captured across 50,000+ happy journeys through misty tea hills, royal heritage corridors, coastal bridges, and our curated chauffeur arrivals across Tamil Nadu, Kerala, and Karnataka.',
        stats: [
          { icon: 'Clock', title: '14+ Years', subtitle: 'Trust & Legacy' },
          { icon: 'ShieldCheck', title: '100% Verified', subtitle: 'Commercial Fleet' },
          { icon: 'Star', title: '4.9/5 Rating', subtitle: '500+ Reviews' },
          { icon: 'Zap', title: 'Sanitized Fleet', subtitle: 'Pre-trip clean' }
        ]
      },
      gallery: [
        { title: 'Misty Mountain Expedition', desc: 'Pristine Innova Crysta & Force Urbania luxury fleet navigating misty hill ghats.', badge: 'CONVOY • MUNNAR HILLS', img: '/images/dest1.png' },
        { title: 'Heritage Hotel Welcome', desc: 'Uniformed chauffeur door-side service at luxury heritage', badge: '5-STAR HOSPITALITY', img: '/images/dest2.png' },
        { title: 'Precision Driving', desc: 'GPS-tracked executive cockpits', badge: 'COCKPIT GPS', img: '/images/dest1.png' },
        { title: '3-Generation Smiles', desc: 'Comfortable stops across tea estates', badge: 'FAMILY HOLIDAY', img: '/images/dest2.png' },
        { title: 'Pamban Sea Bridge Crossing', desc: 'Ocean breeze drive connecting mainland to holy Rameshwaram.', badge: 'COASTAL LANDMARK', img: '/images/dest1.png' },
        { title: 'Captain Seat Comfort', desc: 'Plush recliners, wood finishes, and dual AC chill on every journey.', badge: 'FIRST CLASS LUXURY', img: '/images/dest2.png' },
        { title: '3-Generation Smiles', desc: 'Comfortable stops across tea estates', badge: 'FAMILY HOLIDAY', img: '/images/dest2.png' },
        { title: 'Pamban Sea Bridge Crossing', desc: 'Ocean breeze drive connecting mainland to holy Rameshwaram.', badge: 'COASTAL LANDMARK', img: '/images/dest1.png' }
      ],
      feedback: [
        { name: 'Suresh Raghavan', title: 'Family Vacation to Ooty', initials: 'SR', quote: 'We booked the 5-day Munnar - Ooty circuit. Our driver Murugan was exceptional - very safe, highly professional. The Innova Crysta was spotless every single morning.' },
        { name: 'Ananya Kapoor', title: 'Corporate Delegate, Chennai', initials: 'AK', quote: 'Flawless execution for our board members from Chennai airport down to Pondicherry and Thanjavur. Punctuality was absolute. Cannot recommend the premium safety protocol and fleet standards enough.' },
        { name: 'Dr. M. Natarajan', title: 'Heritage Temple Tour', initials: 'MN', quote: 'We utilized their XL carrier Traveler for our family temple trip to Kumbakonam. These routes require skill, and our captain handled the 1,200 km circuit beautifully. Very responsive dispatch team.' },
      ]
    };

    await GalleryPageContent.create(initialContent);

    return NextResponse.json({ message: 'Gallery Page Content seeded successfully', data: initialContent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
