import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    image: { type: String, required: true }, // Cloudinary URL
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
