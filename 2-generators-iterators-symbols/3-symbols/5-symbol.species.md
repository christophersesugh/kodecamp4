# Symbol.species

`Symbol.species` is a well-known symbol in JavaScript that's primarily used by built-in constructors (like `Array` or `String`) under certain circumstances. Here's a breakdown of its functionality:

**Purpose:**

- `Symbol.species` is a property on the built-in `Symbol` object. It represents a unique symbol value.
- This symbol acts as a hint for a constructor function to specify which constructor should be used when creating derived objects (like subclasses extending built-in constructors).

**Default Behavior vs. Using `Symbol.species`:**

- By default, when you call a constructor function (like `new Array()` or `new String()`) to create a new instance, the constructor itself is used.
- However, with `Symbol.species`, a constructor can provide a way to override this default behavior and specify a different constructor to be used for creating derived objects.

**Example (without `Symbol.species`):**

```javascript
class MyArray extends Array {
  // ... (your class definition)
}

const myArray = new MyArray(1, 2, 3);
console.log(myArray instanceof MyArray); // true (default behavior)
console.log(myArray instanceof Array); // true (also inherits from Array)
```

In this example:

- `MyArray` inherits from `Array`.
- Creating a new `myArray` instance using `new MyArray()` results in an object that is both a `MyArray` and an `Array` (default behavior).

**Example (using `Symbol.species`):**

```javascript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
  // ... (your class definition)
}

const myArray = new MyArray(1, 2, 3);
console.log(myArray instanceof MyArray); // true
console.log(myArray instanceof Array); // false (Symbol.species overrides)
```

Here, we've modified the `MyArray` class:

- We define a static getter property named `Symbol.species`.
- This getter returns the `Array` constructor.
- When you create a new `myArray` instance, `Symbol.species` hints to use the `Array` constructor for object creation. This results in an object that's only a `MyArray` and not an `Array`.

**Use Cases:**

- `Symbol.species` can be helpful in specific scenarios where you want to control how derived objects are created from built-in constructors.
- For example, you might use it to ensure that subclasses always return instances of their own class when methods like `slice()` or `map()` are called on them (which often return new arrays by default).

**Important Considerations:**

- Using `Symbol.species` can add complexity to your code. It's generally not necessary for most everyday use cases.
- Be cautious when overriding the default behavior, as it might affect how your derived objects interact with built-in methods or other code that relies on the expected type of the object.
