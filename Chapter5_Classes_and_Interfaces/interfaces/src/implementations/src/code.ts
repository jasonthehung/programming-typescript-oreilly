interface Student {
  name: string
  age: number
  readonly phone: number

  eat(food: string): void
  sleep(hours: number): void
}

class Jason implements Student {
  eat(food: string): void {
    throw new Error('Method not implemented.')
  }
  sleep(hours: number): void {
    throw new Error('Method not implemented.')
  }
  name = 'Jason'
  age = 18
  phone = 1234567890
}
