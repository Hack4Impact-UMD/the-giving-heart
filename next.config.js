require('dotenv').config()
const { withPayload } = require('@payloadcms/next-payload')
const path = require('path')

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // images: {
//   //   domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL],
//   // },
// }
module.exports = withPayload(
  {
    // your Next config here
    reactStrictMode: true,
    swcMinify: true,
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, './src/payload/payload.config.ts'),
    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: '/admin',
  },
)
