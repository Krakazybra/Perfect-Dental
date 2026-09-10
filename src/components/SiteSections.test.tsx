import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PageHero } from './SiteSections';

const copy = { eyebrow: 'Раздел', title: 'Заголовок страницы', description: 'Короткое описание страницы.' };

describe('PageHero', () => {
  it('renders a compact hero without a media slot', () => {
    const { container } = render(<PageHero variant="compact" {...copy} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(copy.title);
    expect(container.querySelector('picture')).not.toBeInTheDocument();
  });

  it('renders responsive media in split mode', () => {
    render(<PageHero variant="split-media" {...copy} media={{ src: '/image.webp', avif: '/image.avif', alt: 'Описание изображения', width: 800, height: 600, source: 'client' }} />);
    expect(screen.getByRole('img', { name: 'Описание изображения' })).toHaveAttribute('width', '800');
  });

  it('renders an intentional detail card', () => {
    render(<PageHero variant="detail-card" {...copy}><div>Карточка детали</div></PageHero>);
    expect(screen.getByText('Карточка детали')).toBeInTheDocument();
  });
});
