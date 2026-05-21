"use client";
import {
  Linkedin,
  FileText,
  Search,
  Mail,
  Briefcase,
} from 'lucide-react';

export const TOOLS = [
  {
    icon: <Linkedin className="w-6 h-6 text-purple-600" />,
    title: 'LinkedIn Analyzer',
    description: 'Analyze your profile and get actionable insights.',
    previewColor: 'bg-purple-50',
    linkText: 'Try LinkedIn Analyzer',
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: 'CV Builder',
    description: 'Create a professional CV with live preview.',
    previewColor: 'bg-blue-50',
    linkText: 'Try CV Builder',
  },
  {
    icon: <Search className="w-6 h-6 text-green-600" />,
    title: 'CV Matcher',
    description: 'Match your CV to any job and improve your score.',
    previewColor: 'bg-green-50',
    linkText: 'Try CV Matcher',
  },
  {
    icon: <Mail className="w-6 h-6 text-orange-600" />,
    title: 'Cover Letter',
    description: 'Generate a tailored cover letter in seconds.',
    previewColor: 'bg-orange-50',
    linkText: 'Try Cover Letter',
  },
];

export const HOW_IT_WORKS_STEPS = [
  { icon: <Linkedin className="w-5 h-5 text-blue-600" />, label: 'Paste your LinkedIn' },
  { icon: <FileText className="w-5 h-5 text-blue-600" />, label: 'Upload your CV' },
  { icon: <Search className="w-5 h-5 text-blue-600" />, label: 'Match it to the job' },
  { icon: <Briefcase className="w-5 h-5 text-blue-600" />, label: 'Apply' },
];
