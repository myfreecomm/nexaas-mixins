import removeEvent from '../../src/event/removeEvent'

describe('removeEvent', () => {
  it('removes "callback" to "object"s "type" events list', () => {
    const callback = () => {}
    const otherCallback = () => {}
    const type = 'eventType'
    const object = { [type]: [callback, otherCallback] }

    removeEvent(object, type, callback)

    expect(object[type]).toEqual(expect.not.arrayContaining([callback]))
  })

  it('deletes "object"s "type" property if "callback" argument is not present', () => {
    const callback = () => {}
    const type = 'eventType'
    const object = { [type]: [callback] }

    removeEvent(object, type)

    expect(type in object).toBeFalsy()
  })

  describe('if "type" is not defined on "object"', () => {
    it('does nothing', () => {
      const object = {}

      removeEvent(object, 'eventType', () => {})

      expect(object).toBe(object)
    })
  })
})
