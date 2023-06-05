class Zebra {
  trot() {}
}

class Poodle {
  trot() {}
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra()
let poodle = new Poodle()

ambleAround(zebra)
ambleAround(poodle)

// ----------------------------------------------

class A {
  private x: number = 1
}

function needA(input: A) {}

let a = new A()

needA(a)

// @ts-ignore
needA({x: 1})

export = {}
