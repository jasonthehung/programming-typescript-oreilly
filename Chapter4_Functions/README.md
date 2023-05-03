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

2.  Signature overloading.
3.  Polymorphic functions.
4.  Polymorphic type aliases.
