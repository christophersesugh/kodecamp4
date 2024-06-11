# Typescript types

## Primitive types

In TypeScript, primitive types represent the most basic building blocks for data.

**1. String:**

- Represents textual data enclosed in single quotes (`'`) or double quotes (`"`).
- Examples:
  ```typescript
  let name: string = "Kodecamp";
  let message: string = "Hello, world!";
  ```

**2. Number:**

- Encompasses both integers (whole numbers) and floating-point numbers (decimals).
- Examples:
  ```typescript
  let age: number = 30;
  let pi: number = 3.14159;
  ```

**3. Boolean:**

- Represents logical truth values, either `true` or `false`.
- Examples:
  ```typescript
  let isLoggedIn: boolean = true;
  let hasPermission: boolean = false;
  ```

**4. Symbol:**

- A unique and immutable identifier used primarily as object property keys.
- Useful for creating private properties or preventing accidental property name collisions.
- Example:
  ```typescript
  const uniqueSymbol = Symbol("customSymbol");
  ```

**5. Null and Undefined:**

- These represent the absence of a value.
- Use `null` to explicitly indicate no value is assigned.
- `undefined` is the default value for declared variables without an initial assignment.
- Examples:
  ```typescript
  let absentValue: null = null; // Intentionally no value
  let maybeValue: string; // Initially undefined
  ```

**6. void:**

- `void` isn't a primitive type itself, but rather a special type that signifies the absence of a meaningful return value from a function.
- It's used in function declarations to indicate the function doesn't explicitly return a value.
- However, a function marked with `void` can still contain internal logic or side effects (e.g., console logs, modifying external variables).
- Example:

  ```typescript
  function printMessage(message: string): void {
    console.log(message);
  }

  printMessage("Hello!"); // This function doesn't return anything (void)
  ```

## Object types

Absolutely, these are all important aspects of object-oriented programming in TypeScript! Let's explore each one in detail:

**1. Interfaces:**

- Interfaces act as blueprints for defining the structure of objects.
- They specify the properties and optional methods an object must adhere to.
- Interfaces promote code reusability and maintainability.

**Syntax:**

```typescript
interface User {
  name: string;
  age: number;
  greet(message: string): string; // Optional method with signature
}
```

**Explanation:**

- We define an interface named `User`.
- It specifies two properties: `name` (string) and `age` (number).
- An optional method `greet` is defined, taking a `message` (string) and returning a string.

**Using Interfaces:**

```typescript
class Customer implements User {
  // Class implementing the interface
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(message: string): string {
    return `Hello, ${message}! My name is ${this.name}.`;
  }
}

const customer1 = new Customer("Kodecamp", 30);
console.log(customer1.greet("World")); // Valid usage
```

**Key Points:**

- Interfaces define what an object should look like, but they don't provide implementation details.
- Classes can implement interfaces, ensuring they provide the required properties and methods.

**2. Classes:**

- Classes are blueprints for creating objects.
- They encapsulate data (properties) and behavior (methods) within a single construct.

**Syntax:**

```typescript
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // Method to apply a discount
  discount(percentage: number): number {
    return this.price * (1 - percentage / 100);
  }
}
```

**Explanation:**

- We define a class named `Product` with two properties: `name` and `price`.
- The `constructor` is a special method that gets called when creating a new object (instance) of the class.
- The `discount` method demonstrates a class behavior.

**Using Classes:**

```typescript
const book = new Product("The Lord of the Rings", 20);
console.log(book.discount(10)); // Applying discount
```

## Other types

Absolutely, these are general purpose types in TypeScript that offer various functionalities:

1. **any:**

   - Represents a type that can hold any value.
   - Essentially bypasses type checking, making it less type-safe but sometimes useful for specific scenarios.

   **Use Cases:**

   - Interacting with third-party libraries that don't have proper type definitions.
   - Handling dynamic data of unknown structure at runtime (rarely recommended).

   **Example:**

   ```typescript
   let userInput: any = prompt("Enter a value:"); // User input can be anything
   console.log(typeof userInput); // Output depends on the user's input
   ```

   **Caution:**

   - Excessive use of `any` undermines the benefits of type safety in TypeScript.
   - Use it judiciously and only when absolutely necessary.

2. **object:**

   - Represents a generic object type, encompassing any object in your codebase.
   - Less strict than specific object types but still offers some type checking.

   **Use Cases:**

   - When you need to interact with an object but its exact structure is unknown or flexible.
   - As a base type for interfaces or classes that inherit common properties.

   **Example:**

   ```typescript
   function processData(data: object) {
     if ("name" in data) {
       // Check if a specific property exists (optional)
       console.log("Name:", data.name);
     }
   }

   processData({ name: "Kodecamp", age: 30 }); // Valid object
   ```

3. **unknown:**

   - Represents a type that holds an unknown value at compile time.
   - Introduced in TypeScript 3.0 for better handling of dynamic data.

   **Use Cases:**

   - As a function parameter type when the function expects a value of unknown type.
   - As a return type for functions that might return different data types at runtime.

   **Example:**

   ```typescript
   function fetchData(url: string): unknown {
     // Fetch data from the URL (data type could be anything)
     return /* fetched data */;
   }

   let someData = fetchData("https://api.example.com/data");

   // You cannot directly access properties of `someData` because its type is unknown
   // You need to perform additional checks or type assertions (careful!) before using it.
   ```

4. **never:**

   - Represents a type that has no possible values.
   - Often used in function return types to indicate the function never returns normally.

   **Use Cases:**

   - Function return types for functions that throw exceptions or never reach an end point (e.g., infinite loops).
   - Conditions that can never be true (rarely used directly).

   **Example:**

   ```typescript
   function error(message: string): never {
     throw new Error(message);
   }

   error("This is an error!"); // Function never returns

   // This line below would cause a compile-time error because the function never returns
   // let result = error("Something went wrong");
   ```

## Enumerations (enums), Arrays, and Tuples in TypeScript

Let's delve into these fundamental data structures in TypeScript:

**1. Enumerations (enums):**

- Enums define a set of named constants representing specific values.
- They improve readability and maintainability compared to using raw numbers.

**Syntax:**

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: 2
```

**Explanation:**

- We define an enum named `Color` with three constants: `Red`, `Green`, and `Blue`.
- By default, constants start from 0, but you can assign explicit numeric values.
- We assign `Color.Green` to `favoriteColor`, which is a type-safe way to store color choices.

**2. Arrays:**

- Arrays represent ordered collections of items, all of the same or compatible types.
- Use square brackets `[]` to declare and access elements.

**Syntax:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let colors: string[] = ["red", "green", "blue"]; // Array of strings

console.log(numbers[2]); // Output: 3 (accessing the third element)
```

**Key Points:**

- You can specify the type of elements within the square brackets (e.g., `number[]` for an array of numbers).
- TypeScript offers generic arrays using angle brackets (`<>`) for more flexibility (covered later).

**3. Tuples:**

- Tuples are a fixed-length array where each element has a specific type.
- Provide strong type safety for arrays with a predefined structure.

**Syntax:**

```typescript
let person: [string, number] = ["Kodecamp", 30]; // Tuple with string and number

console.log(person[0]); // Output: "Kodecamp" (accessing the first element)

// Error: Assigning an incompatible type
// person[0] = 10; // This would cause a compile-time error
```

**Explanation:**

- We define a tuple named `person` with two elements: a string (name) and a number (age).
- Trying to assign an incompatible type (number) to the first element (string) results in a compile-time error.

**Key Points:**

- Tuples enforce type safety and structure for arrays with a predefined format.
- Use them when you need arrays with a specific element order and types.

**Choosing Between Arrays and Tuples:**

- Use arrays when you need a collection of items that might grow or change types dynamically.
- Use tuples when you have a fixed-length array with a specific structure and element types.

## Assertions

**1. `as const`:**

- **Purpose:** Primarily used with arrays and objects to mark them as immutable (read-only).
- **Benefits:**
  - Improves type safety by preventing accidental modification of the values.
  - Enables reasoning about the specific literal values within the array or object.
- **Syntax:**

  ```typescript
  let numbers = [1, 2, 3] as const;
  let person = { name: "Kodecamp", age: 30 } as const;
  ```

  **Example:**

  ```typescript
  numbers[0] = 10; // This would cause a compile-time error because the array is read-only
  ```

- **Note:** `as const` doesn't actually modify the data immutability at runtime. It primarily affects type checking during compilation.

**2. `as [type]`:**

- **Purpose:** Casts an array or tuple to a specific type array or tuple.
- **Use Cases:**
  - When you have an array with a mix of types but want to treat it as a specific type array for a particular operation.
  - Less common than `as const` but can be useful in specific scenarios.
- **Syntax:**

  ```typescript
  let items: any[] = ["apple", 10, true];
  let stringItems = items as string[]; // Casts to a string array (may cause errors if types don't match)
  ```

**Important:**

- `as [type]` can introduce type errors if the actual elements in the array don't match the specified type.
- Use it cautiously and only when you're confident about the underlying data types.

**3. `as any`:**

- **Purpose:** Bypasses type checking altogether, essentially treating the value as type `any`.
- **Use Cases (Limited):**
  - Interacting with third-party libraries that lack proper type definitions.
  - Handling highly dynamic data of unknown structure at runtime (rarely recommended).
- **Caution:**
  - Excessive use of `as any` undermines the core benefits of type safety in TypeScript.
  - Use it sparingly and only when absolutely necessary.

**Choosing the Right Assertion:**

- Use `as const` when you want to ensure immutability and reason about specific literal values in arrays or objects.
- Use `as [type]` cautiously for specific type casting scenarios when you're confident about the underlying data.
- Use `as any` as a last resort, prioritizing type safety whenever possible.

## Non-null assertion

The non-null assertion operator, denoted by an exclamation mark (`!`), is a common assertion used in TypeScript to tell the compiler that a variable or expression you're working with is guaranteed to have a value and is not `null` or `undefined`.

- **Syntax:**

  ```typescript
  let str: string = "Hello";
  let maybeValue: string | null = "World";

  console.log(str!); // Safe to use, str is initialized with a value
  console.log(maybeValue!); // Potentially risky, maybeValue could be null
  ```

  In the first example, `str!` is safe because `str` is initialized with a string value.
  In the second example, `maybeValue!` is riskier. If `maybeValue` actually happens to be `null` at runtime, using the non-null assertion will lead to a runtime error.

- **Purpose:**

  - **Overriding Type Checking:** The primary use case is to inform the compiler that you're certain a variable has a value, even if the type allows for `null` or `undefined`.
  - **Improving Code Readability:** In some cases, the assertion can make your code more readable by explicitly stating your intent.

- **Cautions:**

  - **Not a Runtime Safety Guarantee:** It doesn't magically prevent your code from encountering `null` or `undefined` at runtime. It only affects type checking during compilation.
  - **Potential Errors:** Using it on a variable that might actually be `null` can lead to runtime errors.

- **Alternatives:**

  - **Nullish Coalescing Operator (??):** This operator (`??`) provides a safer way to handle optional values. It returns the left-hand side operand if it's not nullish (`null` or `undefined`), otherwise it returns the right-hand side operand.
  - **Type Guards:** You can use type guards (functions or conditions) to verify the type of a variable at runtime before accessing its properties or methods.

**When to Use Non-Null Assertion:**

- When you're working with a variable that you have strong confidence will never be `null` or `undefined` based on your program logic (use with caution).
- In some cases, it can improve readability by making your code's intent clearer (be mindful of potential risks).

## satisfies keyword

The `satisfies` keyword in TypeScript is a relatively new addition (introduced in version 4.9) that allows you to verify if a type or expression adheres to a specific condition or interface. It provides more flexibility in type checking compared to traditional type assignments.

- **Syntax:**

  ```typescript
  type Colors = "red" | "green" | "blue";
  type RGB = [red: number, green: number, blue: number];

  const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255],
    // ~~~~ The typo is now caught!
  } satisfies Record<Colors, string | RGB>;

  // Both of these methods are still accessible!
  const redComponent = palette.red[0];
  const greenNormalized = palette.green.toUpperCase();
  ```

- **Purpose:**

- **Verifying Type Compatibility:** It allows you to check if a value or expression fulfills the requirements of an interface or type condition without necessarily assigning it to a specific type.
- **Handling Dynamic Data:** Useful for working with dynamic data where the exact type might not be known upfront.

- **Benefits:**

- **Improved Type Safety:** Ensures you're only accessing properties or methods that are guaranteed to exist on the value.
- **Flexibility:** Enables more dynamic type checks compared to strict type assignments.

- **Key Points:**

- `satisfies` doesn't change the actual type of the variable.
- It's primarily used for conditional checks within your code.

**Use Cases:**

- **Validating Function Arguments:** You can use `satisfies` to ensure function arguments meet specific criteria beyond their declared types.
- **Working with Third-Party Libraries:** It can be helpful when interacting with libraries that don't have strict type definitions.

## Type inference

Type inference is a fundamental feature in TypeScript that allows the compiler to automatically deduce the data type of variables, function arguments, and return values based on their initialization or usage.

**Benefits of Type Inference:**

- **Conciseness:** You don't need to explicitly declare the type for every variable, making your code cleaner and easier to read.
- **Maintainability:** As your code evolves, the compiler automatically updates inferred types, reducing the need for manual type changes.
- **Type Safety:** While type inference offers flexibility, TypeScript still enforces type safety, preventing errors like assigning a string value to a variable that should hold a number.

**How Type Inference Works:**

The compiler analyzes the value assigned to a variable or the expression used in a function to determine its type. Here are some common scenarios:

- **Initializing with a Literal Value:**

  ```typescript
  let name = "Kodecamp"; // Inferred type: string
  let age = 30; // Inferred type: number
  ```

- **Using Built-in Types:**

  ```typescript
  let isLoggedIn: boolean = true; // Explicit type declaration (can be inferred)
  let items: string[] = ["apple", "banana"]; // Inferred type: string[] (array of strings)
  ```

- **Function Arguments and Return Values:**

  ```typescript
  function greet(name: string): string {
    // Inferred return type: string
    return "Hello, " + name + "!";
  }

  let message = greet("Bob"); // Inferred type of message: string
  ```

**Limitations of Type Inference:**

- **Complex Scenarios:** In some cases, the compiler might not be able to infer the exact type due to complex logic or dynamic data. You might need to provide explicit type annotations.
- **Readability:** Sometimes, explicitly declaring types can improve code readability, especially for complex variables or functions.

**Best Practices:**

- **Leverage Type Inference:** Take advantage of type inference for simple cases to keep your code concise.
- **Use Explicit Annotations When Needed:** When the compiler can't infer the type clearly, or for better readability, use explicit type annotations.
- **Maintain Consistent Style:** Develop a consistent style for using type annotations in your project to enhance code clarity.

**In Conclusion:**

Type inference is a powerful tool in TypeScript that simplifies development. However, it's crucial to understand its limitations and use explicit type annotations when necessary. Striking a balance between conciseness and type safety leads to well-structured and maintainable TypeScript code.

## Type compatibility

In TypeScript, type compatibility determines whether a value of one type can be used in a context that expects a different type. It's a core concept that ensures type safety and prevents errors during compilation.

**Principles:**

- **Structural Typing:** TypeScript uses structural typing, meaning compatibility is based on the structure (properties and methods) of the types, not just their names.
- **Assignment Compatibility:** A type A is considered assignable to type B if a value of type A can be assigned to a variable of type B without causing a type error.

**Factors Affecting Compatibility:**

- **Same Types:** The most basic case - two identical types are fully compatible (e.g., `string` is compatible with `string`).
- **Subtypes:** A subtype inherits all the properties and methods of its supertype. A value of a subtype can be assigned to a variable of its supertype (e.g., `number` is a subtype of `any`, so a `number` can be assigned to an `any` variable).
- **Interfaces and Classes:** A class or object is compatible with an interface if it implements all the required properties and methods defined in the interface.
- **Union Types:** A type can be a union of multiple other types (e.g., `string | number`). A value is compatible with a union type if it's compatible with any of the individual types within the union.

**Examples:**

- **Compatible:**

  ```typescript
  let name: string = "Kodecamp"; // Assigning string to a string variable
  let age: number = 30; // Assigning number to a number variable
  interface Person {
    name: string;
    age: number;
  }
  class Employee implements Person {
    name = "";
    age = 0;
  } // Class implementing interface

  let person: Person = new Employee(); // Assigning instance of compatible class
  ```

- **Incompatible:**

  ```typescript
  let num: number = "10"; // String cannot be assigned to a number variable
  let str: string = 30; // Number cannot be assigned to a string variable
  ```

**Understanding 'any'**:

- The `any` type bypasses type checking altogether. It's generally discouraged as it undermines type safety. Use it cautiously and only when absolutely necessary (e.g., interacting with third-party libraries without proper type definitions).
