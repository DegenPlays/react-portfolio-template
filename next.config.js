/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async redirects() {
//     if (process.env.NODE_ENV != 'development') {
//       return [
//         {
//           source: '/(.*)',
//           has: [
//             {
//               type: 'host',
//               value: '^(?!https://rough-salad-4827.on.fleek.co).*$', // Ensure it applies to all traffic
//             },
//           ],
//           destination: 'https://rough-salad-4827.on.fleek.co/$1',
//           permanent: true,
//         },
//       ]
//     } else {
//       return [];
//     }
//   },
// }

// module.exports = nextConfig