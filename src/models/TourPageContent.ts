import mongoose, { Schema, Document } from 'mongoose';

export interface ITourPageContent extends Document {
  heroImage: string;
  badge: string;
  title: string;
  description: string;
  features: string[]; // e.g. ["Guaranteed Punctual Chauffeurs", "100% Tailored Itineraries", "Zero Hidden Costs"]
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
  },
  { timestamps: true }
);

const TourPageContent = mongoose.models.TourPageContent || mongoose.model<ITourPageContent>('TourPageContent', TourPageContentSchema);

export default TourPageContent;
