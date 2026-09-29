import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import TourPackage from '@/models/TourPackage';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

import { broadcastLiveUpdate } from '@/lib/liveUpdate';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const pkg = await TourPackage.findById(id);
    if (!pkg) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(pkg);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await connectToDatabase();
    const data = await req.json();

    const updatedPackage = await TourPackage.findByIdAndUpdate(id, data, { new: true });
    
    if (!updatedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    broadcastLiveUpdate('tour-packages');
    return NextResponse.json(updatedPackage);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update package', details: error.message }, { status: 500 });
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

    const deletedPackage = await TourPackage.findByIdAndDelete(id);
    
    if (!deletedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    broadcastLiveUpdate('tour-packages');
    return NextResponse.json({ message: 'Package deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete package', details: error.message }, { status: 500 });
  }
}
