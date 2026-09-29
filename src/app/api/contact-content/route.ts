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

    // Automatically expand and convert Google Maps shortlinks (Share links) into Embed URLs
    if (data.mapEmbedUrl && (data.mapEmbedUrl.includes('maps.app.goo.gl') || data.mapEmbedUrl.includes('goo.gl/maps'))) {
      try {
        const response = await fetch(data.mapEmbedUrl, { redirect: 'follow' });
        const finalUrl = response.url;
        
        const placeMatch = finalUrl.match(/\/place\/([^\/]+)/);
        const qMatch = finalUrl.match(/[?&]q=([^&]+)/);
        
        let query = '';
        if (placeMatch) query = placeMatch[1];
        else if (qMatch) query = qMatch[1];

        if (query) {
          data.mapEmbedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
        } else {
          const coordMatch = finalUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
          if (coordMatch) {
            data.mapEmbedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${coordMatch[1]},${coordMatch[2]}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
          }
        }
      } catch (e) {
        console.error("Failed to expand map shortlink:", e);
      }
    }

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
