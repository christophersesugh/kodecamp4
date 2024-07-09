Types and interfaces are both fundamental concepts in TypeScript for defining the structure of data. While they share similarities, there are some key distinctions to consider when choosing between them:

**Similarities:**

- Both can be used to describe the properties and methods that an object should have.
- They improve code readability and maintainability by documenting the expected structure of your data.
- They can be used for type checking to ensure data used in your code conforms to the defined structure.

**Differences:**

1. **Shape vs. Implementation:**

   - **Types:** Define the **shape** (properties and methods) of data but don't provide implementation details.
   - **Interfaces:** Define the **contract** for an object, specifying the properties, methods, and their types, but also allowing for optional implementation details.

2. **Extensibility:**

   - **Types:** Can't be extended with additional properties or methods.
   - **Interfaces:** Can be extended to inherit properties and methods from other interfaces, promoting code reuse. (This uses the `extends` keyword)

3. **Implicit vs. Explicit Index Signatures:**
   - **Types:** Have implicit `Record<PropertyKey, unknown>` index signatures, allowing any type of property to be added at runtime (generally discouraged due to potential type safety issues).
   - **Interfaces:** Don't have implicit index signatures by default. You can explicitly define them if needed for specific use cases.

**Choosing Between Types and Interfaces:**

- **Use types:**
  - For simple data shapes where implementation details are not important.
  - For aliasing complex types to improve readability.
- **Use interfaces:**
  - When you want to define contracts for objects with potential future implementations.
  - To promote code reusability through inheritance.
  - For stricter type checking by avoiding implicit index signatures.

**Example:**

```typescript
// Using a type alias
type PersonType = { name: string; age: number };

let person1: PersonType = { name: "Kodecamp", age: 30 };

// Using an interface
interface Animal {
  name: string;
  makeSound(): void; // Abstract method (no implementation details)
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Woof!");
  }
}

let dog1 = new Dog("Ekuke");
```

## Extending interfaces

In TypeScript, extending interfaces allows you to create a hierarchical relationship between them. This promotes code reuse and improves maintainability by building upon existing interface definitions.

**Concept:**

- You can use the `extends` keyword to declare that an interface inherits properties and methods from another interface.
- The child interface (the one extending) can add its own properties and methods to the inherited structure.

**Syntax:**

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  // Dog inherits from Animal
  breed: string;
  wagTail(): void;
}

let dog: Dog = {
  name: "Ekuke",
  breed: "Labrador",
  makeSound: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging tail!"),
};
```

**Benefits:**

- **Code Reusability:** By extending interfaces, you can avoid code duplication when defining common properties and methods for related objects.
- **Improved Organization:** Interface inheritance helps structure your codebase logically, grouping related interfaces together.
- **Type Safety:** Ensures objects implementing the child interface adhere to the combined properties and methods from both the parent and child interfaces.

**Key Points:**

- An interface can extend multiple interfaces using a comma-separated list after the `extends` keyword.
- You cannot add optional properties to required properties inherited from a parent interface.
- Methods inherited from parent interfaces must maintain the same signature (name and parameter/return types) in the child interface.

**Example with Multiple Inheritance:**

```typescript
interface Person {
  name: string;
  introduce(): void;
}

interface Singer {
  singSong(): void;
}

interface SingerSongwriter extends Person, Singer {
  // Inherits from both Person and Singer
  writeSong(): void;
}

let performer: SingerSongwriter = {
  // Implement all inherited methods from Person and Singer
  name: "Taylor",
  introduce: () => console.log("Hi, I'm Eminem"),
  singSong: () => console.log("Singing a song"),
  writeSong: () => console.log("Writing a new song"),
};
```

## interface declaration

In TypeScript, interfaces are a fundamental way to define the structure of objects. They act like blueprints, specifying the properties (and optionally methods) that an object should have. Here's a breakdown of interface declarations:

**Structure:**

```typescript
interface InterfaceName {
  property1: type1;
  property2: type2;
  // ... other properties
  method1?(parameters): returnType; // Optional method with optional parameters
  method2(parameters): returnType; // Required method
}
```

- `InterfaceName`: The name you choose for your interface.
- `property1`, `property2`, etc.: Names of the properties the object should have.
- `type1`, `type2`, etc.: Data types of the corresponding properties (e.g., `string`, `number`, `object`).
- `method1?`: Makes the method optional (can be present or absent in the implementing object).
- `parameters`: Optional list of parameters the method takes (and their types).
- `returnType`: The data type of the value the method returns.

**Example:**

```typescript
interface Person {
  name: string;
  age: number;
  greet(): string; // Method with no parameters and string return type
}

let person: Person = {
  name: "Kodecamp",
  age: 30,
  greet() {
    return "Hello, my name is " + this.name;
  },
};

console.log(person.greet()); // Output: Hello, my name is Kodecamp
```

**Key Points:**

- Interfaces define the structure, not the implementation. You can have separate classes or objects that implement the interface.
- Properties in interfaces can be marked as optional using a question mark (`?`).
- Methods can also be optional and can have optional parameters.
- TypeScript enforces type safety when using interfaces. When accessing properties or calling methods on an object implementing the interface, the types must match the interface definition.

**Benefits of Using Interfaces:**

- **Improved Type Safety:** Ensures objects adhere to a defined structure, preventing type errors.
- **Enhanced Readability:** Makes code more understandable by documenting the expected structure of objects.
- **Better Maintainability:** Promotes code reuse and easier modification of object structures.

## Hybrid types

In TypeScript, hybrid types are a combination of multiple existing types to create a new, more complex type. They offer flexibility in defining what values a variable or property can hold. There are two primary ways to create hybrid types:

1. **Union Types:**

   - Syntax: `type HybridType = Type1 | Type2 | ... | TypeN`
   - Combines multiple types using the pipe (`|`) operator.
   - A variable with a union type can hold a value of any of the specified types.

   ```typescript
   type LoginInput = string | number; // Username or ID for login

   function login(credentials: LoginInput): void {
     // Handle login logic based on the type of credentials (string or number)
   }

   login("Kodecamp"); // Valid (string)
   login(123456); // Valid (number)
   ```

   In this example, `LoginInput` is a union type that allows either a string or a number for login credentials.

2. **Interfaces with Function Types:**

   - Combines object properties with a function signature within an interface definition.
   - Allows an object to have both data and functionality.

   ```typescript
   interface Product {
     name: string;
     price: number;
     calculateDiscount(discount: number): number; // Method definition
   }

   let product: Product = {
     name: "Shoes",
     price: 20,
     calculateDiscount(discount: number) {
       return this.price * (1 - discount);
     },
   };

   console.log(product.calculateDiscount(0.1)); // Output: 18 (price with 10% discount)
   ```

   Here, the `Product` interface defines properties for `name` and `price`, along with a `calculateDiscount` method.

**Key Points:**

- Union types are simpler for combining basic types.
- Interfaces with function types are more versatile for defining objects with properties and behaviors.
- TypeScript performs type checks for union types, ensuring the assigned value matches one of the allowed types.

**When to Use Hybrid Types:**

- Union types are useful when a variable can hold different but related types (e.g., login credentials).
- Interfaces with function types are suitable for defining objects that encapsulate data and functionality together (e.g., products with discount calculations).
