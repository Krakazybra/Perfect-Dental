import type { LucideIcon } from 'lucide-react';

export interface MediaCredit {
  label: string;
  href: string;
  license: string;
}

export interface ServiceItem {
  id:
    | 'microscope-treatment'
    | 'implantation'
    | 'surgery'
    | 'orthodontics'
    | 'orthopedics'
    | 'periodontology'
    | 'gnathology'
    | 'diagnostics'
    | 'emergency';
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  imageAvif?: string;
  imageAlt: string;
  imagePosition?: string;
  imageSource?: 'client' | 'brand' | 'licensed' | 'generated';
  imageCredit?: MediaCredit;
  problems: string[];
  highlights: string[];
  technologies: string[];
  steps: string[];
  faq: Array<{ question: string; answer: string }>;
  icon: LucideIcon;
}

export interface MediaAsset {
  src: string;
  avif?: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
  source: 'client' | 'brand' | 'licensed' | 'generated';
  credit?: MediaCredit;
}

export interface DoctorPlaceholder {
  id: string;
  specialty: string;
  description: string;
  serviceId: ServiceItem['id'];
}

export interface DoctorProfile {
  id: string;
  name: string;
  specialty: string;
  experience?: string;
  education: string[];
  image: MediaAsset;
  serviceIds: ServiceItem['id'][];
}

export interface DoctorPreview {
  id: string;
  role: string;
  description: string;
  image: MediaAsset;
}

export interface ClinicalCase {
  id: string;
  title: string;
  serviceId: ServiceItem['id'];
  summary: string;
  before: MediaAsset;
  after: MediaAsset;
  consentConfirmed: boolean;
}

export interface IllustrativeCase {
  id: string;
  title: string;
  eyebrow: string;
  serviceId: ServiceItem['id'];
  summary: string;
  focus: string[];
  before: MediaAsset;
  after: MediaAsset;
}

export interface EquipmentItem {
  id: string;
  title: string;
  model?: string;
  description: string;
  benefits: string[];
  image: string;
  alt: string;
}

export interface ReviewItem {
  author: string;
  initials: string;
  date: string;
  text: string;
  sourceUrl: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  url: string;
}

export interface AppointmentPayload {
  name: string;
  phone: string;
  service: string;
  doctor: string;
  comment: string;
  consent: boolean;
  website: string;
}

export type AppointmentCode = 'VALIDATION_ERROR' | 'RATE_LIMIT' | 'DELIVERY_ERROR';

export type AppointmentResponse =
  | { ok: true }
  | { ok: false; code: AppointmentCode };
