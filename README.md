# **ES6 Training Course**
## _Notes, snippets and demo by dunghv@dgroup.co_

### **1. What is ECMAScript 6 (ES6)**  
ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now.

### **2. Transpiling ES6**  
1. Introduction to Babel  
Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.
2. Transpiling with Webpack  
Using `Webpack` and `babel-loader` for transpiling and bundle our ES6 code for a browser friendly version.  
An example for `webpack` config with `babel-loader`  
    ```javascript - webpack.config.js
    module.exports = {
      entry: './index.js',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    }
    ```
    This Webpack config will traspiling our code that contains ES6 code to ES5 version, bundle it into a bundle called `bundle.js`

### **3. ES6 Syntax**
1. Let keyword:  
In ES5, we have to deal with scope and hoisting in a tricky way. There are three main tricky things we have in ES5:

    - Variables declared by `var` keyword only have local scope in function body. That means there is no block-scope in javascript using `var` keyword.
    - Variable declared using `var` keyword can be re-declared accidently with no errors or warnings
    - In a scope, `function` and `var` declared variables with be move to the top of that scope when compiling. This is called `hoisting`.  

    Now with ES6, variables declared with `let` keyword will have block-scope and can not be re-declared.  
        `let varName = <....>;`

2. `const` keyword  
In ES5, we have no way to define constants. Now ES6 provides us `const` keyword. With `const` keyword, we can define variables that cannot be re-assigned. But if that const is an object. We can still change its properties...

    _Please take a look at `snippets/let-const.js` file for examples about let, const keyword._

3. Template string  
In traditional JS, we used to concat string by `+` operator or String.prototype.concat() like this:  
    ```javascript
    let str = "Dung" + " Hoang";
    let str2 = "dunghv@dgroup.co";
    let res = str.concat(" ", str2); // => "Dung Hoang dunghv@dgroup.co"
    ```
    Now with ES6, all this uncomfortably things has gone. Template string is here for the rescue.  
    ```javascript
    let config = {
      host: 'localhost',
      port: 3000,
      scheme: 'https'
    };
    let URI = `${config.scheme}://${config.host}:${config.port}/`;
    // URI => https://localhost:3000/
    ```
    Inside `${expression}`, we can put anything that can evalute to String. Also, JS don't care about spaces.

4. Spread operator  
Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. For examples, please look at `snippets/spread.js`.

5. Maps  
The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.  
  - Syntax: `new Map()`
  - Set key and value: `myMap.set(key, value)`  
    key and value here can be anything, anytype.
  - Get entry using its key: `myMap.get(key);`
  - Get all entries as an Iterable object: `myMap.entries()`
  - Get all keys as an Iterable object: `myMap.keys()`
  - Get all values as an Iterable object: `myMap.values()`

6. Sets  
The Set object lets you store unique values of any type, whether primitive values or object references. Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection. 
  - Syntax: `new Set()`
  - Add item to Set: `mySet.add(item)`  
    `item` can be anything
  - Delete item from set: `mySet.delete(value)`
  - Loop through items: `mySet.forEach(item => {.....})`

7. For..of loop  
The for...ofcreates a loop iterating over iterable objects (including Array, Map, Set, String, TypedArray, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

_Example can be found in `snippets/for-of.js`_

### **4. ES6 Functions and Objects**  

1. Default parameters  
Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.  

_Example can be found in `snippets/default-param.js`_