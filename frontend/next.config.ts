import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'prod-api.cvlabz.com' },
      { protocol: 'https', hostname: 'cvlabz.com' },
    ],
    unoptimized: true, // Using <img> tags currently — switch to next/image incrementally
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
