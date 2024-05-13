Both function declarations and function expressions can be used to create closures in JavaScript.

# **Closures with Function Declarations:**

1. **Function Declaration:** A function is declared using the `function` keyword followed by its name and parameters.
2. **Inner Function:** An inner function is defined within the outer function.
3. **Variable Capture:** The inner function captures variables from the outer function's scope, forming a closure.

**Example:**

Regular function declaration

```javascript
function createMultiplierDeclaration(multiplier) {
  function multiply(number) {
    return number * multiplier;
  }

  return multiply;
}

// Create a multiplier for 2 using function declaration
const multiplierDeclaration = createMultiplierDeclaration(2);

// Use the closure to multiply a number
const declarationResult = multiplierDeclaration(5);
console.log(`5 multiplied by 2 (declaration): ${declarationResult}`); // Output: 10
```

Arrow function declaration

```javascript
function createMultiplierDeclaration(multiplier) {
  const multiply = (number) => number * multiplier;
  return multiply;
}

// Create a multiplier for 2 using function declaration
const multiplierDeclaration = createMultiplierDeclaration(2);

// Use the closure to multiply a number
const declarationResult = multiplierDeclaration(5);
console.log(`5 multiplied by 2 (declaration): ${declarationResult}`); // Output: 10
```

# **Closures with Function Expressions:**

1. **Function Expression:** A function is defined as an anonymous function expression using the `function` keyword without a name.
2. **Inner Function:** An inner function is defined within the outer function expression.
3. **Variable Capture:** The inner function captures variables from the outer function's scope, forming a closure.

**Example:**

Regular function expression

```javascript
function createMultiplierExpression(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Create a multiplier for 2 using function declaration
const multiplierDeclaration = createMultiplierExpression(2);

// Use the closure to multiply a number
const declarationResult = multiplierDeclaration(5);
console.log(`5 multiplied by 2 (declaration): ${declarationResult}`); // Output: 10
```

Arrow function expression

> Notice the implicit return

```javascript
function createMultiplierExpression(multiplier) {
  return (number) => number * multiplier;
}

// Create a multiplier for 2 using function declaration
const multiplierDeclaration = createMultiplierExpression(2);

// Use the closure to multiply a number
const declarationResult = multiplierDeclaration(5);
console.log(`5 multiplied by 2 (declaration): ${declarationResult}`); // Output: 10
```

One liner

```javascript
const createMultiplierDeclaration = (multiplier) => (number) =>
  number * multiplier;

// Create a multiplier for 2 using function declaration
const multiplierDeclaration = createMultiplierDeclaration(2);

// Use the closure to multiply a number
const declarationResult = multiplierDeclaration(5);
console.log(`5 multiplied by 2 (declaration): ${declarationResult}`); // Output: 10
```

In both cases, the inner function remembers the variables from the outer function's scope even after the outer function finishes execution. This allows you to create private state and modular functions that can operate on captured data.

Here are some key points to remember:

- Function declarations are hoisted, meaning they are accessible before their definition in the code.
- Function expressions are not hoisted, meaning they must be defined before they are used.
- The choice between using function declarations or expressions for closures often depends on personal preference and code readability.

# Nested functions and closures

Nested functions and closures are closely related concepts in programming, particularly in JavaScript:

**Nested Functions:**

- A nested function is a function defined within another function.
- The inner function has access to the variables and arguments of its outer function, even after the outer function has finished executing.
- This is because of JavaScript's lexical scoping rules, where variables are accessible within the scope they are declared in, along with any nested scopes within that scope.

**Closures:**

- A closure is formed when an inner function captures the variables of its outer function's environment.
- This captured environment persists even after the outer function finishes execution.
- As a result, the inner function can access and manipulate these captured variables even when called outside the context of the outer function.

Here's the key point:

- **All closures are created from nested functions.**
- However, not all nested functions create closures. For a closure to form, the inner function needs to reference variables from the outer function's scope.

Here's an example to illustrate:

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter1 = createCounter();
counter1(); // count is now 1
counter1(); // count is now 2

console.log(count); // Output: undefined (count is not accessible outside the closure)
```

In this example:

- `createCounter` is the outer function that creates a variable `count`.
- The inner function `increment` is nested within `createCounter`.
- `increment` captures the `count` variable, forming a closure.
- Even after `createCounter` finishes, `counter1` (which holds the closure) can still call `increment` and access the captured `count` variable.
- However, `count` itself is not accessible outside the closure, demonstrating that the closure provides controlled access to its captured environment.
