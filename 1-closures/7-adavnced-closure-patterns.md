# Currying and Partial Application:

- **Currying:**
  - Currying is a technique where a function with multiple arguments is transformed into a sequence of functions with a single argument each.
  - Closures are instrumental in achieving currying because they allow inner functions to capture arguments from outer function calls.

**Example:**

```javascript
function add(x, y) {
  return x + y;
}

const add5 = add.bind(null, 5); // Partially applied function to add 5 to any number

console.log(add5(10)); // Output: 15
```

- In this example, `add5` is a partially applied version of `add` that has 5 fixed as the first argument using `bind`.
- This is possible because the closure within `add` captures the `x` argument, allowing `add5` to operate on the remaining `y` argument.

# Memoization:

- Memoization is an optimization technique where the results of a function call are cached based on its arguments.
- Closures can be used to store and retrieve these cached results, improving performance by avoiding redundant calculations.

**Example:**

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  // Memoization using a closure
  const cache = {};
  if (!cache[n]) {
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return cache[n];
}

console.log(fibonacci(40)); // Output: 165580141
```

- In this example, the `fibonacci` function uses a closure to store the calculated Fibonacci numbers in a `cache` object.
- Subsequent calls with the same argument retrieve the cached value, avoiding unnecessary recalculations.

# Closures in Functional Programming:

- Closures align well with functional programming principles like immutability and pure functions.
- They enable data encapsulation, creating private state and promoting modularity, which are key aspects of functional programming.
- Closures can be used to implement higher-order functions (functions that take functions as arguments or return functions as outputs), further enhancing the expressiveness of functional programming.
