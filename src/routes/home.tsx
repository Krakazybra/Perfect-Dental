import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { ArrowRight, ClipboardCheck, HeartHandshake, MapPin, ScanLine, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { AppointmentCta, BenefitsList, EditorialServiceGrid, FeatureGrid, MediaFrame, PatientProblemGrid, ProcessSteps, SectionHeading, SplitSection, TrustCard } from '../components/SiteSections';
import { CLINIC_INFO, EQUIPMENT, REVIEWS, TWO_GIS_ROUTE_URL, TWO_GIS_URL } from '../data/clinicData';
import { useAppointment } from '../context/AppointmentContext';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta('Perfect Dental — современная стоматология в Астане', 'Лечение зубов под микроскопом, имплантация, коронки, брекеты, лечение дёсен и цифровая диагностика в Perfect Dental.');

const HERO_MEDIA = { src: '/images/team/founder-portrait.webp', avif: '/images/team/founder-portrait.avif', alt: 'Основатель клиники Perfect Dental', width: 1200, height: 1800, position: 'center top', source: 'client' as const };
const DIAGNOSTICS_MEDIA = { src: '/images/equipment/digital-3d-diagnostics-v2.webp', avif: '/images/equipment/digital-3d-diagnostics-v2.avif', alt: EQUIPMENT[1].alt, width: 1440, height: 1080, source: 'generated' as const };
const TEAM_MEDIA_02 = { src: '/images/team/doctor-portrait-02.webp', avif: '/images/team/doctor-portrait-02.avif', alt: 'Врач клиники Perfect Dental', width: 1200, height: 1800, position: 'center top', source: 'client' as const };
const TEAM_MEDIA_03 = { src: '/images/team/doctor-portrait-03.webp', avif: '/images/team/doctor-portrait-03.avif', alt: 'Врач клиники Perfect Dental', width: 1200, height: 1800, position: 'center top', source: 'client' as const };

export default function HomeRoute() {
  const { openAppointment } = useAppointment();
  return (
    <div className="home-page">
      <section className="hero-grid overflow-hidden bg-primary text-white">
        <div className="section-shell grid items-center gap-8 py-10 md:min-h-[650px] md:gap-12 md:py-14 lg:grid-cols-[1.06fr_.94fr] lg:py-20">
          <div>
            <p className="eyebrow text-primary-fixed">Perfect Dental · Астана</p>
            <h1 className="mt-4 max-w-3xl text-balance text-[2.45rem] font-bold leading-[1.03] tracking-[-0.05em] sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl">Современная стоматология в Астане</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75 md:mt-6 md:text-lg">Лечение под микроскопом, имплантация, коронки, брекеты и диагностика в одной клинике.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <button type="button" onClick={() => openAppointment()} className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed">Записаться на консультацию</button>
              <a href={TWO_GIS_ROUTE_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"><MapPin className="size-4" aria-hidden="true" />Построить маршрут</a>
            </div>
            <p className="mt-5 hidden text-sm text-white/60 sm:block">Стоимость лечения определяется после консультации и диагностики.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px] md:max-w-[460px]">
            <div className="absolute -inset-10 rounded-full bg-primary-fixed/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur md:rounded-[34px] md:p-3">
              <MediaFrame media={HERO_MEDIA} eager className="aspect-[4/5] rounded-[21px] bg-white md:aspect-[2/3] md:rounded-[25px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <SectionHeading eyebrow="Выберите по ситуации" title="С чем вы хотите обратиться?" description="Не обязательно знать название специальности. Выберите то, что беспокоит, — мы покажем подходящее направление." action={<Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Все услуги <ArrowRight className="size-4" aria-hidden="true" /></Link>} />
        <div className="mt-9"><PatientProblemGrid /></div>
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-[1.25fr_.75fr] md:items-end md:gap-6">
          <div><p className="eyebrow text-primary">Популярные направления</p><h2 className="mt-3 max-w-4xl text-balance text-3xl font-bold leading-[1.06] tracking-[-.04em] sm:text-4xl md:text-6xl">Лечение, восстановление и эстетика</h2></div>
          <p className="hidden text-base leading-7 text-on-surface-variant sm:block md:pb-1">Четыре направления, с которых пациенты чаще всего начинают знакомство с клиникой.</p>
        </div>
        <div className="mt-10"><EditorialServiceGrid /></div>
      </section>

      <SplitSection tone="soft" media={
        <div className="relative grid grid-cols-2 gap-4">
          <MediaFrame media={TEAM_MEDIA_02} className="aspect-[2/3] rounded-[28px] bg-white shadow-xl" />
          <MediaFrame media={TEAM_MEDIA_03} className="aspect-[2/3] rounded-[28px] bg-white shadow-xl" />
          <div className="col-span-2 hidden items-center gap-5 rounded-[24px] bg-primary p-5 text-white shadow-lg sm:flex md:p-6">
            <span className="size-14 shrink-0 rounded-2xl bg-white bg-[url('/images/brand/perfect-dental-mark.png')] bg-[length:42px_42px] bg-center bg-no-repeat" aria-hidden="true" />
            <div><p className="eyebrow text-primary-fixed">Perfect Dental</p><p className="mt-1 text-lg font-bold md:text-xl">Люди и технологии в одном плане</p></div>
          </div>
        </div>
      }>
        <SectionHeading eyebrow="О клинике" title="Лечение начинается с понимания задачи" description="Мы объединяем диагностику, современные инструменты и спокойную коммуникацию. Врач объясняет варианты, а пациент понимает последовательность и стоимость до начала лечения." />
        <div className="home-clinic-features mt-7"><FeatureGrid items={[
          { icon: Stethoscope, title: 'Комплексный взгляд', description: 'Специалисты разных направлений работают в рамках единого плана.' },
          { icon: ScanLine, title: 'Цифровая диагностика', description: 'Используем данные обследования для более точного планирования.' },
          { icon: HeartHandshake, title: 'Понятная коммуникация', description: 'Обсуждаем этапы и отвечаем на вопросы до начала процедур.' },
          { icon: ShieldCheck, title: 'Только по показаниям', description: 'Оборудование и методы применяются тогда, когда это обосновано врачом.' },
        ]} /></div>
      </SplitSection>

      <section className="section-shell section-pad">
        <SectionHeading eyebrow="Путь пациента" title="Как начинается лечение" description="Без лишней спешки: сначала собираем информацию, затем предлагаем понятный план действий." align="center" />
        <div className="home-process mt-8 md:mt-10"><ProcessSteps items={['Консультация и знакомство', 'Диагностика по показаниям', 'План и стоимость лечения', 'Лечение и контроль результата']} /></div>
      </section>

      <SplitSection reverse media={
        <div className="relative">
          <MediaFrame media={DIAGNOSTICS_MEDIA} className="aspect-[4/3] rounded-[24px] bg-black shadow-xl md:aspect-[16/10] md:rounded-[30px]" />
          <div className="absolute -bottom-5 -left-3 hidden max-w-[250px] rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur sm:block md:-left-7">
            <ClipboardCheck className="size-6 text-primary" aria-hidden="true" />
            <p className="mt-3 text-sm font-bold">Больше данных для индивидуального планирования</p>
          </div>
        </div>
      }>
        <SectionHeading eyebrow="Оснащение клиники" title="Технологии помогают врачу видеть больше" description="Диагностика, увеличение и цифровые инструменты дают дополнительные данные для планирования и контроля лечения." />
        <div className="mt-7"><BenefitsList items={['Лазер Doctor Smile Pluser', 'Цифровая 3D-диагностика', 'Внутриротовое сканирование', 'Лечение корневых каналов под микроскопом']} /></div>
        <Link to="/equipment" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Подробнее об оборудовании <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </SplitSection>

      <section className="section-shell section-pad">
        <SectionHeading eyebrow="Отзывы пациентов" title="Опыт, которым делятся люди" description="Публикуем короткие выдержки, а оригинальные тексты всегда можно проверить в карточке клиники." action={<a href={`${TWO_GIS_URL}/tab/reviews`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary">Все отзывы в 2GIS →</a>} />
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-[1.1fr_.9fr_.9fr]">
          <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[24px] bg-primary p-6 text-white md:min-h-[340px] md:rounded-[28px] md:p-9">
            <Sparkles className="size-8 text-primary-fixed" aria-hidden="true" />
            <blockquote className="relative mt-10 md:mt-16"><p className="text-balance text-xl font-bold leading-8 md:text-2xl md:leading-9">«{REVIEWS[0].text}»</p><footer className="mt-5 text-sm text-white/70 md:mt-6">{REVIEWS[0].author} · отзыв в 2GIS</footer></blockquote>
          </div>
          {REVIEWS.slice(1).map((review) => <div key={review.author} className="hidden md:block"><TrustCard quote={review.text} author={review.author} href={review.sourceUrl} /></div>)}
        </div>
      </section>
      <div className="home-cta"><AppointmentCta /></div>
    </div>
  );
}
