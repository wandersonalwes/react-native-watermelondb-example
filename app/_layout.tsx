import { Stack } from 'expo-router'
import { Providers } from '@/components/providers'

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Providers>
  )
}
