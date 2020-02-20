import generateRandomCode from '../../src/helpers/generateRandomCode'

describe('generateRandomCode', () => {
  it('generates a code with 9 caracters by default', () => {
    expect(generateRandomCode().length).toBe(9)
  })

  it('generates a code with "length" caracters', () => {
    const length = 10

    expect(generateRandomCode(length).length).toBe(length)
  })

  it('generates different codes from each other', () => {
    const codes = [...(new Array(100))].map(() => generateRandomCode())
    const uniqeCodes = codes.filter((code, index, codes) => codes.indexOf(code) === index)

    expect(uniqeCodes.length).toBe(codes.length)
  })
})
