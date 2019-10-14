import prepareTarget from './prepareTarget'
import interfacePropName from './interfacePropName'

export default function assignInterface (target, interface) {
  prepareTarget(target)
  target[interfacePropName].push(interface)
}
