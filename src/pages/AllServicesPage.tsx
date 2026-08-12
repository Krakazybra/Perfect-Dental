import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/clinicData';
import { ArrowRight, Stethoscope, Search, Check } from 'lucide-react';

interface AllServicesPageProps {
  onOpenAppointment: (serviceTitle?: string) => void;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Все', ...Array.from(new Set(ALL_SERVICES.map((s) => s.category)))];

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'Все' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Каталог медицинских услуг
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Высокотехнологичная стоматология с акцентом на комфорт, эстетику и долгосрочное здоровье. Мы предлагаем комплексный подход к каждому пациенту.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/40">
        {/* Search Input */}
        <div className="relative md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по услугам..."
            className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            className="bg-surface-container-low border border-outline-variant rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="h-64 overflow-hidden relative bg-surface-container">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {service.isPopular && (
                <span className="absolute top-3 right-3 bg-primary text-on-primary text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-md">
                  Популярное
                </span>
              )}
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Stethoscope className="w-5 h-5 shrink-0" />
                <h3 className="text-xl font-bold text-on-surface">{service.title}</h3>
              </div>

              <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-end justify-between mt-auto pt-4 border-t border-outline-variant/30">
                <div>
                  <span className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5">
                    Стоимость
                  </span>
                  <span className="text-xl font-bold text-primary">{service.priceFrom}</span>
                </div>

                <button
                  onClick={() => onOpenAppointment(service.title)}
                  className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-semibold hover:bg-primary-container transition-colors active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  Записаться
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
