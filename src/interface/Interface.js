import copyOwnProperties from './copyOwnProperties'
import assignInterface from './assignInterface'
import hasInterface from './hasInterface'

export default class Interface {
  constructor (props, ...dependencies) {
    this._props = props
    this._dependencies = dependencies
  }

  apply (target, overwrites = {}) {
    if (this.isImplementedBy(target)) return target

    copyOwnProperties(target, this._props, overwrites)
    assignInterface(target, this)

    for (const dependency of this._dependencies) {
      dependency.apply(target)
    }

    return target
  }

  isImplementedBy (target) {
    if (target === null) return false
    if (hasInterface(target, this)) return true

    const parent = Object.getPrototypeOf(target)

    return this.isImplementedBy(parent)
  }

  get props () {
    return Object.assign({}, this._props, ...this._dependencies)
  }

  get dependencies () {
    return [...this._dependencies]
  }
}
