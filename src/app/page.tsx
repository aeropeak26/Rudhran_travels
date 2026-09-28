'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBanner from '@/components/CtaBanner';
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col poppins selection:bg-orange-500 selection:text-white">
      
      {/* Top Announcement & Header */}
      <TopBar />
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Why Travel With Us? (Bento Box) */}
        <WhyChooseUs />

        {/* 2. Call-To-Action Banner ("Plan Your Trip") */}
        <CtaBanner
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

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
