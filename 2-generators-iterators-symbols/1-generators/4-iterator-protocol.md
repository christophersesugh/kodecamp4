# Iterator protocol

In JavaScript, generators are intrinsically linked to the iterator protocol. Here's how they connect:

**The Iterator Protocol:**

The iterator protocol defines a standard way for objects to be iterable. It specifies that an iterable object should have a method named `Symbol.iterator` that returns an iterator object. This iterator object then has a method named `next()` that, when called, returns an object with two properties:

- `value`: The next value in the iteration sequence.
- `done`: A boolean indicating whether the iteration is complete (true) or has more values (false).

**Generators and the Protocol:**

While generators themself don't explicitly implement the iterator protocol, the generator object returned when you call a generator function acts as an iterator. This object implicitly follows the protocol:

- **`Symbol.iterator`:** Calling `Symbol.iterator` on a generator function itself returns the generator function back. This might seem counter-intuitive, but it essentially signifies that the generator function itself can act as a starting point for iteration.

- **`next()` method:** The generator object has a `next()` method. Each call to `next()` on the generator object:
  - Resumes the generator function's execution from the last paused point (`yield`).
  - Evaluates any expression following the `yield` statement.
  - Returns an object with the following properties:
    - `value`: The value yielded by the generator function at that point.
    - `done`: `true` if there are no more values to yield (`return` statement reached or implicit at function end), `false` otherwise.

**Example:**

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true } (No more values)
```

**Key Points:**

- You don't need to manually implement the iterator protocol in generator functions.
- The generator object returned by the generator function acts as the iterator.
- Calling `next()` on the generator object drives the iteration and retrieves yielded values.
