import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'subMenu',  // Add a sub-menu field for nested links
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 5,  // Maximum number of sub-menu items
          label: 'Sub Menu', // Label for the sub-menu
        },
      ],
      maxRows: 7,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}