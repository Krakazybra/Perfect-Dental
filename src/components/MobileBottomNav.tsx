import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Home, Stethoscope, Calendar, Phone, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointment,
}) => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${CLINIC_INFO.whatsappPhone}`, '_blank');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface/95 backdrop-blur-lg border-t border-outline-variant/50 shadow-lg flex justify-around items-center h-16 px-2">
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center justify-center w-1/5 py-1 transition-all ${
          currentPage === 'home'
            ? 'text-primary font-bold scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Главная</span>
      </button>

      <button
        onClick={() => onNavigate('services')}
        className={`flex flex-col items-center justify-center w-1/5 py-1 transition-all ${
          currentPage === 'services' || currentPage === 'all-services'
            ? 'text-primary font-bold scale-105'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <Stethoscope className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Услуги</span>
      </button>

      <button
        onClick={onOpenAppointment}
        className="flex flex-col items-center justify-center w-1/5 py-1 text-primary font-semibold hover:opacity-80 active:scale-95 transition-transform"
      >
        <div className="bg-primary text-on-primary p-1.5 rounded-full mb-0.5 shadow-sm">
          <Calendar className="w-4 h-4" />
        </div>
        <span className="text-[10px]">Запись</span>
      </button>

      <button
        onClick={openWhatsApp}
        className="flex flex-col items-center justify-center w-1/5 py-1 text-[#25D366] hover:opacity-80 active:scale-95 transition-transform"
      >
        <MessageSquare className="w-5 h-5 mb-0.5 fill-current" />
        <span className="text-[10px]">WhatsApp</span>
      </button>

      <a
        href={`tel:${CLINIC_INFO.phones[0]}`}
        className="flex flex-col items-center justify-center w-1/5 py-1 text-on-surface-variant hover:text-primary transition-colors"
      >
        <Phone className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Звонок</span>
      </a>
    </nav>
  );
};
