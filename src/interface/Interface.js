import copyOwnProperties from './copyOwnProperties'
import assignInterface from './assignInterface'
import hasInterface from './hasInterface'

export default class Interface {
  constructor (props, ...dependencies) {
    this._props = copyOwnProperties(
      {},
      props,
      ...dependencies.map(dependency => dependency.props)
    )

    this._dependencies = dependencies
  }

  apply (target, overwrites = {}) {
    if (this.isImplementedBy(target)) return target

    copyOwnProperties(target, this._props, overwrites)
    assignInterface(target, this)

    return target
  }

  isImplementedBy (target) {
    if (target === null) return false
    if (hasInterface(target, this)) return true

    const parent = Object.getPrototypeOf(target)

    return this.isImplementedBy(parent)
  }

  get props () {
    return copyOwnProperties({}, this._props)
  }

  get dependencies () {
    return [...this._dependencies]
  }
}
