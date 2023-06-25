import {read, readFile} from 'fs'
// function appendAndReadPromise(path: string, data: string): Promise<string> {
//   return appendPromise(path, data)
//     .then(() => readPromise(path))
//     .catch((error) => console.log(error))
// }

let path = 'foo.txt'

type Executor<T, E extends Error> = {
  (resolve: (result: T) => void, reject: (error: E) => void): void
}

class Promise<T, E extends Error> {
  constructor(f: Executor<T, E>) {}
}

readFile(path, (error, result) => {})

function readFilePromise(path): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

export = {}
