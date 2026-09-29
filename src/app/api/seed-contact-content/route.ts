import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import ContactPageContent from '@/models/ContactPageContent';

export async function GET() {
  try {
    await connectMongo();

    // Clear existing data to ensure a fresh seed
    await ContactPageContent.deleteMany({});

    const initialContent = {
      callCenter: {
        phone1: '+91 98400 12345',
        phone2: '+91 98765 43210'
      },
      location: {
        address: '216, E Veli St, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001'
      },
      email: {
        email1: 'madurairudhrantravels@gmail.com',
        email2: 'madurairudhrantravels@gmail.com'
      },
      mapEmbedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Madurai%20Rudhran%20Travels,%20216,%20E%20Veli%20St,%20Kamarajar%20Salai,%20Madurai%20Main,%20Madurai,%20Tamil%20Nadu%20625001&t=&z=14&ie=UTF8&iwloc=B&output=embed'
    };

    await ContactPageContent.create(initialContent);

    return NextResponse.json({ message: 'Contact Page Content seeded successfully', data: initialContent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
