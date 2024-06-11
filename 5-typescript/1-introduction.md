# Introduction

**Introduction to TypeScript**

TypeScript is a superset of JavaScript, meaning it adds features on top of the existing functionality of JavaScript. The key addition is **static typing**.

- **Static Typing:** In contrast to JavaScript's loose typing, TypeScript allows you to define the data types of variables, functions, and other elements. This enables the compiler to catch errors early on, before your code even runs.
- **Superset of JavaScript:** Any valid JavaScript code is also valid TypeScript code. This makes it easy to migrate existing JavaScript projects to TypeScript or start a new project with TypeScript from scratch.
- **Improved Maintainability:** By explicitly defining types, TypeScript improves code readability and maintainability, especially for larger projects.

**Benefits of Using TypeScript:**

- **Early Error Detection:** Static type checking helps catch errors during compilation, preventing runtime issues that can be difficult to debug.
- **Improved Code Clarity:** Explicit types make code easier to understand for both you and other developers.
- **Better Refactoring:** TypeScript provides better tooling support for refactoring code, as the type information helps ensure changes don't introduce unintended consequences.
- **Larger Project Suitability:** For complex projects with multiple developers, TypeScript's features become increasingly valuable for managing code quality and reducing errors.

## TS and JS Interoperability

**Full Compatibility:**

- **TypeScript as a Superset:** Since TypeScript extends JavaScript, any valid JavaScript code is also valid TypeScript code. This allows you to gradually introduce TypeScript into an existing JavaScript project without rewriting everything at once.
- **Using JavaScript Libraries:** You can seamlessly use existing JavaScript libraries in your TypeScript projects. There are two main approaches:
  - **Direct Inclusion:** Simply include the JavaScript files directly in your TypeScript project. However, this approach won't benefit from type checking for the library functions.
  - **Type Definitions:** For better type checking, you can leverage existing type definition files (`.d.ts` files) that provide type information for popular JavaScript libraries. These files help the TypeScript compiler understand the expected behavior of the library functions and variables.

**Using TypeScript Code in JavaScript:**

- **Compilation:** TypeScript code needs to be compiled into plain JavaScript before it can run in a JavaScript environment. The TypeScript compiler (`tsc`) takes care of this process. The compiled JavaScript code will function identically to regular JavaScript code.

## Running typescript

### typescript compiler (tsc)

**Installation:**

1. **Node.js Prerequisite:**
   TypeScript requires Node.js to be installed on your system. You can download and install Node.js from the official website [https://nodejs.org/en/download/package-manager/current](https://nodejs.org/en/download/package-manager/current).

2. **Installing TypeScript:**
   There are two main ways to install TypeScript:

   **a) Local Installation (Project-Specific):**
   This approach is recommended for managing dependencies within your project. Open your terminal or command prompt and navigate to your project directory. Then, run the following command:

   ```bash
   npm install typescript --save-dev
   ```

   This installs TypeScript as a development dependency in your project and saves the information in your `package.json` file.

   **b) Global Installation (Optional):**
   This approach allows you to run `tsc` from anywhere on your system. However, it's generally not recommended for managing dependencies in a project. Run the following command:

   ```bash
   npm install -g typescript
   ```

**Creating a TypeScript File:**

1. **Text Editor or IDE:**
   Use a text editor or an Integrated Development Environment (IDE) that supports TypeScript. Many popular options like Visual Studio Code offer built-in TypeScript support.

2. **Create a `.ts` File:**
   Create a new file in your project directory and name it with the `.ts` extension. This will be your TypeScript source code file.

**Writing and Compiling with `tsc`:**

1. **Write TypeScript Code:**
   Inside your `.ts` file, write your TypeScript code. Remember to define types for variables, functions, and other elements.

2. **Compile with `tsc`:**
   Open your terminal or command prompt and navigate to the directory containing your TypeScript file.

3. **Basic Compilation:**
   Run the following command to compile the TypeScript code:

   ```bash
   tsc <filename.ts>
   ```

   Replace `<filename.ts>` with the actual name of your TypeScript file (e.g., `tsc hello.ts`).

   This will generate a corresponding JavaScript file (usually with the same name but a `.js` extension) in the same directory.

4. **Running the Compiled JavaScript:**
   Use Node.js to run the compiled JavaScript file:

   ```bash
   node <filename.js>
   ```

**Example:**

Let's create a simple `hello.ts` file:

```typescript
function greet(name: string): string {
  return "Hello, " + name + "!";
}

const message = greet("Kodecamp");
console.log(message);
```

1. Save the file as `hello.ts`.
2. Run `tsc hello.ts` in your terminal.
3. Run `node hello.js` to see the output "Hello, World!" on the console.

### ts-node

Absolutely, here's how to run TypeScript code directly using `ts-node` without a separate compilation step:

**ts-node: Introduction**

`ts-node` is a Node.js package that acts as a wrapper around the TypeScript compiler (`tsc`). It allows you to execute TypeScript files directly on the fly, streamlining your development workflow.

**Installation:**

1. **Project-Specific Installation:**
   Open your terminal and navigate to your project directory. Run the following command to install `ts-node` as a development dependency:

   ```bash
   npm install ts-node --save-dev
   ```

   This saves the dependency information in your `package.json` file.

**Running TypeScript with ts-node:**

1. **Basic Execution:**
   The simplest way to run a TypeScript file with `ts-node` is:

   ```bash
   ts-node <filename.ts>
   ```

   Replace `<filename.ts>` with the actual name of your TypeScript file. This will compile and execute the code directly.

2. **Global Installation (Optional):**
   While not recommended for project dependencies, you can install `ts-node` globally for system-wide access:

   ```bash
   npm install -g ts-node
   ```

   Then, you can run TypeScript files directly using:

   ```bash
   ts-node <filename.ts>
   ```

**Example:**

Create a file named `greet.ts` with the following TypeScript code:

```typescript
function greet(name: string): string {
  return "Hello, " + name + "!";
}

const message = greet("Kodecamp");
console.log(message);
```

1. Save the file.
2. In your terminal, run `ts-node greet.ts`.

This will directly execute the TypeScript code and print "Hello, Kodecamp!" to the console.

### TS playground

## Installation and configuration

[TS Playground](https://www.typescriptlang.org/play/?#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26AlAFyIDOUqMYyiA3gFCKuIZQipL5EDcTAL5A)

## TypeScript Installation and Configuration with tsconfig.json

1. **Create tsconfig.json:**

   - In your project directory, create a file named `tsconfig.json`. This file will hold your TypeScript compiler configuration options.
     or you can initialize a `tsconfig.json` file with this command `npx tsc --init`

2. **Basic Configuration:**

   - Open `tsconfig.json` in your text editor and add the following minimal configuration:

   ```json
   {
     "compilerOptions": {
       "target": "es5", // Set the target JavaScript version (e.g., es5, es2015)
       "module": "commonjs", // Specify the module system (e.g., commonjs, esmodule)
       "strict": true // Enable strict type checking for better error detection
     }
   }
   ```

   - **`compilerOptions`:** This object defines various compiler options.
   - **`target`:** This option specifies the target JavaScript version your compiled code should be compatible with. Common options include `es5` (for older browsers) or `es2015` (for modern browsers with ES6 support).
   - **`module`:** This option specifies the module system used in your project. Common choices include `commonjs` (for Node.js) or `esmodule` (for modern browser modules).
   - **`strict`:** Enabling strict mode enforces stricter type checking, helping catch potential errors early on.

**Compiling with tsconfig.json:**

With `tsconfig.json` in place, you can compile your TypeScript files using the `tsc` compiler:

```bash
tsc
```

or

```bash
npx tsc
```

This command, assuming your current directory contains both `tsconfig.json` and your TypeScript files, will compile all TypeScript files based on the configuration options you specified.

**Additional Considerations:**

- **More Compiler Options:** The `tsconfig.json` schema offers many more configuration options you can explore in the official documentation: [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
- **Advanced Configuration:** For larger projects, you can structure your codebase and configure `tsconfig.json` to handle specific directories or files differently.
