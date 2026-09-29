import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import AboutPageContent from '@/models/AboutPageContent';

export async function GET() {
  try {
    await connectMongo();

    await AboutPageContent.deleteMany({});

    const initialContent = {
      hero: {
        title: 'Your Journey, Our Commitment',
        description: 'Reliable travel services designed around your comfort, safety, and convenience across South India and beyond.',
        heroImage: '/images/dest2.png',
        points: ['100% Sanitized Fleet', 'Verified Chauffeurs', 'Transparent Pricing', '24/7 Trip Support']
      },
      whoWeAre: {
        badge: 'WHO WE ARE',
        title: 'Your Trusted Travel Partner',
        description1: "Established with a passion for exceptional hospitality and seamless mobility, Rudhran Travels has evolved into South India's premier chauffeured transportation and curated tour specialist. We blend modern fleet management with personalized guest care, ensuring every mile feels safe, comfortable, and truly memorable.",
        description2: 'Whether you are coordinating multi-day hill station tours, interstate pilgrimage routes, fast-paced corporate airport transits, or comfortable family vacations, our team executes every detail with precision and genuine courtesy.',
        image: '/images/hero_car.png',
        floatingCard: {
          badge: 'CERTIFIED AGENCY',
          description: 'Government Registered & Fully Insured Fleet'
        },
        points: [
          'Personalized itineraries customized to your schedule and pacing',
          'Meticulously inspected, spotless, late-model fleet of sedans, SUVs & tempo travellers',
          'Veteran chauffeurs with deep ghat-road and interstate route mastery'
        ],
        stats: [
          { icon: 'Calendar', number: '10+', title: 'Years Experience', desc: 'A decade of punctuality and road excellence across Tamil Nadu, Kerala, Karnataka, and Andhra.' },
          { icon: 'Smile', number: '5,000+', title: 'Happy Customers', desc: 'Over 98% 5-star ratings from families, solo explorers, and corporate executives.' },
          { icon: 'Map', number: '100+', title: 'Tour Packages', desc: 'Handcrafted journeys to hill stations, coastal gems, and historic temple circuits.' },
          { icon: 'ArrowDown', number: '50+', title: 'Modern Vehicles', desc: 'From premium sedans and Toyota Innova Crystas to luxury Force Urbania cruisers.' }
        ]
      },
      ourPurpose: {
        badge: 'OUR PURPOSE',
        title: 'Making Every Journey Better',
        description: 'A customer-centric approach rooted in hospitality, reliability, and unquestionable safety standards.',
        missionQuote: '“Our mission is to provide safe, comfortable, reliable, and affordable travel experiences while delivering exceptional customer service, transparent billing, and unforgettable memories for every traveler.”',
        cards: [
          {
            title: 'Safety First',
            badge: 'Zero Tolerance',
            desc: 'Rigorous 54-point vehicle inspections before every trip, speed-governed driving, round-the-clock emergency dispatch, and verified captains.',
            footerLeft: 'Verified Protocol',
            footerRight: '24/7 Monitored'
          },
          {
            title: 'Guest Delight',
            badge: 'Premium Care',
            desc: 'Thoughtful courtesies from illuminated cars and high-speed multi-device charging ports to flexible pause-and-explore pitstop stops without rush.',
            footerLeft: 'Complimentary Water',
            footerRight: 'Fast Charging'
          },
          {
            title: 'Uncompromising Integrity',
            badge: '100% Honest',
            desc: 'Upfront per-kilometer billing, automated digital toll logs, transparent FASTag records, and absolutely zero surprise hidden surcharges.',
            footerLeft: 'Automated GST Invoice',
            footerRight: 'Exact Metre'
          }
        ]
      },
      tailoredMobility: {
        badge: 'TAILORED MOBILITY',
        title: 'Everything We Offer',
        description: 'Tailored mobility solutions crafted for individuals, families, and enterprise teams across South India.',
        card1: { title: 'Local Transportation', desc: 'Hourly city rides, business commutes, shopping trips, and point-to-point transfers with courteous chauffeurs.' },
        card2: { title: 'Outstation Trips', desc: 'Stress-free round trips and multi-day vacations across South India with seasoned highway and ghat-road drivers.' },
        card3VIP: { title: 'Airport VIP Meet & Greet', desc: 'Punctual terminal curbside receiving with custom iPad name boards, active flight telemetry sync, and luggage trolley handling.', featureTitle: 'Auto-Buffer +60m', featureDesc: 'Pickup auto-adjusts if your flight is delayed. Zero wait surcharges.' },
        card4VIP: { title: 'Airport VIP Meet & Greet', desc: 'Punctual terminal curbside receiving with custom iPad name boards, active flight telemetry sync, and luggage trolley handling.', featureTitle: 'Auto-Buffer +60m', featureDesc: 'Pickup auto-adjusts if your flight is delayed. Zero wait surcharges.' },
        card5: { title: 'Corporate Travel', desc: 'Executive mobility management, VIP delegation handling, GST compliant invoicing, and dedicated enterprise accounts.' },
        card6: { title: 'Group & Event Travel', desc: 'Spacious 12-17 seater luxury Force Urbanias and Tempo Travellers for weddings, pilgrimages, and family reunions.' },
        card7: { title: 'Group & Event Travel', desc: 'Spacious 12-17 seater luxury Force Urbanias and Tempo Travellers for weddings, pilgrimages, and family reunions.' },
        bottomCard: { title: 'Chauffeur-Driven Vehicle Rental', desc: 'Custom daily, weekly, or monthly rentals across executive sedans, Toyota Crystas, Hycross, and luxury SUVs.' }
      },
      whyChooseUs: {
        badge: 'BUILT ON TRUST',
        title: 'Why Customers Choose Us',
        description: 'Every booking comes backed with our unyielding commitment to safety, hygiene, and journey comfort.',
        features: [
          { title: 'Reliable Service', badge: 'PUNCTUALITY GUARANTEE', desc: 'Guaranteed vehicle allocation and prompt on-time pickups with active GPS live dispatch and travel monitoring.' },
          { title: 'Transparent Pricing', badge: 'ZERO HIDDEN COSTS', desc: 'Zero hidden surcharges, comprehensive fare breakdown upfront, and standardized interstate permit guidelines.' },
          { title: 'Experienced Drivers', badge: 'VERIFIED CAPTAINS', desc: 'Courteous, polite, verified highway specialists fluent in local dialects and seasoned with mountainous terrain expertise.' },
          { title: 'Clean & Well-Maintained', badge: 'STERILIZED CABINS', desc: 'Daily 32-point safety audits, spotless upholstery, fresh car fragrance, and powerful multi-row climate control.' },
          { title: 'Flexible Travel Options', badge: 'MODULAR BOOKINGS', desc: 'Customizable sightseeing pauses, seamless itinerary adjustments on-the-go, and vehicle swaps when plans change.' },
          { title: 'Dedicated Support', badge: 'HUMAN ASSISTANCE', desc: '24/7 dedicated travel concierge desk ready to assist you instantly via WhatsApp and direct helpline calls.' }
        ]
      }
    };

    await AboutPageContent.create(initialContent);

    return NextResponse.json({ message: 'About Page Content seeded successfully', data: initialContent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
