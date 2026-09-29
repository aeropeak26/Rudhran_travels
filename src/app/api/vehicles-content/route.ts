import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import VehiclesPageContent from '@/models/VehiclesPageContent';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const content = await VehiclesPageContent.findOne();
    if (!content) {
      return NextResponse.json({}, { status: 200 });
    }
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching Vehicles page content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectMongo();
    const body = await req.json();

    const updatedContent = await VehiclesPageContent.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json(updatedContent);
  } catch (error) {
    console.error('Error updating Vehicles page content:', error);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
