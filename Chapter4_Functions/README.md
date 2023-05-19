### Functions

1. The different ways to declare and invoke functions.

- functions are first-class objects.
- ways to declare functions:

  1.  Named function syntax (typesafe ✅)
  2.  Function Expression (typesafe ✅)
  3.  Arrow function expression (typesafe ✅)
  4.  Shorthand arrow function expression (typesafe ✅)
  5.  Function constructor (Not safe!! ❌)

- Optional and default parameters
- Rest parameters

  - Using `arguments` in TS and JS for replace fixed-array parameters in functions is not safe, because TS will inferred some variable into type `any`.
  - So we can use `Rest parameters` to solve the problem.

  1. A function can have at most one rest parameter.
  2. That parameter has to be the last one in the function’s parameter list.

- Call, apply, and bind

  - Methods to let you control function call in different ways

- Typing This

  - For this reason, a lot of teams ban this everywhere except in class methods—to do this for your codebase too, enable the no-invalid-this TSLint rule.

- Generator Functions

  - function* <- `*`代表是 generator,`yield`會回傳值,然後停在該處,等待下一個 `next()`呼叫

- Iterators

  1. Iterator:  
     Any object that defines a method called next, which returns an object with the properties value and done.
  2. Iterables:  
     An object is deemed iterable if it has an implementation for the Symbol.iterator property. Some built-in types like Array, Map, Set, String, Int32Array, Uint32Array, etc. have their Symbol.iterator property already implemented.

- Call Signature

  - 用來表達`function type`的 syntax 稱之為`call signature` (also call `type signature`)

- Contextual typing

  - 反正就是說 TS 可以靠上下文推斷出型態 (用 callback fn 舉例子)

- Overloaded Function Types

  - 前面提到的 call signature 其實是 shorthand call signature, 還有 full call signature  
     `type Log = {   
  (message: string, userId?: string): void   
}`

  - overloaded function 其實就是一個 function 有多個 call signature.
  - 然而因為有多個 call signature, 所以必須要像 TSC 證明該 function 需要怎麼被使用(就是需要先判斷參數)

2.  Polymorphism
3.  Polymorphic type aliases
