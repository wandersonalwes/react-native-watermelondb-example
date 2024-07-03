export const generateRandomId = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const randomName = Array.from(
    { length: 10 },
    () => alphabet[Math.floor(Math.random() * alphabet.length)]
  ).join('')

  return randomName
}
