import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
}

export default Users
