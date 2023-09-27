import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'

export const Events: CollectionConfig = {
  slug: 'events',
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
      name: 'eventDate',
      type: 'date',
      label: 'Event Date',
    },
    {
      name: 'signUpOpenDate',
      type: 'date',
      label: 'Sign Up Open Date',
    },
    {
      name: 'signUpEndDate',
      type: 'date',
      label: 'Sign Up End Date',
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

export default Events
