import mongoose, { Schema, Document } from 'mongoose';

export interface IBookingRequest extends Document {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  message?: string;
  serviceType: string;
  serviceName: string;
  status: 'Pending' | 'Contacted' | 'Confirmed' | 'Cancelled';
  createdAt: Date;
}

const BookingRequestSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  pickupDate: { type: String, required: true },
  pickupTime: { type: String, required: true },
  message: { type: String, default: '' },
  serviceType: { type: String, default: 'General Enquiry' },
  serviceName: { type: String, default: 'None' },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Contacted', 'Confirmed', 'Cancelled'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.BookingRequest || mongoose.model<IBookingRequest>('BookingRequest', BookingRequestSchema);
