/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/app/building-your-application/deploying/static-exports
const nextConfig = {
  output: 'export',
  basePath: '/kancelaria',
  // assetPrefix: '/kancelaria/blob/gh-pages/',
  assetPrefix: 'https://marcinostrowskicoding.github.io/kancelaria/',
}

export default nextConfig
