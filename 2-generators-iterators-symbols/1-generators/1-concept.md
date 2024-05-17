**Definition:**

In JavaScript, a generator is a special type of function that can be paused and resumed during its execution. It achieves this by using the `yield` keyword. When a generator function is called, it doesn't execute all the way through like a normal function. Instead, it remembers its state and can be resumed later using the `next()` method of the generator object.

**Concept:**

- **Pausing and Resuming:** Imagine a generator function as a recipe. You can follow the steps (code) until you reach a `yield` statement, which acts like a pause point. The `yield` keyword pauses the execution and returns a value. You can then resume execution later using the `next()` method, which picks up where it left off and continues the recipe.
- **Yielding Values:** A generator function can `yield` multiple values throughout its execution. These yielded values become the results when you use the generator in a loop or with other iterables.
- **Iterators:** Generators are closely related to iterators. When you call a generator function, it returns a generator object, which is an iterator. You can use this iterator with a `for...of` loop to access the yielded values one by one.

In essence, generators provide a way to create iterable functions that produce values on-demand, making them useful for various scenarios like:

- Handling large datasets efficiently by generating them in parts.
- Implementing iterators for custom data structures.
- Creating asynchronous code in a more manageable way (although Promises and async/await are more common for this now).

**Example**

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

console.log(generator.next().value); // Output: 1 (The generator pauses at the first yield)

console.log(generator.next().value); // Output: 2 (Resumed execution and yields the next value)

console.log(generator.next().value); // Output: 3 (Resumed again and yields the last value)
```

In this example, the numberGenerator function pauses at each yield statement. We then use next() to resume execution and get the yielded values one at a time.
