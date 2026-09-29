import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import HomePageContent from '@/models/HomePageContent';

export async function GET() {
  try {
    await connectMongo();
    let content = await HomePageContent.findOne();
    
    if (!content) {
      content = await HomePageContent.create({});
    }
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching HomePageContent:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongo();
    
    let content = await HomePageContent.findOne();
    if (content) {
      content = await HomePageContent.findByIdAndUpdate(content._id, data, { new: true });
    } else {
      content = await HomePageContent.create(data);
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error updating HomePageContent:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
