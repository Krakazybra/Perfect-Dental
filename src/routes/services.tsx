import type { MetaFunction } from 'react-router';
import { ClipboardList, MessageSquareText, ScanLine, Waypoints } from 'lucide-react';
import { AppointmentCta, FeatureGrid, MediaFrame, PageHero, SectionHeading, ServiceEditorialList } from '../components/SiteSections';
import { SERVICES } from '../data/clinicData';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta('Услуги стоматологии Perfect Dental в Астане', 'Лечение под микроскопом, имплантация, хирургия, коронки, брекеты, лечение дёсен, гнатология, КТ и неотложная помощь.', '/services');

export default function ServicesRoute() {
  const heroServices = ['implantation', 'microscope-treatment', 'orthodontics', 'diagnostics']
    .map((id) => SERVICES.find((service) => service.id === id)!);

  return <>
    <PageHero
      variant="detail-card"
      eyebrow="Услуги Perfect Dental"
      title="Все услуги — понятным языком"
      description="Выберите направление по своей задаче. На приёме врач проведёт осмотр, объяснит варианты и назовёт стоимость до начала лечения."
    >
      <div className="grid grid-cols-2 gap-3 rounded-[30px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
        {heroServices.map((service, index) => (
          <MediaFrame
            key={service.id}
            media={{ src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 1400, height: 1050, position: service.imagePosition, source: service.imageSource ?? 'client' }}
            eager={index === 0}
            className={`aspect-[4/3] rounded-[20px] bg-white ${index === 1 || index === 2 ? 'translate-y-2' : ''}`}
          />
        ))}
      </div>
    </PageHero>
    <section className="section-shell section-pad">
      <div className="grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-end">
        <p aria-hidden="true" className="text-[7rem] font-bold leading-none tracking-[-.08em] text-primary/55 md:text-[10rem]">09</p>
        <div className="md:pb-4"><p className="eyebrow text-primary">Направления клиники</p><h2 className="mt-3 text-balance text-4xl font-bold leading-[1.04] tracking-[-.045em] md:text-6xl">От боли и снимка — до импланта и новой улыбки</h2><p className="mt-5 max-w-2xl text-base leading-7 text-on-surface-variant">Девять отдельных направлений без сложных медицинских формулировок и смешивания разных задач в одной карточке.</p></div>
      </div>
      <div className="mt-12"><ServiceEditorialList /></div>
      <div className="mt-8 rounded-2xl bg-surface-container p-5 text-sm leading-6 text-on-surface-variant"><strong className="text-on-surface">О стоимости:</strong> финальная стоимость зависит от клинической ситуации, выбранных материалов и объёма лечения. Она определяется после консультации.</div>
    </section>
    <section className="section-soft">
      <div className="section-shell section-pad">
        <SectionHeading eyebrow="После консультации" title="Вы понимаете следующий шаг" description="Без обещаний до диагностики — только информация, варианты и согласованный порядок действий." align="center" />
        <div className="mx-auto mt-10 max-w-5xl"><FeatureGrid items={[
          { icon: ScanLine, title: 'Диагностические данные', description: 'Врач назначает исследования только по показаниям и объясняет их назначение.' },
          { icon: ClipboardList, title: 'План лечения', description: 'Этапы формируются с учётом клинической ситуации и ваших задач.' },
          { icon: MessageSquareText, title: 'Ответы на вопросы', description: 'До начала процедур обсуждаются варианты, последовательность и стоимость.' },
          { icon: Waypoints, title: 'Понятный маршрут', description: 'Администратор поможет выбрать направление и подходящее время приёма.' },
        ]} /></div>
      </div>
    </section>
    <AppointmentCta />
  </>;
}
