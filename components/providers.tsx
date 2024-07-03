import { ReactNode } from 'react'

import { Database } from '@nozbe/watermelondb'
import { DatabaseProvider } from '@nozbe/watermelondb/react'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '@/model/schema'
import { Event } from '@/model/Event'

import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync'

const adapter = new SQLiteAdapter({
  schema,
  jsi: false,
  onSetUpError: (error) => {
    console.log('[WATERMELON_SETUP_ERROR]', error)
  },
})

const database = new Database({
  adapter,
  modelClasses: [Event],
})

// Sincronize dados locais com dados remotos.
async function sync() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      const changes: SyncDatabaseChangeSet = {
        events: {
          created: [],
          updated: [],
          deleted: [],
        },
      }
      return { changes, timestamp: 0 }
    },
    pushChanges: async ({ changes, lastPulledAt }) => {},
  })
}

export const Providers = ({ children }: { children: ReactNode }) => {
  return <DatabaseProvider database={database}>{children}</DatabaseProvider>
}
