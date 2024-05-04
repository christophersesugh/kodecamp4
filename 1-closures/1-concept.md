**Definition:**

In programming, a closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has finished executing. This "remembers" the outer function's environment, allowing the inner function to operate on that data even when called outside the original context.

**Key Points:**

- **Inner Function Remembers Outer Scope:** The inner function "captures" the variables from the outer function's scope, creating a closure.
- **Persistence Beyond Outer Function:** Even when the outer function finishes, the closure retains access to its captured variables.
- **Independent Execution:** The inner function within the closure can be called and executed independently, carrying its captured variables with it.

**Benefits of Closures:**

- **Data Encapsulation:** Closures create private data that's only accessible by the inner function, promoting data privacy and modularity.
- **Flexible Function Creation:** You can dynamically generate functions with specific captured variables, making code more reusable and adaptable.
- **Event Handling:** Closures are commonly used in event handling scenarios, where functions need to retain data specific to the event.

**Example:**

Here's a simple JavaScript example demonstrating a closure:

```javascript
function greet(name) {
  let greeting = "Hello, ";

  function sayHello() {
    console.log(greeting + name);
  }

  return sayHello;
}

const myGreeting = greet("Kodecampers");
myGreeting(); // Output: "Hello, Kodecampers"
```

In this example:

- `greet` is the outer function that creates a variable `greeting`.
- The inner function `sayHello` captures the `greeting` variable through the closure.
- Even after `greet` finishes, `myGreeting` (which holds the closure) can still call `sayHello` and access the captured `greeting` variable.

# How closures work (Lexical scope)

In JavaScript, closures work through the concept of lexical scoping:

- **Lexical Scoping:** Variables are accessible within the scope they are declared in, along with any nested scopes within that scope. This means an inner function has access to variables declared in its outer function, even after the outer function finishes execution.

Here's a breakdown of how closures form in JavaScript:

1. **Function Creation:** When a function is created in JavaScript, it captures a reference to its surrounding lexical environment. This environment includes all variables and functions declared in its outer scope.
2. **Inner Function Access:** Any inner functions defined within the outer function have access to this captured environment. This allows them to access and manipulate variables from the outer scope, even after the outer function has finished executing.
3. **Closure Formation:** The combination of the inner function and its captured environment forms a closure. This means the inner function carries with it the necessary context to access the captured variables, regardless of where it's called or when.

Here are some key points to remember about closures in JavaScript:

- **Closures are created at function creation time, not execution time.**
- **The captured environment persists even after the outer function finishes.**
- **Inner functions can access and modify variables from the captured environment.**
- **Closures are powerful tools for data encapsulation and creating private variables.**

Here's an example to illustrate:

```javascript
function greet(name) {
  function sayHello(greeting) {
    console.log(greeting + name);
  }

  return sayHello;
}

const myGreeting = greet("Kodecampers");
myGreeting("Hello, "); // Output: "Hello, Kodecampers"
```

In this example:

- `greet` creates a variable `greeting` and an inner function `sayHello`.
- `sayHello` captures the reference to `greeting` from its surrounding environment.
- Even after `greet` finishes, `myGreeting` holds the closure, allowing `sayHello` to access and print the captured `greeting` variable.
