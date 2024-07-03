import { useEffect, useState } from 'react'
import { useDatabase } from '@nozbe/watermelondb/react'

import { Event } from '@/model/Event'
import { generateRandomId } from '@/utils/generate-random-id'

export const useEvents = () => {
  const database = useDatabase()
  const [events, setEvents] = useState<Event[]>([])
  const collection = database.collections.get<Event>('events')

  const createEvent = async () => {
    try {
      await database.write(async () => {
        await collection.create((event) => {
          event.name = generateRandomId()
          event.date = Date.now()
        })
      })
    } catch (error) {
      console.log('[ADD_EVENT]', error)
    }
  }

  useEffect(() => {
    const observeEvents = collection
      .query()
      .observeWithColumns(['name', 'date'])
      .subscribe(setEvents)

    return () => observeEvents.unsubscribe()
  }, [])

  return { events, createEvent }
}
