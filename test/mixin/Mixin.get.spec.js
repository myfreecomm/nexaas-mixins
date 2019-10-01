import Mixin from '../../src/mixin/Mixin'
import store from '../../src/mixin/store'

describe('Mixin.remove', () => {
  afterAll(() => document.body.innerHTML = '')

  it('returns "instance" associated with "element"', () => {
    document.body.innerHTML = '<input>'

    const instance = {}
    const element = document.querySelector('input')

    store.set(element, Mixin.name, instance)

    expect(Mixin.get(element)).toBe(instance)
  })

  it('returns "undefined" if there isn`t "instance" associated with "element"', () => {
    document.body.innerHTML = '<input>'

    const element = document.querySelector('input')

    expect(Mixin.get(element)).toBeUndefined()
  })
})
