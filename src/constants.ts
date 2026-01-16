import {
  GraduationCap,
  Languages,
  Briefcase,
  Plane,
  Users,
  Globe
} from 'lucide-react';

import type {
  NavItem,
  Service,
  TeamMember,
  Testimonial,
  Event
} from './types';

export const APP_NAME = 'NipponNepal EduLink';
export const PHONE_NUMBER = '+977-1-4XXXXXX';
export const EMAIL_ADDRESS = 'info@nipponnepal.com';
export const ADDRESS = 'Putalisadak, Kathmandu, Nepal';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    submenu: [
      { label: 'Student Visa', path: '/services/student-visa' },
      { label: 'Language Classes', path: '/services/language' },
      { label: 'SSW Program', path: '/services/ssw' },
      { label: 'Work Visa', path: '/services/work-visa' },
      { label: 'Tourist Visa', path: '/services/tourist-visa' }
    ]
  },
  { label: 'Message', path: '/message' },
  { label: 'Team', path: '/team' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' }
];

export const SERVICES: Service[] = [
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Comprehensive guidance for students aspiring to study in Japan.',
    icon: GraduationCap,
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'language',
    title: 'Language Classes',
    description: 'JLPT and NAT-TEST preparation from N5 to N2.',
    icon: Languages,
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'ssw',
    title: 'SSW Program',
    description: 'Support for Specified Skilled Worker programs.',
    icon: Briefcase,
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'work-visa',
    title: 'Work Visa',
    description: 'Employment visa support for professionals.',
    icon: Users,
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    description: 'Tourist visa documentation and application support.',
    icon: Plane,
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'counseling',
    title: 'Career Counseling',
    description: 'Personalized career planning for Japan.',
    icon: Globe,
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. Rajesh Shrestha',
    role: 'Managing Director',
    image: 'https://picsum.photos/300/300?random=10',
    bio: '15+ years experience in Japan-Nepal education consultancy.'
  },
  {
    id: '2',
    name: 'Ms. Yumi Tanaka',
    role: 'Head of Language Department',
    image: 'https://picsum.photos/300/300?random=11',
    bio: 'Native Japanese language instructor.'
  },
  {
    id: '3',
    name: 'Mr. Bikram Gurung',
    role: 'Senior Documentation Officer',
    image: 'https://picsum.photos/300/300?random=12',
    bio: 'Expert in COE and visa documentation.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sita Sharma',
    role: 'Student',
    location: 'Tokyo',
    content: 'Their guidance made my Japan study dream possible.'
  },
  {
    id: '2',
    name: 'Ramesh Thapa',
    role: 'SSW Worker',
    location: 'Osaka',
    content: 'Excellent language training and documentation support.'
  }
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Grand Education Seminar',
    date: 'October 15, 2024',
    description: 'Meet representatives from Japanese institutions.',
    type: 'Seminar'
  },
  {
    id: '2',
    title: 'JLPT Mock Test',
    date: 'November 1, 2024',
    description: 'Test your JLPT readiness.',
    type: 'Workshop'
  }
];
