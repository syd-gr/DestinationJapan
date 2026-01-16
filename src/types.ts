import type { LucideIcon } from 'lucide-react';

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
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: string;
}
