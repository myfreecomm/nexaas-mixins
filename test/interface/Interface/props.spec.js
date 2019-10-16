import Interface from '../../../src/interface/Interface'

describe('Interface#props', () => {
  it('returns a copy of "_prop" property', () => {
    const props = { prop: () => {} }
    const SomeInterface = new Interface(props)

    expect(SomeInterface.props).toEqual(SomeInterface._props)
    expect(SomeInterface.props).not.toBe(SomeInterface._props)
  })
})
