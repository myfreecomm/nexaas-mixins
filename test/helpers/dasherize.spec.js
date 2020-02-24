import dasherize from '../../src/helpers/dasherize'

describe('dasherize', () => {
  it('returns dash case "str"', () => {
    expect(dasherize('aaabbb')).toBe('aaabbb')
    expect(dasherize('aaaBbb')).toBe('aaa-bbb')
    expect(dasherize('AaaBbb')).toBe('aaa-bbb')
    expect(dasherize('aaABbb')).toBe('aa-a-bbb')
    expect(dasherize('aAABbb')).toBe('a-aa-bbb')
    expect(dasherize('AAABbb')).toBe('aaa-bbb')
    expect(dasherize('AAABBb')).toBe('aaab-bb')
    expect(dasherize('AAABBB')).toBe('aaabbb')
    expect(dasherize('AAA_BBB')).toBe('aaa-bbb')
    expect(dasherize('-_-Aa_ABB-b_-_')).toBe('aa-abb-b')
  })
})
