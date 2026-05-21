import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/Auth',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
