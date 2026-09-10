import type { MetaFunction } from 'react-router';
import { InstagramPostCard } from '../components/InstagramPostCard';
import { AppointmentCta, PageHero, SectionHeading } from '../components/SiteSections';
import { INSTAGRAM_CASES } from '../data/clinicData';
import { createMeta } from '../lib/seo';

export const meta: MetaFunction = () => createMeta(
  'Работы стоматологов Perfect Dental — до и после',
  'Примеры лечения и эстетического восстановления в Perfect Dental: реставрация, брекеты и виниры.',
  '/results',
);

export default function ResultsRoute() {
  const [featured, ...rest] = INSTAGRAM_CASES;

  return (
    <>
      <PageHero
        variant="compact"
        eyebrow="Работы Perfect Dental"
        title="Результаты, которые можно рассмотреть"
        description="Реальные публикации клиники и врачей: откройте карточку, чтобы увидеть фотографии до и после и прочитать историю лечения."
      />

      <section className="section-shell section-pad">
        <SectionHeading
          eyebrow="До и после"
          title="Три разных задачи — три истории лечения"
          description="Реставрация одного зуба, эстетическое восстановление улыбки и комплексное лечение с брекетами и винирами."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2"><InstagramPostCard post={featured} autoLoad featured /></div>
          {rest.map((post) => <InstagramPostCard key={post.id} post={post} autoLoad />)}
        </div>
      </section>

      <AppointmentCta title="Обсудить вашу задачу" description="Начните с консультации: врач оценит исходную ситуацию и объяснит возможные варианты лечения." />
    </>
  );
}
