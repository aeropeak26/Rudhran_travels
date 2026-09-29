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

    // Send Email via Nodemailer
    // NOTE: Requires SMTP_EMAIL and SMTP_PASSWORD in .env
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
      subject: `New Booking Request from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0f172a; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Booking Request</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 40%;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${body.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Phone/WhatsApp:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${body.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Route:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${body.pickupLocation} &rarr; ${body.dropLocation}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Date & Time:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${body.pickupDate} at ${body.pickupTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 14px; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">${body.message || 'No additional message provided.'}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">This is an automated notification from your website.</p>
          </div>
        </div>
      `
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
