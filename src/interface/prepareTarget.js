import interfacePropName from './interfaceAuxPropName'

export default function prepareTarget (target) {
  if (interfacePropName in target) return

  Object.defineProperty(target, interfacePropName, {
    configurable: true,
    enumerable: false,
    value: [],
    writable: true
  })
}
