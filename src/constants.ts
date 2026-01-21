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

export const APP_NAME = 'DestinationJapan Language Institute and Consultancy';
export const PHONE_NUMBER = '015923250';
export const EMAIL_ADDRESS = 'destijapan@gmail.com';
export const ADDRESS = 'Near City Square, Samakushi, Kathmandu, Nepal';

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
    id: 'language',
    title: 'Language Classes',
    description: 'JLPT and NAT-TEST preparation from N5 to N2.',
    icon: Languages,
    image: "/img/japanese-language-classes.webp"
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Comprehensive guidance for students aspiring to study in Japan.',
    icon: GraduationCap,
    image: "/img/student-visa-japan.webp"
  },
  {
    id: 'ssw',
    title: 'SSW Program',
    description: 'Support for Specified Skilled Worker programs.',
    icon: Briefcase,
    image: "/img/japan-ssw-visa.webp"
  },
  {
    id: 'work-visa',
    title: 'Work Visa',
    description: 'Employment visa support for professionals.',
    icon: Users,
    image: "/img/japan-work-visa.webp"
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    description: 'Tourist visa documentation and application support.',
    icon: Plane,
    image: "/img/japan-Tourist-visa-documentation.webp"
  },
  {
    id: 'counseling',
    title: 'Career Counseling',
    description: 'Personalized career planning for Japan.',
    icon: Globe,
    image: "/img/life-in-japan.webp"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. Nakagawa Yoji',
    role: 'CEO/President (Japan)',
    image: "/img/team-1.jpg",
    bio: 'Native Japanese language instructor.'
  },
  {
    id: '2',
    name: 'Mrs. Sakaguchi Manami',
    role: 'Executive Director (Japan)',
    image: "/img/team-2.jpg",
    bio: '15+ years experience in Japan-Nepal education consultancy.'
  },
    {
    id: '3',
    name: 'Mr. Dilip Kr Shrestha',
    role: 'Managing Director',
    image: "/img/team-3.webp",
    bio: '15+ years experience in Japan-Nepal education consultancy.'
  },
      {
    id: '4',
    name: 'Mr. Subol Karki',
    role: 'Principal',
    image: "/img/team-4.webp",
    bio: '15+ years experience in Japan-Nepal education consultancy.'
  },
      {
    id: '5',
    name: 'Mr. Kanchha Lama Tamang',
    role: 'Senior Advisor',
    image: "/img/team-5.jpg",
    bio: '15+ years experience in Japan-Nepal education consultancy.'
  },
  {
    id: '6',
    name: 'Mr. Nirajan Gautam',
    role: 'Advisor',
    image: "/img/team-6.jpg",
    bio: 'Expert in COE and visa documentation.'
  },
    {
    id: '7',
    name: 'Mr. Laxman Saud',
    role: 'Advisor',
    image: "/img/team-7.jpg",
    bio: 'Expert in COE and visa documentation.'
  },
    {
    id: '8',
    name: 'Mr. Cham Bahadur Thapa',
    role: 'Advisor',
    image: "/img/team-8.webp",
    bio: 'Expert in COE and visa documentation.'
  },
  {
    id: '9',
    name: 'Mr. Beda Agusti',
    role: 'Advisor',
    image: "/img/team-9.webp",
    bio: 'Expert in COE and visa documentation.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'ヤダブ ラム クマール (Yadav Ram Kumar)',
    role: 'Student',
    location: 'Tokyo',
    content: 'Their guidance made my Japan study dream possible.'
  },
  
  {
    id: '2',
    name: 'バンダリ パラスラム (Bhandari Parasuram)',
    role: 'SSW Worker (Working Within Our Company)',
    location: 'Tokyo',
    content: 'Excellent language training and documentation support.'
  },

    {
    id: '3',
    name: 'Sahil Ahmed',
    role: 'Tourist Visa',
    location: 'Japan',
    content: 'Excellent documentation support.'
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
