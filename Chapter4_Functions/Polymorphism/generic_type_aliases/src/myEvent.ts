type MyEvent<T> = {
  target: T
  type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>
