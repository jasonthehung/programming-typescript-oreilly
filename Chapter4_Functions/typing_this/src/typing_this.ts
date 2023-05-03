function fancyDate(this: Date) {
  console.log(`${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`)
}

fancyDate.call(new Date())
