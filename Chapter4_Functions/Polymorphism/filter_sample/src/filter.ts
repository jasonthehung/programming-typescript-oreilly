/* 
function filter(array: any[], fn: Function) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (fn(item)) {
      result.push(item)
    }
  }

  return result
}

console.log(filter([1, 2, 3, 4], (_) => _ < 3))
*/

// ! object doesn't tell you anything about the shape of the object

type Filter = {
  <T>(array: T[], fn: (item: T) => boolean): T[]
}

let filter: Filter = (array, fn) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

// (a) T is bound to number
filter([1, 2, 3], (_) => _ < 3)

// (b) T is bound to string
filter(['a', 'b', 'c'], (_) => _ !== 'b')

// (c) T is bound to {firstName: string}
filter([{firstName: 'Jason'}, {firstName: 'John'}, {firstName: 'Wen'}], (_) =>
  _.firstName.startsWith('J')
)
