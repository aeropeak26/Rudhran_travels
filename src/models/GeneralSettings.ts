import mongoose, { Schema, Document } from 'mongoose';

export interface IGeneralSettings extends Document {
  topBar: {
    location: string;
    callNow: string;
    whatsapp: string;
  };
  footer: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    twitter: string;
    instagram: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const GeneralSettingsSchema: Schema = new Schema(
  {
    topBar: {
      location: { type: String, default: 'Madurai • Tamil Nadu' },
      callNow: { type: String, default: '+91 98765 43210' },
      whatsapp: { type: String, default: '+91 98765 43210' },
    },
    footer: {
      phone: { type: String, default: '+91 98400 12345' },
      email: { type: String, default: 'info@rudhrantravels.com' },
      address: { type: String, default: '42, GST Road, Guindy, Chennai, Tamil Nadu 600032' },
    },
    social: {
      twitter: { type: String, default: '#' },
      instagram: { type: String, default: '#' },
    },
  },
  { timestamps: true }
);

const GeneralSettings = mongoose.models.GeneralSettings || mongoose.model<IGeneralSettings>('GeneralSettings', GeneralSettingsSchema);

export default GeneralSettings;
