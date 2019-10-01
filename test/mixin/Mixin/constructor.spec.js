import Mixin from '../../../src/mixin/Mixin'

describe('Mixin.constructor', () => {
  it('assignes "_element" attribute with "element"', () => {
    const element = {}
    const instance = new Mixin(element)

    expect(instance).toEqual({ _element: element })
  })
})
