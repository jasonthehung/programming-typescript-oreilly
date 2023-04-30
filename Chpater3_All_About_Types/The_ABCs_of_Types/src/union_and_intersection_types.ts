/* type Cat = {
  name: string
  purrs: boolean
}

type Dog = {
  name: string
  barks: boolean
  wags: boolean
}

// Union
type CatOrDogOrBoth = Cat | Dog
// Intersection
type CatAndDog = Cat & Dog

// dog
let dog: CatOrDogOrBoth = {
  name: 'Jason',
  barks: true,
  wags: true,
}

// cat
let cat: CatOrDogOrBoth = {
  name: 'John',
  purrs: true,
}

cat = {
  name: "I'm not a cat anymore",
  barks: true,
  wags: true,
}

cat = {
  name: 'What is this cat?',
  purrs: false,
  barks: true,
  wags: true,
}

let catAndDog: CatAndDog = {
  name: 'What?',
  purrs: false,
  barks: true,
  wags: true,
}
 */

type Returns = string | null

function trueOrNull(isTrue: boolean): Returns {
  if (isTrue) {
    return 'true'
  }
  return null
}
