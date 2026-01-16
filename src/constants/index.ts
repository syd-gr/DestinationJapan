import { 
  GraduationCap, 
  Languages, 
  Briefcase, 
  Plane, 
  Passport, 
  Users, 
  BookOpen, 
  Globe 
} from 'lucide-react';
import { NavItem, Service, TeamMember, Testimonial, Event } from './types';

export const APP_NAME = "NipponNepal EduLink";
export const PHONE_NUMBER = "+977-1-4XXXXXX";
export const EMAIL_ADDRESS = "info@nipponnepal.com";
export const ADDRESS = "Putalisadak, Kathmandu, Nepal";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { 
    label: "Services", 
    path: "/services",
    submenu: [
      { label: "Student Visa", path: "/services/student-visa" },
      { label: "Language Classes", path: "/services/language" },
      { label: "SSW Program", path: "/services/ssw" },
      { label: "Work Visa", path: "/services/work-visa" },
      { label: "Tourist Visa", path: "/services/tourist-visa" },
    ]
  },
  { label: "Message", path: "/message" },
  { label: "Team", path: "/team" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "student-visa",
    title: "Student Visa",
    description: "Comprehensive guidance for students aspiring to study in Japan, from school selection to COE processing.",
    icon: GraduationCap,
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: "language",
    title: "Language Classes",
    description: "JLPT, NAT-TEST, and J-TEST focused preparation classes ranging from N5 to N2 levels.",
    icon: Languages,
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: "ssw",
    title: "SSW Program",
    description: "Support for the Specified Skilled Worker (SSW) program, connecting skilled workers with Japanese employers.",
    icon: Briefcase,
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: "work-visa",
    title: "Work Visa Services",
    description: "Expert assistance for engineers, IT professionals, and other specialists seeking employment in Japan.",
    icon: Users,
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: "tourist-visa",
    title: "Tourist Visa",
    description: "Hassle-free documentation and application support for visiting friends, family, or sightseeing in Japan.",
    icon: Plane,
    image: "https://picsum.photos/800/600?random=5"
  },
  {
    id: "counseling",
    title: "Career Counseling",
    description: "Personalized roadmap planning for your educational and professional career path in Japan.",
    icon: Globe,
    image: "https://picsum.photos/800/600?random=6"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Rajesh Shrestha",
    role: "Managing Director",
    image: "https://picsum.photos/300/300?random=10",
    bio: "With over 15 years of experience in Japan-Nepal relations."
  },
  {
    id: "2",
    name: "Ms. Yumi Tanaka",
    role: "Head of Language Department",
    image: "https://picsum.photos/300/300?random=11",
    bio: "Native Japanese instructor ensuring authentic language acquisition."
  },
  {
    id: "3",
    name: "Mr. Bikram Gurung",
    role: "Senior Documentation Officer",
    image: "https://picsum.photos/300/300?random=12",
    bio: "Expert in immigration procedures and COE processing."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sita Sharma",
    role: "Student",
    location: "Tokyo",
    content: "NipponNepal EduLink made my dream of studying in Tokyo a reality. Their guidance on documentation was flawless."
  },
  {
    id: "2",
    name: "Ramesh Thapa",
    role: "SSW Worker",
    location: "Osaka",
    content: "The language classes were tough but prepared me perfectly for the JLPT. I am now working in caregiving in Osaka."
  },
  {
    id: "3",
    name: "Anjali K.C.",
    role: "Student",
    location: "Fukuoka",
    content: "Honest counseling and transparent process. I highly recommend them to anyone looking to go to Japan."
  }
];

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Grand Education Seminar 2024",
    date: "October 15, 2024",
    description: "Meet representatives from top Japanese language schools and universities.",
    type: "Seminar"
  },
  {
    id: "2",
    title: "Free JLPT Mock Test",
    date: "November 1, 2024",
    description: "Assess your Japanese language level before the actual exam.",
    type: "Workshop"
  },
  {
    id: "3",
    title: "Pre-Departure Orientation",
    date: "December 10, 2024",
    description: "Essential information for students departing for the January intake.",
    type: "Orientation"
  }
];