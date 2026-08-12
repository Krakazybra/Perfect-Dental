import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointment }) => {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest border-t border-outline-variant/50 pt-16 pb-24 md:pb-16 text-on-surface">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold tracking-tighter text-primary text-left"
          >
            DENTA
          </button>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Премиальная стоматология с европейским подходом к лечению и комфорту пациентов в Алматы.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="bg-primary text-on-primary text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-container transition-colors uppercase tracking-wider"
            >
              Записаться онлайн
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">Навигация</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">
                Услуги (Сетка)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('all-services')} className="hover:text-primary transition-colors">
                Каталог услуг
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('doctors')} className="hover:text-primary transition-colors">
                Наши врачи
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('price')} className="hover:text-primary transition-colors">
                Прайс-лист
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('before-after')} className="hover:text-primary transition-colors">
                До / После
              </button>
            </li>
          </ul>
        </div>

        {/* Informational Pages */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">Клиника</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>
              <button onClick={() => onNavigate('reviews')} className="hover:text-primary transition-colors">
                Отзывы клиентов
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('certificates')} className="hover:text-primary transition-colors">
                Сертификаты
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('promotions')} className="hover:text-primary transition-colors">
                Акции и спецпредложения
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contacts')} className="hover:text-primary transition-colors">
                Контакты и адрес
              </button>
            </li>
          </ul>
        </div>

        {/* Contacts Info */}
        <div className="space-y-3 text-sm text-on-surface-variant">
          <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">Контакты</h4>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{CLINIC_INFO.address}</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:underline">
              {CLINIC_INFO.phones[0]}
            </a>
          </p>
          <p className="flex items-start gap-2 text-xs">
            <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>
              {CLINIC_INFO.workingHours.weekdays}
              <br />
              {CLINIC_INFO.workingHours.saturday}
            </span>
          </p>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline pt-1"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Написать в WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter pt-6 border-t border-outline-variant/30 text-xs text-on-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024–2026 DENTA. Все права защищены.</p>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Политика конфиденциальности</span>
          <span className="hover:underline cursor-pointer">Юридическая информация</span>
        </div>
      </div>
    </footer>
  );
};
