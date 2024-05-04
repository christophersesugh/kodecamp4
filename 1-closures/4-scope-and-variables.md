# Accessing Variables:

- Closures allow inner functions to access variables from their outer function's scope, even after the outer function finishes execution.
- This is because the inner function captures a reference to the outer function's environment during its creation.
- The inner function can then use this reference to access and manipulate the captured variables.

**Example:**

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("Count inside closure:", count);
  }

  return increment;
}

const counter1 = createCounter();
counter1(); // Output: "Count inside closure: 1"
```

In this example:

- `createCounter` creates a variable `count` and an inner function `increment`.
- `increment` captures `count` from its outer function's scope.
- When `counter1` (the closure) calls `increment`, it can access and modify the captured `count` variable.

# Modifying Variables:

- Closures can not only access variables from the parent scope, but they can also modify them.
- Any changes made to the captured variables within the closure persist even after the outer function finishes execution.

**Example:**

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    getCount,
  };
}

const counter2 = createCounter();
counter2.increment();
counter2.increment();
console.log(counter2.getCount()); // Output: 2
```

In this example:

- `createCounter` creates a variable `count` and two inner functions.
- The closure allows both `increment` and `getCount` to access and modify the captured `count` variable.

# Scope Chain:

- In JavaScript, the scope chain determines where a variable is looked up when referenced within a function.
- The scope chain starts with the current function's local scope and then proceeds outwards to its enclosing functions (parent scopes) until the global scope is reached.
- Closures leverage the scope chain to access variables from their parent scopes.

Here's a visualization of the scope chain:

```
  Outer Function Scope
   / \
 Inner Function Scope
     |
    Variable Scope
```

- The inner function's scope chain includes its own local scope, the outer function's scope, and ultimately the global scope.
- This allows the inner function to access variables declared in any of these scopes, provided they haven't been shadowed by variables with the same name in closer scopes.
