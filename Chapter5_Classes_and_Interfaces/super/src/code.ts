class A {
  constructor(public name: string) {}

  take() {}
}

class B extends A {
  constructor(public name: string) {
    super(name)
  }

  take2() {
    super.take()
  }
}

export = {}
