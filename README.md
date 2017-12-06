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