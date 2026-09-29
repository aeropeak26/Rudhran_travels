import mongoose, { Schema, Document } from 'mongoose';

export interface IHomePageContent extends Document {
  hero: {
    badgeText: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  about: {
    image: string;
    experienceYears: string;
    subheading: string;
    title: string;
    subtitle: string;
    features: string[]; // array of 4 strings
  };
  popularDestinations: {
    state: string;
    status: string;
    statusColor: string;
    location: string;
    title: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    features: string[]; // array of 4 strings for text
  }[];
  featureVehicles: {
    name: string;
    image: string;
  }[];
  generalToyota: {
    title: string;
    subtitle: string;
    ratingText: string;
    outstationRate: string;
    localRate: string;
    minOutstation: string;
    driverBatta: string;
    rentPerDay: string;
  };
  tourPackages: {
    badge: string;
    badgeColor: string;
    duration: string;
    region: string;
    title: string;
    desc: string;
    price: string;
    priceUnit: string;
    rating: string;
    image: string;
  }[];
  whyTravelWithUs: {
    title: string;
    subtitle: string;
    bullets: string[]; // array of 4 strings
  };
  rideExperiences: {
    title: string;
    sub: string;
    image: string;
  }[];
}

const HomePageContentSchema: Schema = new Schema(
  {
    hero: { type: Object, default: {} },
    about: { type: Object, default: {} },
    popularDestinations: { type: Array, default: [] },
    featureVehicles: { type: Array, default: [] },
    generalToyota: { type: Object, default: {} },
    tourPackages: { type: Array, default: [] },
    whyTravelWithUs: { type: Object, default: {} },
    rideExperiences: { type: Array, default: [] },
  },
  { timestamps: true }
);

const HomePageContent = mongoose.models.HomePageContent || mongoose.model<IHomePageContent>('HomePageContent', HomePageContentSchema);

export default HomePageContent;
