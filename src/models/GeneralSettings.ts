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
      callNow: { type: String, default: '+91 8760380485' },
      whatsapp: { type: String, default: '+91 8760380485' },
    },
    footer: {
      phone: { type: String, default: '+91 8760380485' },
      email: { type: String, default: 'madurairudhrantravels@gmail.com' },
      address: { type: String, default: '216, E Veli St, Kamarajar Salai, Madurai Main, Madurai, Tamil Nadu 625001' },
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
