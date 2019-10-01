import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#set', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('should associate "data" with "element" "key"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store.set(element, key, data)

    expect(store._store.get(element)).toEqual({ someKey: data })
  })

  test('should return "data"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    expect(store.set(element, key, data)).toBe(data)
  })
})
