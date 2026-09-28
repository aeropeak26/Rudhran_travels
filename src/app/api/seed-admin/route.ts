import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import AdminUser from '@/models/AdminUser';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const email = 'madurairudhrantravels@gmail.com';
    const password = 'Madurairudhran@1';
    const name = 'Admin';

    await connectToDatabase();

    const existingUser = await AdminUser.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return NextResponse.json({ message: 'Admin user already exists! You can log in now.' }, { status: 200 });
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
      message: 'SUCCESS! Admin user created successfully. You can now go to /admin/login and log in.', 
      user: { email: newUser.email } 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error seeding admin user:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
