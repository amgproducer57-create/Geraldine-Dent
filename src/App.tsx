import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';
import { BookingModal } from './components/common/BookingModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { TreatmentsPage } from './components/pages/TreatmentsPage';
import { SmilesPage } from './components/pages/SmilesPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Sync with URL Hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = ['inicio', 'nosotros', 'tratamientos', 'sonrisas', 'contacto'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'inicio' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (service?: string) => {
    setPreselectedService(service || '');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#1E2A32] font-inter relative selection:bg-[#7FC8BC]/30 selection:text-[#1E2A32]">
      {/* Floating Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'nosotros' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'tratamientos' && (
          <TreatmentsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'sonrisas' && (
          <SmilesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contacto' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={preselectedService}
      />

      {/* Minimalist Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
