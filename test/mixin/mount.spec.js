import mount from '../../src/mixin/mounte'

describe('mount', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="id-1"></div>
      <div id="id-2">
        <div id="id-2-1"></div>
        <div id="id-2-2">
          <div id="id-2-2-1"></div>
        </div>
      </div>
      <div id="id-3"></div>
      <div id="id-4"></div>
    `
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('traverses a DOM and call "apply" with "element" for each applicable "Mixin" class', () => {
    const root = document.body
    const DOMTraversal = [
      [document.body],
      [document.querySelector('#id-1')],
      [document.querySelector('#id-2')],
      [document.querySelector('#id-2-1')],
      [document.querySelector('#id-2-2')],
      [document.querySelector('#id-2-2-1')],
      [document.querySelector('#id-3')],
      [document.querySelector('#id-4')]
    ]
    const mixins = [
      { isApplicable: () => false, apply: jest.fn() },
      { isApplicable: () => true,  apply: jest.fn() },
      { isApplicable: () => true,  apply: jest.fn() }
    ]

    mount(root, { mixins })

    expect(mixins[0].apply).not.toBeCalled()
    expect(mixins[1].apply.mock.calls).toEqual(DOMTraversal)
    expect(mixins[2].apply.mock.calls).toEqual(DOMTraversal)
  })

  describe('when "root" there aren`t children', () => {
    it('calls "apply" with "root"', () => {
      const root = document.querySelector('#id-3')
      const DOMTraversal = [[root]]
      const mixins = [{ isApplicable: () => true,  apply: jest.fn() }]

      mount(root, { mixins })

      expect(mixins[0].apply.mock.calls).toEqual(DOMTraversal)
    })
  })

  it('traverses inserted elements forward', () => {
    const root = document.body
    const DOMTraversal = [
      [document.body],
      [document.querySelector('#id-1')],
      [document.querySelector('#id-2')],
      [document.querySelector('#id-2-1')],
      [document.querySelector('#id-4')],
      [document.querySelector('#id-2-2')],
      [document.querySelector('#id-2-2-1')],
      [document.querySelector('#id-3')]
    ]
    const mixins = [{
      isApplicable: () => true,
      apply: jest.fn(element => {
        if (element.id === 'id-2-1') {
          element.appendChild(document.querySelector('#id-4'))
        }
      })
    }]

    mount(root, { mixins })

    expect(mixins[0].apply.mock.calls).toEqual(DOMTraversal)
  })
})
