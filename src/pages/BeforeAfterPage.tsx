import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BeforeAfterPageProps {
  onOpenAppointment: () => void;
}

export const BeforeAfterPage: React.FC<BeforeAfterPageProps> = ({ onOpenAppointment }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  const activeCase = BEFORE_AFTER_CASES[currentCaseIndex];

  const handlePrev = () => {
    setCurrentCaseIndex((prev) => (prev === 0 ? BEFORE_AFTER_CASES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCaseIndex((prev) => (prev === BEFORE_AFTER_CASES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-12">
      {/* Header with Case Switchers */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">До / После</h1>
          <p className="text-sm text-on-surface-variant mt-2">
            Реальные результаты лечения и эстетического восстановления зубов клиентов DENTA
          </p>
        </div>

        {/* Case Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Предыдущий случай"
            className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Следующий случай"
            className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Case Details & Slider Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column Text Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
              Клинический случай #{currentCaseIndex + 1} из {BEFORE_AFTER_CASES.length}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface">{activeCase.title}</h2>
          </div>

          <p className="text-base text-on-surface-variant leading-relaxed">
            {activeCase.patientProblem}
          </p>

          <div className="space-y-3 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40">
            <p className="font-bold text-on-surface text-sm">Проделанная работа:</p>
            <ul className="space-y-2">
              {activeCase.workDone.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
              <span>Гарантия на работу выдана на {activeCase.guaranteeYears} лет!</span>
            </div>

            <button
              onClick={onOpenAppointment}
              className="bg-primary text-on-primary text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-container transition-colors uppercase tracking-wider"
            >
              Хочу такой же результат
            </button>
          </div>
        </div>

        {/* Right Column Interactive Slider */}
        <div className="lg:col-span-6">
          <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant/50 shadow-md">
            <BeforeAfterSlider
              beforeImage={activeCase.beforeImage}
              afterImage={activeCase.afterImage}
            />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto pt-4">
        <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentCaseIndex + 1) / BEFORE_AFTER_CASES.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-xs text-on-surface-variant mt-2 font-medium">
          Случай {currentCaseIndex + 1} из {BEFORE_AFTER_CASES.length}
        </p>
      </div>
    </div>
  );
};
