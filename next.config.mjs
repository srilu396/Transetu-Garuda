/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/gps-tracking-solutions",
        destination: "/solutions/gps-tracking-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
