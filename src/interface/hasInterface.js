import interfacePropName from './interfacePropName'

export default function hasInterface (target, interface) {
  if (interfacePropName in target) {
    return target[interfacePropName].includes(interface)
  }

  return false
}
