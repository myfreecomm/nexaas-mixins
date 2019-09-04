import camelize from '../../src/helpers/camelize'

describe('camelize', () => {
  it('shuld return camel case "str"', () => {
    const str = 'Lorem ipsum-dolor_sit--amet'

    expect(camelize(str)).toBe('loremIpsumDolorSitAmet')
  })
})
