# Rest and spread operators

## Rest parameters

Rest parameters, denoted by three dots (`...`), have already been introduced in our discussion of array destructuring. Let's recap their functionality and explore their use cases in more detail:

**Rest in Array Destructuring:**

- Captures the remaining elements of an array into a new variable.
- Used at the end of the destructuring pattern within square brackets.

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5] (remaining elements in an array)
```

**Rest Parameters in Function Arguments:**

- Gather excess arguments passed to a function into an array.
- Placed within the function's parameter list, similar to regular parameters.

```javascript
function sum(a, b, ...rest) {
  let total = a + b;
  for (const num of rest) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15 (sums all arguments)
```

**Use Cases for Rest Parameters:**

- **Handling Variable Arguments:** When a function needs to accept a varying number of arguments, rest parameters provide a clean way to capture them into an array.
- **Creating Arrays from Iterables:** You can use the rest parameter with the spread operator (`...`) to create a new array from iterable objects like strings or arguments.

```javascript
const message = "Hello";
const letters = [...message]; // Spreads string characters into an array

function greet(...people) {
  for (const person of people) {
    console.log("Hello, " + person + "!");
  }
}

greet("Kode", "Camp", "Node");
```

**Key Points:**

- Rest parameters capture excess elements/arguments into an array.
- Used in array destructuring (end of pattern) and function arguments.
- Enable functions to handle variable arguments and create arrays from iterables.

## Combining Arrays

JavaScript offers several methods to combine or merge arrays into a single array.

**1. The Spread Operator (`...`)**

The spread operator (`...`) is a versatile tool introduced in ES6 that allows you to efficiently combine arrays. It expands (or "spreads") the elements of an iterable (like an array) into individual elements within a new array or existing array literal.

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

**2. The `concat` Method**

The `concat` method is a built-in array method that returns a new array containing the merged elements. It takes the current array as the first argument and zero or more arrays (or iterable objects) as subsequent arguments to concatenate.

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = numbers1.concat(numbers2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// You can concatenate multiple arrays
const letters = ["a", "b"];
const combinedAll = numbers1.concat(numbers2, letters);
console.log(combinedAll); // Output: [1, 2, 3, 4, 5, 6, 'a', 'b']
```

**3. `Array.from` with Spread Operator**

While less common, you can combine `Array.from` with the spread operator to create a new array from existing arrays. This approach might be useful if you need to ensure a new array is always created or want to perform modifications before combining.

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = Array.from([...numbers1, ...numbers2]);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

**Choosing the Right Method:**

- **Readability and Conciseness:** For simple merging, the spread operator often provides the most readable and concise syntax, especially within array literals.
- **Method Chaining:** If you need to chain multiple array methods (like `filter` or `map`) before combining, `concat` might be more convenient as it's a method on the array object.
- **New Array vs. Modification:** If you explicitly want to create a new array without modifying the originals, `Array.from` with the spread syntax can be a good choice.

## Merging objects

Merging objects in JavaScript involves combining properties from multiple objects into a single object. Here's a breakdown of the most common methods:

**1. Spread Operator (`...`) (Shallow Merge):**

The spread operator (`...`) introduced in ES6 provides a concise way to merge objects at a shallow level. It copies all enumerable own properties from the source object(s) into the target object.

```javascript
const obj1 = { name: "Alice", age: 30 };
const obj2 = { city: "New York", job: "Software Engineer" };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
// Output: { name: "Alice", age: 30, city: "New York", job: "Software Engineer" }
```

**Important Note:**

- The spread operator performs a shallow merge. If a property in the source object is another object (nested object), only the reference to that nested object is copied, not the nested object's properties themselves.

**2. `Object.assign` Method (Shallow Merge):**

The `Object.assign` method is a built-in function that allows you to merge properties from one or more source objects into a target object. It also performs a shallow merge by default.

```javascript
const obj1 = { name: "Alice", age: 30 };
const obj2 = { city: "New York", job: "Software Engineer" };

const mergedObject = Object.assign({}, obj1, obj2); // Empty target recommended for clarity
console.log(mergedObject);
// Output: { name: "Alice", age: 30, city: "New York", job: "Software Engineer" }
```

**Key Points (Shallow Merge):**

- Both spread operator and `Object.assign` (without modifications) perform shallow merging.
- Only the top-level properties are copied. Nested objects are referenced, not deeply merged.

**3. Deep Merge with Recursive Function (Manual Approach):**

For deep merging, where you want to combine nested objects as well, you can create a custom recursive function. This function iterates through the source object(s) and copies properties recursively, ensuring all levels are merged.

```javascript
function isObject(obj) {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (isObject(source[key])) {
      // If the value is an object, merge recursively
      if (!target[key] || !isObject(target[key])) {
        target[key] = {}; // Create an empty object in the target if it doesn't exist
      }
      deepMerge(target[key], source[key]);
    } else {
      // Otherwise, copy the value
      target[key] = source[key];
    }
  }
  return target;
}

// Example usage:
const target = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

const source = {
  b: {
    c: 4,
    e: 5,
  },
  f: 6,
};

const result = deepMerge(target, source);
console.log(result);
// Output: { a: 1, b: { c: 4, d: 3, e: 5 }, f: 6 }
```

**4. Libraries (Lodash, Deepmerge):**

Several popular JavaScript libraries like Lodash and Deepmerge offer functions specifically designed for deep object merging. These functions often provide additional features like conflict resolution strategies.

**Choosing the Right Method:**

- **Shallow Merge:** If you only need to combine top-level properties, the spread operator or `Object.assign` (without modifications) are convenient options.
- **Deep Merge:** For merging nested objects, a custom recursive function or a library function is necessary.
- **Readability and Maintainability:** Consider the complexity of your objects and choose an approach that balances readability and maintainability for your codebase.

## Copying arrays and Objects

JavaScript distinguishes between copying by reference and copying by value. When you copy arrays and objects, you're essentially creating a new data structure that holds the same values.

**Copying by Reference (Primitive Values):**

Primitive data types like strings, numbers, and booleans are copied by reference in JavaScript. Assigning a primitive value to a new variable creates a new variable that points to the same value in memory.

```javascript
let num1 = 10;
let num2 = num1;

console.log(num1 === num2); // Output: true (both point to the same value in memory)

num2 = 20;

console.log(num1); // Output: 10 (num1 remains unchanged)
```

**Copying Arrays and Objects:**

Arrays and objects are reference types. When you assign an array or object to a new variable, you're creating a new variable that holds a reference to the original object in memory. Changes made to the new variable will also affect the original object.

**Incorrect (Shallow Copy) - Spread Operator (`...`) for Arrays:**

The spread operator (`...`) might seem like a complete copy for arrays, but it only creates a shallow copy at the top level. Nested elements within the array are still references.

```javascript
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(numbers === copiedNumbers); // Output: false (different references)
console.log(numbers[0] === copiedNumbers[0]); // Output: true (both reference the same value)

numbers[0] = 40;

console.log(copiedNumbers[0]); // Output: 40 (change is reflected in both)
```

**Incorrect (Shallow Copy) - Spread Operator (`...`) for Objects:**

Similarly, the spread operator for objects only copies the top-level properties by reference.

```javascript
const person = { name: "Alice", age: 30 };
const copiedPerson = { ...person };

console.log(person === copiedPerson); // Output: false (different references)
console.log(person.name === copiedPerson.name); // Output: true (both reference the same string)

person.name = "Bob";

console.log(copiedPerson.name); // Output: Bob (change is reflected in both)
```

**Correct Methods for Copying Arrays and Objects:**

1. **Slice Method for Arrays:**

The `slice` method of arrays creates a new array containing a shallow copy of a portion of the original array (or the entire array if no arguments provided).

```javascript
const numbers = [1, 2, 3];
const copiedNumbers = numbers.slice();

console.log(numbers === copiedNumbers); // Output: false (different references)
console.log(numbers[0] === copiedNumbers[0]); // Output: true (both reference the same value)

numbers[0] = 40;

console.log(copiedNumbers[0]); // Output: 1 (change is not reflected in the copy)
```

2. **`Array.from` with Spread Operator:**

This approach combines `Array.from` with the spread operator to ensure a new array is created and properties are copied by value.

```javascript
const numbers = [1, 2, 3];
const copiedNumbers = Array.from([...numbers]);

console.log(numbers === copiedNumbers); // Output: false (different references)
console.log(numbers[0] === copiedNumbers[0]); // Output: true (both reference the same value initially)

numbers[0] = 40;

console.log(copiedNumbers[0]); // Output: 1 (change is not reflected in the copy)
```

3. **Recursive Function for Deep Object Copying:**

For deep copying of objects (including nested objects), you can create a custom recursive function that iterates through the object and copies properties at all levels.

**Check merging objects**

## Passing Arrays as arguments

In JavaScript, when you pass an array as an argument to a function, it behaves differently than passing primitive values (like numbers or strings).

**Passing by Reference:**

JavaScript uses pass-by-reference for arrays. This means that when you pass an array as an argument to a function, the function receives a reference (or pointer) to the original array in memory, not a copy of the array itself.

```javascript
function modifyArray(arr) {
  arr.push(100); // Modifying the array passed as an argument
}

const numbers = [1, 2, 3];
modifyArray(numbers);

console.log(numbers); // Output: [1, 2, 3, 100] (original array is modified)
```

**Implications of Pass-by-Reference:**

- **Changes Made Within the Function Persist:** Any modifications you make to the array elements inside the function will be reflected in the original array because they both point to the same data in memory.
- **Accidental Modifications:** This behavior can be useful for functions that intend to modify the original array. However, it can also lead to unexpected changes if you're not careful.

**Avoiding Unintended Modifications:**

If you don't want the function to modify the original array, there are a few approaches:

1. **Slice Method:**

You can use the `slice` method of arrays to create a copy of the original array before passing it to the function. This ensures that any modifications happen on the copy, leaving the original array intact.

```javascript
function modifyArray(arr) {
  arr.push(100);
}

const numbers = [1, 2, 3];
const copy = numbers.slice(); // Create a copy using slice
modifyArray(copy);

console.log(numbers); // Output: [1, 2, 3] (original array remains unchanged)
console.log(copy); // Output: [1, 2, 3, 100] (modifications happen on the copy)
```

2. **Spread Operator (`...`) (for Simple Cases):**

In ES6, the spread operator (`...`) can be used to create a shallow copy of an array within a function's argument list. This approach is simpler for basic modifications, but be aware that it only copies top-level elements. Nested arrays within the original array would still be references.

```javascript
function modifyArray(arr) {
  arr.push(100);
}

const numbers = [1, 2, 3];
modifyArray([...numbers]); // Spread operator for shallow copy

console.log(numbers); // Output: [1, 2, 3] (original array remains unchanged)
```
