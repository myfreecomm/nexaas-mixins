import Mixin from '../../src/mixin/Mixin'

describe('Mixin#undo', () => {
  it('throws error', () => {
    const element = {}
    const instance = new Mixin(element)

    expect(instance.undo).toThrowError('Not implemented')
  })
})
