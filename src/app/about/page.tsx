import AboutClient from './AboutClient';
import connectMongo from '@/lib/db';
import AboutPageContent from '@/models/AboutPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Rudhran Travels',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  await connectMongo();
  const content = await AboutPageContent.findOne({}).lean();
  
  return <AboutClient initialData={JSON.parse(JSON.stringify(content || {}))} />;
}
