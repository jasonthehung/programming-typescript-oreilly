type User = {
  userId: number
  name: string
}

type UserLevel = 'standard' | 'premium' | 'free'

type T = {
  [K in UserLevel]: User
}

// Type '{}' is missing the following properties from type 'T': standard, premium, free
const t: T = {
  standard: {
    userId: 1,
    name: 'John',
  },
  premium: {
    userId: 2,
    name: 'Jane',
  },
  free: {
    userId: 3,
    name: 'Jack',
  },
  // ...
}

export = {}
