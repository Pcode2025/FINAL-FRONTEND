/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps identify potential problems
  swcMinify: true, // Enables SWC compiler for faster builds
  images: {
    domains: ['res.cloudinary.com', 'yourdomain.com'], // Allow external images
  },
  webpack(config) {
    config.resolve.fallback = { fs: false }; // Fix issues with modules needing 'fs'
    return config;
  },
  experimental: {
    appDir: true, // Enable experimental app directory (for Next.js 14+)
  },
};

module.exports = nextConfig;

