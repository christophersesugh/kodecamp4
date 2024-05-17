# Iterable protocol

The iterable protocol in JavaScript defines a standard way for objects to be iterable. This means they can be used in `for...of` loops and other contexts that expect a sequence of values. Here's a detailed breakdown:

**Components:**

1. **Symbol.iterator:** This symbol, a property on the built-in `Symbol` object, acts as a marker for the default iterator method of an iterable object.

2. **Iterator Object:** When you use an iterable object in an iterable context, JavaScript calls the object's `Symbol.iterator` method behind the scenes. This method is expected to return an iterator object.

3. **Iterator Protocol:** This protocol specifies the behavior of an iterator object. It requires the iterator to have a method named `next()`.

- **`next()` method:** This method is the core of the protocol. Calling `next()` on an iterator object advances the iteration and returns an object with two properties:
  - `value`: The next value in the iteration sequence.
  - `done`: A boolean indicating whether the iteration is complete (`true`) or has more values (`false`).

**How it Works:**

1. When you use an iterable object (like an array) in a `for...of` loop:

   - JavaScript internally calls the object's `Symbol.iterator` method.
   - The retrieved iterator object implements the `next()` method.

2. The `for...of` loop keeps calling the iterator's `next()` method until the `done` property returned is `true` (indicating the end of the iteration).

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```

In this example:

- The `for...of` loop leverages the iterable protocol behind the scenes.
- JavaScript calls `numbers[Symbol.iterator]()` to get the iterator from the `numbers` array.
- The loop then uses the iterator's `next()` method to retrieve elements one by one until `done` becomes `true`.

**Benefits:**

- The iterable protocol promotes code reusability. Algorithms written to work with iterators can be used with various iterable objects without modification.
- It improves code clarity by separating the logic of iterating over a collection from the logic of processing the elements.

**Creating Custom Iterables:**

- You can create your own custom iterable data structures by following the iterable protocol.
- Define a class or object that:
  - Has a `Symbol.iterator` method that returns an iterator object.
  - The returned iterator object implements the `next()` method as specified in the protocol.

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

In this example:

- The `NumberRange` class represents a range of numbers.
- It implements the `Symbol.iterator` method, returning an iterator object.
- The iterator's `next()` method keeps track of the current number and returns it until it reaches the end of the range.
