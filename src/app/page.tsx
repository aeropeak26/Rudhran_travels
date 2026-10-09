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
  
  // Fetch up to 6 packages marked to show on home
  const TourPackage = (await import('@/models/TourPackage')).default;
  const tourPackages = await TourPackage.find({ showOnHome: true }).limit(6).lean();
  
  const initialData = JSON.parse(JSON.stringify(content || {}));
  initialData.dynamicTourPackages = JSON.parse(JSON.stringify(tourPackages));

  return <HomeClient initialData={initialData} />;
}
