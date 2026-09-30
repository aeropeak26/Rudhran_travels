import TariffClient from './TariffClient';
import connectMongo from '@/lib/db';
import TariffPageContent from '@/models/TariffPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tariff - Rudhran Travels',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  await connectMongo();
  const content = await TariffPageContent.findOne({}).lean();
  
  return <TariffClient initialData={JSON.parse(JSON.stringify(content || {}))} />;
}
