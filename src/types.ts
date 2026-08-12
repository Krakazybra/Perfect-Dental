export type PageId =
  | 'home'
  | 'services'
  | 'all-services'
  | 'doctors'
  | 'price'
  | 'before-after'
  | 'reviews'
  | 'certificates'
  | 'promotions'
  | 'contacts';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  priceFrom: string;
  image: string;
  altText?: string;
  isPopular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experienceYears: number;
  description: string;
  image: string;
  altText?: string;
}

export interface PriceCategory {
  title: string;
  items: {
    title: string;
    price: string;
    description?: string;
  }[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  patientProblem: string;
  workDone: string[];
  guaranteeYears: number;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  initials: string;
  commentLabel: string;
}

export interface PlatformRating {
  platform: 'Google' | '2GIS' | 'Yandex';
  rating: number;
  maxRating: number;
  logo: string;
  description: string;
  linkText: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  altText?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  badge?: string;
  description: string;
  oldPrice?: string;
  newPrice: string;
  discountBadge?: string;
  image?: string;
  icon?: string;
  colSpan?: 'full' | 'half';
}
