import Mixin from '../../../src/mixin/Mixin'

describe('Mixin.parseOptions', () => {
  it('returns JSON parse when "str" is a valid JSON', () => {
    const str = '{ "data": 20, "pattern": "string", "arr": [1, 2, 3] }'

    expect(Mixin.parseOptions(str)).toEqual({ data: 20, pattern: 'string', arr: [1, 2, 3] })
  })

  it('returns a "Number" when "str" is a valid number', () => {
    const num = '22.2'

    expect(Mixin.parseOptions(num)).toBe(22.2)
  })

  it('returns a "Boolean" when "str" is a valid boolean', () => {
    const strTrue  = 'true'
    const strFalse = 'false'

    expect(Mixin.parseOptions(strTrue)).toBe(true)
    expect(Mixin.parseOptions(strFalse)).toBe(false)
  })

  it('returns itself "str" when params is not a valid JSON', () => {
    const str  = 'foo'
    const json = '{ "data: 20, pattern: "string", "arr": [1, 2, 3] }'

    expect(Mixin.parseOptions(str)).toEqual(str)
    expect(Mixin.parseOptions(json)).toEqual(json)
  })

  it('returns "undefined" when params is an empty string, "undefined" or "null"', () =>{
    expect(Mixin.parseOptions('')).toBeUndefined()
    expect(Mixin.parseOptions()).toBeUndefined()
    expect(Mixin.parseOptions(null)).toBeUndefined()
  })
})
