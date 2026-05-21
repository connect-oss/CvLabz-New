import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';
import BrokenImageHandler from '@/components/BrokenImageHandler';
import AnimationConfig from '@/components/AnimationConfig';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cvlabz.com'),
  title: {
    default: 'CV Labz — AI Resume Builder | Build, Score & Match Your CV',
    template: '%s | CV Labz',
  },
  description:
    'Build your CV, score your LinkedIn, match to any vacancy, and write your cover letter. All in one place. Used by 2,300+ professionals.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CV Labz — AI Resume Builder',
    description:
      'Build your CV, score your LinkedIn, match to any vacancy, and write your cover letter. All in one place.',
    url: 'https://cvlabz.com',
    siteName: 'CV Labz',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Labz — AI Resume Builder',
    description:
      'Build your CV, score your LinkedIn, match to any vacancy, and write your cover letter.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CV Labz',
              url: 'https://cvlabz.com',
              description:
                'AI-powered resume builder, LinkedIn analyzer, CV matcher, and cover letter generator.',
              email: 'connect@cvlabz.com',
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CV Labz',
              url: 'https://cvlabz.com',
            }),
          }}
        />
        <BrokenImageHandler />
        <Suspense>
          <AnimationConfig />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
