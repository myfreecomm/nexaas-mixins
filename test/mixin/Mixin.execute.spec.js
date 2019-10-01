import Mixin from '../../src/mixin/Mixin'

describe('Mixin#execute', () => {
  it('throws error', () => {
    const element = {}
    const instance = new Mixin(element)

    expect(instance.execute).toThrowError('Not implemented')
  })
})
