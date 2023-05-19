const start = new Date('2023-05-09T00:00:00.000Z').getTime()
const oneMinuteInMillis = 60_000

function* generateDate(timestamp: number, intervalInMillis: number) {
  //   yield new Date(timestamp + intervalInMillis)

  let increment = 0

  while (true) {
    increment += 1
    const timeIncrement = increment * intervalInMillis
    yield new Date(timestamp + timeIncrement)
  }
}

const iterator = generateDate(start, oneMinuteInMillis)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
