import eventPropName from '../../src/event/eventPropName'
import trigger from '../../src/event/trigger'

describe('trigger', () => {
  it('perform callbacks associated with event type', () => {
    const callback = jest.fn()
    const otherCallback = jest.fn()
    const anotherCallback = jest.fn()
    const type = 'eventType'
    const object = {
      [eventPropName]: {
        [type]: [callback, otherCallback],
        'anotherEvent': [anotherCallback]
      }
    }

    trigger.call(object, type)

    expect(callback).toBeCalled()
    expect(otherCallback).toBeCalled()
    expect(anotherCallback).not.toBeCalled()
  })

  it('by default assigns object "this" to callback "this"', () => {
    const callback = jest.fn(function () { return this })
    const type = 'eventType'
    const object = { [eventPropName]: { [type]: [callback] } }

    trigger.call(object, type)

    expect(callback).toReturnWith(object)
  })

  it('perform callbacks associated with event type context', () => {
    const callback = jest.fn()
    const otherCallback = jest.fn()
    const anotherCallback = jest.fn()
    const type = 'eventType'
    const object = {
      [eventPropName]: {
        [`${type}.foo.bar`]: [callback, otherCallback],
        [`${type}.foo`]: [otherCallback],
        'anotherEvent': [anotherCallback]
      }
    }

    trigger.call(object, `${type}.`)

    expect(callback).toBeCalled()
    expect(otherCallback).toBeCalledTimes(2)
    expect(anotherCallback).not.toBeCalled()
  })

  it('pass the "data" as callback argument when there is "data" argument', () => {
    const data = {}
    const callback = jest.fn(data => data)
    const type = 'event'
    const object = { [eventPropName]: { [type]: [callback] } }

    trigger.call(object, type, data)

    expect(callback).toBeCalledWith(data)
  })

  it('assigns "thisObject" to callback "this"', () => {
    const thisObject = {}
    const callback = jest.fn(function () { return this })
    const type = 'event'
    const object = { [eventPropName]: { [type]: [callback] } }

    trigger.call(object, type, undefined, thisObject)

    expect(callback).toReturnWith(thisObject)
  })

  it('returns "this"', () => {
    const object = {}

    expect(trigger.call(object, 'eventType')).toBe(object)
  })
})
