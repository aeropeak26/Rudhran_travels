import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryImage {
  title: string;
  desc: string;
  badge: string;
  img: string;
}

export interface IGalleryFeedback {
  name: string;
  title: string;
  initials: string;
  quote: string;
}

export interface IGalleryPageContent extends Document {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    stats: {
      icon: string;
      title: string;
      subtitle: string;
    }[];
  };
  gallery: IGalleryImage[];
  feedback: IGalleryFeedback[];
  createdAt: Date;
  updatedAt: Date;
}

const GalleryPageContentSchema: Schema = new Schema(
  {
    hero: {
      title: { type: String, default: '' },
      subtitle: { type: String, default: '' },
      badge: { type: String, default: '' },
      description: { type: String, default: '' },
      stats: [
        {
          icon: { type: String, default: '' },
          title: { type: String, default: '' },
          subtitle: { type: String, default: '' }
        }
      ]
    },
    gallery: [
      {
        title: { type: String, default: '' },
        desc: { type: String, default: '' },
        badge: { type: String, default: '' },
        img: { type: String, default: '' }
      }
    ],
    feedback: [
      {
        name: { type: String, default: '' },
        title: { type: String, default: '' },
        initials: { type: String, default: '' },
        quote: { type: String, default: '' }
      }
    ]
  },
  { timestamps: true }
);

const GalleryPageContent = mongoose.models.GalleryPageContent || mongoose.model<IGalleryPageContent>('GalleryPageContent', GalleryPageContentSchema);

export default GalleryPageContent;
