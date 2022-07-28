/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint:{
    ignoreDuringBuilds:false,
  },
  optimizeFonts:false,
}

module.exports = nextConfig
