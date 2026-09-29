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
        address: 'No. 42, GST Road, Guindy, Chennai, Tamil Nadu 600032'
      },
      email: {
        email1: 'booking@rudhrantravels.com',
        email2: 'support@rudhrantravels.com'
      },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3a526733230a6c69%3A0xc9c1692ce5868e82!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683100000000!5m2!1sen!2sin'
    };

    await ContactPageContent.create(initialContent);

    return NextResponse.json({ message: 'Contact Page Content seeded successfully', data: initialContent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
