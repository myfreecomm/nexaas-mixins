import Interface from '../../../src/interface/Interface'

describe('Interface.constructor', () => {
  it('assigns "_props" property with "props"', () => {
    const props = { prop: () => {} }
    const SomeInterface = new Interface(props)

    expect(SomeInterface._props).toBe(props)
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
