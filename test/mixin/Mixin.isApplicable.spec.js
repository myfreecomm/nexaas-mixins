import Mixin from '../../src/mixin/Mixin'

describe('Mixin.isApplicable', () => {
  afterEach(() => document.body.innerHTML = '')

  it('returns "true" if "element" has appropriate attribute', () => {
    document.body.innerHTML = '<input mx-my-mixin>'

    const element = document.querySelector('input')
    class MyMixin extends Mixin {}

    expect(MyMixin.isApplicable(element)).toBeTruthy()
  })

  it('returns "false" if "element" has no appropriate attribute', () => {
    document.body.innerHTML = '<input>'

    const element = document.querySelector('input')
    class MyMixin extends Mixin {}

    expect(MyMixin.isApplicable(element)).toBeFalsy()
  })
})
