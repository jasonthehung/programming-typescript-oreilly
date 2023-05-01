let as: readonly number[] = [1, 2, 3]

let bs: readonly number[] = as.concat(4)

type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

type D = readonly [number, ...string[]]
type E = Readonly<[number, string]>

let cs: A = ['A', 'B', 'C']
let ds: B = ['B', 'C']
let es: C = ['E', 'H']

let fs: D = [1, 'A', 'B', 'C']
let gs: E = [2, 'B']
