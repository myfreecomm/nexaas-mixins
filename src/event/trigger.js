import eventPropName from './eventPropName'

export default function trigger (type, data, thisObject) {
  if (!(eventPropName in this)) return this

  let callbacks = []

  for (const registered in this[eventPropName]) {
    const hasEqualLenght = registered.length === type.length
    const areTheSame = registered === type
    const isContext = (
      registered.substring(0, type.length) === type &&
      type.charAt(type.length - 1) === '.'
    )

    if ((hasEqualLenght && areTheSame) || isContext) {
      callbacks = callbacks.concat(this[eventPropName][registered])
    }
  }

  for (const callback of callbacks) {
    callback.call(thisObject === undefined ? this : thisObject, data)
  }

  return this
}
