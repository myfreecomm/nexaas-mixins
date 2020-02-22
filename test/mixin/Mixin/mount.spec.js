jest.mock('../../../src/mixin/getOrSetElementId')

import Mixin from '../../../src/mixin/Mixin'
import getOrSetElementId from '../../../src/mixin/getOrSetElementId'

describe('Mixin.mount', () => {
  beforeAll(() => {
    Mixin.trigger = jest.fn()
    Mixin.apply = jest.fn()
  })

  afterEach(() => {
    getOrSetElementId.mockClear()
    Mixin.trigger.mockClear()
    Mixin.apply.mockClear()
  })

  class SomeMixin extends Mixin {}
  class OtherMixin extends Mixin {}
  class AnotherMixin extends Mixin {}

  const options = { mixins: [SomeMixin, OtherMixin, AnotherMixin] }

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('performs properly for a single "root"', () => {
    const id = 'some id'
    const someMixinUnparsedOptions = 'Some Mixin'
    const otherMixinUnparsedOptions = 'Other Mixin'

    getOrSetElementId.mockReturnValue(id)

    document.body.innerHTML = `
      <input
        mx-other-mixin="${otherMixinUnparsedOptions}"
        mx-some-mixin="${someMixinUnparsedOptions}"
        mx-fake-mixin
      >
    `

    const root = document.querySelector('input')

    Mixin.mount(root, options)

    expect(getOrSetElementId).toBeCalledWith(root)
    expect(Mixin.trigger).toBeCalledWith(`mx.mount.start.block.${id}`, root)
    expect(Mixin.trigger).toBeCalledWith(`mx.mount.start.element.${id}`, root)

    expect(Mixin.apply.mock.calls).toEqual([
      [root, otherMixinUnparsedOptions],
      [root, someMixinUnparsedOptions]
    ])

    expect(Mixin.trigger).toBeCalledWith(`mx.mount.end.element.${id}`, root)
    expect(Mixin.trigger).toBeCalledWith(`mx.mount.end.block.${id}`, root)
  })

  it('performs for a chain of elements', () => {
    document.body.innerHTML = `
      <div id="root-1">
        <div id="root-1-1">
          <div id="root-1-1-1"></div>
          <div id="root-1-1-2"></div>
        </div>
        <div id="root-1-2">
        </div>
      </div>
    `

    const root = document.querySelector('#root-1')

    jest.spyOn(Mixin, 'mount')
    Mixin.mount(root, options)

    expect(Mixin.mount.mock.calls).toEqual([
      [root, options],
      [document.querySelector('#root-1-1'), options],
      [document.querySelector('#root-1-1-1'), options],
      [document.querySelector('#root-1-1-2'), options],
      [document.querySelector('#root-1-2'), options],
    ])
  })
})
