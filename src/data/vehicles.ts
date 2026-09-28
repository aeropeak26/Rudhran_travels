import { 
  CheckCircle2, User, Zap, MapPin, Shield, Droplets, Thermometer, Briefcase, PlaySquare
} from 'lucide-react';

export const vehiclesData = [
  {
    id: '1',
    name: 'Toyota Innova Crysta',
    subtitle: 'The Unrivalled King of Indian Highway & Hill Touring',
    category: 'PREMIUM MUV',
    rating: 4.9,
    reviewsCount: '480+',
    desc: 'Spacious captain seats, generous boot space, and robust performance engineered for family hill circuits.',
    longDesc: 'Engineered for pure ride composure on long journeys. The benchmark choice for families, corporate delegations, and outstation hill circuit tours across South India.',
    price: 18,
    localPackage: '3,500',
    localHours: '8 hrs / 80 KM',
    minRun: '250',
    driverAllowance: 400,
    nightBatta: 500,
    img: '/images/dest1.png',
    gallery: ['/images/dest1.png', '/images/dest2.png', '/images/hero_car.png', '/images/dest1.png'],
    tagIcon: null,
    tagText: 'Most Popular',
    tagColor: 'amber',
    tagBadge: 'Tamil Nadu & Kerala Certified',
    features: [
      { icon: User, text: '6+1 Seats', subtext: 'Captain Chairs' },
      { icon: Thermometer, text: 'Dual AC', subtext: '2+3 Rear Vents' },
      { icon: Shield, text: 'Chauffeur', subtext: 'Uniformed & Vetted' },
      { icon: Briefcase, text: 'Luggage', subtext: '4 Large + 2 Bags' }
    ],
    highlights: [
      '360° Sanitized before every departure',
      'Speed Governor Capped (80 km/hr)',
      'Reclining Row 2&3'
    ],
    overview: [
      {
        title: 'Effortless Ghat Performance',
        desc: 'With 360 Nm of low-end diesel torque and an elevated 176 mm ground clearance, our Crysta negotiates 36 hairpin bends of Kotagiri (Ooty) and dense tea estate switchbacks without downshifting strain or motion sickness.',
        tag: 'Tested on Munnar, Kodaikanal, Ooty & Yercaud'
      },
      {
        title: 'First-Class Captain Seats',
        desc: 'Middle-row executive captain armchairs with individual slide, recline, folding armrests, and walk-through center cabin aisle. High-density under-thigh foam lets senior citizens and executives travel 500+ km without stiffness.',
        tag: 'Dedicated rest for hips & 120 DEG recline'
      },
      {
        title: 'Sound-Insulated Cabin',
        desc: 'Extensive floor-pan acoustic damping blankets road hiss and tire hum. Enjoy uninterrupted Zoom meetings on the expressway or peaceful sleep while your family covers long interstate stretches through Tamil Nadu and Kerala.',
        tag: '2 - 3x more silent than standard MUVs'
      }
    ],
    bestSuitedFor: ['Hill Station Escapes', 'Family Vacations', 'Temple Pilgrimage Circuits', 'Corporate Executive Delegations', 'Airport Transfers'],
    vClass: 'SUV / MUV',
    seats: '6 - 7 Seats',
    ac: true,
    quickTags: ['Hill Station Ready', 'Corporate Executive', 'Airport Transfers']
  },
  {
    id: '2',
    name: 'Swift Dzire Sedan',
    subtitle: 'Efficient & Nimble City Commuter',
    category: 'COMPACT EXECUTIVE SEDAN',
    rating: 4.8,
    reviewsCount: '320+',
    desc: 'Agile, smooth, and exceptionally economical for city transfers, corporate commutes, and couple trips.',
    longDesc: 'The definitive choice for couples and solo corporate travelers. Unmatched efficiency meets comfortable seating, perfect for navigating tight city traffic or cruising down expressways.',
    price: 13,
    localPackage: '2,200',
    localHours: '8 hrs / 80 KM',
    minRun: '250',
    driverAllowance: 400,
    nightBatta: 500,
    img: '/images/dest2.png',
    gallery: ['/images/dest2.png', '/images/dest1.png', '/images/hero_car.png', '/images/dest2.png'],
    tagIcon: CheckCircle2,
    tagText: 'Best Value',
    tagColor: 'emerald',
    tagBadge: '',
    features: [
      { icon: User, text: '4 Passengers', subtext: 'Plush Seats' },
      { icon: Thermometer, text: 'Chilled AC', subtext: 'Auto Climate' },
      { icon: Shield, text: 'Chauffeur', subtext: 'Uniformed & Vetted' },
      { icon: Briefcase, text: 'Luggage', subtext: '2 Trolley Bags' }
    ],
    highlights: [
      '360° Sanitized before every departure',
      'High Mileage Efficiency',
      'Perfect for quick transfers'
    ],
    overview: [
      {
        title: 'City Agility',
        desc: 'Navigates dense urban traffic and narrow alleyways with ease, ensuring you reach your destination on time.',
        tag: 'Perfect for Metro commutes'
      },
      {
        title: 'Comfortable Cabin',
        desc: 'Surprisingly spacious interior for its class, with supportive seating designed to reduce fatigue on daily commutes.',
        tag: 'Optimized ergonomics'
      },
      {
        title: 'Eco-Friendly Profile',
        desc: 'Highly fuel-efficient engine reduces your carbon footprint while delivering a smooth, silent ride.',
        tag: 'Green transit choice'
      }
    ],
    bestSuitedFor: ['City Transfers', 'Solo Business Trips', 'Couple Getaways', 'Airport Pickups'],
    vClass: 'Sedan',
    seats: '4 Seats',
    ac: true,
    quickTags: ['Corporate Executive', 'Airport Transfers']
  },
  {
    id: '3',
    name: 'Mahindra XUV700 AX7',
    subtitle: 'High-Tech Luxury SUV Experience',
    category: 'FULL-SIZE SUV',
    rating: 4.9,
    reviewsCount: '210+',
    desc: 'Dynamic high-ground-clearance luxury SUV providing commanding comfort and plush ride.',
    longDesc: 'Experience the future of Indian motoring. A powerhouse SUV equipped with advanced safety features, a panoramic sunroof, and a stunning digital cockpit.',
    price: 22,
    localPackage: '4,300',
    localHours: '8 hrs / 80 KM',
    minRun: '300',
    driverAllowance: 500,
    nightBatta: 600,
    img: '/images/hero_car.png',
    gallery: ['/images/hero_car.png', '/images/dest2.png', '/images/dest1.png', '/images/hero_car.png'],
    tagIcon: CheckCircle2,
    tagText: 'Premium SUV',
    tagColor: 'cyan',
    tagBadge: '',
    features: [
      { icon: User, text: '6 / 7 Seats', subtext: 'Premium Leather' },
      { icon: Thermometer, text: 'Dual Climate', subtext: 'Air Purifier' },
      { icon: Shield, text: 'ADAS Safety', subtext: 'Level 2 Autonomy' },
      { icon: Briefcase, text: 'Luggage', subtext: 'Adjustable Boot' }
    ],
    highlights: [
      'Advanced Driver Assistance Systems',
      'Skyroof Panoramic Sunroof',
      'Sony 3D Immersive Audio'
    ],
    overview: [
      {
        title: 'Dominating Road Presence',
        desc: 'A muscular stance coupled with high ground clearance allows the XUV700 to glide over broken roads and highways alike with absolute authority.',
        tag: 'Unfazed by bad roads'
      },
      {
        title: 'Tech-Laden Interior',
        desc: 'Dual 10.25-inch superscreens, built-in Alexa, and a custom Sony 3D sound system transform the cabin into a moving entertainment lounge.',
        tag: 'Next-gen connectivity'
      },
      {
        title: 'Uncompromised Safety',
        desc: 'Equipped with ADAS Level 2 features like adaptive cruise control, autonomous emergency braking, and lane keep assist for ultimate peace of mind.',
        tag: 'Safest in class'
      }
    ],
    bestSuitedFor: ['Premium Family Tours', 'VIP Escorts', 'Highway Cruising', 'Hill Station Escapes'],
    vClass: 'SUV / MUV',
    seats: '6 - 7 Seats',
    ac: true,
    quickTags: ['Hill Station Ready']
  },
  {
    id: '4',
    name: 'Toyota Innova Hycross',
    subtitle: 'The Pinnacle of Hybrid Luxury MUVs',
    category: 'HYBRID LUXURY MUV',
    rating: 5.0,
    reviewsCount: '150+',
    desc: 'Next-generation hybrid luxury featuring Ottoman captain chairs and whisper-quiet cruising.',
    longDesc: 'Redefining MPV luxury. The Hycross combines Toyota\'s legendary reliability with a cutting-edge hybrid powertrain, offering unparalleled smoothness and eco-friendly efficiency.',
    price: 24,
    localPackage: '4,800',
    localHours: '8 hrs / 80 KM',
    minRun: '250',
    driverAllowance: 500,
    nightBatta: 600,
    img: '/images/dest1.png',
    gallery: ['/images/dest1.png', '/images/hero_car.png', '/images/dest2.png', '/images/dest1.png'],
    tagIcon: Zap,
    tagText: 'Ultra Luxury',
    tagColor: 'blue',
    tagBadge: '',
    features: [
      { icon: User, text: '6 Seats', subtext: 'Ottoman Recliners' },
      { icon: Thermometer, text: 'Multi Zone', subtext: 'Rear Auto AC' },
      { icon: Zap, text: 'Hybrid EV', subtext: 'Silent Drive' },
      { icon: Briefcase, text: 'Luggage', subtext: '4 Huge Bags' }
    ],
    highlights: [
      'Powered Ottoman Captain Seats',
      'Panoramic Sunroof',
      'Self-Charging Hybrid Electric'
    ],
    overview: [
      {
        title: 'Whisper-Quiet EV Mode',
        desc: 'Experience pure silence at low speeds as the Hycross operates solely on its battery, providing a serene environment for rest or conversation.',
        tag: 'Zero NVH levels'
      },
      {
        title: 'Business-Class Comfort',
        desc: 'The second row features powered Ottoman seats with extending leg rests, mimicking the luxury of first-class air travel.',
        tag: 'Ultimate relaxation'
      },
      {
        title: 'Panoramic Brilliance',
        desc: 'A massive panoramic sunroof floods the spacious cabin with natural light, elevating the touring experience through scenic routes.',
        tag: 'Scenic viewing'
      }
    ],
    bestSuitedFor: ['Executive Delegations', 'Luxury Tours', 'VIP Airport Transfers', 'Senior Citizen Travel'],
    vClass: 'SUV / MUV',
    seats: '6 - 7 Seats',
    ac: true,
    quickTags: ['Corporate Executive', 'Airport Transfers']
  },
  {
    id: '5',
    name: 'Force Urbania VIP Van',
    subtitle: 'European-Style Luxury Group Touring',
    category: 'HIGH-ROOF LUXURY MINIVAN',
    rating: 4.9,
    reviewsCount: '95+',
    desc: 'World-class European styling with individual aircraft-style AC vents, ample headroom, and reclining buckets.',
    longDesc: 'The ultimate group travel solution. Stand up inside the cabin, enjoy individual AC vents, and relax in bucket seats that make 10-hour journeys feel like a breeze.',
    price: 28,
    localPackage: '6,200',
    localHours: '8 hrs / 80 KM',
    minRun: '250',
    driverAllowance: 600,
    nightBatta: 700,
    img: '/images/dest2.png',
    gallery: ['/images/dest2.png', '/images/dest1.png', '/images/hero_car.png', '/images/dest2.png'],
    tagIcon: Briefcase,
    tagText: 'Executive Group',
    tagColor: 'blue',
    tagBadge: '',
    features: [
      { icon: User, text: '12 - 17 Seats', subtext: 'Reclining Buckets' },
      { icon: Thermometer, text: 'Individual AC', subtext: 'Aircraft Style' },
      { icon: Shield, text: 'Safety', subtext: 'Rollover Protection' },
      { icon: Briefcase, text: 'Charging', subtext: 'USB & Type-C' }
    ],
    highlights: [
      'Stand-up cabin height',
      'Independent suspension for car-like ride',
      'Individual reading lamps and vents'
    ],
    overview: [
      {
        title: 'Stand-Up Cabin Architecture',
        desc: 'Class-leading interior height allows passengers to stand and move around freely, completely eliminating the claustrophobia associated with long van rides.',
        tag: 'Walk-in comfort'
      },
      {
        title: 'Aircraft-Style Amenities',
        desc: 'Every passenger gets individual AC vents, reading lights, and USB charging ports, ensuring personalized comfort regardless of seating position.',
        tag: 'Personalized climate'
      },
      {
        title: 'Car-Like Ride Quality',
        desc: 'Independent front suspension absorbs highway undulations and rural potholes seamlessly, delivering a surprisingly smooth ride for a vehicle of this size.',
        tag: 'Fatigue-free touring'
      }
    ],
    bestSuitedFor: ['Corporate Offsites', 'Large Family Vacations', 'Wedding Logistics', 'Multi-day Group Tours'],
    vClass: 'Luxury Coach',
    seats: '12+ Seats',
    ac: true,
    quickTags: ['Corporate Executive', 'Pilgrimage Group']
  },
  {
    id: '6',
    name: 'Tempo Traveller 12 - 18',
    subtitle: 'The Classic Indian Group Carrier',
    category: 'GROUP TOURING VEHICLE',
    rating: 4.8,
    reviewsCount: '650+',
    desc: 'Comfortable pushback seating and dedicated luggage carrier ideal for extended temple circuits.',
    longDesc: 'The backbone of Indian group tourism. Rugged, reliable, and equipped with modern comforts like dual AC and high-fidelity audio systems for entertaining journeys.',
    price: 26,
    localPackage: '5,500',
    localHours: '8 hrs / 80 KM',
    minRun: '300',
    driverAllowance: 600,
    nightBatta: 700,
    img: '/images/hero_car.png',
    gallery: ['/images/hero_car.png', '/images/dest2.png', '/images/dest1.png', '/images/hero_car.png'],
    tagIcon: MapPin,
    tagText: 'Family & Pilgrimage',
    tagColor: 'slate',
    tagBadge: '',
    features: [
      { icon: User, text: '12-18 Seats', subtext: 'Pushback Chairs' },
      { icon: Thermometer, text: 'Dual AC', subtext: 'Roof-mounted' },
      { icon: Briefcase, text: 'Carrier', subtext: 'Roof + Boot Space' },
      { icon: PlaySquare, text: 'Entertainment', subtext: 'Audio/Video System' }
    ],
    highlights: [
      'Ample overhead luggage space',
      'Deep pushback reclining seats',
      'Sturdy build for rural roads'
    ],
    overview: [
      {
        title: 'Proven Reliability',
        desc: 'Built on a chassis that has conquered every terrain in India, the Tempo Traveller guarantees you will reach the most remote temples and hill stations safely.',
        tag: 'Unstoppable workhorse'
      },
      {
        title: 'Group Entertainment',
        desc: 'Equipped with a central LCD screen and surround audio, keeping large groups entertained during long interstate transits.',
        tag: 'On-board theatre'
      },
      {
        title: 'Spacious Accommodation',
        desc: 'Deep pushback seats offer excellent resting angles for overnight journeys, complemented by wide windows for panoramic sightseeing.',
        tag: 'Restful night travel'
      }
    ],
    bestSuitedFor: ['Temple Pilgrimages', 'School/College Trips', 'Budget Group Tours', 'Event Logistics'],
    vClass: 'Luxury Coach',
    seats: '12+ Seats',
    ac: true,
    quickTags: ['Pilgrimage Group', 'Hill Station Ready']
  }
];
