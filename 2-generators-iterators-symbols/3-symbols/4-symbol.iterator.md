# Symbol.iterator

`Symbol.iterator` is a well-known symbol in JavaScript that plays a crucial role in defining and utilizing iterables.:

**What it Does:**

- `Symbol.iterator` is a static property on the built-in `Symbol` object. It represents a unique symbol value.
- This symbol acts as a marker for the default iterator method of an iterable object.

**Iterables and Iterators:**

- **Iterables:** These are objects that can be used in a `for...of` loop or other iterable contexts like `Array.prototype.forEach()`. They provide a way to access elements of a collection one at a time.
- **Iterators:** These are objects that implement the iterator protocol. The iterator protocol specifies that an iterator should have a `next()` method. Calling `next()` on an iterator advances the iteration and returns an object with two properties:
  - `value`: The next value in the iteration sequence.
  - `done`: A boolean indicating whether the iteration is complete (`true`) or has more values (`false`).

**Connection Between `Symbol.iterator` and Iterables:**

- When you use an iterable object (like an array) in a `for...of` loop or other iterable context, JavaScript internally calls the object's `Symbol.iterator` method.
- This `Symbol.iterator` method is expected to return an iterator object that implements the iterator protocol (`next()` method).
- The `for...of` loop or iterable context then uses the returned iterator's `next()` method to retrieve elements one by one until the `done` property becomes `true` (indicating the end of the iteration).

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// `for...of` loop using the iterator behind the scenes
for (const num of numbers) {
  console.log(num);
}

// Manually calling the Symbol.iterator method and using the next() method
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
// ... and so on
```

In this example:

- The `for...of` loop leverages `Symbol.iterator` internally to get the iterator from the `numbers` array.
- The manual approach explicitly calls `numbers[Symbol.iterator]()` to get the iterator and then uses `next()` to access elements.

**Key Points:**

- You don't need to explicitly define `Symbol.iterator` on your iterable objects. Built-in iterables like arrays already have a default implementation.
- However, if you're creating your own custom iterable data structure, you'll need to provide a method named `Symbol.iterator` that returns an iterator object following the protocol.
