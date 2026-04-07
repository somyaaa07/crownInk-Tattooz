/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    domains: ['images.unsplash.com'], // ✅ whitelist the Unsplash domain
  },
  reactCompiler: true,
};



export default nextConfig;
