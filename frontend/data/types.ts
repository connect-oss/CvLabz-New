import type React from 'react';

export interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  previewColor: string;
  linkText: string;
}

export interface LearningCardProps {
  tag: string;
  title: string;
  author: string;
  avatar: string;
  readTime: string;
  image: string;
  tagColor: string;
}

export interface VideoCardData {
  id: string;
  thumbnail: string;
  title: string;
  name: string;
  role: string;
  duration: string;
  description: string;
}

export interface OverlayScoreProps {
  value: number;
  label: string;
  gradientColors: [string, string];
  gradientId: string;
}

export interface TemplateCardDef {
  id: string;
  label: string;
  component: React.ReactNode;
}
