/**
 * DO NOT upgrade Next.js (currently 13.3.4) until the Headless UI dropdown bug
 * in Next.js 13.4.x is confirmed fixed. Upgrading to 13.4+ breaks header
 * Popover dropdowns (Use Cases, Governance, etc.) due to SSR/hydration issues.
 * See: https://github.com/vercel/next.js/issues (search Headless UI / Popover).
 */
import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
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
