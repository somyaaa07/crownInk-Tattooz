/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    domains: ['images.unsplash.com',"www.bleedink.ca"], // ✅ whitelist the Unsplash domain
  },
  reactCompiler: true,
};



export default nextConfig;
