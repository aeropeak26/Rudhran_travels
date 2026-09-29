import mongoose, { Schema, Document } from 'mongoose';

export interface ITariffPageContent extends Document {
  hero: {
    heroImage: string;
    badge: string;
    title: string;
    description: string;
    checkmarks: string[];
  };
  rentalRatesHeader: {
    badge: string;
    title: string;
    description: string;
  };
  additionalCharges: {
    badge: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      desc: string;
      tag: string;
    }[];
  };
}

const TariffPageContentSchema: Schema = new Schema({
  hero: {
    heroImage: { type: String, default: '' },
    badge: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    checkmarks: { type: [String], default: [] }
  },
  rentalRatesHeader: {
    badge: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  },
  additionalCharges: {
    badge: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    cards: [{
      icon: { type: String, default: '' },
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      tag: { type: String, default: '' }
    }]
  }
}, { timestamps: true });

export default mongoose.models.TariffPageContent || mongoose.model<ITariffPageContent>('TariffPageContent', TariffPageContentSchema);
