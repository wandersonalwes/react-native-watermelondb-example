import { Button, StyleSheet, View } from 'react-native'

import { useEvents } from '@/hooks/use-events'
import { EventList } from '@/components/event-list'

export default function Index() {
  const { createEvent, events } = useEvents()

  return (
    <View style={styles.container}>
      <Button title="Adicionar evento" onPress={createEvent} />
      <EventList events={events} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
})
