import type { ReactNode } from 'react';
import { ArrowRight, Check, ExternalLink, MapPin, MessageCircle, Phone, Quote, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { CLINIC_INFO, PATIENT_PROBLEMS, SERVICES, TWO_GIS_ROUTE_URL } from '../data/clinicData';
import { useAppointment } from '../context/AppointmentContext';
import type { MediaAsset, ServiceItem } from '../types';

type PageHeroBase = {
  eyebrow: string;
  title: string;
  description: string;
};

type PageHeroProps =
  | (PageHeroBase & { variant?: 'compact'; media?: never; children?: never })
  | (PageHeroBase & { variant: 'split-media'; media: MediaAsset; children?: never })
  | (PageHeroBase & { variant: 'detail-card'; media?: never; children: ReactNode });

export function MediaFrame({ media, className = '', eager = false }: { media: MediaAsset; className?: string; eager?: boolean }) {
  return (
    <figure className={`relative block overflow-hidden ${className}`}>
      <picture className="block h-full w-full">
        {media.avif ? <source srcSet={media.avif} type="image/avif" /> : null}
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          className="h-full w-full object-cover"
          style={{ objectPosition: media.position ?? 'center' }}
        />
      </picture>
      {media.credit ? <figcaption className="absolute bottom-2 right-2 rounded-lg bg-black/65 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur"><a href={media.credit.href} target="_blank" rel="noreferrer" className="underline decoration-white/40 underline-offset-2">{media.credit.label}, {media.credit.license}</a></figcaption> : null}
    </figure>
  );
}

export function PageHero(props: PageHeroProps) {
  const hasAside = props.variant === 'split-media' || props.variant === 'detail-card';
  return (
    <section className="hero-grid overflow-hidden bg-primary text-white">
      <div className={`page-hero section-shell ${hasAside ? 'lg:grid-cols-[1fr_.82fr]' : ''}`}>
        <div className={hasAside ? '' : 'max-w-4xl'}>
          <p className="eyebrow text-primary-fixed">{props.eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{props.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">{props.description}</p>
        </div>
        {props.variant === 'split-media' ? (
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-primary-fixed/10 blur-3xl" aria-hidden="true" />
            <MediaFrame media={props.media} eager className="relative aspect-[4/3] rounded-[30px] border border-white/15 bg-white/10 p-2 shadow-2xl [&_img]:rounded-[22px] [&_img]:bg-white" />
          </div>
        ) : null}
        {props.variant === 'detail-card' ? <div className="w-full">{props.children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, action, align = 'left' }: { eyebrow: string; title: string; description?: string; action?: ReactNode; align?: 'left' | 'center' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'mx-auto items-center text-center' : `items-start ${action ? 'md:flex-row md:items-end md:justify-between' : ''}`} flex flex-col gap-4`}>
      <div className={align === 'center' ? 'max-w-3xl' : ''}>
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h2 className="section-title mt-3 text-balance">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function SplitSection({ children, media, reverse = false, tone = 'plain' }: { children: ReactNode; media: ReactNode; reverse?: boolean; tone?: 'plain' | 'soft' }) {
  return (
    <section className={tone === 'soft' ? 'section-soft' : ''}>
      <div className="section-shell section-pad grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? 'lg:order-2' : ''}>{media}</div>
        <div className={reverse ? 'lg:order-1' : ''}>{children}</div>
      </div>
    </section>
  );
}

export function FeatureGrid({ items }: { items: Array<{ icon: LucideIcon; title: string; description: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, description }) => (
        <article key={title} className="surface-card p-5">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
          <h3 className="mt-5 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">{description}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item} className="surface-card relative overflow-hidden p-6">
          <span className="text-xs font-bold tracking-[0.18em] text-primary">0{index + 1}</span>
          <p className="mt-8 text-lg font-bold leading-6">{item}</p>
          <span className="absolute -bottom-6 -right-2 text-8xl font-bold text-primary/[.04]" aria-hidden="true">{index + 1}</span>
        </li>
      ))}
    </ol>
  );
}

export function ServiceCard({ service, index, compact = false, className = '' }: { service: ServiceItem; index: number; compact?: boolean; className?: string }) {
  const Icon = service.icon;
  const media: MediaAsset = { src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 830, height: 609, position: service.imagePosition, source: service.imageSource ?? 'client', credit: service.imageCredit };
  return (
    <Link to={`/services/${service.id}`} className={`service-card group ${className}`}>
      <MediaFrame media={media} className="service-card-media aspect-[16/9]" />
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
          <span className="text-xs font-semibold text-outline">0{index + 1}</span>
        </div>
        <p className="eyebrow mt-6 text-primary">{service.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-on-surface-variant">{service.description}</p>
        {!compact ? <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Подробнее <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></p> : null}
      </div>
    </Link>
  );
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4'];
  return <div className={`grid gap-5 md:grid-cols-2 ${compact ? 'lg:grid-cols-6' : ''}`}>{SERVICES.map((service, index) => <ServiceCard key={service.id} service={service} index={index} compact={compact} className={compact ? spans[index % spans.length] : ''} />)}</div>;
}

function ServiceArrow({ light = false }: { light?: boolean }) {
  return <span className={`grid size-11 shrink-0 place-items-center rounded-full transition-transform duration-200 group-hover:translate-x-1 ${light ? 'bg-white/15 text-white' : 'bg-primary text-white'}`}><ArrowRight className="size-5" aria-hidden="true" /></span>;
}

export function EditorialServiceGrid() {
  const implantation = SERVICES.find((service) => service.id === 'implantation')!;
  const orthopedics = SERVICES.find((service) => service.id === 'orthopedics')!;
  const microscope = SERVICES.find((service) => service.id === 'microscope-treatment')!;
  const orthodontics = SERVICES.find((service) => service.id === 'orthodontics')!;
  const toMedia = (service: ServiceItem): MediaAsset => ({ src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 1400, height: 1050, position: service.imagePosition, source: service.imageSource ?? 'generated' });

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Link to={`/services/${implantation.id}`} className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[32px] bg-primary text-white shadow-sm lg:col-span-7 lg:row-span-2 lg:min-h-[620px]">
        <MediaFrame media={toMedia(implantation)} className="relative h-64 w-full shrink-0 rounded-none lg:absolute lg:inset-0 lg:h-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0b3032] via-[#0b3032]/45 to-transparent lg:block" aria-hidden="true" />
        <div className="relative mt-auto flex w-full items-end justify-between gap-6 bg-primary p-7 md:p-9 lg:bg-transparent">
          <div className="max-w-xl"><p className="eyebrow text-primary-fixed">Нужен имплант</p><h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{implantation.title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-white/75 md:text-base">{implantation.description}</p></div>
          <ServiceArrow light />
        </div>
      </Link>

      <Link to={`/services/${orthopedics.id}`} className="surface-card group grid min-h-[300px] overflow-hidden sm:grid-cols-[.92fr_1.08fr] lg:col-span-5">
        <div className="flex flex-col justify-between p-6 md:p-7"><div><p className="eyebrow text-primary">02 · Эстетика и функция</p><h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">{orthopedics.title}</h3></div><div className="mt-6 flex items-end justify-between gap-4"><p className="text-sm leading-6 text-on-surface-variant">Цифровое планирование формы и функции.</p><ServiceArrow /></div></div>
        <MediaFrame media={toMedia(orthopedics)} className="min-h-60 rounded-none sm:min-h-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.035]" />
      </Link>

      <Link to={`/services/${microscope.id}`} className="group grid min-h-[300px] overflow-hidden rounded-[28px] bg-primary text-white shadow-sm sm:grid-cols-[1.08fr_.92fr] lg:col-span-5">
        <MediaFrame media={toMedia(microscope)} className="min-h-60 rounded-none sm:min-h-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.035]" />
        <div className="flex flex-col justify-between p-6 md:p-7"><div><p className="eyebrow text-primary-fixed">Нужно вылечить зуб</p><h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">{microscope.title}</h3></div><div className="mt-6 flex items-end justify-between gap-4"><p className="text-sm leading-6 text-white/70">{microscope.description}</p><ServiceArrow light /></div></div>
      </Link>

      <Link to={`/services/${orthodontics.id}`} className="group grid min-h-[350px] overflow-hidden rounded-[32px] border border-outline-variant/50 bg-[#e4f1f0] shadow-sm md:grid-cols-[1.15fr_.85fr] lg:col-span-12">
        <MediaFrame media={toMedia(orthodontics)} className="min-h-72 rounded-none md:min-h-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]" />
        <div className="flex flex-col justify-center p-7 md:p-10"><p className="eyebrow text-primary">Хочу исправить прикус</p><h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{orthodontics.title}</h3><p className="mt-4 text-base leading-7 text-on-surface-variant">{orthodontics.description}</p><div className="mt-7 flex items-center justify-between gap-4"><span className="text-sm font-semibold text-primary">Элайнеры и брекет-системы</span><ServiceArrow /></div></div>
      </Link>
    </div>
  );
}

export function PatientProblemGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {PATIENT_PROBLEMS.map((problem, index) => (
        <Link key={problem.serviceId} to={`/services/${problem.serviceId}`} className={`group flex min-h-40 flex-col justify-between rounded-[22px] border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${index === 0 ? 'border-primary bg-primary text-white' : 'border-outline-variant/55 bg-white'}`}>
          <span className={`text-xs font-bold tracking-[.16em] ${index === 0 ? 'text-primary-fixed' : 'text-primary'}`}>0{index + 1}</span>
          <div className="mt-8"><h3 className="text-lg font-bold leading-6">{problem.label}</h3><p className={`mt-2 text-xs leading-5 ${index === 0 ? 'text-white/70' : 'text-on-surface-variant'}`}>{problem.description}</p></div>
          <ArrowRight className={`mt-4 size-4 transition-transform group-hover:translate-x-1 ${index === 0 ? 'text-primary-fixed' : 'text-primary'}`} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export function ServiceEditorialList() {
  const featuredIds: ServiceItem['id'][] = ['microscope-treatment', 'implantation', 'orthodontics'];
  const featured = featuredIds.map((id) => SERVICES.find((service) => service.id === id)!);
  const secondary = SERVICES.filter((service) => !featuredIds.includes(service.id));

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((service, index) => {
          const media: MediaAsset = { src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 1400, height: 1050, position: service.imagePosition, source: service.imageSource ?? 'generated' };
          return (
            <Link key={service.id} to={`/services/${service.id}`} className={`group overflow-hidden rounded-[30px] ${index === 0 ? 'bg-primary text-white lg:row-span-2' : 'surface-card grid sm:grid-cols-[.9fr_1.1fr]'}`}>
              <MediaFrame media={media} className={`${index === 0 ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3] sm:aspect-auto sm:min-h-[310px]'} rounded-none [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]`} />
              <div className={`flex flex-col justify-between p-6 md:p-8 ${index === 0 ? '' : ''}`}>
                <div><p className={`eyebrow ${index === 0 ? 'text-primary-fixed' : 'text-primary'}`}>0{index + 1} · {service.shortTitle}</p><h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-3xl">{service.title}</h3><p className={`mt-4 text-sm leading-6 ${index === 0 ? 'text-white/72' : 'text-on-surface-variant'}`}>{service.description}</p></div>
                <div className="mt-7 flex justify-end"><ServiceArrow light={index === 0} /></div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {secondary.map((service, index) => {
        const media: MediaAsset = { src: service.image, avif: service.imageAvif, alt: service.imageAlt, width: 1400, height: 1050, position: service.imagePosition, source: service.imageSource ?? 'generated' };
        return (
          <Link key={service.id} to={`/services/${service.id}`} className={`group grid grid-cols-[112px_1fr] overflow-hidden rounded-[24px] border border-outline-variant/55 ${index % 3 === 1 ? 'bg-mint-soft' : 'bg-white'} shadow-sm transition-transform duration-200 hover:-translate-y-1`}>
            <MediaFrame media={media} className="h-full min-h-44 rounded-none" />
            <div className="flex flex-col justify-between p-5"><div><p className="eyebrow text-primary">{service.shortTitle}</p><h3 className="mt-2 text-lg font-bold leading-6">{service.title}</h3><p className="mt-2 line-clamp-2 text-xs leading-5 text-on-surface-variant">{service.description}</p></div><ArrowRight className="mt-4 size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" /></div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export function BenefitsList({ items }: { items: string[] }) {
  return <ul className="grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-on-surface-variant"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check className="size-3" aria-hidden="true" /></span>{item}</li>)}</ul>;
}

export function TrustCard({ quote, author, href }: { quote: string; author: string; href: string }) {
  return (
    <blockquote className="surface-card flex h-full flex-col p-6 md:p-7">
      <Quote className="size-8 text-primary/25" aria-hidden="true" />
      <p className="mt-5 flex-1 text-base leading-7">«{quote}»</p>
      <footer className="mt-6 border-t border-outline-variant/40 pt-5">
        <p className="font-bold">{author}</p>
        <a href={href} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">Отзыв в 2GIS <ExternalLink className="size-3" aria-hidden="true" /></a>
      </footer>
    </blockquote>
  );
}

export function ContactRouteCard() {
  return (
    <div className="route-card relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-[32px] bg-primary p-7 text-white md:p-10">
      <div className="route-map" aria-hidden="true"><span className="route-line route-line-a" /><span className="route-line route-line-b" /><span className="route-line route-line-c" /><span className="route-pin"><MapPin className="size-7" /></span></div>
      <div className="relative max-w-xl">
        <p className="eyebrow text-primary-fixed">Маршрут в 2GIS</p>
        <h2 className="mt-3 text-3xl font-bold">Проспект Кабанбай батыра, 49</h2>
        <p className="mt-4 text-sm leading-6 text-white/70">Откройте карточку клиники, чтобы посмотреть расположение, вход и построить маршрут с вашей текущей точки.</p>
        <a href={TWO_GIS_ROUTE_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary">Построить маршрут <ExternalLink className="size-4" aria-hidden="true" /></a>
      </div>
    </div>
  );
}

export function AppointmentCta({ title = 'Начните с консультации', description = 'Оставьте контакты — администратор уточнит задачу и предложит удобное время приёма.', service }: { title?: string; description?: string; service?: string }) {
  const { openAppointment } = useAppointment();
  return (
    <section className="px-5 py-12 md:px-6 md:py-16">
      <div className="cta-panel mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-primary p-8 text-white md:p-11">
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><p className="eyebrow text-primary-fixed">Запись в Perfect Dental</p><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">{description}</p></div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button type="button" onClick={() => openAppointment({ service })} className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed">Оставить заявку</button>
            <a href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"><MessageCircle className="size-4" aria-hidden="true" />WhatsApp</a>
            <a href={`tel:${CLINIC_INFO.phoneHref}`} aria-label={`Позвонить ${CLINIC_INFO.phone}`} className="grid size-12 place-items-center rounded-xl border border-white/30 text-white transition-colors hover:bg-white/10"><Phone className="size-4" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return <div className="grid gap-3 sm:grid-cols-2"><a href={`tel:${CLINIC_INFO.phoneHref}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white"><Phone className="size-5" aria-hidden="true" /><span><span className="block text-xs text-white/60">Телефон</span><strong>{CLINIC_INFO.phone}</strong></span></a><a href={`https://wa.me/${CLINIC_INFO.whatsappPhone}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white"><MessageCircle className="size-5" aria-hidden="true" /><span><span className="block text-xs text-white/60">Написать</span><strong>WhatsApp</strong></span></a></div>;
}
