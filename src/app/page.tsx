'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PopularDestinations from '@/components/PopularDestinations';
import HowItWorks from '@/components/HowItWorks';
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
      name: `${searchData.pickupLocation} to ${searchData.dropLocation} (${searchData.activeTab.toUpperCase()})`,
      perDayRate: 2499,
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Announcement & Header */}
      <TopBar />
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section with Tabbed Booking Search Bar */}
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

        {/* 4. How It Works (3-Car Visual Process) */}
        <HowItWorks />

        {/* 5. Interactive Vehicle Fleet Directory */}
        <FleetSection
          onBookCar={(car) => handleOpenBookingModal(car)}
        />

        {/* 6. Live Outstation Fare Calculator */}
        <FareCalculator
          onBookEstimatedFare={handleBookEstimatedFare}
        />

        {/* 7. Promotional Deals & Special Offers */}
        <OfferBanners
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 8. Why Choose Us (Alternating Black & Blue 6-Card Grid) */}
        <WhyChooseUs />

        {/* 9. Call-To-Action Banner */}
        <CtaBanner
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 10. Customer Testimonials & Reviews */}
        <Testimonials />

        {/* 11. Travel Guides & News (4 Cards Grid) */}
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
