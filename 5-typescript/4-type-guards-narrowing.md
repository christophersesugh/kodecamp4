# Type Guards/Narrowing

In TypeScript, type guards and narrowing are techniques to refine the type of a variable at runtime based on certain conditions. This helps improve type safety and allows you to access properties or methods that might not be available on the initial broader type.

**Type Guards:**

- **Concept:** Functions or conditions that check the type of a value at runtime and narrow down its type based on the outcome.
- **Benefits:**
  - Improves type safety by ensuring you only access properties or methods that are valid for the actual type of the value.
  - Enhances code readability by making your intent clearer in cases where the compiler can't infer the exact type.

**Type Narrowing:**

- **Process:** The act of refining the type of a variable based on a type guard or any other conditional check.
- **Example:**

  ```typescript
  let value: unknown = "Hello";

  if (typeof value === "string") {
    value.toUpperCase(); // Type narrowed to string, so this is safe
  } else {
    // Handle non-string case
  }
  ```

**`instanceof` as a Type Guard:**

- **Purpose:** Specifically used for narrowing down the type of a variable to a class type if it was created using that class's constructor.
- **Syntax:**

  ```typescript
  class Person {
    // ...
  }

  let value: unknown = new Person();

  if (value instanceof Person) {
    value.greet(); // Type narrowed to Person, so this is safe
  }
  ```

  In this example, `value instanceof Person` checks if `value` was created using the `Person` class constructor. If true, the type of `value` is narrowed to `Person` within the `if` block, allowing you to safely call `greet()`.

**Important Points:**

- `instanceof` only works with classes, not interfaces.
- It's a runtime check, so it doesn't affect type checking during compilation.
- Consider using other type guards like type predicates or user-defined functions for more complex narrowing scenarios.

## typeof

Absolutely, the `typeof` operator is a fundamental type guard in TypeScript. It allows you to check the type of a value at runtime and return a string that represents that type. Here's a detailed explanation:

**Purpose:**

- The primary purpose of `typeof` is to get the string representation of a value's type at runtime.
- This string can then be used in conditional statements to perform type guards and narrow down the type of a variable.

**Syntax:**

```typescript
let value: unknown = "Hello";

let valueType = typeof value; // valueType will be "string"
```

**Common Use Cases for Type Guarding:**

1. **Conditional Logic Based on Type:**

   ```typescript
   if (typeof value === "string") {
     value.toUpperCase(); // Type narrowed to string, so this is safe
   } else if (typeof value === "number") {
     value.toFixed(2); // Type narrowed to number (if applicable)
   } else {
     // Handle other types or unknown type
   }
   ```

   This code checks the type of `value` using `typeof` and performs operations specific to the narrowed type within each conditional block.

2. **User-Defined Type Guards:**

   ```typescript
   function isString(value: unknown): value is string {
     return typeof value === "string";
   }

   let someValue = "hello";

   if (isString(someValue)) {
     console.log(someValue.length); // Safe to use string methods
   }
   ```

   Here, `isString` is a user-defined type guard that checks if the value is a string. It returns a boolean and also performs type narrowing within the function's return type annotation (`value is string`).

**Key Points:**

- `typeof` returns a string, not the actual type.
- It's a runtime check, so it doesn't affect type checking during compilation.
- Consider using `typeof` in combination with conditional statements or user-defined type guards for effective type narrowing.

## Equality

In TypeScript, equality checks play a crucial role in type guards and conditional logic. There are two main operators for equality comparison:

1. **Strict Equality (`===`):**

   - Compares both the value and the type of the operands.
   - Ensures a true result only if the values are exactly the same and have the same type.

2. **Loose Equality (`==`):**
   - Attempts to coerce the operands to a common type before comparison.
   - Might lead to unexpected results due to type coercion.

**Strict Equality (`===`) for Type Guards:**

- **Recommended approach:** When performing type guards, it's generally recommended to use strict equality (`===`) to ensure a true result only if the types are genuinely identical.
- **Example:**

  ```typescript
  function isString(value: unknown): value is string {
    return typeof value === "string"; // Uses strict equality for type check
  }

  let someValue: unknown = "hello";

  if (isString(someValue)) {
    console.log(someValue.toUpperCase()); // Safe to use string methods
  }
  ```

  In this example, `isString` uses strict equality (`===`) to verify if `typeof value` strictly equals `"string"`, guaranteeing the type is indeed a string before accessing string methods.

**Equality and Type Narrowing:**

- When using equality checks within conditional statements, the type of a variable might be narrowed based on the outcome.
- **Example:**

  ```typescript
  let value: string | number = "hello";

  if (value === "hello") {
    // Strict equality check
    value.toUpperCase(); // Type narrowed to string, safe to use string methods
  } else {
    value.toFixed(2); // Type narrowed to number (if applicable)
  }
  ```

  Here, the `if` block checks for strict equality with `"hello"`. If true, the type of `value` is narrowed to `string` within that block, allowing safe usage of string methods.

**When to Avoid Loose Equality (`==`):**

- Loose equality (`==`) can lead to unexpected behavior due to type coercion. It's generally discouraged for type guards and comparisons where type safety is critical.
- Consider using strict equality (`===`) for reliable type checks and narrowing.

## Truthiness

In TypeScript, truthiness is a concept borrowed from JavaScript. It refers to values that evaluate to `true` in certain contexts, such as conditional statements or the logical `&&` (AND) operator.

**Truthy Values:**

- In JavaScript (and consequently TypeScript), some values are considered "truthy" even though they are not strictly equal to `true`. These values include:
  - Non-zero numbers (except for 0)
  - Non-empty strings
  - The `true` boolean value
  - Objects (including arrays and functions)

**Falsy Values:**

- Conversely, some values are considered "falsy" and evaluate to `false` in boolean contexts:
  - The number 0
  - The empty string (`""`)
  - The boolean value `false`
  - `null`
  - `undefined`

**Truthy in TypeScript:**

- TypeScript inherits the concept of truthiness from JavaScript.
- It plays a role in various scenarios:
  - Conditional statements (`if`, `else if`, `else`)
  - Logical operators (`&&`, `||`)
  - The optional chaining operator (`?.`) (behaves differently with falsy values)

**Example:**

```typescript
let value: number = 0;

if (value) {
  // value is falsy (0), but the if block won't execute
  console.log("Value is truthy");
} else {
  console.log("Value is falsy"); // This will be printed
}

let greetings = value ? "Hello" : "Goodbye"; // greetings will be "Goodbye"
```

**Potential Issues:**

- While truthiness can be convenient for concise code, it can sometimes lead to unexpected behavior if not handled carefully.
- Explicit type checks or strict comparisons (`===`) are recommended for situations where type safety is crucial.

## Type predicates

In TypeScript, type predicates are powerful tools for type narrowing. They are essentially functions that take a value and return a boolean indicating whether the value satisfies a specific type or set of conditions. Here's a detailed explanation of type predicates:

**Understanding Type Predicates:**

- **Structure:** A type predicate is a function that follows this pattern:

  ```typescript
  function isType(value: unknown): value is TargetType {
    // Logic to check if value is of type TargetType
    return someCondition;
  }
  ```

  - The function takes a value of type `unknown` (or any broader type).
  - It performs checks on the value to determine if it meets the criteria of the `TargetType`.
  - The function returns a boolean (`true` if the value satisfies the type, `false` otherwise).
  - The return type includes a type guard assertion (`value is TargetType`), which narrows the type of `value` within the function and potentially throughout the code if used correctly.

**Benefits of Type Predicates:**

- **Improved Type Safety:** By explicitly checking the type of a value, you can ensure you only access properties or methods that are valid for the narrowed type.
- **Enhanced Readability:** Type predicates can make code more readable by encapsulating type checking logic within named functions.
- **Flexibility:** They can handle complex type checks beyond simple comparisons using `typeof` or `instanceof`.

**Using Type Predicates for Type Narrowing:**

```typescript
function processValue(value: unknown) {
  if (isOfTypeString(value)) {
    console.log(value.toUpperCase()); // Safe to use string methods
  } else if (isOfTypeNumber(value)) {
    console.log(value.toFixed(2)); // Safe to use number methods
  } else {
    console.log("Value is not a string or number");
  }
}

function isOfTypeString(value: unknown): value is string {
  return typeof value === "string";
}

function isOfTypeNumber(value: unknown): value is number {
  return typeof value === "number";
}

processValue("Hello"); // Output: HELLO
processValue(123.45); // Output: 123.45 (formatted as number)
processValue(true); // Output: Value is not a string or number (type safety enforced)
```

**Key Points:**

- Type predicates are functions, not type aliases.
- They rely on type guard assertions within their return types to achieve narrowing.
- Consider using them for complex type checks or when readability benefits from named functions for type checking logic.
