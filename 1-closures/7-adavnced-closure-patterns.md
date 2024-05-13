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
function useMemo(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    cache[key] = fn.apply(this, args);
    return cache[key];
  };
}

const add = (a, b) => {
  console.log("add called only once");
  return a + b;
};

const memoizedAdd = useMemo(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 3));
console.log(memoizedAdd(1, 3));
```

- In this example, the `useMemo` function uses a closure to store the calculated input numbers in a `cache` object.
- Subsequent calls with the same argument retrieve the cached value, avoiding unnecessary recalculations.

```javascript
function useCallback(fn) {
  let lastArgs = [];
  let lastResult = null;

  return function (...args) {
    if (
      args.length !== lastArgs.length ||
      args.some((arg, index) => arg !== lastArgs[index])
    ) {
      console.log("Calculating");
      lastArgs = args;
      lastResult = fn(...args);
    } else {
      console.log("Cached");
    }
    return lastResult;
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = useCallback(add);

console.log(memoizedAdd(1, 2)); // Calculating 3
console.log(memoizedAdd(1, 2)); // Cached 3
console.log(memoizedAdd(1, 3)); // Calculating 4
console.log(memoizedAdd(1, 3)); // Cached 4
```

**What does the useCallback function do?**
**How can you make the useCallback function async?**
**How can it be restructured to be used like so?**

```javascript
const returnedValue = useCallback(callback);
console.log(returnedValue);
```

# Closures in Functional Programming:

- Closures align well with functional programming principles like immutability and pure functions.
- They enable data encapsulation, creating private state and promoting modularity, which are key aspects of functional programming.
- Closures can be used to implement higher-order functions (functions that take functions as arguments or return functions as outputs), further enhancing the expressiveness of functional programming.
