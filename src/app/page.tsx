'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PopularDestinations from '@/components/PopularDestinations';
import TourBanners from '@/components/TourBanners';
import FleetSection from '@/components/FleetSection';
import FareCalculator from '@/components/FareCalculator';
import OfferBanners from '@/components/OfferBanners';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBanner from '@/components/CtaBanner';
import Testimonials from '@/components/Testimonials';
import TravelBlog from '@/components/TravelBlog';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleOpenBookingModal = (item?: any) => {
    setSelectedItem(item || null);
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSearchCars = (searchData: any) => {
    setSelectedItem({
      name: `${searchData.carModel} (${searchData.location})`,
      perDayRate: 2200,
    });
    setIsModalOpen(true);
  };

  const handleBookEstimatedFare = (estimate: any) => {
    setSelectedItem({
      name: `${estimate.carType} Outstation (${estimate.distanceKm} KMs, ${estimate.days} Days)`,
      perDayRate: estimate.totalFare,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-orange-500 selection:text-white">
      
      {/* Top Announcement & Header */}
      <TopBar />
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section with Floating Search Bar */}
        <HeroSection
          onSearchCars={handleSearchCars}
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 2. About Company Spotlight */}
        <AboutSection />

        {/* 3. Popular Outstation Tour Destinations */}
        <PopularDestinations
          onSelectDestination={(dest) => handleOpenBookingModal(dest)}
        />

        {/* 4. Rental Tariff / Featured Vehicles (3-Car Showcase & Innova Tariff) */}
        <FleetSection
          onBookCar={(car) => handleOpenBookingModal(car)}
        />

        {/* 5. Frosted Glass Tour Package Banners Grid */}
        <TourBanners
          onOpenBookingModal={(item) => handleOpenBookingModal(item)}
        />

        {/* 6. Why Travel With Us? (Alternating Black & Blue Cards) */}
        <WhyChooseUs />

        {/* 7. Live Outstation Fare Calculator */}
        <FareCalculator
          onBookEstimatedFare={handleBookEstimatedFare}
        />

        {/* 8. Promotional Deals & Special Offers */}
        <OfferBanners
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 9. Call-To-Action Banner ("Are You Ready to Planning a Trip?") */}
        <CtaBanner
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 10. Client Testimonials & Reviews */}
        <Testimonials />

        {/* 11. Ride Experiences / Real Journeys Gallery Grid */}
        <TravelBlog />

        {/* 12. FAQ Accordion */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal Dialog */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBookingModal}
        selectedItem={selectedItem}
      />

    </div>
  );
}
