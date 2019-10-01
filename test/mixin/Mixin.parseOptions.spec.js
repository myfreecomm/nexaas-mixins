import Mixin from '../../src/mixin/Mixin'

describe('Mixin.parseOptions', () => {
  afterEach(() => document.body.innerHTML = '')

  it('returns parsed JSON when "element" attribute value is a valid JSON', () => {
    document.body.innerHTML = `<input mx-mixin="${
      '{&quot;data&quot;: 20, &quot;patter&quot;: &quot;string&quot;, &quot;arr&quot;: [1, 2, 3]}'
    }">`

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toEqual(
      { data: 20, patter: 'string', arr: [1, 2, 3] }
    )
  })

  it('returns a "Number" when "element" attribute value is a valid number', () => {
    document.body.innerHTML = '<input mx-mixin="22.2">'

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBe(22.2)
  })

  it('returns "true" when "element" attribute value is "true"', () => {
    document.body.innerHTML = '<input mx-mixin="true">'

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBe(true)
  })

  it('returns "false" when "element" attribute value is "false"', () => {
    document.body.innerHTML = '<input mx-mixin="false">'

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBeFalsy()
  })

  it('returns "element" attribute value itself if isn`t a valid JSON', () => {
    document.body.innerHTML = `<input mx-mixin="${
      '{ &quot;data: 20, pattern: &quot;string&quot;, &quot;arr&quot;: [1, 2, 3] }'
    }">`

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBe('{ "data: 20, pattern: "string", "arr": [1, 2, 3] }')
  })

  it('returns "undefined" when "element" attribute value is an empty string', () => {
    document.body.innerHTML = '<input mx-mixin="">'

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBeUndefined()
  })

  it('returns "undefined" when "element" attribute there isn`t value', () => {
    document.body.innerHTML = '<input mx-mixin>'

    const element = document.querySelector('input')

    expect(Mixin.parseOptions(element)).toBeUndefined()
  })
})
