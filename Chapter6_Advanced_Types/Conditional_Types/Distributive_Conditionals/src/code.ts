type Without<T, U> = T extends U ? never : T

type A = Without<number | boolean, number>

export = {}
