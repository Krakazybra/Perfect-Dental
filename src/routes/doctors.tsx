import type { MetaFunction } from 'react-router';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { AppointmentCta, MediaFrame, PageHero, SectionHeading } from '../components/SiteSections';
import { DOCTOR_PREVIEWS, SERVICES } from '../data/clinicData';
import { useAppointment } from '../context/AppointmentContext';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta(
  'Врачи стоматологии Perfect Dental в Астане',
  'Реальная команда Perfect Dental. Фотографии врачей и направления стоматологической помощи клиники в Астане.',
  '/doctors',
  '/images/team/founder-portrait.webp',
);

const HERO_MEDIA = {
  src: '/images/team/founder-portrait.webp',
  avif: '/images/team/founder-portrait.avif',
  alt: 'Основатель стоматологии Perfect Dental',
  width: 1200,
  height: 1800,
  position: 'center top',
  source: 'client' as const,
};

export default function DoctorsRoute() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageHero
        variant="detail-card"
        eyebrow="Команда клиники"
        title="Люди, которые стоят за Perfect Dental"
        description="Здесь размещены реальные фотографии команды. ФИО, специализации, образование и стаж добавим после подтверждения анкет клиникой."
      >
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-8 rounded-full bg-primary-fixed/10 blur-3xl" aria-hidden="true" />
          <MediaFrame media={HERO_MEDIA} eager className="relative aspect-[2/3] rounded-[30px] border border-white/15 bg-white/10 p-2 shadow-2xl [&_img]:rounded-[22px]" />
        </div>
      </PageHero>

      <section className="section-shell section-pad">
        <SectionHeading
          eyebrow="Знакомство"
          title="Команда Perfect Dental"
          description="Не подменяем недостающие сведения вымышленными регалиями — показываем только то, что уже подтверждено клиникой."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTOR_PREVIEWS.map((doctor) => (
            <article key={doctor.id} className="group overflow-hidden rounded-[28px] border border-outline-variant/55 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
              <MediaFrame media={doctor.image} className="aspect-[2/3] rounded-none bg-surface-container-low" />
              <div className="p-6">
                <p className="eyebrow text-primary">Команда клиники</p>
                <h2 className="mt-2 text-xl font-bold">{doctor.role}</h2>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">{doctor.description}</p>
                <button type="button" onClick={() => openAppointment()} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Записаться в клинику <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low">
        <div className="section-shell section-pad">
          <SectionHeading
            eyebrow="Направления команды"
            title="Комплексная стоматологическая помощь"
            description="Конкретного врача подбираем с учётом задачи пациента и подтверждённой специализации."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex items-start gap-4 rounded-2xl border border-outline-variant/50 bg-white p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><BadgeCheck className="size-5" aria-hidden="true" /></span>
                <div><h2 className="font-bold">{service.shortTitle}</h2><p className="mt-1 text-sm leading-6 text-on-surface-variant">{service.title}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
