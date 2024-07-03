import { FlatList } from 'react-native'
import { Event } from '@/model/Event'
import { EventItem } from './event-item'

export const EventList = ({ events }: { events: Event[] }) => {
  return (
    <FlatList
      data={events}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      renderItem={({ item }) => <EventItem event={item} />}
    />
  )
}
