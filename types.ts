
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  imageUrl: string;
  name: string;
  specialty: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  relation: string;
}
