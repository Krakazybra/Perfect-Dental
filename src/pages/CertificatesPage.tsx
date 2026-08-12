import React, { useState, useRef } from 'react';
import { CERTIFICATES } from '../data/clinicData';
import { Certificate } from '../types';
import { CertificateModal } from '../components/CertificateModal';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Title & Controls Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-3">
            Наши сертификаты
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Подтверждение квалификации наших специалистов ведущими мировыми центрами имплантологии, ортопедии и эстетической стоматологии.
          </p>
        </div>

        {/* Gallery Scroll Controls */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={scrollLeft}
            aria-label="Предыдущий сертификат"
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Следующий сертификат"
            className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-md cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Gallery Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6"
      >
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className="min-w-[280px] sm:min-w-[340px] flex-shrink-0 snap-center">
            <div
              onClick={() => setSelectedCertificate(cert)}
              className="bg-surface-container-low border border-outline-variant rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl bg-surface">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface/90 text-primary font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4" />
                    Увеличить
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-on-surface line-clamp-1">{cert.title}</h3>
                <p className="text-xs text-on-surface-variant line-clamp-1">{cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};
