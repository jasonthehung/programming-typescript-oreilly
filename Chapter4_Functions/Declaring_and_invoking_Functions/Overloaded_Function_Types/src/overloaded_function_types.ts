type Reservation = {}

type Reserve = {
  (from: Date, to: Date, destination: string): void
  (from: Date, destination: string): void
}

let reserve: Reserve = (from, toOrDestination, destination?) => {}
