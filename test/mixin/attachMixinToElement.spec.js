import attachMixinToElement from '../../src/mixin/attachMixinToElement'

describe('attachMixinToElement', () => {
  it('instantiates "Mixin", store it to "element" and calls "execute"', () => {
    const element = {}
    const customOptions = {}
    const execute = jest.fn()
    const Mixin = jest.fn(function () { this.execute = execute })
    const key = 'someKey'
    const store = { set: jest.fn() }

    attachMixinToElement(element, customOptions, Mixin, key, store)

    expect(Mixin).toBeCalledWith(element, customOptions)
    expect(store.set).toBeCalledWith(element, key, expect.any(Mixin))
    expect(execute).toBeCalled()
  })

  it('instantiates "Mixin" with "element" attribute options with "customOptions" is "undefined"', () => {
    const element = {}
    const customOptions = undefined
    const parsedOptions = {}
    const Mixin = jest.fn(function () { this.execute = () => {} })
    const key = 'someKey'
    const store = { set: () => {} }

    Mixin.parseOptions = jest.fn().mockReturnValue(parsedOptions)
    attachMixinToElement(element, customOptions, Mixin, key, store)

    expect(Mixin.parseOptions).toBeCalledWith(element)
    expect(Mixin).toBeCalledWith(element, parsedOptions)
  })
})
