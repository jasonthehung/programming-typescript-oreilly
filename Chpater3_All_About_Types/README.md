### The ABCs of Types

- Type literal:
  A type that represents a single value and nothing else (e.g., let a: true = true)

- **_Any_**

  Type is a set of values and the things you can do with them.
  Any is the set of all values, and you can do anything with **_any_**!

- **_Unknown_**

  TypeScript won’t let you use an unknown type until you refine it by checking what it is

  1. TypeScript will never infer something as unknown—you have to explicitly annotate it
  2. You can compare values to values that are of type unknown
  3. you can’t do things that assume an unknown value is of a specific type

- **_Boolean_**
- **_Number_**

  integers, floats, positives, negatives, Infinity, NaN, and so on  
  note: (let oneMillion = 1_000_000 // Equivalent)

- **_Bigint_**

  number : 2^53  
  bigint : very big

- **_String_**

  **_string_** is the set of all strings and the things you can do with them like concatenate (+), slice (.slice), and so on.

- **_Symbol_**

  Symbols don’t come up often in practice; they are used as an alternative to string keys in objects and maps

  - Unique symbol:  
    const a = Symbol('a')  
    const b: unique symbol = Symbol('b')

- **_Objects_**

  By default, TypeScript is pretty strict about object properties

  | Value           | {}  | object | Object |
  | --------------- | --- | ------ | ------ |
  | {}              | Yes | Yes    | Yes    |
  | ['a']           | Yes | Yes    | Yes    |
  | function() {}   | Yes | Yes    | Yes    |
  | new String('a') | Yes | Yes    | Yes    |
  | 'a'             | Yes | No     | Yes    |
  | 1               | Yes | No     | Yes    |
  | Symbol('a')     | Yes | No     | Yes    |
  | null            | No  | No     | No     |
  | undefined       | No  | No     | No     |

- **_Arrays_**

  Like in JavaScript, TypeScript arrays are special kinds of objects that support things like concatenation, pushing, searching, and slicing.  
  Like with objects, creating arrays with const won’t hint to TypeScript to infer their types more narrowly.

- **_Tuples_**

  Tuples are subtypes of array. They’re a special way to type arrays that have fixed lengths, where the values at each index have specific, known types.

- **_Null, Undefined, Void, Never_**

  JavaScript has two values to represent an absence of something: null and undefined.  
  undefined: means that something hasn’t been defined yet.  
  null: means an absence of a value.

- **_Enums_**

  Enums are a way to enumerate the possible values for a type. They are unordered data structures that map keys to values.  
  We can use const enum to prevent reverse lookup, but sometimes can lead to safety issues when you import a const enum from someone else's TS code.

- **_Summary_**

  | Type    | Subtype         |
  | ------- | --------------- |
  | boolean | Boolean literal |
  | bigint  | BigInt literal  |
  | number  | Number literal  |
  | string  | String literal  |
  | symbol  | unique symbol   |
  | object  | Object literal  |
  | Array   | Tuple           |
  | enum    | const enum      |
