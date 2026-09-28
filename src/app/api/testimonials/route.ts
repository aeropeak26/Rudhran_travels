import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    
    // Allow public access to GET but maybe filter by isActive for public?
    // We'll return all, and the frontend can filter or we can pass a query param.
    const { searchParams } = new URL(req.url);
    const activeOnly = searchParams.get('activeOnly') === 'true';

    const filter = activeOnly ? { isActive: true } : {};
    const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 });
    
    return NextResponse.json(testimonials);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const data = await req.json();

    const newTestimonial = await Testimonial.create(data);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create testimonial', details: error.message }, { status: 500 });
  }
}
