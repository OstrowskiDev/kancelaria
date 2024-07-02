/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath:  isProd ? '/kancelaria' : '',
  assetPrefix: isProd ? '/kancelaria/': '' ,
  // assetPrefix: 'https://marcinostrowskicoding.github.io/kancelaria/',
}

export default nextConfig
