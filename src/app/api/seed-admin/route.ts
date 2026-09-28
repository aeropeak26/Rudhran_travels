import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import AdminUser from '@/models/AdminUser';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { email, password, name, secretKey } = await req.json();

    // Protect this endpoint with a secret key passed in the request body
    // You should use a strong secret key in production
    if (secretKey !== 'RUDHRAN_SECRET_SETUP_KEY_2026') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectToDatabase();

    const existingUser = await AdminUser.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return NextResponse.json({ error: 'Admin user already exists with this email' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await AdminUser.create({
      email: email.toLowerCase(),
      passwordHash,
      name,
      role: 'admin',
    });

    return NextResponse.json({ 
      message: 'Admin user created successfully', 
      user: { id: newUser._id, email: newUser.email, name: newUser.name } 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error seeding admin user:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
