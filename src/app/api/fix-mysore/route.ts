import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import TourPackage from '@/models/TourPackage';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    
    // Find the package containing "Mysore" (case-insensitive)
    const mysorePkg = await TourPackage.findOne({ title: { $regex: /mysore/i } });
    
    if (!mysorePkg) {
      return NextResponse.json({ error: 'Mysore package not found' }, { status: 404 });
    }

    // Get all packages
    const allPackages = await TourPackage.find({ _id: { $ne: mysorePkg._id } });

    // Update each package with Mysore's content (hero, itinerary, vehicles, inclusions, exclusions, waypoints)
    const updatePromises = allPackages.map(pkg => {
      pkg.hero = mysorePkg.hero;
      pkg.itinerary = mysorePkg.itinerary;
      pkg.vehicles = mysorePkg.vehicles;
      pkg.inclusions = mysorePkg.inclusions;
      pkg.exclusions = mysorePkg.exclusions;
      pkg.waypoints = mysorePkg.waypoints;
      return pkg.save();
    });

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true, message: `Updated ${allPackages.length} packages.` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
