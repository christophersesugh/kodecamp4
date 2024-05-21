# Template literals

## Syntax

Template literals, also known as template strings, are a powerful string literal feature introduced in ES6 (ECMAScript 2015) that provide a more flexible and readable way to create strings in JavaScript. Here's a breakdown of their syntax:

**Basic Structure:**

```javascript
const message = `This is a template literal`;
```

- Backticks ( ` ` ) enclose the template literal content, instead of single or double quotes.
- You can embed expressions within the template literal using `${expression}` syntax. The expression's value is evaluated and inserted into the string.

## String Interpolation:

The key feature of template literals is string interpolation. You can embed any JavaScript expression within a template literal using `${expression}`. The expression's result is then directly inserted into the string.

```javascript
const name = "Kodecamp";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Kodecamp!
```

## Multiline Strings:

Template literals allow writing multiline strings without the need for concatenation or special characters:

```javascript
const multilineString = `This is a
multiline string. 
It can span multiple lines.`;
```

## Tagged Template Literals:

Template literals can also be tagged with a function, allowing for additional processing or manipulation of the string before it's evaluated.

```javascript
function emphasize(strings, value) {
  return strings[0] + "**" + value + "**" + strings[1];
}

const value = "Kodecamp";
const message = emphasize`Hello, ${value}!`;
console.log(message); // Output: Hello, **Kodecamp**!
```

**Key Points:**

- Template literals use backticks ( ` ` ).
- They allow embedding expressions with `${expression}` syntax.
- They can be multiline without special characters.
- Tagged template literals allow function processing of the string.

## Raw strings

Template literals in JavaScript offer a powerful feature called raw strings. Here's a breakdown of what they are and how to use them:

**Regular Template Literals vs. Raw Strings:**

- **Regular Template Literals:** By default, template literals interpret escape sequences (like `\n` for newline or `\"` for double quote) within the string and convert them to their corresponding characters.
- **Raw Strings:** When prefixed with the `raw` tag, a template literal becomes a raw string. Escape sequences are preserved as literal characters and not interpreted.

**Syntax:**

```javascript
const cookedString = `This is a \n newline character.`;
console.log(cookedString); // Output: This is a newline character.

const rawString = String.raw`This is a \n newline character.`;
console.log(rawString); // Output: This is a \n newline character.
```

**Use Cases for Raw Strings:**

- **Preserving Backslashes:** In scenarios where you need to represent actual backslashes within the string, raw strings are essential. For example, representing file paths or regular expressions.
- **Security:** If you're working with user-provided data that might contain escape sequences, using raw strings helps prevent unintended interpretation and potential security vulnerabilities (like injection attacks).

**How `String.raw` Works:**

The `String.raw` tag is a static method on the `String` object. When used with a template literal, it returns a string where the escape sequences are left untouched. The raw string itself is not directly usable in template literals. You typically assign it to a variable and then use that variable in your code.

**Example:**

```javascript
const str = `C:\\Users\\Kodecamp\\Documents\\myfile.txt`;
const str2 = `C:\Users\Kodecamp\Documents\myfile.txt`;
const filePath = String.raw`C:\Users\Kodecamp\Documents\myfile.txt`;
console.log(filePath); // Output: C:\Users\Kodecamp\Documents\myfile.txt (backslashes preserved)
console.log(str); // Output: C:\Users\Kodecamp\Documents\myfile.txt (backslashes preserved)
console.log(str2); // Output: C:UsersKodecampDocumentsmyfile.txt (backslashes removed)
console.log(filePath === str); // Output: true
```

**Key Points:**

- Raw strings preserve escape sequences within template literals.
- Use `String.raw` to create a raw string from a template literal.
- Raw strings are useful for backslash representation and security in specific cases.
