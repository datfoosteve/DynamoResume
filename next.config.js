/* A type annotation. */
/** @type {import('next').NextConfig} */
/* It's adding a rule to the webpack config. */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'] },
  /* It's adding a rule to the webpack config. */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
