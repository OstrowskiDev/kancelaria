/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/app/building-your-application/deploying/static-exports
const nextConfig = {
  output: 'export',
  basePath: '/kancelaria',
  assetPrefix: '/kancelaria/',
}

export default nextConfig
