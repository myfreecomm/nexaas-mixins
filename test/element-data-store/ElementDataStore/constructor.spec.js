import ElementDataStore from '../../../src/element-data-store/ElementDataStore'

describe('ElementDataStore.constructor', () => {
  test('should define a "_store" property as a "Map"', () => {
    const store = new ElementDataStore()

    expect(store).toEqual({ _store: expect.any(Map) })
  })
})
