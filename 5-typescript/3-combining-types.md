# Combining types

## Union types

In TypeScript, union types allow you to define a variable or function argument that can hold one of several possible types. This provides flexibility while maintaining some level of type safety.

**Syntax:**

```typescript
let value: string | number; // Union type: string or number

value = "Hello"; // Valid (string)
value = 10; // Valid (number)
// value = true; // Error: not assignable to string or number
```

**Benefits:**

- **Flexibility:** Represent variables or function arguments that can hold different data types.
- **Improved Readability:** Can make code more explicit about the expected types.
- **Type Safety:** Prevents assigning incompatible types to the union (e.g., boolean in the example above).

**Common Use Cases:**

- **Function Arguments:** When a function can accept arguments of different types:

  ```typescript
  function formatValue(value: string | number): string {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value.toFixed(2); // Assuming value is a number
    }
  }

  let formattedString = formatValue("World"); // Valid (string)
  let formattedNumber = formatValue(3.14); // Valid (number)
  ```

- **Return Values:** When a function can return different data types based on logic:

  ```typescript
  function fetchData(): string | object {
    // Logic to fetch data (could be string or object)
  }
  ```

**Type Guards:**

- When working with union types, you might need to perform type checks (type guards) within your code to determine the actual type at runtime before accessing properties or methods:

  ```typescript
  function formatValue(value: string | number): string {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value.toFixed(2); // Type guard ensures value is a number here
    }
  }
  ```

## Intersection types

Intersection types, along with union types, are another way to combine types in TypeScript. They provide a mechanism to create a new type that inherits the properties of all the types it intersects.

**Understanding Intersection Types:**

- **Syntax:**

  ```typescript
  interface User {
    name: string;
  }

  interface Admin {
    permissions: string[];
  }

  type UserAdmin = User & Admin; // Intersection type: User & Admin

  let combined: UserAdmin = { name: "Alice", permissions: ["read", "write"] };
  ```

  In this example, `UserAdmin` is an intersection type that combines the properties of `User` and `Admin`.

- **Key Points:**

  - The resulting type (`UserAdmin`) has all the properties from both `User` and `Admin`.
  - You can intersect multiple types using the `&` operator.
  - Intersection types are useful for representing objects that share certain characteristics.

**Benefits of Intersection Types:**

- **Improved Type Safety:** Ensures a variable or function argument has all the required properties from the intersected types.
- **Readability:** Makes code more explicit about the expected structure of objects.
- **Reusability:** Can be used to create more complex types by combining existing ones.

**Use Cases:**

- **Defining Complex Object Shapes:** When you need an object to have properties from multiple interfaces or types.
- **Enforcing Specific Object Structures:** Useful for function arguments or return values that require a specific combination of properties.

**Comparison with Union Types:**

- **Union Types:** Represent a variable or function argument that can hold one of several possible types.
- **Intersection Types:** Create a new type that combines the properties of multiple existing types.

## Type aliases

In TypeScript, type aliases provide a way to create new names (aliases) for existing types. They offer several advantages for code readability, maintainability, and potentially improved documentation.

- **Syntax:**

  ```typescript
  type Age = number;
  type ProductName = string;

  let age: Age = 30;
  let productName: ProductName = "T-Shirt";
  ```

  In this example, we create type aliases `Age` and `ProductName` for the existing types `number` and `string` respectively.

- **Benefits:**

  - **Readability:** You can define more descriptive names for complex types, making your code easier to understand.
  - **Maintainability:** If the underlying type needs to change, you only modify the alias definition, keeping the rest of your code intact.
  - **Documentation:** Type aliases can serve as a form of documentation, clarifying the intended usage of specific types within your codebase.

**Use Cases:**

- **Long or Complex Types:** When you're working with lengthy or complex types, an alias can improve readability.
- **Consistent Naming:** You can establish consistent naming conventions for frequently used types across your project.
- **Abstracting Implementation Details:** Type aliases can hide the underlying implementation details of a type, focusing on its usage.

**Key Points:**

- Type aliases don't create new types; they just provide alternative names for existing ones.
- They can be used for primitive types, arrays, objects, union types, and even other type aliases.

**Example with Union Type:**

```typescript
type LoginInput = string | number; // Username or ID for login

function login(credentials: LoginInput): void {
  // Handle login logic based on the type of credentials (string or number)
}

login("alice"); // Valid (string)
login(123456); // Valid (number)
```

## Keyof operator

The `keyof` operator in TypeScript is a powerful tool for working with object types. It allows you to extract the set of all string or numeric literal keys from an object type. Here's a detailed explanation:

**Purpose:**

- The primary purpose of `keyof` is to get the union type of all the keys of an object type.
- This union type can then be used for various purposes, such as:
  - Defining generic functions that work with objects of different structures.
  - Constraining property access to only valid keys within an object.
  - Creating mapped types (a more advanced concept) based on the object's structure.

**Syntax:**

```typescript
interface Person {
  name: string;
  age: number;
  hobbies: string[]; // Array of strings
}

type PersonKeys = keyof Person; // PersonKeys is a union type: "name" | "age" | "hobbies"
```

In this example, `PersonKeys` becomes a type that represents all the possible key names (`"name"`, `"age"`, and `"hobbies"`) you can use to access properties on a `Person` object.

**Key Points:**

- `keyof` only works with object types (interfaces or objects themselves).
- The resulting union type includes only string or numeric literal keys, not symbol keys or computed property names.

**Use Cases:**

1. **Generic Functions:**

   ```typescript
   function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
     return obj[key]; // Safe access to property based on the key type
   }

   let person: Person = {
     name: "Alice",
     age: 30,
     hobbies: ["reading", "coding"],
   };
   let name = getProperty(person, "name"); // name is type string
   let age = getProperty(person, "age"); // age is type number
   ```

   This generic `getProperty` function can work with any object type (`T`) and extract a specific property based on the provided key (`K`), ensuring type safety.

2. **Constraining Property Access:**

   ```typescript
   function updatePerson(person: Person, key: PersonKeys, value: any) {
     person[key] = value; // Not type safe, value could be anything
   }

   function updatePersonSafe<K extends PersonKeys>(
     person: Person,
     key: K,
     value: Person[K]
   ) {
     person[key] = value; // Type safe, value must match the property type
   }
   ```

   The `updatePersonSafe` function ensures the `value` assigned to a property matches the expected type based on the `key`.
