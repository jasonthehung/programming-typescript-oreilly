type User = {
  userId: number
  name: string
}

type UserLevel = 'standard' | 'premium' | 'free'

type T = {
  [K in UserLevel]: User
}

// @ts-ignore
// Type '{}' is missing the following properties from type 'T': standard, premium, free
const t: T = {
  standard: {
    userId: 1,
    name: 'John',
  },
  // ...
}

export = {}
