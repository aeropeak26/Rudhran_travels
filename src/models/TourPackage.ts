import mongoose, { Schema, Document } from 'mongoose';

export interface ITourPackage extends Document {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  category: string;
  badge: string;
  img: string;
  desc: string;
  featured: boolean;
  
  hero: {
    badge: string;
    title: string;
    desc: string;
    pacing: string;
    stayTier: string;
    carriage: string;
    escort: string;
    pricingTitle: string;
    pricingType: string;
    pricingAdvance: string;
  };
  
  waypoints: {
    id: string; // "01", "02"
    title: string;
    desc: string;
  }[];
  
  itinerary: {
    dayLabel: string;
    tag: string;
    tagDesc: string;
    title: string;
    desc: string;
    note?: {
      title: string;
      content: string;
      icon: string;
    };
    stay: string;
    distance: string;
    img: string;
    reverse?: boolean;
  }[];
  
  vehicles: {
    tier: string;
    category: string;
    name: string;
    subtitle: string;
    price: string;
    features: string[];
    recommended?: boolean;
  }[];

  inclusions: string[];
  exclusions: string[];
  
  createdAt: Date;
  updatedAt: Date;
}

const TourPackageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    badge: { type: String },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    featured: { type: Boolean, default: false },

    hero: {
      badge: { type: String },
      title: { type: String },
      desc: { type: String },
      pacing: { type: String },
      stayTier: { type: String },
      carriage: { type: String },
      escort: { type: String },
      pricingTitle: { type: String },
      pricingType: { type: String },
      pricingAdvance: { type: String },
    },

    waypoints: [
      {
        id: { type: String },
        title: { type: String },
        desc: { type: String },
      }
    ],

    itinerary: [
      {
        dayLabel: { type: String },
        tag: { type: String },
        tagDesc: { type: String },
        title: { type: String },
        desc: { type: String },
        note: {
          title: { type: String },
          content: { type: String },
          icon: { type: String },
        },
        stay: { type: String },
        distance: { type: String },
        img: { type: String },
        reverse: { type: Boolean, default: false },
      }
    ],

    vehicles: [
      {
        tier: { type: String },
        category: { type: String },
        name: { type: String },
        subtitle: { type: String },
        price: { type: String },
        features: { type: [String], default: [] },
        recommended: { type: Boolean, default: false },
      }
    ],

    inclusions: { type: [String], default: [] },
    exclusions: { type: [String], default: [] },
  },
  { timestamps: true }
);

const TourPackage = mongoose.models.TourPackage || mongoose.model<ITourPackage>('TourPackage', TourPackageSchema);

export default TourPackage;
