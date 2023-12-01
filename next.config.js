/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    localeDetection: false
  },
}

module.exports = nextConfig
