import parseDataString from '../../src/helpers/parseDataString'

describe('parseDataString', () => {
  it('shuld return JSON parse when "str" is a valid JSON', () => {
    const str = '{ "data": 20, "pattern": "string", "arr": [1, 2, 3] }'

    expect(parseDataString(str)).toEqual({ data: 20, pattern: 'string', arr: [1, 2, 3] })
  })

  it('shuld return a "Number" when "str" is a valid number', () => {
    const num = '22.2'

    expect(parseDataString(num)).toBe(22.2)
  })

  it('shuld return a "Boolean" when "str" is a valid boolean', () => {
    const strTrue  = 'true'
    const strFalse = 'false'

    expect(parseDataString(strTrue)).toBe(true)
    expect(parseDataString(strFalse)).toBe(false)
  })

  it('shuld return itself "str" when params is not a valid JSON', () => {
    const str  = 'foo'
    const json = '{ "data: 20, pattern: "string", "arr": [1, 2, 3] }'

    expect(parseDataString(str)).toEqual(str)
    expect(parseDataString(json)).toEqual(json)
  })

  it('shuld return "undefined" when params is an empty string, "undefined" or "null"', () =>{
    expect(parseDataString('')).toBeUndefined()
    expect(parseDataString()).toBeUndefined()
    expect(parseDataString(null)).toBeUndefined()
  })
})
