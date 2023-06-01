function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value)
}

function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

call(fill, 10, 'a')
