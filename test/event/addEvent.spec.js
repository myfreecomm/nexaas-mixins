import eventPropName from '../../src/event/eventPropName'
import addEvent from '../../src/event/addEvent'

describe('addEvent', () => {
  it('creates "object"s attribute for the "type" with the "callback"', () => {
    const type = 'eventType'
    const object = { [eventPropName]: {} }
    const callback = () => {}

    addEvent(object, type, callback)

    expect(object[eventPropName][type]).toEqual([callback])
  })

  describe('"object" has an attribute for the "type"', () => {
    it('inserts the "callback"', () => {
      const type = 'eventType'
      const existingCallback = () => {}
      const object = { [eventPropName]: { [type]: [existingCallback] } }
      const callback = () => {}

      addEvent(object, type, callback)

      expect(object[eventPropName][type]).toEqual([existingCallback, callback])
    })
  })
})
