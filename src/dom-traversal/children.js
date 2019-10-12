export default function children (element) {
  let current = element

  return {
    next: () => {
      current = current !== element
        ? current.nextElementSibling
        : element.firstElementChild

      return current
        ? { value: current, done: false }
        : { done: true }
    },
    [Symbol.iterator]: function () { return this }
  }
}
