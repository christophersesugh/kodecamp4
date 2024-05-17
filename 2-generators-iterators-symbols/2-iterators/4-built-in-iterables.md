# Built-in iterables

Built-in iterables in JavaScript are objects that you can directly use in `for...of` loops and other iterable contexts like `Array.prototype.forEach()` or `map()`. They provide a way to access elements of a collection one at a time without manually managing the iteration process. Here's a breakdown of some common built-in iterables:

**1. Arrays:**

- Arrays are the most fundamental iterable in JavaScript. They store ordered collections of values of any data type.
- You can use `for...of` loops to iterate over the elements in an array:

```javascript
const languages = ["Python", "Dart", "JavaScript"];

for (const language of languages) {
  console.log(language);
}
```

**2. Strings:**

- Strings are sequences of characters that are also considered iterables. You can iterate over the individual characters in a string:

```javascript
const message = "Hello, world!";

for (const char of message) {
  console.log(char); // "H", "e", "l", "l", "o", ...
}
```

**3. Sets:**

- Sets are collections of unique values. They are iterable, allowing you to iterate over the elements in the insertion order:

```javascript
const colors = new Set(["red", "green", "blue", "red"]); // "red" is only added once

for (const color of colors) {
  console.log(color); // "green", "blue", "red" (order may vary)
}
```

**4. Maps:**

- Maps are collections of key-value pairs. You can iterate over the key-value pairs in insertion order:

```javascript
const person = new Map([
  ["name", "Kodecamp"],
  ["age", 4],
]);

for (const [key, value] of person) {
  console.log(key, value); // "name", "Kodecamp", "age", 4
}
```

**5. String Literals (ES6 and above):**

- In ES6 and later versions, string literals themselves are also considered iterables. This allows you to iterate over the characters in a string without explicitly creating a String object:

```javascript
for (const char of "hello") {
  console.log(char); // "h", "e", "l", "l", "o"
}
```

**In addition to these core built-in iterables, many other built-in objects and functions in JavaScript return iterables.** For example, the `keys()`, `values()`, and `entries()` methods of various collections (like `Map` and `Set`) return iterables that allow you to access keys, values, or key-value pairs respectively.
