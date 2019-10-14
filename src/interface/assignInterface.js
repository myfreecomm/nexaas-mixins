import prepareTarget from './prepareTarget'
import interfacePropName from './interfacePropName'

export default function assignInterface (target, Interface) {
  prepareTarget(target)
  target[interfacePropName].push(Interface)
}
