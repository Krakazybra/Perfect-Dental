import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Award, Calendar } from 'lucide-react';

interface DoctorsPageProps {
  onOpenAppointment: (doctorName?: string) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Page Title */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-6">
          Наши врачи
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Команда профессионалов DENTA объединяет ведущих специалистов в области стоматологии. Мы постоянно совершенствуем свои навыки и используем передовые технологии, чтобы обеспечить вам максимально комфортное и эффективное лечение.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOCTORS.map((doctor) => (
          <article
            key={doctor.id}
            className="bg-surface-container-low border border-outline-variant rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-surface-container">
              <img
                src={doctor.image}
                alt={doctor.name}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-on-surface mb-1">{doctor.name}</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">
                  {doctor.specialty}
                </p>
              </div>

              <div className="text-sm text-on-surface-variant mb-6 flex-grow space-y-3">
                <p className="flex items-center gap-2 font-medium text-on-surface">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <span>Стаж: {doctor.experienceYears} лет</span>
                </p>
                <p className="leading-relaxed">{doctor.description}</p>
              </div>

              <button
                onClick={() => onOpenAppointment(doctor.name)}
                className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors flex justify-center items-center gap-2 shadow-sm cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Записаться к врачу
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
