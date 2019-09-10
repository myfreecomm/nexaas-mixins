import { dasherize } from '../helpers'

export default function getMixinAttributeName (name) {
  return `mx-${dasherize(name)}`
}
