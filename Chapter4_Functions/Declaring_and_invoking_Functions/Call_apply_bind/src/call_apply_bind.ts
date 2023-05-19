function add(a: number, b: number): number {
  return a + b
}

// call(thisArg: any, ...argArray: any[]): any
add.call(null, 1, 2)

// Function.apply(this: Function, thisArg: any, argArray?: any): any
add.apply(null, [1, 2])

// Function.bind(this: Function, thisArg: any, ...argArray: any[]): any
add.bind(null, 1, 2)()
