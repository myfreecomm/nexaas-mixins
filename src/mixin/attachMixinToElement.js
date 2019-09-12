export default function attachMixinToElement (element, customOptions, Mixin, key, store) {
  const options = customOptions || Mixin.parseOptions(element)
  const instance = new Mixin(element, options)

  store.set(element, key, instance)
  instance.execute()
}
