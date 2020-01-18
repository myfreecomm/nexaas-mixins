import eventPropName from './eventPropName'
import removeEvent from './removeEvent'

export default function off (type, callback) {
  if (!(eventPropName in this)) return this

  if (type.charAt(0) !== '.') {
    removeEvent(this[eventPropName], type, callback)

    return this
  }

  for (const registered in this[eventPropName]) {
    const substring = registered.substring(
      registered.length - type.length,
      registered.length
    )

    if (substring === type) {
      removeEvent(this[eventPropName], registered, callback)
    }
  }

  return this
}
