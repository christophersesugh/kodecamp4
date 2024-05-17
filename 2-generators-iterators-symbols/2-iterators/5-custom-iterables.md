# Custom iterables

In JavaScript, custom iterables allow you to create your own data structures that can be used in `for...of` loops and other iterable contexts, just like built-in iterables (like arrays and strings). This enables you to extend the concept of iteration to handle more specialized data or custom logic.

Here's a breakdown of how to create custom iterables:

**Following the Iterator Protocol:**

Custom iterables adhere to the iterator protocol, which is a standard way for objects to be iterable. The protocol consists of two key parts:

1. **`Symbol.iterator`:** This is a well-known symbol that acts as a marker for the default iterator method of an iterable object. When you use your custom iterable in a `for...of` loop, JavaScript calls this method behind the scenes to get an iterator object.

2. **Iterator Object:** The `Symbol.iterator` method of your custom iterable should return an iterator object. This object has a specific behavior defined by the protocol:

- **`next()` Method:** This is the core function of the iterator. Calling `next()` on an iterator object advances the iteration and returns an object with two properties:
  - `value`: The next value in the sequence provided by your custom iterable.
  - `done`: A boolean indicating whether the iteration is complete (`true`) or has more values (`false`).

**Creating a Custom Iterable Class:**

Here's a general structure for creating a custom iterable class:

```javascript
class MyCustomIterable {
  // ... (your class definition and data)

  [Symbol.iterator]() {
    // ... (implementation to return an iterator object)
  }
}
```

- Define your custom data structure and any relevant methods within the class.
- Implement the `Symbol.iterator` method. This method should return an iterator object with a `next()` method as described earlier.

**Example: Number Range:**

Let's create a `NumberRange` class that represents a range of numbers and is iterable:

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

- The `NumberRange` class stores the starting and ending values of the range.
- The `Symbol.iterator` method returns an iterator object.
- The iterator's `next()` method keeps track of the current number and returns it until it reaches the end of the range (indicated by `done` becoming `true`).

**Benefits of Custom Iterables:**

- **Flexibility:** You can tailor the iteration behavior to your specific data structure or logic.
- **Code Reusability:** By making your data structure iterable, you can use it seamlessly in `for...of` loops and other iterable contexts.

**Use Cases:**

- Representing custom data structures like linked lists or trees that don't directly map to built-in iterables.
- Implementing lazy loading or on-demand generation of elements during iteration.
- Creating iterators that filter or transform elements during iteration.

**Important Considerations:**

- When creating custom iterables, ensure your iterator object correctly implements the `next()` method with the expected `value` and `done` properties.
- Consider the complexity of your custom iteration logic. For simpler cases, using built-in iterables with helper functions might be more efficient.
