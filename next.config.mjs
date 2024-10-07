/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.static.services.benjaminsurrey.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

export default nextConfig
