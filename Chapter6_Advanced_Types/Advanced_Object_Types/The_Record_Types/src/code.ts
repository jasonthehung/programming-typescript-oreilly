type User = {
  userId: number
  name: string
}

type UserLevel = 'standard' | 'premium' | 'free'

// Totality !!
const user: Record<UserLevel, User> = {
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
}

export = {}
