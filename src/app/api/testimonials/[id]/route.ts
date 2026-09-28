import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await connectToDatabase();
    const data = await req.json();

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, data, { new: true });
    
    if (!updatedTestimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json(updatedTestimonial);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update testimonial', details: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await connectToDatabase();

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
    
    if (!deletedTestimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Testimonial deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete testimonial', details: error.message }, { status: 500 });
  }
}
