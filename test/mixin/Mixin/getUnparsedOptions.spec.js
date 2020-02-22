import Mixin from '../../../src/mixin/Mixin'

describe('Mixin.getUnparsedOptions', () => {
  const unparsedOptions = 'Some value'
  class MyMixin extends Mixin {}

  beforeEach(() => {
    document.body.innerHTML = `<input mx-my-mixin="${unparsedOptions}">`
  })

  afterAll(() => {
    document.body.innerHTML = ''
  })

  it('returns value of "element"s attribute associated with the "Mixin"', () => {
    const element = document.querySelector('input')

    expect(MyMixin.getUnparsedOptions(element)).toBe(unparsedOptions)
  })
})
