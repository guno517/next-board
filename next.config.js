/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-store.leagueoflegends.co.kr',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};
