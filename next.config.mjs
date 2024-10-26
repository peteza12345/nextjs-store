/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',

      },
      {
        protocol: 'https',
        hostname: 'ibbdetibjuzwrprbiayt.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ]
  }
};

export default nextConfig;
