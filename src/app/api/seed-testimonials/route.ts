import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Testimonial from '@/models/Testimonial';

export async function GET() {
  try {
    await connectToDatabase();

    const sampleTestimonials = [
      {
        name: "Marcus Vane",
        role: "Sovereign Holdings Chief",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content: "Aurelia manages our global executive transport flawlessly. Their team understands scheduling and the deep necessity for silence and privacy on transition routes.",
        isActive: true,
      },
      {
        name: "Elena Rostova",
        role: "Luxury Lifestyle Director",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content: "The personalized Monaco coastal itinerary they curated for our family was exquisite. The chauffeur was highly knowledgeable, and our SUV was immaculate.",
        isActive: true,
      },
      {
        name: "Karthik Subramanian",
        role: "Corporate Travel Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content: "Booked an Innova Crysta for a family trip to Rameshwaram & Madurai. The vehicle was spotless, and the driver was extremely polite and punctual throughout.",
        isActive: true,
      },
      {
        name: "Priya Rajan",
        role: "Software Architect",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content: "Best outstation rental experience! Transparent billing with zero hidden charges. Will definitely use AeroDrive for all our hill station getaways.",
        isActive: true,
      },
      {
        name: "Sanjay Kumar",
        role: "Wedding Event Planner",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content: "We hired their luxury fleet for a VIP wedding in Madurai. The coordination was seamless, and the cars were in pristine condition. Highly recommended for events!",
        isActive: true,
      }
    ];

    // Clear existing testimonials
    await Testimonial.deleteMany({});
    
    // Insert new ones
    await Testimonial.insertMany(sampleTestimonials);

    return NextResponse.json({ 
      message: 'SUCCESS! 5 Sample testimonials inserted successfully. Check your Admin Dashboard.', 
      count: sampleTestimonials.length 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error seeding testimonials:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
