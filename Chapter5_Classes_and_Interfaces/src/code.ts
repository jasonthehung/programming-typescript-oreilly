class Set {
  has(value: number): boolean {
    return true
  }

  add(value: number): this {
    return this
  }
}

class MutableSet extends Set {
  delete(value: number): boolean {
    return true
  }
}

let set = new Set()

set.add(2).add(3).add(4).add(5).add(6)

export = {}
