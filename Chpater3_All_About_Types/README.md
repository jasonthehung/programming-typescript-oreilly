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

- **Bigint**

  number : 2^53  
  bigint : very big
