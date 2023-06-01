type MyMap = {
  <T, U>(array: T[], fn: (item: T) => U): U[]
}

let map: MyMap = (array, fn) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i])
  }
  return result
}
