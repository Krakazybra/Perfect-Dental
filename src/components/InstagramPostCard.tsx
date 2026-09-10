import { useState } from 'react';
import { ArrowUpRight, Instagram, Play, X } from 'lucide-react';
import type { InstagramPost } from '../types';

function getEmbedUrl(url: string) {
  return `${url.split('?')[0].replace(/\/$/, '')}/embed/captioned/`;
}

export function InstagramPostCard({ post, autoLoad = false, featured = false }: { post: InstagramPost; autoLoad?: boolean; featured?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(autoLoad);
  const panelId = `instagram-${post.id}`;

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-[28px] border border-outline-variant/55 bg-white shadow-[0_16px_52px_rgba(18,67,70,.07)] ${featured ? 'lg:grid lg:grid-cols-[.72fr_1.28fr]' : ''}`}>
      <div className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-primary p-7 text-white ${featured ? 'md:p-9' : ''}`}>
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden="true" />
        <div className="relative flex items-center justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-white text-primary"><Instagram className="size-6" aria-hidden="true" /></span>
          <span className="eyebrow text-primary-fixed">{post.category}</span>
        </div>
        <div className="relative mt-16">
          <h3 className={`text-balance font-bold leading-tight tracking-[-.035em] ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{post.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/72">{post.summary}</p>
          <button
            type="button"
            onClick={() => setIsLoaded((value) => !value)}
            aria-expanded={isLoaded}
            aria-controls={panelId}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary-fixed"
          >
            {isLoaded ? <><X className="size-4" aria-hidden="true" /> Скрыть публикацию</> : <><Play className="size-4 fill-current" aria-hidden="true" /> Смотреть здесь</>}
          </button>
        </div>
      </div>

      <div id={panelId} className={isLoaded ? 'relative min-h-[660px] bg-[#f7f8f7]' : 'flex min-h-36 flex-col items-start justify-center gap-3 p-7'}>
        {isLoaded ? (
          <iframe
            src={getEmbedUrl(post.url)}
            title={`Публикация Instagram: ${post.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ) : (
          <>
            <p className="text-sm leading-6 text-on-surface-variant">Публикация загрузится только после нажатия — страница открывается быстрее и не передаёт данные Instagram заранее.</p>
            <a href={post.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Открыть в Instagram <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </>
        )}
      </div>
    </article>
  );
}
