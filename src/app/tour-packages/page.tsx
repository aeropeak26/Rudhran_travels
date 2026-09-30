import TourPackagesClient from './TourPackagesClient';
import connectMongo from '@/lib/db';
import TourPackage from '@/models/TourPackage';
import TourPageContent from '@/models/TourPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Packages - Rudhran Travels',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  await connectMongo();
  const packages = await TourPackage.find({}).lean();
  const pageContent = await TourPageContent.findOne({}).lean();
  
  return <TourPackagesClient initialData={JSON.parse(JSON.stringify({ packages, pageContent: pageContent || {} }))} />;
}
