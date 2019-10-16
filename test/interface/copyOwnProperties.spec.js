import copyOwnProperties from '../../src/interface/copyOwnProperties'

describe('copyOwnProperties', () => {
  it('copies the property descriptors from "source" to "target"', () => {
    const target = {}
    const source = {
      _prop: 12,
      get prop () { return this._prop },
      set prop (value) { this._prop = value }
    }

    copyOwnProperties(target, source)

    for (const prop in target) {
      const targetPropDescriptor = Object.getOwnPropertyDescriptor(target, prop)
      const sourcePropDescriptor = Object.getOwnPropertyDescriptor(target, prop)

      expect(targetPropDescriptor).toEqual(sourcePropDescriptor)
    }
  })

  describe('when there is more than one "source"', () => {
    it('copies the property descriptors from of each "source" to "target"', () => {
      const target = {
        prop1: 'value',
        prop2: 'value'
      }
      const source1 = {
        prop2: 'value',
        prop3: 'value',
        get prop4 () {},
        set prop4 (_) {}
      }
      const source2 = {
        get prop3 () {},
        set prop4 (_) {},
        prop5: 'value'
      }

      const descriptors = {
        prop1: Object.getOwnPropertyDescriptor(target,  'prop1'),
        prop2: Object.getOwnPropertyDescriptor(source1, 'prop2'),
        prop3: Object.getOwnPropertyDescriptor(source2, 'prop3'),
        prop4: Object.getOwnPropertyDescriptor(source2, 'prop4'),
        prop5: Object.getOwnPropertyDescriptor(source2, 'prop5')
      }

      copyOwnProperties(target, source1, source2)

      for (const property in descriptors) {
        expect(
          Object.getOwnPropertyDescriptor(target, property)
        ).toEqual(
          descriptors[property]
        )
      }
    })
  })
})
