export default function generateRandomCode (length = 9) {
  return Math.random().toString(36).substr(2, length)
}
