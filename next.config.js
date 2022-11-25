/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io', 'avatars.dicebear.com'],
  },
};

module.exports = nextConfig;
