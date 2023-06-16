function parseInput(input: number | string) {
  let formattedInput: string

  console.log(isString(input))

  if (isString(input)) {
    formattedInput = input.toLowerCase()
  }
}

function isString(input: unknown): input is string {
  return typeof input === 'string'
}
