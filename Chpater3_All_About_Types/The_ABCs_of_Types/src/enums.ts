/* enum Language {
  English,
  Chinese,
  Spanish,
}

let myFirstLanguage = Language.Chinese
let mySecondLanguage = Language['English']

enum Color {
  Red = '#c10000',
  Blue = '#007ac1',
  Pink = 0xc10050, // A hexadecimal literal
  White = 255, // A decimal literal
}

let red = Color.Red // Color
let pink = Color.Pink // Color” */

enum NotSafe {
  Jason = 0,
  Kevin = 1,
  John = 3,
}

// ts enum可以透過key or value去查找
let john = NotSafe[3]
// 但此時用不存在的value去查找, ts不會擋
let who = NotSafe[100] // undefined

// A const enum doesn’t let you do reverse lookups
// 所以就跟一般的js object很像
const enum Safer {
  Jason,
  Kevin,
  John,
}

// const enum實際例子
const enum Flippable {
  Burger,
  Chair,
  Cup,
}

function flip(f: Flippable) {
  return 'flipped it'
}

flip(Flippable.Burger)
flip(Flippable.Cup)
flip(2) // const enum在編譯的時候會把Flippable.Cup變成 2, 所以這裡會怪怪的
