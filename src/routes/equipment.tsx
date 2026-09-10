import type { MetaFunction } from 'react-router';
import { Eye, ScanLine, ShieldCheck } from 'lucide-react';
import { AppointmentCta, BenefitsList, FeatureGrid, MediaFrame, PageHero, SectionHeading } from '../components/SiteSections';
import { EQUIPMENT } from '../data/clinicData';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta('Оборудование стоматологии Perfect Dental в Астане', 'Doctor Smile Pluser, цифровая 3D-диагностика, внутриротовое сканирование и лечение под микроскопом.', '/equipment', '/images/equipment/doctor-smile-pluser-v2.webp', 1440, 1080);

export default function EquipmentRoute() {
  return <>
    <PageHero
      variant="split-media"
      eyebrow="Технологии Perfect Dental"
      title="Оборудование для точной диагностики и лечения"
      description="Технологии не заменяют клиническое мышление врача, а дают ему больше данных для планирования и контроля лечения."
      media={{ src: '/images/equipment/doctor-smile-pluser-v2.webp', avif: '/images/equipment/doctor-smile-pluser-v2.avif', alt: 'Стоматологический лазер Doctor Smile Pluser', width: 1440, height: 1080, source: 'generated' }}
    />
    <section className="section-shell section-pad">
      <SectionHeading eyebrow="Оснащение клиники" title="Каждый инструмент решает свою задачу" description="Показываем только то оборудование, которое подтверждено материалами клиники. Неизвестные модели не называем до проверки технических данных." />
      <div className="mt-10 space-y-7">{EQUIPMENT.map((item, index) => {
        const media = { src: item.image, avif: item.image.replace('.webp', '.avif'), alt: item.alt, width: 1440, height: 1080, source: 'generated' as const };
        return <article key={item.id} className="grid overflow-hidden rounded-[32px] border border-outline-variant/50 bg-white shadow-[0_16px_48px_rgba(18,67,70,.06)] lg:grid-cols-2">
          <MediaFrame media={media} className={`min-h-[300px] bg-surface-container-low ${index % 2 ? 'lg:order-2' : ''}`} />
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="eyebrow text-primary">{item.model ?? 'Цифровое оборудование'}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{item.title}</h2>
            <p className="mt-5 text-base leading-7 text-on-surface-variant">{item.description}</p>
            <div className="mt-7"><BenefitsList items={item.benefits} /></div>
            {!item.model ? <p className="mt-6 rounded-xl bg-surface-container-low p-4 text-xs leading-5 text-on-surface-variant">Модель будет указана после подтверждения технических данных клиникой.</p> : null}
          </div>
        </article>;
      })}</div>
    </section>
    <section className="section-soft"><div className="section-shell section-pad"><SectionHeading eyebrow="Роль технологий" title="Больше информации для врача — понятнее план для пациента" align="center" /><div className="mx-auto mt-10 max-w-5xl"><FeatureGrid items={[
      { icon: ScanLine, title: 'Диагностика', description: 'Помогает оценить анатомию и исходную ситуацию перед лечением.' },
      { icon: Eye, title: 'Визуальный контроль', description: 'Увеличение помогает врачу видеть детали рабочей области.' },
      { icon: ShieldCheck, title: 'Обоснованное применение', description: 'Метод и оборудование выбираются по медицинским показаниям.' },
      { icon: ScanLine, title: 'Цифровой план', description: 'Сканирование создаёт данные для ортопедического и ортодонтического лечения.' },
    ]} /></div></div></section>
    <AppointmentCta title="Узнайте, какая диагностика нужна именно вам" />
  </>;
}
