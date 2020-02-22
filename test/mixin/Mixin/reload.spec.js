jest.mock('../../../src/mixin/attachMixinToElement')

import Mixin from '../../../src/mixin/Mixin'
import attachMixinToElement from '../../../src/mixin/attachMixinToElement'
import store from '../../../src/mixin/store'

describe('Mixin.reload', () => {
  beforeEach(() => attachMixinToElement.mockClear())
  afterEach(() => document.body.innerHTML = '')

  it('calls "instance.undo" and "attachMixinToElement"', () => {
    document.body.innerHTML = '<input>'

    const instance = { undo: jest.fn() }
    const element = document.querySelector('input')
    const options = {}

    store.set(element, Mixin.name, instance)

    expect(Mixin.reload(element, options)).toBe(Mixin)
    expect(instance.undo).toBeCalled()
    expect(attachMixinToElement).toBeCalledWith(element, options, Mixin, Mixin.name, store)
  })

  it('doesn`t call "attachMixinToElement" if there isn`t already instance for this mixin associated with the "element"', () => {
    document.body.innerHTML = '<input>'

    const element = document.querySelector('input')
    const options = {}

    expect(Mixin.reload(element, options)).toBe(Mixin)
    expect(attachMixinToElement).not.toBeCalled()
  })
})
