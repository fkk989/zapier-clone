/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    transpilePackages:["@repo/ui"],
    async rewrites() {
        return [
          {
            source: '/api/v1',
            destination: 'http://localhost:3000/api/v1',
          },
        ]
      },
};

export default nextConfig;
