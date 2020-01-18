jest.mock('../../src/event/addEvent')

import eventPropName from '../../src/event/eventPropName'
import addEvent from '../../src/event/addEvent'
import on from '../../src/event/on'

describe('on', () => {
  afterEach(() => addEvent.mockClear())

  it(`defines "${eventPropName}" property if it does not exist`, () => {
    const object = {}

    on.call(object, 'eventType', () => {})

    expect(object[eventPropName]).toEqual(expect.any(Object))
  })

  it('calls "addEvent" with "object", "type" and "callback"', () => {
    const object = {}
    const type = 'eventType'
    const callback = () => {}

    on.call(object, type, callback)

    expect(addEvent).toBeCalledWith(object, type, callback)
  })

  it('returns "this"', () => {
    const object = {}

    expect(on.call(object, 'eventType', () => {})).toBe(object)
  })

  describe(`if "${eventPropName}" property is already defined on "object"`, () => {
    const defineProperty = Object.defineProperty

    beforeAll(() => Object.defineProperty = jest.fn())
    afterAll(() => Object.defineProperty = defineProperty)

    it('does not define it again', () => {
      const object = { [eventPropName]: { event: [] } }

      on.call(object, 'eventType', () => {})

      expect(Object.defineProperty).not.toBeCalled()
    })
  })
})
