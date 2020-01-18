import eventPropName from './eventPropName'

export default function addEvent (object, type, callback) {
  if (!object[eventPropName][type]) {
    object[eventPropName][type] = []
  }

  object[eventPropName][type].push(callback)
}
