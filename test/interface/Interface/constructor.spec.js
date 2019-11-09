import Interface from '../../../src/interface/Interface'
import copyOwnProperties from '../../../src/interface/copyOwnProperties'

jest.mock('../../../src/interface/copyOwnProperties')

describe('Interface.constructor', () => {
  beforeEach(() => {
    copyOwnProperties.mockClear()
  })

  it('assigns "_props" copy of "props" and dependency properties', () => {
    const copiedProperties = {}
    const props = {}
    const dependency = { props: {} }
    const otherDependency = { props: {} }

    copyOwnProperties.mockReturnValue(copiedProperties)

    const SomeInterface = new Interface(props, dependency, otherDependency)

    expect(copyOwnProperties).toBeCalledWith(
      expect.objectContaining({}),
      props,
      dependency.props,
      otherDependency.props
    )
    expect(SomeInterface._props).toBe(copiedProperties)
  })

  it('assigns "_depencencies" property with "...dependencies"', () => {
    const props = {}
    const dependencies = [Object]
    const SomeInterface  = new Interface(props, ...dependencies)

    expect(SomeInterface._dependencies).toEqual(dependencies)
  })

  describe('when there isn`t "...dependencies"', () => {
    it('assigns "_depencencies" property with empty array', () => {
      const props = {}
      const SomeInterface = new Interface(props)

      expect(SomeInterface._dependencies).toEqual([])
    })
  })
})
