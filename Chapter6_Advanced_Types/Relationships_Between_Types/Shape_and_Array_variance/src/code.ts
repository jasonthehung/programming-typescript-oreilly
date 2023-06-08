type ExistingUser = {
  id: number
  name: string
}

type User = {
  name: string
}

function deleteUser(user: {id?: number; name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User',
}

deleteUser(existingUser) // OK

console.log(existingUser)

let newUser: User = {
  name: 'Ima NewUser',
}

deleteUser(newUser) // OK !!!! 因為這裡的 newUser 會被當成 {id?: number; name: string} 來看待
