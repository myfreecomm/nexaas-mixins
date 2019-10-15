import hasInterface from '../../src/interface/hasInterface'

describe('hasInterface', () => {
  it('returns "true" if "target"s "__implements__" property has "Interface"', () => {
    const Interface = {}
    const target = { __implements__: [Interface] }

    expect(hasInterface(target, Interface)).toBeTruthy()
  })

  it('returns "false" if "target"s "__implements__" property doesn`t has "Interface"', () => {
    const Interface = {}
    const target = { __implements__: [] }

    expect(hasInterface(target, Interface)).toBeFalsy()
  })

  it('returns "false" if "target" there isan`t "__implements__" property', () => {
    const Interface = {}
    const target = {}

    expect(hasInterface(target, Interface)).toBeFalsy()
  })
})
