import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import BookingRequest from '@/models/BookingRequest';
import nodemailer from 'nodemailer';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aeropeak';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }

    // Save to Database
    const newRequest = await BookingRequest.create(body);

    // Send Email via Nodemailer (DISABLED FOR NOW)
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this if using another SMTP service
      auth: {
        user: process.env.SMTP_EMAIL || 'madurairudhrantravela@gmail.com',
        pass: process.env.SMTP_PASSWORD || '',
      }
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL || 'madurairudhrantravela@gmail.com',
      to: 'madurairudhrantravela@gmail.com',
      subject: \`New Booking Request from \${body.name}\`,
      html: \`...\` // HTML content omitted for brevity
    };

    try {
      // Only attempt to send if SMTP_PASSWORD is provided, otherwise it will crash.
      if (process.env.SMTP_PASSWORD) {
        await transporter.sendMail(mailOptions);
      } else {
        console.warn('SMTP_PASSWORD not provided, skipping email dispatch.');
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return success if DB save worked, but log email error
    }
    */

    return NextResponse.json({ success: true, request: newRequest });
  } catch (error: any) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
    }
    const requests = await BookingRequest.find().sort({ createdAt: -1 });
    return NextResponse.json(requests);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
