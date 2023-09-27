import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'

export const Roles: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
}

export default Roles
