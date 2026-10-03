export type PageType = 'inicio' | 'nosotros' | 'tratamientos' | 'sonrisas' | 'contacto';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'estetica' | 'salud' | 'ninos';
  image: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  badge?: string;
  isFeatured?: boolean;
  benefits: string[];
  whatsappMessage: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  category: 'blanqueamiento' | 'carillas' | 'ortodoncia' | 'completo';
  categoryLabel: string;
  description: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  patientQuote?: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  verified: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  quote: string;
  image: string;
}
