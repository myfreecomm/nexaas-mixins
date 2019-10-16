import Interface from '../../../src/interface/Interface'

describe('Interface#isImplementedBy', () => {
  it('returns "true" if target implements the "Interface"', () => {
    const SomeInterface = new Interface({})
    const target = SomeInterface.apply({})

    expect(SomeInterface.isImplementedBy(target)).toBeTruthy()
  })

  it('returns "true" when "Interface" is implemented in prototype chain', () => {
    const SomeInterface = new Interface({})

    class A {}
    class B extends A {}

    SomeInterface.apply(A.prototype)

    const target = new B()

    expect(SomeInterface.isImplementedBy(target)).toBeTruthy()
  })

  it('returns "false" when "Interface" isn`t implemented in prototype chain', () => {
    const SomeInterface = new Interface({})

    class A {}
    class B extends A {}

    const target = new B()

    expect(SomeInterface.isImplementedBy(target)).toBeFalsy()
  })

  it('returns "false" if "target" is null', () => {
    const SomeInterface = new Interface()
    const target = null

    expect(SomeInterface.isImplementedBy(target)).toBeFalsy()
  })
})
