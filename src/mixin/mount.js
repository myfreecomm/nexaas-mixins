export default async function mount (root, { mixins }) {
  const DOMTraversal = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT)
  let element = DOMTraversal.nextNode()

  while (element) {
    for (const Mixin of mixins) {
      if (Mixin.isApplicable(element)) Mixin.apply(element)
    }

    element = DOMTraversal.nextNode()
  }
}
