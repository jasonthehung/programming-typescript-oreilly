function* createFibonacciGenerator() {
  let a = 0
  let b = 1

  while (true) {
    yield a // pause here until call next()
    ;[a, b] = [b, a + b]
  }
}

let fibo = createFibonacciGenerator()

let first = fibo.next()

console.log(`first: ${first.value}`) // 0
