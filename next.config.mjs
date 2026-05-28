// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.kym-cdn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
