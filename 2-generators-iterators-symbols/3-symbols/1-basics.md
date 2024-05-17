# Definition and explanation

In JavaScript, symbols are a primitive data type introduced in ES6 (ECMAScript 2015). They represent unique and immutable identifiers that are guaranteed not to conflict with any other variable or property name in your code. Here's a deeper look at symbols:

**Key Characteristics:**

- **Uniqueness:** Each call to `Symbol()` creates a new and unique symbol value. Even if you call `Symbol()` with the same description string (optional argument), it will still return distinct symbols.
- **Immutability:** The value of a symbol cannot be changed once created.

**Why Use Symbols:**

- **Property Keys:** Symbols are particularly useful as property keys for objects. Since they are unique, they can be used to create private or non-enumerable properties that won't clash with other property names, including those inherited from the prototype chain. This helps prevent accidental property name conflicts.

- **Global Namespace Protection:** Symbols can help avoid naming collisions in the global namespace. Since they are unique, you can use them for global constants or identifiers without worrying about conflicts with variable or property names.

- **WeakMap/WeakSet Keys:** Symbols are well-suited as keys for `WeakMap` and `WeakSet` collections. These collections allow garbage collection of the key objects when no other references to them exist.

**Creating Symbols:**

You use the `Symbol()` function to create symbols. It can optionally take a string argument as a description for debugging purposes, but this string doesn't affect the symbol's uniqueness.

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol("description");

console.log(symbol1 === symbol2); // false (guaranteed unique symbols)
```

**Using Symbols as Property Keys:**

```javascript
const person = {};
const secretPropSymbol = Symbol("secret");

person[secretPropSymbol] = "secret value";

console.log(person.secretPropSymbol); // undefined (not accessible using dot notation)

// Access using bracket notation
console.log(person[secretPropSymbol]); // "secret value"
```

**Symbol Registry:**

While not strictly necessary for uniqueness, the `Symbol.for()` function allows a global symbol registry. You can use a string to check if a symbol already exists in the registry and retrieve it, or create a new symbol with that string if it doesn't exist.

```javascript
const symbol1 = Symbol.for("sharedSymbol");
const symbol2 = Symbol.for("sharedSymbol");

console.log(symbol1 === symbol2); // true (same symbol from registry)
```
