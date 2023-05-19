type Log = (message: string, userId?: string) => void

let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().getTime()
  console.log(time, message, userId)
}
