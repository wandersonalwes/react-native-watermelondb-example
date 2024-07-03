import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'events',
      columns: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'date',
          type: 'number',
        },
      ],
    }),
  ],
})
