type APIResponse = {
  user: {
    userId: string
    friendList: {
      name: string
    }[]
  }
}

type Get = {
  <O extends object, K extends keyof O>(o: O, k: K): O[K]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
    k2: K2
  ): O[K1][K2]
}

let get: Get = (object: any, ...keys: string[]) => {
  let result = object
  keys.forEach((k) => {
    console.log(k, ' ', result[k]), (result = result[k])
  })
  return result
}

// give me a fake response
let response: APIResponse = {
  user: {
    userId: '1',
    friendList: [
      {
        name: 'Sara',
      },
      {
        name: 'Tomy',
      },
    ],
  },
}

console.log(get(response, 'user'))
