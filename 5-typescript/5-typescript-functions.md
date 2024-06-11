# Typescript functions

Defining types for functions in TypeScript is essential for ensuring type safety and code clarity.
**Function Signatures:**

- TypeScript uses function signatures to define the expected parameters (arguments) and return type of a function.
- Syntax:

  ```typescript
  function functionName(
    param1: type1,
    param2: type2,
    ...rest: type[]
  ): returnType {
    // Function body
  }
  ```

  - `functionName`: Name of the function.
  - `param1`, `param2`, etc.: Names of the function's parameters.
  - `type1`, `type2`, etc.: Types of the corresponding parameters.
  - `...rest`: Optional rest parameter syntax for functions that can take a variable number of arguments (types specified in an array).
  - `returnType`: The type of the value the function returns.

**Example:**

```typescript
function greet(name: string): string {
  return "Hello, " + name + "!";
}

let message = greet("Kodecamp"); // Type of message is inferred as string
```

**Optional Parameters:**

- You can mark parameters as optional using a question mark (`?`) after the parameter type.
- Optional parameters must be listed after required parameters.

```typescript
function createUser(name: string, age?: number): object {
  // Function body
}

let user1 = createUser("Bob"); // Valid, age is omitted
let user2 = createUser("Charlie", 30); // Valid, age is provided
```

**Default Parameter Values:**

- You can assign default values to function parameters using the assignment operator (`=`).
- Default parameters must also be listed after required parameters.

```typescript
function formatValue(value: number, decimals = 2): string {
  return value.toFixed(decimals);
}

let formattedNumber1 = formatValue(3.14); // decimals defaults to 2 (2 decimal places)
let formattedNumber2 = formatValue(123.456, 3); // Explicitly set decimals to 3
```

**Function Overloads:**

- TypeScript allows defining multiple function signatures with the same name but different parameter types.
- This is useful for functions that can handle different argument combinations.

```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}

let sum1 = add(10, 20); // number + number returns number
let combinedString = add("Hello", " World"); // string + string returns string
// add(true, false); // This would cause a type error
```
