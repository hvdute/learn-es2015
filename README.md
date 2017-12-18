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
- Set key and value: `myMap.set(key, value)` -
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

2. Enhancing object literals

Object literals in JavaScript now have some new built-in methods that can be used immediately without initializing. For example:

```javascript
let myCat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("purr".repeat(times));
  },
  run(times) {
    console.log("run".repeat(times));
  }
};
```

Some new built-in methods of JS object literals:

- Object:

  - Property value shorthand:

  ```javascript
  let name = 'Dung Hoang';
  let person = {
    name, // this is equal to name: name,
    age: 16
  }
  ```

  - Computed property keys. With support of string template literal. We can use bracket notation with string template to have computed property keys:

  ```javascript
  let userId = 'asdbnmdfnzajsldkfma';
  let user = users[`${fromGlobalId(userId)}`];
  // fromGlobalId(userId) which may return some string results...
  ```

  - Method definition shorthand:
  ```javascript
  let object = {
    myFunc: function(params) {},
    myNewFunc(params) {},
    myStringProccessor`
      some string template,
      SQL query, etc
    `
    // this will send all the string template to myStringProccessor as a param, didn't see that coming, WTF :)))
  }
  ```

3. Arrow function

Sometimes, it's called fat-arrow function, an abreviated syntax for working with functions (which can be used for passing parameters,...). Some notable points:

- Its doesn't have a name, but we can use the unnamed function it returned an assign to a variable:

```javascript
let sayHello = () => { /* body of the function... */ };
```

- If the body of the function only have one statement, we can ommit the curly brackets.

```javascript
let sayHello = () => console.log(''Hello buddy!);
```

- If the function body only have a single statement or a combined expression, arrow function will always return the returned value of that statement or that expression.

```javascript
let myAge = (birthYear) => 2017 - birthYear;
myAge(1995); // return 22
// or we can wrap the expression for clearer reading.
// ............... => (2017 - birthYear);
```

- If we only have one parameter, we can ommit the parenthesises:

```javascript
let sayHello = name => console.log(`Hello Mr/Ms ${name}`);
sayHello("Dung Hoang"); // return 'Hello Mr/Ms Dung Hoang'
```

- Arrow function 'lexical' `this`: An arrow function doesn't have its own `this` like the normal function. It uses the lexical `this` of the parent scope.

```javascript
function Person() {
  this.name = "Default name";

  let sayIntro = () => {
    console.log(this.name);
  };
  sayIntro(); // return "Default name"
}
```

4. Destructuring assignments

This is a new way to extract data from array, object which is more convenient than the traditional way.

- Array destructuring

```javascript
let myArr = [4, 5, 56];
let [a, b] = myArr;
// a = 4, b = 5
// now we can swapping our two a and b variables
[a, b] = [b, a];
// now a = 5, b = 4
/// many use cases of array destructuring can be found on MDN documentation.
```

- Object destructuring

```javascript
let person = {
  name: 'Dung Hoang',
  age: 16,
  email: 'hvd.ute@gmail.com'
};

let { name, age } = person;
// name = 'Dung Hoang', age = 16
// we can also assign extracted property to new name
let { email: userEmail } = person;
// userEmail = 'hvd.ute@gmail.com'

// destructuring object as function params
function showInfo({ name, age, email }) {
  console.log(`User name: ${name}`);
  console.log(`User age: ${age}`);
  console.log(`User email: ${email}`);
}
showInfo(person); // ...
```

5. Generators

Generator is a function that can be paused and resumed. It usually be used when dealing with asynchronous task....

```javascript
function* count(number) {
  let i = 0;
  while (i < number) {
    yield i;
    i++
  }
  return true; // return something when the generator has done.
}
let myCounter = count(4);
myCounter.next();
// return an object
// {
//   value: 0, // this is the value returned by the first yield call
//   done: false // there are still yield calls, so done still be false
// }
myCounter.next().value; // return 1 and so on for the future calls.....
// the last next() call after no more yield call will return an object
```

6. Symbols

Symbol is new primitive type in ES6. A symbol is a unique value that can be used as property keys,...

```javascript
let mySecretKey = new Symbol();
let myWallet = {
  cash: 5000,
  // ....
};
// now i put my secret at a secret position that only mySecretKey can reveal it.
myWallet[mySecretKey] = "This is a secret...";
console.log(mySecretKey); // Symbol()
console.log(myWallet['Symbol()']); // undefined
console.log(myWallet[Symbol()]); // undefined
console.log(myWallet[mySecretKey]); // "This is a secret..."
```

7. Iterators

The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for..of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

- `[Symbol.iterator]` - A zero arguments function that returns an object, conforming to the iterator protocol.

```javascript
let myName = "Dung Hoang";
myIterator = myName[Symbol.iterator](); // return a iterable object (a generator)
myIterator.next(); // return { value: 'D', done: false }
[...myIterator]; // return ["u", "n", "g", " ", "H", "o", "a", "n", "g"]

// the returned iterable object can also be iterated by for..of syntax
```

### **4. Asynchronous features**

1. Promises

Promise is a native API of Javascript that allow us to handle asynchronous task in a more friendly way.
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

**Basic usage**

- Promise() constructor take a *executor* (a function) which receive two callback as params - `resolve`/`reject`.
- Inside the *executor*, we call asynchronous tasks, when that task complete, we `resolve` the received data or `reject` if errors happened.
- Data we `resolve` will be passed to the callback of `.then()` method of the Promise instance.
- Errors or anything we `reject` will be passed to callback of `.catch()` method....

For example:

```javascript
function getUsers() {
  return new Promise((resolve, reject) => {
    fetch('/api/users', {
      //.......
    }).then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

let pendingUsers = getUsers();
pendingUsers.then(users => {
  // do something with those users,
  users.map(user => {
    console.log(user);
  });
}).catch(err => {
  throw new Error(err);
});
```

2. Fetch API

Well JavaScript has it's own built-in clean way now. Along comes the Fetch API a new standard to make server request jam-packed with promises and all those things we learned to love over the years.

```javascript
fetch('http://httpbin.org/get')
  .then(response => {
    // this reponse object contains many methods to deal with various type of response data
    // this example, we processing returned JSON
    let jsonValue = response.json(); // this json() method return a Promise
    jsonValue.then(data => {
      console.log(data);
      // return an json object.
    })
    .catch(err => err);
  })
  .catch(err => err);
```

3. Async/Await and uasge with Fetch API

With async/await, we can write asynchronous code in a more synchronous way.

```javascript
async function getUsers() {
  const response = await fetch('http://httpbin.org/get');
  const users = await response.json();
  return users;
}
const data = await getUsers();
console.log(data);
```

### **5. ES6 Classes**

Basically, this is just a subset, or a new conveniently way to write OOP in JavaScript. There is no new features added. Its still protoype based. Below is an example to write an class vs prototype traditional way.

```javascript
// ES6 way
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello! I'm ${this.name}. I'm ${this.age} years old now.`);
  }
}

let dungHoang = new People('Dung', 15);
// call the sayHello method
dungHoang.sayHello();
// return Hello! I'm Dung. I'm 15 years old now....

// traditional way
function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.sayHello = function() {
  console.log(`Hello! I'm ${this.name}. I'm ${this.age} years old now.`);
};

let dungHoang = new People('Dung', 15);
dungHoang.sayHello();
```

