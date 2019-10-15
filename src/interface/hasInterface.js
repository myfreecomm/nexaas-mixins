import interfacePropName from './interfacePropName'

export default function hasInterface (target, Interface) {
  if (interfacePropName in target) {
    return target[interfacePropName].includes(Interface)
  }

  return false
}
