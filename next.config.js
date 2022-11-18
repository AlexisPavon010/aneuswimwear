/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'capricathemes.com', 'instagram.fcnq2-1.fna.fbcdn.net', 'instagram.fcnq2-2.fna.fbcdn.net', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
