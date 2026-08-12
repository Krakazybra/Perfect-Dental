import React from 'react';
import { SPECIAL_OFFERS } from '../data/clinicData';
import { Stethoscope, Users, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface PromotionsPageProps {
  onOpenAppointment: (serviceTitle?: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Акции и спецпредложения
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Инвестируйте в здоровье вашей улыбки с выгодой. Мы подготовили специальные программы, объединяющие высокое качество лечения и комфортные цены.
        </p>
      </div>

      {/* Offers Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Offer 1: Diagnostic Package (Full Width) */}
        <article className="relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/50 group shadow-sm md:col-span-2 md:grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={SPECIAL_OFFERS[0].image}
              alt={SPECIAL_OFFERS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent"></div>
          </div>

          <div className="relative p-8 md:p-12 flex flex-col justify-center z-10 bg-surface-container-low">
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Stethoscope className="w-4 h-4" />
              {SPECIAL_OFFERS[0].badge}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mb-3">
              {SPECIAL_OFFERS[0].title}
            </h2>

            <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
              {SPECIAL_OFFERS[0].description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
              <div>
                <span className="text-xs text-tertiary line-through mr-2">
                  {SPECIAL_OFFERS[0].oldPrice}
                </span>
                <span className="text-3xl font-bold text-primary">
                  {SPECIAL_OFFERS[0].newPrice}
                </span>
              </div>

              <button
                onClick={() => onOpenAppointment(SPECIAL_OFFERS[0].title)}
                className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm"
              >
                Записаться
              </button>
            </div>
          </div>
        </article>

        {/* Offer 2: Family */}
        <article className="relative rounded-2xl bg-surface-container-low border border-outline-variant/50 p-8 flex flex-col shadow-sm hover:-translate-y-1 transition-transform">
          <div className="mb-4 h-12 w-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-on-surface mb-3">{SPECIAL_OFFERS[1].title}</h3>

          <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
            {SPECIAL_OFFERS[1].description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
            <span className="text-3xl font-bold text-primary">{SPECIAL_OFFERS[1].newPrice}</span>
            <button
              onClick={() => onOpenAppointment(SPECIAL_OFFERS[1].title)}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors"
            >
              Получить
            </button>
          </div>
        </article>

        {/* Offer 3: Whitening */}
        <article className="relative rounded-2xl bg-surface-container-low border border-outline-variant/50 p-8 flex flex-col shadow-sm hover:-translate-y-1 transition-transform overflow-hidden">
          <div className="mb-4 h-12 w-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center relative z-10">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-on-surface mb-3 relative z-10">
            {SPECIAL_OFFERS[2].title}
          </h3>

          <p className="text-sm text-on-surface-variant mb-6 flex-grow relative z-10 leading-relaxed">
            {SPECIAL_OFFERS[2].description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30 relative z-10">
            <div>
              <span className="text-xs text-tertiary line-through block">
                {SPECIAL_OFFERS[2].oldPrice}
              </span>
              <span className="text-2xl font-bold text-primary">
                {SPECIAL_OFFERS[2].newPrice}
              </span>
            </div>

            <button
              onClick={() => onOpenAppointment(SPECIAL_OFFERS[2].title)}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors"
            >
              Записаться
            </button>
          </div>
        </article>

        {/* Offer 4: Implantation Turnkey (Full Width) */}
        <article className="relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/50 group shadow-sm md:col-span-2 grid md:grid-cols-5 items-center">
          <div className="md:col-span-3 p-8 md:p-12 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              {SPECIAL_OFFERS[3].badge}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mb-3">
              {SPECIAL_OFFERS[3].title}
            </h2>

            <p className="text-sm text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              {SPECIAL_OFFERS[3].description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <span className="text-3xl font-bold text-primary">{SPECIAL_OFFERS[3].newPrice}</span>
              <button
                onClick={() => onOpenAppointment(SPECIAL_OFFERS[3].title)}
                className="bg-primary text-on-primary px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm"
              >
                Получить консультацию
              </button>
            </div>
          </div>

          <div className="md:col-span-2 h-64 md:h-full relative overflow-hidden hidden md:block">
            <img
              src={SPECIAL_OFFERS[3].image}
              alt={SPECIAL_OFFERS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-container-low"></div>
          </div>
        </article>
      </div>
    </div>
  );
};
