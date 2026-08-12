import React from 'react';
import { PageId } from '../types';
import {
  CLINIC_INFO,
  FEATURED_GRID_SERVICES,
  PLATFORM_RATINGS,
  BEFORE_AFTER_CASES,
  DOCTORS,
} from '../data/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Star, ShieldCheck, ArrowRight, MessageSquare, Award, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointment: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAppointment }) => {
  const primaryCase = BEFORE_AFTER_CASES[0];

  return (
    <div className="space-y-16 md:space-y-24 pb-16 pt-20 md:pt-28">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container-lowest border border-outline-variant/40 p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Text & CTA Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left z-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{CLINIC_INFO.tagline}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-on-surface leading-[1.12] tracking-tight">
                  Стоматология, в которую хочется возвращаться
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                  {CLINIC_INFO.description}
                </p>

                <div className="flex flex-wrap gap-3.5 pt-2">
                  <button
                    onClick={onOpenAppointment}
                    className="bg-primary text-on-primary font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-primary-container transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Записаться на прием
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="border border-primary text-primary font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-primary/5 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    Наши услуги
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-outline-variant/40 pt-6 mt-4">
                {CLINIC_INFO.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-primary font-bold text-2xl sm:text-3xl mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-on-surface-variant text-xs sm:text-sm leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Doctor Hero Image Container */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-center">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface-container">
                <img
                  src={CLINIC_INFO.leadDoctorImage}
                  alt="Главный врач DENTA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-outline-variant/30 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-bold text-xs text-on-surface">4.9 (500+ отзывов)</span>
                </div>

                {/* Doctor Info Glass Card */}
                <div className="absolute bottom-4 inset-x-4 bg-surface/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-outline-variant/30">
                  <div className="font-bold text-on-surface text-base">Берикжанов Максат</div>
                  <div className="text-xs text-on-surface-variant font-medium">Главный врач, хирург-имплантолог • Стаж 15 лет</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Premium Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2">
              Высокие стандарты
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface">
              Виды услуг стоматологии DENTA
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 cursor-pointer"
          >
            Смотреть все виды услуг
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_GRID_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('services')}
              className="group relative rounded-2xl overflow-hidden border border-outline-variant/50 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-surface-container"
            >
              {/* Background HD Image */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ratings Cards Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-on-surface mb-2">Независимый рейтинг</h2>
          <p className="text-on-surface-variant text-base">честных отзывов от наших клиентов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORM_RATINGS.map((rating, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('reviews')}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full border border-outline-variant/60 flex items-center justify-center shrink-0 p-3 bg-white shadow-sm">
                  <img
                    src={rating.logo}
                    alt={rating.platform}
                    referrerPolicy="no-referrer"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-1 text-primary text-3xl font-bold">
                    <Star className="w-6 h-6 fill-primary text-primary inline" />
                    <span>{rating.rating}</span>
                    <span className="text-xs text-secondary font-normal">из {rating.maxRating}</span>
                  </div>
                  <span className="text-sm font-semibold underline text-on-surface hover:text-primary">
                    {rating.linkText}
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant">{rating.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After Preview Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">
                Результаты работы
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">До и После лечения</h2>
            </div>
            <button
              onClick={() => onNavigate('before-after')}
              className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 cursor-pointer"
            >
              Все клинические случаи
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-on-surface">{primaryCase.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {primaryCase.patientProblem}
              </p>
              <div className="space-y-2 text-sm pt-2">
                <p className="font-semibold text-on-surface">Проделанная работа:</p>
                <ul className="space-y-1 text-on-surface-variant text-xs sm:text-sm">
                  {primaryCase.workDone.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-semibold text-primary text-sm pt-3 border-t border-outline-variant/30">
                Гарантия на работу выдана на {primaryCase.guaranteeYears} лет!
              </p>
            </div>

            <div className="lg:col-span-6">
              <BeforeAfterSlider
                beforeImage={primaryCase.beforeImage}
                afterImage={primaryCase.afterImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2">
              Экспертиза
            </span>
            <h2 className="text-3xl font-bold text-on-surface">Наши врачи</h2>
          </div>
          <button
            onClick={() => onNavigate('doctors')}
            className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 cursor-pointer"
          >
            Все врачи
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.slice(0, 4).map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => onNavigate('doctors')}
              className="bg-surface-container-low border border-outline-variant rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-on-surface mb-1">{doctor.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-xs text-on-surface-variant">Стаж: {doctor.experienceYears} лет</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Consultation Banner */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="relative z-10 text-center md:text-left max-w-xl text-on-primary">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Не нашли нужную услугу?</h2>
            <p className="text-base text-on-primary/80 mb-6">
              Оставьте заявку и получите бесплатную консультацию главного врача!
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={onOpenAppointment}
                className="bg-surface text-primary font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-surface-variant transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Получить консультацию
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative z-10 w-48 md:w-64 h-48 md:h-64 pointer-events-none shrink-0">
            <img
              src={CLINIC_INFO.tooth3dImage}
              alt="3D Tooth DENTA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain drop-shadow-2xl opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

