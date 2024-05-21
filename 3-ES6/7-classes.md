# Classes

## Class declaration

Classes provide a way to create blueprints for objects. They encapsulate data (properties) and behavior (methods) that define the characteristics and actions of objects.

**Structure:**

```javascript
class ClassName {
  // Constructor (optional)
  constructor(parameters) {
    // Initialize properties
    this.property1 = value1;
    this.property2 = value2;
    // ...
  }

  // Methods (functions within the class)
  methodName1(arguments) {
    // Function body
  }

  methodName2(arguments) {
    // Function body
  }

  // ... (more methods)
}
```

**Explanation:**

- `class ClassName`: Defines a new class named `ClassName`.
- `constructor(parameters)` (Optional): A special method called the constructor that is invoked when a new object (instance) is created from the class. It's typically used to initialize the object's properties with values passed as arguments.
- `this`: Refers to the current object instance being created.
- `properties`: Defined within the class body using `this.propertyName = value;` syntax. These properties represent the data associated with objects of this class.
- `methods`: Functions defined within the class body using the standard function syntax. These methods define the behavior of the objects. They can operate on the object's properties and potentially interact with other objects.

**Example:**

```javascript
class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  getName() {
    return this.name;
  }

  getYear() {
    return this.year;
  }
}

const person1 = new Person("Kodecamp", 2020);
console.log(person1.getName()); // Output: Kodecamp
console.log(person1.getYear()); // Output: 2020
```

**Key Points:**

- Classes provide a structured way to create objects.
- The constructor is used to initialize properties.
- Methods define the behavior of objects.
- You can create multiple objects (instances) from a single class.

## Constructor method

In the context of JavaScript classes, the constructor method is a special function that is invoked when a new object (instance) is created from the class. It acts as a blueprint for initializing the object's properties with starting values.

**Key Roles of the Constructor:**

- **Property Initialization:** The constructor is primarily used to assign values to the object's properties. These properties define the data associated with each instance of the class.
- **Object Setup:** You can perform any necessary setup logic within the constructor to prepare the object for its intended use.

**Structure:**

```javascript
constructor(parameters) {
  // Initialize properties using 'this' keyword
  this.property1 = value1;
  this.property2 = value2;
  // ...
}
```

**Explanation:**

- `constructor(parameters)`: The name of the method must be `constructor`. It can optionally take parameters that serve as initial values for the object's properties.
- `this`: Inside the constructor, `this` refers to the current object instance being created. You use `this` to assign values to the object's properties.

**Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const person1 = new Person("Kodecamp", 30);
person1.greet(); // Output: Hello, Kodecamp
```

**In essence, the constructor lays the groundwork for each object created from the class, ensuring they start with the appropriate initial state.**

**Optional Constructors:**

A class can exist without a constructor. In such cases, JavaScript provides a default constructor that does nothing. However, it's generally considered good practice to define a constructor explicitly to control how objects are initialized.

**Default Constructor Example:**

```javascript
class Animal {
  // No constructor defined (implicit default constructor)
}

const animal1 = new Animal();
console.log(animal1); // Output: Animal {} (empty object)
```

## Properties

In JavaScript classes, properties represent the data associated with objects created from that class. They define the internal state of the object and hold the values that reflect the object's characteristics.

**Types of Properties:**

1. **Class Properties (Introduced in ES6):**

   - Defined directly within the class body using a field declaration syntax:

     ```javascript
     class Person {
       name = "Anonymous"; // Class property with default value
       age; // Public property without default value (requires assignment during initialization)
     }
     ```

   - Properties can have default values assigned directly in the declaration.
   - They are automatically added to the object's prototype (discussed later).

2. **Constructor Properties:**

   - Defined inside the class constructor using the `this` keyword:

     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     ```

   - Values are assigned to properties using `this.propertyName = value;`.
   - They provide a way to initialize properties based on arguments passed to the constructor.

**Accessing Properties:**

- **Dot Notation:** Access properties using dot notation (`.`) on the object instance:

  ```javascript
  const person1 = new Person("Kodecamp", 4);
  console.log(person1.name); // Output: Kodecamp
  ```

- **Bracket Notation:** Access properties using bracket notation (`[]`) for dynamic property names or when the property name contains special characters:

  ```javascript
  const propertyName = "city";
  const person1 = new Person("Kodecamp", 4);
  person1[propertyName] = "Akwa Ibom";
  console.log(person1.city); // Output: Akwa Ibom
  ```

**Key Points:**

- Properties define the data held by objects of a class.
- Class properties offer a concise way to declare properties with defaults.
- Constructor properties are used for initialization during object creation.
- You can access properties using dot notation or bracket notation.

## Methods

In JavaScript classes, methods are functions defined within the class body that encapsulate the object's behavior. They operate on the object's properties and potentially interact with other objects. Methods provide the functionality that allows objects to perform actions and respond to events.

**Structure:**

```javascript
methodName(arguments) {
  // Function body using 'this' to access properties
  // ...
}
```

**Explanation:**

- `methodName`: The name you choose for the function representing the specific behavior.
- `arguments`: Optional parameters that the method can receive when it's invoked.
- `this`: Inside the method, `this` refers to the current object instance. You can use `this` to access the object's properties and invoke other methods on the same object.
- `Function body`: The code that defines the method's logic and functionality. This can involve operations on the object's properties, interacting with external data, or performing calculations.

**Example:**

```javascript
class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  getName() {
    return this.name;
  }

  getYear() {
    return this.year;
  }

  announce() {
    console.log(this.name + "4.0 is beginning in May");
  }
}

const person1 = new Person("Kodecamp", 2020);
console.log(person1.getName()); // Output: Kodecamp
person1.announce(); // Output: Kodecamp4.0 is beginning in May
```

**Types of Methods:**

- **Instance Methods:** These are the most common type of method. They are accessible on each object instance created from the class. They operate on the specific properties of the object they are called on.
- **Static Methods (Introduced in ES6):** These are defined using the `static` keyword before the method name. They are associated with the class itself, not with individual object instances. You can call them directly on the class without creating an object. Static methods are typically used for utility functions that don't rely on specific object properties.

```javascript
class _Math {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(_Math.add(5, 3)); // Output: 8 (static method call on the class)
```

**Key Points:**

- Methods define the behavior of objects.
- They can access and modify the object's properties.
- Instance methods are called on object instances, while static methods are called on the class itself.
- Methods provide the functionality for objects to interact with the world.

## Inheritance

Inheritance in JavaScript classes allows you to create new classes (subclasses) that inherit properties and methods from existing classes (parent classes). This promotes code reusability and enables you to build more complex class hierarchies.

**Core Concepts:**

- **Parent Class:** The original class that defines the base properties and methods also known as the Super Class.
- **Sub Class (Child Class):** The new class that inherits from the parent class. It can add new properties and methods or override inherited ones.

**Syntax:**

```javascript
class SubClass extends ParentClass {
  // Constructor (optional)
  // Methods (can override inherited methods)
}
```

**Explanation:**

- `SubClass extends ParentClass`: This syntax indicates that `SubClass` inherits from `ParentClass`.
- The subclass can define its constructor to handle specific initialization for its own properties.
- The subclass can define methods that extend or modify the behavior inherited from the parent class.

**Inheritance in Action:**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor to initialize name
    this.breed = breed;
  }

  makeSound() {
    console.log(
      "Woof! My name is " + this.name + ", and I am an " + this.breed + " Dog"
    );
  }
}

const animal1 = new Animal("Leo");
animal1.makeSound(); // Output: Generic animal sound

const dog1 = new Dog("Skupa", "Ekuke");
dog1.makeSound(); // Output: Woof! My name is Skupa, and I am an Ekuke Dog
```

**Key Points:**

- Subclasses inherit properties and methods from their parent class.
- Subclasses can add new properties and methods specific to their needs.
- The `super` keyword inside a subclass constructor is used to call the parent class constructor.
- Inheritance helps create class hierarchies and promotes code reusability.

**Benefits of Inheritance:**

- Code Reusability: Avoid code duplication by inheriting common properties and methods.
- Maintainability: Easier to modify behavior in subclasses without affecting the parent class.
- Readability: Class hierarchies can improve code organization and understanding.

## Super Keyword

The `super` keyword in JavaScript classes serves two main purposes within the context of inheritance:

1. **Calling the Parent Class Constructor:**

   Inside the constructor of a subclass, you can use `super()` to explicitly call the constructor of the parent class. This ensures that the parent class's initialization logic is executed before the subclass's own constructor code.

   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
       console.log("Animal created with name: " + this.name);
     }
   }

   class Dog extends Animal {
     constructor(name, breed) {
       super(name); // Call parent constructor to initialize name
       this.breed = breed;
       console.log("Dog created with breed: " + this.breed);
     }
   }

   const animal1 = new Animal("Leo");
   // Output: Animal created with name: Leo

   const dog1 = new Dog("Skuba", "Ekuke");
   ```

2. **Accessing Parent Class Methods:**

   In a subclass method, you can use `super` to call a method from the parent class. This is useful when you want to extend or modify the inherited behavior.

   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }

     makeSound() {
       console.log("Generic animal sound");
     }
   }

   class Dog extends Animal {
     constructor(name, breed) {
       super(name);
       this.breed = breed;
     }

     makeSound() {
       super.makeSound(); // Call parent's makeSound first
       console.log("Woof! My name is " + this.name);
     }
   }

   const dog1 = new Dog("Skupa", "Labrador");
   dog1.makeSound();
   // Output:
   // Generic animal sound
   // Woof! My name is Skupa
   ```

**Important Notes:**

- You can only use `super` inside a subclass constructor or method.
- When calling the parent class constructor with `super()`, it must be the first line of code within the subclass constructor.

## Getters and Setters

In JavaScript classes, getters and setters are special methods that provide controlled access to an object's properties. They offer more flexibility and potential data validation compared to directly accessing properties with dot notation.

**Getters:**

- Defined using the `get` keyword before the property name within the class body.
- Function that is executed whenever you try to access the property using dot notation (e.g., `object.propertyName`).
- The function typically returns the value of the underlying property.

```javascript
class Person {
  constructor(name) {
    this._name = name; // Use a private property convention (prefix with underscore)
  }

  get name() {
    return this._name.toUpperCase(); // Getter can modify how the value is returned
  }
}

const person1 = new Person("kode");
console.log(person1.name); // Output: KODE (getter transforms to uppercase)
```

**Setters:**

- Defined using the `set` keyword before the property name within the class body.
- Function that is executed whenever you try to assign a new value to the property using dot notation (e.g., `object.propertyName = value`).
- The function typically takes an argument representing the new value being assigned.
- The setter can perform validation or processing on the new value before storing it in the underlying property.

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  set name(newName) {
    if (newName.length < 2) {
      console.error("Name must be at least 2 characters long");
    } else {
      this._name = newName;
    }
  }
}

const person1 = new Person("kode");
person1.name = "Camp"; // No error
person1.name = "C"; // Error: Name must be at least 2 characters long
```

**Key Points:**

- Getters and setters allow for customization of property access and modification.
- Getters can transform the retrieved value before returning it.
- Setters can validate or process new values before assigning them to the property.
- They are often used in conjunction with private properties (prefixed with an underscore) to control access from outside the class.

**Benefits of Getters and Setters:**

- Data Validation: Enforce rules on the data being assigned to properties.
- Computed Properties: Getters can perform calculations or transformations on the underlying data.
- Encapsulation: Control access to properties and prevent unintended modifications.

## Class expressions

In JavaScript, class expressions offer an alternative way to define classes compared to traditional class declarations. They provide more flexibility and can be useful in certain scenarios.

**Structure:**

```javascript
const MyClass = class {
  // Constructor (optional)
  constructor(parameters) {
    // Initialize properties
  }

  // Methods
  methodName(arguments) {
    // Function body
  }
};
```

**Explanation:**

- `const MyClass = class { ... }`: The `class` keyword is used within a constant variable assignment. This creates a class expression and assigns it to the variable `MyClass`.
- The class body contains the same elements as a class declaration: constructor, properties (defined implicitly), and methods.

**Key Differences from Class Declarations:**

- **No Binding Identifier:** Unlike class declarations (`class MyClass { ... }`), class expressions don't have a binding identifier (`MyClass`) before the `class` keyword. The class name is local to the expression and cannot be referenced outside of it.
- **Hoisting:** Class expressions are not hoisted. You cannot use the class before it's defined in the code. Class declarations, on the other hand, are hoisted.

**Use Cases:**

- **Dynamic Class Creation:** When you need to create a class dynamically based on certain conditions or user input, class expressions can be helpful.

```javascript
function createClass(type) {
  if (type === "user") {
    const UserClass = class {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
    };
    return UserClass;
  } else {
    // ... other class creation logic
  }
}

const User = createClass("user");
const user1 = new User("Kode", "kode@example.com");
```

- **Higher-Order Functions:** Class expressions can be used as arguments or return values in higher-order functions that operate on classes.

```javascript
function createWrapper(BaseClass) {
  return class extends BaseClass {
    // Add wrapping functionality here
  };
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

const TalkingAnimal = createWrapper(Animal);

class Dog extends TalkingAnimal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! My name is " + this.name);
  }
}

const dog1 = new Dog("Skupa", "Labrador");
dog1.makeSound(); // Output: Woof! My name is Skupa
```

## Prototype

In JavaScript, prototypes are a fundamental concept in object-oriented programming. They establish the inheritance hierarchy and define the default properties and methods that objects inherit.

**Understanding the Prototype Chain:**

- Every object in JavaScript has a hidden property called `[[Prototype]]` (often referred to as its prototype).
- The prototype object itself also has its own prototype, and so on, forming a chain that ultimately leads to the base `Object.prototype`.
- When you try to access a property or method on an object, JavaScript follows this prototype chain to find the value.

**Property Lookup Process:**

1. **Direct Property:** If the property exists directly on the object itself, it's returned.
2. **Prototype Chain:** If the property is not found on the object, JavaScript searches the object's prototype.
3. **Prototype Chain Traversal:** This process continues up the prototype chain until the property is found or the end of the chain (the base `Object.prototype`) is reached.
4. **Not Found:** If the property is not found anywhere in the chain, `undefined` is returned.

**Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

const person1 = new Person("Kode");
person1.greet(); // Output: Hello, Kode
```

In this example:

- `Person.prototype` is the prototype object for all `Person` instances.
- The `greet` method is defined on the prototype, so all `Person` objects inherit it.

**Key Points:**

- Prototypes define the inheritance hierarchy.
- Objects inherit properties and methods from their prototype chain.
- JavaScript searches the prototype chain to resolve property access.
- You can add properties and methods to prototypes to define default behavior for objects of a class.

**Inheritance vs. Prototypal Inheritance:**

- JavaScript doesn't use traditional class-based inheritance like some other languages (e.g., Java, C++).
- Instead, it relies on a prototypal inheritance system where objects inherit from prototypes.
- Classes are syntactic sugar over prototypes, providing a more familiar way to define object blueprints.

## instanceof property

The `instanceof` operator in JavaScript is used to check whether an object is an instance of a particular class (or a class that inherits from it). It returns a boolean value (`true` or `false`).

**Functionality:**

1. **Checks Prototype Chain:** When you use `object instanceof Class`, JavaScript performs the following steps:

   - It retrieves the object's prototype (`object.[[Prototype]]`).
   - It compares this prototype with `Class.prototype`.
   - If they are the same or `Class.prototype` is found anywhere in the object's prototype chain, the result is `true`. This indicates that the object inherits from the specified class.
   - If `Class.prototype` is not found in the chain, the result is `false`.

2. **Inheritance Consideration:** The `instanceof` operator considers inheritance. If a class inherits from another class, objects created from the subclass will also return `true` when checked against the parent class using `instanceof`.

**Example:**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const animal1 = new Animal("Leo");
const dog1 = new Dog("Skupa", "Ekuke");

console.log(animal1 instanceof Animal); // Output: true
console.log(dog1 instanceof Animal); // Output: true (Dog inherits from Animal)
console.log(dog1 instanceof Dog); // Output: true
console.log(animal1 instanceof Dog); // Output: false (animal1 is not a Dog instance)
```

**Key Points:**

- `instanceof` checks if an object inherits from a specific class.
- It considers the entire prototype chain for inheritance.
- It's a useful tool for type checking and working with object hierarchies.

**Important Notes:**

- `instanceof` only works with classes, not with primitive data types like numbers or strings.
- It's generally recommended to use more robust type checking mechanisms like type assertions or TypeScript for stricter type safety.

## Class syntax vs. prototypal inheritance

**Class Syntax:**

- Introduced in ES6 (ECMAScript 2015).
- Provides a familiar class-based syntax similar to other object-oriented languages (e.g., Java, C++).
- Offers a structured way to define object blueprints with properties, constructor, and methods.
- Under the hood, classes are syntactic sugar over JavaScript's underlying prototypal inheritance system.
- Here's an example of a class defining a `Person`:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}
```

**Prototypal Inheritance:**

- The fundamental mechanism for object inheritance in JavaScript.
- Objects inherit properties and methods from their prototype objects.
- Prototype chain is established, where each object has a hidden property `[[Prototype]]` that points to its prototype object.
- You can define properties and methods directly on the prototype to create reusable behaviors for objects.
- Here's how you achieve similar functionality using prototypal inheritance:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};
```

**Key Differences:**

1. **Syntax:** Classes use a more concise and familiar class-based syntax, while prototypal inheritance relies on functions and prototype objects.
2. **Expressiveness:** Classes offer a cleaner way to define constructors and methods directly within the class body. Prototypal inheritance might require separate function definitions and assignment to the prototype.
3. **Readability:** For simpler object structures, both approaches can be readable. However, classes can improve readability for complex hierarchies with inheritance.
4. **Flexibility:** Prototypal inheritance offers more flexibility as you can dynamically create objects and modify prototypes at runtime. Class syntax is more rigid in its structure.

**In essence:**

- **Classes:** Easier to use, promotes code readability and organization, good for well-defined object structures.
- **Prototypal Inheritance:** More fundamental and flexible, offers finer control over object creation and inheritance.

**Choosing Between Them:**

- **For most modern JavaScript development, classes are the preferred approach.** They provide a clean and well-structured way to define objects and leverage inheritance.
- **Prototypal inheritance can still be useful** for understanding the underlying mechanisms, creating utility functions for object manipulation, or working with legacy code that predates classes.
