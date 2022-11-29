/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      loader: 'html-loader',
    });
    return config
  },
  images: {
    domains: [
      'cdn.shopify.com',
      'capricathemes.com',
      'res.cloudinary.com',
      'instagram.fcnq2-1.fna.fbcdn.net',
      'instagram.fcnq2-2.fna.fbcdn.net',
      'd3k81ch9hvuctc.cloudfront.net'
    ],
  },
}

module.exports = nextConfig
