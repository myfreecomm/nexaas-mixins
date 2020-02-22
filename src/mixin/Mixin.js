import { camelize } from '../helpers'
import Event from '../event'

import getMixinAttributeName from './getMixinAttributeName'
import attachMixinToElement from './attachMixinToElement'
import store from './store'
import getOrSetElementId from './getOrSetElementId'

export default class Mixin {
  constructor (element) {
    this._element = element
  }

  execute () {
    throw new Error('Not implemented')
  }

  undo () {
    throw new Error('Not implemented')
  }

  get element () {
    return this._element
  }

  static get name () {
    return 'Mixin'
  }

  static getUnparsedOptions (element) {
    const attributeName = getMixinAttributeName(this.name)

    return element.getAttribute(attributeName)
  }

  static parseOptions (str) {
    if (['', undefined, null].includes(str)) return undefined

    try {
      return JSON.parse(str)
    } catch (_) {
      return str
    }
  }

  static apply (element, options) {
    const instance = this.get(element)

    if (instance) return this

    attachMixinToElement(element, options, this, this.name, store)

    return this
  }

  static reload (element, options) {
    const instance = this.get(element)

    if (!instance) return this

    instance.undo()
    attachMixinToElement(element, options, this, this.name, store)

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

  static mount (root, { mixins }) {
    const children = root.children
    const id = getOrSetElementId(root)

    this.trigger(`mx.mount.start.block.${id}`, root)
    this.trigger(`mx.mount.start.element.${id}`, root)

    for (const { name, value } of root.attributes) {
      if (!(/^mx-/).test(name)) continue

      const mixinName = camelize(name.substring(3), true)
      const Mixin = mixins.find(M => M.name === mixinName)

      if (Mixin) Mixin.apply(root, Mixin.parseOptions(value))
    }

    this.trigger(`mx.mount.end.element.${id}`, root)

    if (children.length) {
      const { forEach } = Array.prototype

      forEach.call(children, child => this.mount(child, { mixins }))
    }

    this.trigger(`mx.mount.end.block.${id}`, root)
  }
}

Event.apply(Mixin)
