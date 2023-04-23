> 高階語言大致流程：
>
> Programs -> [***compiler***] -> AST -> [***compiler***] -> Bytecode -> [***runtime***] -> Result

> TS 大致流程：
>
> Programs -> [***TSC***] -> TS AST -> [***Typechecker***] -> JS code -> [***JS compiler***] -> JS AST -> [***JS compiler***] -> Bytecode -> [***runtime***] -> Result

- Programs are files that contain a bunch of text written by you(programmer)
- That text is parsed by a special program called a compiler, which transforms it into an **_abstract syntax tree (AST)_**
- The compiler then converts that AST to a low-level representation called bytecode
- Feed that bytecode into another program called a runtime

> Typechecker：
>
> A special program that verifies that your code is typesafe
