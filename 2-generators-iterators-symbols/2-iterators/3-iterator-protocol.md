# Iterator protocol

**What is the Iterator Protocol?**

The iterator protocol is a standard way for objects to be iterable, meaning they can be used in `for...of` loops and other contexts that expect a sequence of values. It defines a contract between iterable objects and iterators, ensuring consistent behavior across different data structures.

**Key Components:**

1. **`Symbol.iterator`:** This is a well-known symbol that acts as a marker for the default iterator method of an iterable object. When you use an iterable in a `for...of` loop or other iterable context, JavaScript calls this method behind the scenes to get an iterator object.

2. **Iterator Object:** The `Symbol.iterator` method of an iterable object should return an iterator object. This object has a specific behavior defined by the protocol.

3. **Iterator Protocol:** This protocol specifies that an iterator object must have a method named `next()`.

- **`next()` Method:** This is the core function of the iterator. Calling `next()` on an iterator object advances the iteration and returns an object with two properties:
  - `value`: The next value in the sequence.
  - `done`: A boolean indicating whether the iteration is complete (`true`) or has more values (`false`).

**How it Works in Practice:**

1. When you use an iterable object (like an array) in a `for...of` loop:

   - JavaScript internally calls the object's `Symbol.iterator` method.
   - The retrieved iterator object implements the `next()` method as defined by the protocol.

2. The `for...of` loop iterates by repeatedly calling the iterator's `next()` method. It keeps looping until the `done` property returned by `next()` becomes `true`, signaling the end of the iteration.

**Benefits:**

- **Code Reusability:** Algorithms written to work with iterators can be used with various iterable objects without modification, promoting flexibility.
- **Code Clarity:** The logic for iterating over a collection is separated from the logic of processing the elements, improving readability.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

In this code:

- `numbers` is an iterable array.
- The `for...of` loop leverages the iterable protocol behind the scenes.
- JavaScript internally calls `numbers[Symbol.iterator]()` to get an iterator for `numbers`.
- The loop then iterates by calling the iterator's `next()` method, retrieving each element until `done` becomes `true`.

**Creating Custom Iterables:**

You can create your own data structures that follow the iterable protocol to enable them to be used in `for...of` loops and other iterable contexts. To do this:

1. Define a class or object.
2. Implement the `Symbol.iterator` method, which should return an iterator object.
3. The returned iterator object must have a `next()` method that behaves according to the protocol, returning objects with `value` and `done` properties.

**Example (Simple Custom Iterable):**

```javascript
class NumberRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    return {
      next() {
        if (current <= this.end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const range = new NumberRange(1, 5);

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

Here:

- The `NumberRange` class defines a range of numbers.
- It implements `Symbol.iterator` to return an iterator object.
- The iterator's `next()` method keeps track of the current number and returns it until it reaches the end of the range (indicated by `done` becoming `true`).
