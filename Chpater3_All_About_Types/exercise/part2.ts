// a. i's type is the type literal 3. The type of 4 is the type literal 4, which is not assignable to the type literal 3.

/* b.
Since j was initialized with a set of numbers, TypeScript inferred j's type as number[].
The type of '5' is the type literal '5', which is not assignable to number.
*/

/* c.
never is the bottom type. That means it's assignable to every other type, but no type is
assignable to never.
*/

/* d.
unknown represent a value that could be anything at runtime. To prove to TypeScript that what
you're doing is safe, you have to first prove to TypeScript that a value of type unknown actually
has a more specific subtype. You do that by refining the value using typeof, instanceof, or
another type query or type guard.
*/
