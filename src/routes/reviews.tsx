import type { MetaFunction } from 'react-router';
import { ArrowUpRight, BadgeCheck, ExternalLink, Quote } from 'lucide-react';
import { InstagramPostCard } from '../components/InstagramPostCard';
import { AppointmentCta, PageHero, SectionHeading } from '../components/SiteSections';
import { INSTAGRAM_STORIES, REVIEWS, TWO_GIS_URL } from '../data/clinicData';
import { createMeta } from '../lib/seo';
import type { ReviewItem } from '../types';

export const meta: MetaFunction = () => createMeta('Отзывы о стоматологии Perfect Dental в Астане', 'Реальные отзывы пациентов Perfect Dental и ссылка на оригинальные публикации в 2GIS.', '/reviews');

function ReviewCard({ review, featured = false }: { review: ReviewItem; featured?: boolean }) {
  return (
    <blockquote className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition-transform duration-200 hover:-translate-y-1 md:p-8 ${featured ? 'border-white/10 bg-primary text-white shadow-[0_24px_70px_rgba(13,69,71,.18)]' : 'border-outline-variant/55 bg-white shadow-[0_14px_44px_rgba(18,67,70,.06)]'}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 shrink-0 place-items-center rounded-full text-xs font-bold ${featured ? 'bg-white text-primary' : 'bg-mint-soft text-primary'}`}>{review.initials}</span>
          <div>
            <p className="text-sm font-bold">{review.author}</p>
            <p className={`mt-1 text-xs ${featured ? 'text-white/70' : 'text-outline'}`}>{review.date}</p>
          </div>
        </div>
        <span className={`grid size-10 shrink-0 place-items-center rounded-full ${featured ? 'bg-white/10 text-primary-fixed' : 'bg-surface-container text-primary'}`} aria-hidden="true"><Quote className="size-5" /></span>
      </div>

      <p className={`mt-9 flex-1 text-balance font-semibold leading-[1.5] ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>«{review.text}»</p>

      <footer className={`mt-8 flex items-end justify-between gap-4 border-t pt-5 ${featured ? 'border-white/15' : 'border-outline-variant/45'}`}>
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${featured ? 'text-primary-fixed' : 'text-primary'}`}><BadgeCheck className="size-4" aria-hidden="true" /> Проверено в 2GIS</span>
        <a href={review.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Открыть отзыв пользователя ${review.author} в 2GIS`} className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors ${featured ? 'bg-white text-primary hover:bg-primary-fixed' : 'bg-primary text-white hover:bg-primary-container'}`}><ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </footer>
    </blockquote>
  );
}

export default function ReviewsRoute() {
  const [featured, ...rest] = REVIEWS;
  const [featuredStory, ...moreStories] = INSTAGRAM_STORIES;
  return <>
    <PageHero variant="compact" eyebrow="Отзывы пациентов" title="Слова людей — лучше рекламных обещаний" description="Выбрали несколько содержательных отзывов. Авторов, даты и полные тексты можно проверить в карточке Perfect Dental в 2GIS." />
    <section className="section-shell section-pad">
      <SectionHeading
        eyebrow="Отзывы из 2GIS"
        title="Что отмечают пациенты"
        description="Без нарисованного рейтинга и меняющихся цифр — только короткие выдержки из опубликованных отзывов."
        action={<a href={`${TWO_GIS_URL}/tab/reviews`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-container">Все отзывы в 2GIS <ExternalLink className="size-4" aria-hidden="true" /></a>}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:row-span-2"><ReviewCard review={featured} featured /></div>
        {rest.map((review, index) => <div key={review.author} className={index === rest.length - 1 ? 'lg:col-span-12' : 'lg:col-span-5'}><ReviewCard review={review} /></div>)}
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 rounded-[24px] bg-mint-soft px-6 py-5 sm:flex-row sm:items-center md:px-8">
        <p className="max-w-2xl text-sm leading-6 text-on-surface-variant">Больше мнений и полные тексты всегда доступны в актуальной карточке клиники.</p>
        <a href={`${TWO_GIS_URL}/tab/reviews`} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">Перейти в 2GIS <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </div>
    </section>
    <section className="section-soft">
      <div className="section-shell section-pad">
        <SectionHeading
          eyebrow="Истории пациентов"
          title="Не одна строчка отзыва, а весь путь"
          description="В этих публикациях пациенты и врачи рассказывают о лечении подробнее. Видео и карусели можно открыть прямо на странице."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2"><InstagramPostCard post={featuredStory} featured /></div>
          {moreStories.map((post) => <InstagramPostCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
    <AppointmentCta />
  </>;
}
