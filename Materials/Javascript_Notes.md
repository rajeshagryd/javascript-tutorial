- What is javascript?
    - Javascript is a programming language that used to converting static web pages to dynamic and interactive web pages.
    - Javascript is a single threaded, non blocking, asynchronous concurrent language.
    - It has a call stack, an event loop and callback queue + others APIs
    - V8 is the javascript runtime which has a call stack and heap.
    - The heap is used for memory allocation and stack holds the excecution context.
    - DOM, setTimeout, http request, XML dont exist in V8 source code

- Javascript Engines
    - V8 (Google Chrome, Node.js)
    - SpiderMonkey (Firefox)
    - Rhino (Java)
    - JSCore (Apple Safari)
    
### How does JavaScript work in the browser?
JavaScript code runs inside a web browser's **Javascript Engine** which interprets and executes the script written by developers. The engine receives requests from the Document Object Model(DOM), which represents the structure of the webpage and allows scripts to interact with it. The DOM acts as an intermediary between the HTML/CSS page and the JavaScript code. Whenever there is user interaction or changes in the document, the JavaScript engine processes these events.

JavaScript (JS) is a programming language that is widely used in the browser to create dynamic web pages.

JavaScript is designed to run within web browsers and provides features such as form validation, manipulation of the Document Object Model (DOM), event handling, and animations.

To execute JavaScript in a web browser, the browser needs to have a JavaScript engine. All modern web browsers come with built-in JavaScript engines.

When a web page is loaded in a browser, the browser parses the HTML content and also recognizes the JavaScript code embedded within the HTML document.

Here's an example of JavaScript code:
```javascript
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
```
This JavaScript code selects an HTML element with the id "demo" and changes its inner HTML to "Hello JavaScript!".

In addition to JavaScript, modern web applications also utilize additional web technologies like HTML5, CSS3, and web APIs.

The overall workflow of a JavaScript application can be summarized as follows:

1. The browser downloads and parses the HTML content of the web page.
2. The browser encounters JavaScript code and passes it to the JavaScript engine for execution.
3. The JavaScript code manipulates the HTML DOM or communicates with external web services.
4. The JavaScript engine sends updates to the browser's rendering engine to reflect changes in the DOM or any other updates made by the JavaScript code.
5. The browser then redraws the updated page, displaying the new changes to the user.
It's important to note that JavaScript can also be used on the server-side, using technologies like Node.js. This enables developers to create server-side applications and APIs using JavaScript, a language traditionally known for its client-side capabilities.

### What are Event Loop?
- An event loop is part of the JavaScript runtime environment provided by most browsers. It is responsible for executing callback functions that have been registered using methods such as `setTimeout()` or `addEventListener()`.
- http://latentflip.com for exceuting code

The event loop is a fundamental concept in JavaScript that manages asynchronous operations. It is responsible for coordinating tasks, such as fetching data from database, handling user interactions and animating elements, to ensure they run smoothly and efficiently causing blocking. 

The event loop consists of three main components: 
    Call stack
    Callback queue
    Loop itself. 

The call stack is where JavaScript keeps track of function calls, while the callback queue holds functions that are waiting to be executed. The event loop continuously checks the callback queue and adds functions to the call stack when it is empty, ensuring that asynchronous operations are executed in the correct order. Understanding the event loop is crucial for writing efficient, responsive, and error-free JavaScript code.

Whenever some asynchronous operation completes its task, such as loading data from a server or running a timer, it pushes a callback function into the callback queue. This function will be executed at some point in the future when the call stack becomes empty.

In other words, if there is no ongoing script code being processed right now, the event loop takes care of executing these functions one-by-one until the queue is empty.
The loop checks if there are any functions waiting to be called in the callback queue. If there are, it pops one off the queue and executes it on the call stack. Once this function finishes executing, control goes back to the loop, which then checks again whether there are more functions waiting to be called. This process repeats until either the call stack is empty and there are no more functions in the callback queue, or the call stack is full and all currently executing functions have finished their tasks.

In summary, the event loop allows JavaScript to handle multiple types of operations concurrently, making it
a single-threaded language even though it uses an event-driven model.

**JavaScript is Single Threaded but not Blocking**
A single thread means that only one piece of code can execute at once in a JavaScript program. However, JavaScript is not fully blocking; instead, it has an event loop that handles asynchronous operations like AJAX requests, setTimeout(), setInterval() etc., allowing other scripts to run while these operations complete.
This non-blocking nature makes JavaScript suitable for building interactive applications, such as games, where the UI needs to respond quickly to user input.

#### Asynchronous vs Non-Blocking
Asynchronous refers to the fact that the execution of JavaScript does not stop to wait for something (like an AJAX request). Instead, the script continues executing without waiting for the response.
Non-blocking builds upon this idea by adding the ability to continue executing while waiting for asynchronous responses. In other words, non-blocking languages allow you to do things while waiting for results.

### What are the types of functions in javascript
- Named Function
    Give the name to the function
    ```javascript
        function add(a, b) a + b;
        add(4, 5)
    ```
- Anonymous Function
    No need to give any name to the function
    ```javascript
        console.log(function(a, b){
            return a*b
        }, (4, 5))

    ```
- Function Expression
    It's like anonymous but named when declared.
    1. Anonymous Function Expression
    ```javascript
        const sum = function (a, b) a + b;
        sum(4, 5)
    ```
    2. Named Function Expression
    ```javascript
        const sum = function add(a, b) a + b;
        sum(4, 5)
    ```
- Immediately Invoked Function Expression (IIFE)
- Arrow Function:
    They have shorter syntax compared to regular functions.

- Callback Function
    A callback function is called back by another function. In other words that is passed as an argument to the another function.
- Higher-Order Function
    Take one or more functions as an argument (callback function) or It returns a function as a result. In other hand, that function operate on other function
    ```javascript
        function add(sum) sum();
        add(sayHello)
        function sayHello() console.log("hello") // Hello
    ``` 

### What is promises in javascript?
- Promise in javascript is way to handle Asyncronous operation
- Promise represents a value that may not be available yet but will be available at some in the future. 
- Promise can be in one of three states: Pending, Resolved, Rejected.

In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:

Pending: The initial state; neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
A Promise is said to "resolve" with a value, which can be any JavaScript value including null, a thenable, or another Promise. A Promise is said to "reject" with a reason, which is typically an Error object.

Here is an example of a Promise in markdown:
```javascript
    let promise = new Promise((resolve, reject) => {
    // some asynchronous operation here
    setTimeout(() => {
        if (/* operation was successful */) {
        resolve('Success!');
        } else {
        reject(new Error('Operation failed.'));
        }
    }, 1000);
    });

    promise.then(value => {
        console.log(value); // "Success!"
        }).catch(error => {
        console.error(error); // Error: "Operation failed."
    });
```
In this example, the Promise represents an asynchronous operation that may take up to 1 second to complete. If the operation is successful, the Promise is resolved with the value 'Success!'. If the operation fails, the Promise is rejected with an Error object.

The then method is used to attach callbacks that will be called when the Promise is resolved. The catch method is used to attach a callback that will be called when the Promise is rejected.

### What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of scope regardless of whether their scope is global or local. However, only the declarations are hoisted, not the assignments. This is why you can call functions before they are declared in the code.

In the case of variables, only the declaration is hoisted, and the variable is initialized with a value of undefined. Therefore, it is recommended to declare and initialize variables before use to avoid any confusion.

Function declarations are hoisted completely to the top, while function expressions are not. If a function declaration and expression have the same name, the variable declaration is hoisted, but the assignment to a function is not, resulting in a TypeError.

JavaScript classes are also hoisted, but they remain uninitialized until evaluation. Therefore, you have to declare a class before you can use it.

Hoisting is an essential concept in JavaScript, and understanding it can help you avoid bugs and errors in your code.

### call() and bind()
`call()` method makes a function invocation which allows you to set `this` inside a function. It also allows you pass arguments specific to this function invocation.
```javascript
    const firstName = {
        name: 'Rajesh',
        getFullName: function(){
            console.log(this.name)
        }
    }
    const lastName ={
        name: 'Kumar',
        getFullName: function(){
            console.log(firstName.getFullName.call(lastName.name) + ' '+ this.name);
            console.log(this.name)
        }
    }

    lastName.getFullName.call(firstName)
```
`bind()` also makes a function invocation but returns a new function with the this keyword assigned to the specific object. It does not make the function invoke immediately.
```javascript
    const lastName = {
        name: 'Kumar',
        getFullName: function(){
            console.log(this.name)
        }
    }

    setTimeout(lastName.getFullName.bind(lastName), 3*1000)

```

### Object.create()?
In JavaScript, the Object.create() method is used to create a new variable in prototype. then all property of obj will be inserted into the Prototype of obj. At this moment object property is blank but all property is present in the prototype of obj. So we can access property of obj from the prototype of Obj.

```javascript
    const obj = Object.create({ height: 20 }) // obj.Prototype.height = 20
    console.log(obj.height) // 20

    delete obj.height

    console.log(obj.height) // 20
```

### What is interface?
An **interface** in JavaScript is a way to describe the methods that an object should have, without specifying how those methods are implemented. It acts as a contract for developers who use your code,