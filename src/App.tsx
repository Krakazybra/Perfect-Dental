import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AppointmentModal } from './components/AppointmentModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AllServicesPage } from './pages/AllServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { PriceListPage } from './pages/PriceListPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { ContactsPage } from './pages/ContactsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenAppointment = (serviceOrDoctor?: string, isDoctor: boolean = false) => {
    if (isDoctor) {
      setPreselectedDoctor(serviceOrDoctor || '');
      setPreselectedService('');
    } else {
      setPreselectedService(serviceOrDoctor || '');
      setPreselectedDoctor('');
    }
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
    setPreselectedService('');
    setPreselectedDoctor('');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Header Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={setCurrentPage}
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentPage === 'all-services' && (
          <AllServicesPage
            onOpenAppointment={(serviceTitle) => handleOpenAppointment(serviceTitle, false)}
          />
        )}

        {currentPage === 'doctors' && (
          <DoctorsPage
            onOpenAppointment={(doctorName) => handleOpenAppointment(doctorName, true)}
          />
        )}

        {currentPage === 'price' && (
          <PriceListPage
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentPage === 'before-after' && (
          <BeforeAfterPage
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentPage === 'certificates' && <CertificatesPage />}

        {currentPage === 'promotions' && (
          <PromotionsPage
            onOpenAppointment={(serviceTitle) => handleOpenAppointment(serviceTitle, false)}
          />
        )}

        {currentPage === 'contacts' && <ContactsPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        preselectedService={preselectedService}
        preselectedDoctor={preselectedDoctor}
      />
    </div>
  );
}
