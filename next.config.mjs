/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/kancelaria" : "",
  assetPrefix: isProd ? "/kancelaria/" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
