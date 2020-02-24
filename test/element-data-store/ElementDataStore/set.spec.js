import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#set', () => {
  beforeEach(() => document.body.innerHTML = '<div></div>')
  afterEach(() => document.body.innerHTML = '')

  it('associates "data" with "element" "key" and returns "data"', () => {
    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    expect(store.set(element, key, data)).toBe(data)
    expect(store._store.get(element)).toEqual({ someKey: data })
  })
})
