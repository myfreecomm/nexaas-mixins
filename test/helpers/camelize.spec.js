import camelize from '../../src/helpers/camelize'

describe('camelize', () => {
  const str = 'Lorem ipsum-dolor_sit--amet'

  it('returns camel case "str"', () => {
    expect(camelize(str)).toBe('loremIpsumDolorSitAmet')
  })

  describe('when "startsWithUpperCase" is "true"', () => {
    it('returns camel case "str" with first capital letter', () => {
      const startsWithUpperCase = true

      expect(camelize(str, startsWithUpperCase)).toBe('LoremIpsumDolorSitAmet')
    })
  })
})
