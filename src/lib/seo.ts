import type { MetaDescriptor } from 'react-router';
import { SITE_URL } from '../data/clinicData';

export function createMeta(
  title: string,
  description: string,
  path = '',
  imagePath = '/images/brand/og-perfect-dental.png',
  imageWidth = 1200,
  imageHeight = 630,
): MetaDescriptor[] {
  const canonical = `${SITE_URL}${path || '/'}`;
  const image = imagePath.startsWith('http') ? imagePath : `${SITE_URL}${imagePath}`;

  return [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_KZ' },
    { property: 'og:site_name', content: 'Perfect Dental' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { property: 'og:image:alt', content: title },
    { property: 'og:image:width', content: String(imageWidth) },
    { property: 'og:image:height', content: String(imageHeight) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
}
