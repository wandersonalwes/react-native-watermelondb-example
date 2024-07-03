import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Event } from '@/model/Event'
import { useEvent } from '@/hooks/use-event'
import { generateRandomId } from '@/utils/generate-random-id'

export const EventItem = ({ event }: { event: Event }) => {
  const { removeEvent, updateEvent } = useEvent(event)

  return (
    <View key={event.id} style={styles.event}>
      <View>
        <Text>{event.name}</Text>
        <Text>{new Date(event.date).toLocaleString('BR')}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.buttonDestructive]}
          onPress={removeEvent}
        >
          <MaterialCommunityIcons name="trash-can-outline" size={18} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonDefault]}
          onPress={() => updateEvent(generateRandomId())}
        >
          <MaterialCommunityIcons name="pencil-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 4,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonDestructive: {
    backgroundColor: 'red',
  },
  buttonDefault: {
    backgroundColor: 'blue',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
})
