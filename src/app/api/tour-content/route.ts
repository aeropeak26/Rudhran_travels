import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import TourPageContent from '@/models/TourPageContent';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await connectToDatabase();
    // Because it's a singleton, just get the first one.
    const content = await TourPageContent.findOne();
    return NextResponse.json(content || {});
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch tour content' }, { status: 500 });
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

    // Upsert the single document
    const content = await TourPageContent.findOne();
    let updatedContent;
    
    if (content) {
      updatedContent = await TourPageContent.findByIdAndUpdate(content._id, data, { new: true });
    } else {
      updatedContent = await TourPageContent.create(data);
    }

    return NextResponse.json(updatedContent);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update tour content', details: error.message }, { status: 500 });
  }
}
