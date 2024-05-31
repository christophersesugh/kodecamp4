# Nullish coalescing operator

**What is the Nullish Coalescing Operator?**

Introduced in ECMAScript 2020, the nullish coalescing operator (??) is a logical operator that provides a concise and safe way to handle null and undefined values in your JavaScript code. It allows you to define a default value that will be used if the expression on the left-hand side evaluates to null or undefined.

**Syntax:**

```javascript
expression1 ?? expression2;
```

**Explanation:**

- `expression1`: This is the expression that is evaluated first.
- `??`: This is the nullish coalescing operator.
- `expression2`: This is the expression that is used as the default value if `expression1` evaluates to null or undefined.

**Behavior:**

- If `expression1` is not null or undefined, the nullish coalescing operator returns the value of `expression1`.
- If `expression1` is null or undefined, the nullish coalescing operator returns the value of `expression2`.

**Example:**

```javascript
const name = null; // Or name could be undefined

// Traditional approach (prone to errors)
const userName = name ? name : "Unknown";

// Using nullish coalescing operator (safer and cleaner)
const userNameUsingNullishCoalescing = name ?? "Unknown";

console.log(userName); // Output: "Unknown" (since name is null)
```

**Benefits of using the Nullish Coalescing Operator:**

- **Improved Readability:** The code becomes more concise and easier to understand by eliminating the need for multiple nested if-else statements or ternary operators.
- **Enhanced Error Handling:** You can gracefully handle situations where variables might be null or undefined, preventing errors and unexpected behavior.
- **Safer Code:** By using this operator, you ensure that your code doesn't break due to null or undefined values.

**Comparison with the Logical OR (||) Operator:**

While the nullish coalescing operator might seem similar to the logical OR (||) operator, there's a key difference:

- `||` returns the right-hand operand if the left-hand operand is any falsy value, including null, undefined, 0, "", false, etc.
- `??` specifically checks for null and undefined values only, providing a default value only in those cases.

## Basic usage

The nullish coalescing operator (??) is a powerful tool for handling null and undefined values in your JavaScript code. Here's a breakdown of its basic usage:

**Syntax:**

```javascript
expression1 ?? expression2;
```

**Explanation:**

- `expression1`: This is the expression that is evaluated first.
- `??`: This is the nullish coalescing operator.
- `expression2`: This is the expression that is used as the default value if `expression1` evaluates to null or undefined.

**Behavior:**

- If `expression1` is not null or undefined, the nullish coalescing operator returns the value of `expression1`.
- If `expression1` is null or undefined, the nullish coalescing operator returns the value of `expression2`.

**Example:**

```javascript
const name = null; // Or name could be undefined

// Traditional approach (prone to errors)
const userName = name ? name : "Unknown";

// Using nullish coalescing operator (safer and cleaner)
const userNameUsingNullishCoalescing = name ?? "Unknown";

console.log(userName); // Output: "Unknown" (since name is null)
```

**Key Points:**

- The nullish coalescing operator only checks for null and undefined values, unlike the logical OR (||) operator which checks for all falsy values (including 0, "", false, etc.).
- It provides a concise and safe way to assign default values in situations where variables might be null or undefined.
- It improves code readability by eliminating the need for multiple nested if-else statements or ternary operators.

**Here are some additional examples of how the nullish coalescing operator can be used:**

- **Assigning default values to variables:**

```javascript
const user = {
  firstName: "Kode",
  lastName: null, // Or lastName could be undefined
};

const fullName = user.firstName ?? "Unknown" + " " + (user.lastName ?? "");
console.log(fullName); // Output: "Kode"
```

- **Providing default arguments to functions:**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Guest!"
greet("Camp"); // Output: "Hello, Camp!"
```

## Usage with optional chaining

Combining optional chaining and the nullish coalescing operator is a powerful technique for handling potentially missing values in nested object structures.

**Scenario:** You want to access a property within a nested object, but the object or any intermediate properties might be null or undefined.

**Traditional approach (prone to errors):**

```javascript
const user = {
  profile: {
    // profile.city might be null or undefined
  },
};

const userCity = user.profile ? user.profile.city : "Unknown";
```

**Using optional chaining and nullish coalescing (safer and cleaner):**

```javascript
const userCityUsingOptionalChaining = user?.profile?.city ?? "Unknown";
```

**Explanation:**

1. `user?.profile`: Uses optional chaining to safely access the `profile` object within `user`. If `user` is null or undefined, the expression stops and returns `undefined`.
2. `?? "Unknown"`: Uses the nullish coalescing operator. If `user?.profile` evaluates to null or undefined, the expression returns "Unknown" as the default value.

**Benefits:**

- **Improved Readability:** The code becomes more concise and easier to understand by eliminating the need for multiple nested if-else statements or ternary operators.
- **Enhanced Error Handling:** You can gracefully handle situations where properties might be missing, preventing errors and unexpected behavior.
- **Safer Code:** By combining these operators, you ensure that your code doesn't break due to null or undefined values in nested structures.

**Additional Examples:**

- **Providing default values for deeply nested properties:**

```javascript
const user = {}; // Or user could be null or undefined

const userFullName =
  user?.name ?? "Unknown" + " " + (user?.profile?.lastName ?? "");
```

- **Handling missing methods:**

```javascript
const users = [
  {
    greet: function () {
      return "Hello!";
    },
  },
];

const secondUserGreeting = users?.[1]?.greet?.() ?? "No greeting method";
```

## Function parameters

The nullish coalescing operator (??) can be a valuable tool for setting default values in function parameters. Here's how it works:

**Scenario:** You want to define a function parameter that has a default value if it's not explicitly provided when calling the function.

**Traditional approach:**

```javascript
function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  return `Hello, ${name}!`;
}

// Call the function with and without a name
greet(); // Output: Hello, Guest!
greet("Kodecamp"); // Output: Hello, Kodecamp!
```

**Using the nullish coalescing operator:**

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Call the function with and without a name
greet(); // Output: Hello, Guest!
greet("Kodecamp"); // Output: Hello, Kodecamp!
```

**Explanation:**

1. `name = "Guest"`: This defines the parameter `name` with a default value of "Guest". If the function is called without providing a value for `name`, the default value is used.
2. `return `Hello, ${name}!`;`: This returns a greeting message using the provided or default value for `name`.

**Benefits of using the nullish coalescing operator:**

- **Improved Readability:** The code becomes more concise and easier to understand by eliminating the need for an explicit if-else statement to check for undefined values.
- **Safer Code:** You ensure that the function always has a valid value for `name`, preventing errors that might arise from undefined parameters.

**Additional Notes:**

- The nullish coalescing operator only checks for null and undefined values. If you want to handle other falsy values (like 0, "", false) differently, you might need to use a different approach.
- Default function parameters are a feature introduced in ES6 (ECMAScript 2015).

## Precedence

The nullish coalescing operator (??) has a specific precedence in JavaScript, which determines the order in which it is evaluated within an expression.

- **Precedence Level:** The nullish coalescing operator has a precedence of 5. This means it is evaluated after most other operators, like arithmetic operators (+, -, \*, /, etc.), but before assignment operators (=, +=, -=, etc.) and the conditional (ternary) operator (?:).
- **Comparison with Other Operators:**
  - **Lower than Logical OR (||):** The logical OR operator (||) has a higher precedence (level 4) than the nullish coalescing operator. This means the logical OR will be evaluated first, and its result will be used in the nullish coalescing operation.
  - **Higher than Conditional (Ternary) Operator (?:):** The conditional operator has a lower precedence (level 3) than the nullish coalescing operator. This means the nullish coalescing operation will be evaluated first, and its result will be used in the conditional expression.

**Example:**

```javascript
const x = 10 * (y ?? 20); // Evaluates to 200 if y is null or undefined
```

In this example:

1. `10 * (y ?? 20)`: The nullish coalescing operator is evaluated first. If `y` is null or undefined, it returns 20. Otherwise, it returns the value of `y`.
2. `x = ...`: The result of the entire expression is then assigned to `x`.

**Using Parentheses:**

While the precedence rules generally dictate the order of evaluation, it's often recommended to use parentheses for clarity and to avoid potential confusion. This is especially true when combining the nullish coalescing operator with other operators.
