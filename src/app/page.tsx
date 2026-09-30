import HomeClient from './HomeClient';
import connectMongo from '@/lib/db';
import HomePageContent from '@/models/HomePageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rudhran Travels',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  await connectMongo();
  const content = await HomePageContent.findOne({}).lean();
  
  return <HomeClient initialData={JSON.parse(JSON.stringify(content || {}))} />;
}
