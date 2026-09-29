'use client';

import React, { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PopularDestinations from '@/components/PopularDestinations';
import TourBanners from '@/components/TourBanners';
import FleetSection from '@/components/FleetSection';
import InnovaTariff from '@/components/InnovaTariff';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBanner from '@/components/CtaBanner';
import Testimonials from '@/components/Testimonials';
import TravelBlog from '@/components/TravelBlog';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/home-content')
      .then(res => res.json())
      .then(data => {
        if (!data.error) setHomeData(data);
      })
      .catch(console.error);
  }, []);

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-orange-500 selection:text-white overflow-x-hidden w-full">
      
      {/* Top Announcement & Header */}
      <TopBar />
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section with Floating Search Bar */}
        <HeroSection
          data={homeData?.hero}
          onSearchCars={handleSearchCars}
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 2. About Company Spotlight */}
        <AboutSection data={homeData?.about} />

        {/* 3. Popular Outstation Tour Destinations */}
        <PopularDestinations
          data={homeData?.popularDestinations}
          onSelectDestination={(dest) => handleOpenBookingModal(dest)}
        />

        {/* 4. Rental Tariff / Featured Vehicles (3-Car Showcase) */}
        <FleetSection
          data={homeData?.featureVehicles}
          onBookCar={(car) => handleOpenBookingModal(car)}
        />

        {/* 4.5. Toyota Innova Tariff Card */}
        <InnovaTariff
          data={homeData?.generalToyota}
          onBookCar={(car) => handleOpenBookingModal(car)}
        />

        {/* 5. Frosted Glass Tour Package Banners Grid */}
        <TourBanners
          data={homeData?.tourPackages}
          onOpenBookingModal={(item) => handleOpenBookingModal(item)}
        />

        {/* 6. Why Travel With Us? (Alternating Black & Blue Cards) */}
        <WhyChooseUs data={homeData?.whyTravelWithUs} />

        {/* 7. Client Testimonials & Reviews */}
        <Testimonials />

        {/* 8. Call-To-Action Banner ("Plan Your Trip") */}
        <CtaBanner
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 9. Ride Experiences / Real Journeys Gallery Grid */}
        <TravelBlog data={homeData?.rideExperiences} />

        {/* 10. Final Call to Action */}
        <BottomCTA onOpenBookingModal={() => handleOpenBookingModal()} />

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
