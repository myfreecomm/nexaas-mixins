import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#get', () => {
  beforeEach(() => document.body.innerHTML = '<div></div>')
  afterEach(() => document.body.innerHTML = '')

  it('returns data associated with the "element" "key"', () => {
    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.get(element, key)).toBe(data)
  })

  it('returns "undefined" if "element" has no data for the "key"', () => {
    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'

    expect(store.get(element, key)).toBeUndefined()
  })
})
