# Well-known symbols

Below are some well-known symbols that are predefined in JavaScript:

- **Global Symbols:**

  - `Symbol.iterator`: This symbol is used to identify the default iterator method of an iterable object. JavaScript iterators (like those used in `for...of` loops) implement this symbol and return an iterator object when you call it using `Symbol.iterator` on the iterable.

  - `Symbol.toStringTag`: This symbol is a string-valued property that specifies the default tag used by `Object.prototype.toString()` to identify the type of an object. For example, arrays have a `Symbol.toStringTag` value of `"Array"`.

  - `Symbol.hasInstance`: This symbol is used by functions (especially constructors) to define custom instanceof behavior. You can use it to control how the `instanceof` operator works for your custom objects.

- **Well-Known Symbols (Not Officially Part of the Standard):**

  - `Symbol.species`: This symbol is a convention used by some built-in constructors (like `Array` or `String`) to access the constructor function that should be used to create derived objects.

  - `Symbol.match`, `Symbol.search`, `Symbol.replace`: These symbols are used by regular expressions to define custom match, search, and replace behavior.

  - `Symbol.asyncIterator`: This symbol is used to identify the asynchronous iterator method of an async iterable object. Similar to `Symbol.iterator` but for asynchronous iteration. (Not all browsers fully support this yet)

It's important to note that while these symbols are widely used and generally safe to rely on, they are not technically part of the official JavaScript standard. However, they are very common and used by many built-in objects and libraries.

Here are some additional points to keep in mind:

- You should generally avoid creating your own global symbols as it can potentially lead to conflicts with other libraries that might use the same symbol description string.
- It's better to use symbols as private property keys for objects within your own codebase to prevent naming collisions.
