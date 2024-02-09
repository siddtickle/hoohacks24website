/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
          {
            source: '/register/',
            destination: 'https://app.hoohacks.io/',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
