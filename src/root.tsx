import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router';
import type { LinksFunction } from 'react-router';
import { AppointmentProvider, type AppointmentSelection } from './context/AppointmentContext';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { StructuredData } from './components/StructuredData';
import { CLINIC_INFO, SITE_URL, TWO_GIS_URL } from './data/clinicData';
import './index.css';

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image/png', href: '/images/brand/perfect-dental-mark.png' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: CLINIC_INFO.name,
      inLanguage: 'ru-KZ',
      publisher: { '@id': `${SITE_URL}/#clinic` },
    },
    {
      '@type': ['Dentist', 'MedicalBusiness'],
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC_INFO.name,
      legalName: CLINIC_INFO.legalName,
      description: CLINIC_INFO.description,
      url: SITE_URL,
      telephone: CLINIC_INFO.phoneHref,
      image: `${SITE_URL}/images/brand/og-perfect-dental.png`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/brand/perfect-dental-logo.png`,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'проспект Кабанбай батыра, 49, 2 этаж',
        addressLocality: 'Астана',
        addressRegion: 'Астана',
        addressCountry: 'KZ',
      },
      areaServed: {
        '@type': 'City',
        name: 'Астана',
      },
      hasMap: TWO_GIS_URL,
      sameAs: [TWO_GIS_URL, 'https://www.instagram.com/perfectdental.kz/'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CLINIC_INFO.phoneHref,
        contactType: 'customer service',
        availableLanguage: ['Russian', 'Kazakh'],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
    },
  ],
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru-KZ">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <StructuredData data={structuredData} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [selection, setSelection] = useState<AppointmentSelection | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const openAppointment = useCallback((next: AppointmentSelection = {}) => {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelection(next);
  }, []);
  const closeAppointment = useCallback(() => {
    setSelection(null);
    requestAnimationFrame(() => trigger.current?.focus());
  }, []);

  useEffect(() => {
    document.body.style.overflow = selection ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selection]);

  return (
    <AppointmentProvider value={{ openAppointment }}>
      <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased selection:bg-primary selection:text-white">
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MobileBottomNav />
        <AppointmentModal selection={selection} onClose={closeAppointment} />
      </div>
    </AppointmentProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error) && error.status === 404 ? 'Страница не найдена' : 'Что-то пошло не так';
  return (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <div>
        <img src="/images/brand/perfect-dental-mark.png" alt="Perfect Dental" className="w-20 h-20 object-contain mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <a href="/" className="inline-flex mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
