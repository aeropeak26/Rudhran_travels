import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import GalleryPageContent from '@/models/GalleryPageContent';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const content = await GalleryPageContent.findOne({});
    if (!content) {
      return NextResponse.json({}, { status: 200 });
    }
    return NextResponse.json(content, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectMongo();
    const data = await req.json();

    let content = await GalleryPageContent.findOne({});
    if (!content) {
      content = new GalleryPageContent(data);
      await content.save();
    } else {
      content = await GalleryPageContent.findOneAndUpdate({}, data, { new: true, runValidators: true });
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
