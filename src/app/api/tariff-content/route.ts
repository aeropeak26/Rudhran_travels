import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import TariffPageContent from '@/models/TariffPageContent';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const content = await TariffPageContent.findOne();
    if (!content) {
      return NextResponse.json({}, { status: 404 });
    }
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching tariff content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectMongo();
    const data = await request.json();

    const updatedContent = await TariffPageContent.findOneAndUpdate(
      {},
      data,
      { new: true, upsert: true }
    );

    return NextResponse.json(updatedContent);
  } catch (error) {
    console.error('Error updating tariff content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
