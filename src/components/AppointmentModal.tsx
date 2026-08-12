import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, User, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, ALL_SERVICES, DOCTORS } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService);
  const [doctor, setDoctor] = useState(preselectedDoctor);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Я хочу записаться в клинику DENTA.\nИмя: ${
        name || 'Не указано'
      }\nТелефон: ${phone || 'Не указано'}\nУслуга: ${
        service || 'Консультация'
      }${doctor ? `\nВрач: ${doctor}` : ''}${
        comment ? `\nКомментарий: ${comment}` : ''
      }`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappPhone}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setService('');
    setDoctor('');
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-surface border border-outline-variant rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">Заявка принята!</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              Наш администратор свяжется с вами в течение 10 минут для подтверждения времени приема.
            </p>
            <div className="space-y-3">
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                Ускорить запись через WhatsApp
              </button>
              <button
                onClick={handleReset}
                className="w-full border border-outline text-on-surface font-medium px-6 py-3 rounded-xl hover:bg-surface-container transition-colors"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                DENTA Clinic
              </span>
              <h2 className="text-2xl font-bold text-on-surface mt-1">Запись на приём</h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Заполните форму или свяжитесь с нами сразу в WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Ваше имя *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Номер телефона *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (777) 000-00-00"
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Выберите услугу
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
                >
                  <option value="">-- Первичная консультация --</option>
                  {ALL_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.priceFrom})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Выберите врача (необязательно)
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
                >
                  <option value="">-- Любой свободный специалист --</option>
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.specialty})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Комментарий или симптомы
                </label>
                <textarea
                  rows={2}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Опишите, что вас беспокоит..."
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl hover:bg-primary-container transition-colors shadow-md text-sm uppercase tracking-wider"
                >
                  Отправить заявку
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-outline-variant"></div>
                  <span className="flex-shrink mx-3 text-xs text-on-surface-variant uppercase">
                    или
                  </span>
                  <div className="flex-grow border-t border-outline-variant"></div>
                </div>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-medium py-2.5 rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Быстрая запись в WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
