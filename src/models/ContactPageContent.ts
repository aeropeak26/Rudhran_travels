import mongoose, { Schema, Document } from 'mongoose';

export interface IContactPageContent extends Document {
  callCenter: {
    phone1: string;
    phone2: string;
  };
  location: {
    address: string;
  };
  email: {
    email1: string;
    email2: string;
  };
  mapEmbedUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactPageContentSchema: Schema = new Schema(
  {
    callCenter: {
      phone1: { type: String, default: '' },
      phone2: { type: String, default: '' },
    },
    location: {
      address: { type: String, default: '' },
    },
    email: {
      email1: { type: String, default: '' },
      email2: { type: String, default: '' },
    },
    mapEmbedUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

const ContactPageContent = mongoose.models.ContactPageContent || mongoose.model<IContactPageContent>('ContactPageContent', ContactPageContentSchema);

export default ContactPageContent;
