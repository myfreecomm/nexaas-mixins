import { parseDataString, camelize } from '../helpers'

import getMixinAttributeName from './getMixinAttributeName'
import attachMixinToElement from './attachMixinToElement'
import store from './store'

export default class Mixin {
  constructor (element) {
    this._element = element
  }

  get element () {
    return this._element
  }

  execute () {
    throw new Error('Not implemented')
  }

  undo () {
    throw new Error('Not implemented')
  }

  static get name () {
    return 'Mixin'
  }

  static isApplicable (element) {
    const attr = getMixinAttributeName(this.name)

    return element.getAttribute(attr) !== null
  }

  static parseOptions (element) {
    const attr = getMixinAttributeName(this.name)
    const stringOptions = element.getAttribute(attr)

    return parseDataString(stringOptions)
  }

  static apply (element, customOptions) {
    const instance = this.get(element)

    if (instance) return this
    attachMixinToElement(element, customOptions, this, this.name, store)

    return this
  }

  static reload (element, customOptions) {
    const instance = this.get(element)

    if (!instance) return this

    instance.undo()
    attachMixinToElement(element, customOptions, this, this.name, store)

    return this
  }

  static remove (element) {
    const instance = this.get(element)

    if (!instance) return false
    instance.undo()

    return store.delete(element, this.name)
  }

  static get (element) {
    return store.get(element, this.name)
  }
}
