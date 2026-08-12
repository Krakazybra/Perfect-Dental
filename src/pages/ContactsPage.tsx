import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSent(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
          Наши Контакты
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Свяжитесь с нами для записи на консультацию или задайте любой интересующий вас вопрос.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address */}
          <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Адрес клиники</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2">Телефоны для связи</h3>
                <div className="space-y-1">
                  {CLINIC_INFO.phones.map((ph, idx) => (
                    <a
                      key={idx}
                      href={`tel:${ph}`}
                      className="block text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {ph}
                    </a>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline mt-4"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Написать в WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2">Режим работы</h3>
                <p className="text-sm text-on-surface-variant">{CLINIC_INFO.workingHours.weekdays}</p>
                <p className="text-sm text-on-surface-variant">{CLINIC_INFO.workingHours.saturday}</p>
                <p className="text-sm text-on-surface-variant">{CLINIC_INFO.workingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Map */}
        <div className="lg:col-span-7 space-y-8">
          {/* Contact Form */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-on-surface mb-2">Оставьте заявку</h2>
            <p className="text-sm text-on-surface-variant mb-6">
              Заполните форму, и наш администратор свяжется с вами в течение 10 минут для уточнения деталей.
            </p>

            {isSent ? (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-on-surface">Заявка успешно отправлена!</h3>
                <p className="text-sm text-on-surface-variant">
                  Мы перезвоним вам в ближайшее время на номер {phone}.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-2 text-xs font-semibold text-primary underline"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___ __ __"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Сообщение (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Кратко опишите вашу проблему..."
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary text-on-primary font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl w-full sm:w-auto hover:bg-primary-container transition-colors shadow-sm active:scale-95 cursor-pointer"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>

          {/* Map Image Preview */}
          <div className="rounded-2xl overflow-hidden border border-outline-variant h-[300px] sm:h-[350px] bg-surface-container-low relative group shadow-sm">
            <img
              src={CLINIC_INFO.mapImage}
              alt="DENTA Location Map Almaty"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-surface/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-outline-variant/50 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary fill-primary" />
                <span className="text-xs font-bold text-on-surface">Аль-Фараби, 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
