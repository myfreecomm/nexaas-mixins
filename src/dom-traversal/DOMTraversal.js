import children from './children'

export default async function DOMTraversal (callback, context = document.body) {
  callback(context)

  for (const child of children(context)) {
    await DOMTraversal(callback, child)
  }
}
