export default function parseDataString (str) {
  if (['', undefined, null].includes(str)) return undefined

  try {
    return JSON.parse(str)
  } catch (_) {
    return str
  }
}
