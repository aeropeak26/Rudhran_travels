import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import VehiclesPageContent from '@/models/VehiclesPageContent';

export async function GET() {
  try {
    await connectMongo();

    await VehiclesPageContent.deleteMany({});

    const defaultContent = {
      hero: {
        badge: 'OUR FLEET',
        title: 'Our Fleet',
        description: 'Comfortable, reliable vehicles for every type of journey. Executive sedans, spacious touring MUVs, and luxury group coaches maintained to showroom standards.',
        cards: [
          { icon: 'Droplets', title: '100% Sanitized', subtitle: 'Cleaned pre-trip' },
          { icon: 'Shield', title: 'Verified Chauffeurs', subtitle: 'Uniformed & trained' },
          { icon: 'Zap', title: 'Transparent Per-KM', subtitle: 'No hidden surges' },
          { icon: 'Phone', title: '24/7 Roadside Care', subtitle: 'Instant backup team' }
        ]
      },
      vehicles: [
        {
          id: '1',
          category: 'SUV / MUV',
          seats: '6 - 7 Seats',
          ac: true,
          rating: '5',
          img: '/images/dest1.png',
          name: 'Toyota Innova Crysta',
          desc: 'Spacious captain seats, generous boot space, and robust performance engineered for family hill circuits.',
          price: '18',
          localPackage: '3,500',
          minRun: '250',
          driverAllowance: '400',
          tagColor: 'amber',
          tagText: 'PREMIUM MPV / TOURING FLEET',
          tagBadge: 'TAMIL NADU & KERALA CERTIFIED',
          tagIcon: 'Shield',
          features: [
            { icon: 'User', text: '6+1 Seats' },
            { icon: 'Thermometer', text: 'Dual AC' },
            { icon: 'Briefcase', text: 'Luggage' },
            { icon: 'Navigation', text: 'Chauffeur' }
          ],
          quickTags: ['All Vehicles', 'Hill Station Ready', 'Pilgrimage Group']
        },
        {
          id: '4',
          category: 'SUV / MUV',
          seats: '6 - 7 Seats',
          ac: true,
          rating: '5',
          img: '/images/hero_car.png',
          name: 'Toyota Innova Hycross',
          desc: 'Next-generation hybrid luxury featuring Ottoman captain chairs and whisper-quiet cruising.',
          price: '24',
          localPackage: '4,800',
          minRun: '250',
          driverAllowance: '500',
          tagColor: 'blue',
          tagText: 'HYBRID LUXURY MUV',
          tagBadge: 'Ultra Luxury',
          tagIcon: 'Zap',
          features: [
            { icon: 'User', text: '6 Seats' },
            { icon: 'Thermometer', text: 'Multi Zone' },
            { icon: 'Briefcase', text: 'Luggage' },
            { icon: 'Zap', text: 'Hybrid EV' }
          ],
          quickTags: ['All Vehicles', 'Corporate Executive', 'Hill Station Ready']
        },
        {
          id: '3',
          category: 'SUV / MUV',
          seats: '6 - 7 Seats',
          ac: true,
          rating: '4.9',
          img: '/images/hero_car.png',
          name: 'Mahindra XUV700 AX7',
          desc: 'Dynamic high-ground-clearance luxury SUV providing commanding comfort and plush ride.',
          price: '22',
          localPackage: '4,300',
          minRun: '300',
          driverAllowance: '500',
          tagColor: 'cyan',
          tagText: 'FULL-SIZE SUV',
          tagBadge: 'Premium SUV',
          tagIcon: 'Shield',
          features: [
            { icon: 'User', text: '6 / 7 Seats' },
            { icon: 'Thermometer', text: 'Dual Climate' },
            { icon: 'Briefcase', text: 'Luggage' },
            { icon: 'Shield', text: 'ADAS Safety' }
          ],
          quickTags: ['All Vehicles', 'Corporate Executive', 'Hill Station Ready']
        },
        {
          id: '5',
          category: 'Luxury Coach',
          seats: '12+ Seats',
          ac: true,
          rating: '4.9',
          img: '/images/dest2.png',
          name: 'Force Urbania VIP Van',
          desc: 'World-class European styling with individual aircraft-style AC vents, ample headroom, and reclining buckets.',
          price: '28',
          localPackage: '6,200',
          minRun: '250',
          driverAllowance: '600',
          tagColor: 'emerald',
          tagText: 'HIGH-ROOF LUXURY MINIVAN',
          tagBadge: 'Executive Group',
          tagIcon: 'Briefcase',
          features: [
            { icon: 'User', text: '12 - 17 Seats' },
            { icon: 'Thermometer', text: 'Individual AC' },
            { icon: 'Briefcase', text: 'Charging' },
            { icon: 'Shield', text: 'Safety' }
          ],
          quickTags: ['All Vehicles', 'Corporate Executive', 'Airport Transfers']
        },
        {
          id: '2',
          category: 'Sedan',
          seats: '4 Seats',
          ac: true,
          rating: '4.8',
          img: '/images/dest2.png',
          name: 'Swift Dzire Sedan',
          desc: 'Agile, smooth, and exceptionally economical for city transfers, corporate commutes, and couple trips.',
          price: '13',
          localPackage: '2,200',
          minRun: '250',
          driverAllowance: '400',
          tagColor: 'slate',
          tagText: 'COMPACT EXECUTIVE SEDAN',
          tagBadge: 'Best Value',
          tagIcon: 'Check',
          features: [
            { icon: 'User', text: '4 Passengers' },
            { icon: 'Thermometer', text: 'Chilled AC' },
            { icon: 'Briefcase', text: 'Luggage' },
            { icon: 'Navigation', text: 'Chauffeur' }
          ],
          quickTags: ['All Vehicles', 'Airport Transfers']
        },
        {
          id: '6',
          category: 'Luxury Coach',
          seats: '12+ Seats',
          ac: true,
          rating: '4.8',
          img: '/images/hero_car.png',
          name: 'Tempo Traveller 12 - 18',
          desc: 'Comfortable pushback seating and dedicated luggage carrier ideal for extended temple circuits.',
          price: '26',
          localPackage: '5,500',
          minRun: '300',
          driverAllowance: '600',
          tagColor: 'slate',
          tagText: 'GROUP TOURING VEHICLE',
          tagBadge: 'Family & Pilgrimage',
          tagIcon: 'User',
          features: [
            { icon: 'User', text: '12-18 Seats' },
            { icon: 'Thermometer', text: 'Dual AC' },
            { icon: 'Briefcase', text: 'Carrier' },
            { icon: 'PlaySquare', text: 'Entertainment' }
          ],
          quickTags: ['All Vehicles', 'Pilgrimage Group']
        }
      ],
      standards: {
        badge: 'THE RUDHRAN STANDARD',
        title: 'Why Discerning Travelers Choose Our Fleet',
        description: 'Every vehicle is backed by strict engineering audits, vetted career chauffeurs, and completely transparent kilometer auditing.',
        cards: [
          {
            icon: 'CheckCircle2',
            title: '50+ Point Safety Audit',
            description: 'Tires, braking systems, suspension, air conditioning, and emergency tooling are systematically verified before every long-distance assignment.',
            tagIcon: 'CheckCircle2',
            tagText: 'Zero-Breakdown Promise'
          },
          {
            icon: 'MapPin',
            title: 'Ghat & Highway Experts',
            description: 'Chauffeurs have an average of 10+ years driving across South India\'s hairpin ghat roads (Ooty, Kodaikanal, Munnar) with spotless safety records.',
            tagIcon: 'CheckCircle2',
            tagText: 'Police/Background-Vetted'
          },
          {
            icon: 'Droplets',
            title: '100% Pristine Cabins',
            description: 'Deep-sanitized upholstery, fresh cabin fragrances, complimentary mineral water bottles, tissue dispensers, and mobile charging docks.',
            tagIcon: 'CheckCircle2',
            tagText: 'Executive Hospitality'
          },
          {
            icon: 'Shield',
            title: 'No Driver Batta Surges',
            description: 'Clear timeline pricing upfront. Inter-state tolls, parking allowances, and standardized driver batta without mid-journey surprises or fluctuations.',
            tagIcon: 'CheckCircle2',
            tagText: 'Direct Digital Invoicing'
          }
        ]
      }
    };

    const newContent = new VehiclesPageContent(defaultContent);
    await newContent.save();

    return NextResponse.json({ message: 'Vehicles page content seeded successfully', data: defaultContent });
  } catch (error) {
    console.error('Error seeding Vehicles content:', error);
    return NextResponse.json({ error: 'Failed to seed content' }, { status: 500 });
  }
}
