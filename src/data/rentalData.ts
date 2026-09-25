export interface Car {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury';
  image: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Petrol' | 'Diesel' | 'EV' | 'Hybrid';
  luggage: number;
  ratePerKm: number;
  perDayRate: number;
  rating: number;
  reviewsCount: number;
  features: string[];
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  startingPrice: number;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  popularCars: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  route: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const CAR_FLEET: Car[] = [
  {
    id: 'car-1',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    image: '/images/hero_car.png',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: 2,
    ratePerKm: 13,
    perDayRate: 2499,
    rating: 4.9,
    reviewsCount: 142,
    features: ['Air Conditioning', 'Bluetooth Music', 'Clean & Sanitized', 'GPS Tracking']
  },
  {
    id: 'car-2',
    name: 'Toyota Innova Crysta',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: 4,
    ratePerKm: 19,
    perDayRate: 4200,
    rating: 5.0,
    reviewsCount: 310,
    features: ['Captain Seats', 'Rear AC Vents', 'Extra Boot Space', 'USB Charger']
  },
  {
    id: 'car-3',
    name: 'Hyundai i20 Premium',
    category: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    luggage: 2,
    ratePerKm: 11,
    perDayRate: 1999,
    rating: 4.8,
    reviewsCount: 88,
    features: ['Sunroof', 'Touchscreen Display', 'Compact City Drive', 'Airbags']
  },
  {
    id: 'car-4',
    name: 'Mahindra XUV700 Luxury',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    luggage: 4,
    ratePerKm: 22,
    perDayRate: 4800,
    rating: 4.95,
    reviewsCount: 195,
    features: ['Panoramic Sunroof', 'ADAS Safety', '360 Camera', 'Leatherette Seats']
  },
  {
    id: 'car-5',
    name: 'BMW 3 Series Gran Limousine',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    luggage: 3,
    ratePerKm: 45,
    perDayRate: 9500,
    rating: 5.0,
    reviewsCount: 64,
    features: ['Chauffeur Driven', 'Ambient Lighting', 'Premium Sound System', 'Reclining Comfort']
  },
  {
    id: 'car-6',
    name: 'Honda City i-VTEC',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    luggage: 3,
    ratePerKm: 14,
    perDayRate: 2799,
    rating: 4.85,
    reviewsCount: 120,
    features: ['Spacious Cabin', 'Smooth Engine', 'Cruise Control', 'Rear Sunshade']
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-1',
    title: 'Rameshwaram Temple & Pamban Bridge',
    location: 'Ramanathapuram, Tamil Nadu',
    image: '/images/dest1.png',
    startingPrice: 2499,
    duration: '2 Days / 1 Night',
    rating: 4.9,
    reviews: 320,
    description: 'Explore the iconic Pamban Sea Bridge, Ramanathaswamy Temple, Dhanushkodi ghost town, and pristine coastal beaches.',
    popularCars: ['Maruti Dzire', 'Innova Crysta']
  },
  {
    id: 'dest-2',
    title: 'Ooty & Coonoor Hill Station Tour',
    location: 'Nilgiris, Tamil Nadu',
    image: '/images/dest2.png',
    startingPrice: 3299,
    duration: '3 Days / 2 Nights',
    rating: 4.85,
    reviews: 410,
    description: 'Wind along picturesque pine forests, botanical gardens, tea factory tours, and cool mountain weather.',
    popularCars: ['Innova Crysta', 'Mahindra XUV700']
  },
  {
    id: 'dest-3',
    title: 'Kodaikanal Lake & Princess of Hills',
    location: 'Dindigul, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    startingPrice: 2999,
    duration: '2 Days / 2 Nights',
    rating: 4.9,
    reviews: 280,
    description: 'Walk through Coaker’s Walk, Pillar Rocks, Bryant Park, and enjoy serene boating on Kodai Lake.',
    popularCars: ['Maruti Dzire', 'Honda City']
  },
  {
    id: 'dest-4',
    title: 'Munnar Tea Estates & Waterfalls',
    location: 'Idukki, Kerala',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    startingPrice: 3599,
    duration: '3 Days / 2 Nights',
    rating: 4.95,
    reviews: 512,
    description: 'Breathtaking misty green mountains, Mattupetty Dam, Eravikulam National Park Neelakurinji blooms.',
    popularCars: ['Mahindra XUV700', 'Innova Crysta']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Karthik Subramanian',
    role: 'Business Traveler',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Booked an Innova Crysta for a family trip to Rameshwaram & Madurai. The car was spotless, and the chauffeur was courteous and punctual!',
    route: 'Chennai to Rameshwaram Outstation'
  },
  {
    id: 'test-2',
    name: 'Priya Rajan',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Best rental experience ever! Transparent billing with zero hidden driver charges. Will definitely use AeroDrive for our next Ooty weekend trip.',
    route: 'Coimbatore to Ooty Outstation'
  },
  {
    id: 'test-3',
    name: 'Arun Kumar',
    role: 'Travel Photographer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'The online booking process was so smooth. Got instant WhatsApp confirmation and live driver location tracking throughout our 4-day trip.',
    route: 'Bangalore to Munnar Tour'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Booking & Pricing',
    question: 'Is fuel included in outstation car rentals?',
    answer: 'For outstation trips, we offer both Fuel Included and Driver Allowance packages. You can choose based on your distance preference during booking.'
  },
  {
    id: 'faq-2',
    category: 'Driver Charges',
    question: 'Are driver night allowance & toll charges extra?',
    answer: 'Tolls, state permit taxes, and parking fees are paid directly at toll booths or added as per actual receipts. Driver night allowance applies only if driving past 10:00 PM.'
  },
  {
    id: 'faq-3',
    category: 'Vehicle Safety',
    question: 'How are vehicles cleaned and maintained?',
    answer: 'Every car undergoes a 25-point safety inspection and complete interior sanitization before every pickup or trip departure.'
  },
  {
    id: 'faq-4',
    category: 'Cancellation Policy',
    question: 'What is the cancellation policy for outstation rentals?',
    answer: 'Free cancellation up to 6 hours before departure time. 100% instant refund back to your original payment method.'
  }
];
