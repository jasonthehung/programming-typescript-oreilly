/* let a = [1, 'J', 10n, true] // (string | number | bigint | boolean)[]

const b = [1, 'J', 10n, true] // (string | number | bigint | boolean)[]
 */

/* let g: any = []

g.push(1)
g.push('J')
g.push(10n)
g.push(true)

 */

/* let h: number[] = []

h.push(1)
h.push('J') // Argument of type 'string' is not assignable to parameter of type 'number'
 */

/* let d = [1, 'a']

let res = d.map((_) => {
  if (typeof _ === 'number') {
    return _ * 3
  }
  return _.toUpperCase()
})

console.log(res) */
