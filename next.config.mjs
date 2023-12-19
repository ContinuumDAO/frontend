import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {},
})

export default withMDX(nextConfig)
