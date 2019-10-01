import Mixin from '../../src/mixin/Mixin'

describe('Mixin#element', () => {
  it('returns "element"', () => {
    const element = {}
    const instance = new Mixin(element)

    expect(instance.element).toBe(element)
  })
})
