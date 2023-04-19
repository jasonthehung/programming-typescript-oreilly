#### Modern languages have all sorts of different type systems

> Type system:
>
> A set of rules that a typechecker uses to assign types to your program

|                                    | TS                    | JS               |
| ---------------------------------- | --------------------- | ---------------- |
| How are types bound?               | compile time          | runtime          |
| Are types automatically converted? | NO (mostly)           | YES              |
| When are types checked?            | compile time          | runtime          |
| When are errors surfaced?          | compile time (mostly) | runtime (mostly) |

-   There still have a lot of errors that TS cannot catch at compile time

    (e.g., stack overflows, broken network connections, malformed user inputs...etc.)
