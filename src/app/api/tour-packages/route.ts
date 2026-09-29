import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import TourPackage from '@/models/TourPackage';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

import { broadcastLiveUpdate } from '@/lib/liveUpdate';

export async function GET() {
  try {
    await connectToDatabase();
    const packages = await TourPackage.find().sort({ createdAt: -1 });
    return NextResponse.json(packages);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch tour packages' }, { status: 500 });
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

    const newPackage = await TourPackage.create(data);
    broadcastLiveUpdate('tour-packages');
    return NextResponse.json(newPackage, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create tour package', details: error.message }, { status: 500 });
  }
}
