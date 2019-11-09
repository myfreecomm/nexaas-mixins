import Interface from '../../../src/interface/Interface'
import copyOwnProperties from '../../../src/interface/copyOwnProperties'
import assignInterface from '../../../src/interface/assignInterface'

jest.mock('../../../src/interface/copyOwnProperties')
jest.mock('../../../src/interface/assignInterface')

describe('Interface#apply', () => {
  afterEach(() => {
    copyOwnProperties.mockClear()
    assignInterface.mockClear()
  })

  it('calls "copyOwnProperties" and "assignInterface"', () => {
    const SomeInterface = new Interface({})
    const target = {}
    const overwrites = {}

    SomeInterface.apply(target, overwrites)

    expect(copyOwnProperties).toBeCalledWith(target, SomeInterface._props, overwrites)
    expect(assignInterface).toBeCalledWith(target, SomeInterface)
  })

  it('returns "target"', () => {
    const SomeInterface = new Interface({})
    const target = {}

    expect(SomeInterface.apply(target)).toBe(target)
  })

  describe('when the interface is implemented by "target"', () => {
    const SomeInterface = new Interface({})
    const target = {}

    SomeInterface.isImplementedBy = () => true

    it('does not call "copyOwnProperties" and "assignInterface" if ', () => {
      expect(SomeInterface.apply(target)).toBe(target)
      expect(copyOwnProperties).not.toBeCalled()
      expect(assignInterface).not.toBeCalled()
    })
  })
})
