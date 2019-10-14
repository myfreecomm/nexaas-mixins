import prepareTarget from '../../src/interface/prepareTarget'

describe('prepareTarget', () => {
  it('includes "__implements__" property to target', () => {
    const target = {}

    prepareTarget(target)

    expect(Object.getOwnPropertyDescriptor(target, '__implements__')).toEqual({
      configurable: true,
      enumerable: false,
      value: [],
      writable: true
    })
  })

  describe('when target already has "__implements__" property', () => {
    const storagedefineProperty = Object.defineProperty

    beforeEach(() => Object.defineProperty = jest.fn(storagedefineProperty))
    afterEach(() => Object.defineProperty = storagedefineProperty)

    it('doesn`t include again', () => {
      const target = { __implements__: [] }

      prepareTarget(target)

      expect(Object.defineProperty).not.toHaveBeenCalled()
    })
  })
})
