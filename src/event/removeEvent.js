export default function removeEvent (object, type, callback) {
  if (!object[type]) return

  if (callback) {
    object[type] = object[type].filter(e => e !== callback)
  }

  if (!callback || !object[type].length) {
    delete object[type]
  }
}
