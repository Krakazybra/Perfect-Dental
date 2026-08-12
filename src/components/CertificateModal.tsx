import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-surface rounded-2xl overflow-hidden shadow-2xl p-4 md:p-6 border border-outline-variant"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-on-surface hover:text-primary bg-surface/80 rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-surface-container rounded-xl p-2 mb-4">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-h-[70vh] w-auto object-contain rounded shadow-md"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-on-surface">{certificate.title}</h3>
            <p className="text-xs text-on-surface-variant mt-0.5">{certificate.issuer}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-primary font-medium bg-primary/10 px-3 py-1.5 rounded-lg">
            <ZoomIn className="w-4 h-4" />
            Подлинность подтверждена
          </div>
        </div>
      </div>
    </div>
  );
};
