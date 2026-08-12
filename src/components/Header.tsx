import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointment,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Услуги' },
    { id: 'all-services', label: 'Каталог' },
    { id: 'doctors', label: 'Врачи' },
    { id: 'price', label: 'Прайс' },
    { id: 'before-after', label: 'До/После' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'certificates', label: 'Сертификаты' },
    { id: 'promotions', label: 'Акции' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${CLINIC_INFO.whatsappPhone}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter h-20 flex justify-between items-center">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-primary dark:text-primary-fixed hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>DENTA</span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phones[0]}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {CLINIC_INFO.phones[0]}
          </a>

          <button
            onClick={openWhatsApp}
            className="hidden sm:flex items-center gap-1.5 bg-surface-container-lowest border border-[#25D366] text-[#25D366] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">Записаться в WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </button>

          <button
            onClick={onOpenAppointment}
            className="hidden md:block bg-primary text-on-primary px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors cursor-pointer active:scale-95"
          >
            Записаться
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-surface-container rounded-lg"
            aria-label="Переключить меню"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slideout Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-outline-variant/30 px-6 py-6 space-y-4 animate-fadeIn shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-outline-variant/30">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 space-y-3">
            <div className="text-xs text-on-surface-variant">
              <p className="font-semibold text-on-surface mb-1">Контакты клиники:</p>
              <p>{CLINIC_INFO.address}</p>
              <p className="font-medium text-primary mt-1">{CLINIC_INFO.phones[0]}</p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={onOpenAppointment}
                className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg text-xs font-semibold uppercase text-center"
              >
                Записаться на прием
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-[#25D366] text-white p-2.5 rounded-lg flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
