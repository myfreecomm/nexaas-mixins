import eventPropName from './eventPropName'
import addEvent from './addEvent'

export default function on (type, callback) {
  if (!(eventPropName in this)) {
    Object.defineProperty(this, eventPropName, { value: {} })
  }

  addEvent(this, type, callback)

  return this
}
