import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import VehiclesPageContent from '@/models/VehiclesPageContent';
import { vehiclesData } from '@/data/vehicles';

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
      vehicles: vehiclesData.map((v: any) => ({
        ...v,
        category: v.category,
        features: v.features.map((f: any) => ({
          icon: typeof f.icon === 'string' ? f.icon : (f.icon as any)?.displayName || (f.icon as any)?.name || 'CheckCircle2',
          text: f.text,
          subtext: f.subtext || ''
        })),
        tagIcon: typeof v.tagIcon === 'string' ? v.tagIcon : (v.tagIcon as any)?.displayName || (v.tagIcon as any)?.name || 'CheckCircle2',
      })),
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
