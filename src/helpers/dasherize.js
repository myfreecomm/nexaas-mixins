const separatorRgx = /[A-Z]+|[\-|\_]+|[[a-z]|\d]+/g
const isDash = str => ['-', '_'].includes(str.charAt(0))
const isUpperCase = str => str === str.toUpperCase()
const clearStartAndEndDashes = (str, i, arr) => !isDash(str) || (i !== 0 && i !== arr.length - 1)

export default function dasherize (str) {
  return str
    .match(separatorRgx)
    .filter(clearStartAndEndDashes)
    .map((str, i, arr) => {
      if (isDash(str)) return '-'

      if (isUpperCase(str) && arr.length !== 1) {
        const lastIndex = str.length - 1

        const str1 = i !== 0 && !isDash(arr[i - 1]) ? '-' : ''
        const str2 = str.substring(0, lastIndex)
        const str3 = str.length === 1 || i === lastIndex || isDash(arr[i + 1]) ? '' : '-'
        const str4 = str.charAt(lastIndex)

        return (str1 + str2 + str3 + str4).toLowerCase()
      }

      return str.toLowerCase()
    })
    .join('')
}
