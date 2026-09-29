import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import ContactPageContent from '@/models/ContactPageContent';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const content = await ContactPageContent.findOne({});
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

    let content = await ContactPageContent.findOne({});
    if (!content) {
      content = new ContactPageContent(data);
      await content.save();
    } else {
      content = await ContactPageContent.findOneAndUpdate({}, data, { new: true, runValidators: true });
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
