export default function* children (element) {
  let nextSibling = element.nextSibling()

  while (nextSibling) {
    yield nextSibling

    nextSibling = nextSibling.nextSibling()
  }
}
