/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: { unoptimized: true, qualities: [75, 85, 90] },
};

module.exports = nextConfig;
