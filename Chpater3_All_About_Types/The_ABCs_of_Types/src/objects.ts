/*
let a: object = {
  b: 'x',
}

a.b // Property 'b' does not exist on type 'object'.
*/

/* 
let c = {
  b: 'x',
}

console.log(typeof c) // object
console.log(c.b) // x 
*/

/* let c = {
  firstName: 'Jason',
  lastName: 'Wang',
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

// object c and Person class have the same shape
c = new Person('Same', 'Shape')

console.log(c)
 */

/* let a: {
  b?: boolean
  [key: number]: string // index signature
  readonly firstName: string
}

a = {b: true, 1: 'true', 0: 'false', firstName: 'Jason'}
 */

let danger: Object

danger = 2

console.log(danger)
