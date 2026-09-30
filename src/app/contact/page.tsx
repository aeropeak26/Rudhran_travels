import ContactClient from './ContactClient';
import connectMongo from '@/lib/db';
import ContactPageContent from '@/models/ContactPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Rudhran Travels',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  await connectMongo();
  const content = await ContactPageContent.findOne({}).lean();
  
  return <ContactClient initialData={JSON.parse(JSON.stringify(content || {}))} />;
}
