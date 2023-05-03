function sum(list: number[]) {
  return list.reduce((preValue, curValue, curIndex) => preValue + curValue)
}

// using arguments keyword, but it's only array-like
function sumVariadic(): number {
  return Array.from(arguments).reduce(
    (preValue, curValue, curIndex) => preValue + curValue
  )
}

// sumVariadic(1, 2, 3) // Error !!

function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce(
    (preValue, curValue, curIndex) => preValue + curValue,
    0
  )
}

sumVariadicSafe(1, 2, 3) // Safe ✅
