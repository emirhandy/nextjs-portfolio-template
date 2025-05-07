/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [process.env.NEXT_PUBLIC_STORAGE_DOMAIN || 'firebasestorage.googleapis.com']
  }
};

export default nextConfig;
