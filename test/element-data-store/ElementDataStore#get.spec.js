import ElementDataStore from '../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#get', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('should return data associated with the "element" "key"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.get(element, key)).toBe(data)
  })

  test('should return "undefined" when "element" has no data for the "key"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'

    expect(store.get(element, key)).toBeUndefined()
  })
})
