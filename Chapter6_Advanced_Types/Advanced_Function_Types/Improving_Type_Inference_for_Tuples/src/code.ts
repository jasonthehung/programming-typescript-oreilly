function tuple<T extends unknown[]>(...ts: T): T {
  return ts
}

let a = tuple(1, 'hello', true)

console.log(typeof a)

export = {}
