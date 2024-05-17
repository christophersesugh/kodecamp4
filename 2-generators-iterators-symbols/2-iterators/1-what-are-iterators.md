# What are iterators?

In computer science, particularly programming languages, iterators are objects that let you access elements of a collection one at a time, in a sequential order. They provide a standardized way to move through the elements of a collection, like an array, list, or some custom data structure.

Here's a breakdown of the key concepts:

**Functionality:**

- Iterators act as a bridge between collections and algorithms. They allow algorithms to work on various collections without needing to know the specific implementation details of each collection.
- An iterator typically has a `next()` method. Calling `next()` moves the iterator to the next element in the collection and returns the value of that element.
- Some iterators might also have additional methods like `hasNext()` or `reset()` depending on the specific implementation.

**Benefits:**

- Iterators promote code reusability. Algorithms can be written to work with any iterable collection (a collection that can provide an iterator) without modification.
- They improve code clarity by separating the logic of iterating over a collection from the logic of processing the elements.

**Example (using JavaScript arrays):**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Create an iterator for the numbers array
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
// ... and so on

// Using a for...of loop (which utilizes iterators behind the scenes)
for (const num of numbers) {
  console.log(num);
}
```

In this example:

- We get an iterator for the `numbers` array using `Symbol.iterator`.
- Calling `next()` on the iterator moves to the next element and returns its value.
- The `for...of` loop leverages iterators internally to access elements one by one.

**Iterators vs. Iterables:**

- **Iterators:** The actual objects that allow you to iterate through a collection, providing the `next()` method and potentially others.
- **Iterables:** Collections (like arrays, strings, maps, sets) that can provide an iterator when you use them with a `for...of` loop or call their `Symbol.iterator` method. Not all collections are iterables (e.g., objects).
