# TypeScript Type Error Not Caught at Compile Time

This repository demonstrates a scenario where a TypeScript type error is not caught during compilation because of string concatenation. The function `add` is defined to accept two numbers and return their sum. However, when we pass a string and a number as arguments, TypeScript doesn't throw a compile-time error; instead it performs string concatenation.

## Bug

The `bug.ts` file contains the problematic code.  The type error isn't reported, and the output is unexpected.

## Solution

The `bugSolution.ts` file demonstrates a solution to prevent this issue by adding runtime type checking or improving type guards.