**Introduction**

Node.js is a powerful JavaScript runtime environment that allows developers to execute JavaScript code on the server side. Understanding the basics of Node.js, including its global objects and module systems, is essential for building efficient and modular applications. This guide covers the fundamentals of Node.js, explores its global objects, and delves into the two primary module systems: CommonJS and ES Modules.

---

### Node.js Basics

- **What is Node.js?**
  - Node.js is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser.
  - Built on Chrome's V8 JavaScript engine, it is designed for building scalable network applications.

- **Why Use Node.js?**
  - **Event-Driven Architecture**: Efficiently handles asynchronous operations.
  - **Non-Blocking I/O Model**: Suitable for real-time applications.
  - **JavaScript Everywhere**: Allows for full-stack development using JavaScript.

---

### Global Objects in Node.js

Node.js provides several global objects that are available in all modules without the need to import them.

- **`__dirname`**
  - Represents the directory name of the current module.
  - **Example**:

    ```javascript
    console.log(__dirname); // Outputs the directory path of the current file
    ```

- **`__filename`**
  - The file name of the current module, including the absolute path.
  - **Example**:

    ```javascript
    console.log(__filename); // Outputs the full path of the current file
    ```

- **`process`**
  - Provides information about, and control over, the current Node.js process.
  - **Example**:

    ```javascript
    console.log(process.argv); // Outputs an array of command-line arguments
    ```

- **`global`**
  - The global namespace object. Properties set on `global` become globally accessible.
  - **Example**:

    ```javascript
    global.myVar = 'Hello World';
    console.log(myVar); // Outputs: Hello World
    ```

- **`module` and `exports`**
  - Used in the CommonJS module system to export and import modules.
  - **Example**:

    ```javascript
    // In module.js
    module.exports = { value: 42 };

    // In main.js
    const mod = require('./module');
    console.log(mod.value); // Outputs: 42
    ```

- **`setImmediate()`**
  - Schedules code execution after the current event loop tick.
  - **Example**:

    ```javascript
    setImmediate(() => {
      console.log('Executed immediately after I/O events');
    });
    ```

- **`setTimeout()` and `setInterval()`**
  - Schedules code execution after a delay or at regular intervals.
  - **Example**:

    ```javascript
    setTimeout(() => {
      console.log('Executed after 1 second');
    }, 1000);
    ```

---

### Modules in Node.js

Modules are integral to Node.js, allowing developers to encapsulate code for better maintainability and reusability.

- **Why Use Modules?**
  - **Code Organization**: Breaks down code into manageable pieces.
  - **Reusability**: Share and reuse code across different parts of an application.
  - **Encapsulation**: Prevents global namespace pollution.

---

### CommonJS Modules

**CommonJS** is the original module system used by Node.js.

- **Syntax**:
  - **Exporting**:

    ```javascript
    // module.js
    const value = 42;
    module.exports = value;
    ```

  - **Importing**:

    ```javascript
    // main.js
    const value = require('./module');
    console.log(value); // Outputs: 42
    ```

- **Features**:
  - **Synchronous Loading**: Modules are loaded synchronously.
  - **Caching**: Modules are cached after the first load.
  - **Single Export Object**: Exports are assigned to `module.exports`.

- **Usage**:
  - Ideal for Node.js environments where synchronous loading is acceptable.
  - Widely used due to historical precedence in Node.js.

---

### ES Modules (ESM)

With the introduction of ECMAScript 2015 (ES6), JavaScript introduced a standardized module system known as **ES Modules**.

- **Syntax**:
  - **Exporting**:

    ```javascript
    // module.mjs or with "type": "module" in package.json
    export const value = 42;
    export default function () {
      console.log('Default Exported Function');
    }
    ```

  - **Importing**:

    ```javascript
    // main.mjs or with "type": "module" in package.json
    import { value } from './module.js';
    import defaultFunction from './module.js';

    console.log(value); // Outputs: 42
    defaultFunction();  // Outputs: Default Exported Function
    ```

- **Features**:
  - **Asynchronous Loading**: Modules are loaded asynchronously.
  - **Static Structure**: Enables static analysis and optimizations.
  - **Immutable Bindings**: Imports are live bindings to exported values.
  - **Top-Level `await`**: Allows using `await` outside of async functions.

- **Usage**:
  - Preferred in modern JavaScript development for both client and server-side code.
  - Aligns with the standard JavaScript specification.

---

### Key Differences Between CommonJS and ES Modules

1. **Syntax and Semantics**:
   - **CommonJS**: Uses `require()` for imports and `module.exports` for exports.
   - **ESM**: Uses `import` and `export` statements.

2. **Loading Mechanism**:
   - **CommonJS**: Loads modules synchronously.
   - **ESM**: Loads modules asynchronously, which can improve performance.

3. **Module Scope**:
   - **CommonJS**: Each file is its own module scope.
   - **ESM**: Also provides module scope but with strict mode by default.

4. **Mutable vs. Immutable Exports**:
   - **CommonJS**: Exports are copies of the value.
   - **ESM**: Exports are live bindings, reflecting the current value.

5. **Circular Dependencies**:
   - **CommonJS**: Handles circular dependencies with partially loaded modules.
   - **ESM**: Can handle circular dependencies more gracefully due to live bindings.

6. **Top-Level `await`**:
   - **CommonJS**: Does not support top-level `await`.
   - **ESM**: Supports top-level `await`, allowing asynchronous operations at the module level.

---

### Using Modules in Node.js

#### Enabling ES Modules

To use ES Modules in Node.js, you need to:

- **Use the `.mjs` Extension**:
  - Rename your JavaScript files to have a `.mjs` extension.
  - **Example**: `module.mjs`

- **Set `"type": "module"` in `package.json`**:
  - Add the following to your `package.json`:

    ```json
    {
      "type": "module"
    }
    ```

- **Using `.js` Extension with ESM**:
  - With `"type": "module"`, files with a `.js` extension are treated as ES Modules.

#### Mixing CommonJS and ES Modules

- **Importing CommonJS in ES Modules**:

  ```javascript
  // main.mjs
  import pkg from './module.cjs';
  ```

- **Exporting from CommonJS for ES Module Consumption**:

  ```javascript
  // module.cjs
  module.exports = {
    value: 42,
  };
  ```

- **Importing ES Modules in CommonJS**:

  ```javascript
  // main.cjs
  (async () => {
    const { value } = await import('./module.mjs');
    console.log(value);
  })();
  ```

---

### Best Practices

- **Consistency**: Stick to one module system within a project when possible.
- **Use ESM for New Projects**: Aligns with modern JavaScript standards.
- **Be Cautious with Dependencies**: Ensure that third-party modules support the module system you're using.
- **Leverage Tooling**: Use transpilers like Babel if you need to support environments that don't fully support ES Modules.

---

### Conclusion

Understanding Node.js basics, including its global objects and module systems, is fundamental for building robust applications. While CommonJS has been the traditional module system in Node.js, ES Modules offer a standardized and feature-rich alternative that aligns with modern JavaScript development practices. By grasping the differences and knowing how to use each system effectively, developers can write more modular, maintainable, and forward-compatible code.

---

**References**

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [ECMAScript Modules in Node.js](https://nodejs.org/api/esm.html)
- [CommonJS Specification](https://requirejs.org/docs/commonjs.html)
