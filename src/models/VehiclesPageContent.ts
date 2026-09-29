import mongoose, { Schema, Document } from 'mongoose';

export interface IVehiclesPageContent extends Document {
  hero: {
    badge: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      subtitle: string;
    }[];
  };
  vehicles: {
    id: string;
    category: string;
    seats: string;
    ac: boolean;
    rating: string;
    img: string;
    name: string;
    subtitle: string;
    desc: string;
    longDesc: string;
    reviewsCount: string;
    price: string;
    localPackage: string;
    localHours: string;
    minRun: string;
    driverAllowance: string;
    nightBatta: string;
    tagColor: string;
    tagText: string;
    tagBadge: string;
    tagIcon: string;
    topBadges: string[];
    gallery: string[];
    galleryLabels: string[];
    features: {
      icon: string;
      text: string;
      subtext: string;
    }[];
    highlights: string[];
    overview: {
      title: string;
      desc: string;
      tag: string;
    }[];
    bestSuitedFor: string[];
    quickTags: string[];
  }[];
  standards: {
    badge: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      description: string;
      tagIcon: string;
      tagText: string;
    }[];
  };
}

const VehiclesPageContentSchema: Schema = new Schema({
  hero: {
    badge: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    cards: [{
      icon: { type: String, default: '' },
      title: { type: String, default: '' },
      subtitle: { type: String, default: '' }
    }]
  },
  vehicles: [{
    id: { type: String, default: '' },
    category: { type: String, default: '' },
    seats: { type: String, default: '' },
    ac: { type: Boolean, default: true },
    rating: { type: String, default: '' },
    img: { type: String, default: '' },
    name: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    longDesc: { type: String, default: '' },
    reviewsCount: { type: String, default: '' },
    price: { type: String, default: '' },
    localPackage: { type: String, default: '' },
    localHours: { type: String, default: '' },
    minRun: { type: String, default: '' },
    driverAllowance: { type: String, default: '' },
    nightBatta: { type: String, default: '' },
    tagColor: { type: String, default: '' },
    tagText: { type: String, default: '' },
    tagBadge: { type: String, default: '' },
    tagIcon: { type: String, default: '' },
    topBadges: [{ type: String }],
    gallery: [{ type: String }],
    galleryLabels: [{ type: String }],
    features: [{
      icon: { type: String, default: '' },
      text: { type: String, default: '' },
      subtext: { type: String, default: '' }
    }],
    highlights: [{ type: String }],
    overview: [{
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      tag: { type: String, default: '' }
    }],
    bestSuitedFor: [{ type: String }],
    quickTags: [{ type: String }]
  }],
  standards: {
    badge: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    cards: [{
      icon: { type: String, default: '' },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      tagIcon: { type: String, default: '' },
      tagText: { type: String, default: '' }
    }]
  }
}, { timestamps: true });

export default mongoose.models.VehiclesPageContent || mongoose.model<IVehiclesPageContent>('VehiclesPageContent', VehiclesPageContentSchema);
