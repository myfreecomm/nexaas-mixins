import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore#delete', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('if the "key" has the "data", delete it and return "true"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.delete(element, key)).toBeTruthy()
    expect(store._store.get(element)).toEqual({})
  })

  test('if the "key" doesn`t has the "data", return "false"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const key = 'someKey'
    const data = {}

    store._store.set(element, { otherKey: data })

    expect(store.delete(element, key)).toBeFalsy()
    expect(store._store.get(element)).toEqual({ otherKey: data })
  })

  test('should delete all "element" keys when a "key" isn`t specified and return "true"', () => {
    document.body.innerHTML = '<div></div>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.delete(element)).toBeTruthy()
    expect(store._store.get(element)).toBeUndefined()
  })

  test('should return "false" when "element" isn`t registered', () => {
    document.body.innerHTML = '<div></div><p></p>'

    const store = new ElementDataStore()
    const element = document.querySelector('div')
    const otherElement = document.querySelector('p')
    const data = {}

    store._store.set(element, { someKey: data })

    expect(store.delete(otherElement)).toBeFalsy()
  })
})
