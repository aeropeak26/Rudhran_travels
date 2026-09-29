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
      },
      vehicles: [
        {
          id: '1',
          category: 'SUV / MUV',
          img: '/images/dest1.png',
          badge: 'CAPTAIN SEATS',
          title: 'Toyota Innova Crysta',
          mostPopular: true,
          price: '18',
          localPackage: '3,500',
          minRun: '250',
          driverAllowance: '400',
          nightBatta: '500'
        },
        {
          id: '2',
          category: 'Sedan',
          img: '/images/dest2.png',
          badge: 'CITY & HIGHWAY',
          title: 'Sedan',
          mostPopular: false,
          price: '13',
          localPackage: '2,200',
          minRun: '250',
          driverAllowance: '400',
          nightBatta: '500'
        },
        {
          id: '3',
          category: 'SUV / MUV',
          img: '/images/hero_car.png',
          badge: 'GHAT & HILL TERRAIN',
          title: 'Premium SUV',
          mostPopular: false,
          price: '22',
          localPackage: '4,300',
          minRun: '300',
          driverAllowance: '500',
          nightBatta: '600'
        },
        {
          id: '4',
          category: 'SUV / MUV',
          img: '/images/dest1.png',
          badge: 'TOURING CLASSIC',
          title: 'Toyota Innova',
          mostPopular: false,
          price: '24',
          localPackage: '4,800',
          minRun: '250',
          driverAllowance: '500',
          nightBatta: '600'
        },
        {
          id: '5',
          category: 'Luxury Coach',
          img: '/images/dest2.png',
          badge: 'EXECUTIVE VIP VAN',
          title: 'Force Urbania VIP',
          mostPopular: false,
          price: '28',
          localPackage: '6,200',
          minRun: '250',
          driverAllowance: '600',
          nightBatta: '700'
        },
        {
          id: '6',
          category: 'Luxury Coach',
          img: '/images/hero_car.png',
          badge: 'PILGRIMAGE & GROUPS',
          title: 'Tempo Traveller',
          mostPopular: false,
          price: '26',
          localPackage: '5,500',
          minRun: '300',
          driverAllowance: '600',
          nightBatta: '700'
        }
      ]
    };

    const newContent = new TariffPageContent(defaultContent);
    await newContent.save();

    return NextResponse.json({ message: 'Tariff content seeded successfully', data: defaultContent });
  } catch (error) {
    console.error('Error seeding tariff content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
