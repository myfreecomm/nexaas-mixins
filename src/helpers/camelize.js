export default function camelize (str) {
  const splited = str.split(/[\s|_|-]+/g)

  return splited.reduce(
    (acc, word, index) => (
      acc + (
        index
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word.charAt(0).toLowerCase() + word.slice(1)
      )
    ),
    ''
  )
}
