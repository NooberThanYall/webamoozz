/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     esmExternals: "loose", // <-- add this
    //     serverComponentsExternalPackages: ["mongoose"] // <-- and this
    //   }

    images: {
        domains: ['picsum.photos', 'zeba.academy']
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
