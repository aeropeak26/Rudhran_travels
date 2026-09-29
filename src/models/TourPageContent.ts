import mongoose, { Schema, Document } from 'mongoose';

export interface ITourPageContent extends Document {
  heroImage: string;
  badge: string;
  title: string;
  description: string;
  features: string[]; // e.g. ["Guaranteed Punctual Chauffeurs", "100% Tailored Itineraries", "Zero Hidden Costs"]
  
  whyChooseUs: {
    badge: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };

  createdAt: Date;
  updatedAt: Date;
}

const TourPageContentSchema: Schema = new Schema(
  {
    heroImage: { type: String, required: true },
    badge: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], default: [] },
    whyChooseUs: {
      badge: { type: String, default: '' },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      cards: [
        {
          icon: { type: String, default: 'Car' },
          title: { type: String, default: '' },
          description: { type: String, default: '' }
        }
      ]
    }
  },
  { timestamps: true }
);

const TourPageContent = mongoose.models.TourPageContent || mongoose.model<ITourPageContent>('TourPageContent', TourPageContentSchema);

export default TourPageContent;
