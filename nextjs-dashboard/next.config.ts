import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverActions: {
      allowedOrigins: [
        'super-duper-happiness-6947q5r7g5v725qjg-3000.app.github.dev',
        'localhost:3000',
        '*.app.github.dev'
      ],
    },
  },
};

export default nextConfig;
