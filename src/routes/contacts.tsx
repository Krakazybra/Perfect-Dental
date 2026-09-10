import type { MetaFunction } from 'react-router';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { AppointmentCta, ContactRouteCard, PageHero, SectionHeading } from '../components/SiteSections';
import { CLINIC_INFO, TWO_GIS_ROUTE_URL } from '../data/clinicData';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta('Контакты Perfect Dental — стоматология в Астане', `Perfect Dental: ${CLINIC_INFO.address}. Телефон ${CLINIC_INFO.phone}.`, '/contacts');

export default function ContactsRoute() {
  return <>
    <PageHero variant="compact" eyebrow="Контакты" title="Perfect Dental в Астане" description="Позвоните, напишите в WhatsApp или оставьте заявку на сайте. Администратор поможет подобрать время приёма." />
    <section className="section-shell section-pad">
      <SectionHeading eyebrow="Связаться с клиникой" title="Выберите удобный способ" description="Адрес, режим работы и быстрые действия собраны в одном месте." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
        <div className="space-y-4">
          <a href={TWO_GIS_ROUTE_URL} target="_blank" rel="noreferrer" className="contact-card"><MapPin className="size-6 text-primary" aria-hidden="true" /><span><span className="block text-xs text-outline">Адрес клиники</span><strong className="mt-1 block">{CLINIC_INFO.address}</strong></span></a>
          <a href={`tel:${CLINIC_INFO.phoneHref}`} className="contact-card"><Phone className="size-6 text-primary" aria-hidden="true" /><span><span className="block text-xs text-outline">Телефон</span><strong className="mt-1 block">{CLINIC_INFO.phone}</strong></span></a>
          <a href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`} target="_blank" rel="noreferrer" className="contact-card"><MessageCircle className="size-6 text-[#168c43]" aria-hidden="true" /><span><span className="block text-xs text-outline">Мессенджер</span><strong className="mt-1 block">Написать в WhatsApp</strong></span></a>
          <div className="contact-card"><Clock3 className="size-6 text-primary" aria-hidden="true" /><span><span className="block text-xs text-outline">Режим работы</span><strong className="mt-1 block font-semibold leading-7">{CLINIC_INFO.workingHours.weekdays}<br />{CLINIC_INFO.workingHours.saturday}<br />{CLINIC_INFO.workingHours.sunday}</strong></span></div>
        </div>
        <ContactRouteCard />
      </div>
    </section>
    <section className="section-shell pb-8 md:pb-12"><div className="rounded-2xl border border-outline-variant/45 bg-surface-container-low p-6"><p className="eyebrow text-primary">Документы</p><h2 className="mt-2 text-xl font-bold">Юридическая информация</h2><dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2"><div><dt className="text-outline">Юридическое лицо</dt><dd className="mt-1 font-semibold">{CLINIC_INFO.legalName}</dd></div><div><dt className="text-outline">БИН</dt><dd className="mt-1 font-semibold">{CLINIC_INFO.bin}</dd></div><div className="sm:col-span-2"><dt className="text-outline">Юридический адрес</dt><dd className="mt-1 font-semibold">{CLINIC_INFO.legalAddress}</dd></div></dl></div></section>
    <AppointmentCta />
  </>;
}
