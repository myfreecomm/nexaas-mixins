import store from '../../src/mixin/store'
import ElementDataStore from '../../src/element-data-store/ElementDataStore'

describe('store', () => {
  it('is an instance of "ElementDataStore"', () => {
    expect(store instanceof ElementDataStore).toBeTruthy()
  })
})
