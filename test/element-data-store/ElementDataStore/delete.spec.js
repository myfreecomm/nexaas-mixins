import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#delete', () => {
  beforeEach(() => document.body.innerHTML = '<div></div>')
  afterEach(() => document.body.innerHTML = '')

  it('deletes the "key" and returns "true" if "key" has the "data", ', () => {
    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.delete(element, key)).toBeTruthy()
    expect(store._store.get(element)).toEqual({})
  })

  it('returns "false" if the "key" doesn`t has the "data"', () => {
    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { otherKey: data })

    expect(store.delete(element, key)).toBeFalsy()
    expect(store._store.get(element)).toEqual({ otherKey: data })
  })

  describe('when a "key" isn`t specified', () => {
    it('deletes all "element" keys and return "true"', () => {
      const store = new ElementDataStore()
      const element = document.querySelector('div')
      const data = {}

      store._store.set(element, { someKey: data })

      expect(store.delete(element)).toBeTruthy()
      expect(store._store.get(element)).toBeUndefined()
    })
  })

  describe('when "element" isn`t registered', () => {
    beforeEach(() => document.body.innerHTML = '<div></div><p></p>')

    it('returns "false" ', () => {
      const store = new ElementDataStore()
      const element = document.querySelector('div')
      const otherElement = document.querySelector('p')
      const data = {}

      store._store.set(element, { someKey: data })

      expect(store.delete(otherElement)).toBeFalsy()
    })
  })
})
