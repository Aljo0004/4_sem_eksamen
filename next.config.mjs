/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nrmpgakohbffwagdkvpz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
