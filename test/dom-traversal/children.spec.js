import children from '../../src/dom-traversal/children'

describe('children', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('traverses all children of an "element"', () => {
    document.body.innerHTML = `
      <div>
        <span id="1"></span>
        <span id="2"></span>
        <span id="3"></span>
      </div>
    `

    const element = document.querySelector('div')

    expect([...children(element)]).toEqual([...element.children])
  })

  describe('when "element" has no children', () => {
    it('does nothing', () => {
      document.body.innerHTML = '<div></div>'

      const element = document.querySelector('div')

      expect([...children(element)]).toEqual([])
    })
  })

  it('traverses inserted children forward', () => {
    document.body.innerHTML = `
      <div>
        <span></span>
      </div>
    `

    const element = document.querySelector('div')
    const iterator = children(element)

    expect(iterator.next()).toEqual({
      value: document.querySelector('span'), done: false
    })

    element.appendChild(document.createElement('p'))

    console.log(element.children)

    expect(iterator.next()).toEqual({
      value: document.querySelector('p'), done: false
    })
    expect(iterator.next()).toEqual({ done: true })
  })
})
