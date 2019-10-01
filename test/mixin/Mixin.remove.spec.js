import Mixin from '../../src/mixin/Mixin'
import store from '../../src/mixin/store'

const storeDelete = store.delete

describe('Mixin.remove', () => {
  beforeEach(() => {
    store.delete = jest.fn(storeDelete)
  })

  afterEach(() => {
    document.body.innerHTML = ''
    store.delete = storeDelete
  })

  it('calls "instance.undo" and "store.delete" with "element" and "Mixin.name"', () => {
    document.body.innerHTML = '<input>'

    const instance = { undo: jest.fn() }
    const element = document.querySelector('input')

    store.set(element, Mixin.name, instance)

    expect(Mixin.remove(element)).toBeTruthy()
    expect(instance.undo).toBeCalled()
    expect(store.delete).toBeCalledWith(element, Mixin.name)
  })

  it('doesn`t call "instance.undo" and "store.delete" when there isn`t stored "Mixin instance"', () => {
    document.body.innerHTML = '<input>'

    const instance = { undo: jest.fn() }
    const element = document.querySelector('input')

    expect(Mixin.remove(element)).toBeFalsy()
    expect(instance.undo).not.toBeCalled()
    expect(store.delete).not.toBeCalled()
  })
})
