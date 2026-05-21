import type { LearningCardProps, VideoCardData } from './types';

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
    avatar: 'https://i.pravatar.cc/150?u=lotte',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop',
    tagColor: 'bg-blue-600',
  },
  {
    tag: 'ARTICLE',
    title: '10 CV mistakes that cost you interviews',
    author: 'Jeroen Timmer',
    avatar: 'https://i.pravatar.cc/150?u=jeroen',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=250&fit=crop',
    tagColor: 'bg-cyan-500',
  },
  {
    tag: 'SPRING LESSON',
    title: 'How to answer the "Tell me about yourself"',
    author: 'Sanne Verhoeven',
    avatar: 'https://i.pravatar.cc/150?u=sanne',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop',
    tagColor: 'bg-emerald-500',
  },
  {
    tag: 'LEARNING PATH',
    title: 'Complete guide to career change',
    author: 'Mark de Jong',
    avatar: 'https://i.pravatar.cc/150?u=mark',
    readTime: '5 lessons',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=250&fit=crop',
    tagColor: 'bg-purple-500',
  },
  {
    tag: 'ARTICLE',
    title: 'LinkedIn profile optimization guide',
    author: 'Eva de Boer',
    avatar: 'https://i.pravatar.cc/150?u=eva',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    tagColor: 'bg-cyan-500',
  },
  {
    tag: 'SUPER LESSON',
    title: 'Salary negotiation: get what you deserve',
    author: 'Daan Meijer',
    avatar: 'https://i.pravatar.cc/150?u=daan',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop',
    tagColor: 'bg-blue-600',
  },
];

export const VIDEO_CARDS: VideoCardData[] = [
  {
    id: 'sarah-m',
    thumbnail:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face',
    title: 'From 0 interviews to 4 callbacks',
    name: 'Sarah M.',
    role: 'Marketing Manager',
    duration: '0:32',
    description:
      'How CV Labz helped me land multiple interviews in just 2 weeks',
  },
  {
    id: 'marcus-t',
    thumbnail:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    title: 'How AI helped me prep like a pro',
    name: 'Marcus T.',
    role: 'Software Engineer',
    duration: '0:28',
    description:
      'The AI coach transformed my interview skills completely',
  },
  {
    id: 'elena-r',
    thumbnail:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face',
    title: 'Redesigned my CV in 10 minutes',
    name: 'Elena R.',
    role: 'Product Designer',
    duration: '0:25',
    description:
      'Quick, professional, and it actually got me noticed',
  },
];
