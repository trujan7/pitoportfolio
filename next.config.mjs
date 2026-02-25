/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pitoportfolio",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;