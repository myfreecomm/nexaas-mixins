export default class ElementDataStore {
  constructor () {
    this._store = new Map()
  }

  get (element, key) {
    const record = this._store.get(element)

    return record ? record[key] : undefined
  }

  set (element, key, data) {
    const record = this._store.get(element) || {}

    record[key] = data
    this._store.set(element, record)

    return data
  }

  delete (element, key) {
    if (key) {
      const record = this._store.get(element) || {}

      return (key in record) ? (delete record[key]) : false
    }

    return this._store.delete(element)
  }
}
