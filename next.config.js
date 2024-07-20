/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: '^(?!https://rough-salad-4827.on.fleek.co).*$', // Ensure it applies to all traffic
          },
        ],
        destination: 'https://rough-salad-4827.on.fleek.co/$1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
