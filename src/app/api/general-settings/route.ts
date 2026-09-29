import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import GeneralSettings from '@/models/GeneralSettings';

export async function GET() {
  try {
    await connectMongo();
    let settings = await GeneralSettings.findOne();
    
    if (!settings) {
      settings = await GeneralSettings.create({});
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching GeneralSettings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongo();
    
    let settings = await GeneralSettings.findOne();
    if (settings) {
      settings = await GeneralSettings.findByIdAndUpdate(settings._id, data, { new: true });
    } else {
      settings = await GeneralSettings.create(data);
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating GeneralSettings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
