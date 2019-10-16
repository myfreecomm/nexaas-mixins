export default function copyOwnProperties (target, ...sources) {
  for (const source of sources) {
    for (const prop in source) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop)

      if (descriptor) Object.defineProperty(target, prop, descriptor)
    }
  }
}
