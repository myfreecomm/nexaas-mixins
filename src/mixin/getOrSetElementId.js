import { generateRandomCode } from '../helpers'

const idAttribute = '_mx-id'

export default function getOrSetElementId (element) {
  const currentId = element.getAttribute(idAttribute)

  if (currentId) return currentId

  const generatedId = generateRandomCode()

  element.setAttribute(idAttribute, generatedId)

  return generatedId
}
