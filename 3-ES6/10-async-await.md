# Async/await

## Basics

Absolutely! Async/await is a powerful syntax introduced in ES2017 (ECMAScript 2017) that simplifies working with asynchronous operations in JavaScript. It provides a cleaner and more synchronous-like way to handle Promises compared to traditional callback-based methods or complex promise chaining.

## Asynchronous functions

- **Async Functions:** The foundation of async/await is the `async` keyword. Declaring a function with `async` makes it an asynchronous function.
- **The `await` Keyword:** Inside an `async` function, you can use the `await` keyword before a Promise. This pauses the execution of the async function until the Promise settles (resolves or rejects).
- **Syntactic Sugar:** Async/await doesn't change the underlying behavior of Promises. It primarily provides a syntactic layer on top of Promises to make asynchronous code appear more synchronous and easier to read.

**Example (our previous checkEvenNumber promise):**

```javascript
function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(new Error("Input must be a number"));
    } else if (number % 2 === 0) {
      resolve(`The number ${number} is even`);
    } else {
      reject(new Error(`The number ${number} is odd`));
    }
  });
}

// No error handling
async function findEvenNumber() {
  const evenNumber = await checkEvenNumber("3");
  console.log(evenNumber);
}

findEvenNumber();
```

## Error handling

```javascript
async function findEvenNumber() {
  try {
    const evenNumber = await checkEvenNumber(4);
    console.log(evenNumber);
  } catch (error) {
    // console.error(error);
    // throw error
    throw new Error("Either number is odd or arg is not a number");
    throw new Error(error);
  }
}

//Playing around with things
async function findEvenNumber() {
  try {
    const evenNumber = await checkEvenNumber("s").catch((error) => {
      console.error(error);
    });
    const two = await checkEvenNumber(2);
    console.log(evenNumber);
    console.log(two);
  } catch (error) {
    // console.error(error);
    throw error;
    // throw new Error("Either number is odd or arg is not a number");
  }
}
```

**Benefits of Async/Await:**

- **Improved Readability:** Async/await makes asynchronous code look more like synchronous code, with linear progression and clear waiting points for Promises.
- **Error Handling:** You can use `try...catch` blocks within `async` functions to handle potential errors from Promises in a structured manner.
- **Cleaner Code:** Async/await avoids the need for complex promise chaining and nested callbacks, leading to more maintainable code.

**Key Points:**

- `await` can only be used inside `async` functions.
- `await` pauses the execution of the async function until the Promise it's waiting on settles.
- The `await` keyword itself doesn't return a value. The returned value comes from the resolved Promise.
- Async functions always return a Promise, even if you don't use `await` explicitly within the function body.
