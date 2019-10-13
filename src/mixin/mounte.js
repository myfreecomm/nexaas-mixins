export default async function mount (root, { mixins }) {
  const DOMTraversal = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT)
  let element

  while (element = DOMTraversal.nextNode()) {
    for (const Mixin of mixins) {
      if (Mixin.isApplicable(element)) Mixin.apply(element)
    }
  }
}
