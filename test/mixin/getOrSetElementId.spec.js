jest.mock('../../src/helpers/generateRandomCode')

import getOrSetElementId from '../../src/mixin/getOrSetElementId'
import generateRandomCode from '../../src/helpers/generateRandomCode'

describe('getOrSetElementId', () => {
  const idAttribute = '_mx-id'
  const id = 'some-id'

  beforeEach(() => {
    document.body.innerHTML = '<input type="text">'
    generateRandomCode.mockClear()
  })

  afterAll(() => {
    document.body.innerHTML = ''
  })

  it('returns "_mx-id" attribute of "element"', () => {
    const element = document.querySelector('input')

    element.setAttribute(idAttribute, id)

    expect(getOrSetElementId(element)).toBe(id)
  })

  describe('when there isn`t "_mx-id" attribute for "element"', () => {
    it('returns randomly generated id associated with "_mx-id" attribute of "element"', () => {
      const element = document.querySelector('input')

      generateRandomCode.mockReturnValue(id)

      expect(getOrSetElementId(element)).toBe(id)
      expect(generateRandomCode).toBeCalled()
      expect(element.getAttribute(idAttribute)).toBe(id)
    })
  })
})
