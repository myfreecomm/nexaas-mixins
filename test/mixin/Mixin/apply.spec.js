jest.mock('../../../src/mixin/attachMixinToElement')

import Mixin from '../../../src/mixin/Mixin'
import attachMixinToElement from '../../../src/mixin/attachMixinToElement'
import store from '../../../src/mixin/store'

describe('Mixin.apply', () => {
  beforeEach(() => attachMixinToElement.mockClear())
  afterEach(() => document.body.innerHTML = '')

  it('calls "attachMixinToElement"', () => {
    document.body.innerHTML = '<input>'

    const element = document.querySelector('input')
    const customOptions = {}

    expect(Mixin.apply(element, customOptions)).toBe(Mixin)
    expect(attachMixinToElement).toBeCalledWith(element, customOptions, Mixin, Mixin.name, store)
  })

  it('doesn`t call "attachMixinToElement" if there`s already instance for this mixin associated with the "element"', () => {
    document.body.innerHTML = '<input>'

    const element = document.querySelector('input')
    const customOptions = {}

    store.set(element, Mixin.name, {})

    expect(Mixin.apply(element, customOptions)).toBe(Mixin)
    expect(attachMixinToElement).not.toBeCalled()
  })
})
