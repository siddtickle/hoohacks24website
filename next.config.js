/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  //   images: {
  //     unoptimized: true,
  //   },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/BzDGFTAbQe",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
