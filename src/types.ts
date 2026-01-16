import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  submenu?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., Student, SSW Worker
  content: string;
  location: string; // e.g., Tokyo, Osaka
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'Seminar' | 'Workshop' | 'Orientation';
}