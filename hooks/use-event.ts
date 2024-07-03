import { Event } from '@/model/Event'
import { useDatabase } from '@nozbe/watermelondb/react'

export const useEvent = (event: Event) => {
  const database = useDatabase()

  const removeEvent = async () => {
    try {
      await database.write(async () => {
        await event.destroyPermanently()
      })
    } catch (error) {
      console.log('[REMOVE_EVENT]', error)
    }
  }

  const updateEvent = async (name: string) => {
    try {
      await database.write(async () => await event.update((event) => (event.name = name)))
    } catch (error) {
      console.log('[UPDATE_EVENT]', error)
    }
  }

  return { removeEvent, updateEvent }
}
