import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import GeneralSettings from '@/models/GeneralSettings';

export async function GET() {
  try {
    await connectMongo();
    let settings = await GeneralSettings.findOne();
    
    if (!settings) {
      settings = await GeneralSettings.create({
        topBar: { location: 'Madurai • Tamil Nadu', callNow: '+91 8760380485', whatsapp: '+91 8760380485' },
        footer: { phone: '+91 8760380485', email: 'madurairudhrantravels@gmail.com', address: '216, E Veli St, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001' }
      });
    } else {
      let updated = false;
      if (!settings.topBar?.callNow || settings.topBar.callNow.includes('98765') || settings.topBar.callNow.includes('98400')) {
        settings.topBar.callNow = '+91 8760380485';
        settings.topBar.whatsapp = '+91 8760380485';
        updated = true;
      }
      if (!settings.footer?.phone || settings.footer.phone.includes('98400') || settings.footer.phone.includes('98765')) {
        settings.footer.phone = '+91 8760380485';
        settings.footer.email = 'madurairudhrantravels@gmail.com';
        updated = true;
      }
      if (updated) {
        await settings.save();
      }
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching GeneralSettings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

import { broadcastLiveUpdate } from '@/lib/liveUpdate';

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

    broadcastLiveUpdate('general-settings');
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating GeneralSettings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
