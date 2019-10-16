import Interface from '../../../src/interface/Interface'

describe('Interface#dependencies', () => {
  it('returns a copy of "_dependencies" property', () => {
    const dependencies = [new Interface({})]
    const SomeInterface = new Interface({}, ...dependencies)

    expect(SomeInterface.dependencies).toEqual(SomeInterface._dependencies)
    expect(SomeInterface.dependencies).not.toBe(SomeInterface._dependencies)
  })
})
