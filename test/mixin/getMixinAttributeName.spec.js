import getMixinAttributeName from '../../src/mixin/getMixinAttributeName'

describe('getMixinAttributeName', () => {
  it('generates mixin DOM element attribute name', () => {
    expect(getMixinAttributeName('aaaBbb')).toBe('mx-aaa-bbb')
    expect(getMixinAttributeName('AaaBbb')).toBe('mx-aaa-bbb')
    expect(getMixinAttributeName('aAABbb')).toBe('mx-a-aa-bbb')
    expect(getMixinAttributeName('AAABBB')).toBe('mx-aaabbb')
    expect(getMixinAttributeName('AAA_BBB')).toBe('mx-aaa-bbb')
    expect(getMixinAttributeName('__AAA_BBB__')).toBe('mx-aaa-bbb')
  })
})
