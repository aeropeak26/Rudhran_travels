import mongoose, { Schema, Document } from 'mongoose';

export interface IAboutPageContent extends Document {
  hero: {
    title: string;
    description: string;
    heroImage: string;
    points: string[];
  };
  whoWeAre: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    image: string;
    floatingCard: {
      badge: string;
      description: string;
    };
    points: string[];
    stats: {
      icon: string;
      number: string;
      title: string;
      desc: string;
    }[];
  };
  ourPurpose: {
    badge: string;
    title: string;
    description: string;
    missionQuote: string;
    cards: {
      title: string;
      badge: string;
      desc: string;
      footerLeft: string;
      footerRight: string;
    }[];
  };
  tailoredMobility: {
    badge: string;
    title: string;
    description: string;
    card1: { title: string; desc: string };
    card2: { title: string; desc: string };
    card3VIP: { title: string; desc: string; featureTitle: string; featureDesc: string };
    card4VIP: { title: string; desc: string; featureTitle: string; featureDesc: string };
    card5: { title: string; desc: string };
    card6: { title: string; desc: string };
    card7: { title: string; desc: string };
    bottomCard: { title: string; desc: string };
  };
  whyChooseUs: {
    badge: string;
    title: string;
    description: string;
    features: {
      title: string;
      badge: string;
      desc: string;
    }[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const AboutPageContentSchema: Schema = new Schema(
  {
    hero: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      heroImage: { type: String, default: '' },
      points: [{ type: String }]
    },
    whoWeAre: {
      badge: { type: String, default: '' },
      title: { type: String, default: '' },
      description1: { type: String, default: '' },
      description2: { type: String, default: '' },
      image: { type: String, default: '' },
      floatingCard: {
        badge: { type: String, default: '' },
        description: { type: String, default: '' }
      },
      points: [{ type: String }],
      stats: [
        {
          icon: { type: String, default: '' },
          number: { type: String, default: '' },
          title: { type: String, default: '' },
          desc: { type: String, default: '' }
        }
      ]
    },
    ourPurpose: {
      badge: { type: String, default: '' },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      missionQuote: { type: String, default: '' },
      cards: [
        {
          title: { type: String, default: '' },
          badge: { type: String, default: '' },
          desc: { type: String, default: '' },
          footerLeft: { type: String, default: '' },
          footerRight: { type: String, default: '' }
        }
      ]
    },
    tailoredMobility: {
      badge: { type: String, default: '' },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      card1: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
      card2: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
      card3VIP: { title: { type: String, default: '' }, desc: { type: String, default: '' }, featureTitle: { type: String, default: '' }, featureDesc: { type: String, default: '' } },
      card4VIP: { title: { type: String, default: '' }, desc: { type: String, default: '' }, featureTitle: { type: String, default: '' }, featureDesc: { type: String, default: '' } },
      card5: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
      card6: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
      card7: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
      bottomCard: { title: { type: String, default: '' }, desc: { type: String, default: '' } },
    },
    whyChooseUs: {
      badge: { type: String, default: '' },
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      features: [
        {
          title: { type: String, default: '' },
          badge: { type: String, default: '' },
          desc: { type: String, default: '' }
        }
      ]
    }
  },
  { timestamps: true }
);

const AboutPageContent = mongoose.models.AboutPageContent || mongoose.model<IAboutPageContent>('AboutPageContent', AboutPageContentSchema);

export default AboutPageContent;
