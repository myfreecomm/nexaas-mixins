import assignInterface from '../../src/interface/assignInterface'

describe('assignInterface', () => {
  it('creates "__implements__" property on "target" with "Interface"', () => {
    const Interface = {}
    const target = {}

    assignInterface(target, Interface)

    expect(target.__implements__).toEqual([Interface])
  })

  describe('when "__implements__" property already exists', () => {
    it('adds "Interface"', () => {
      const ExistingInterface = {}
      const Interface = {}
      const target = { __implements__: [ExistingInterface] }

      assignInterface(target, Interface)

      expect(target.__implements__).toEqual([ExistingInterface, Interface])
    })
  })
})
