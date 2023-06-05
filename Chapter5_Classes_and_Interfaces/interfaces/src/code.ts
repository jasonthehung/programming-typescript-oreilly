type Food = {
  calories: number
  tasty: boolean
}

type Sushi = Food & {
  salty: boolean
}

type Cake = Food & {
  sweet: boolean
}

// ----------------------------------------------

interface Food2 {
  calories: number
  tasty: boolean
}

interface Sushi2 extends Food2 {
  salty: boolean
}

interface Cake2 extends Food2 {
  sweet: boolean
}

// ----------------------------------------------

type Foo = {
  bad(a: string): string
}

type Bar = Foo & {
  bad(a: number): string
}

// ----------------------------------------------

// interface User<Age extends number> {
//   age: Age
// }

// interface User<Age extends number, U> {
//   phone: U
// }

export = {}
