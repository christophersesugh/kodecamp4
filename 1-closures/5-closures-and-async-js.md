Here are some examples of how closures are used in common JavaScript constructs:

# Closures in setTimeout and setInterval:

- `setTimeout` and `setInterval` take a callback function as an argument and execute it after a specified delay or interval.
- Closures are often used with these functions to create callbacks that have access to specific data or state from the surrounding environment.

**Example:**

```javascript
function greetAfterDelay(name) {
  setTimeout(() => {
    console.log("Hello, " + name + "!");
  }, 2000);
}

greetAfterDelay("Kodecamp"); // Output: "Hello, Kodecamp!" after 2 seconds
```

- In this example, the callback function within `setTimeout` captures the `name` variable, forming a closure.
- When the timeout is triggered, the closure allows the callback to access and use the captured `name` variable.

# Closures in Promises:

- Promises are objects representing the eventual completion (or failure) of an asynchronous operation.
- Closures can be used within promise handlers (`.then` and `.catch`) to capture state or data from the surrounding context.

**Example:**

```javascript
function delayWithMessage(message, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delayMs);
  });
}

function greetAfterDelay(name) {
  // Closure captures the name variable
  return delayWithMessage(`Hello, ${name}!`, 2000);
}

greetAfterDelay("Kodecamp").then((message) => {
  console.log(message); // Output: "Hello, Kodecamp!" after 2 seconds
});
```

Here's an example of a promise function that utilizes closures:

```javascript
function delayWithMessage(message, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delayMs);
  });
}

function greetAfterDelay(name) {
  // Closure captures the name variable
  return delayWithMessage(`Hello, ${name}!`, 2000);
}

greetAfterDelay("Kodecamp").then((message) => {
  console.log(message); // Output: "Hello, Kodecamp!" after 2 seconds
});
```

In this example:

1. **`delayWithMessage`:**

   - This function takes a message and a delay time as arguments.
   - It returns a promise that resolves after the specified delay with the provided message.
   - Inside the promise, a closure is formed.

2. **Closure:**

   - The `setTimeout` callback function captures the `message` variable from the outer function's scope.
   - Even after `delayWithMessage` finishes executing, the closure allows the callback to access the captured `message` variable.
   - When the timeout is triggered, the closure resolves the promise with the captured message.

3. **`greetAfterDelay`:**
   - This function uses the `delayWithMessage` function to create a promise that delays and then resolves with a greeting message containing the provided name.
   - The closure within `delayWithMessage` ensures that the correct name is used in the greeting message even after `greetAfterDelay` finishes.

# Closures in async/await:

- `async/await` provide a syntactic sugar for working with promises, making asynchronous code look more synchronous.
- Closures can be used within `async` functions to capture state or data from the surrounding context.

**Example:**

```javascript
async function loadData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const fetchedData = await loadData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Fetched data:", fetchedData);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

- In this example, the `loadData` function uses `async/await` to fetch data asynchronously.
- The outer `async` function creates a closure that captures any variables used within it.
- This allows the code to appear more linear while still handling asynchronous operations effectively.
