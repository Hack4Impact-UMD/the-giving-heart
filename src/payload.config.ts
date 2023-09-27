import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Events } from './collections/Events'
import { Pages } from './collections/Pages'
import { Roles } from './collections/Roles'
import BeforeLogin from './components/BeforeLogin'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Pages, Roles, Events],
  admin: {
    components: {
      beforeLogin: [BeforeLogin],
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
