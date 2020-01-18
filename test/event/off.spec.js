jest.mock('../../src/event/removeEvent')

import eventPropName from '../../src/event/eventPropName'
import removeEvent from '../../src/event/removeEvent'
import off from '../../src/event/off'

describe('off', () => {
  afterEach(() => removeEvent.mockClear())

  it('calls "removeEvent" with "this[eventPropName]", "type" and "callback"', () => {
    const type = 'eventType'
    const callback = () => {}
    const object = { [eventPropName]: { [type]: [callback] } }

    off.call(object, type, callback)

    expect(removeEvent).toBeCalledWith(object[eventPropName], type, callback)
  })

  it('calls "removeEvent" for each compatible object event type', () => {
    const context = 'context'
    const type = '.eventType'
    const callback = () => {}
    const object = {
      [eventPropName]: {
        [context]: [callback],
        [type]: [callback],
        [context + type]: [callback]
      }
    }

    off.call(object, type, callback)

    expect(removeEvent.mock.calls).toEqual([
      [object[eventPropName], type, callback],
      [object[eventPropName], context + type, callback]
    ])
  })

  it('returns "this"', () => {
    const object = {}

    expect(off.call(object, 'eventType', () => {})).toBe(object)
  })

  describe('when object does not have "eventPropName" property', () => {
    it('does not call "removeEvent"', () => {
      const object = {}

      off.call(object, 'eventType', () => {})

      expect(removeEvent).not.toBeCalled()
    })
  })
})
