# Map

## What is a Map?

In JavaScript, a Map object is a collection of key-value pairs. It's similar to traditional JavaScript objects in terms of storing data, but it offers some key advantages:

- **Ordered:** Maps remember the order in which key-value pairs were inserted. This is unlike objects, where insertion order is not guaranteed.
- **Keys can be any data type:** Maps allow you to use any data type (strings, numbers, objects, even other Maps) as keys. Objects can only use strings or symbols as keys.
- **Has a size property:** Maps have a built-in `size` property that reflects the number of key-value pairs currently stored. Objects don't have a direct way to get the number of key-value pairs.

Here's a breakdown of the key characteristics of Maps:

- **Creation:** You can create a Map object using the `new Map()` constructor or a simpler shortcut syntax `{}` with double curly braces.
- **Setting Key-Value Pairs:** Use the `set(key, value)` method to add a new key-value pair to the Map.
- **Getting Values:** Retrieve a value associated with a key using the `get(key)` method.
- **Deleting Key-Value Pairs:** The `delete(key)` method removes a specific key-value pair from the Map.
- **Checking for Existence:** Use the `has(key)` method to check if a specific key exists in the Map.
- **Iteration:** You can iterate over the key-value pairs of a Map using a `for...of` loop.

**Use Cases for Maps:**

- **Maintaining Ordered Data:** When you need to preserve the order in which data is added, Maps are a good choice.
- **Using Objects as Keys:** If you require objects or other complex data types as keys for your collection, Maps provide the flexibility to do that.
- **Efficient Lookups:** Maps offer efficient lookups based on keys, making them suitable for scenarios where you need to retrieve data by a unique identifier.

## Creating a Map

Creating a map in JavaScript can be done using the `Map` object, which is part of the ECMAScript 6 (ES6) specification. The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Here are some basic operations you can perform with a `Map`:

```javascript
const myMap = new Map();
```

## Adding and accessing elements

In JavaScript, Maps provide methods to add and access elements (key-value pairs). Here's a breakdown of the key methods:

**Adding Elements (Key-Value Pairs):**

- **`set(key, value)`:** This is the primary method for adding a new key-value pair to a Map.

  - `key`: This represents the unique identifier for the data you're storing. It can be a string, number, object, or even another Map.
  - `value`: This is the data you want to associate with the key. It can be any valid JavaScript value.

  **Example:**

  ```javascript
  const myMap = new Map();

  myMap.set("name", "Kodecamp");
  myMap.set(1, "This is the value for key 1");
  const anotherMap = new Map(); // Another Map object
  myMap.set(anotherMap, "Value for another Map key");

  console.log(myMap.size); // Output: 3 (number of key-value pairs)
  ```

**Accessing Elements:**

- **`get(key)`:** This method retrieves the value associated with a specific key from the Map.

  - `key`: This is the key you used when setting the key-value pair.

  _Returns:_ The `get` method returns the value associated with the key if it exists in the Map. If the key doesn't exist, it returns `undefined`.

  **Example:**

  ```javascript
  const myMap = new Map();
  myMap.set("name", "Kodecamp");

  const name = myMap.get("name");
  console.log(name); // Output: "Kodecamp"

  const age = myMap.get("age"); // Key 'age' doesn't exist
  console.log(age); // Output: undefined
  ```

**Additional Points:**

- **Duplicate Keys:** Maps only allow unique keys. If you try to add a key-value pair with a key that already exists in the Map, the existing value will be overwritten with the new value.
- **Chaining Methods:** You can chain the `set` and `get` methods for a more concise syntax. For example:

  ```javascript
  const myMap = new Map().set("name", "Kodecamp").get("name");
  console.log(myMap); // Output: "Kodecamp" (assuming get returns the value)
  ```

## Checking for existence

There are two primary ways to check for the existence of a key in a JavaScript Map:

1. **Using the `has(key)` method:**

   This is the recommended and most efficient way to determine if a Map contains a specific key.

   - `key`: This represents the key you want to check for in the Map.

   _Returns:_ The `has` method returns a boolean value: `true` if the key exists in the Map, `false` otherwise.

   **Example:**

   ```javascript
   const myMap = new Map();
   myMap.set("name", "Kodecamp");

   const hasNameKey = myMap.has("name");
   console.log(hasNameKey); // Output: true

   const hasAgeKey = myMap.has("age");
   console.log(hasAgeKey); // Output: false
   ```

2. **Using the `get(key)` method and checking for `undefined`:**

   While not the most efficient approach, you can also check for existence by using the `get` method and comparing the returned value to `undefined`.

   **Example:**

   ```javascript
   const myMap = new Map();
   myMap.set("name", "Kodecamp");

   const nameValue = myMap.get("name");
   const hasNameKey = nameValue !== undefined;
   console.log(hasNameKey); // Output: true (assuming get returns the value)

   const ageValue = myMap.get("age");
   const hasAgeKey = ageValue !== undefined;
   console.log(hasAgeKey); // Output: false
   ```

**Why `has` is better:**

- **Performance:** The `has` method is generally more performant than using `get` and checking for `undefined`. This is because `has` specifically checks for the key's existence, while `get` retrieves the value, which might involve additional operations depending on the data type.
- **Clarity:** Using `has` explicitly expresses your intent to check for the key's presence, making the code more readable.

## Removing elements

In JavaScript, Maps offer a method to remove elements (key-value pairs) efficiently:

- **`delete(key)`:** This method removes a specific key-value pair from a Map.

  - `key`: This represents the key of the element you want to delete.

  _Returns:_ The `delete` method returns `true` if the key was successfully deleted from the Map (i.e., the key existed before the deletion). It returns `false` if the key wasn't found in the Map.

**Example:**

```javascript
const myMap = new Map();
myMap.set("name", "Kodecamp");
myMap.set(1, "This is the value for key 1");

console.log(myMap.size); // Output: 2 (number of key-value pairs)

const deleted = myMap.delete(1);
console.log(deleted); // Output: true (key 1 existed and was deleted)

const deletedNonExistent = myMap.delete("age");
console.log(deletedNonExistent); // Output: false (key 'age' didn't exist)

console.log(myMap.size); // Output: 1 (key 1 was deleted)
```

**Important Points:**

- **Non-existent Keys:** If you try to delete a key that doesn't exist in the Map, the `delete` method will return `false`.
- **Chaining Methods:** You can't chain the `delete` method with other methods like `get` because `delete` modifies the Map itself.

**Additional Considerations:**

- **Alternative for Removing All Elements:** While there's no built-in method to directly remove all elements from a Map, you can achieve this by iterating through the Map and calling `delete` for each key. However, for clearing a Map entirely, creating a new empty Map might be more efficient.

## Iterating over keys, values, and entries

Iterating over the elements (key-value pairs) in a JavaScript Map is essential for various operations like accessing data, processing entries, or building new structures. Here's a breakdown of the different ways to iterate over Maps:

**1. Iterating over Keys:**

If you only need to access the keys in a specific order, you can use the `keys()` method:

- **`keys()`:** This method returns a new Iterator object containing an iterable sequence of all the keys in the Map, in the order they were inserted.

**Example:**

```javascript
const myMap = new Map();
myMap.set("name", "Kodecamp");
myMap.set(1, "This is value 1");

for (const key of myMap.keys()) {
  console.log(key); // Output: "name" then 1 (in insertion order)
}
```

**2. Iterating over Values:**

Similarly, if you're only interested in the values, you can use the `values()` method:

- **`values()`:** This method returns a new Iterator object containing an iterable sequence of all the values in the Map, in the order they were inserted.

**Example:**

```javascript
const myMap = new Map();
myMap.set("name", "Kodecamp");
myMap.set(1, "This is value 1");

for (const value of myMap.values()) {
  console.log(value); // Output: "Kodecamp" then "This is value 1" (in insertion order)
}
```

**3. Iterating over Key-Value Pairs (Entries):**

For most common use cases where you need both the key and the value, the `entries()` method is the preferred approach:

- **`entries()`:** This method returns a new Iterator object containing an iterable sequence of [key, value] arrays, representing each key-value pair in the Map, in the order they were inserted.

**Example:**

```javascript
const myMap = new Map();
myMap.set("name", "Kodecamp");
myMap.set(1, "This is value 1");

for (const [key, value] of myMap.entries()) {
  console.log(key, value); // Output: "name" "Kodecamp" then 1 "This is value 1" (in insertion order)
}
```

**Using `forEach` with Entries:**

You can also use the `forEach` method in combination with `entries` to achieve similar iteration with a callback function:

```javascript
myArray.forEach(([key, value]) => {
  console.log(key, value);
});
```

**Choosing the Right Method:**

- Use `keys()` or `values()` if you only need to process keys or values independently, respectively.
- Use `entries()` for most scenarios where you need to work with both keys and values together.

## Clearing the Map

To clear a `Map` in JavaScript, you can use the `clear` method. This method removes all key-value pairs from the `Map` object, effectively resetting it to its initial empty state.

Here's a detailed example to illustrate how to clear a `Map`:

### Example

```javascript
const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Kodecamp");
myMap.set("age", 4);
myMap.set("city", "Akwa Ibom");

console.log(myMap.size); // Output: 3

// Clearing the map
myMap.clear();

console.log(myMap.size); // Output: 0
console.log(myMap.has("name")); // Output: false
console.log(myMap.has("age")); // Output: false
console.log(myMap.has("city")); // Output: false
```

### Explanation

1. **Creating and Populating the Map**

   ```javascript
   const myMap = new Map();
   myMap.set("name", "Kodecamp");
   myMap.set("age", 4);
   myMap.set("city", "Akwa Ibom");
   ```

   - A new `Map` object is created.
   - Three key-value pairs are added to the `Map`.

2. **Checking the Size Before Clearing**

   ```javascript
   console.log(myMap.size); // Output: 3
   ```

   - The size of the `Map` is checked, showing that it contains three entries.

3. **Clearing the Map**

   ```javascript
   myMap.clear();
   ```

   - The `clear` method is called on the `Map`, removing all key-value pairs.

4. **Checking the Size After Clearing**
   ```javascript
   console.log(myMap.size); // Output: 0
   console.log(myMap.has("name")); // Output: false
   console.log(myMap.has("age")); // Output: false
   console.log(myMap.has("city")); // Output: false
   ```
   - After clearing, the size of the `Map` is checked again, showing that it is now empty.
   - The `has` method is used to confirm that all keys have been removed from the `Map`.

## Size and emptiness of a Map

To determine the size and emptiness of a `Map` in JavaScript, you can use the `size` property and the `has` method respectively.

### Checking the Size of a Map

The `size` property returns the number of key-value pairs in the `Map`.

### Checking if a Map is Empty

A `Map` is considered empty if its `size` property is 0.

### Example

Here's an example demonstrating how to check the size and emptiness of a `Map`:

```javascript
const myMap = new Map();

// Initially, the map is empty
console.log(myMap.size); // Output: 0
console.log(myMap.size === 0); // Output: true (Map is empty)

// Adding key-value pairs
myMap.set("name", "Kodecamp");
myMap.set("age", 4);

console.log(myMap.size); // Output: 2
console.log(myMap.size === 0); // Output: false (Map is not empty)

// Removing key-value pairs
myMap.delete("name");
console.log(myMap.size); // Output: 1
console.log(myMap.size === 0); // Output: false (Map is not empty)

myMap.delete("age");
console.log(myMap.size); // Output: 0
console.log(myMap.size === 0); // Output: true (Map is empty)
```

# WeakMap

A `WeakMap` in JavaScript is similar to a regular `Map`, but with some important differences designed to optimize memory management and facilitate garbage collection. Specifically, `WeakMap` only holds weak references to its keys, which must be objects. This means that if there are no other references to an object used as a key in a `WeakMap`, the object can be garbage collected, even if it is still present in the `WeakMap`.

### Key Characteristics of `WeakMap`

1. **Keys Must Be Objects**: Unlike `Map`, where keys can be of any type, keys in a `WeakMap` must be objects.
2. **No Enumeration Methods**: `WeakMap` does not support methods to iterate over its keys, values, or entries, making it less versatile for enumeration compared to `Map`.
3. **Garbage Collection**: If an object key in a `WeakMap` is no longer referenced elsewhere in the code, it can be garbage collected, helping to manage memory usage efficiently.

### Creating a `WeakMap`

You can create a `WeakMap` and add key-value pairs to it using the `set` method, similar to `Map`.

### Example

Here’s an example demonstrating how to use a `WeakMap`:

```javascript
const wm = new WeakMap();

let obj1 = {};
let obj2 = {};

// Adding key-value pairs
wm.set(obj1, "value1");
wm.set(obj2, "value2");

console.log(wm.get(obj1)); // Output: value1
console.log(wm.get(obj2)); // Output: value2

// Checking for keys
console.log(wm.has(obj1)); // Output: true

// Removing a key-value pair
wm.delete(obj1);
console.log(wm.has(obj1)); // Output: false

// Garbage collection
obj2 = null; // Now obj2 can be garbage collected
```

### Limitations

- **No Enumeration**: `WeakMap` does not support iteration methods (`keys()`, `values()`, `entries()`, `forEach()`), which means you cannot loop through its elements directly.
- **No Size Property**: `WeakMap` does not have a `size` property because its entries can be garbage collected, making it difficult to track its size accurately.
