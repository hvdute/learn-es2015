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