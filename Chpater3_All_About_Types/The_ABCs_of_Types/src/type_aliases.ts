type Age = number

type Person = {
  name: string
  age: Age
}

let age: Age = 55

let just_age = 33

let driver: Person = {
  name: 'John',
  age: age,
}

let driver2: Person = {
  name: 'John Wang',
  age: just_age,
}
