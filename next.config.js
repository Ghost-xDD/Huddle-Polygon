/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ipfs.io',
      'avatars.dicebear.com',
      'gateway.pinata.cloud',
      'cloudflare-ipfs.com',
    ],
  },
};

module.exports = nextConfig;
