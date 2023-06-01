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

// ----------------------------------------------------------------

type Filter_v2<T> = {
  (array: T[], fn: (item: T) => boolean): T[]
}

let filter_v2: Filter_v2<number> = (array, fn) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i])
    }
  }
  return result
}
