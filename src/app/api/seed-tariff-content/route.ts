import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import TariffPageContent from '@/models/TariffPageContent';

export async function GET() {
  try {
    await connectMongo();

    await TariffPageContent.deleteMany({});

    const defaultContent = {
      hero: {
        heroImage: '',
        badge: 'TRANSPARENT & HONEST PRICING',
        title: 'Chauffeur-Driven Fleet <br/>Rental Tariff & Packages',
        description: 'Transparent and flexible vehicle rental pricing for every journey across South India. No surprises, no hidden levies—just pure travel precision.',
        checkmarks: [
          'Zero Hidden Costs',
          'Upfront Driver Batta',
          'Digital FASTag Slips',
          'GST Invoicing Ready'
        ]
      },
      rentalRatesHeader: {
        badge: 'FLEET TARIFF GUIDE',
        title: 'Vehicle Rental Rates',
        description: 'Choose the vehicle that best fits your journey. Outstation rates include sanitized vehicle, certified chauffeur, and fuel expenses.'
      },
      additionalCharges: {
        badge: 'TRANSPARENT BILLING STANDARDS',
        title: 'Additional Charges & Terms',
        description: '100% transparent out-of-pocket costs with zero hidden markups. You only pay for authentic travel expenses supported by official receipts.',
        cards: [
          {
            icon: 'Info',
            title: 'Toll Gate & FASTag',
            desc: 'Billed directly as per actual NHAI digital FASTag statement receipts. No estimated toll lump sums or markups.',
            tag: 'At Actuals via FASTag'
          },
          {
            icon: 'ShieldCheck',
            title: 'Interstate & Parking Tax',
            desc: 'State border permits (Kerala, Karnataka, AP, Pondicherry) and temple parking slips paid directly at government checkpoints.',
            tag: 'State Government Receipts'
          },
          {
            icon: 'Moon',
            title: 'Night Driving Charges',
            desc: 'Applicable strictly when vehicle is in active driving transit between 10:00 PM and 6:00 AM for chauffeur alertness safety.',
            tag: '₹300 per night journey'
          },
          {
            icon: 'Cloud',
            title: 'Hill Station Entry / Cess',
            desc: 'Green cess & entry fees prescribed by local collectorate councils (e.g. Ooty, Kodaikanal, Munnar, Yercaud).',
            tag: 'Per District Tariff'
          }
        ]
      }
    };

    const newContent = new TariffPageContent(defaultContent);
    await newContent.save();

    return NextResponse.json({ message: 'Tariff content seeded successfully', data: defaultContent });
  } catch (error) {
    console.error('Error seeding tariff content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
