/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  // Enable static exports for better performance
  // output: 'export', // Uncomment if you want static export
};

export default nextConfig;
