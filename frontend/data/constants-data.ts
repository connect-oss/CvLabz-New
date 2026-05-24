import type { LearningCardProps, VideoCardData } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const COMPANY_LOGOS = [
  { name: 'Booking.com', color: 'text-blue-600' },
  { name: 'Adyen', color: 'text-green-500' },
  { name: 'bol.', color: 'text-orange-500' },
  { name: 'Rabobank', color: 'text-blue-900' },
  { name: 'kpn', color: 'text-green-600' },
];

export const LEARNING_ARTICLES: LearningCardProps[] = [
  {
    tag: 'SUPER LESSON',
    title: 'Why recruiters reject your CV in 7 seconds',
    author: 'Lotte van Dijk',
    avatar: `${API_BASE}/uploads/avatars/lotte.jpg`,
    readTime: '6 min read',
    image: `${API_BASE}/uploads/articles/recruiter-cv-reject.jpg`,
    tagColor: 'bg-blue-600',
  },
  {
    tag: 'ARTICLE',
    title: '10 CV mistakes that cost you interviews',
    author: 'Jeroen Timmer',
    avatar: `${API_BASE}/uploads/avatars/jeroen.jpg`,
    readTime: '7 min read',
    image: `${API_BASE}/uploads/articles/cv-mistakes.jpg`,
    tagColor: 'bg-cyan-500',
  },
  {
    tag: 'SPRING LESSON',
    title: 'How to answer the "Tell me about yourself"',
    author: 'Sanne Verhoeven',
    avatar: `${API_BASE}/uploads/avatars/sanne.jpg`,
    readTime: '8 min read',
    image: `${API_BASE}/uploads/articles/tell-me-about-yourself.jpg`,
    tagColor: 'bg-emerald-500',
  },
  {
    tag: 'LEARNING PATH',
    title: 'Complete guide to career change',
    author: 'Mark de Jong',
    avatar: `${API_BASE}/uploads/avatars/mark.jpg`,
    readTime: '5 lessons',
    image: `${API_BASE}/uploads/articles/career-change.jpg`,
    tagColor: 'bg-purple-500',
  },
  {
    tag: 'ARTICLE',
    title: 'LinkedIn profile optimization guide',
    author: 'Eva de Boer',
    avatar: `${API_BASE}/uploads/avatars/eva.jpg`,
    readTime: '4 min read',
    image: `${API_BASE}/uploads/articles/linkedin-optimization.jpg`,
    tagColor: 'bg-cyan-500',
  },
  {
    tag: 'SUPER LESSON',
    title: 'Salary negotiation: get what you deserve',
    author: 'Daan Meijer',
    avatar: `${API_BASE}/uploads/avatars/daan.jpg`,
    readTime: '6 min read',
    image: `${API_BASE}/uploads/articles/salary-negotiation.jpg`,
    tagColor: 'bg-blue-600',
  },
];

export const VIDEO_CARDS: VideoCardData[] = [
  {
    id: 'sarah-m',
    thumbnail: `${API_BASE}/uploads/testimonials/sarah-m.jpg`,
    title: 'From 0 interviews to 4 callbacks',
    name: 'Sarah M.',
    role: 'Marketing Manager',
    duration: '0:32',
    description:
      'How CV Labz helped me land multiple interviews in just 2 weeks',
  },
  {
    id: 'marcus-t',
    thumbnail: `${API_BASE}/uploads/testimonials/marcus-t.jpg`,
    title: 'How AI helped me prep like a pro',
    name: 'Marcus T.',
    role: 'Software Engineer',
    duration: '0:28',
    description:
      'The AI coach transformed my interview skills completely',
  },
  {
    id: 'elena-r',
    thumbnail: `${API_BASE}/uploads/testimonials/elena-r.jpg`,
    title: 'Redesigned my CV in 10 minutes',
    name: 'Elena R.',
    role: 'Product Designer',
    duration: '0:25',
    description:
      'Quick, professional, and it actually got me noticed',
  },
];
