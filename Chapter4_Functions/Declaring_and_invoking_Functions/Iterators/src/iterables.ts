export const start = new Date('2023-05-09T00:00:00.000Z').getTime()
export const oneMinuteInMillis = 60_000

// An obj that has Symbol.iterator property
let numbers = {
  [Symbol.iterator]: function* (timestamp: number, intervalInMillis: number) {
    //   yield new Date(timestamp + intervalInMillis)

    let increment = 0

    while (increment < 10) {
      increment += 1
      const timeIncrement = increment * intervalInMillis
      yield new Date(timestamp + timeIncrement)
    }
  },
}

const newIterator = numbers[Symbol.iterator](start, oneMinuteInMillis)

// for (const date of newIterator) {
//   console.log(date)
// }

let all = [...newIterator]
console.log(all)
