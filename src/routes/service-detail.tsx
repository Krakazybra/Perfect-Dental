import type { MetaFunction } from 'react-router';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, CircleDot, ScanLine, Sparkles } from 'lucide-react';
import { AppointmentCta, BenefitsList, PageHero, ProcessSteps, SectionHeading } from '../components/SiteSections';
import { StructuredData } from '../components/StructuredData';
import { SERVICES, SITE_URL, getService } from '../data/clinicData';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = ({ params }) => {
  const service = getService(params.serviceId);
  if (!service) return createMeta('Услуга не найдена — Perfect Dental', 'Запрошенная услуга не найдена.', '/services');
  return createMeta(`${service.title} в Астане — Perfect Dental`, service.description, `/services/${service.id}`, service.image, 1440, 1080);
};

export default function ServiceDetailRoute() {
  const { serviceId } = useParams();
  const service = getService(serviceId);
  if (!service) return <section className="section-shell section-pad"><h1 className="text-4xl font-bold">Услуга не найдена</h1><Link to="/services" className="mt-6 inline-flex items-center gap-2 text-primary"><ArrowLeft className="size-4" aria-hidden="true" />Вернуться к услугам</Link></section>;

  const related = SERVICES.filter((item) => item.id !== service.id).slice(0, 3);
  const serviceUrl = `${SITE_URL}/services/${service.id}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        description: service.description,
        url: serviceUrl,
        image: `${SITE_URL}${service.image}`,
        areaServed: { '@type': 'City', name: 'Астана' },
        provider: { '@id': `${SITE_URL}/#clinic` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${serviceUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };
  return <>
    <StructuredData data={structuredData} />
    <PageHero
      variant="split-media"
      eyebrow={service.eyebrow}
      title={service.title}
      description={service.intro}
      media={{ src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 830, height: 609, position: service.imagePosition, source: service.imageSource ?? 'client', credit: service.imageCredit }}
    />

    <section className="section-shell section-pad grid gap-12 lg:grid-cols-[1fr_.84fr] lg:gap-16">
      <div>
        <SectionHeading eyebrow="Когда нужна консультация" title="С какими задачами обращаются" description="Этот список помогает сориентироваться, но не заменяет осмотр и диагностику врача." />
        <div className="mt-7"><BenefitsList items={service.problems} /></div>
      </div>
      <aside className="rounded-[28px] bg-primary p-7 text-white md:p-9">
        <Sparkles className="size-8 text-primary-fixed" aria-hidden="true" />
        <p className="eyebrow mt-6 text-primary-fixed">Что важно знать</p>
        <h2 className="mt-3 text-2xl font-bold">План формируется индивидуально</h2>
        <p className="mt-4 text-sm leading-6 text-white/72">Стоимость и последовательность лечения определяются после консультации и необходимых исследований. До начала процедур врач объясняет предложенный план.</p>
      </aside>
    </section>

    <section className="section-soft">
      <div className="section-shell section-pad grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Что входит в направление" title="Возможности лечения" />
          <div className="mt-7"><BenefitsList items={service.highlights} /></div>
        </div>
        <div className="surface-card p-7 md:p-9">
          <ScanLine className="size-8 text-primary" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-bold">Технологии и планирование</h2>
          <ul className="mt-6 space-y-4">{service.technologies.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><CircleDot className="size-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </div>
    </section>

    <section className="section-shell section-pad">
      <SectionHeading eyebrow="Последовательность" title="Как начинается лечение" description="Конкретные этапы могут отличаться в зависимости от клинической ситуации." />
      <div className="mt-10"><ProcessSteps items={service.steps} /></div>
    </section>

    <section className="section-soft">
      <div className="section-shell section-pad grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="Вопросы пациентов" title="Коротко о главном" description="Окончательные рекомендации врач даст после консультации." />
        <div>{service.faq.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </div>
    </section>

    <section className="section-shell section-pad">
      <h2 className="text-2xl font-bold">Другие направления</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-3">{related.map((item) => <Link key={item.id} to={`/services/${item.id}`} className="group flex items-center justify-between rounded-2xl border border-outline-variant/50 bg-white p-5 text-sm font-semibold transition hover:border-primary/40 hover:shadow-md">{item.shortTitle}<ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>)}</div>
    </section>
    <AppointmentCta service={service.title} title={`Записаться: ${service.shortTitle}`} />
  </>;
}
