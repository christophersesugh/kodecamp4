## Constructor params

In TypeScript, classes are a fundamental way to define object-oriented constructs. Constructors play a vital role in class initialization by setting up the initial state of an object.

**Understanding Constructors:**

- A constructor is a special method in a class that is called when you create a new instance of the class (using the `new` keyword).
- Its primary purpose is to initialize the object's properties with starting values.

**Constructor Parameters:**

- Constructors can have parameters that specify the data you want to provide when creating a new object.
- These parameters define the types of properties the class will have.

**Syntax:**

```typescript
class Person {
  constructor(public name: string, private age: number) {
    // Constructor body (optional logic for initialization)
  }
}

let person1 = new Person("Alice", 30); // person1 is a Person object
```

**Explanation:**

- The `Person` class has a constructor that takes two parameters:
  - `name` (public): Accessible from outside the class.
  - `age` (private): Only accessible within the class and its subclasses.
- When you create a new `Person` object (`person1`), you provide values for these parameters during initialization.

**Key Points:**

- Constructor parameters establish the types of the object's properties.
- You can use access modifiers (public, private, protected) to control access to the properties from outside the class.
- The constructor body can optionally include logic to perform actions during object creation (e.g., validation, setting default values).

**Default Parameter Values:**

```typescript
class Product {
  constructor(public name: string, price: number = 10) {
    this.price = price; // Set default price if not provided during object creation
  }
}

let product1 = new Product("T-Shirt"); // price defaults to 10
let product2 = new Product("Laptop", 500); // price set to 500
```

In this example, the `Product` constructor has a default value (`10`) for the `price` parameter.

## Constructor overloading

In TypeScript, constructor overloading allows you to define multiple constructors with different parameter lists for a single class. This provides flexibility in how you create instances of the class, catering to different initialization scenarios.

**Why Constructor Overloading?**

- **Multiple Initialization Options:** You can create objects with varying amounts of data or different data types during initialization.
- **Improved Readability:** Overloaded constructors can make class usage more intuitive by offering clear ways to provide necessary data.
- **Type Safety:** Each constructor signature maintains type checking for its specific parameters.

**Syntax:**

```typescript
class Point {
  constructor(x: number, y: number); // First constructor signature
  constructor(x: number); // Second constructor signature (optional y)
}
```

**Explanation:**

- The `Point` class defines two constructors:
  - The first takes two parameters (`x` and `y`) for a complete 2D point.
  - The second takes only one parameter (`x`), assuming a point on the X-axis (optional `y` with default value possible).

**Using Overloaded Constructors:**

```typescript
let point1 = new Point(3, 4); // Uses first constructor (full coordinates)
let point2 = new Point(5); // Uses second constructor (X-axis point)
```

**Key Points:**

- Overloaded constructors must have different numbers or types of parameters to be valid.
- The compiler determines which constructor to call based on the number and types of arguments provided during object creation.
- You cannot have a default constructor (constructor with no parameters) alongside overloaded constructors.

**Example with Default Values:**

```typescript
class User {
  constructor(public name: string, age?: number) {
    this.age = age || 0; // Set default age to 0 if not provided
  }
}

let user1 = new User("Kode", 30);
let user2 = new User("Camp"); // Age defaults to 0
```

## Access modifiers

Certainly! Access modifiers in TypeScript classes control the visibility and accessibility of properties and methods within the class and its subclasses. Here's a detailed breakdown of the three primary access modifiers:

1. **Public:**

   - Members (properties and methods) declared as public are accessible from anywhere in your code, including outside the class, its subclasses, and different files in your project.
   - Syntax: `public propertyName: type;` or `public methodName(parameters): returnType;`
   - Example:

     ```typescript
     class Person {
       public name: string;

       constructor(name: string) {
         this.name = name;
       }

       public greet() {
         console.log("Hello, my name is " + this.name);
       }
     }

     let person1 = new Person("Kodecamp");
     person1.greet(); // Accessing public members from outside the class
     ```

2. **Private:**

   - Members declared as private are only accessible from within the class itself. They are not inherited by subclasses and cannot be accessed from outside the class.
   - Syntax: `private propertyName: type;` or `private methodName(parameters): returnType;`
   - Example:

     ```typescript
     class User {
       private age: number;

       constructor(age: number) {
         this.age = age;
       }

       public getAge() {
         // Public method to access private property
         return this.age;
       }
     }

     let user1 = new User(30);
     // user1.age; // This would cause an error (age is private)
     console.log(user1.getAge()); // Accessing private member through a public method
     ```

3. **Protected:**

   - Members declared as protected are accessible from within the class itself and also from its subclasses. They are not accessible from outside the class hierarchy.
   - Syntax: `protected propertyName: type;` or `protected methodName(parameters): returnType;`
   - Example (Inheritance scenario):

     ```typescript
     class Animal {
       protected name: string;

       constructor(name: string) {
         this.name = name;
       }

       public makeSound() {
         console.log("Generic animal sound");
       }
     }

     class Dog extends Animal {
       public bark() {
         console.log(this.name + " says Woof!"); // Accessing protected property from subclass
       }
     }

     let dog1 = new Dog("Fido");
     dog1.bark(); // Output: Fido says Woof!
     ```

**Choosing the Right Access Modifier:**

- Use `public` for members that need to be accessed from outside the class (e.g., for interaction with other parts of your code).
- Use `private` for members that are only used internally by the class and don't need external access (e.g., implementation details).
- Use `protected` for members that should be accessible from subclasses but not from outside the class hierarchy (e.g., shared functionality between related classes).

## Abstract classes

In TypeScript, abstract classes are a fundamental concept for creating blueprints for classes with incomplete implementations. They define the overall structure and expected behaviors but leave some details to be filled in by subclasses.

**Purpose:**

- Abstract classes serve as templates for related classes.
- They define the common properties and methods that subclasses must implement.
- They cannot be directly instantiated (you cannot create objects directly from an abstract class).

**Structure:**

- An abstract class is declared using the `abstract` keyword before the `class` keyword.
- It can have abstract methods (methods without implementation) and regular methods with implementations.

**Abstract Methods:**

- Abstract methods are declared using the `abstract` keyword before the method name.
- They define the method signature (name and parameters) but leave the implementation details to subclasses.
- Subclasses inheriting from an abstract class must implement all abstract methods.

**Syntax:**

```typescript
abstract class Shape {
  abstract getArea(): number; // Abstract method

  constructor(public color: string) {}

  public toString(): string {
    return "A shape with color " + this.color;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("red"); // Call superclass constructor (optional here)
  }

  getArea(): number {
    return this.width * this.height;
  }
}

let rect = new Rectangle(5, 10);
console.log(rect.toString()); // Output: A shape with color red
console.log(rect.getArea()); // Output: 50
```

**Explanation:**

- The `Shape` class is abstract. It defines an abstract method `getArea` that subclasses must implement.
- The `Rectangle` class extends `Shape` and provides an implementation for `getArea` based on its width and height.

**Key Points:**

- Abstract classes promote code reuse by defining common functionality.
- They enforce consistency by requiring subclasses to implement abstract methods.
- You can have regular methods with implementations in abstract classes for shared functionality among subclasses.

**Benefits of Using Abstract Classes:**

- Improved code organization and reusability.
- Enforces a contract for subclasses to implement required behaviors.
- Creates a foundation for inheritance hierarchies.

## Inheritance vs Polymorphism

Inheritance and polymorphism are two fundamental concepts in object-oriented programming (OOP) that work together to create flexible and reusable code.

**Inheritance:**

- Inheritance is a mechanism where a new class (subclass) inherits properties and methods from an existing class (superclass).
- It establishes an "is-a" relationship between classes. For example, a `Dog` class can inherit from an `Animal` class.
- The subclass can access and potentially override inherited members to provide specialized behavior.
- Benefits:
  - Code reusability: Subclasses can leverage functionality from the superclass without rewriting code.
  - Code organization: Inheritance helps structure class hierarchies based on relationships.
  - Polymorphism: Inheritance is a foundation for enabling polymorphic behavior.

**Polymorphism:**

- Polymorphism refers to the ability of objects of different classes (but often related through inheritance) to respond to the same method call in different ways.
- It's about treating objects of different types uniformly through a common interface.
- There are two main types of polymorphism in TypeScript:

  1. **Overriding:** When a subclass redefines a method inherited from the superclass to provide its own implementation. This allows for specialized behavior based on the object's type at runtime.

  ```typescript
  class Animal {
    public makeSound() {
      console.log("Generic animal sound");
    }
  }

  class Dog extends Animal {
    public makeSound() {
      console.log("Woof!");
    }
  }

  let animal: Animal; // Can hold objects of Animal or its subclasses
  animal = new Dog();
  animal.makeSound(); // Outputs: Woof! (polymorphic behavior)
  ```

  2. **Duck Typing:** When you don't rely on inheritance but check if an object has a specific method at runtime before calling it. This allows for using objects of any class that implements the required behavior.

  ```typescript
  interface CanMakeSound {
    makeSound(): void;
  }

  class Dog implements CanMakeSound {
    public makeSound() {
      console.log("Woof!");
    }
  }

  class Cat implements CanMakeSound {
    public makeSound() {
      console.log("Meow!");
    }
  }

  function makeAnimalSound(animal: CanMakeSound) {
    animal.makeSound();
  }

  makeAnimalSound(new Dog()); // Outputs: Woof!
  makeAnimalSound(new Cat()); // Outputs: Meow!
  ```

**Key Differences:**

- Inheritance is about creating class hierarchies and code reuse, while polymorphism is about flexible method calls and handling objects of different types uniformly.
- Inheritance establishes a static relationship between classes, while polymorphism focuses on dynamic behavior at runtime.

## Method overriding

Method overriding is a core concept in object-oriented programming (OOP) languages like TypeScript, allowing subclasses to redefine inherited methods from their superclass and provide specialized behavior. Here's a detailed look at method overriding:

**When to Override Methods:**

- You want a subclass to have a different behavior compared to the superclass for a specific method.
- The superclass method provides a generic implementation, and the subclass needs to customize it for its specific needs.

**How Method Overriding Works:**

1. **Inheritance:** A subclass inherits methods from its superclass.
2. **Method Signature Match:** The subclass method to be overridden must have the same name, parameters (including types), and return type as the superclass method.
3. **Redefining Implementation:** The subclass method body provides the specialized implementation that differs from the superclass method.

**Syntax:**

```typescript
class Animal {
  public makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  public makeSound() {
    console.log("Woof!"); // Overriding the makeSound method
  }
}

let animal: Animal; // Can hold objects of Animal or its subclasses
animal = new Dog();
animal.makeSound(); // Outputs: Woof! (polymorphic behavior)
```

**Explanation:**

- The `Animal` class has a `makeSound` method with a generic sound.
- The `Dog` class inherits from `Animal` and overrides the `makeSound` method to provide a specific sound for dogs ("Woof!").

**Key Points:**

- Overriding allows for polymorphism, where objects of different subclasses can respond differently to the same method call.
- The method signature (name, parameters, return type) must match exactly between the superclass and subclass methods for overriding to work correctly.
- You can use the `super` keyword within a subclass method to call the overridden method from the superclass if needed.

**Benefits of Method Overriding:**

- Promotes code reusability by leveraging the superclass implementation while adding specialized behavior in subclasses.
- Enables polymorphism for flexible handling of objects from different subclasses.
- Makes code more adaptable to specific object types.
