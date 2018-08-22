# Leap With Alice Web Development JavaScript Introduction and Documentation Standards Best Practices:

# Table of Contents:
### 1. Commenting &amp; Documentation *(read: styleguide)*

### 2. General JavaScript Intro + Best Practice
   - JavaScript Keywords
   - General Guidelines 
	     1. Avoiding Global Namespace
	     2. Declare Functions and Variables
	     3. Declare Expressions cleanly
	     4. Beware of JavaScript Type Conversion
	     5. Comparison Operators, Confusion, and You

### 3. ES6 Syntax and Modularizing the React Workspace
- Modules and Grouping Components

### 4. Summary and Important React Specific Notes

# 1. StyleGuide &amp; Naming Conventions:

Commenting should describe each function and purpose, but not make the function more confusing. You are describing functionality, not giving your life story. 
P.S. Don't be afraid of whitespace

### Variable Names:
- **camelCase** for identifier names (variables and functions).
- All names start with a **lowercaseLetter**.

### Spaces Around Operators:
Always put spaces around operators ( = + - * / ), and after commas:

#### Examples:
```js
var x = y + z;  
var values = []; // initialize array first
values.push("Volvo",  // then add values 
			"Saab",   
			"Fiat"
		   );
console.log(values); // result: ["Volvo", "Saab", "Fiat"]
```


##  General Rules for Statements:

-   Put the opening bracket at the end of the first line.
-   Use one space before the opening bracket.
-   Put the closing bracket on a new line, without leading spaces.
-   Do not end a complex statement with a semicolon.

### Functions:
```js
function  toCelsius(fahrenheit) {  
    return  (5  /  9) * (fahrenheit -  32);  
}
```

### Loops:
```js
for  (i =  0; i <  5; i++) {  
x += i;  
}
```

### Conditionals:
```js
if  ( time <  20 ) {  
greeting =  "Good day";  
}  else  {  
greeting =  "Good evening";  
}
```

## Object Rules

General rules for object definitions:

-   Place the opening bracket on the same line as the object name.
-   Use colon plus one space between each property and its value.
-   Use quotes around string values, not around numeric values.
-   Do not add a comma after the last property-value pair.
-   Place the closing bracket on a new line, without leading spaces.
-   Always end an object definition with a semicolon.

### Example
```js
var  person = {  
firstName:  "John",  
lastName:  "Doe",  
age:  50,  
eyeColor:  "blue"  
};
```

## Naming Conventions

-   Variable and function names written as  **camelCase**
-   Constants (like PI) written in  **UPPERCASE**
 - Hyphens can be mistaken as subtraction attempts. Hyphens are NOT    	allowed in JavaScript names.

#### Common Errors in JS [Common Mistakes](https://www.w3schools.com/js/js_mistakes.asp)

#### If you still want/ need more info on javascript specific content please reference the  [MDN Dev Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

# 2. JavaScript General Guidelines

## Javascript Keywords

### [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_2015)
### Reserved keywords as of ECMAScript 2015
(Hover over a word to learn more)

-   [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.")
-   [`case`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.")
-   [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch "The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.")
-   [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class "The class declaration creates a new class with a given name using prototype-based inheritance.")
-   [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const "The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request.")
-   [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue "The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.")
-   [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.")
-   [`default`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/default "The default keyword can be used in two situations in JavaScript: within a switch statement, or with an export statement.")
-   [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete "The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.")
-   [`do`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while "The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.")
-   [`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.")
-   [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export "The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.")
-   [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class "The class declaration creates a new class with a given name using prototype-based inheritance.")
-   [`finally`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch "The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.")
-   [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.")
-   [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function "The function declaration defines a function with the specified parameters.")
-   [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else "The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.")
-   [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
-   [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in "The in operator returns true if the specified property is in the specified object or its prototype chain.")
-   [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof "The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.")
-   [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.")
-   [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return "The return statement ends function execution and specifies a value to be returned to the function caller.")
-   [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super "The super keyword is used to access and call functions on an object's parent.")
-   [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.")
-   [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.")
-   [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.")
-   [`try`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch "The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.")
-   [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof "The typeof operator returns a string indicating the type of the unevaluated operand.")
-   [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var "The var statement declares a variable, optionally initializing it to a value.")
-   [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void "The void operator evaluates the given expression and then returns undefined.")
-   [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.")
-   [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with "The with statement extends the scope chain for a statement.")
-   [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield "The yield keyword is used to pause and resume a generator function (function* or legacy generator function).")

#  2. General Guidelines:

### This section is for an overview, and will get more in detail in a later section if desired.

### A. Avoid Global Variables: 
  Know the difference between variable declarations. [Read More](https://www.w3schools.com/js/js_best_practices.asp)

### B. Declare Functions and Variables at the top of the appropriate scope. 
 Know the appropriate scope for your variable and type of declaration you should use in JavaScript [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
 
### C. Never declare Number, String, or Boolean Objects, there are better ways to declare
 
### D. Beware of Automatic Type Conversions
JavaScript is loosely typed [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Dynamic_typing)

### E. Comparison Operators ( Use === Comparison)


#
## A. Avoid Global Variables

When you declare a variable outside of any function, it is called a **`global`** variable, because it is available to any other code in the current document. 
When you declare a variable within a function, it is called a
**`local`**  variable, because it is available only within that function. With es6 (in React) There is also a *block* scope which I will discuss further in the declaring variables section.

### Example of Global Variables
```js
//Initiate count  
var count =  0;  
// Function to increment count  
function  add() {  
	count += 1;  
}  
// Call add() 3 times  
add();  
add();  
add();  
  
// The counter is now 3
```

### Local Variable Declaration and Functionality
Example:
```js
const add = (function(){
	let counter = 0;
    return ()=>{
    	counter += 1; 
		return counter;
    }
})();
add();
```
- The variable  **add**  is assigned the return value of a self-invoking function.

- The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

- This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

- This is called a JavaScript  **closure.**  It makes it possible for a function to have "**private**" variables.

- The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

For More On JS Closures: [Read Here](https://www.w3schools.com/js/js_function_closures.asp) 

## B.  Variable / Functional Declarations at the Top of Scope:

It is a good coding practice to put all declarations at the top of each script or function.

This will:

-   Give cleaner code
-   Provide a single place to look for local variables
-   Make it easier to avoid unwanted (implied) global variables
-   Reduce the possibility of unwanted re-declarations


Types of Variable Declarations:

[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) =  Declares a variable, optionally initializing it to a value.

[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) = Declares a block-scoped, local variable, optionally initializing it to a value.

[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const ) = Declares a block-scoped, read-only named constant.

**var**  vs. **let**
Check out the following example:

**var**
```js
if (true) {
  var x = 5;
}
console.log(x);  
// x is 5
```
**let**

```js
if (true) {
  let y = 5;
}
console.log(y);  
// ReferenceError: y is not defined
```

*Variable Hoisting*: 
All `var` statements in a function should be placed as near to the top of the function as possible. It will be *hoisted* if not declared at the top, meaning JavaScript will move the declaration to the top for you, but this is not best practice and you should not rely on it.
[Read More on Variable Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_hoisting)

### Function Declaration:
**Always** initialize a function *before* using it.
```js
// Declare and initiate at the beginning 
var firstName = "",
lastName = "",
price = 0,          		   
discount = 0,  		
fullPrice = 0, 
tax = 0,
myArray = [],  
myObject = {};

// Declare Functions:
function foo() {
firstName ="Jimmy";
  console.log(firstName);
}

var baz = function() {
  price = 15;
  tax = 10;
  discount = 5;
  fullPrice = (price + tax) - discount;
  console.log(fullPrice);
};

if (foo(); //"Jimmy";
baz(); //"20";
```
 
## C. Never Initialize a Number, String, or Boolean as Objects, there are Better ways to declare Them

**In these examples, we prefer to declare like x and *NOT* like y.**
```js
var x = "John";  
var y = new String("John");  
console.log(x === y);
/*console log = false 
because x is a string and y is an object.*/
```
or
```js
var x = new String("John");  
var y = new String("John");  
console.log(x == y) 
// console logs false because you cannot compare objects.
```

Keep your declarations like the following:
```js
var x1 = {}; // new object 
var x2 = ""; // new string 
var x3 = 0; // new number  
var x4 = false; // new boolean  
var x5 = []; // new array   
var x6 = /()/; // new regexp   
var x7 = function(){}; // new function
```
 
## D. Beware, Beware the Automatic Type Conversions

For example, you could define a variable as follows:
```js
var answer = 42;
```
And later, you could assign the same variable a string value, for example:
```js
answer = 'Thanks for all the fish...';
```

Because JavaScript is dynamically typed (read: loosely typed), this assignment does not cause an error message.

[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Dynamic_typing)

## 5. Comparison Operators ( Use === Comparison)
 
 The == comparison operator always converts (to matching types) before comparison.

The === operator forces comparison of values and type

#### (==) examples:
```js
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1 == object2 //false
0    == undefined  // false
null == undefined  // true
```

#### (===) examples:
```js
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 //false
```


# 3. ES6 Specific Syntax &amp; Modularization of React Components

## ES6 Useful Features for React-Native functionality
These are the ES6 features that I believe to be most important / relevant to this project:
Note: Some will look slightly different constructed using React's Components, but this will give you the initial idea

-   [Arrows](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
-   [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   [let + const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
-   [Iterators + for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
-   [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
### If you're too lazy to check the MDN docs here are some quick examples for you:

### Arrow Function Example:
```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
//this function returns the length of each material 
console.log(materials.map(element => element.length));
// expected output: Array [8, 6, 7, 9]
```
[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
# 
### Classes Example:
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  position(x, y) {
    this.x = 400px;
    this.y = 200px;
  }
}
```
[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
# 

### Let + Const:
Technically already reviewed, but

[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
Declares a variable, optionally initializing it to a value.

[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
Declares a block-scoped, local variable, optionally initializing it to a value.

[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
Declares a block-scoped, read-only named constant.

 [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)

#

### Iterators:

### Difference between  `for...of`  and  `for...in`

Both  `for...in`  and  `for...of`  statements iterate over something. The main difference between them is in what they iterate over.

The  [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)  statement iterates over the  [enumerable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)  of an object, in an arbitrary order.

The  `for...of`  statement iterates over data that [iterable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables)  defines to be iterated over.

**Iterating over an array:**
```js
let iterable = [10, 20, 30];

for (let i of iterable) {
  i++;
  console.log(i);
}
// 11
// 21
// 31

for (let i in iterable){
 i++;
 console.log(i);
 }
 // 1
 // 2
 // 3
```

[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)



## Promises:
(I decided to give promises more room because they rock)

Unlike old-style passed-in callbacks, a promise comes with some guarantees:

-   Callbacks will never be called before the  [completion of the current run](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Run-to-completion)  of the JavaScript event loop.
-   Callbacks added with `[then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)`  even  _after_  the success or failure of the asynchronous operation, will be called, as above.
-   Multiple callbacks may be added by calling `[then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)`  several times. Each callback is executed one after another, in the order in which they were inserted.

One of the great things about using promises is  **chaining**.
### Chaining:
```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```
In the old days, doing several asynchronous operations in a row would lead to the classic callback "hell":

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

With promises and arrow functions, look like this:
```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```
[Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)


## Modularizing the React Workspace
Sources:
[How to Better Organize React Apps](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
[Why React Devs should Modularize](https://medium.com/@alexmngn/why-react-developers-should-modularize-their-applications-d26d381854c1)
[JavaScript Module Pattern in depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

First, I want to provide an ideal / modular file base architecture:
```js
/src  
  /components   
    /Button   
    /Notifications  
      /components  
        /ButtonDismiss    
          /images  
          /locales  
          /specs   
          /index.js  
          /styles.scss  
      /index.js  
      /styles.scss

  /scenes  
    /Home   
      /components   
        /ButtonLike  
      /services  
        /processData  
      /index.js  
      /styles.scss

    /Sign   
      /components   
        /FormField  
      /scenes  
        /Login  
        /Register   
          /locales  
          /specs  
          /index.js  
          /styles.scss

  /services  
    /api  
    /geolocation  
    /session  
      /actions.js  
      /index.js  
      /reducer.js  
    /users  
      /actions.js  
      /api.js  
      /reducer.js

  index.js   
  store.js
  ```
In this example, you can see how each module is grouped with similar components. Part of Modular Design:
> each component, scene or service (a feature) has everything it needs to work on its own, such as its own styles, images, translations, set of actions as well as unit or integration tests. 

Grouping Components based on utilization will be huge. Keeping folders, components, and modules separate and with like-content is very important. 


# 4 Summary:

## Declarations:
### Variable Declarations:

[`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) =  Declares a variable, optionally initializing it to a value.

[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) = Declares a block-scoped, local variable, optionally initializing it to a value.

[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const ) = Declares a block-scoped, read-only named constant.

### Declaring Objects in JavaScript
```js
var x1 = {}; // new object 
var x2 = ""; // new string 
var x3 = 0; // new number  
var x4 = false; // new boolean  
var x5 = []; // new array   
var x6 = /()/; // new regexp   
var x7 = function(){}; // new function
```
### Declaring a Function:
You can name a function
```js
function foo() {
firstName = "Rexxar";
  console.log(firstName);
}

var baz = function() {
	console.log("Me Go Face, Taunt is Cheat");
}

foo();
baz();
```

**Iterating over an array:**
```js
let iterable = [10, 20, 30];

for (let i of iterable) {
  i++;
  console.log(i);
}
// 11
// 21
// 31

for (let i in iterable){
 i++;
 console.log(i);
 }
 // 1
 // 2
 // 3
```
