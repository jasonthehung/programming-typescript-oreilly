type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}

type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

let nullableAccount: NullableAccount = {
  id: null,
  isEmployee: null,
  notes: null,
}

type ReadOnlyAccount = {
  readonly [K in keyof Account]: Account[K]
}

let pickId: Pick<Account, 'id'> = {
  id: 1,
}
