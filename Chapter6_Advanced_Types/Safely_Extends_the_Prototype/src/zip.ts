interface Array<T> {
  zip<U>(list: U[]): [T, U][]
}

Array.prototype.zip = function <T, U>(list: U[]): [T, U][] {
  return this.map((v, k) => [v, list[k]])
}
