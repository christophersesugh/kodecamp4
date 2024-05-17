# Iterating over objects

Iterating over objects in JavaScript is a bit different from iterating over arrays or strings because objects are unordered collections of key-value pairs. There are a few ways to achieve iteration depending on what you want to access (keys, values, or both):

**1. Using `for...in` Loop:**

The `for...in` loop is a common way to iterate over the enumerable properties of an object. It iterates over all inherited and non-inherited properties of the object (including those from the prototype chain).

Here's the syntax:

```javascript
for (const key in object) {
  console.log(key, object[key]); // Access value using the key
}
```

**Important points about `for...in`:**

- It iterates over property names (strings), not the values themselves.
- The order of iteration is not guaranteed and might differ across different JavaScript engines.
- It might iterate over inherited properties as well, which you might not always want.

**Example:**

```javascript
const person = { name: "Kodecamp", age: 4 };

for (const key in person) {
  console.log(key, person[key]); // "name", "Kodecamp", "age", 4
}
```

**2. Using `Object.keys()`:**

If you only need to iterate over the object's own enumerable property names (not including inherited ones), you can use `Object.keys()`. It returns an array of the object's own property keys (strings).

Here's how to use it with a `for...of` loop:

```javascript
const person = { name: "Kodecamp", age: 4 };
const keys = Object.keys(person);

for (const key of keys) {
  console.log(key, person[key]); // "name", "Kodecamp", "age", 4
}
```

**3. Using `Object.values()` (ES8 and above):**

If you only need to iterate over the object's own enumerable property values, you can use `Object.values()` (available in ES8 and later). It returns an array of the object's own enumerable property values.

Here's how to use it with a `for...of` loop:

```javascript
const person = { name: "Kodecamp", age: 4 };
const values = Object.values(person);

for (const value of values) {
  console.log(value); // "Kodecamp", 4
}
```

**4. Using `Object.entries()` (ES8 and above):**

If you need to iterate over both keys and values together, you can use `Object.entries()` (available in ES8 and later). It returns an array of key-value pairs as sub-arrays.

Here's how to use it with a `for...of` loop:

```javascript
const person = { name: "Kodecamp", age: 4 };
const entries = Object.entries(person);

for (const [key, value] of entries) {
  console.log(key, value); // "name", "Kodecamp", "age", 4
}
```

**Choosing the Right Method:**

- Use `for...in` if you need to iterate over all properties (including inherited ones) and access them using the key.
- Use `Object.keys()` if you only need the object's own enumerable property names.
- Use `Object.values()` (ES8+) if you only need the object's own enumerable property values.
- Use `Object.entries()` (ES8+) if you need to iterate over both keys and values together.
