import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, FEATURED_GRID_SERVICES } from '../data/clinicData';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenAppointment }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 uppercase tracking-tight">
          ВИДЫ УСЛУГ СТОМАТОЛОГИИ <span className="text-primary">DENTA</span>
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Мы предлагаем индивидуальный подход к каждому пациенту, учитывая их желания и потребности, чтобы достичь оптимального результата
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_GRID_SERVICES.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate('all-services')}
            className="group relative rounded-2xl overflow-hidden border border-outline-variant/50 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-surface-container"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-wide uppercase">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        {/* Content */}
        <div className="relative z-10 text-center md:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-on-primary mb-4">
            Не нашли нужную услугу ?
          </h2>
          <p className="text-base text-on-primary/80 mb-6">
            Оставьте заявку и получите бесплатную консультацию!
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={onOpenAppointment}
              className="bg-surface text-primary font-medium text-sm px-8 py-4 rounded-full hover:bg-surface-variant transition-colors shadow-lg active:scale-95"
            >
              Получить консультацию
            </button>
            <button
              onClick={() => onNavigate('all-services')}
              className="border border-white/40 text-white font-medium text-sm px-6 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Полный каталог услуг
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative Tooth Image */}
        <div className="relative z-10 w-48 md:w-64 h-48 md:h-64 pointer-events-none shrink-0">
          <img
            src={CLINIC_INFO.tooth3dImage}
            alt="3D Tooth DENTA"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
